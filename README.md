# React Button Component

A Dynamic Button Component Styled after bootstrap


## Running the Project

Clone this Repository:
`git clone https://github.com/ChrsSampson/Button-Component`

In the project directory, run:
`NPM install`

In the project directory, you can run:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## How To Use
The apperance of the button changes depending on the parameters you provide through react props

### Availible Parameters
Change button style
`variant` | null | default | outline | text
Change color
`color`   | null | default | primary | secondary | danger
Change Size
`size`    | null | sm      | md      | lg

#### Icons
This projects is using googles material design icon library, so any icon from 
[https://fonts.google.com/icons?selected=Material+Icons](here) should work.

Add Icon before text
`startIcon` | Ex: add_shopping_cart
Add Icon after text
`endIcon` | Ex: add_shopping_cart

#### Boolean Parameters
Disabled Button
`disabled`
Remove Button shadow
`disableShadow`

## About This Project
This application/site was created as a submission to a DevChallenges challenge. The challenge was to build an application to complete the given user stories.


Challenge: Create a reusable button with all the states in the design and a page displaying all the states. You can work on the same project with other design system challenges. Use Front-end libraries like React or Vue. Don’t look at the existing solution. Fulfill user stories below:
<ul>
    <li>User story: I can see different button types: default, outline and text </li>
    <li>User story: I can choose to disable box-shadow </li>
    <li>User story: I can choose to disable the button </li>
    <li>User story: I can choose to have an icon on the left or right (Use Google Icon and at least 5 variants) </li>
    <li>User story: I can have different button sizes </li>
    <li>User story: I can have different colors </li>
    <li>User story: When I hover or focus, I can see visual indicators </li>
    <li>User story: I can still access all button attributes </li>
    <li>User story (optional): Show button in a similar way like the design or use Storybook.  Otherwise, showing the button in multiple states is enough </li>
