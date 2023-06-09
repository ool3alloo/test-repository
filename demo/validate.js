const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Check input number จะต้องกันไม่ให้มีเลขซ้ำติดกันเกิน 2 ตัว
function validate1(number){
    result = false

    for( i=0 ; i<4 ; i++ ){
        if ( number.charAt(i) == number.charAt(i+1) && number.charAt(i+1) == number.charAt(i+2)){
            result = true
            console.log(`input number จะต้องกันไม่ให้มีเลขซ้ำติดกันเกิน 2 ตัว ${number.charAt(i)}${number.charAt(i+1)}${number.charAt(i+2)}`)
            break
        }
    }

    return result;
}

// Check input number จะต้องกันไม่ให้มีเลขเรียงกันเกิน 2 ตัว
function validate2(number){
    result = false

    for( i=0 ; i<4 ; i++ ){
        if ( parseInt(number.charAt(i),10) + 2 == parseInt(number.charAt(i+1),10) + 1 && parseInt(number.charAt(i+1),10) + 1 == parseInt(number.charAt(i+2),10)
        || parseInt(number.charAt(i),10) - 2 == parseInt(number.charAt(i+1),10) - 1 && parseInt(number.charAt(i+1),10) - 1 == parseInt(number.charAt(i+2),10)){
            result = true
            console.log(`input number จะต้องกันไม่ให้มีเลขเรียงกันเกิน 2 ตัว ${number.charAt(i)}${number.charAt(i+1)}${number.charAt(i+2)}`)
            break
        }
    }

    return result;
}

// Check input number จะต้องกันไม่ให้มีเลขชุดซ้ำ เกิน 2 ชุด
function validate3(number){
    result = true

    for( i=0 ; i<=4 ; i=i+2 ){
        if ( number.charAt(i) != number.charAt(i+1)){
            result = false
            break
        }
    }
    if(result){
        console.log(`input number จะต้องกันไม่ให้มีเลขชุดซ้ำ เกิน 2 ชุด ${number}`)
    }
    
    return result;
}

reader.question("Please enter pincode 6 number : ", number => {
    
    if(number.length != 6){                                  // Check input data length  equal to 6
        console.log(`Number ${number} is wrong size`)        
    } else if(isNaN(number)){                                // Check input data is numeric data
        console.log(`Number ${number} is not numeric`)
    } else if(validate1(number)){                            // Check input data จะต้องกันไม่ให้มีเลขซ้ำติดกันเกิน 2 ตัว
        console.log(`Number ${number} is invalid`)
    } else if(validate2(number)){                            // Check input data จะต้องกันไม่ให้มีเลขเรียงกันเกิน 2 ตัว
        console.log(`Number ${number} is invalid`)
    } else if(validate3(number)){                            // Check input data จะต้องกันไม่ให้มีเลขชุดซ้ำ เกิน 2 ชุด
        console.log(`Number ${number} is invalid`)
    } else {
        console.log(`Number ${number} is valid`)
    }
        
    reader.close();
})
