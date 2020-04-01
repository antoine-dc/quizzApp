<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <!-- Questions -->
    <div class="row">
      <div
        v-for="(question, index) in getQuestions"
        :key="index"
        class="col-md-2 card"
        :style="[ question.disabled   ? { 'background-color': question.theme.color } :  {'background': '#ecf0f1'}]"
        @click.prevent="question.disabled ? chooseQuestion(question) : {}"
      >
        <div class="card-body">
          <p class="card-text">{{ question.disabled ? index : '' }}</p>
        </div>
      </div>
    </div>
    <!-- Players -->
    <div class="row align-items-end">
      <div v-for="(player, index) in getPlayer" :key="index" class="col-3">
        <div
          class="card"
          :id="'player-' + player.idPlayer"
          :class="{ pulse: player.isActive }"
          :style="[ {'background-color': player.theme.color} ]"
          :data-idPlayer="player.theme.id"
          @change="idActivePlayer"
        >
          <div class="card-body">
            <p class="card-text">
              {{player.namePlayer}}
              <span class="badge badge-light">{{player.totalPoints}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Question-->
    <div
      class="modal fade"
      :class="{ show: activeModal }"
      tabindex="-1"
      role="dialog"
      aria-labelledby="ModalQuestion"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div
          class="modal-content"
          :style="[questionActive !== null  ? { 'background-color': questionActive.theme.color } :  {}]"
        >
          <div class="modal-header">
            <h5 class="modal-title">{{questionActive !== null ? questionActive.theme.name : ''}}</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click.prevent.stop="activeModal=!activeModal"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">{{questionActive !== null ? questionActive.question: ''}}</div>

          <div class="modal-footer answer" :class="'answer-' + 0 " v-show="showAnser">
            {{questionActive !== null ? questionActive.answer : ''}}
            <div class="row">
              <div class="col-md">
                <form>
                  <input
                    id="checkAnswer"
                    type="checkbox"
                    :checked="isChecked"
                    data-toggle="toggle"
                    data-on="Vrai"
                    data-off="Faux"
                    data-onstyle="success"
                    data-offstyle="danger"
                    data-width="100"
                  />
                </form>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-light"
              @click.prevent.stop="showAnser = !showAnser"
              v-show="!showAnser"
            >Voir la solution</button>
            <button
              type="button"
              class="btn btn-dark"
              data-dismiss="modal"
              @click.prevent.stop="checkAnswer()"
              v-show="showAnser"
            >Valider</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal End-->
    <div
      class="modal fade"
      :class="{ show: showModalEnd }"
      tabindex="-1"
      role="dialog"
      aria-labelledby="ModalQuestion"
      aria-hidden="true"
      style="background-color : #000"
    >
      <div class="modal-dialog modal-dialog-centered modal-end" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Fin de la partie</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click.prevent.stop="showModalEnd=!showModalEnd"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">Les scores{{}}</div>

          <div class="modal-footer">
            <button type="button" class="btn btn-dark" data-dismiss="modal">Recommencer</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* Les classes */
import Question from "../class/Question.js";
import datas from "../data.js";

/* Les components */
import question from "@/components/Question";
import player from "@/components/Player";

/* Init */

export default {
  name: "Main",
  data() {
    return {
      msg: "App Quizz",
      themes: datas.themes,
      players: datas.players,
      idActivePlayer: 1,
      activeModal: false,
      questionActive: null,
      showAnser: false,
      isChecked: false,
      maxQuestions: 5,
      countQuestions: 0,
      showModalEnd: false
    };
  },
  computed: {
    // On récupérè toutes les questions et on les mélange
    getQuestions() {
      let tabQuestions = [];
      this.themes.forEach(theme => {
        theme.questions.forEach(q => {
          tabQuestions.push(
            new Question(
              q.question,
              q.answer,
              theme.id,
              theme.name,
              theme.color
            )
          );
        });
      });

      return _.shuffle(tabQuestions); // use lodash
    },
    getPlayer() {
      return this.players;
    }
  },
  methods: {
    chooseQuestion(question) {
      this.questionActive = question;
      this.activeModal = true;
    },
    checkAnswer() {
      let goodAnswer = $("#checkAnswer").prop("checked");
      let idTheme = this.questionActive.theme.id;

      if (goodAnswer) {
        if (idTheme === this.idActivePlayer) {
          // Si c'est le theme du joueur
          this.players[this.idActivePlayer - 1].totalPoints += 2;
        } else if (idTheme === 0) {
          // Si c'est le theme Culture Général
          this.players[this.idActivePlayer - 1].totalPoints += 1;
        } else {
          // Si c'est le theme d'un autre
          this.players[this.idActivePlayer - 1].totalPoints += 3;
        }
      }

      // On passe le tour au joueur suivant
      this.players[this.idActivePlayer - 1].isActive = false;

      if (this.idActivePlayer < datas.players.length) {
        this.idActivePlayer++;
      } else {
        this.idActivePlayer = 1;
      }
      this.players[this.idActivePlayer - 1].isActive = true;

      // On désactive la case de la question posée
      this.questionActive.disabled = false;

      // On incrémente le compteur total de question
      this.countQuestions++;

      if (this.countQuestions === this.maxQuestions) {
        this.showModalEnd = true;
      }

      // Initialisaiton du modal
      this.activeModal = false;
      this.showAnser = false;
      this.isChecked = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "../assets/css/style.css";
</style>
