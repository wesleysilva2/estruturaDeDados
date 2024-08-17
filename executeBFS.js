import Graph from './estruturas/graphs.js';
import { breadthFirstSearch } from './estruturas/bfsgraph.js'
import Stack from './estruturas/pilha.js';

const graph = new Graph();
// criando um array com todos os vértices que queremos adicionar em nosso grafo
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for (let i = 0; i < myVertices.length; i++){
    graph.addVertex(myVertices[i]); // interando os vertices um a um, no grafo
}

graph.addEdge('A', 'B'); // Adicionando as arestas desejadas
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log('********* printing graph ***********');

console.log(graph.toString());

console.log('********* bfs with callback ***********');

/*
  declaramos uma função de callback que simplesmente exibirá no console 
  do navegador o nome do vértice que foi totalmente explorado pelo algoritmo
*/
const printVertex = (value) => console.log('Visited vertex: ' + value);
/* 
 Passamos o Grafo, em seguida passamos o primeiro vertice que no caso aqui 
 é o A e passamos a função callback printVertex
*/
// breadthFirstSearch(graph, myVertices[0], printVertex); // Passamos o grafo

console.log('********* bfs with distance and predecessors ***********');

/*
  Função alterada para calcular a distancia entre os vertices, a ideia é buscar
  a distancia mais curta para um vertice
*/ 

const shortestPathA = breadthFirstSearch(graph, myVertices[0]);
console.log(shortestPathA.distances); 

const fromVertex = myVertices[0]; // Usando o Vertice A como o de origem
  for(let i = 1; i < myVertices.length; i++){ // Para os outros vertices, calcularemos o caminho de A até esse vertice
    const toVertex = myVertices[i]; // Obtemos o vertice analisado no momento
    const path = new Stack(); // Pilha para armazenar os valores dos Caminhos
    for (let v = toVertex; 
        v !==fromVertex; // Segumos o caminho de toVertex para fromVertex
        v = shortestPathA.predecessors[v]){ 
      /* 
        Variável v recebe o valor de seu antecessor e podemos fazer o mesmo
        caminho de trás para frente. Adicionamos a variavel v na pilha
      */
      path.push(v)    
    }
    path.push(fromVertex); // Por fim acrecentamos o vertice de origem na pilha
    let s = path.pop(); // atribuimos a s o item de origem 
    while(!path.isEmpty()){ // enquanto a pilha não estiver vazia 
      s += ' - ' + path.pop(); // removemos um item dela e o concatenamos ao valor existente na string s
    }
    /*
      Temos aqui o caminho mais curto (em número de arestas) de A até os
      demais vértices do grafo.
    */
    console.log(s);  
  }
