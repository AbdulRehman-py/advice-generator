The Advice Generator App is a simple and interactive web application that provides users with random pieces of advice. Each time the user clicks the button, a new piece of advice is fetched from the Advice Slip JSON API and displayed on the screen. The app also features a visually appealing animation where the button icon rotates 360 degrees upon each click, enhancing the user experience.

Key Features

- Random Advice: Fetches and displays a random piece of advice each time the button is clicked.
- Advice ID: Displays the unique ID associated with each piece of advice.
- Interactive Animation: The button icon rotates 360 degrees on each click, providing a smooth and engaging visual effect.
- Responsive Design: The app is designed to be responsive and works well on various screen sizes and devices.

### Technologies Used

- HTML: Provides the structure of the web application.
- CSS: Styles the application and defines the rotation animation for the button icon.
- JavaScript: Handles fetching data from the API, updating the DOM, and managing the button click event and animation.

 How It Works

1. Fetching Advice:
   - The app uses the Advice Slip JSON API to fetch random pieces of advice.
   - The API endpoint `https://api.adviceslip.com/advice` is called to retrieve a random advice slip.

2. Displaying Advice:
   - The fetched advice and its ID are displayed on the screen.
   - The advice text is shown in a paragraph element, and the ID is displayed in a span element within the heading.

3. Button Animation:
   - When the button is clicked, a CSS class is added to the button icon to trigger a 360-degree rotation animation.
   - The class is removed after the animation completes, allowing the animation to be re-triggered on subsequent clicks.

 User Interaction

- Click the Button: Users can click the button to fetch and display a new piece of advice.
- Watch the Animation: Each click triggers a smooth 360-degree rotation of the button icon, enhancing the interactive experience.

