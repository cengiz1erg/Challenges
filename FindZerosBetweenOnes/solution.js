function solution(Number){
    try {
        var binaryResult = (Number >>> 0).toString(2);
        var reg = /10+1/g;
        var matches = [], found;
        while (found = reg.exec(binaryResult)) {
            matches.push(found[0]);
            reg.lastIndex = found[0].length + found.index - 1
        }        
        if (matches.length == 0) {
            return 0
        }else{
            return Math.max(...(matches.map(match => match.length - 2)))
        }
    } catch (error) {
        console.log("err: " + err);
    }
}