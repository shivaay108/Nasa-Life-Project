const EventEmitter = require('events');
const akshay = new EventEmitter();

akshay.on('movie',(result)=>{
    if(result === 'hit'){
        console.log('badhai ho');
    }
})

akshay.on('movie',(result)=>{
    if(result==="flop"){
        console.log('paise wapis kr');
    }
})

akshay.emit('movie','flop');