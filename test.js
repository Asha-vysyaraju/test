// Given an array of n elements
//INPUT 5
// 3 2 1 2 3
//output
// 2 3 2 1 3

var n=5
var arr=[3,2,1,2,3]
for(var i=0;i<n;i++){
    if(i%2==0){
        if(i+1<n){
        var temp= arr[i]
        arr[i]=arr[i+1]
        arr[i+1]=temp
    }
    }
}
console.log(arr)
