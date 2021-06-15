import express from 'express';
import rawData from './rawdata.js';
import { enumGender, enumWorker, enumCity } from './enum.js';

const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.status(200).json({
        message: "test endpoint"
    })
})

app.get('/gender', (req, res) => {

    const data = {};
    for(const gender in enumGender){
        data[enumGender[gender]] = rawData.filter(val => val.jenis_kelamin === gender).length;
    }
    
    res.status(200).json({
        message: "Count of gender",
        data
    })
})

app.get('/worker', (req, res) => {

    const data = {};
    for(const worker in enumWorker){
        data[enumWorker[worker]] = {};
        for(const gender in enumGender){
            data[enumWorker[worker]][enumGender[gender]] = rawData.filter(val => val.jenis_kelamin === gender && val.pekerjaan === worker).length;
        }
    }

    res.status(200).json({
        message: "Count of worker",
        data
    })
})

app.get('/city', (req, res) => {

    const data = {};
    for(const city in enumCity){
        data[enumCity[city]] = rawData.filter(val => val.Kota === city).length;
    }

    const dataSorted = Object.keys(data).sort((a,b) => data[b] - data[a]).map( val => ({
            city: val,
            count: data[val]
    }));

    res.status(200).json({
        message: "Count of cities",
        data: dataSorted
    })
})


app.get('/education', (req, res) => {

    const filter = [
        '5',
        '6',
        '7',
        '8',
    ];

    const data = rawData.filter(val => filter.indexOf(val.pendidikan) !== -1).map(val => val.Nama);

    res.status(200).json({
        message: "Count of educations",
        data
    })
})


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})