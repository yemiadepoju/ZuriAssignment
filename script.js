// import the required modules

const request = require ('request');
const fs = require('fs')

// fetch the data from the API

const fetchData = request({

    url: "http://jsonplaceholder.typicode.com/posts",
    json:true
}, (err, res, body) => {
    if (err) throw err;
    console.log(body);
})

// Next we need to dtringify the JSON Data

const data = JSON.stringify(fetchData);

// We create a directory where we put the data from the API

fs.mkdir("result", (err) => {
    if (err) throw err;
    fs.writeFile('./result/posts.json',data, (err) => {
        if (err) throw err;
        console.log("Directory and file has been created successfully");
    })
})
