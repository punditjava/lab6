const M = 6, K = 6;
 
var arr = new Array(M);
for (var i = 0; i < M; i++) {
    arr[i] = new Array(K);
    for (var j = 0; j < K; j++){
       arr[i][j] = 'A';
    }
}
for (i = 0; i < K - 4; i++) {
    arr.unshift("a");
}
for (i = 0; i < M - 3; i++) {
    arr.pop();
}
console.log(arr);