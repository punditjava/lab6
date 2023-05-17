const M = 8, N = 8;
 
var arr = new Array(M);
for (var i = 0; i < M; i++) {
    arr[i] = new Array(N);
    for (var j = 0; j < N; j++){
       if (Math.random() > 0.5){
          arr[i][j] = N*i + j;
       } else {
        arr[i][j] = String(N*i + j);
       }
    }
}
for (i = 0; i < M; i++) {
     arr[i] = arr[i].join().split(',').reverse()
}
console.log(arr);