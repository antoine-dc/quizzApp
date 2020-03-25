new Vue({
  el: "header",
  data: {
    menuItem1: "Item 1",
    menuItem2: "Item 2",
    menuItem3: "Item 3",
    menuItem4: "Item 4",
    link1: "#item1",
    link2: "#item2"
  }
});

let vm1 = new Vue({
  el: "#app",
  data: {
    title: "Application Quizz",
    addElt: false,
    showElt: false,
    tabDays: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"],
    lvlAlert: true,
    cls: "alert-success",
    hide: false
  },

  methods: {
    show: function() {
      this.showElt = true;
      this.addElt = true;
    },

    hide: function() {
      this.showElt = false;
      this.addElt = false;
    },

    style: function() {
      if (this.addElt) {
        return {
          background: "red"
        };
      } else {
        return {
          background: "blue"
        };
      }
    }
  }
});

let vm2 = new Vue({
  el: "#app2",
  data: {
    tabDays: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"],
    seconds: 0,
    hide: false
  },

  methods: {
    addDay: function() {
      this.tabDays.push("Samedi");
    }
  },

  mounted: function() {
    this.$interval = setInterval(() => {
      this.seconds++;
    }, 1000);
  },

  destroyed: function() {
    clearInterval(this.$interval);
  }
});

let vm3 = new Vue({
  el: "#app3",
  data: {
    success: false,
    message: "",
    firstName: "Jean",
    lastName: "Dupont",
    hide: false
  },

  computed: {
    // ce sont des méthods interne à l'objet, lors de l'appel, pas besoin de dire cls() mais juste cls dans le html
    cls: function() {
      return this.success === true ? "alert-success" : "alert-danger";
    },

    fullName: function() {
      return `${this.firstName} ${this.lastName}`;
    },

    fullNameEdit: {
      get: function() {
        return `${this.firstName} ${this.lastName}`;
      },
      set: function(value) {
        let tabName = value.split(" ");
        this.firstName = tabName[0];
        this.lastName = tabName[1];
      }
    }
  },

  watch: {
    fullNameWatch: function(value) {
      // On peut watcher et il détecte qu'il y a une modification
      let tabName = value.split(" ");
      this.firstName = tabName[0];
      this.lastName = tabName[1];
    }
  }
});

// Un peu useless les directives personnalisées
let maDirective = function(el, binding) {
  el.value = binding.value;
  console.log("Bind");
};

// On peut utiliser des filtres créer par défaut sur VUEJS2 ou les créer maisons comme ceci :
Vue.filter("uppercase", function(value) {
  return value.toUpperCase();
});

let uppercaseAvecPrefixe = function(value, prefixe) {
  return prefixe + " " + value.toUpperCase();
};

let vm4 = new Vue({
  el: "#app4",
  directive: {
    toto: maDirective
  },
  filters: {
    uppercaseAvecPrefixe
  },

  data: {
    success: false,
    message: "",
    firstName: "Jean",
    lastName: "Dupont"
  },

  methods: {
    launch: () => {
      console.log("KeyActived");
    }
  }
});
