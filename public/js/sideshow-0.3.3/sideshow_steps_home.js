//A Sideshow Tutorial Example
//This tutorial introduces the Sideshow basics to the newcomer

Sideshow.registerWizard({
    name: "explicacao_novo_layout_index",
    title: "Apresentação do Novo Layout - Home (página principal)",
    description: "Clique aqui para começar a apresentação da página 'Home'",
    estimatedTime: "3 Minutos",
    affects: [
		function(){
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
		    text: "Esta apresentação tem por objetivo apenas demonstrar as seções da página 'Home'. Colocaremos em detaque as seções juntamente com uma breve explanação da funcionalidade. No entanto, tais funcionalidades estão incompletas, serve apenas para ter uma noção de como ficará quando o site ficar completo."
		},
		{
		    title: "Topo com a Logo",
		    text: "Topo do site e a logo com bastante destaque.",
		    subject: ".logo-section",
            lockSubject: true
		},
		{
		    title: "Menu Principal",
		    text: "",
		    subject: ".nav-bar",
            lockSubject: true
		},
		{
		    title: "Banners",
		    text: "Eles se alternam automaticamente. \n\n Podem ser apenas imagens de demonstração de trabalho que não direcionam a nenhuma página do site ou podem redirecionar para alguma seção pré-determinada do site quando o usuário clica num deles. \n\n Abaixo, é possível adicionar uma única frase genérica para todos os banners.",
		    subject: "#banner",
		    format: "markdown",
            lockSubject: true
		},
        {
		    title: "Rodapé",
		    text: "Estará dividido em 2 seções: 'Produtos e Serviços' e 'Contate-nos'. Este rodapé será repetido em todas as páginas. \n\n Veja os detalhes no próximo passo.",
		    subject: "footer",
            format: "markdown",
            lockSubject: true
		},
		{
		    title: "Produtos e Serviços - Rodapé",
		    text: "Uma seção de atalho para 'Produtos e Serviços' conterá um link com imagem. Clicando na imagem, o usuário será redirecionado para a página 'Galeria' onde serão listadas algumas imagens.",
		    subject: "#produtos_e_servicos",
		    format: "markdown",
            lockSubject: true
		},
        {
		    title: "Contate-nos - Rodapé",
		    text: "Conterá o endereço e alguns dados para fácil contato.",
		    subject: ".lower-footer"
		},
        {
            title: "Fim - Próxima Página",
            text: "Agora vamos para a próxima página: 'Serviços'. \n\n Vá ao menu principal e clique em 'Serviços' para prosseguir. Quando a página estiver carregada, clique em 'Apresentação', no menu principal.",
            format: "markdown"
        }
    ]
});
