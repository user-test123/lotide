
const takeUntil = function(array, callback) {
   
    let arrResult = [];

     for(let i = 0; i < array.length; i++) {

        if(!callback(array[i])) {
        // console.log(array[i]);
            arrResult.push(array[i]);
            
        } else {
            i = array.length + 1;
            // console.log(array[i]);

        }

    }
    
    return arrResult;

}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);