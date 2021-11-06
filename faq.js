const itemsPerguntasRespostas = document.querySelectorAll('.item');

console.log(itemsPerguntasRespostas)

itemsPerguntasRespostas.forEach(function(item) {
    item.addEventListener('click', function() {
        // verificar se a pergunta clicada esta ativa 
        const estaAtivo = item.classList.contains('ativo');

        // SE NÃO ESTA ATIVO
        if(!estaAtivo) {
            // BUSCA TODAS AS PERGUNTAS NOVAMENTE E REMOVE A CLASSE ATIVO DELAS PRA QUE TODAS FECHEM
            itemsPerguntasRespostas.forEach(function(item) { item.classList.remove('ativo') });
            
            // ABRE A PERGUNTA ATUAL
            item.classList.add('ativo');

        } else {
            // SE ESTA ATIVO, REMOVE A CLASSE ATIVO PARA FECHAR A RESPOSTA
            item.classList.remove('ativo');
        }
    })
})