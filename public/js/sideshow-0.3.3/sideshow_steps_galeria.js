//A Sideshow Tutorial Example
//This tutorial introduces the Sideshow basics to the newcomer

Sideshow.registerWizard({
    name: "explicacao_novo_layout_index",
    title: "Apresentação do Novo Layout - Galeria",
    description: "Clique aqui para começar a apresentação da página 'Galeria'",
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
    	    text: "Esta é uma apresentação passo a passo da página 'Galeria'. Todo o conteúdo visto (imagens, textos, nomes de link, etc) é meramente ilustrativo, apenas a estrutura conta. Algumas das seções são baseadas em conversas anteriores e no conteúdo do site atual (milenamarquesfotografia.com.br). Outras seções servem como sugestão. Todo o conteúdo das seções desta página é passível de mudança. \n\n A estrutura e orçamento do site está seguindo o que foi acordado anteriormente por email com Anfrísio Rocha. Caso haja necessidade alterar a estrutura, será feita uma nova análise para orçamento. \n\n Aproveite para explorar um pouco a página após o término da apresentação. \n\n Para passar para o próximo passo, basta clicar em Continuar ou Fechar (no canto direito inferior desta apresentação) se desejar parar.",
    	    format: "markdown"
    	},
		{
		    title: "Propósito",
		    text: "Esta apresentação tem por objetivo apenas demonstrar as seções da página 'Galeria'. Colocaremos em detaque as seções juntamente com uma breve explanação da funcionalidade. No entanto, tais funcionalidades estão incompletas, serve apenas para ter uma noção de como ficará quando o site ficar completo."
		},
		{
		    title: "Título",
		    text: "O título irá alternar de acordo com o conteúdo. Podendo ser: Book, Evento ou Álbum.",
		    subject: ".heading"
		},
        {
		    title: "Galeria de Fotos",
		    text: "Aqui encontram-se as imagens e suas respectivas legendas referentes ao tipo de álbum escolhido. O tipo de álbum será mostrado mais adiante. \n\n Cada imagem pode ser ampliada com um clique do mouse. Ao findar a apresentação, clique em uma das imagens para ver como ocorre a ampliação. A ampliação se dará de acordo com o tamanho e resolução da foto ampliada. \n\n Pode haver até 9 imagens neste painel.",
		    subject: "section.two-column .col-md-9 ul li:first",
            format: "markdown",
		    lockSubject: true
		},
        {
		    title: "Paginação",
		    text: "Caso haja mais de 9 imagens para um determinado tipo de álbum, é incluida uma paginação para mostrar as demais imagens.",
		    subject: ".gallery-tow-col .pagination",
		    lockSubject: true
		},
        {
		    title: "Tipos de Álbum",
		    text: "Aqui é possível ver os tipos de álbum existentes. Quando o usuário clica em um deles, são exibidas suas fotos ao lado, na Galeria de Fotos.",
		    subject: ".blog-archives",
		    lockSubject: true
		},
        {
            title: "Fim - Próxima Página",
            text: "Ok. Os demais itens da página já são conhecidos. Vamos agora para a próxima página: 'Contato'. \n\n Ao terminar esta apresentação, você pode clicar em uma das imagens para ver o funcionamento da ampliação de imagens. \n\n Após explorar, para continuar com a apresentação das demais páginas, vá ao menu principal, clique em 'Contato' após encerrar esta apresentação e veja a sua apresentação.",
            format: "markdown"
        }
    ]
});
