// Primeiramente é bom esclarecer que não há uma forma nativa de fazer isso no próprio HTML

// Ou seja, precisaremos de outras ferramentas que farão esta inserção de arquivo HTML no outro

// Então vejamos algumas delas:

// Incluir pelo Apache
// Se você estiver utilizando um servidor web na sua aplicação, como o Apache

// É possível criar uma instrução que fará a inserção de um arquivo HTML em outro

// Veja:

// <!-- #include file="arquivo.html" -->
// Veja mais sobre esta instrução aqui

// Com jQuery
// Com a biblioteca jQuery também é possível de forma fácil adicionar um HTML a página

// Veja a instrução:

// $( "#elemento" ).load( "arquivo.html" );
// Por meio do método load, carregamos um arquivo HTML em outro HTML

// Outras soluções
// Você pode optar também por frameworks que utilizam componentes como: React, Vue e Angular

// Assim você pode adicionar os HTMLs somente quando necessário, na página que quiser

// O conceito de Single Page Applications (SPA), vem se tornando cada vez mais presente no mundo web

// Claro que aqui a curva de aprendizado é muito maior, e talvez precise mudar seu projeto completamente

// Se você precisa de uma solução rápida utilize os dois métodos citados primeiro, e depois aprenda esta variação com SPA