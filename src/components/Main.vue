<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <div class="row">
      <question
        v-for="(value, index) in getQuestions"
        :key="index"
        :data="value"
        :index="index"
      >
      </question>
    </div>
  </div>
</template>

<script>
class Themes {
  constructor(id, name, color, questions) {
    (this.id = id),
      (this.name = name),
      (this.color = color),
      (this.questions = questions);
  }
}

class Question {
  constructor(question, answer, idTheme, nameTheme, colorTheme) {
    (this.question = question),
      (this.answer = answer),
      (this.theme = { id: idTheme, name: nameTheme, color: colorTheme });
  }
}

import question from "@/components/Question";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "App Quizz",
      themes: [
        new Themes(1, "Architecture", "#2980b9", [
          { question: "Question 1", answer: "Réponse 1" },
          { question: "Question 2", answer: "Réponse 2" },
          { question: "Question 3", answer: "Réponse 3" },
          { question: "Question 4", answer: "Réponse 4" },
          { question: "Question 5", answer: "Réponse 5" },
          { question: "Question 6", answer: "Réponse 6" },
          { question: "Question 7", answer: "Réponse 7" },
          { question: "Question 8", answer: "Réponse 8" }
        ]),
        new Themes(2, "Sport", "#e74c3c", [
          { question: "Question 1", answer: "Réponse 1" },
          { question: "Question 2", answer: "Réponse 2" },
          { question: "Question 3", answer: "Réponse 3" },
          { question: "Question 4", answer: "Réponse 4" },
          { question: "Question 5", answer: "Réponse 5" },
          { question: "Question 6", answer: "Réponse 6" },
          { question: "Question 7", answer: "Réponse 7" },
          { question: "Question 8", answer: "Réponse 8" }
        ]),
        new Themes(3, "Cinéma", "#27ae60", [
          { question: "Question 1", answer: "Réponse 1" },
          { question: "Question 2", answer: "Réponse 2" },
          { question: "Question 3", answer: "Réponse 3" },
          { question: "Question 4", answer: "Réponse 4" },
          { question: "Question 5", answer: "Réponse 5" },
          { question: "Question 6", answer: "Réponse 6" },
          { question: "Question 7", answer: "Réponse 7" },
          { question: "Question 8", answer: "Réponse 8" }
        ]),
        new Themes(4, "Neutre", "#7f8c8d", [
          { question: "Question 1", answer: "Réponse 1" },
          { question: "Question 2", answer: "Réponse 2" },
          { question: "Question 3", answer: "Réponse 3" },
          { question: "Question 4", answer: "Réponse 4" },
          { question: "Question 5", answer: "Réponse 5" },
          { question: "Question 6", answer: "Réponse 6" },
          { question: "Question 7", answer: "Réponse 7" },
          { question: "Question 8", answer: "Réponse 8" },
          { question: "Question 9", answer: "Réponse 9" },
          { question: "Question 10", answer: "Réponse 10" },
          { question: "Question 11", answer: "Réponse 11" },
          { question: "Question 12", answer: "Réponse 12" }
        ])
      ]
    };
  },
  components: {
    question
  },
  computed: {
    // On récupérè toutes les questions et on les mélange
    getQuestions() {
      let tabQuestions = [];
      const maxCases = 36;
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
    }
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
