<template>
  <div class="col-3">
    <div
      class="card"
      :id="'player-' + data.idPlayer"
      :style="[ {'background-color': data.theme.color} ]"
      :class="{ pulse: isActived }"
      :data-idPlayer="data.theme.id"
      @change="data.isActive"
    >
      <div class="card-body">
        <p class="card-text">
          {{data.namePlayer}}
          <span class="badge badge-light">{{data.totalPoints}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
    index: Number
  },
  computed: {
    isActived() {
      return this.data.isActive;
    }
  }
};
</script>

<style scoped>
.pulse {
  box-shadow: 0 0 0 rgba(204, 169, 44, 0.4);
  transform: scale(1);
  animation: pulse 1s infinite;
}
.pulse:hover {
  animation: none;
}

@-webkit-keyframes pulse {
  0% {
    transform: scale(0.95);
    -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44, 1);
  }
  70% {
    transform: scale(1);
    -webkit-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
  }
  100% {
    transform: scale(0.95);
    -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
  }
}
@keyframes pulse {
  0% {
    transform: scale(0.95);
    -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 1);
    box-shadow: 0 0 0 0 rgba(204, 169, 44, 1);
  }
  70% {
    transform: scale(1);
    -moz-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
    box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
  }
  100% {
    transform: scale(0.95);
    -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
    box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
  }
}
</style>