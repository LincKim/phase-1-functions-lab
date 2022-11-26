// Code your solution in this file!
const distanceFromHqInBlocks = function(block){
    const hqBlock = 42
 
        return Math.abs(block - `${hqBlock}`);
}
distanceFromHqInBlocks(43)
distanceFromHqInBlocks(50)
distanceFromHqInBlocks(34)

const distanceFromHqInFeet = function(block) {
    const blockNumber = 42
    const eachBlockFt = 264
        return Math.abs(block - `${blockNumber}`) * eachBlockFt
}
distanceFromHqInFeet(43)
distanceFromHqInFeet(50)
distanceFromHqInFeet(34)

const distanceTravelledInFeet = function(start, destination){
   const eachBlockFt1 = 264
   let answer = Number.parseInt(`${start}` - `${destination}`)
        return Math.abs(answer) * eachBlockFt1
}
distanceTravelledInFeet(43, 48)
distanceTravelledInFeet(50, 60)
distanceTravelledInFeet(34, 28)

const calculatesFarePrice = function(start, destination) {
    let distBtnBlockFt = Math.abs(`${start}` - `${destination}`) * 264
    let blockCharge = Math.abs(400 - distBtnBlockFt)
    let fare = blockCharge * 0.02
    let fare2 = 25
    if ( distBtnBlockFt <= 400)
        return 0;
    else if (distBtnBlockFt > 400 && distBtnBlockFt <= 2000)
        return fare;
    else if(distBtnBlockFt > 2000 && distBtnBlockFt <= 2500)
        return fare2;
    else {
        return 'cannot travel that far';
    }
}
// calculatesFarePrice(43,44)
// calculatesFarePrice(34,32)
// calculatesFarePrice(50,58)
// calculatesFarePrice(34,24)


