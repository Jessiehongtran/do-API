
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          tag: 'Speaking',
          content: 'Talk about the happiest day in your life',
          response: '',
          done: false
        },
        {
          tag: 'Quote',
          content: 'Sitting quietly, doing nothing, Spring comes, and the grass grows by itself',
          response: '',
          done: false
        },
        {
          tag: 'Writing',
          content: 'Why do people care so much about what others think about them?',
          response: '',
          done: false
        },
        {
          tag: 'Writing',
          content: 'Should we always dress up before going out?',
          response: '',
          done: false
        },
      ]);
    });
};
