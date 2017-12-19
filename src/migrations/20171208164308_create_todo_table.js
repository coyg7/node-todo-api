/**
 * Create todo table.
 *
 * @param  {object} knex
 * @return {Promise}
 */
exports.up = function(knex) {
  return knex.schema.createTable('todo', table => {
    table.increments();
    table
      .timestamp('created_at')
      .notNull()
      .defaultTo(knex.raw('now()'));
    table.string('name').notNull();
    table
      .boolean('done')
      .notNull()
      .defaultTo(false);
    table.timestamp('updated_at').notNull();
    table
      .integer('user_id')
      .unsigned()
      .notNull();
    table.foreign('user_id').references('users.id');
  });
};

/**
 * Drop todo table.
 *
 * @param  {object} knex
 * @return {Promise}
 */
exports.down = function(knex) {
  return knex.schema.dropTable('todo');
};
