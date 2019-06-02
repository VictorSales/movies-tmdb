# movies-tmdb

O problema do webapp para filmes foi resolvido da seguinte forma:

No frontend foi usada a biblioteca React (Javascript), que é largamente utilizada e requisitada no mercado por ser simples para o desenvolvimento e também por ser escalável para criação de futuros componentes.

Dependências:
- Axios: Realizar as requisições HTTP e assim permitir o consumo da API.

- Infinite-scroller: Permitir o carregamento dos itens sob demanda e criar o efeito de infinite scroll, que é quando o usuário realiza a rolagem da página para baixo e espera que mais itens sejam exibidos
Device-detect: Detectar se o usuário está navegando na web por dispositivos móveis ou não, permitindo a criação de interfaces distintas.

- Semantic UI: Desenvolver páginas responsivas. Esse framework contém alguns componentes que foram utilizados para criar a interface desse projeto, como o Search, Loader e Card.

No backend foi usado o Spring Boot (Java) para consumir o API do TheMovieDatabase, externalizando as rotas para o consumo através do React. A aplicação seguiu a arquitetura MVC, que possibilita a divisão do projeto em camadas bem definidas, e tem como uma de suas vantagens, tornar o processo de manutenibilidade do código mais fácil.

Dependências:
- Sring-boot-starter-web: Permitir a criação de aplicações web e também para consumo de serviços REST, inclui o uso do Spring MVC, que segue a arquitetura proposta e facilita o desenvolvimento, por exemplo, permitindo o uso de algumas anotações, tais como: @Controller, @Service e @Autowired. Também torna possível subir a aplicação na WEB utilizando Apache Tomcat como servidor.

- Lombok: Tornar o processo de desenvolvimento mais rápido, reduzindo a necessidade de criação de códigos que são comuns ao criarmos Classes que representam objetos com valores. Para resolver esse problema, permite o uso de annotations que criam automaticamente os getters, setters, toString, equals, etc.
