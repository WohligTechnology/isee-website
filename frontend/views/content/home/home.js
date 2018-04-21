myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
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

    ]
})