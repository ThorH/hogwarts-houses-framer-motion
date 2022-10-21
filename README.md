# Hogwarts Houses - Framer Motion

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installing dependencies and running project

Run `npm install` to install dependencies and `npm start` to start the project in [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Project description

This project shows some details and curiosities of harry potter's hogwarts houses. Its main purpose is to make animations in react. On the home page you select the house you want to see, and below it shows the details of the house like description and traits. You can minimize the description and traits topics to help your organization and reading. Always in the upper right corner, there will be a newsletter icon, where you can enter your email and receive notifications (it's not really working). The site's animations are made with the framer motion library and some with css only.

## Project components

The website background is made with a deep space blue color and an animated star image with css only. The Header components has the icons and names of the four houses of hogwarts, it starts with an animation made with framer motion, you choose a house and open the house details component. The Details component access a hogwarts houses data file, finds and displays the selected house data, in this component some manual and scroll animations are made with the framer motion. If you notice, there is a component without a folder called "Animated Routes", this component basically serves to animate the enter and exit of the route components by framer motion using AnimatePresence. The Newsletter is a component that is always present as well as the Header componente, when you click on the icon it opens the modal for subscription.

## Project dependencies

<ul>
 <li>framer-motion</li>
 <li>react-router-dom</li>
 <li>react-icons</li>
 <li>styled-components</li>
</ul>

<div align="center">
    <p><strong>House selection example</strong></p>
    <img width="500" src="readme/hogwartshouses.gif">
    <br>
    <p><strong>Newsletter example</strong></p>
    <img width="500" src="readme/newsletter.gif">
</div>
