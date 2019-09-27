const mysql = require("mysql");
const {promisify} = require("util");
//const faker =require('faker');



const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "joinUs"
});

const promisifiedQuery = promisify(connection.query).bind(connection);

const runQuery = async () => {
    try {
        let data = await promisifiedQuery('SELECT *FROM users');
        return(data);
    }   catch (error) {
        console.log(error.sqlMessage);
    }
     connection.end();
};

// const bulkAdd = () => {
//     let people = [];
//     for (i = 0; i<500; i++) {
//         people.push([faker.internet.email(),faker.date.past()])
//     }
//     return people;
// };


const addEmail = async () => {
    try {
    
        const queryStringAdd = `INSERT INTO users(email) VALUES ("${email}")`;
        let data = await promisifiedQuery (queryStringAdd);
        return(data);
    }   catch (error) {
        console.log(error.sqlMessage);
    }
};



//addEmail();

module.exports = {
    runQuery,
    addEmail
};