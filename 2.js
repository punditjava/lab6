const M = 5, N = 7;
 
var arr = new Array(M);
for (var i = 0; i < M; i++) {
    arr[i] = new Array(N);
    for (var j = 0; j < N; j++){
       arr[i][j] = N*i + j;
    }
    if (i % 2 === 0) {
      arr[i].sort().reverse();
    }
}
console.log(arr);