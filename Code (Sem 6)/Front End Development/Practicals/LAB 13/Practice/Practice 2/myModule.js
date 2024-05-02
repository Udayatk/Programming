//Step 1 Creatio n of the module
var app=angular.module("myModule",[]);

//Step 2 Creating controller using the module
app.controller("myController",($scope)=>{
    $scope.fname="Adi"//Fetch data from model 
    $scope.marks=69
})