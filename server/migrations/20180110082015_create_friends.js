
exports.up = function(knex, Promise) {
  return knex.schema.createTable('friends', (table)=>{
    table.increments();
    table.string('name').notNullable();
    table.string('phone_number');
    table.string('email');
    table.integer('email_duration');
    table.integer('phone_duration');
    table.integer('text_duration');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('friends');
};
