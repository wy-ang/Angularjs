angular.module('test',['test1']);
angular.module('test1',[]);

angular.module('test')
.controller('di',function($scope){
	$scope.sayCar = function(){
		$scope.car.color = 'blue'
	}
})
angular.module('test1')
.factory('di1',function($scope){
	$scope.car = {
		color : 'red'
	}
})