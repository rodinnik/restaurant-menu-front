<template>
  <div>
    <b-button @click="showModal('modal-form-create-category')"
      >Создать категорию</b-button
    >
    <b-button @click="showModal('modal-form-edit-category')"
      >Редактировать категорию</b-button
    >
    <b-modal
      id="modal-form-create-category"
      hide-footer
      title="Создание категории"
    >
      <form-create-category @create="createCategory" />
    </b-modal>
    <b-modal
      id="modal-form-edit-category"
      hide-footer
      title="Редактирование категории"
    >
      <form-edit-category
        @edit="editCategory"
        :categories="$store.state.allCategories"
      />
    </b-modal>
    <h2>Категории меню</h2>
    <b-row>
      <b-col
        cols="4"
        v-for="category in $store.state.allCategories"
        :key="category.id"
        ><div @click="deleteCategory(category.id)">x</div>
        <b-card
          overlay
          :img-src="`http://localhost:3000/${category.imageName}`"
          img-alt="Изображение карточки"
          border-variant="secondary"
          :footer="category.name"
          footer-tag="footer"
          footer-bg-variant="secondary"
          footer-border-variant="white"
          align="center"
          @click="$router.push(`/categories/${category.id}`)"
        >
        </b-card
      ></b-col>
    </b-row>
    <h2>Все блюда</h2>
    <b-row>
      <b-col
        cols="3"
        v-for="position in $store.state.allPositions"
        :key="position.id"
        ><b-card
          overlay
          :img-src="`http://localhost:3000/${position.imageName}`"
          img-alt="Изображение карточки"
          border-variant="secondary"
          :footer="position.title"
          footer-tag="footer"
          footer-bg-variant="secondary"
          footer-border-variant="white"
          align="center"
          @click="$router.push(`/positions/${position.id}`)"
        >
        </b-card
      ></b-col>
    </b-row>
  </div>
</template>

<script>
import FormCreateCategory from "@/components/FormCreateCategory.vue";
import FormEditCategory from "@/components/FormEditCategory.vue";
export default {
  components: { FormCreateCategory, FormEditCategory },
  data: () => ({
    categories: null,
    positions: null,
  }),
  methods: {
    deleteCategory(id) {
      this.$store.dispatch("deleteCategory", id);
    },
    createCategory(nameCategory, imageCategory) {
      let formData = new FormData();
      formData.append("name", nameCategory);
      formData.append("image", imageCategory);
      this.$store.dispatch("createCategory", formData);
      this.hideModal("modal-form-create-category");
    },
    editCategory(id, nameCategory, imageCategory) {
      let formData = new FormData();
      formData.append("name", nameCategory);
      formData.append("image", imageCategory);
      this.$store.dispatch("editCategory", { formData, id });
      this.hideModal("modal-form-edit-category");
    },
    showModal(idModal) {
      this.$bvModal.show(idModal);
    },
    hideModal(idModal) {
      this.$bvModal.hide(idModal);
    },
  },
  mounted() {
    this.$store.dispatch("getAllCategories");
    this.$store.dispatch("getAllPositions");
  },
};
</script>
