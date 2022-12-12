//Purchasing CLay
const buyClay = () => {
    return clay = {}
}

//Throw a Bowl
const makePottery = (clayObject) => {
    clayObject.shape = "bowl"
    return clayObject
}

//Bisque Firing
const bisqueFire = (clayObject) => {
    clayObject.readyForGlazing = true
    return clayObject
}

//Glaze the Bowl
const glazePottery = (clayObject) => {
    if (!clayObject.readyForGlazing) {
        clayObject = "Make sure you bisque fire the pottery before you glaze it."
    }
    else {
        clayObject.glazing = "Midnight Blue"
    }
    return clayObject
}
//Fire the Bowl
const finalFiring = (clayObject, kilnTemp) => {
    if (kilnTemp > 1200) {
        clayObject.cracked = true
    }
    else {
        clayObject.cracked = false
    }
    return clayObject
}
const newBowl = buyClay()
const newBowlOne = makePottery(newBowl)
const glazedBowl = bisqueFire(newBowlOne)
const midnightBowl = glazePottery(glazedBowl)
const uncrackedBowl = finalFiring(midnightBowl, 1199)
console.log(uncrackedBowl)