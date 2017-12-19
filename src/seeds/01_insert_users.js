/**
 * Seed users table.
 *
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */
export function seed(knex, Promise) {
  // Deletes all existing entries
  return knex('users')
    .del()
    .then(() => {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          first_name: 'sachit',
          last_name: 'shrestha',
          email: 'sachitsh@gmail.com',
          updated_at: new Date(),
          password: 'sachitdon'
        }),
        knex('users').insert({
          first_name: 'aaron',
          last_name: 'ramsey',
          email: 'aaromramsey8@gmail.com',
          updated_at: new Date(),
          password: 'gogunners'
        })
      ]);
    });
}
