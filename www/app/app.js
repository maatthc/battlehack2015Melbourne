//Define an angular module for our app
var app = angular.module('smartBin', ['ngTouch']);

app.controller("pageController", function($scope) {
    var currentPageId = 1;
    var barcode = true;

    $scope.isPage = function(pageId){
        if(currentPageId==pageId){
	       return true;
	   }
    }
    $scope.is_barcode = function(){
        return barcode;
    }
    $scope.no_barcode = function(){
        barcode = false;
        $scope.forward();
    }
    $scope.back = function(){
        if(currentPageId!=1){
            currentPageId--;
        }
    }
    $scope.forward = function(){
            currentPageId++;
    }
    $scope.scanRubbish = function(){
	currentPageId++;
        capturePhotoBack();
    }
    $scope.scanBarcode = function(){
        capturePhotoFront();
        $scope.forward();
    }

});
