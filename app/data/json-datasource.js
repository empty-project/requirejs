define(['json!data/customers.json'], function(customers){

  var getRow = function(id) {
    return customers[id];
  };

  var getAll = function() {
    return customers;
  };

  var update = function(data) {
    // do something cool with the data
  };

  return {
    get: getRow,
    list: getAll,
    update: update
  };
});

