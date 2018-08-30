
# Skype-Clone
> A Skype clone made with React + Redux and TypeScript.

## Installing / Getting started

To try the code, run from the terminal:

```shell
git clone https://github.com/amarchisio/Skype-Clone.git
cd skypey
yarn install
yarn start
```

## Developing

### Built With

| Tool       | Version |
|------------|--------:|
| React      | ^16.4.1 |
| Redux      | ^4.0.0  |
| TypeScript | ^2.9.2 |

### Prerequisites

Either [npm][npm] or [yarn][yarn] is needed to install dependencies and start
the development server. [Git][git] is needed to clone and start the application.

## Style guide

Organise code according to Redux's [three principles][redux-three-principles].

The root module of a folder should be named `index.ts` or similar, to ease up
imports. E.g. for an Example component:

```
.
└── components
    └── Example
        ├── index.tsx
        └── index.css
```

## Licensing

This project is [MIT licensed][mit].

[git]: https://git-scm.com/downloads
[mit]: LICENSE
[npm]: https://nodejs.org/en/download/
[redux-three-principles]: https://redux.js.org/introduction/three-principles
[yarn]: https://yarnpkg.com/lang/en/docs/install/
