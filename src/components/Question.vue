<template>
  <div
    class="col-md-2 card"
    :style="{ 'background-color': data.theme.color }"
    @click.prevent="chooseQuestion(index)"
  >
    <div class="card-body">
      <p class="card-text">{{ index }}{{ /*data.theme.name */}}</p>
    </div>

    <!-- Modal -->

    <div style="display:none">Test {{ index }}</div>
    <div
      class="modal fade"
      :id="index"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div
          class="modal-content"
          :style="{ 'background-color': data.theme.color }"
        >
          <div class="modal-header">
            <h5 class="modal-title">
              {{ data.theme.name }}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click.prevent.stop="closeModal(index)"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            {{ data.question }}
          </div>
          <div class="modal-footer answer" :class="'answer-' + index">
            {{ data.answer }}
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-light"
              @click.prevent.stop="showAnwser(index)"
            >
              Voir la solution
            </button>
            <button
              type="button"
              class="btn btn-dark"
              data-dismiss="modal"
              @click.prevent.stop="closeModal(index)"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data", "index"],
  methods: {
    chooseQuestion(index) {
      $("#" + index).addClass("show");
    },
    closeModal(index) {
      $("#" + index).removeClass("show");
    },
    showAnwser(index) {
      $(".answer-" + index).css("display", "block");
    }
  },
  computed: {
    indexQ() {
      //return this.props.index;
    }
  }
};
</script>

<style scoped>
.card {
  cursor: pointer;
  border: 1px solid rgb(255, 255, 255);
}
.card-text {
  color: aliceblue;
  font-size: 1.5em;
}
.show {
  display: block;
  background-color: #00000080;
}
.modal-content {
  color: #fff;
  text-align: center;
}
.modal-title {
  text-transform: uppercase;
}
.modal-footer,
.modal-title {
  justify-content: center;
}
.answer {
  display: none;
}
</style>
