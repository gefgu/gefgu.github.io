// Define the type for news items
export interface NewsItem {
  date: Date;
  title: string;
  publication: string;
  url: string;
  description: string;
  image?: string;
}
// Add your news mentions here
const newsItems: NewsItem[] = [
  {
    date: new Date("2024-10-19"),
    title: "WebMedia premia melhores trabalhos em várias categorias",
    publication: "UFJF",
    url: "https://www2.ufjf.br/midiadigital/2024/10/19/webmedia-premia-melhores-trabalhos-em-varias-categorias/",
    description:
      "A entrega da premiação para os melhores trabalhos apresentados no 30º Simpósio Brasileiro de Sistemas Multimídia e Web (WebMedia) foi realizada na noite do dia 17 de outubro. A solenidade aconteceu no Trade Hotel em Juiz de Fora.",
    image: "/news/webmedia_prize.jpeg",
  },
  {
    date: new Date("2024-10-26"),
    title: "Estudante Gustavo Santos é premiado no Webmedia 2024",
    publication: "UTFPR - DAINF",
    url: "https://www.utfpr.edu.br/cursos/coordenacoes/graduacao/curitiba/ct-engenharia-de-computacao/destaques/estudante-gustavo-santos-e-premiado-no-webmedia-2024",
    description:
      'O trabalho "Modelagem do Interesse por Áreas Urbanas Usando Redes Sociais Baseadas em Localização", de autoria de Gustavo H. Santos, Myriam Delgado e Thiago H. Silva, foi premiado com o 1º lugar no Concurso de Trabalhos de Iniciação Científica do 30º Simpósio Brasileiro de Sistemas Multimídia e Web (WebMedia 2024) ocorrido no mês de outubro em Juiz De Fora.',
    image: "/news/noticias_utfpr_1.png",
  },
  {
    date: new Date("2024-10-29"),
    title:
      "Estudante de Engenharia da Computação é premiado em Simpósio nacional",
    publication: "UTFPR",
    url: "https://www.utfpr.edu.br/noticias/curitiba/estudante-de-engenharia-da-computacao-e-premiado-em-simposio-nacional",
    description:
      "Gustavo dos Santos recebeu o prêmio de melhor trabalho de iniciação científica.",
    image: "/news/noticias_utfpr_2.png",
  },
    {
    date: new Date("2025-08-04"),
    title:
      "Estudante de Engenharia da Computação participa do principal fórum internacional de Ciência de Dados",
    publication: "UTFPR",
    url: "https://www.utfpr.edu.br/noticias/curitiba/estudante-de-engenharia-da-computacao-participa-do-principal-forum-internacional-de-ciencia-de-dados",
    description:
      "Gustavo Henrique Bruno dos Santos esteve em Toronto para apresentar seu projeto na SIGKDD.",
    image: "/news/noticias_utfpr_kdd.jpg",
  },
];

export default newsItems;
