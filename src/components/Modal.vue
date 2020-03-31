<template>
  <div
    class="modal fade"
    :id="index"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content" :style="{ 'background-color': data.theme.color }">
        <div class="modal-header">
          <h5 class="modal-title">{{ data.theme.name }}</h5>
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
        <div class="modal-body">{{ data.question }}</div>
        <div class="modal-footer answer" :class="'answer-' + index">
          {{ data.answer }}
          <div class="row">
            <div class="col-md">
              <form>
                <input
                  :id="'result-' + index"
                  type="checkbox"
                  checked
                  data-toggle="toggle"
                  data-on="Vrai"
                  data-off="Faux"
                  data-onstyle="success"
                  data-offstyle="danger"
                  data-width="100"
                  v-model="ischeck"
                />
                {{ ischeck }}
              </form>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-light"
            @click.prevent.stop="showAnwser(index)"
          >Voir la solution</button>
          <button
            type="button"
            class="btn btn-dark"
            data-dismiss="modal"
            @click.prevent.stop="checkAnswer(index)"
          >Valider</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    data: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data() {
    return { isOpen: false, ischeck: false };
  },
  methods: {
    closeModal(index) {
      $("#" + index).removeClass("show");

      // Dans le HTML :   :class="{show:isOpen}"

      //console.log(this.isOpen);
      //this.isOpen = true;
    },
    showAnwser(index) {
      $(".answer-" + index).css("display", "block");
    },
    checkAnswer(index) {
      let goodAnswer = $("#result-" + index).prop("checked");
      //console.log(tabPlayer);

      console.log(goodAnswer);
    }
  },
  computed: {}
};
</script>

<style>
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
.modal-header {
  border-bottom-color: #dee2e66e;
}
.modal-footer {
  border-top-color: #dee2e66e;
}
.answer {
  display: none;
}
</style>