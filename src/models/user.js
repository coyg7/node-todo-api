import bookshelf from '../db';

import Todo from './todo';
/**
 * User model.
 */
let User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  todos: () => {
    return this.hasMany(Todo);
  }
});

export default User;
