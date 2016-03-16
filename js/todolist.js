var app = angular.module('todoList',[]);

/*app.controller('task',function($scope){
	$scope.date = '';
	$scope.arr = [];
	$scope.add = function(){
		$scope.arr.push($scope.date);
		$scope.oldArr = localStorage.getItem('key');
		$scope.newArr = $scope.oldArr+$scope.date;
		localStorage.setItem('key',$scope.newArr);
	}
})
app.controller('myJson',function($scope,$http){
	$http({
		method:'GET',
		url:'js/people.json'
	}).success(function(data){
		$scope.arrList = [];
		for(var i=0;i<data.people.length;i++){
			$scope.arrList.push('name : '+data.people[i].name,'city : '+data.people[i].city,'country : '+data.people[i].country);
		}	
	}).error(function(e){
		console.log('出错了！！！');
	})
})*/

app.directive('helloWorld',function(){
	return{
		restrict:'AEC',
		replace:true,
		template:'<h3>Hello World!</h3>',
		link: function(scope,elem,attr){
            elem.bind('click',function(){
                elem.css({
                	'background-color':'red',
                	'color':'white'
                });
	            scope.$apply(function(){
	                scope.color = "red";
	                scope.style = attr.style;
	            });
            });
            elem.bind('mouseover',function(){
                elem.css('cursor','pointer');
            });
        }
	}
})
