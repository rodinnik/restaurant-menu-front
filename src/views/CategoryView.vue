<template>
  <div>
    <b-button @click="showModal('modal-form-create-position')"
      >Создать позицию</b-button
    >
    <b-button @click="showModal('modal-form-edit-position')"
      >Редактировать позицию</b-button
    >
    <b-modal
      id="modal-form-create-position"
      hide-footer
      title="Создание позиции"
    >
      <form-create-position @create="createPosition" />
    </b-modal>
    <b-modal
      id="modal-form-edit-position"
      hide-footer
      title="Редактирование позиции"
    >
      <form-edit-position
        @edit="editPosition"
        :positions="$store.state.categoryWithPositions.positions"
      />
    </b-modal>
    <h2>{{ $store.state.categoryWithPositions.name }}</h2>
    <b-row>
      <b-col
        cols="3"
        v-for="position in $store.state.categoryWithPositions.positions"
        :key="position.id"
        ><div @click="deletePosition(position.id)">x</div>
        <b-card
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
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import FormCreatePosition from "@/components/FormCreatePosition.vue";
import FormEditPosition from "@/components/FormEditPosition.vue";
export default {
  components: { FormCreatePosition, FormEditPosition },
  data: () => ({
    category: null,
  }),
  methods: {
    deletePosition(id) {
      this.$store.dispatch("deletePosition", id);
    },
    createPosition(titlePosition, contentPosition, imagePosition) {
      let formData = new FormData();
      formData.append("title", titlePosition);
      formData.append("content", contentPosition);
      formData.append("image", imagePosition);
      formData.append("categoryId", this.$route.params.id);
      this.$store.dispatch("createPosition", formData);
      this.hideModal("modal-form-create-position");
    },
    editPosition(id, titlePosition, contentPosition, imagePosition) {
      let formData = new FormData();
      formData.append("title", titlePosition);
      formData.append("content", contentPosition);
      formData.append("image", imagePosition);
      this.$store.dispatch("editPosition", { formData, id });
      this.hideModal("modal-form-edit-position");
    },
    showModal(idModal) {
      this.$bvModal.show(idModal);
    },
    hideModal(idModal) {
      this.$bvModal.hide(idModal);
    },
  },
  mounted() {
    this.$store.dispatch("getCategory", this.$route.params.id);
  },
};
</script>
