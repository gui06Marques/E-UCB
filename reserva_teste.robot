*** Settings ***
Documentation     Teste de reserva de vagas
Library           SeleniumLibrary

*** Test Cases ***
Reserva de Vaga
    Open Browser    http://localhost:8000    Firefox
    Maximize Browser Window
    
    # Preenche o formulário de reserva
    Input Text    id=matricula    123456
    Input Text    id=email    usuario@example.com
    Select From List by Value    id=selecao-vagas    1
    
    # Submete o formulário de reserva
    Submit Form    id=form-reserva

    # Aguarda até que o alerta esteja presente (mais lento)
    Wait Until Keyword Succeeds    30s    5s    Alert Should Be Present

    # Tenta reservar a mesma vaga novamente
    Input Text    id=matricula    123456
    Input Text    id=email    usuario@example.com
    Select From List by Value    id=selecao-vagas    1
    
    # Submete o formulário novamente
    Submit Form    id=form-reserva

    # Aguarda até que o alerta esteja presente (mais lento)
    Wait Until Keyword Succeeds    30s    5s    Alert Should Be Present

    # Obtém o texto do alerta
    ${alert_message}    Execute Javascript    return window.alerts[0].textContent

    # Fecha o alerta
    Execute Javascript    window.alerts[0].accept()

    # Verifica a mensagem de erro
    Should Be Equal As Strings    ${alert_message}    Esta vaga já foi reservada.

    Close All Browsers
