let vm1 = new Vue({
    el: '#app',
    data: {
        title: "Application Quizz",
        addElt: false,
        showElt: false,
        tabDays: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'],
        lvlAlert: true,
        cls: "alert-success"
    },

    methods: {
        show: function () {
            this.showElt = true;
            this.addElt = true;
        },

        hide: function () {
            this.showElt = false;
            this.addElt = false;
        },

        style: function () {

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


let vm = new Vue({
    el: '#app2',
    data: {
        tabDays: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'],
        seconds: 0
    },

    methods: {
        addDay: function () {
            this.tabDays.push('Samedi');
        }
    },

    mounted: function () {
        this.$interval = setInterval(() => {
            this.seconds++;
        }, 1000)
    },

    destroyed: function () {
        clearInterval(this.$interval)
    }
})





new Vue({
    el: 'header',
    data: {
        menuItem1: "Item 1",
        menuItem2: "Item 2",
        menuItem3: "Item 3",
        menuItem4: "Item 4",
        link1: "#item1",
        link2: "#item2"
    }
})