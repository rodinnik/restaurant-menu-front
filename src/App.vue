<template>
  <div class="app">
    <navbar-menu />
    <b-container fluid><router-view></router-view></b-container>
  </div>
</template>
<script>
import NavbarMenu from "@/components/NavbarMenu.vue";
export default {
  components: { NavbarMenu },
};
</script>
