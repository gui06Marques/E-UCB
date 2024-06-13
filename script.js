// Simulação de dados de vagas disponíveis
const vagasDisponiveis = [
    { id: 1, nome: 'Vaga 1', reservada: false, email: '', matricula: '' },
    { id: 2, nome: 'Vaga 2', reservada: false, email: '', matricula: '' },
    { id: 3, nome: 'Vaga 3', reservada: false, email: '', matricula: '' },
    { id: 4, nome: 'Vaga 4', reservada: false, email: '', matricula: '' },
    { id: 5, nome: 'Vaga 5', reservada: false, email: '', matricula: '' },
    { id: 6, nome: 'Vaga 6', reservada: false, email: '', matricula: '' },
    { id: 7, nome: 'Vaga 7', reservada: false, email: '', matricula: '' },
    { id: 8, nome: 'Vaga 8', reservada: false, email: '', matricula: '' },
    { id: 9, nome: 'Vaga 9', reservada: false, email: '', matricula: '' },
    { id: 10, nome: 'Vaga 10', reservada: false, email: '', matricula: '' }
];

// Função para exibir as vagas disponíveis na página
function exibirVagasDisponiveis() {
    const selecaoVagas = document.getElementById('selecao-vagas');
    selecaoVagas.innerHTML = ''; // Limpa as opções antes de adicionar novamente
    vagasDisponiveis.forEach((vaga) => {
        const option = document.createElement('option');
        option.value = vaga.id;
        option.textContent = vaga.reservada ? `${vaga.nome} - Esta vaga já foi reservada` : vaga.nome;
        option.disabled = vaga.reservada; // Desabilita a opção se a vaga já foi reservada
        selecaoVagas.appendChild(option);
    });
}

// Função para verificar se o email já fez uma reserva
function emailJaReservado(email) {
    return vagasDisponiveis.some(vaga => vaga.email === email);
}

// Função para verificar se a matrícula já fez uma reserva
function matriculaJaReservada(matricula) {
    return vagasDisponiveis.some(vaga => vaga.matricula === matricula);
}

// Evento de envio do formulário de reserva
document.getElementById('form-reserva').addEventListener('submit', function(event) {
    event.preventDefault();
    const matricula = document.getElementById('matricula').value;
    const email = document.getElementById('email').value;
    const vagaSelecionadaId = parseInt(document.getElementById('selecao-vagas').value, 10);
    const vagaSelecionada = vagasDisponiveis.find(vaga => vaga.id === vagaSelecionadaId);

    if (emailJaReservado(email)) {
        alert('Este email já fez uma reserva. Por favor, use um email diferente.');
    } else if (matriculaJaReservada(matricula)) {
        alert('Esta matrícula já fez uma reserva. Por favor, use uma matrícula diferente.');
    } else if (vagaSelecionada && !vagaSelecionada.reservada) {
        vagaSelecionada.reservada = true;
        vagaSelecionada.email = email; // Atribui o email à vaga
        vagaSelecionada.matricula = matricula; // Atribui a matrícula à vaga
        exibirVagasDisponiveis(); // Atualiza a lista de vagas exibida
        document.getElementById('mensagem-pagamento').textContent = 'Cheque o seu e-mail para acessar a forma de pagamento';
        alert(`Sua matrícula é ${matricula}. Sua reserva para a ${vagaSelecionada.nome} foi confirmada. Verifique seu email (${email}) para mais detalhes.`);
    } else {
        alert('A vaga selecionada já foi reservada. Por favor, selecione outra vaga.');
    }
});

// Chamando a função para exibir as vagas disponíveis ao carregar a página
exibirVagasDisponiveis();
