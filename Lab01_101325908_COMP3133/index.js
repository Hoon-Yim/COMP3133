const fs = require("fs");
const csvParser = require("csv-parser");

PATH = `${__dirname}`;
countriesPATH = PATH + "\\input_countries.csv";
canadaPATH = PATH + "\\canada.csv";
usaPATH = PATH + "\\usa.csv";

// remove canada.txt and usa.txt if exist
fs.stat(canadaPATH, (err, stats) => {
    if (err) return console.log("There is no " + canadaPATH + " File to remove\n");

    fs.unlink(canadaPATH, err => {
        if (err) return console.error(err);
        console.log(canadaPATH + " File has been removed successfully\n");
    })
});

fs.stat(usaPATH, (err, stats) => {
    if (err) return console.log("There is no " + usaPATH + " File to remove\n");

    fs.unlink(usaPATH, err => {
        if (err) return console.error(err);
        console.log(usaPATH + " File has been removed successfully\n");
    })
});

// reading csv file and extracting data for canada and usa only
const canadaData = [];
const usaData = [];
fs
    .createReadStream(countriesPATH)
    .pipe(csvParser())
    .on("data", data => {
        if (data.country === "Canada") canadaData.push(data)
        if (data.country === "United States") usaData.push(data)
    })
    .on("end", (err) => {
        if (err === undefined 
            && canadaData.length > 0 
            && usaData.length > 0) 
        {
            // converting objects to csv file format
            const keys = Object.keys(canadaData[0]).toString() + "\n";

            canadaCSV = keys;
            canadaData.forEach(obj => {
                canadaCSV += `${obj.country},${obj.year},${obj.population}\n`;
            });

            usaCSV = keys;
            usaData.forEach(obj => {
                usaCSV += `${obj.country},${obj.year},${obj.population}\n`;
            });

            // creating files and writing data in them
            fs.writeFile(canadaPATH, canadaCSV, err => {
                if (err) console.error(err);
                else console.log("canada.csv has been successfully created!");
            });
            fs.writeFile(usaPATH, usaCSV, err => {
                if (err) console.error(err);
                else console.log("usa.csv has been successfully created!");
            });
        }
    });
