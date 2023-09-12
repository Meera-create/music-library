const db = require('../src/db')

afterEach(async () => {
  await db.query('TRUNCATE Artists CASCADE')
})
//aftereach will delete all records in database after each test has run and close the database connection
