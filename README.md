# Centro de Estudos Profª Natalia de Paula - Landing Page

Uma landing page moderna, responsiva e elegante desenvolvida para o **Centro de Estudos Profª Natalia de Paula**. O site tem como objetivo apresentar os serviços educacionais, cursos disponíveis e diferenciais, além de captar potenciais alunos através de um formulário de contato e botões de ação rápidos para WhatsApp.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web clássicas, garantindo alta velocidade de carregamento e fácil manutenção, sem a dependência de frameworks complexos:

- **HTML5**: Estruturação semântica de todo o conteúdo.
- **CSS3 (Vanilla)**: Estilização completa do site, incluindo:
  - Sistema de design com variáveis (Custom Properties) para manter uma paleta de cores consistente.
  - Layouts dinâmicos utilizando Flexbox e CSS Grid.
  - Responsividade nativa para múltiplos dispositivos (Desktop, Tablet e Mobile) através de Media Queries.
  - Micro-animações e efeitos de `hover` para uma experiência de usuário (UX) interativa e premium.
- **JavaScript (Vanilla)**: Lógica de interação do lado do cliente, como:
  - Menu de navegação responsivo para dispositivos móveis.
  - Rolagem suave (smooth scroll) entre as diferentes seções.
  - Interatividade do formulário de contato.
  - Funcionalidade do modal de Política de Privacidade e carrossel de depoimentos.

## 📑 Estrutura da Página (Seções)

1. **Cabeçalho (Header) & Navegação**: Logo do Centro de Estudos e links rápidos para as áreas da página. Possui transição de estilo ao rolar a tela.
2. **Início (Hero Section)**: Área de destaque principal com um título de impacto, ilustrações abstratas e chamadas para ação (CTAs).
3. **Sobre**: Apresentação da missão e foco do Centro (ensino próximo e aprendizado para a vida).
4. **Cursos**: Grade de cursos oferecidos, destacando: Aula de Reforço, Curso de Inglês, Intensivo, Extensivo e Curso de Redação.
5. **Crazy Med**: Uma subseção especial e focada na preparação intensa para os vestibulares de Medicina.
6. **Diferenciais**: Motivos para escolher o Centro (Ensino personalizado, ambiente acolhedor, foco em resultados).
7. **Objetivos**: Grade interativa mostrando os principais objetivos que o aluno deseja conquistar.
8. **Depoimentos**: Espaço reservado para avaliações sociais e depoimentos de alunos.
9. **Contato**: Formulário para captação de leads, contatos diretos (e-mail, telefone, horários) e mapa interativo do Google Maps indicando a localização física.
10. **Rodapé (Footer)**: Links úteis, botão de voltar ao topo, redes sociais (com SVGs escaláveis) e um **botão flutuante persistente do WhatsApp** no canto inferior.

## 🛠 Como Executar o Projeto Localmente

Por se tratar de um projeto com arquivos estáticos, não há necessidade de instalação de dependências ou bundlers (como Node.js).

1. Clone ou faça o download deste repositório para a sua máquina local.
2. Abra o arquivo `index.html` diretamente no seu navegador web preferido.
3. *Opcional*: Para ter um recarregamento automático (live reload) durante o desenvolvimento, recomenda-se a utilização de uma extensão como o **Live Server** (disponível no VSCode).

## 🎨 Design & Tipografia

A landing page foi desenvolvida para transmitir profissionalismo, seriedade e ao mesmo tempo ser altamente convidativa.
- **Fontes**: Utiliza as fontes `DM Sans` para textos e `Fraunces` para os títulos, ambas importadas do Google Fonts.
- **Acessibilidade**: Os tamanhos de fonte dos textos (parágrafos, formulários e botões) foram ajustados milimetricamente para garantir conforto visual em todas as telas, mantendo a hierarquia intacta com os títulos.
- **UX**: Botões e CTAs foram projetados para não sobreporem outros elementos, garantindo fluidez em celulares.

## 📁 Estrutura de Arquivos

```text
/
├── index.html        # Estrutura principal e marcação do site
├── style.css         # Variáveis, componentes e estilos de todo o layout
├── script.js         # Interações, carrossel e menu móvel
└── README.md         # Documentação da página
```

## 📝 Checklist Antes da Publicação

Antes de colocar o projeto em produção, certifique-se de preencher/ajustar os seguintes pontos:
- [ ] **Links do WhatsApp**: Substituir os links `https://wa.me/SEU_NUMERO_AQUI` em `index.html` pelos números reais de atendimento da escola.
- [ ] **Depoimentos**: Inserir depoimentos reais de alunos/pais no HTML/JS na seção `#depoimentos`.
- [ ] **Política de Privacidade**: Revisar o texto do modal `#politica-privacidade` garantindo conformidade com a LGPD.
- [ ] **Redes Sociais**: Colocar os links corretos para Instagram e Facebook no rodapé.
- [ ] **Google Analytics / Pixel**: Inserir as tags de rastreamento no `<head>` do `index.html` (se for fazer campanhas de marketing).
