// 
const { parse } = require('csv-parse');
const fs  = require('fs'); 
const path = require('path');
const stream= require('stream');

// const readable = getReadableStreamSomehow();
// readable.on('data', (chunk)=> {
//     console.log(`Recieved ${chunk.length} bytes of data`);

// });

// using csv =-json
// var csvFile = fs.readFileSync(path.join(__dirname,'cumulative_2022.07.11_10.45.06.csv'))

// var options = {
//     comment : '#',
//     columns : true
// }

// parse.toObject(csvFile,options);
const habitablePlanets = []; 

function isHabitable(planet){
    return planet['koi_disposition'] === 'CONFIRMED' && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 && planet['koi_prad'] < 1.6;
}

fs.createReadStream('cumulative_2022.07.11_10.45.06.csv').pipe(parse({
    comment: '#',
    columns: true,
})) // piping two streams together
.on('data', (data) => {
    if (isHabitable(data)){
    habitablePlanets.push(data);
    }
})
.on('error',(err) => {
    console.log(err);
})
.on('end' , () => {
    console.log(habitablePlanets.map((planet)=>{
        return planet['kepler_name'];
    }));
    console.log(`${habitablePlanets.length} habitable planets`);
    console.log('done');
});
    