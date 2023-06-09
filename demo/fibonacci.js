const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("Please enter max number : ", number => {
    if(!isNaN(number)){
        x=0
        z=0
        for( y=0 ; z<=number ;){
            if (x==0){
                console.log(y)
                y=1
            }
            z=x+y
            x=y
            console.log(y)
            y=z
            
        }
    }           
    reader.close();
})
