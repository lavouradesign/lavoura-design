export const site = {
  name: 'Lavoura Design',
  person: 'Guilherme',
  email: 'guilavourar@gmail.com',
  url: 'https://lavouradesign.com',
  city: 'Figueira da Foz, Portugal',
};

// Links vazios não aparecem no footer. Preenche quando quiseres mostrar.
export const socials = [
  { label: 'Instagram', url: 'https://instagram.com/lavoura.design' },
  { label: 'LinkedIn', url: '' },
  { label: 'Behance', url: '' },
  { label: 'GitHub', url: '' },
].filter((s) => s.url);

// Coloca os PDFs em public/cv/ com estes nomes.
export const cv = {
  pt: '/cv/cv-pt.pdf',
  en: '/cv/cv-en.pdf',
};

export type Project = {
  id: string;
  title: string;
  status: 'Projeto real' | 'Projeto especulativo' | 'Em curso';
  summary: string;
  role: string;
  details: string[];
  tools: string[];
  colors: string[];
  image?: string; // ex.: '/projectos/marea.jpg' — se existir, substitui as cores
  link?: { label: string; url: string };
};

// TODO: acrescenta resultados, números e imagens reais a cada projeto.
export const projects: Project[] = [
  {
    id: 'lart-t24',
    title: 'LART — Formula Student T24',
    status: 'Projeto real',
    summary: 'Livery do monolugar T24 e materiais da equipa, desenhados em duas semanas.',
    role: 'Designer único',
    details: [
      'A equipa LART precisava de uma imagem coerente para o T24 e para tudo o que a representa em prova e fora dela.',
      'Desenhei a livery do carro, os roll-ups e as polos da equipa, mantendo a mesma linguagem visual nas três peças.',
      'O prazo era de duas semanas, por isso trabalhei com um sistema simples de formas e cores que se aplica bem ao carro, ao papel e ao tecido.',
    ],
    tools: ['Illustrator', 'Photoshop'],
    colors: ['#14213D', '#E63946', '#F1F1F1'],
  },
  {
    id: 'nd-laser',
    title: 'ND Laser — website',
    status: 'Projeto real',
    summary: 'Site multipágina para uma empresa de corte e gravação a laser.',
    role: 'Design e desenvolvimento',
    details: [
      'O objetivo era mostrar trabalhos reais e facilitar o pedido de orçamento.',
      'Criei uma galeria com filtros em JavaScript para o visitante ver só o tipo de trabalho que procura, e um formulário de contacto com validação em PHP.',
      'A identidade visual é minimalista, com uma paleta quente e dourado como cor de destaque, para deixar o material e o acabamento dos trabalhos em primeiro plano.',
    ],
    tools: ['PHP', 'JavaScript', 'CSS'],
    colors: ['#2A2118', '#B8893A', '#F4EFE6'],
  },
  {
    id: '433-portugal',
    title: '433 Portugal — conteúdo para redes sociais',
    status: 'Projeto real',
    summary: 'Criação de conteúdo visual para a página de futebol 433 Portugal.',
    role: 'Designer de conteúdo',
    details: [
      'Produzi conteúdo para as redes sociais da página, pensado para ser lido num scroll rápido e reconhecido à distância.',
      'O foco esteve em manter uma identidade consistente entre publicações, sem perder o ritmo de produção que o futebol exige.',
    ],
    tools: ['Photoshop', 'Illustrator'],
    colors: ['#0B1F3A', '#FFFFFF', '#2D3BFF'],
  },
  {
    id: 'marea-cycling',
    title: 'MAREA — marca e três sites',
    status: 'Projeto especulativo',
    summary: 'Marca fictícia de bicicletas com site institucional, portal B2B e site de service center.',
    role: 'Direção de arte, UI/UX e web design',
    details: [
      'Criei a MAREA de raiz para mostrar como uma única marca se adapta a três públicos: quem compra, quem revende e quem precisa de assistência.',
      'A paleta é monocromática em azuis, com cobre como cor de ação nos botões e destaques. Os títulos usam Fraunces e o texto e a interface usam Inter.',
      'Fugi de formas arredondadas e fui buscar a estética mais angular e robusta de marcas como Canyon, Specialized e Fox.',
    ],
    tools: ['Figma', 'Framer', 'Webflow'],
    colors: ['#0D00D6', '#292933', '#C9843C'],
  },
  {
    id: 'mundial-2030',
    title: 'Mundial 2030 — identidade visual',
    status: 'Projeto especulativo',
    summary: 'Emblema que junta azulejo português, zellige marroquino e azulejaria ibérica.',
    role: 'Identidade visual completa',
    details: [
      'O Mundial 2030 tem três países anfitriões. Propus um emblema em mosaico onde cada tradição de azulejo ocupa o seu lugar.',
      'O conceito estende-se a mascote, cartaz principal e conteúdo para redes sociais.',
    ],
    tools: ['Illustrator', 'Photoshop'],
    colors: ['#1B4DB1', '#C8102E', '#E8D9B5'],
  },
  {
    id: 'sns-24',
    title: 'SNS 24 — redesign',
    status: 'Em curso',
    summary: 'Redesign de um serviço que muitos portugueses usam e que pode ser bastante melhor.',
    role: 'UX/UI e pesquisa',
    details: [
      'Escolhi o SNS porque é um serviço presente na vida de quase todos e porque a experiência atual tem muito espaço para melhorar.',
      'Este case study está em desenvolvimento. Vou documentar o diagnóstico, as decisões e o resultado final.',
    ],
    tools: ['Figma'],
    colors: ['#005AA7', '#F2F5F8', '#17211B'],
  },
];

export const searchIndex = [
  { title: 'Início', url: '/', text: 'homepage designer gráfico web Figueira da Foz' },
  { title: 'Sobre mim', url: '/sobre', text: 'biografia formação experiência ferramentas Webflow Framer Readymag' },
  { title: 'Transferir CV', url: '/sobre#cv', text: 'curriculum currículo download português inglês pdf' },
  { title: 'Projetos', url: '/projectos', text: 'portefólio trabalhos case studies' },
  ...projects.map((p) => ({
    title: p.title,
    url: `/projectos#${p.id}`,
    text: `${p.status} ${p.summary} ${p.role} ${p.tools.join(' ')}`,
  })),
  { title: 'Contacto', url: '/contacto', text: 'email mensagem orçamento falar' },
  { title: 'Política de privacidade', url: '/privacidade', text: 'rgpd dados pessoais cookies' },
];
