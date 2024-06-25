function calcular() {
  let opcao = document.getElementById('opcoes').value;

  let valor1, valor2, result;

    document.getElementById('inputs').innerHTML = '';

    if (opcao === '1') {
        document.getElementById('inputs').innerHTML = `
            <input type="number" id="valor1" placeholder="Base do triângulo">
            <input type="number" id="valor2" placeholder="Altura do triângulo">
        `;
    } else if (opcao === '2') { 
        document.getElementById('inputs').innerHTML = `
            <input type="number" id="valor1" placeholder="Largura do retângulo">
            <input type="number" id="valor2" placeholder="Altura do retângulo">
        `;
    } else if (opcao === '3') { 
        document.getElementById('inputs').innerHTML = `
            <input type="number" id="valor1" placeholder="Aresta do cubo">
        `;
    } else if (opcao === '4') { 
        document.getElementById('inputs').innerHTML = `
            <input type="number" id="valor1" placeholder="Raio do círculo">
        `;
    } else {
        alert('Escolha uma opção válida.');
        return;
    }

    document.getElementById('inputs').style.display = 'block';

    document.getElementById('valor1').value
    document.getElementById('valor2').value
    var result = valor1 * valor2

}

function calcular() {
    resultado.innerHTML = `Seu resultado é: ${result.toFixed(2)}`;
}
