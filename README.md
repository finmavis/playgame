# Play Game

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Using API from [Play Game](https://playgame.com/).<br>
To see this project in action, go to [Github Pages](https://finmavis.github.io/playgame)

## Getting Started

Clone this repo : 
```git clone https://github.com/finmavis/playgame.git```

Navigate to the root folder and install all dependencies :
- `yarn install` or `npm install`

Start Development Mode :
- `yarn start` or `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- Happy Hacking!

## Folder Structure
```
src/
  component/
    assets/
      icon/
      images/
    Event/
    Footer/
    Games/
    Home/
    Navigation/
    News/
    styles/
    Tech/
  helpers/
  App.js
  App.test.js
  index.js
```

- `component` : Folder to put our Components
  - `assets` : Folder to put assets like images or icon
  - `Event` : Folder to put our Event Section Component
  - `Footer` : Folder to put our Footer Section Component
  - `Games` : Folder to put our Games Section Component
  - `Home` : Folder to put our Home Section Component
  - `Navigation` : Folder to put our Navigation/Navbar Component
  - `News` : Folder to put our News Section Component
  - `Tech` : Folder to put our Tech Section Component
  - `styles` : Folder to put our Styled Component that reusable or Global
- `helpers` : Folder to put our helpers function like Consume API and formating data or others helpers

## Style Utilities

### Relative Unit
This project using relative unit based 10px. so you can use `1rem` which means `10px` propeties in css to help ours styling more easier handling Resposive.

### Media Queries

  #### Relative Unit
  State | Properties
  ------------ | -------------
  Default | 1rem = 10px
  max-width 768px | 1rem = 9px
  max-width 576px | 1rem = 8px

  #### Container

  State | Properties
  ------------ | -------------
  Default | width = 100%
  min-width 576px | width = 540px
  min-width 768px | width = 720px
  min-width 992px | width = 960px
  min-width 1200px | width = 1140px