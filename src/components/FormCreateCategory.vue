<template>
  <b-form @submit.prevent="createCategory">
    <b-form-input v-model="nameCategory" placeholder="Название"></b-form-input>
    <b-form-file
      v-model="imageCategory"
      :state="Boolean(imageCategory)"
      placeholder="Выберите файл или перетащите его сюда"
      drop-placeholder="Перетащите файл сюда..."
    ></b-form-file>
    <b-button variant="primary" @click="createCategory">Сохранить</b-button>
  </b-form>
</template>

<script>
export default {
  data: () => ({
    nameCategory: "",
    imageCategory: null,
  }),
  methods: {
    createCategory() {
      this.$emit("create", this.nameCategory, this.imageCategory);
    },
  },
};
</script>
