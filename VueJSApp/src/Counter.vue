<template>
  <div class="counter">
    {{count}}
    <button class="counter__button" @click="increment">+</button>
  </div>
</template>

<script>
import store from "./store/NotificationsStore.js";
export default {
  //Pour exporter notre objet component
  data() {
    return {
      state: store.state
    };
  },
  computed: {
    count() {
      return this.state.count;
    }
  },
  methods: {
    increment() {
      store.increment();
    }
  }
};
</script>

<style scoped>
* {
  font-weight: bold;
}
</style>

<style scoped src="./assets/css/counter.css">
</style>