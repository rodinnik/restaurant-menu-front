<template>
  <b-form @submit.prevent="createPosition">
    <b-form-input
      v-model="titlePosition"
      placeholder="Название позиции"
    ></b-form-input>
    <b-form-input
      v-model="contentPosition"
      placeholder="Описание позиции"
    ></b-form-input>
    <b-form-file
      v-model="imagePosition"
      :state="Boolean(imagePosition)"
      placeholder="Выберите файл или перетащите его сюда"
      drop-placeholder="Перетащите файл сюда..."
    ></b-form-file>
    <b-button @click="createPosition" variant="primary">Сохранить</b-button>
  </b-form>
</template>

<script>
export default {
  data: () => ({
    titlePosition: "",
    contentPosition: "",
    imagePosition: null,
  }),
  methods: {
    createPosition() {
      this.$emit(
        "create",
        this.titlePosition,
        this.contentPosition,
        this.imagePosition
      );
    },
  },
};
</script>
