new Vue({
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