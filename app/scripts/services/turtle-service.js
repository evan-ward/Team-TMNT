'use strict';

/**
 * @ngdoc service
 * @name tmntApp.turtleService
 * @description
 * # turtleService
 * Service in the tmntApp.
 */
angular.module('tmntApp')
  .service('turtleService', function turtleService($q, $http) {
  	return {
  		getTeams: function (){
  			var deferred = $q.defer();

  			$http({
  				method: 'GET',
  				url: 'http://tmnt.devmounta.in/team'
  			});
  			.success(function (data){
  				deferred.resolve(data)
  				
  			}
  			});
  			return deffered.promise;    

  		}
  	}
    
  });
