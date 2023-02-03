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
              'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkU0MUU1QUM5RUIxNTlBMjc1NTY4NjM0MzIxMUJDQzAzMDMyMEUzMTZSUzI1NiIsIng1dCI6IjVCNWF5ZXNWbWlkVmFHTkRJUnZNQXdNZzR4WSIsInR5cCI6ImF0K2p3dCJ9.eyJpc3MiOiJodHRwczovL2FmeWFrZW55YWlkZW50aXR5YXBpLmhlYWx0aC5nby5rZSIsIm5iZiI6MTY3NTE1MTg1MCwiaWF0IjoxNjc1MTUxODUwLCJleHAiOjE2NzUyMzgyNTAsImF1ZCI6WyJESFAuR2F0ZXdheSIsIkRIUC5QYXJ0bmVycyJdLCJzY29wZSI6WyJESFAuR2F0ZXdheSIsIkRIUC5QYXJ0bmVycyJdLCJjbGllbnRfaWQiOiJhbXBhdGgucGFydG5lci5jbGllbnQiLCJqdGkiOiIzOUUwNjZCMDk1QUJDRDExRkQwNzMyRkM2MEY5NkEzQyJ9.cA0VxgGrm8_uo3yvuTv-hPPbigbS7741BxjWlCDEz25-CAWnkFjmPCxoxVEisVGXwEl7jL0AGjWL0bZbteBLp0vV52t4m207D6Mgd06qQwkCzyF6rQBa8CY4VUoLk_tWHAL3PBC9TFQTKd3LKHB6bp2WjZ0zodWPvhO61xjmRE_3YqtYh4U-LYMDJgWlqJdRspCXvfcVSl0NzEUQ4iaLa6ZIRM2wEWd2eYAkPu1mzd0-zaWDrps-5IKlTYkLMDwJtqyaJsaq8Uuni4lwA8kYisbxX3lNHTuxTbvAE71FLqn0-HLfzNsVRg9dlJr0zg6QPKvqC_HlZUfLVxU7S-3plg'
            },
        data : data
    };
    gettingData();
}

// var config = {
//     method: 'get',
//   maxBodyLength: Infinity,
//     url: `https://afyakenyaapi.health.go.ke/partners/registry/search/validation-results/kmfl/${locationsCode}`,
//     headers: { 
//       'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkU0MUU1QUM5RUIxNTlBMjc1NTY4NjM0MzIxMUJDQzAzMDMyMEUzMTZSUzI1NiIsIng1dCI6IjVCNWF5ZXNWbWlkVmFHTkRJUnZNQXdNZzR4WSIsInR5cCI6ImF0K2p3dCJ9.eyJpc3MiOiJodHRwczovL2FmeWFrZW55YWlkZW50aXR5YXBpLmhlYWx0aC5nby5rZSIsIm5iZiI6MTY3NTE1MTg1MCwiaWF0IjoxNjc1MTUxODUwLCJleHAiOjE2NzUyMzgyNTAsImF1ZCI6WyJESFAuR2F0ZXdheSIsIkRIUC5QYXJ0bmVycyJdLCJzY29wZSI6WyJESFAuR2F0ZXdheSIsIkRIUC5QYXJ0bmVycyJdLCJjbGllbnRfaWQiOiJhbXBhdGgucGFydG5lci5jbGllbnQiLCJqdGkiOiIzOUUwNjZCMDk1QUJDRDExRkQwNzMyRkM2MEY5NkEzQyJ9.cA0VxgGrm8_uo3yvuTv-hPPbigbS7741BxjWlCDEz25-CAWnkFjmPCxoxVEisVGXwEl7jL0AGjWL0bZbteBLp0vV52t4m207D6Mgd06qQwkCzyF6rQBa8CY4VUoLk_tWHAL3PBC9TFQTKd3LKHB6bp2WjZ0zodWPvhO61xjmRE_3YqtYh4U-LYMDJgWlqJdRspCXvfcVSl0NzEUQ4iaLa6ZIRM2wEWd2eYAkPu1mzd0-zaWDrps-5IKlTYkLMDwJtqyaJsaq8Uuni4lwA8kYisbxX3lNHTuxTbvAE71FLqn0-HLfzNsVRg9dlJr0zg6QPKvqC_HlZUfLVxU7S-3plg'
//     },
//     data : data
//   };



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