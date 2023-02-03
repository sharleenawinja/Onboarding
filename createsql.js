var axios = require('axios');
const fs = require('fs');
const { locations } = require('./locations.js');
var data = '';

for(i = 0; i < locations.length; i++) {
    let locationsCode = locations[i].toString();
    var config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://afyakenyaapi.health.go.ke/partners/registry/search/validation-results/kmfl/${locationsCode}`,
        headers: { 
              'Authorization': 
            },
        data : data
    };
    gettingData();
}



async function gettingData() {
    try {
        axios(config)
        .then((response) => {
            let data = response.data;
            let resultsArray = data.results;
            let sqlStatements = resultsArray?.map((item) => {
                return `INSERT INTO clients(ClientNumber, cccNumber, Namescore, Genderscore, ErrorDescription) 
                VALUES ('${item.clientNumber}', '${item.nascopCccNumber}', ${item.nameScore}, ${item.genderScore}, '${item.errorDescription}');\n`;
            });

            sqlQueries = sqlStatements?.join('');

            if (sqlQueries) {
                fs.appendFile('./test.sql', sqlQueries, err => {
                    if (err) {
                        console.log(err);
                    } console.log('added successfully');
                })
            }
            

        })
    } catch (err) {
        console.log(err);
    };
};

// gettingData();

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });
