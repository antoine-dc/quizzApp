<template>
  <main class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="{name:'Admin'}">
            <a href="#">Dashboard</a>
          </router-link>
        </li>
        <li class="breadcrumb-item active">{{ this.theme.name }}</li>
      </ol>
    </nav>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">
          Thème
          <br />
          {{ this.theme.name }}
        </h1>
      </div>
      <form>
        <div class="form-group row">
          <label for="name" class="col-sm-4 col-form-label">Nom du thème</label>
          <div class="col-sm-6">
            <input v-model="name" type="text" class="form-control" id="name" />
          </div>
        </div>
        <div class="form-group row">
          <label for="name" class="col-sm-4 col-form-label">Thème Culture Général</label>
          <div class="col-sm-8">
            <div class="custom-control custom-switch">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customSwitch1"
                :checked="this.theme.isThemeGeneralCulture"
                @click="theme.isThemeGeneralCulture=!theme.isThemeGeneralCulture"
              />
              <label class="custom-control-label" for="customSwitch1"></label>
            </div>
          </div>
        </div>
      </form>
    </div>

    <hr class="mb-4" />
    <div class="row">
      <div class="col">
        <form>
          <h2>Questions</h2>
          <div class="form-row">
            <div class="col">
              <input type="text" class="form-control" placeholder="Question" v-model="newLabel" />
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Réponse" v-model="newAnswer" />
            </div>
            <button type="submit" class="btn btn-info" @click.prevent="addQuestion()">Ajouter</button>
          </div>
        </form>
      </div>
    </div>
    <hr class="mb-4" />
    <div class="row">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Questions</th>
            <th scope="col">Réponses</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(question, index) in this.theme.questions"
            :key="index + 1"
            class="table-light"
          >
            <th scope="row">{{ index + 1 }}</th>
            <td :class="{editing:question === editingQuestion}">
              <label @dblclick="edit(question,'question')">{{ question.label }}</label>
              <input
                type="text"
                class="editQuestion"
                v-model="question.label"
                @keyup.enter="doneEdit('question')"
                @blur="doneEdit('question')"
                v-focus="question === editingQuestion"
              />
            </td>

            <td :class="{editing:question === editingAnswer}">
              <label @dblclick="edit(question,'answer')">{{ question.answer }}</label>
              <input
                type="text"
                class="editQuestion"
                v-model="question.answer"
                @keyup.enter="doneEdit('answer')"
                @blur="doneEdit('answer')"
                v-focus="question === editingAnswer"
              />
            </td>

            <td>
              <div class="dropdown">
                <a
                  href="#"
                  class="dropdown-ellipses dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fa fa-ellipsis-v"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right" style>
                  <a href="#!" class="dropdown-item" @click="edit(question,'question')">
                    <i class="far fa-edit text-success"></i> Edit question
                  </a>
                  <a href="#!" class="dropdown-item" @click="edit(question,'answer')">
                    <i class="far fa-edit text-warning"></i> Edit answer
                  </a>
                  <a href="#!" class="dropdown-item" @click.prevent="deleteQuestion(question)">
                    <i class="far fa-trash-alt text-danger"></i> Delete
                  </a>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <router-link :to="{name:'Admin'}">
      <button type="submit" class="btn btn-info" @click="save()">Enregistrer</button>
    </router-link>
  </main>
</template>

<script>
/* Les classes */
import Question from "../class/Question.js";
import Themes from "../class/Themes";

export default {
  name: "AdminTheme",
  data() {
    return {
      id: null,
      theme: Themes,
      newLabel: null,
      newAnswer: null,
      name: null,
      editingQuestion: null,
      editingAnswer: null
    };
  },
  methods: {
    addQuestion() {
      // s'assurer que l'utilisateur a entré quelque chose
      if (!this.newLabel || !this.newAnswer) {
        return;
      }

      this.theme.questions.push(new Question(this.newLabel, this.newAnswer));
      this.newLabel = "";
      this.newAnswer = "";
      this.save();
    },
    deleteQuestion(question) {
      this.theme.questions = this.theme.questions.filter(i => i !== question);
      this.save();
    },

    edit(question, type) {
      if (type === "question") {
        this.editingQuestion = question;
      } else if (type === "answer") {
        this.editingAnswer = question;
      }
    },
    doneEdit(type) {
      if (type === "question") {
        this.editingQuestion = null;
      } else if (type === "answer") {
        this.editingAnswer = null;
      }
      this.save();
    },
    save() {
      this.theme.name = this.name;
      this.datas.themes[this.id] = this.theme;

      console.log(this.theme);

      // Boucle pour mettre à jour le thème d'un joueur
      // si le thème a déjà été sélectionné
      for (const player of this.datas.players) {
        if (player.theme.id === this.theme.id) {
          player.theme = this.theme;
        }
      }
      const parsed = JSON.stringify(this.datas);
      localStorage.setItem("datas", parsed);
    }
  },
  computed: {},
  mounted() {
    if (localStorage.getItem("datas")) {
      try {
        this.datas = JSON.parse(localStorage.getItem("datas"));
      } catch (e) {
        localStorage.removeItem("datas");
      }
    } else {
      this.datas = this.$parent.datas;
    }

    // Init data
    this.id = this.$route.params.id - 1;
    this.theme = this.datas.themes[this.id];
    this.name = this.theme.name;
  },
  directives: {
    focus(el, val) {
      if (val) {
        el.focus();
      }
    }
  }
};
</script>

<style scoped>
.d-inline-flex > div {
  width: 20%;
}
.dropdown-toggle::after {
  display: none;
}

.dropdown-ellipses {
  color: #d2ddec;
}

.dropdown-ellipses:hover {
  color: #138496;
}

label {
  width: 100%;
  display: inline-table;
  min-height: 17px;
}

.editQuestion {
  display: none;
  position: relative;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  text-align: center;

  padding: 12px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.editing {
  border-bottom: none;
  padding: 0;
}

.editing .editQuestion {
  display: block;
  width: calc(100% - 43px);
  margin: 0 0 0.5rem 43px;
}
.editing label {
  display: none;
}
</style>
