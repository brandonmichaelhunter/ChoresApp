app.service("Utility", function(){

  /* Strips any spaces within the text value */
  this.TrimString = function(text){
    return text.split(" ").join("");
  }

  /* Generates a unique id in a GUID format.*/
  this.CreateUniqueID = function(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
  }
});

app.service('GetUsernames', function(){
  return{
    getResult: function(){
      var ref = firebase.database().ref();//.child("Users");
      // download the data into a local object
      return $firebaseArray(ref.child("Users"));
    }
  }
});
