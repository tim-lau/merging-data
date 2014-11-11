/* 
    app.js
    Angular application for the address book challenge
*/

"use strict";

//Creates Angular module named AddressBook
angular.module('AddressBook', [])
	// Controller for the AddressBook module
	.controller('AddressController', function($scope) {
		//intializes array of employees in the Address Book to be viewable by the user
		$scope.employees = pawneeEmployees;
		//default to sort by last names
		$scope.sortCol = 'lastName';

		$scope.sortBy = function(sortCol) {
            $scope.sortCol = sortCol;
        };
	});