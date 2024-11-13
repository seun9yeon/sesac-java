let N = 10;

for (i = 1; i <= N; i++) {
  console.log(i);
}

let M = 10;

for (i = 1; i <= M; i++) {
  console.log(i);
}

for (i = 1; i <= N; i++) {
  for (j = 1; j <= M; j++) {
    console.log(i * j);
  }
}
