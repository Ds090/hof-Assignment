// The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
// variable so can be modified. The program displays a message every second indicating the time remaining
// until the random number is generated and then outputs the generated number.


function Randomnum(num) {
    let delayTime = num;

    const interval = setInterval(() => {
        console.log(`Time remmining: ${delayTime} Seconds`);
        delayTime--;
        if (delayTime < 1) {
            clearInterval(interval);

            const Randomnum = Math.floor(Math.random() * 100);
            console.log(`Genreted random number: ${Randomnum}`);
        }
    }, 1000);
}

// const delayTime = 3;

Randomnum(3);

  
  