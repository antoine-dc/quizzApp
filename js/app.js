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
    lastName: "Dupont",
    hide: false
  },

  methods: {
    launch: () => {
      console.log("KeyActived");
    }
  }
});

// Création d'un component
/*
Vue.component("moncomponent", {
  props: {
    type: { type: String, default: "alert-success" },
    texte: String
  },
  template: `<div class="alert" :class="type">{{texte}}</div>`
});
*/

let moncomponent = {
  // On peut créer des propriétés / attributs de notre component,avec la possibilité de filtre comme ici avec String
  props: {
    type: { type: String, default: "alert-success" },
    message: String
  },
  template: `<div class="alert message" :class="type">{{message}}</div>`
};

let counter = {
  // On ne peut pas faire simplement data : {} comme dans une vue
  // car ça sera une data générale alors qu'on veux quelques choses de spécifique à une instance
  // donc on doit en faire une fonction qui retournera un objet
  // Les DATA sont les données à utiliser dans le component
  data: () => {
    return {
      count: 0
    };
  },

  // Les PROPS sont liés aux propriétés HTML
  props: {
    start: { type: Number, default: 0 }
  },

  methods: {
    increment: function() {
      // ici on peut pas ()=> car <je ne sais pas>
      this.count++;
    }
  },
  template: `<button @click="increment"> {{count}} </button>`,

  // Première solution pour le lancement du timer à partir de 3, on utilise le cycle de vie
  // Idem on ne peut pas faire ()=> ici
  mounted: function() {
    this.count = this.start;
  }

  // 2 solution
  /*
  computed: {
    total: function() {
      return this.start + this.count;
    }
  }*/
  // et du coup on pourra écrire :  template: `<button @click="increment"> {{total}} </button>`,
};

let formUser = {
  props: {
    //user: Object
    value: Object
  },
  // on créé data() car sinon, dès qu'on modifie un nom/prénom, les valeurs changent aussi
  // du coup on créé un userLocal
  data() {
    // Là on lui dit qu'il va prendre les mêmes propriétés que l'objet qui sera passé en paramètre
    return {
      //userLocal: { ...this.user } // équivaut à JSON.parse(JSON.stringify(this.user))
      user: { ...this.value }
    };
  },
  methods: {
    save() {
      this.$emit("input", this.user); // emit : pour faire référence à une méthode parente, à savoir la vue
    }
  },
  // <slot> : permet de rajouter le texte saisi dans le HTML
  template: `<form @submit.prevent="save">
      <p><slot></slot></p>  
      <p><slot name="texte1"></slot></p>  
      <p><slot name="texte1"></slot></p>  
      <div class="form-group" >
        <label for="first">Firstname</label>
        <input type="fisrt" class="form-control" v-model="user.firstName" placeholder="Enter firstname">
      </div>
      <div class="form-group">
        <label for="last">Lastname</label>
        <input type="last" class="form-control" v-model="user.lastName" placeholder="Enter lastname">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>`
};

let vm5 = new Vue({
  el: "#app5",

  components: { moncomponent, counter, formUser }, // on ajoute tous les compenent que l'on souhaite utiliser dans la vue

  data: {
    message: "Hello",
    user: {
      firstName: "Jean",
      lastName: "Delatour"
    }
  },

  methods: {
    launch: () => {
      console.log("KeyActived");
    }
  }
});
