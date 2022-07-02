<h1 align="center">useThrottle</h1>

> useThrotlle is a hook built on useEffect that allows you to throttle your function in milliseconds


## Get started

```sh
$ npm install @julienvanbeveren/hooks --save
```
```jsx
import { useThrottle } from '@julienvanbeveren/hooks'
```
useThrottle has the same syntax as useEffect, but it takes one extra parameter, which is the delay in millisconds.
```jsx
useThrottle(() => {
	//function here
}, [dependencies], delay)
```
The callback inside the useThrottle hook will execute as soon as none of the dependencies have changed for longer than the delay. As long as dependencies keep changing, nothing will get executed.

---
[All hooks](https://github.com/julienvanbeveren/react-hooks)