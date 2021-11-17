# Fab Quote

### Abstract

This app generates a random quote and background everytime users visit the homepage. It also allows users to further choose quote category and search for specific background. If a user likes the content, he/she can collect the quote to favorite list, and furthur cusimize the style of the quote(font family, color, positions). Users can also make their own quote!

### Deployed Link

Experience full functionalities of the app [here](https://fab-quote.herokuapp.com/)


### Screenshots
#### Homepage
![homepage-crop](https://user-images.githubusercontent.com/73845209/142293991-cfc78ed0-2333-449f-9533-ff7acf442112.gif)




#### Favorite list





#### When I request background image too many times in a short time and reach API limit 
![error](https://user-images.githubusercontent.com/73845209/142292730-efdd7a42-67ea-4fb9-88bd-4f7adc8d8baf.png)

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

### API Credits
- [Quotable](https://github.com/lukePeavey/quotable)
- [Unsplash](https://unsplash.com/)

### Developed by

Bei Zhang (owner of this repo)

### Project Manager

[Kayla Gordon](https://github.com/kaylagordon)
[Robbie Jaeger](https://github.com/robbiejaeger)

### Project specs

[Showcase project](https://frontend.turing.edu/projects/module-3/showcase.html)
