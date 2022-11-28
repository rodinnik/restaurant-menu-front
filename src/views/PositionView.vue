<template>
  <div>
    <h2>{{ $store.state.positionById.title }}</h2>
    <h3>{{ $store.state.positionById.content }}</h3>
    <b-card
      overlay
      :img-src="`http://localhost:3000/${$store.state.positionById.imageName}`"
      img-alt="Изображение карточки"
      text-variant="white"
    ></b-card>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getPosition", this.$route.params.id);
  },
};
</script>
