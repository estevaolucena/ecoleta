<h1 align="center">
    <img alt="NextLevelWeek" title="#NextLevelWeek" src=".github/logo.svg" width="250px" />
</h1>

<p align="center">	
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/EstevaoLucena/ecoleta">
	
  <a href="https://www.linkedin.com/in/estevaolucena/">
    <img alt="Made by Estevão Lucena" src="https://img.shields.io/badge/made%20by-Estevão Lucena-%2304D361">
  </a>

  <a aria-label="Completed" href="https://nextlevelweek.com/aulas/booster/1/edicao/1">
    <img src="https://img.shields.io/badge/NLW-done-brightgreen?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEVHcExxWsF0XMJzXMJxWcFsUsD///9jRrzY0u6Xh9Gsn9n39fyMecy0qd2bjNJWBT0WAAAABHRSTlMA2Do606wF2QAAAGlJREFUGJVdj1cWwCAIBLEsRU3uf9xobDH8+GZwUYi8i6ucJwrxKE+7D0G9Q4vlYqtmCSjndr4CgCgzlyFgfKfKCVO0LrPKjmiqMxGXkJwNnXskqWG+1oSM+BSwD8f29YLNjvx/OQrn+g99oQSoNmt3PgAAAABJRU5ErkJggg=="></img>
  </a>
  
  <a href="https://github.com/EstevaoLucena/ecoleta/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/EstevaoLucena/ecoleta">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/EstevaoLucena/ecoleta/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/EstevaoLucena/ecoleta?style=social">
  </a>
</p>
<p align="center">
<a href="https://insomnia.rest/run/?label=Ecoleta&uri=https%3A%2F%2Fraw.githubusercontent.com%2FEstevaoLucena%2Fecoleta%2Fmaster%2Fserver%2FInsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>


## :dart: What's Next Level Week?

NLW is a seasonal event where a complete application with backend, frontend and mobile is developed using tools such as NodeJS, ReactJS and React Native.
The proposal is a week of a lot of code with complete immersion in these technologies.


## 💻 Project

Ecoleta is a project developed based on international environment week. 
That aims to connect people to companies that collect specific waste such as light bulbs, batteries, cooking oil, etc.

<h1 align="center">
    <img alt="Example" title="Example" src=".github/capa.svg" width="500px" />
</h1>


## :rocket: Technologies

This project was developed with the following technologies:

- [Node.js][nodejs]
- [TypeScript][typescript]
- [React][reactjs]
- [React Native][rn]
- [Expo][expo]

## 🔖 Layout

To access the layout use [Figma](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/).

### Web example:
![](.github/web.gif)

## :information_source: Requirements

To clone and run this application, you'll need [Git](https://git-scm.com) > v2.x, [Node.js][nodejs] > v12.x + [Yarn][yarn] > v1.x installed on your computer.

From your command line:

### Install 

```bash
# Clone this repository
$ git clone https://github.com/EstevaoLucena/ecoleta

# Go into the repository
$ cd ecoleta

# Install dependencies
$ yarn install

# Run Database Migrate
$ yarn knex:migrate

# Run Database Seed
$ yarn knex:seed

```

### Running

```bash
# Start Server
$ yarn start:server
# running on port 3000
```

```bash
# Start Web
$ yarn start:web
# running on port 3001
```

```bash
# Start Mobile
$ yarn start:mobile
```
A new window will open, scan the QR Code using the Expo App iOS [iOS](https://itunes.apple.com/app/apple-store/id982107779) or [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www).

See the [Expo Docs](https://expo.io/learn) for more details.


## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/EstevaoLucena/ecoleta/blob/master/LICENSE) for details.

Made with ♥ by Estevão Lucena :wave: [Get in touch!](https://www.linkedin.com/in/estevaolucena/)

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[expo]: https://expo.io/
[reactjs]: https://reactjs.org
[rn]: https://facebook.github.io/react-native/
[yarn]: https://yarnpkg.com/
