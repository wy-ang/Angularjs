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

app.controller('myShow',function($scope){
	$scope.myVie = true;
	$scope.toggle = function(){
		$scope.myVie = !$scope.myVie;
	}
})
app.controller('clockNow',function($scope){
	$scope.clock = {
		now : new Date()
	};
	var updateClock = function(){
		$scope.clock.now = new Date();
	}
	setInterval(function(){
		$scope.$apply(updateClock);
	},1000)
})
app.run(function($rootScope){  //$rootScope 是最顶级的scope
	$rootScope.name='wyang'
})
app.controller('ParentController',function($scope){
	$scope.parent = {
		name:'wyang'
	}
})
app.controller('ChildController',function($scope){
	$scope.sayHello = function(){
		$scope.parent.name='wangyang'
	}
})
app.controller('stopWorld',function($scope,$timeout){
	$scope.stopTheWorld = true;
	$timeout(function(){
		$scope.stopTheWorld = false;
	},3000);
})
/*app.controller('img',function($scope,$timeout){
	$timeout(function(){
		$scope.imgSrc = 'https://octodex.github.com/images/daftpunktocat-guy.gif';
	},3000);
})*/