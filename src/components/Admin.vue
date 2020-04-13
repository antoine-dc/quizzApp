<template>
  <div class="container">
    <h1>Dashboard</h1>

    <!-- Section PLAYER -->
    <section id="managePlayers">
      <hr class="mb-4" />
      <div class="row">
        <div class="col d-flex justify-content-center">
          <form>
            <h2>Joueurs</h2>
            <div class="form-row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nom du joueur"
                  v-model="newPlayer"
                />
              </div>

              <button type="submit" class="btn btn-info" @click.prevent="addPlayer()">Ajouter</button>
            </div>
          </form>
        </div>
      </div>

      <div class="row">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nom</th>
              <th scope="col">Thème</th>
              <th scope="col">Couleur</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(player,index) in this.datas.players" :key="index+1" class="table-light">
              <th scope="row">{{index+1}}</th>
              <td>{{player.namePlayer}}</td>
              <td>{{player.theme.name}}</td>
              <td>
                <button
                  type="button"
                  class="btn text-white"
                  :style="{
              backgroundColor: player.theme.color
            }"
                >{{player.theme.color}}</button>
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
                    <router-link
                      :to="{name:'ManagePlayer', params:{id:index+1}}"
                      class="dropdown-item"
                    >
                      <i class="far fa-edit text-success"></i>
                      <span>Edit</span>
                    </router-link>
                    <a href="#!" class="dropdown-item" @click.prevent="deletePlayer(player)">
                      <i class="far fa-trash-alt text-danger"></i> Delete
                    </a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <!-- END - Section Players -->
    <hr class="mb-4" />
    <!-- Section Themes -->
    <section id="manageThemes">
      <div class="row">
        <div class="col d-flex justify-content-center">
          <form>
            <h2>Thèmes</h2>
            <div class="form-row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nom du thème"
                  v-model="newTheme"
                />
              </div>
              <button type="submit" class="btn btn-info" @click.prevent="addTheme()">Ajouter</button>
            </div>
          </form>
        </div>
      </div>

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
            <tr v-for="(theme,index) in this.datas.themes" :key="index+1" class="table-light">
              <th scope="row">{{index+1}}</th>
              <td>{{theme.name}}</td>
              <td>
                <button
                  type="button"
                  class="btn text-white"
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
    </section>
    <!-- END Section Themes -->
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
      datas: [],
      themes: [],
      players: [],
      colors: [],
      newTheme: null,
      newPlayer: null
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
    this.themes = this.datas.themes;
  },
  computed: {},
  methods: {
    addTheme() {
      // s'assurer que l'utilisateur a entré quelque chose
      if (!this.newTheme || !this.newTheme) {
        return;
      }

      this.datas.themes.push(new Themes(Date.now(), this.newTheme));
      this.newTheme = "";
      this.save();
    },

    addPlayer() {
      // s'assurer que l'utilisateur a entré quelque chose
      if (!this.newPlayer || !this.newPlayer) {
        return;
      }

      this.datas.players.push({
        idPlayer: Date.now(),
        namePlayer: this.newPlayer,
        theme: { color: "#000000" }
      });
      this.newPlayer = "";
      this.save();
    },
    deleteTheme(theme) {
      this.datas.themes = this.datas.themes.filter(i => i !== theme);
      //this.datas.themes = this.themes;
      this.save();
    },
    deletePlayer(player) {
      this.datas.players = this.datas.players.filter(i => i !== player);
      //this.datas.themes = this.themes;
      this.save();
    },
    save() {
      /* this.themes[this.id].name = this.name;
      this.themes[this.id].color = this.newColor;*/
      const parsed = JSON.stringify(this.datas);
      localStorage.setItem("datas", parsed);
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

form {
  margin-block-end: 20px;
}
</style>