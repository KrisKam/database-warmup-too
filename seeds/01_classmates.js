
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('classmates').del()
    .then(function () {
      // Inserts seed entries
      return knex('classmates').insert([
        {first: 'Bo', last: 'Barley'},
        {first: 'Candace', last: 'Cranston'},
        {first: 'Janine', last: 'Bartlett'}
      ]);
    });
};
