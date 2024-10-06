let arr=[1,2,3,4,5,6,7,8,9]
let even="";
let odd="";
for(let i=0;i<arr.length;i++){
    if(arr[i] % 2 == 0){
        even = even + arr[i]
        console.log("Even Num:",even)
    }
    else if(arr[i] % 2 == 1){
        odd = odd + arr[i]
        console.log("Odd Num:",odd)
    }
}
for (let j=0; j <= arr.length; j++) {
    let pattern = '';
    for (let k = 1; k <= j ; k++) {
        pattern += '* ';
    }
    console.log(pattern);
}


