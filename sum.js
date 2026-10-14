function sum(n){
    var result=0;
    for (let i=1;i<=n;i++){
        result +=i;
    }

    var sign = 1;
    result = 0;
    for (let index=1;index<=n;index++){
        result += sign * index;
        sign *= -1;

    }


    return result;    
//do 

//while

}
console.log("1+2+...+1000000=" + sum(1000000));

