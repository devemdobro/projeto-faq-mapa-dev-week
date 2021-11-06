const itemsPerguntasRespostas = document.querySelectorAll('.item');

itemsPerguntasRespostas.forEach(function(item) {
    item.addEventListener('click', function() {
        // VERIFICAR SE ESTÁ ATIVO
        const estaAtivo = item.classList.contains('ativo');

        // SE NÃO ESTA ATIVO
        if(!estaAtivo) {
            // BUSCA TODAS AS PERGUNTAS NOVAMENTE E REMOVE A CLASSE ATIVO DELAS PRA QUE TODAS FECHEM
            itemsPerguntasRespostas.forEach(item => item.classList.remove('ativo'));
            
            // ABRE A PERGUNTA ATUAL
            item.classList.add('ativo');

        } else {
            // SE ESTA ATIVO, REMOVE A CLASSE ATIVO PARA FECHAR A RESPOSTA
            item.classList.remove('ativo');
        }
    })
})