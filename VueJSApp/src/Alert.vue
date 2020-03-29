<template>
  <div>
    <transition name="fadeTransition">
      <div class="ui message success" v-if="visible">lorem ipsum</div>
    </transition>
    <transition name="bounce" appear>
      <div class="ui message success" v-if="visible">lorem ipsum</div>
    </transition>
    <button @click="toggle">Toogle et Bounce</button>

    <transition-group name="bounce" tag="ul">
      <li v-for="item in items" :key="item">{{item}}</li>
    </transition-group>
    <button @click="add" class="ui button">Add</button>
    <button @click="shuffle" class="ui button primary">shuffle</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
      items: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
    add() {
      let random = Math.random() * 10;
      this.items.push(random);
    },
    shuffle() {
      this.items = [2, 4, 5, 3, 6];
    }
  }
};
</script>

<style scoped>
/* C'est l'état qu'on va avoir en début et en fin de transition */
.fadeTransition-enter-active,
.fadeTransition-leave-active {
  transition: opacity 1s, transform 1s;
}

/* Lorsque que tu commences -enter et lorsque tu finis -leave-active */
.fadeTransition-enter,
.fadeTransition-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

/* Exemple sur la page : https://fr.vuejs.org/v2/guide/transitions.html */
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

/* ADD pour le shuffle */
.bounce-move {
  transition: transform 5s;
}
</style>