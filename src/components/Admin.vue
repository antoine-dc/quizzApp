<template>
  <div class="container">
    <h1>Dashboard</h1>
    <hr class="mb-4" />
    <div class="row">
      <div class="col">
        <form>
          <h2>Ajouter un thème</h2>
          <div class="form-row">
            <div class="col">
              <input type="text" class="form-control" placeholder="Nom du thème" v-model="newTheme" />
            </div>

            <button type="submit" class="btn btn-info" @click.prevent="addTheme()">Ajouter</button>
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
            <th scope="col">Nom</th>
            <th scope="col">Couleur</th>

            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(theme,index) in getThemes" :key="index+1">
            <th scope="row">{{index+1}}</th>
            <td>{{theme.name}}</td>
            <td>
              <button
                type="button"
                class="btn"
                :style="{
              backgroundColor: theme.color
            }"
              >{{theme.color}}</button>
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
                  <router-link :to="{name:'theme', params:{id:index+1}}" class="dropdown-item">
                    <i class="far fa-edit text-success"></i>
                    <span>Edit</span>
                  </router-link>
                  <a href="#!" class="dropdown-item" @click.prevent="deleteTheme(theme)">
                    <i class="far fa-trash-alt text-danger"></i> Delete
                  </a>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
/* Les classes */
import Question from "../class/Question.js";
import Themes from "../class/Themes";

export default {
  name: "Admin",
  data() {
    return {
      themes: [],
      players: "",
      sounds: ""
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
      this.themes = this.$parent.themes;
    }
  },
  computed: {
    getThemes() {
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
      return this.themes;
    }
  },
  methods: {
    addTheme() {
      // s'assurer que l'utilisateur a entré quelque chose
      if (!this.newTheme || !this.newTheme) {
        return;
      }

      this.themes.push(new Themes(Date.now(), this.newTheme));
      this.newTheme = "Nom du thème";
      this.save();
    },
    save() {
      /*this.themes[this.id].name = this.name;
      this.themes[this.id].color = this.newColor;*/
      const parsed = JSON.stringify(this.themes);
      localStorage.setItem("themes", parsed);
    }
  }
};
</script>

<style>
.dropdown-toggle::after {
  display: none;
}

.dropdown-ellipses {
  color: #d2ddec;
}

.dropdown-ellipses:hover {
  color: #138496;
  text-decoration: none;
}
</style>