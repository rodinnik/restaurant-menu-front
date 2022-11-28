<template>
  <b-form @submit.prevent="editPosition">
    <b-form-select
      v-model="selectedPosition"
      :options="optionsPositions"
    ></b-form-select>
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
    <b-button @click="editPosition" variant="primary">Сохранить</b-button>
  </b-form>
</template>

<script>
export default {
  props: {
    positions: Array,
  },
  data: () => ({
    selectedPosition: null,
    titlePosition: "",
    contentPosition: "",
    imagePosition: null,
  }),
  methods: {
    editPosition() {
      this.$emit(
        "edit",
        this.selectedPosition.id,
        this.titlePosition,
        this.contentPosition,
        this.imagePosition
      );
    },
  },
  computed: {
    optionsPositions: function () {
      return this.positions.map((position) => {
        return { value: position, text: position.title };
      });
    },
  },
};
</script>
