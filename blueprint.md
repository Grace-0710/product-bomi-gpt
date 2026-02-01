
# Lotto Number Generator

## Overview

A simple, modern, and interactive web application to generate lottery numbers. It displays the generated numbers and also shows a history of past winning numbers in a collapsible section.

## Features

*   **Lottery Number Generation:** Generates 6 unique random numbers between 1 and 45 with a smooth animation.
*   **Past Winning Numbers:** Displays a list of past winning lottery numbers in a collapsible section for a cleaner interface.
*   **Modern UI/UX:** A visually appealing interface with modern design elements, including animations, shadows, and interactive components.
*   **Responsive Design:** The layout adapts to different screen sizes.

## Project Structure

*   `index.html`: Main application structure.
*   `style.css`: All styles and animations.
*   `main.js`: Core logic for number generation and interactivity.

## Current Plan: UI/UX Enhancement

1.  **Update `index.html`:**
    *   Add a header to the "Past Winning Numbers" section to act as a toggle button.
    *   Include an arrow icon within the toggle button to indicate the collapsible state.

2.  **Update `style.css`:**
    *   Apply a subtle noise texture to the background for a premium feel.
    *   Enhance the "Generate Numbers" button with a glowing effect on hover.
    *   Add a fade-in and scale-up animation for the generated lottery numbers.
    *   Implement a smooth transition for the collapsing/expanding "Past Winners" section.
    *   Style the new toggle header and the arrow icon, including a rotation effect for the arrow.

3.  **Update `main.js`:**
    *   Implement the logic for the collapsible "Past Winners" section.
    *   Add a click event listener to the toggle header.
    *   On click, toggle a CSS class to show/hide the list and rotate the arrow icon.
