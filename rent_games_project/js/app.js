let rentGames = 0;

function countDisplayRentedGames() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function changeStatus(id) {
    let gameClick = document.getElementById(`game-${id}`); // concatenação para não setar um valor padrão
    let image = gameClick.querySelector('.dashboard__item__img'); // usando . dentro do parâmetro para demonstrar que é uma classe
    let button = gameClick.querySelector('.dashboard__item__button'); 

    // Teste funcionalidade:
    // let gameName = gameClick.querySelector('.dashboard__item__name'); 
    // alert(gameName.textContent); irá retornar o texto e não a tag html

    if (image.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${gameName.textContent}?`)) {
            image.classList.remove('dashboard__item__img--rented'); // remover a classe
            button.classList.remove('dashboard__item__button--return');
            button.textContent = 'Alugar';
        }

    } else {
        image.classList.add('dashboard__item__img--rented'); // adicionar a classe
        button.classList.add('dashboard__item__button--return');
        button.textContent = 'Devolver';
    }

    contarEExibirJogosAlugados();
    ordenarNumeros(3, 1, 5); // Deve exibir "Números ordenados: 1, 3, 5"
}

    // inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});

function ordenarNumeros(a, b, c) {
    const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}
