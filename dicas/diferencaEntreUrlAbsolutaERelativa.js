// Veja os exemplos das situações:

// <!-- URL absoluta -->
// <script src="https://www.meusite.com.br/src/js/scripts.js"></script>
// <!-- URL relativa -->
// <script src="src/js/scripts.js"></script>
// <!-- URL relativa da raiz -->
// <script src="/src/js/scripts.js"></script>
// Na verdade não há diferença alguma em chamar arquivos por qualquer uma destas maneiras apresentadas

// O browser otimiza as chamadas da forma que é mais interessante tanto para ele quanto para o cliente que está acessando o site

// Tamanho do arquivo
// Porém, como você deve saber, a cada caractere escrito em um arquivo o seu tamanho aumenta

// Quando maior o arquivo, mais tempo demora para o mesmo ser interpretado e executado

// Ou seja, as formas maiores de chamar um arquivo implicarão em um arquivo maior e consequentemente mais lento para ser lido

// Claro que a este nível não deve impactar muito, porém é bom ter o cuidado

// Manutenção
// Se você colocar URLs absolutas, toda vez que for alterado o domínio, por exemplo, você também tem que lembrar de mudar a chamada do arquivo

// Então começa a se aumentar os custos de manutenção, sendo assim a URL relativa o caso mais indicado para menos manutenção no código

// Já as URLs relativas globais, que vão desde a raiz, tendem a economizar tempo na manutenção

// Pois dificilmente um projeto vai mudar a sua estruturas de pastas, ainda mais após o mesmo estar em produção e o time todo com o projeto em suas máquinas