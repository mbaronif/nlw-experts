//vaiável dos itens que vão ser repetidos no app
const perguntas = [
    {
      pergunta: "Qual é a estrutura de controle utilizada para tomar decisões em JavaScript?",
      respostas: [
        "if-else",
        "for",
        "switch-case",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual palavra-chave é usada para declarar uma função em JavaScript?",
      respostas: [
        "function",
        "declare",
        "func",
      ],
      correta: 0,
    },
    {
      pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
      respostas: [
        "// Comentário",
        "' Comentário",
        "/* Comentário */",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é o método utilizado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "add()",
        "append()",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação estrita (igualdade de valor e tipo)",
        "Atribuição",
        "Comparação solta (igualdade de valor apenas)",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é o método utilizado para selecionar um elemento HTML pelo seu ID em JavaScript?",
      respostas: [
        "getElementById()",
        "querySelector()",
        "getElementsByClassName()",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é o resultado de 3 + '3' em JavaScript?",
      respostas: [
        "33",
        "6",
        "Erro",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é a maneira correta de escrever um loop infinito em JavaScript?",
      respostas: [
        "while(true) {...}",
        "for(;;) {...}",
        "do {...} while(true)",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual é o tipo de dado retornado pelo operador typeof em JavaScript quando aplicado a um objeto?",
      respostas: [
        "object",
        "array",
        "function",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "remove()",
        "delete()",
      ],
      correta: 0,
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta //true (boleano)
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }