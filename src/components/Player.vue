<template>
  <div class="col-md-3 card" :style="[ {'background-color': data.theme.color} ]">
    <div class="card-body">
      <p class="card-text">
        {{data.namePlayer}}
        <span class="badge badge-light">{{data.totalPoints}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
    index: Number
  }
};
</script>

<style scoped>
</style>