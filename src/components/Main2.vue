<template>
  <div class="container">
    <h1>{{ msg }}</h1>

    <div class="row">
      <div class="col-md">
        <button
          type="button"
          class="btn btn-info"
          data-dismiss="modal"
          @click="startGame()"
          v-if="!isStarted"
        >
          Lancer la partie
        </button>
      </div>
    </div>
    <!-- Questions -->
    <div class="row" v-if="isStarted" id="top">
      <div
        v-for="(question, index) in getQuestions"
        :key="index"
        class="col-md-2 card"
        :style="{ backgroundColor: getBgQuestion(question) }"
        @click.prevent="question.disabled ? chooseQuestion(question) : {}"
      >
        <div class="card-body">
          <p class="card-text">{{ question.disabled ? index + 1 : "" }}</p>
        </div>
      </div>
    </div>
    <!-- CountDown Start -->
    <div class="row">
      <div class="col-12 align-self-center">
        <circular-count-down-timer
          style="color:#3498db"
          :initial-value="20"
          :stroke-width="5"
          :seconds-stroke-color="'#3498db'"
          :underneath-stroke-color="'#bdc3c7'"
          :size="150"
          :padding="4"
          :second-label="''"
          :show-second="true"
          :show-minute="false"
          :show-hour="false"
          :show-negatives="false"
          @finish="finishTimerStart"
          v-if="timerStart"
        ></circular-count-down-timer>
      </div>
    </div>
    <!-- End CountDown Start -->
    <!-- Players -->
    <div class="row align-items-end" v-if="isStarted">
      <div v-for="(player, index) in getPlayer" :key="index" class="col-3">
        <div
          class="card"
          :id="'player-' + player.idPlayer"
          :class="{ pulse: player.isActive && !timerStart }"
          :style="[{ 'background-color': player.theme.color }]"
          :data-idPlayer="player.theme.id"
          @change="idActivePlayer"
        >
          <div class="card-body">
            <p class="card-text">
              {{ player.namePlayer }}
              <span class="badge badge-light">{{ player.totalPoints }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- End Players -->

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
          :style="[
            questionActive !== null
              ? { 'background-color': questionActive.theme.color }
              : {}
          ]"
        >
          <div class="modal-header">
            <h5 class="modal-title">
              {{ questionActive !== null ? questionActive.theme.name : "" }}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click.prevent.stop="activeModal = !activeModal"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            {{ questionActive !== null ? questionActive.question : "" }}
          </div>

          <div
            class="modal-footer answer"
            :class="'answer-' + 0"
            v-show="showAnser"
          >
            {{ questionActive !== null ? questionActive.answer : "" }}
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
          <!--
          <div class="modal-footer">
           
            <circular-count-down-timer
              style="color:#3498db"
              :initial-value="initTimerModalC"
              :stroke-width="5"
              :seconds-stroke-color="'#3498db'"
              :underneath-stroke-color="'#bdc3c7'"
              :size="150"
              :padding="4"
              :second-label="''"
              :show-second="true"
              :show-minute="false"
              :show-hour="false"
              :show-negatives="false"
            ></circular-count-down-timer>
          </div>-->
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-light"
              @click.prevent.stop="showAnser = !showAnser"
              v-show="!showAnser"
            >
              Voir la solution
            </button>
            <button
              type="button"
              class="btn btn-dark"
              data-dismiss="modal"
              @click.prevent.stop="checkAnswer()"
              v-show="showAnser"
            >
              Valider
            </button>
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
          </div>
          <div class="modal-body">
            <div class="row align-items-end">
              <transition-group
                name="fadeScore"
                mode="out-in"
                class="transition-fadeScore"
              >
                <div
                  class="col-3"
                  v-for="(player, index) in getPlayer"
                  :key="index"
                  :class="{ winner: player.totalPoints === getBestScore }"
                >
                  <div class="progress progress-bar-vertical">
                    <div
                      class="progress-bar progress-bar-success progress-bar-striped active"
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      :aria-valuemax="getBestScore"
                      :style="{
                        height: (100 * player.totalPoints) / getBestScore + '%',
                        backgroundColor: player.theme.color
                      }"
                    >
                      {{ player.totalPoints }}
                    </div>
                  </div>
                  <h5 :style="{ color: player.theme.color }">
                    {{ player.namePlayer }}
                  </h5>
                </div>
              </transition-group>
            </div>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-info"
              data-dismiss="modal"
              @click="reload()"
            >
              Recommencer
            </button>
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
      isStarted: false,
      themes: datas.themes,
      players: datas.players,
      idActivePlayer: 1,
      activeModal: false,
      questionActive: null,
      showAnser: false,
      isChecked: false,
      maxQuestions: 5,
      countQuestions: 0,
      showModalEnd: false,
      timerStart: false,
      initTimerModal: 30
    };
  },
  computed: {
    // Get all question and shuffle
    // Return an array of object Question
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
    // Return all players, it's a array of object Player
    getPlayer() {
      return this.players;
    },
    // Return an int, it's the bestScore when the end of game
    getBestScore() {
      let bestScore = 0;

      this.players.forEach(player => {
        if (player.totalPoints > bestScore) {
          bestScore = player.totalPoints;
        }
      });

      return bestScore;
    },
    // TODO
    initTimerModalC() {
      return this.initTimerModal;
    }
  },
  methods: {
    chooseQuestion(question) {
      this.questionActive = question;
      this.activeModal = true;
      this.initTimerModal = 30;
    },
    checkAnswer() {
      let goodAnswer = $("#checkAnswer").prop("checked");
      let idTheme = this.questionActive.theme.id;
      console.log("----------------");

      console.log("isStarted :" + this.isStarted);
      console.log("timerStart :" + this.timerStart);
      console.log("question.disabled :" + this.questionActive.disabled);

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

      console.log("----------------");

      console.log("isStarted :" + this.isStarted);
      console.log("timerStart :" + this.timerStart);
      console.log("question.disabled :" + this.questionActive.disabled);
    },

    reload() {
      location.reload();
    },
    startGame() {
      this.timerStart = true;
      this.isStarted = true;
      /*
      console.log(this.$refs["#allQuestions"]);
      console.log(this.$refs["allQuestions"]);
      console.log(this.$els["#allQuestions"]);

      let element = this.$refs["#allQuestions"];

      window.scrollTo(0, element.offsetTop);*/
    },
    getBgQuestion(question) {
      let bg;

      if (this.timerStart) {
        bg = question.theme.color;
      } else if (question.disabled === false) {
        bg = question.theme.color;
      } else {
        //bg = question.disabled ? question.theme.color : "#ecf0f1";

        bg = "#34495e"; // Couleur neutre
      }

      return bg;
      /* let bg = this.question.disabled   ? { this.question.theme.color } :  {'background': '#ecf0f1'}
      return this.question.disabled   ? { this.question.theme.color } :  {'background': '#ecf0f1'}*/
    },
    finishTimerStart() {
      this.timerStart = false;
    },
    initTimerModalF() {
      return this.initTimerModal;
    }
  },
  updated: function() {
    let app = document.getElementById("app");
    window.scrollTo({ top: app.scrollHeight, behavior: "smooth" });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "../assets/css/style.css";
</style>
