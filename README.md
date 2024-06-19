# Sketchpad/Etch-A-Sketch Project
Introduction
In this project, I created a fun and interactive sketchpad inspired by an Etch-A-Sketch to practice my DOM manipulation skills. This project was part of The Odin Project curriculum, and it helped me improve my JavaScript and CSS skills.

Assignment
This project involved several steps to create a dynamic and interactive grid. Below is a summary of what I accomplished:

Project Setup
Repository Setup:
Created a GitHub repository for this project.
Cloned the repository to my local machine.
Committed changes early and often.
Creating the Grid
Grid Creation:
Created a webpage with a 16x16 grid of square divs.
Used JavaScript to dynamically generate the grid. The grid squares were placed inside a “container” div defined in the HTML file.
Utilized Flexbox to arrange the divs into a grid layout.
Styling and Debugging
Flexbox Layout:

Ensured the squares were evenly sized and aligned using Flexbox.
Paid attention to borders and margins to maintain the size of the squares.
Debugging:

Linked the CSS stylesheet correctly.
Used browser developer tools to check for JavaScript errors.
Verified the presence of grid elements in the "elements" panel.
Used console.log statements for debugging the JavaScript code.
Adding Interactivity
Hover Effect:

Implemented a hover effect to change the color of the grid cells when the mouse passes over them.
Used event listeners for mouseenter and mouseleave events to trigger the color change.
Explored different methods to change the color, such as adding a new class or updating the background color directly with JavaScript.
Interactive Grid Size:

Added a button that prompts the user to enter the number of squares per side for a new grid.
Ensured the new grid maintained the same overall dimensions (960px wide).
Limited user input to a maximum of 100 squares per side to prevent performance issues.
Pushing to GitHub
Version Control:
Regularly pushed changes to the GitHub repository to keep track of progress.
Extra Credit
For additional challenges, I implemented the following features:

Random Color Interaction:

Made each grid cell change to a random color on mouse interaction.
Progressive Darkening:

Implemented a feature where each interaction with a grid cell darkens it by 10%, achieving a fully black cell in ten interactions.
Used the opacity CSS property to achieve this effect.
