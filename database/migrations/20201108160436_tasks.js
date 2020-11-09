
exports.up = function(knex) {
  return knex.schema.createTable('tasks', tbl => {
      tbl.increments()
      tbl.string('tag').notNullable()
      tbl.string('content').notNullable()
      tbl.string('response')
      tbl.boolean('done')
      tbl.timestamp('created_at').defaultTo(knex.fn.now())
  } )
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks')
};
