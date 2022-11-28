<template>
  <b-form @submit.prevent="createCategory">
    <b-form-select
      v-model="selectedCategory"
      :options="optionsCategories"
    ></b-form-select>
    <b-form-input v-model="nameCategory" placeholder="Название"></b-form-input>
    <b-form-file
      v-model="imageCategory"
      :state="Boolean(imageCategory)"
      placeholder="Выберите файл или перетащите его сюда"
      drop-placeholder="Перетащите файл сюда..."
    ></b-form-file>
    <b-button variant="primary" @click="editCategory">Сохранить</b-button>
  </b-form>
</template>

<script>
export default {
  props: {
    categories: Array,
  },
  data: () => ({
    selectedCategory: null,
    nameCategory: "",
    imageCategory: null,
  }),
  methods: {
    editCategory() {
      this.$emit(
        "edit",
        this.selectedCategory.id,
        this.nameCategory,
        this.imageCategory
      );
    },
  },
  computed: {
    optionsCategories: function () {
      return this.categories.map((category) => {
        return { value: category, text: category.name };
      });
    },
  },
};
</script>
