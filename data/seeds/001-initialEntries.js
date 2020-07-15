exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          VIN: 'a1b2c3d4e5f6g7h8i',
          make: 'Hyundai',
          model: 'Tucson',
          mileage: 48321,
        },
        {
          VIN: 'c3d4e5f6g7h8i2719',
          make: 'Volkswagen',
          model: 'Beetle',
          mileage: 92145,
        },
        {
          VIN: 'e5f6g7h8ia1b2c3d4',
          make: 'Honda',
          model: 'Accord',
          mileage: 5822,
        },
      ]);
    });
};
