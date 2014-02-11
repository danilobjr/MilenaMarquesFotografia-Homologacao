//A Sideshow Tutorial Example
//This tutorial introduces the Sideshow basics to the newcomer

Sideshow.registerWizard({
    name: "explicacao_novo_layout_index",
    title: "Apresentação do Novo Layout - Contato",
    description: "Clique aqui para começar a apresentação da página 'Contato'",
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
		    text: "Esta apresentação tem por objetivo apenas demonstrar as seções da página 'Contato'. Colocaremos em detaque as seções juntamente com uma breve explanação da funcionalidade. No entanto, tais funcionalidades estão incompletas, serve apenas para ter uma noção de como ficará quando o site ficar completo."
		},
		{
		    title: "Título",
		    text: "",
		    subject: ".heading"
		},
        {
		    title: "Mapa",
		    text: "Um mapa aponta para o endereço do estúdio fotográfico. Facilitanto a chegada do cliente ao local.",
		    subject: "#map_canvas",
		    lockSubject: true
		},
        {
		    title: "Envio de Mensagem",
		    text: "Recebimento de emails a partir do site.",
		    subject: "form",
		    lockSubject: true
		},
        {
		    title: "Endereço do Estúdio",
		    text: "Embora já tenha um mapa, o endereço do estúdio é disponibilizado aqui para facilitar.",
		    subject: "address"
		},
        {
		    title: "Outros Contatos",
		    text: "Alguns outros meios de contatar o estúdio.",
		    subject: ".contact-detail"
		},
        {
		    title: "Redes Sociais",
		    text: "Lista das redes sociais do estúdio.",
		    subject: ".contact-social"
		},
        {
            title: "Fim",
            text: "Finda aqui toda a apresentação das 4 páginas. Caso queira rever as outras apresentações, entre na respectiva página e clique em 'Apresentação' no menu principal. \n\n Qualquer dúvida, entre em contato via email: danilobjr@gmail.com.",
            format: "markdown"
        }
    ]
});
