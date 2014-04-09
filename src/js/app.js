// $(document).foundation();


// ANGULAR

    var faustApp = angular.module('faustApp', ['ngRoute', 'ngAnimate']);


    // configure our routes
    faustApp.config(function($interpolateProvider, $routeProvider) {
        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
        
        $routeProvider
            // route for the home page
            .when('/', {
                templateUrl : 'components/home-content.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/chi-siamo', {
                templateUrl : 'components/chi-siamo-content.html',
                controller  : 'aboutController'
            })

            // route for the pdf page
            .when('/punti-di-forza', {
                templateUrl : 'components/punti-di-forza-content.html',
                controller  : 'pdfController'
            })

            // route for the contact page
            .when('/i-nostri-clienti', {
                templateUrl : 'components/clienti-content.html',
                controller  : 'clientController'
            });
    });

    // page controllers
    faustApp.controller('mainController', function($scope) {
        $scope.pageClass = 'page-home';
        // $(document).foundation();
        // $(document).foundation('interchange', 'reflow');
    });

    faustApp.controller('aboutController', function($scope) {
        $scope.pageClass = 'page-chi-siamo';
    });

    faustApp.controller('pdfController', function($scope) {
        $scope.pageClass = 'page-punti-di-forza';
        // $(document).foundation();
        // $(document).foundation('interchange', 'reflow');
    });

    faustApp.controller('clientController', function($scope) {
        $scope.pageClass = 'page-clienti';
    });

    // nav controller
    faustApp.controller('navCtrl', ['$scope', '$location', function ($scope, $location) {
       $scope.navClass = function(page) {
        var current = $location.path().substring(1);
        return page === current ? "nav__item--active" : "";
      };       
    }]);

    // members controller
    faustApp.controller('membersCtrl', ['$scope', function($scope){
        $scope.memberImg ='assets/images/mora.jpg';
        $scope.selectedMember = 'roberta'; 

        $scope.setImage = function(imageUrl, name) {
          $scope.memberImg = imageUrl;
          $scope.selectedMember = name;    
        }


    }])

