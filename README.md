# Projeto Reservas

## Descrição
Este projeto é uma aplicação web para reserva de vagas de estacionamento. Ele permite que os usuários reservem vagas, garantindo que um mesmo email ou matrícula não possa fazer múltiplas reservas.

## Estrutura de Arquivos
- `index.html`: Página principal da aplicação.
- `styles.css`: Arquivo de estilos.
- `script.js`: Arquivo de scripts JavaScript.
- `reserva_teste.robot`: Caso de teste Robot Framework para a funcionalidade de reserva.
  
## Como Rodar a Aplicação
1. Certifique-se de ter o Python instalado.
2. Navegue até o diretório do projeto no terminal.
3. Inicie um servidor web local executando o comando:
     python -m http.server 8000
4. Abra um navegador e vá para `http://localhost:8000`.

## Testes Automatizados
Pré-requisitos para os Testes
Certifique-se de ter o Robot Framework e a SeleniumLibrary instalados.

## Executando os Testes
Para executar os testes automatizados, utilize o seguinte comando:
- robot reserva_teste.robot
Isso iniciará a execução do teste reserve_test.robot, que verifica o processo de reserva de vagas na aplicação.
