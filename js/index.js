let square = document.getElementById('mySquare')

square.style.backgroundColor="blue";
square.style.width='90px';
square.style.height='90px';

// // je regarde la couleur par exemple 
// //si je suis sur ble, je passe à red,
// // si sur red je passe à yellow sinon je revien a bleue

square.addEventListener("click", function () {
    
  if (square.style.backgroundColor==="blue"){
    square.style.width='200px';
    square.style.backgroundColor='red';
  } else if(square.style.backgroundColor==='red'){
    square.style.width='100px';
        square.style.width='100px';
        square.style.backgroundColor='yellow';
  }
  else {
    square.style.backgroundColor="blue";
    square.style.width='90px';
    square.style.height='90px';
  };
});




//utiliser un switch 
// switch (key) {
//     case value:
//         square.style.width='200px';
//         square.style.backgroundColor='red';
//         break;

//     case value:
//         square.style.width='300px';
//         square.style.width='300px';
//         square.style.backgroundColor='yelow';
//         break;
    
//     case value:
//         square.style.width='100px';
//         square.style.width='100px';
//         square.style.backgroundColor='yellow';
//         break;

//     default: 
//         square;
//         break;
// }

// // Exemple avec le switch qui compte le click
// // Obtém a referência para o elemento com o id 'square'
// const square = document.getElementById('square');

// // Inicializa o contador de cliques
// let clickCount = 0;

// // Adiciona um ouvinte de evento para o clique no elemento 'square'
// square.addEventListener("click", function () {
//     // Incrementa o contador de cliques
//     clickCount++;

//     // Utiliza um switch para aplicar diferentes estilos com base no contador de cliques
//     switch (clickCount) {
//         case 1:
//             // Configuração de estilo para o primeiro clique
//             square.style.backgroundColor = 'red';
//             square.style.width = '300px';
//             square.style.height = '500px';
//             square.style.justifyContent= 'right';
//             square.style.transition = 'all 0.3s ease';
//             square.style.position = 'absolute';
//                 square.style.top = '50%';
//                 square.style.left = '50%';
//                 square.style.transform = 'translate(-50%, -50%)';
//             break;
//         case 2:
//             // Configuração de estilo para o segundo clique
//             square.style.backgroundColor = 'green';
//             square.style.width = '200px';
//             square.style.height = '200px';
//             square.style.transition = 'all 0.3s ease';
//             break;
//         case 3:
//             // Configuração de estilo para o terceiro clique
//             square.style.backgroundColor = 'yellow';
//             square.style.width = '150px';
//             square.style.transition = 'all 0.3s ease';
//             break;
//         case 4:
//             // Configuração de estilo para o quarto clique
//             square.style.backgroundColor = 'purple';
//             square.style.width = '250px';
//             square.style.transition = 'all 0.3s ease';
//             break;
//         case 5:
//             // Configuração de estilo para o quinto clique
//             square.style.backgroundColor = 'orange';
//             square.style.width = '180px';
//             square.style.transition = 'all 0.3s ease';
//             break;
//         default:
//             // Resetar estilos após 5 cliques
//             clickCount = 0;
//             square.style.backgroundColor = 'blue';
//             square.style.width = '100px';
//             square.style.transition = 'all 0.3s ease';
//     }
// });

let square2 = document.getElementById('square2')
let clickCount = 0;

square2.addEventListener("click", function () {
    console.log(square2.style.transform);
    clickCount++;  
    switch (clickCount) {
        case 1:
            square2.style.transform = 'translateX(100px)';
            break;
        case 2:
            square2.style.transform = 'translate(100px, 100px)';
            break;
        case 3:
                square2.style.transform = 'translate(0, 100px)'; // pas de - , ca bouge par rapport à la position initiale
                break;
        default:
            clickCount =0
            square2.style.transform = 'translate(0px, 0px)';
            
    }
})


