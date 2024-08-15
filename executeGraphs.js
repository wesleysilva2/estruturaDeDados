import Graph from './graphs.js';

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

console.log(graph.toString());