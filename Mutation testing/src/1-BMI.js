function calculateBMI(heightInCM, weightInKG)
{
    if((heightInCM === '') || (heightInCM < 0) || (isNaN(heightInCM))){
        return "Please provide a valid height"; 
    } else if (weightInKG === '' || weightInKG < 0 || isNaN(weightInKG)){
        return"Please provide a valid weight";
    } else {
        return (weightInKG / ((heightInCM*heightInCM)/10000)).toFixed(2);
    }
}
console.log(calculateBMI(180,60));

module.exports = {
    calculateBMI
}