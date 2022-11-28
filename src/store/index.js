import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allCategories: [],
    allPositions: [],
    categoryWithPositions: {},
    positionById: {},
  },
  getters: {},
  mutations: {
    getAllCategories(state, categories) {
      state.allCategories = categories;
    },
    getCategory(state, category) {
      state.categoryWithPositions = category;
    },
    createCategory(state, category) {
      state.allCategories.push(category);
    },
    editCategory(state, category) {
      state.allCategories = state.allCategories.map((cat) => {
        return cat.id === category.id ? category : cat;
      });
    },
    deleteCategory(state, category) {
      state.allCategories = state.allCategories.filter(
        (cat) => cat.id !== category.id
      );
      state.allPositions = state.allPositions.filter(
        (pos) => pos.categoryId !== category.id
      );
    },
    getAllPositions(state, positions) {
      state.allPositions = positions;
    },
    getPosition(state, position) {
      state.positionById = position;
    },
    createPosition(state, position) {
      state.categoryWithPositions.positions.push(position);
    },
    deletePosition(state, position) {
      state.categoryWithPositions.positions =
        state.categoryWithPositions.positions.filter(
          (pos) => pos.id !== position.id
        );
    },
    editPosition(state, position) {
      state.categoryWithPositions.positions =
        state.categoryWithPositions.positions.map((pos) => {
          return pos.id === position.id ? position : pos;
        });
    },
  },
  actions: {
    getAllCategories({ commit }) {
      axios
        .get(`http://${window.location.hostname}:3000/categories/`)
        .then((response) => commit("getAllCategories", response.data));
    },
    getCategory({ commit }, id) {
      axios
        .get(`http://${window.location.hostname}:3000/categories/${id}`)
        .then((response) => commit("getCategory", response.data));
    },
    createCategory({ commit }, formData) {
      console.log(formData);
      axios
        .post(`http://${window.location.hostname}:3000/categories/`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => commit("createCategory", response.data));
    },
    editCategory({ commit }, { formData, id }) {
      axios
        .patch(
          `http://${window.location.hostname}:3000/categories/${id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => commit("editCategory", response.data));
    },
    deleteCategory({ commit }, id) {
      axios
        .delete(`http://${window.location.hostname}:3000/categories/${id}`)
        .then((response) => commit("deleteCategory", response.data));
    },

    getAllPositions({ commit }) {
      axios
        .get(`http://${window.location.hostname}:3000/positions/`)
        .then((response) => commit("getAllPositions", response.data));
    },
    getPosition({ commit }, id) {
      axios
        .get(`http://${window.location.hostname}:3000/positions/${id}`)
        .then((response) => commit("getPosition", response.data));
    },
    createPosition({ commit }, formData) {
      axios
        .post(`http://${window.location.hostname}:3000/positions/`, formData)
        .then((response) => commit("createPosition", response.data));
    },
    deletePosition({ commit }, id) {
      axios
        .delete(`http://${window.location.hostname}:3000/positions/${id}`)
        .then((response) => commit("deletePosition", response.data));
    },
    editPosition({ commit }, { formData, id }) {
      axios
        .patch(
          `http://${window.location.hostname}:3000/positions/${id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => commit("editPosition", response.data));
    },
  },
  modules: {},
});
