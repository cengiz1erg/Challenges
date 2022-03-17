function findMaxNumberInArray(arr){
    return Math.max(...arr.map(item => item.length))
}

function solution(Number) {
    try {
        var binaryResult = (Number >>> 0).toString(2);  
        var zeroCount = binaryResult.split('0').length - 1;      
        var oneCount = binaryResult.split('1').length - 1;
        if (oneCount > 1 && zeroCount > 0) {
            var myArray = binaryResult.split("1");
            var gapCount = myArray.filter(x => x === '').length;
            if (gapCount == 2) { 
                return findMaxNumberInArray(myArray)
            }else if(gapCount == 1){
                if (myArray[0] == '') {
                    myArray.shift()
                    return findMaxNumberInArray(myArray)
                }else{
                    myArray.pop()
                    return findMaxNumberInArray(myArray)
                }
            }else{
                myArray.pop()
                myArray.shift()
                return findMaxNumberInArray(myArray)
            }
        }else{
            return 0;
        }
    }
    catch (err) {
        console.log("err: " + err);
    }
}

var startTime = performance.now()
var myNumber = 15
console.log(solution(myNumber))
var endTime = performance.now()
console.log(`Call to version2-slicing took ${endTime - startTime} milliseconds`)


