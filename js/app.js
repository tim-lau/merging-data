/* 
    app.js
    Angular application for the address book challenge

    Add code here to create a new Angular application and controller.
    The array of employee objects is already in a global variable named 'pawneeEmployees'
*/

angular.module('AddressBook', [])
	.controller('AddressController', function($scope) {
		//intialize variables with list of movies so that it'll be accessed in the view
		$scope.employees = pawneeEmployees;
		$scope.filteredEmployees = pawneeEmployees;

		$scope.sortCol = 'lastName';
		$scope.employeeSearch = undefined;

		$scope.sortBy = function(sortCol) {
            $scope.sortCol = sortCol;
        };

        $scope.isSortedBy = function(colName) {
            return $scope.sortCol == colName;

		};

	});