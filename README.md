# F3 Fitness - Modern Gym Website

A modern, responsive gym website inspired by Cult.fit, built with React, Tailwind CSS, and Vite.

## Features

- 🎨 **Modern Design**: Cult.fit-inspired dark theme with vibrant orange accents
- 📱 **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- 🏋️ **Two Training Modules**: Personal Training (PT) and General Training
- 📝 **Registration Form**: Easy-to-use form with EmailJS integration
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **EmailJS** - Email service integration

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd F3fitness
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## Project Structure

```
F3fitness/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Modules.jsx
│   │   └── RegistrationForm.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Configuration

### EmailJS Setup (Optional)

To enable email notifications from the registration form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the credentials in `src/components/RegistrationForm.jsx`:
   - `serviceID`: Your EmailJS service ID
   - `templateID`: Your EmailJS template ID
   - `publicKey`: Your EmailJS public key

## Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

## Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and configure the build settings
4. Deploy!

Or use Vercel CLI:
```bash
npm i -g vercel
vercel
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:
- `cult.orange`: Primary accent color
- `cult.dark`: Dark background color
- `cult.gray`: Secondary dark color

### Content

Update the content in each component file:
- `src/components/Hero.jsx` - Hero section
- `src/components/Modules.jsx` - Training modules
- `src/components/RegistrationForm.jsx` - Registration form and contact info

## License

© 2024 F3 Fitness. All rights reserved.

