myApp.factory('NavigationService', function () {
    var navigation = [{
        name: "Home",
        classis: "active",
        anchor: "home",
        subnav: [
            //     {
            //     name: "Subnav1",
            //     classis: "active",
            //     anchor: "home"
            // }
        ]

    }, {
        name: "About Us",
        classis: "active",
        anchor: "links",
        subnav: []
    }, {
        name: "Team",
        classis: "active",
        anchor: "links",
        subnav: []
    }, {
        name: "Why Isee",
        classis: "active",
        anchor: "links",
        subnav: []
    }, {
        name: "Contact Us",
        classis: "active",
        anchor: "links",
        subnav: []
    }];

    return {
        getNavigation: function () {
            return navigation;
        },
    };
});