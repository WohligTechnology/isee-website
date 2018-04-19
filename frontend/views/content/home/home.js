myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/home/home.html");
    TemplateService.title = "Home"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    $timeout(function () {
        var swiper = new Swiper('.swiper-container');
    }, 100);

})