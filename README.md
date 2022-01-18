# TypeScript

### TypeScript is an open source language and is a superset of JavaScript
* Offers additional features to JavaScript including static types
* Using types is completely optional
* Compiles down to regular JS
* Can be used for front-end JS as well as backend with Node.js
* Includes most features from ES6, ES7 (classes, arrow functions, etc)
* Types from 3rd party libraries can be added with type definitions

### Dynamic vs Static Typing
In dynamically typed languages, the types are associated with run-time values and not named explicitly in your code
Dynamic Examples: JavaScript, Python, Ruby, PHP

In statically typed languages, you explicitly assign types to variables, function parameters, return values, etc
Static Examples: Java, C, C++, Rust, Go


### Pros and Cons
* Pros
  * More Robust
  * Easily Spot Bugs
  * Predictability
  * Readability
  * Popular

* Cons
  * More Code To Write
  * More To Learn
  * Reguired Compilation
  * Not True Static Typing

### Compiling TypesScript
* TypeScript uses .ts and .tsx extensions
* TSC (TypeScript Compiler) is used to compile .ts files down to JS
* Can watch files and report errors at compile time
* Many tools include TS comilation by default
* Most IDEs have great support for TS
* The tsconfig.json file is used to configure how TypeScript works

### TypeScript를 JavaScript로 변환하는 방법 (TypeScript가 글로벌설치가 아닌 로컬설치 되어있는 경우)
```bash
$ npx tsc index.ts
```

### TypeScript를 JavaScript로 변환하는 방법 (TypeScript가 글로벌설치로 되어있는 경우)
```bash
$ tsc
```

### TypeScript (tsconfig.json) 설정 파일  만드는 방법 (TypeScript가 글로벌설치로 되어있어야 한다.)
```bash
$ tsc --init
```

### tsconfig.json 설정파일 세팅
```
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
  }
}
```

### TypeScript watch 명령어
```bash
$ tsc --watch
```

### TypeScript 호환하는 React App 만드는 방법
```bash
$ npm uninstall -g create-react-app
$ npx create-react-app ./ --template typescript
```