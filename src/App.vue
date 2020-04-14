<template>
  <div id="app">
    <headerNav></headerNav>
    <img src="./assets/logo.png" />
    <router-view />
  </div>
</template>

<script>
import datas from "./data.js";
import headerNav from "@/components/Header";
export default {
  name: "App",
  data() {
    return {
      datas: datas
    };
  },
  components: {
    headerNav
  }
};
</script>

<style src="@/assets/css/style.css">
</style>
