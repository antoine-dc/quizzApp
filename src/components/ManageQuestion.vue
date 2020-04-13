<template>
  <div class="container">
    <h1 class="display-4">{{ this.theme.name }}</h1>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="{name:'Admin'}">
            <a href="#">Dashboard</a>
          </router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="{name:'theme', params:{id:this.theme.id}}">
            <a href="#">{{ this.theme.name }}</a>
          </router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Edit</li>
      </ol>
    </nav>

    <form>
      <div class="form-group row">
        <label for="name" class="col-sm-2 col-form-label">Nom du thème</label>
        <div class="col-sm-10">
          <input v-model="name" type="text" class="form-control" id="name" />
        </div>
      </div>

      <fieldset class="form-group">
        <div class="row">
          <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
          <div class="col-sm-10 d-inline-flex">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="#2ecc71"
                v-model="newColor"
                :checked="newColor == '#2ecc71' ? 'checked' : ''"
              />

              <button
                type="button"
                class="btn"
                style="
              background-color: #2ECC71;
              height: 50px
            "
              >Vert</button>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="#3498db"
                v-model="newColor"
                :checked="newColor == '#3498db' ? 'checked' : ''"
              />

              <button
                type="button"
                class="btn"
                style="
              background-color: #3498db;          
              height: 50px
            "
              >Bleu</button>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="#e74c3c"
                v-model="newColor"
                :checked="newColor == '#e74c3c' ? 'checked' : ''"
              />

              <button
                type="button"
                class="btn"
                style="
              background-color: #e74c3c;             
              height: 50px
            "
              >Rouge</button>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="#9b59b6"
                v-model="newColor"
                :checked="newColor == '#9b59b6' ? 'checked' : ''"
              />

              <button
                type="button"
                class="btn"
                style="
              background-color: #9b59b6;             
              height: 50px
            "
              >Violet</button>
            </div>
          </div>
        </div>
      </fieldset>

      <div class="form-group row">
        <div class="col-md">
          <router-link :to="{name:'theme', params:{id:this.theme.id}}">
            <button type="submit" class="btn btn-info" @click="save()">Enregistrer</button>
          </router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
/* Les classes */
import Question from "../class/Question.js";
import Themes from "../class/Themes";

export default {
  name: "EditTheme",
  data() {
    return {
      id: null,
      theme: Themes,
      themes: [],
      questions: [],
      name: null,
      newColor: null
    };
  },
  mounted() {
    if (localStorage.getItem("themes")) {
      try {
        this.themes = JSON.parse(localStorage.getItem("themes"));
      } catch (e) {
        localStorage.removeItem("themes");
      }
    } else {
      // insertion des données initiales en local
      this.themes = this.$parent.themes;
    }

    this.id = this.$route.params.id - 1;
    this.theme = this.themes[this.id];
    this.newColor = this.theme.color;

    this.name = this.theme.name;
  },
  methods: {
    save() {
      this.themes[this.id].name = this.name;
      this.themes[this.id].color = this.newColor;
      const parsed = JSON.stringify(this.themes);
      localStorage.setItem("themes", parsed);
    }
  }
};
</script>

<style scoped>
.d-inline-flex > div {
  width: 20%;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: ">";
}
</style
>>
