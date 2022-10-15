# heavy-typescript

- Welcome to heavy typescript
- This implements the basic typescript things to know as a developer switching from javascript to typescript

- Typescript is no more different than javascript expect the fact that it has static typing, and some other features which makes the developers' work easier, and save us from the insanity that javascript has to offer

- Typescript is a superset of javascript and it is compiled to javascript.
- The underlying engine to run it, is still javascript
- In fact, typescript is compiled to javascript
- and then the javascript code is run in the browser or in the node environment

- So, typescript is not a new language (in short).
- If you have any familiarity to any strongly typed language like C/C++, Java, C#, etc, it will be very easy for you to understand typescript

<br>

### Prerequisites

- You should have a basic understanding of javascript
- Nodejs installed on your system
- A code editor (preferably VSCode)
- A terminal
- A browser

### Steps

<b>first you create a tsconfig.json file by running the following command in the terminal</b>

`tsconfig.json` is a special file which gives options to compile your typescript files. It has options to like

- Where you want your code to be compiled to (format of the code, module type etc.)
- What files to include and what to exclude
- where to look for predefined types, if you used any
- and so on ... many more ...

```bash
yarn init -y
yarn add -D typescipt # the typescript compiler
yarn add -D ts-node # to run the ts code directly in the nodejs environment
npx tsc --init # to actually create the `tsconfig.json` file
```

<b>Create your `.ts` files and start typesccripting</b>

Happy learning
