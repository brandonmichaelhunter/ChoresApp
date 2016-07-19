app.directive('email',  function($q, $timeout, GetUsernames) {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        var usernames = ['Jim', 'John', 'Jill', 'Jackie'];
        var existingEmail = '';
        ctrl.$asyncValidators.email = function(modelValue, viewValue) {
          debugger;
          if (ctrl.$isEmpty(modelValue)) {

            return false;
          }
          var def = $q.defer();

          def.notify('Querying the jsonplaceholder.typicode.com service')
          $http({method: 'GET', url: 'http://jsonplaceholder.typicode.com/users?username='+modelValue+'' }).then(
            function(response){

              if(response.data.length === 0){
                 def.resolve();
              }
              else{
                 def.reject();
              }
            },
            function(response)
            {
              alert("O no, you a problem man!!!");
            }
          );

          $timeout(function() {

            if (usernames.indexOf(modelValue) === -1) {
              def.resolve();
            } else {
              def.reject();
            }

          }, 2000);

          return def.promise;
        }
      }
    }
});
