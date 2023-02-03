const result = [
    {
        "clientNumber": "M1",
        "ccNumber": "2",
        "nameScore": 0.523,
        "genderScore": 1.75,
        "errorDescription": "Check Client Names"
    },

    {
        "clientNumber": "M9",
        "ccNumber": "11",
        "nameScore": 0.857,
        "genderScore": 0.0,
        "errorDescription": "Check Client Details & Identification Documents"
    },

    {
        "clientNumber": "M12",
        "cNumber": "17",
        "nameScore": 0.8,
        "genderScore": 0.2,
        "errorDescription": "Confirm Client Gender"
    }
];


const fs = require('fs');
//const axios = require('axios');
let sql = '';

async function gettingData() {
    //try {
    //     axios.get('https://afyakenyaapi.health.go.ke/partners/registry/search/validation-results/kmfl/15204')
    // .then((response) => {
    //     let data = response.data;
    const data = result.map((item) => {
        return `INSERT INTO test(clientnumber, cccnumber, namescore, genderscore, errordescription) 
        VALUES ('${item.clientNumber}', '${item.nascopCccNumber}', ${item.nameScore}, ${item.genderScore}, '${item.errorDescription}');\n`;
    })
    // for(let i = 0; i < result.length; i++) {
    //     sql += `INSERT INTO test(clientnumber, cccnumber, namescore, genderscore, errordescription) 
    //     VALUES ('${result[i].clientNumber}', '${result[i].nascopCccNumber}', ${result[i].nameScore}, ${result[i].genderScore}, '${result[i].errorDescription}');\n`;
    // };
    console.log(data);

    const dataToString = data.toString();

        // data.forEach(raw => {
        //     fs.appendFile('./test.sql', raw, err => {
        //         if(err) {
        //             console.log(err);
        //         } console.log('added successfuly');
        //     });
        // }
        // ) 

     fs.appendFile('./test.sql', dataToString, err => {
        if(err) {
            console.log(err);
        } console.log('added successfully');
     });   
};

gettingData();








