const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// find prime number from 0 to number
reader.question("Please enter max number : ", number => {
    
    if(!isNaN(number)){                                             // Check input data is numeric data
        if(number>0){
            for( i=2 ; i<=number ; i++ ){
            
                if(i==2){
                    console.log(i)
                    continue
                }
    
                if(i%2==0){                                         // filter even number
                    continue
                }
                
                isPrimeNumber = true
                for(x=3; x<=i/2; x=x+2){
                    if( i%x == 0){
                        isPrimeNumber = false
                        break
                    }
                }
    
                if(isPrimeNumber){
                    console.log(i)
                }    
            } 
        } else {
            console.log("Input data must be numeric positive")
        }        
    }
    reader.close();
})
