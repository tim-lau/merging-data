/* 
    app.js
    Angular application for the address book challenge

    Add code here to create a new Angular application and controller.
    The array of employee objects is already in a global variable named 'pawneeEmployees'
*/

angular.module('AddressBook', [])
	.controller('AddressController', function($scope) {
		//intialize variables with list of people so that it'll be accessed in the view
		$scope.employees = pawneeEmployees;
		$scope.sortCol = 'lastName';
		$scope.sortBy = function(sortCol) {
            $scope.sortCol = sortCol;
        };
	});