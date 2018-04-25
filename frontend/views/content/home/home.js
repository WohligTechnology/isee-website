myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $uibModal) {
    $scope.template = TemplateService.getHTML("content/home/home.html");
    TemplateService.title = "Home"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    $timeout(function () {
        var swiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

        });
    }, 100);
    $scope.homeSlide = [
        "img/home/1.jpg",
        "img/home/2.jpg",
        "img/home/3.jpg",
        "img/home/4.jpg",

    ];
    $scope.changeURL = function (id) {
        var id = "#" + id;
        $('html, body').animate({
            scrollTop: $(id).offset().top - 50
        }, 1000);
    };
    $scope.fourblock = [{
        img: "img/home/Isee_reduce.svg",
        title: "REDUCE",
        text: "iSeeTM machine learning and self-learning capabilities allows retailer to easily identify ORC patterns and build simulations and drill down active data sets to pin point potentially fraudulent returns and identify high risk customers, employees and build a cohesive loss prevention strategy."
    }, {
        img: "img/home/Isee_restrict.svg",
        title: "Restrict",
        text: "iSeeTM Rules engine allows retailers to easily add and implement rules to prevent and restrict fraudulent returns.  Easy to configure out of the box rules & reports lets users leverage its adaptive functionality and design and build rules repository which can easily adapt to tackle new ORC scenarios and use cases. "
    }, {
        img: "img/home/Isee_revamp.svg",
        title: "Revamp",
        text: "iSeeTM analytics accentuates decision making by bringing clarity to complex business use cases BY PRESENTING ENHANCED DATA VISUALIZATIONS and build a robust fraud prevention strategy around it.In built case management system works in sync with rules engine and provides end to end fraud prevention solution."
    }]



    $scope.parameterModal = [{
        id: '0',
        text: "iSeeTM machine learning and self-learning capabilities allows retailer to easily identify ORC patterns and build simulations and drill down active data sets to pin point potentially fraudulent returns and identify high risk customers, employees and build a cohesive loss prevention strategy."
    }, {
        id: '1',
        text: "iSeeTM Rules engine allows retailers to easily add and implement rules to prevent and restrict fraudulent returns.   Easy to configure out of the box rules & reports lets users leverage its adaptive functionality and design and build rules repository which can easily adapt to tackle new ORC scenarios and use cases. Machine & Natural Language query and real - time reporting tool allows users to design complex scenarios with ease.",
        list: [
            "Visually configure rules using various parameters provided by the system",
            "Can configure complex rules",
            "Web and Mobile Enabled",
            "Designed for Scale (option for both On-Premise and Cloud)"
        ]
    }, {
        id: '2',
        text: " iSeeTM analytics accentuates decision making by bringing clarity to complex business use cases BY PRESENTING ENHANCED DATA VISUALIZATIONS and build a robust fraud prevention strategy around it.  In built case management system works in sync with rules engine and provides end to end fraud prevention solution. Responsive Analytics layer allows for easy replication of real - time use cases ",
        list: [
            "Retail Analytics Dashboard",
            "Value added analysis for profitability",
            "Web and Mobile Enabled",
            "Multi-dimensional DATA analysis",
            "Machine learning for self-learning rules",
            "Handle both structured and un-structured data from various sources",
        ]
    }]

    $scope.modalOpen = function (index) {
        // console.log("############", index);
        $scope.text = $scope.parameterModal[index]
        $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/parameter.html',
            scope: $scope,
            size: 'md',
        });
    };

})