var app = angular.module("myController",[]);
app.controller("controller1",function($scope){
	$scope.a = 1;
	$scope.b = 2;
})
app.controller('controller2',function($scope){
	var listArr=[{nameX:'hehe'},{nameX:'haha'},{nameX:'cao'}];
	$scope.list = listArr;
})

app.controller('controller3',function($scope,$http){
	$http.get("Customers_JSON.json").success(function(response){$scope.names = response});
})

/*app.controller('myShow',function($scope){
	$scope.myVie = true;
	$scope.toggle = function(){
		$scope.myVie = !$scope.myVie;
	}
})*/