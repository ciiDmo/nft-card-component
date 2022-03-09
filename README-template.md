# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![NFT Card](src/img/preview.PNG?raw=true "NFT Card")
![NFT Card Interact](src/img/previewHover.PNG?raw=true "NFT Card Interact")

### Links

- Solution URL: https://github.com/ciiDmo/nft-card-component

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library

### What I learned

Below there are some code snippets what I learned:

```HTML
//this TAG create a line. Use CSS to chose what side will appear
<hr size="1" className={styles.line}/>
```

```css
.personTxt {
    float: right;
    ...
}
.personName {
    ...
    transition: 0.5s;
}
.person {    
    display: inline-flex;
    ...
}
.card {
    ...
    align-items: flex-start;
    flex-direction: column;
    ...
}

/*to centralize a image in a div*/
.viewer {
    ...  
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
}
```

### Continued development

With this exercise I learned a lot of CSS codes, improving my abilities in this area making me proud of myself. I will continue focusing in the CSS, while improving my skills in React.js.

## Author

- LinkedIn - [Cidmar Oliveira](https://www.linkedin.com/in/cidmar-oliveira-2b8166231/)
- GitHub - [ciiDmo](https://github.com/ciiDmo)
- Twitter - [@ciiDmo](https://twitter.com/ciiDmo)
