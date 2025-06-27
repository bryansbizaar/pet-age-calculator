# Pet Age Calculator

A simple web application that converts your pet's age to human years using scientifically-based piecewise calculations.

## Features

- **Multiple Pet Types**: Calculate ages for dogs, cats, and rabbits
- **Piecewise Method**: Uses different aging rates for early years vs. later life stages
- **Real-time Updates**: Results update automatically as you type
- **Responsive Design**: Works on desktop and mobile devices
- **Clean Interface**: Modern, gradient-styled UI

## How It Works

The calculator uses a piecewise aging method that accounts for the fact that pets age rapidly in their early years and more slowly as they get older:

### Dogs

- First year: 10.5 human years per dog year
- Second year: 10.5 human years per dog year
- After 2 years: 4 human years per dog year

### Cats

- First year: 15 human years per cat year
- Second year: 9 human years per cat year
- After 2 years: 4 human years per cat year

### Rabbits

- First year: 21 human years per rabbit year
- Second year: 6 human years per rabbit year
- After 2 years: 6 human years per rabbit year

## Usage

1. Enter your pet's age in years (decimals allowed)
2. Select your pet type from the dropdown
3. The human age equivalent will display automatically

## Live Demo

[View Live Demo](https://bryansbizaar.github.io/pet-age-calculator/)

## Technologies Used

- HTML5
- CSS3 (with modern features like gradients and flexbox)
- Vanilla JavaScript
- Responsive design principles

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/bryansbizaar/pet-age-calculator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd pet-age-calculator
   ```

3. Open `index.html` in your web browser or serve it using a local web server.

## File Structure

```
pet-age-calculator/
├── index.html      # Main HTML structure
├── style.css       # Styling and responsive design
├── script.js       # Age calculation logic
└── README.md       # Project documentation
```

## Contributing

Feel free to fork this project and submit pull requests for any improvements!

## License

This project is open source and available under the [MIT License](LICENSE).
