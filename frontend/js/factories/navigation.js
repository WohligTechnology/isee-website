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

    }, 
    // {
    //     name: "About Us",
    //     classis: "active",
    //     anchor: "about-us",
    //     subnav: []
    // }, {
    //     name: "Team",
    //     classis: "active",
    //     anchor: "our-team",
    //     subnav: []
    // }, 
    {
        name: "Isee solution",
        classis: "active",
        anchor: "why-isee",
        subnav: []
    }, {
        name: "Contact Us",
        classis: "active",
        anchor: "contact-us",
        subnav: []
    }];

    return {
        getNavigation: function () {
            return navigation;
        },
    };
});