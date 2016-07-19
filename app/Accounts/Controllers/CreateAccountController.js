app.controller("SampleCtrl", function($scope, $firebaseArray, Utility) {
  var ref = firebase.database().ref();//.child("Users");
  // download the data into a local object
  $scope.Users =  $firebaseArray(ref.child("Users"));
  $scope.Families = $firebaseArray(ref.child("Families"));
  //  var $scope.Users = $firebaseArray(ref);
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  //syncObject.$bindTo($scope, "data");
  //syncObject.$bindTo($scope, "Users");
  /* Capture a list of their kids. */
  $scope.kids = [];
  $scope.add = function() {
    var child = {
      childname: $scope.ChildName,
      birthyear: $scope.ChildBirthYear
    }
    console.log(child);

    $scope.kids.push(child);
    console.log($scope.kids)
    $scope.ChildName = '';
    $scope.ChildBirthYear = '';
  };
  // remove an item
  $scope.remove = function(index) {
    $scope.kids.splice(index, 1);
  };
  $scope.CreateUserAccount = function() {
    console.log($scope);

    console.log("Form $valid state value: " + $scope.FormSignUp.$valid);
    console.log("Form $invalid state value: " + $scope.FormSignUp.$invalid);
    console.log("Form $submitted state value: " + $scope.FormSignUp.$submitted);
    if($scope.FormSignUp.$valid){
      console.log("Validated - Valid")
      /*
      var familygroupid = Utility.CreateUniqueID();
      $scope.Users.$add({
      fistname: $scope.Users.Firstname,
      lastname: $scope.Users.Lastname,
      name: $scope.Users.Firstname + ' ' + $scope.Users.Lastname,
      email: $scope.Users.Email,
      password: $scope.Users.Password,
      approle: 'parent',
      iscomplete: true,
      familygroupid: familygroupid
    });

    for(var a = 0; a <= $scope.kids.length-1; a++)
    {
    var password = Utility.TrimString($scope.kids[a].childname);
    $scope.Users.$add({
    fistname: '',
    lastname: '',
    name: $scope.kids[a].childname,
    email: password+'@choresapp.com',
    password: $scope.kids[a].birthyear,
    approle:'child',
    iscomplete: true,
    familygroupid: familygroupid});
  }*/
}
};
});
