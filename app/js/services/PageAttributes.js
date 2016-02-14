footballData.factory('pageAttributes', function(){
  var title = 'Football Data Angular';
  return {
    title: function() { return title; },
    setTitle: function(newTitle) { title = newTitle; }
  };
});