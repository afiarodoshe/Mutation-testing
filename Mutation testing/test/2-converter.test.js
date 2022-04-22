const converter = require("../src/2-converter")

describe('converter' , ()=>{
    var BVAdata  = [
        ["ounces", 4, ['0.25 pounds', '0.00 tons']],
        ["pounds", 2 ,['32.00 ounces','0.00 tons']],
        ["tons", 2 ,['4000.00 pounds','64000.00 ounces']],
        ["", 10, 'wrong input']
        
    ]
    describe.each(BVAdata)('BVA: converter(%c, %i), Expected: %i', (a,b,expected) =>{
        test(`returns ${converter.WeightConverter(a,b)}`, ()=>{
            expect(converter.WeightConverter(a,b)).toEqual(expected);
        });
    });
});

describe('converter' , ()=>{
    var BVAdata  = [
        ["ounces", 10, [ '0.63 pounds', '0.00 tons' ]],
        ["ounces", 4, [ '0.25 pounds', '0.00 tons' ]],
        ["pounds", 6 ,[ '96.00 ounces', '0.00 tons' ]],
        ["pounds", -10 ,[ '-160.00 ounces', '-0.01 tons' ]],
        ["tons", 9 ,[ '18000.00 pounds', '288000.00 ounces' ]],
        ["", 0, 'wrong input'],
        ["kgs", 29, 'wrong input']
    ]
    describe.each(BVAdata)('BVA: converter(%c, %i), Expected: %i', (a,b,expected) =>{
        test(`returns ${converter.WeightConverter(a,b)}`, ()=>{
            expect(converter.WeightConverter(a,b)).toEqual(expected);
        });
    });
});