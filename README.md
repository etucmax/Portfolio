# Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🚀 **Modern Tech Stack**: React 18, TypeScript, Vite
- 🎨 **Beautiful Design**: Tailwind CSS with custom animations
- 📱 **Responsive**: Mobile-first design that works on all devices
- ⚡ **Fast Performance**: Optimized with Vite and modern React patterns
- 🌙 **Dark Mode**: Toggle between light and dark themes
- ✨ **Smooth Animations**: Framer Motion for delightful interactions
- 📧 **Contact Form**: EmailJS integration for contact functionality
- 🔍 **SEO Optimized**: Meta tags and structured data

## Tech Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **React Icons** - Icon library

### Additional Libraries
- **EmailJS** - Contact form without backend
- **React Helmet Async** - SEO and meta tag management
- **React Intersection Observer** - Scroll-triggered animations

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Personal Information
Update the following files with your information:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Change name, title, and description
   - Update social media links
   - Replace profile image placeholder

2. **About Section** (`src/components/About.tsx`):
   - Update bio and experience details
   - Modify statistics

3. **Skills Section** (`src/components/Skills.tsx`):
   - Add/remove skills
   - Update skill levels
   - Change icons

4. **Projects Section** (`src/components/Projects.tsx`):
   - Replace with your actual projects
   - Update project descriptions and links
   - Add real project images

5. **Contact Section** (`src/components/Contact.tsx`):
   - Update contact information
   - Configure EmailJS settings

### EmailJS Setup

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and a template
3. Create a `.env` file in the project root with:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
4. Make sure your template expects these fields: `from_name`, `from_email`, `subject`, `message`
5. The contact form reads those via `import.meta.env.*` and sends using EmailJS

### Styling

The project uses Tailwind CSS with custom configuration:

- **Colors**: Primary and dark theme colors defined in `tailwind.config.js`
- **Fonts**: Inter for body text, JetBrains Mono for code
- **Animations**: Custom keyframes and transitions
- **Components**: Reusable component classes in `src/index.css`

### SEO Optimization

Update meta tags in `index.html` and `src/App.tsx`:
- Title and description
- Open Graph tags
- Twitter Card tags
- Author information

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to `package.json`
3. Run: `npm run deploy`

## Performance Tips

- Use React.memo for expensive components
- Implement lazy loading for images
- Optimize bundle size with code splitting
- Use Web Vitals to monitor performance

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing your portfolio, feel free to open an issue or reach out!

---

Made with ❤️ using React and Tailwind CSS
