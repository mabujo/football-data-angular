/**
 * orderObjectBy filter
 * from : http://stackoverflow.com/a/27070414
 * @param  {Array}  ) {             return function(items, field, reverse) {    var filtered [description]
 * @return {[type]}   [description]
 */
footballData.filter('orderObjectBy', function() {
  return function(items, field, reverse) {
    var filtered = [];
    angular.forEach(items, function(item) {
      filtered.push(item);
    });
    filtered.sort(function (a, b) {
      return (a[field] > b[field] ? 1 : -1);
    });
    if(reverse) filtered.reverse();
    return filtered;
  };
});