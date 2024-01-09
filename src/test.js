const { Z_ASCII } = require("zlib");

class Queue {
  constructor() {
    this.items = {};
    this.startIndex = 0;
    this.endIndex = 0
  }

  enqueue(item) {
    this.items[this.endIndex] = item;
    this.endIndex++;
  }

  dequeue() {
    let item = this.items[this.startIndex];
    delete this.items[this.startIndex];
    this.startIndex++;
    return item;
  }

  peek() {
    return this.items[this.startIndex];
  }

  getLength() {
    return this.endIndex - this.startIndex;
  }
}

let input = '4 3 2 1\n1 2\n1 3\n1 4'.split('\n');

let [n, m, k, x] = input[0].split(' ').map(Number);

let graph = []; 
for(let i=1; i<=n; i++){
    graph[i] =[];
} 
for(let i=1; i<=m; i++){ 
  let [ q, w ] = input[i].split(' ').map(Number); 
  graph[q].push(w); 
}

let distance = new Array(n+1).fill(-1); 
distance[x] = 0; 

let queue = new Queue(); 
queue.enqueue(x); 

while(queue.getLength() != 0){ 
  let cur = queue.dequeue(); 

  for( y of graph[cur]){ 
    if(distance[y] == -1 ){ 
      distance[y] = graph[cur] + 1; 
      queue.enqueue(y); 
    }
  }
}

let check =false; 
for(let i=1; i<=n; i++){ 
  if(distance[i] === k){ 
    console.log(i);  
    check = true; 
  }
}
if(!check) console.log(-1); 
// let [n, m, k, x] = input[0].split(' ').map(Number); 

// let distance = new Array(n+1).fill(0); 
// let graph = []; 
// for(let i=1; i<=n; i++) graph[i] =[];
// for(let i=1; i<=m; i++){ 
//   let [q,w] = input[i].split(' ').map(Number); 
//   graph[q].push(w); 
// }


// let queue = new Queue(); 
// queue.enqueue(x); 

// let cnt = 1; 
// while(queue.getLength() != 0){ 
//   let cur = queue.dequeue(); 

//   for( y of graph[cur]){ 
//     if(distance[y] == 0 ){ 
//       distance[y] = cnt; 
//       queue.enqueue(y); 
//     }
//   }
//   cnt += 1; 
// }
// let answer = []
// for(let i=0; i<distance.length; i++){ 
//   if(distance[i] === k){ 
//     answer.push(i); 
//   }
// }

// if(answer.length > 0){ 
//   for ( y of answer){ 
//     console.log(y)
//   } 
// }else{ 
//   console.log(-1);
// }


// let file = require('fs').readFileSync('/dev/stdin');
// let input = file.toString().split('\n');
// // 도시의 개수(N), 도로의 개수(M), 거리(K), 출발 도시(X)
// let [n, m, k, x] = input[0].split(' ').map(Number);
// let graph = []; // 그래프 정보
// for (let i = 1; i <= n; i++) {
//   graph[i] = [];
// }
// for (let i = 1; i <= m; i++) {
//   let [x, y] = input[i].split(' ').map(Number);
//   graph[x].push(y);
// }
// // 모든 도시에 대한 최단 거리 초기화
// let distance = new Array(n + 1).fill(-1);
// distance[x] = 0; // 출발 도시까지의 거리는 0으로 설정


// let queue = new Queue();
// queue.enqueue(x);
// while (queue.getLength() != 0) { // 큐가 빌 때까지 반복하기
//   let now = queue.dequeue();
//   // 현재 도시에서 이동할 수 있는 모든 도시를 확인
//   for (let nextNode of graph[now]) {
//     if (distance[nextNode] == -1) { // 방문하지 않은 도시라면
//       distance[nextNode] = distance[now] + 1;
//       queue.enqueue(nextNode);
//     }
//   }
// }
// // 최단 거리가 K인 모든 도시의 번호를 오름차순으로 출력
// let check = false;
// for (let i = 1; i <= n; i++) {
//   if (distance[i] == k) {
//     console.log(i);
//     check = true;
//   }
// }
// if (!check) console.log(-1); // 최단 거리가 K인 도시가 없다면
