//A Sideshow Tutorial Example
//This tutorial introduces the Sideshow basics to the newcomer

Sideshow.registerWizard({
    name: "explicacao_novo_layout_index",
    title: "Apresentação do Novo Layout - Serviços",
    description: "Clique aqui para começar a apresentação da página 'Serviços'",
    estimatedTime: "3 Minutos",
    affects: [
		function () {
		    //Here we could do any checking to infer if this tutorial is eligible the current screen/context. 
		    //After this checking, just return a boolean indicating if this tutorial will be available. 
		    //As a simple example we're returning a true, so this tutorial would be available in any context
		    return true;
		}
    ]
}).storyLine({
    showStepPosition: true,
    steps: [
    	{
    	    title: "Boas vindas",
    	    text: "Esta é uma apresentação passo a passo da página 'Serviços'. Todo o conteúdo visto (imagens, textos, nomes de link, etc) é meramente ilustrativo, apenas a estrutura conta. Algumas das seções são baseadas em conversas anteriores e no conteúdo do site atual (milenamarquesfotografia.com.br). Outras seções servem como sugestão. Todo o conteúdo das seções desta página é passível de mudança. \n\n A estrutura e orçamento do site está seguindo o que foi acordado anteriormente por email com Anfrísio Rocha. Caso haja necessidade alterar a estrutura, será feita uma nova análise para orçamento. \n\n Para passar para o próximo passo, basta clicar em Continuar ou Fechar (no canto direito inferior desta apresentação) se desejar parar.",
    	    format: "markdown"
    	},
		{
		    title: "Propósito",
		    text: "Esta apresentação tem por objetivo apenas demonstrar as seções da página 'Serviços'. Colocaremos em detaque as seções juntamente com uma breve explanação da funcionalidade. No entanto, tais funcionalidades estão incompletas, serve apenas para ter uma noção de como ficará quando o site ficar completo."
		},
		{
		    title: "Título",
		    text: "O título desta e das demais páginas irão aparecer aqui.",
		    subject: ".heading"
		},
		{
		    title: "Serviços e Produtos",
		    text: "Aqui encontram-se 3 links que direcionarão para a página 'Galeria' de acordo com o conteúdo de cada uma. O derecionamento acontece quando o usuário clica em 'Veja Mais'",
		    subject: ".categories-page .row",
		    targets: ".categories-page .row .col-md-4 .btn-view",
		    lockSubject: true
		},
		{
		    title: "Serviços e Produtos - Preview",
		    text: "É possível ver um preview (imagens) da seção em questão clicando nas bolinhas azuis. \n\n Antes de continuar, clique na segunda ou terceira bolinha para visualizar outras imagens.",
		    subject: ".categories-page .row .col-md-4:first",
		    targets: ".categories-page .row .col-md-4:first .bx-default-pager",
		    format: "markdown",
		    autoContinue: false,
		    completingConditions: [
		    	function () {
		    	    var ok = $('.categories-page .row .col-md-4:first .bx-pager-item:nth-child(2) .bx-pager-link').hasClass('active') || 
                             $('.categories-page .row .col-md-4:first .bx-pager-item:nth-child(3) .bx-pager-link').hasClass('active');
		    	    return ok;
		    	}
		    ]
		},
        {
            title: "Fim - Próxima Página",
            text: "Ok. Como os demais itens da página já são conhecidos, agora vamos para a próxima página: 'Galeria'. \n\n Clique no link 'Veja Mais' para prosseguir.",
            format: "markdown",
            subject: ".categories-page .row .col-md-4:first",
		    targets: ".categories-page .row .col-md-4:first .btn-view"
        }
    ]
});
