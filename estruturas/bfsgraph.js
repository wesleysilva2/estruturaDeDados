import Queue from './fila.js';

// Ajudar na marcação do algoritmo de busca no grafo 
const Colors = {
    WHITE: 0, // indica que o vértice ainda não foi visitado
    GREY: 1, // indica que o vértice foi visitado, mas não foi explorado
    BLACK: 2 // indica que o vértice foi totalmente explorado
};

// Objeto Auxiliar para saber se o vertice foi visitado ou não

const initializeColor = vertices => {
    const color = {}
    for (let i = 0; i < vertices.length; i++){
        color[vertices[i]] = Colors.WHITE // Todos os vertices são marcados como não visitados inicialmente
    }
    return color;
};

/* 
   O método breadthFirstSearch recebe a instância graph e o vértice que 
   será usado como ponto de origem para o nosso algoritmo.
*/
export const breadthFirstSearch = (graph, startVertex, callback) => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices); // Inicializamos o array de cores como branco
    const queue = new Queue(); // Criando uma instacia Queue (fila) que armazenará os vértices a serem visitados e explorados
    const distances = {}; // Declarando array de discancia e predecessores
    const predecessors = {};
    queue.enqueue(startVertex); // Como precisamos de um ponto de partida, vamos inserir esse vértice na fila usando enqueue
    for(let i = 0; i < vertices.length; i++){
        distances[vertices[i]] = 0; // Colocando o array distance com zero nos valores  
        predecessors[vertices[i]] = null; // Colocando o array predecessors com null nos valores  
    }
    while(!queue.isEmpty()){ // Enquanto a fila não estiver vazia
        const u = queue.dequeue(); // removemos um vertice da fila 
        const neighbors = adjList.get(u); // Acessamos a sua lista de adjacências contendo todos os seus vizinhos
        color[u] = Colors.GREY; // marcamos esses vertices como Grey, ja que ele foi descoberto mas não explorado
        for (let i = 0; i < neighbors.length; i++) {  // Pra cada vizinho de u 
            const w = neighbors[i]; // obtemos o seu valor. O nome do vértice
            if (color[w] === Colors.WHITE) {  // Caso ele ainda não tenha sido visitado sua cor é WHITE
                color[w] = Colors.GREY; // Marcamos esses vertices descobertos como Grey
                distances[w] = distances[u] + 1; // incrementamos a distancia
                predecessors[w] = u; // Quando descobrimos o vizinho w de um vértice u, definimos o valor do antecessor de w com u
                queue.enqueue(w); // Adicionamos esse vertice a fila, para que acabemos de explora-lo quando ele for removido
            }
        }
        color[u] = Colors.BLACK; // Quando acabarmos de explorar o vértice e os seus vértices adjacentes marcamos o preto como explorados
        
        /* 
        if (callback) { 
            callback(u);
        }
        */
    }

    return {
        distances, // Devolvemos distancia e predecessores
        predecessors
    };
};