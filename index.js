// Code your solution in this file!
function distanceFromHqInBlocks(block){
    return(Math.abs(42-block))
}
function distanceFromHqInFeet(block){
    let blocks = distanceFromHqInBlocks(block)
    return(blocks*264)
}
function distanceTravelledInFeet(start,dest){
    return((Math.abs(dest-start))*264)
}
function calculatesFarePrice(start,dest){
    let distance = distanceTravelledInFeet(start,dest)
    if(distance<=400){
        return (0)
    }
    else if(distance > 400 && distance <= 2000){
        distance = distance - 400;
        return((2*distance)/100)
    }
    else if(distance >2000 && distance <=2500){
        return(25)
    }
    else if (distance > 2500){
        return('cannot travel that far')
    }
}