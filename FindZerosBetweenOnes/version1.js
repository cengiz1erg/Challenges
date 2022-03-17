function getAllIndexes(arr, val) {
    var indexes = [], i;
    for (i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
}

function zeroCounterInArray(ary) {
    var newA = [];
    for (var i = 1; i < ary.length; i++) {
        var diff = ary[i] - ary[i - 1] - 1
        if (diff > 0)
            newA.push(diff)
    }
    return newA;
}

function solution(Number) {
    try {
        var binaryResult = (Number >>> 0).toString(2);
        var zeroCount = binaryResult.split('0').length - 1;
        var oneCount = binaryResult.split('1').length - 1;
        if (oneCount > 1 && zeroCount > 0) {
            var myIndexes = getAllIndexes(binaryResult, '1')
            if (myIndexes.length < 2) {
                alert("Sayıda ikiden az 1 var")
                return 0
            } else {
                var result = zeroCounterInArray(myIndexes)
                var maxNumber = Math.max( ...result );
                return maxNumber
            }
        }else{
            return 0
        }
    }
    catch (err) {
        console.log(err);
    }
}

var startTime = performance.now()
var myNumber = 15
console.log(solution(myNumber))
var endTime = performance.now()
console.log(`Call to version1 took ${endTime - startTime} milliseconds`)