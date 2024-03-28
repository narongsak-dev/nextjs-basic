/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */


exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('students').del()

  await knex('students').insert([
    {id: 1, name: 'demo 1', age: 22},
    {id: 2, name: 'demo 2', age: 23},
    {id: 3, name: 'demo 3', age: 24},
    {id: 4, name: 'demo 4', age: 25},
    {id: 5, name: 'demo 5', age: 26},
  ]);

};
