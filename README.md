# Rick and Morty

Aplicação front-end desenvolvida para o processo seletivo da empresa SegDev. Lista de requisitos: [https://github.com/segdev-tecnologia/vagas/tree/main/frontend-challenge](https://github.com/segdev-tecnologia/vagas/tree/main/frontend-challenge).

Aplicação para buscar os personagens do Rick and Morty utilizando a api: [https://rickandmortyapi.com](https://rickandmortyapi.com).

## Demo
A demo está hospedada no Netlify. Acesse através do [Link](https://rickandmorty-segdev.netlify.app).


## requisitos

- [x] Ser uma aplicação responsiva;
- [x] Pelo menos um component separado do App;
- [x] Criação de um design patterns para o projeto;
- [x] Usar rotas internamente para fazer detalhes de dados;
- [x] Usar um state management para guardar os dados localmente;
- [x] Gitflow;

## Diferenciais

- [x] Garantir uma persistência do cache local;
- [x] Filtros (Paginação e pesquisa por texto)
- [x] Typescript
- [ ] Testes Unitários


### Tecnologias utilizadas

- Vue 3
- Vite
- Typescript
- Pinia
- Vue-router
- Tailwind
- Vitest
- Eslint
- Axios

  
## Instalação

1. Crie um arquivo `.env` (na raiz do projeto) seguindo o exemplo em `.env.example`
2. Instale as dependências do projeto
  
  ```sh
# Instalar dependencias
npm install
```

```sh
# Executar aplicação em modo de desenvolvimento
npx vite 
```

## Sobre o projeto

- Para agilizar no processo de desenvolvimento da aplicação, utilizei a framework de CSS Tailwind. Uma das desvantagem de usar Tailwind é que o HTML acaba ficando poluido, por outro lado, o desenvolvimento fica mais rápido, pois não é necessário ter que escrever CSS. A Tailwind é otima para desenvolver aplicações pequenas.

- Nessa aplicação eu utilizei o componente Suspense do vue 3. Embora na documentação esteja descrita como **[experimental](https://vuejs.org/guide/built-ins/suspense.html#suspense)**, a princípio, não há problemas em utilizar o componente na nessa aplicação, pois não está sendo usado mais de uma Promise no componente filho.

- Foi utilizada a biblioteca Pinia como state management. Existem 3 módulos na aplicação: personagens, filtros e paginação. O módulo personagens observa os demais módulos, permitindo fazer novos requests na API toda vez que o estado do filtro ou paginação são alterados. 

- O modal de visualização do personagem é uma rota diferente. É utilizado um componente filho para rota principal. A vantagem de utilizar a página dessa forma é poder acessar as informações de um personagem por uma url ex: [rickandmorty-segdev.netlify.app/character/2](https://rickandmorty-segdev.netlify.app/character/2). Além disso, o usuário que está acessando não precisa sair da página para checar mais informações.









