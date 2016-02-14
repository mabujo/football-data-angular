'use strict';

footballData.filter('teamIdFromUrl', function() {
  return function(teamUrl) {
    var id = teamUrl.match(/\/([^/]*)$/)[1];
    return id;
  };
});