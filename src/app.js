const express = require('express')
const app = express()
const PORT = 8000

const carData = {
    sedan: {
        make: 'Toyota',
        model: 'Camry',
        year: 2022,
        color: 'silver',
        fuelType: 'gasoline',
        engineSize: '2.5L',
        horsepower: 203,
        seatingCapacity: 5,
    },
    suv: {
        make: 'Honda',
        model: 'CR-V',
        year: 2021,
        color: 'red',
        fuelType: 'gasoline',
        engineSize: '1.5L',
        horsepower: 190,
        seatingCapacity: 5,
    },
    sportsCar: {
        make: 'Porsche',
        model: '911',
        year: 2023,
        color: 'black',
        fuelType: 'gasoline',
        engineSize: '3.0L',
        horsepower: 443,
        seatingCapacity: 2,
    },
    unknown: {
        make: 'unknown',
        model: 'unknown',
        year: 0,
        color: 'unknown',
        fuelType: 'unknown',
        engineSize: 'unknown',
        horsepower: 0,
        seatingCapacity: 0,
    },
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:query', (req, res) => {
    const query = req.params.query.toLowerCase()
    if (carData[query]) {
        res.send(carData[query])
    } else {
        res.json(carData.unknown)
    }
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
