# Teste Facil Consulta
## Rodando o projeto

Para iniciar o projeto, clone o repositório em sua máquina, em seguida execute o comando:
```
npm install
```
para ter as dependências devidamente instaladas.

Com as dependências em dia, utilize o comando
```
npm run serve
```
para rodar o projeto localmente.

### Informações sobre o projeto

Os componentes que foram requisitados se encontram na pasta 'src/components/shared' e 'src/components/pagina3'. 

Para o projeto, criei uma pasta de css dentro do folder assets. 
Nela existem 2 arquivos.

1. styleGuide.css

Neste arquivo estão os estilos globais para o projeto. (tamanho de fonte, cores utilizadas, dentre outros). 

2. pagina.css

Onde se encontram os estilos que são comum para as paginas que foram solicitadas.

#### Durante o teste, tive duas dificuldades

1. Criar o botao checkbox de formas de pagamento.

Como solução, encontrei, no google, um belo checkbox no formato que precisava para o trabalho( ainda tinha animação :wink:). O único desconforto foi que utilizava sass - utilizei na maior parte css(Sass também é css, mas me refiro a linguagem utilizada) - dessa forma o codigo ficou em sua maioria com css e só a parte dos "checkbuttons" com sass css.

2. Responsividade da tela.

Fazer com que na tela mobile o card não exibisse as imagens foi a parte tranquila, o maior problema que tive foi alinhar esse card no fim da página. Como solução, aumentei o 'height' da tela em alguns 'vh's (view height)' para que pudesse utilizar o flex align end.