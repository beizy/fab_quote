# Fab Quote

### Abstract

This app generates a random quote and background everytime users visit the homepage. It also allows users to further choose quote category and search for specific background. If a user likes the content, he/she can collect the quote to favorite list, and furthur cusimize the style of the quote(font family, color, positions). Users can also make their own quote!

### Deployed Link

Deployment hasn't been successuful when you see this message
Experience full functionalities of the app [here]()

### Test instructions
- Cloned down this repo
- Install Cypress in root folder

```
npm install cypress --save-dev

```

- CD into project root folder, start the project and Open Cypress console

```
npm start
npx cypress open
```

- Click to run each test.

### Screenshots
![Landing page](https://user-images.githubusercontent.com/73845209/141873777-0f91a5f1-1857-405f-b351-3beb8dda4f0c.png)
![Favorite list](https://user-images.githubusercontent.com/73845209/141873959-5e5ae328-3f33-4cbe-b43d-14e3413a9e6f.png)

![Make your own page](https://user-images.githubusercontent.com/73845209/141874191-5183bbd0-1a4e-493b-a360-9c9bafd3daa9.png)




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
