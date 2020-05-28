# Fleet-control

## Sobre o repositorio

O repositorio tem como objetivo solucionar o desafio proposto pela EuroIT com parceria da Easy Carros para a vaga de Desenvolvedor Front End, a descrição do desafio pode ser encontrada no [link](https://bitbucket.org/easycarros/frontend-challenge/).

## Iniciando

A base do desafio é criar um Aplicativo ou SPA que conectado a API fornecida pela Easy Carros atue como um controlador de frota para o usuário.

Para o desafio optei por utilizar React e construir uma SPA em conjunto com algumas bibliotecas para chegar ao resultado esperado.

### Pré requisitos

Para utilizar os projetos é necessario ter o Node instalado na maquina, o projeto foi criado utilizando node na versão 12.16.3 download [aqui](https://nodejs.org/en/).

## Instalação

Para rodar o projeto basta utilizar o comando:

```bash
  $ npm install

  # ou caso utilize yarn
  $ yarn install
```

## Rodando a aplicação

```bash
$ npm run start
# ou caso utilize yarn
$ yarn start
```

O projeto irá rodar na porta 3000.

Node foi a principal tecnologia a ser utilizada, o projeto utiliza:

- React (criado apartir do create-react-app)
- Axios (para recuperar os dados da Api)
- React Router Dom (para gerenciar a navegação entre as páginas)
- React Toastify (para os alertas que são exibidos)
- Styled Components (para auxiliar na criação dos componentes, estilos, e temas)
- Styled Icons (para termos opções de icones para menus, botões e logo)
- EsLint e Prettier (para manter o codigo padronizado e coeso)

## Observações

O projeto irá funcionar sem a api, porém o não irá conseguir acessar o aplicativo devido o login, caso a api não esteja rodando localmente ou utilizando uma outra porta será necessário modificar o arquivo _API.js_ localizado em:

    src/
      -utils/
        API.js

Basta trocar a _baseURL_ para um endereço ou porta que reflita o projeto backend.
Para fazer login, confira as credenciais da API Backend [aqui](https://bitbucket.org/easycarros/frontend-challenge/).

## Estrutura do projeto

    src/
      -assets/
      -components/
      -pages/
        -Frota/
        -Login/
      -services/
      -utils/

### assets

Pasta o nosso reset, nosso css global e o nosso tema padrão, os arquivos são importados pelo arquivo _index.js_.

### components

Nesse diretorio ficam os componentes que podem ser compartilhados no nosso projeto, componentes 'comuns' para o projeto, temos o nosso _FormInput_ que auxilia na construção e validação dos nosso campos de input, o _Header_ que juntamente com o _MenuList_ provem nossa barra na área logada com as opções do menu e por fim os nosso Wrappers de Paginas(_PageWrapper_) e Alertas(_ToastWrapper_).

### pages

O diretorio onde ficam armazenadas as paginas, cada pagina fica dentro do seu respectivo diretorio, a pagina tem como principal responsabilidade buscar e tratar dados (através do services) para serem repassados para os componentes.

#### Observação

Caso a pagina necessite de estilos propios eles são encontrados no arquivos _styled.js_ que ficam dentro do diretorio da página e não devem ser importados por nenhuma outra pagina, caso isso ocorra ele deve ser deslocado para o diretorio components e virar dependencia de ambas as paginas.

### services

O diretorio services armazena os arquivos responsaveis por recuperar e enviar dados para nossas API's.

### utils

Por fim o diretorio de utilitario está o nosso arquivo de criação da nossa API base e os nossos validadores.
