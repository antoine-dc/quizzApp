<template>
  <div
    class="col-md-2 card"
    :style="[!activeModal ? {'background-color': data.theme.color} : {'background-color': '#ecf0f1'}]"
    @click.prevent="chooseQuestion()"
  >
    <div class="card-body">
      <p class="card-text">{{ index }}</p>
    </div>

    <!-- Modal -->
    <modal :data="data" :index="index" :class="{show:activeModal}" :players="players"></modal>
  </div>
</template>

<script>
import modal from "@/components/Modal";
export default {
  name: "Question",
  props: {
    data: Object,
    players: Array,
    index: Number
  },
  components: {
    modal
  },
  data() {
    return {
      activeModal: false
    };
  },
  methods: {
    chooseQuestion() {
      //$("#" + index).addClass("show"); // Avec le jQuery

      this.activeModal = true;
    }
  }
};
</script>

<style scoped>
.show {
  display: block;
  background-color: #00000080;
}
</style>
