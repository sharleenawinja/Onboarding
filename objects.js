const result = [
    {
        "clientNumber": "MOH1656058401",
        "nascopCccNumber": "16347-03383",
        "nameScore": 0.5500000000000000,
        "genderScore": 1.0000000000000000,
        "errorDescription": "Check Client Names"
    },

    {
        "clientNumber": "MOH1664267879",
        "nascopCccNumber": "15435-00241",
        "nameScore": 0.2857142857142857,
        "genderScore": 0.0000000000000000,
        "errorDescription": "Check Client Details & Identification Documents"
    },

    {
        "clientNumber": "MOH1667562012",
        "nascopCccNumber": "16347-06917",
        "nameScore": 0.7777777777777778,
        "genderScore": 0.0000000000000000,
        "errorDescription": "Confirm Client Gender"
    }
]

let sql = '';

for(let i = 0; i < result.length; i++) {
    sql += `INSERT INTO test(clientnumber, cccnumber, namescore, genderscore, errordescription) 
    VALUES ("${result[i].clientNumber}, ${result[i].nascopCccNumber}, ${result[i].nameScore}, ${result[i].genderScore}, ${result[i].errorDescription});\n`;
}

console.log(sql);



// result.forEach((item) => {
//     let arr = [];
//     let data = Object.values(item);
//     console.log(data);
// });



// let mysql = require('mysql');

// let config = {
//     host: "localhost",
//     user: "sqluser",
//     password: "password",
//     database: "testdb"
//   };

// let connection = mysql.createConnection(config);

// let sql = `INSERT INTO test(clientnumber, cccnumber, namescore, genderscore, errordescription)
//            VALUES("MOH1667562012","16347-06917", 0.7777777777777778, 0.0000000000000000, "Confirm Client Gender")`;

// connection.query(sql);

// connection.end();

//let mysql = require('mysql');

// let connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'testdb'
// });

// connection.connect(function(err) {
//     if (err) {
//       return console.error('error: ' + err.message);
//     }
  
//     console.log('Connected to the MySQL server.');
//   });
  
