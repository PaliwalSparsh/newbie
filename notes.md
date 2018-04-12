#Useful modules for CLI apps

1. Spinner by sindresorhus: ORA

```js
const spinner = ora('Loading unicorns').start();
setTimeout(() => {
	spinner.color = 'yellow';
	spinner.text = 'Loading rainbows' 
}, 1000);
```

2. minimist
minimist `-optionname` ke aage joh likh hai usko seriously leta hai
`terapackage -a beep -b boop extraArg`

```js
console.dir(argv);
argv = {_:["extraArg"], a:"beep", b:"boop"}

if (argv.o === "mailAll;") {
}
```