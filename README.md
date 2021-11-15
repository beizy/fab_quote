# Fab Quote

### Abstract

This app generates a random quote and background everytime users visit the homepage. It also allows users to further choose quote category and search for specific background. If a user likes the content, he/she can collect the quote to favorite list, and furthur cusimize the style of the quote(font family, color, positions). Users can also make their own quote!

### Deployed Link

Experience full functionalities of the app [here]()

### Test instructions

- Cloned down this repo
- Install Cypress in root folder

```
npm install cypress --save-dev

```

- Open Cypress console

```
npx cypress open
```

- Click to run each test.

### Screenshots

### Technology

- Frameworks: React,create-react-app, react router
- Languages: HTML, CSS, JSX, JavaScript
- Testing: Cypress, chai
- Other libraries: Material UI, webfontloader
- Storage: localStorage
- Deployment: Heroku

### Wins and Challenges

#### Wins

- App has rich functions for user to get desired content
- App utilizes context to achieve simultaneous interaction between user-input and UI.
- A touch of Material UI saves a lot styling efforts

#### Challenges

- MUI complicates components structure to a hell level.
- Last minute API fail. Bruzu has CORS issues so fetch calls from the app are all rejected. Making downloading image unreachable (for now)
- Lack of design ideas

### Future Additions

- Let user download their customized quote card
- Better looking app design
- Dry up context by introducing reducer

### Developed by

Bei Zhang (owner of this repo)

### Project Manager

[Kayla Gordon](https://github.com/kaylagordon)
[Robbie Jaeger](https://github.com/robbiejaeger)

### Project specs

[Showcase project](https://frontend.turing.edu/projects/module-3/showcase.html)
