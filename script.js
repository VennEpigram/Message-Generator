const randMessage=()=>{
let messageParts={
    1:"dont eat plastic ",
    2:"for one to live without confusion ",
    3:"so that you may jump again ",
    4:"so as to not break windows ",
    5:"for cheese to be ready ",
    6:"do the chiken dance ",
    7:"for the health of your mind ",
    8:"lock the door ",
    9:"jump once more ",
    10:"come up with 10 phrases "}
    let part1=messageParts[Math.floor(Math.random()*10)+1];
    let part2=messageParts[Math.floor(Math.random()*10)+1];
    while(part1==part2){
        part2=messageParts[Math.floor(Math.random()*10)+1];
    }
let fullMessage=part1  + part2;
    return fullMessage;
}
console.log(randMessage());




