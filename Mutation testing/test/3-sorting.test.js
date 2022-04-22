const sort = require('../src/3-sorting')

describe('sorting', ()=>{
    var BVAdata= [
        [[23,23,343,234,232,43],[23,23,43,232,234,343]],
        [[23,23,343,234,222,43],[23,23,43,222,234,343]],
        [[],[]],
        [[7,-9,-6,8],[-9,-6,7,8]],
        [[7],[7]]
    ]
    describe.each(BVAdata)('BVA: Sort(%a), Expected: %a', (a,expected)=>{
        test(`returns ${sort.bubbleSort(a)}`,()=>{
            expect(sort.bubbleSort(a)).toEqual(expected);
        });
    });
    });