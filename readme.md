# About

Ever find yourself doing something like this?

```
cd folder1
ls
cd ..
cd folder2
ls
cd folder3
...
```
and so on? This project's aim is to make navigating the terminal directories more fun and most importantly, quicker too.

# Installation

```
npm i -g @lioloc/cdi
```

# Usage
```
cdi
```
And you're away! When you're done navigating, press ctrl + C to see where you ended up.

> Because the navigation occurs in a separate process, you'll have to copy the final destination and cd into it in your next process

E.G.

```bash
// Start navigating
cdi

// Navigate and press [ctrl+c] when done
You ended up at: /mnt/c/Users/colas/Documents

// Copy and paste path for next process
cd /mnt/c/Users/colas/Documents
```