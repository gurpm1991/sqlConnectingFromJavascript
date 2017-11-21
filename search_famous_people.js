const pg = require("pg");
const settings = require("./settings"); // settings.json
const newFirstName = process.argv[2];
const newLastName = process.argv[3];
const newDate = process.argv[4];

const knex = require("knex") ({
  client: 'pg',
  connection : {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  }
})

knex('famous_people')
  .insert({first_name: newFirstName, last_name: newLastName, birthdate: newDate})
  .then(function(rows) {
  console.log(newFirstName+ " "+ newLastName +" "+newDate+ " successfully inserted");
})
  .catch(function(err) {
  console.console.log(err);
})



knex.destroy();