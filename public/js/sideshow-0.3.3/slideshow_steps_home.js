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
		    text: "Esta é uma apresentação passo a passo da página 'Home'. Todo o conteúdo visto (imagens, textos, nomes de link, etc) é meramente ilustrativo, apenas a estrutura conta. Algumas das seções são baseadas em conversas anteriores e no conteúdo do site atual (milenamarquesfotografia.com.br). Outras seções servem como sugestão. Todo o conteúdo das seções desta página é passível de mudança. \n\n A estrutura e orçamento do site está seguindo o que foi acordado anteriormente por email com Anfrísio Rocha. Caso haja necessidade alterar a estrutura, será feita uma nova análise para orçamento. \n\n Para passar para o próximo passo, basta clicar em Continuar ou Fechar (no canto direito inferior desta apresentação) se desejar parar.",
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
		    text: "Eles se alternam entre si automaticamente. \n\n Podem ser apenas imagens de demonstração de trabalho que não direcionam a nenhuma página do site ou podem vir a direcionar para alguma seção pré-determinada do site. \n\n Abaixo, é possível adicionar uma frase genérica para todos os banners.",
		    subject: "#banner",
		    format: "markdown",
            lockSubject: true
		},
        {
		    title: "Rodapé",
		    text: "Estará dividido em 2 seções: 'Trabalhos Recentes' e 'Contate-nos'. Será repetido em todas as páginas. \n\n Veja os detalhes no próximo passo.",
		    subject: "footer",
            format: "markdown",
            lockSubject: true
		},
		{
		    title: "Trabalhos recentes - Rodapé",
		    text: "Uma seção para 'Trabalhos Recentes' conterá um link com imagem. Clicando na imagem, o usuário será redirecionado para a página 'Galeria' onde serão listadas as imagens do ensaio.",
		    subject: "#trabalhos-recentes",
		    format: "markdown",
            lockSubject: true
		},
        {
		    title: "Contate-nos - Rodapé",
		    text: "Conterá o endereço e alguns dados para fácil contatos.",
		    subject: ".lower-footer"
		}
    ]
});
