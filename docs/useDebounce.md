<h1 align="center">useDebounce</h1>

> useDebounce is a hook built on useEffect that allows you to debounce your function in milliseconds


## Get started

```sh
$ npm install @julienvanbeveren/hooks --save
```
```jsx
import { useDebounce } from '@julienvanbeveren/hooks'
```
useDebounce has the same syntax as useEffect, but it takes one extra parameter, which is the delay in millisconds.
```jsx
useDebounce(() => {
	//function here
}, [dependencies], delay)
```
The callback inside the useDebounce hook will execute as soon as none of the dependencies have changed for longer than the delay. As long as dependencies keep changing, nothing will get executed.

---
[All hooks](https://github.com/julienvanbeveren/react-hooks)