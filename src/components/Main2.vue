<template>
  <main class="container">
    <h1>{{ msg }}</h1>

    <div class="row">
      <div class="col-md">
        <button
          type="button"
          class="btn btn-info"
          data-dismiss="modal"
          @click="startGame()"
          v-if="!isStarted"
        >Lancer la partie</button>
      </div>
    </div>
    <!-- Questions -->
    <div class="row" v-if="isStarted" id="top">
      <div
        v-for="(question, index) in getQuestions"
        :key="index"
        class="col-md-2 card"
        :style="{ backgroundColor: getBgQuestion(question) }"
        @click.prevent="question.data.disabled && !timerStart ? chooseQuestion(question) : {}"
      >
        <div class="card-body">
          <p class="card-text" :style="{ 'color': getColorQuestion(question) }">{{ index + 1 }}</p>
        </div>
      </div>
    </div>
    <!-- CountDown Start -->
    <div class="row">
      <div class="col-12 align-self-center">
        <circular-count-down-timer
          style="color:#3498db"
          :initial-value="initTimerModal"
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
          :style="[{ 'background-color': player.color.code }]"
          @change="idActivePlayer"
        >
          <div class="card-body">
            <p class="card-text">
              {{ player.namePlayer }}
              <span class="badge badge-light">{{ player.totalPoints }}</span>
              <br />
              <span>{{ player.theme.name }}</span>
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
              ? { 'background-color': questionActive.color }
              : {}
          ]"
        >
          <div class="modal-header">
            <h5 class="modal-title">{{ questionActive !== null ? questionActive.nameTheme : "" }}</h5>
          </div>
          <div class="modal-body">{{ questionActive !== null ? questionActive.data.label : "" }}</div>

          <div class="modal-footer answer" :class="'answer-' + 0" v-show="showAnser">
            {{ questionActive !== null ? questionActive.data.answer : "" }}
            <div class="row">
              <div class="col-md">
                <form>
                  <input
                    id="checkAnswer"
                    type="checkbox"
                    :checked="isChecked"
                    data-toggle="toggle"
                    data-on="Bonne réponse"
                    data-off="Mauvaise réponse"
                    data-onstyle="success"
                    data-offstyle="danger"
                    data-width="150"
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
          </div>
          <div class="modal-body">
            <div class="row align-items-end">
              <transition-group name="fadeScore" mode="out-in" class="transition-fadeScore">
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
                        backgroundColor: player.color.code
                      }"
                    >{{ player.totalPoints }}</div>
                  </div>
                  <h5 :style="{ color: player.color.code }">{{ player.namePlayer }}</h5>
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
            >Recommencer</button>
          </div>
        </div>
      </div>
    </div>
    <audio v-for="(audio, index) in this.datas.sounds" :key="index" :id="'audio-'+audio.type+index">
      <source :src="'./../../static/audio/'+audio.type+'/'+audio.path" />
    </audio>
  </main>
</template>

<script>
/* Les classes */
import Question from "../class/Question.js";

/* Les components */

/* Init */

export default {
  name: "Main",
  data() {
    return {
      msg: "App Quizz Theme",
      datas: [],
      isStarted: false,
      themes: [],
      players: [],
      idActivePlayer: 1,
      activeModal: false,
      questionActive: null,
      showAnser: false,
      isChecked: false,
      maxQuestions: 2,
      countQuestions: 0,
      showModalEnd: false,
      timerStart: false,
      initTimerModal: 1
    };
  },
  computed: {
    // Get all question and shuffle
    // Return an array of object Question
    getQuestions() {
      let tabQuestions = [];
      this.datas.players.forEach(player => {});

      // Loop on all players
      for (const [indexPlayer, player] of this.datas.players.entries()) {
        for (const question of player.theme.questions) {
          tabQuestions.push({
            data: question,
            color: player.color.code,
            nameTheme: player.theme.name,
            indexPlayer: indexPlayer + 1
          });
        }
      }

      // Add questions General Culture
      for (const theme of this.datas.themes) {
        if (theme.isThemeGeneralCulture) {
          for (const question of theme.questions) {
            tabQuestions.push({
              data: question,
              color: "#95A5A6", //grey
              indexPlayer: 0
            });
          }
        }
      }

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
      let playerActive = this.players[this.idActivePlayer - 1];

      if (goodAnswer) {
        let soundSuccessRandom = _.shuffle(this.soundSuccess)[0];
        document.querySelector(soundSuccessRandom).play();
        if (this.questionActive.indexPlayer === this.idActivePlayer) {
          // Si c'est le theme du joueur
          playerActive.totalPoints += 2;
        } else if (this.questionActive.indexPlayer === 0) {
          // Si c'est le theme Culture Général
          playerActive.totalPoints += 1;
        } else {
          // Si c'est le theme d'un autre
          playerActive.totalPoints += 3;
        }
      } else {
        let soundErrorRandom = _.shuffle(this.soundError)[0];
        document.querySelector(soundErrorRandom).play();
      }

      // On passe le tour au joueur suivant
      playerActive.isActive = false;

      if (this.idActivePlayer < this.players.length) {
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
        this.sleep(2000)
          .then(() => {
            document.querySelector("#audio-roll0").play();
          })
          .then(() => {
            this.sleep(4000).then(() => {
              this.showModalEnd = true;
              document.querySelector("#audio-final1").play();
            });
          });
      }

      // Initialisaiton du modal
      this.activeModal = false;
      this.showAnser = false;
      this.isChecked = false;
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
        bg = question.color;
      } else if (question.disabled === false) {
        bg = question.color;
      } else {
        bg = "#34495e"; // Couleur neutre
      }

      return bg;
    },
    getColorQuestion(question) {
      if (question.disabled === false) {
        return question.color;
      }
    },
    finishTimerStart() {
      this.timerStart = false;
    },
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    save() {
      const parsed = JSON.stringify(this.datas);
      localStorage.setItem("datas", parsed);
    }
  },
  updated: function() {
    let app = document.getElementById("app");
    window.scrollTo({ top: app.scrollHeight, behavior: "smooth" });
  },
  mounted() {
    if (localStorage.getItem("datas")) {
      try {
        this.datas = JSON.parse(localStorage.getItem("datas"));
      } catch (e) {
        localStorage.removeItem("datas");
      }
    } else {
      // DEV
      // this.datas = this.$parent.datas;
      // this.save();
      // TODO
      // Faire ici message erreur si le cas se présente
    }

    this.datas.sounds = this.$parent.datas.sounds;

    // Init sounds
    this.soundError = document.querySelector("#audio-error");
    this.soundSuccess = document.querySelector("#audio-success");
    this.soundFinal = document.querySelector("#audio-final1");
    this.soundRoll = document.querySelector("#audio-roll0");

    console.log(this.soundFinal);
    console.log(this.soundRoll);

    this.soundSuccess = [];
    this.soundError = [];
    for (const [index, sound] of this.datas.sounds.entries()) {
      if (sound.type === "success") {
        this.soundSuccess.push(`#audio-${sound.type}${index}`);
      } else if (sound.type === "error") {
        this.soundError.push(`#audio-${sound.type}${index}`);
      }
    }

    // Init data
    this.themes = this.datas.themes;
    this.players = this.datas.players;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
</style>
