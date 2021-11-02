const itemsAcordeon = document.querySelectorAll('.item');

itemsAcordeon.forEach(item => {
    item.addEventListener('click', () => {

        // VERIFICAR SE ESTA ATIVO
        const estaAtivo = item.classList.contains('ativo');

        // SE NAO ESTA ATIVO
        if(!estaAtivo) {
            // CASO UMA PERGUNTA ABRA AS OUTRAS DEVEM FECHAR

            itemsAcordeon.forEach(item => item.classList.remove('ativo'));
            
            // DEVE ABRIR
            item.classList.add('ativo')

        // SE ESTA ATIVO
        } else { 
            item.classList.remove('ativo')
        }
    })
})