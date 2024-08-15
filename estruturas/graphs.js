import Dictionary from './dictionarys.js';

export default class Graph{
    constructor(isDirected = false){ // O grafo por padrão vai ser não direcionado
        this.isDirected = isDirected;
        this.vertices = []; //  array para armazenar os nomes de todos os vértices do grafo
        this.adjList = new Dictionary(); // Dicionario para armazenar a lista de adjacências
    }

    // Metodo para adicionar um novo vertice no grafo
    addVertex(v){
        if(!this.vertices.includes(v)){ // se o vértice não estiver presente no grafo adicionar
            this.vertices.push(v);
            this.adjList.set(v, []); // Inicializa lista de adjasencias com array vazio
        }
    }

    addEdge(v, w) { // Esse metodo recebe dois vértices, os verticies que queremos ligar no grafo
        if(!this.adjList.get(v)){ // Antes de ligar checa se o vertice esta no grafo ou não 
            this.addVertex(v); 
        }
        if(!this.adjList.get(w)){ 
            this.addVertex(w); // Se os vertices não existirem eles seram adicionados a lista de vertices
        }
        this.adjList.get(v).push(w); // Adicionamos uma aresta ou arco do vértice v para o vértice w 
        if(!this.isDirected){ // Caso seja um grafo não direcionado 
            this.adjList.get(w).push(v);  // Adicionamos um arco do vértice w para o vértice v 
        }
    }

    getVertices(){ // Devolve a lista de vertices 
        return this.vertices;
    }

    getAdjList(){ // Devolve a lista de adjacentes
        return this.adjList;
    }
    // Uma string com a representação da lista de adjacências 
    toString() {
        let s = '';
        for (let i = 0; i < this.vertices.length; i++) { // Interamos pela lista do array vertices
          s += `${this.vertices[i]} -> `; // Acrescentamos o nome do vertice na string s
          const neighbors = this.adjList.get(this.vertices[i]); // obtemos a lista de adjasencias desse vertice
          for (let j = 0; j < neighbors.length; j++) { // Interamos por essa lista também
            s += `${neighbors[j]} `;
          }
          s += '\n'; // Quebra de linha para deixa a saida mais interessante
        }
        return s;
      }
}

