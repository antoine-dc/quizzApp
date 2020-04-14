<template>
  <main class="container">
    <h1 class="display-4">{{ this.player.namePlayer }}</h1>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="{name:'Admin'}">
            <a href="#">Dashboard</a>
          </router-link>
        </li>

        <li class="breadcrumb-item active" aria-current="page">Joueur {{ this.id+1 }}</li>
      </ol>
    </nav>

    <form>
      <div class="form-group row">
        <label for="name" class="col-sm-2 col-form-label">Nom du joueur</label>
        <div class="col-sm-10">
          <input v-model="name" type="text" class="form-control" id="name" />
        </div>
      </div>
      <div class="form-group row">
        <label for="name" class="col-sm-2 col-form-label">Nom du thème</label>
        <div class="col-sm-10">
          <select class="custom-select" id="inputGroupSelect01" v-model="newTheme">
            <option
              v-for="(theme,index) in this.datas.themes"
              :key="index"
              :value="theme"
              :selected="index === idTheme ? 'selected' : ''"
            >{{theme.name}}</option>
          </select>
        </div>
      </div>

      <fieldset class="form-group">
        <div class="row">
          <legend class="col-form-label col-sm-2 pt-0">Couleur</legend>
          <div class="col-sm-10 flex-column d-flex align-items-start">
            <div class="form-check" v-for="(color, index) in this.datas.colors" :key="index + 1">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                :value="color"
                v-model="newColor"
                :checked="newColor == color.code ? 'checked' : ''"
              />

              <button
                type="button"
                class="btn"
                :style="{
              backgroundColor: color.code,
              height: '50px'
            }"
              >{{color.name}}</button>
            </div>
          </div>
        </div>
      </fieldset>

      <div class="form-group row">
        <div class="col-md">
          <router-link :to="{name:'Admin'}">
            <button type="submit" class="btn btn-info" @click="save()">Enregistrer</button>
          </router-link>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
/* Les classes */
import Question from "../class/Question.js";
import Themes from "../class/Themes";

export default {
  name: "EditTheme",
  data() {
    return {
      datas: [],
      id: null,
      name: null,
      player: [],
      newColor: null,
      newTheme: null,
      idTheme: null
    };
  },
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
    this.players = this.datas.players;

    this.id = this.$route.params.id - 1;
    this.player = this.players[this.id];
    this.name = this.player.namePlayer;
    this.newColor = this.player.color;
    this.newTheme = this.player.theme;
    this.idTheme = this.datas.themes.indexOf(this.player.theme);
  },
  methods: {
    save() {
      this.player.namePlayer = this.name;
      this.player.color = this.newColor;
      this.player.theme = this.newTheme;
      const parsed = JSON.stringify(this.datas);
      localStorage.setItem("datas", parsed);
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
.form-check {
  margin-bottom: 5px;
}

.form-check .btn {
  width: 100px;
}
</style>
