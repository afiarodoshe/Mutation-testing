const BMI = require("../src/1-BMI")

describe('BMI' , ()=>{
    var BVAdata  = [
        [180,60,'18.52'],
        ['',12,'Please provide a valid height'],
        [-1,60, 'Please provide a valid height'],
        [140,'','Please provide a valid weight'],
        [150,-1, 'Please provide a valid weight'],
         [0,60,"Infinity"],
        [160, 0, "0.00"]
    ]
    describe.each(BVAdata)('BVA: BMI(%i, %i), Expected: %i', (a,b,expected) =>{
        test(`returns ${BMI.calculateBMI(a,b)}`, ()=>{
            expect(BMI.calculateBMI(a,b)).toBe(expected);
        });
    });

    var DTdata = [
        [180,60,'18.52'],
        ['',12,'Please provide a valid height'],
        [-1,60, 'Please provide a valid height'],
        [140,'','Please provide a valid weight'],
        [150,-1, 'Please provide a valid weight'],
        [50, 160, '640.00']
    ]
    describe.each(DTdata)('DT: BMI(%i, %i), Expected: %i', (a,b,expected) =>{
        test(`returns ${BMI.calculateBMI(a,b)}`, ()=>{
            expect(BMI.calculateBMI(a,b)).toBe(expected);
        });
    });
});