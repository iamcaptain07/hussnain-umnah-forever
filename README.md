# Umnah Birthday SPA

Welcome to the Umnah Birthday Single Page Application! This project is dedicated to celebrating the birthday of Dr. Umnah with a tech-inspired and romantic design.

## Features

- **Greeting Messages**: Display heartfelt birthday wishes with a typing animation.
- **Confetti Animation**: Celebrate with a fun confetti effect when the final message appears.
- **Theme Toggle**: Switch between light and dark themes for a personalized experience.
- **Responsive Design**: The application is designed to be fully responsive, adapting to various screen sizes.
- **Background Music**: Users can toggle background music to enhance the celebratory atmosphere.
- **Animated Background**: Enjoy a smooth gradient background with animations that add to the visual appeal.

## File Structure

The project is organized as follows:

```
umnah-birthday-spa
├── public
│   ├── index.html
│   └── manifest.json
├── src
│   ├── main.tsx
│   ├── App.tsx
│   ├── routes.tsx
│   ├── pages
│   │   └── Home.tsx
│   ├── components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── GreetingCard.tsx
│   │   ├── MessageForm.tsx
│   │   ├── Confetti.tsx
│   │   ├── AnimatedBackground.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── Modal.tsx
│   ├── hooks
│   │   ├── useWindowSize.ts
│   │   └── usePrefersReducedMotion.ts
│   ├── styles
│   │   ├── globals.css
│   │   ├── variables.css
│   │   └── animations.css
│   ├── utils
│   │   ├── confetti.ts
│   │   ├── theme.ts
│   │   └── accessibility.ts
│   ├── types
│   │   └── index.d.ts
│   └── assets
│       ├── fonts
│       └── audio
├── tests
│   └── App.test.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd umnah-birthday-spa
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to see the application in action!

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

Happy Birthday Dr. Umnah! 💖