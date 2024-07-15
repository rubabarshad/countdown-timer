import inquirer from "inquirer";
import {differenceInSeconds} from "date-fns";

const res = await  inquirer.prompt([{
    name:'userInput',
    type:'number',
    message:"Please enter the amount of second",
    validate:(input:any)=>{
        if (input === undefined || isNaN(input)){
            return "please enter valid number"
        }else if (input > 60){
            return "seconds must be in 60"
        }else{
            return true;
        }
    }
}]);

let input = res.userInput 

function startTime(val:number){
    let initTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(initTime);
    setInterval((()=>{
        const currentTime = new Date();
        const timeDifference = differenceInSeconds(intervalTime, currentTime);
        if(timeDifference <= 0){
            console.log("Timer has expired.");
            process.exit();
        }const min = Math.floor((timeDifference%(3600*24))/3600);
        const sec = Math.floor(timeDifference%60)
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
        
    }),1000);
}
startTime(input)

