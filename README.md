# Primtech Limited - Electromechanical Website

A modern, responsive, and professional corporate website for Primtech Limited, showcasing their electromechanical engineering services, projects, and capabilities.

## 🚀 Features

### Design & UI
- **Modern & Professional Design** - Clean, corporate aesthetic with gradient accents
- **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- **Beautiful Animations** - Smooth scroll animations using AOS (Animate On Scroll)
- **Custom Color Scheme** - Primary orange (#F49F22) and accent orange (#FF7F11)
- **Typography** - Inter for body text, Poppins for headings

### Pages & Components
- **Homepage** - Hero section, services overview, featured projects, testimonials, client logos
- **About Us** - Company story, vision & mission, leadership team, company timeline
- **Services** - Detailed service cards with modals, process overview
- **Projects** - Filterable project portfolio with categories and status
- **Contact** - Contact form with validation, contact info, map integration, FAQ

### Functionality
- **React Router** - Client-side routing with smooth navigation
- **Form Validation** - React Hook Form with comprehensive validation
- **Mobile Navigation** - Responsive hamburger menu
- **WhatsApp Integration** - Floating WhatsApp button with pre-filled messages
- **SEO Optimized** - Meta tags, semantic HTML, Open Graph tags

### Technical Features
- **React 18** - Latest React features and hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **AOS Library** - Scroll animations
- **React Hook Form** - Form handling and validation

## 📁 Project Structure

```
primtech-website/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   └── WhatsAppButton.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Services.js
│   │   ├── Projects.js
│   │   └── Contact.js
│   ├── data/
│   │   ├── services.json
│   │   └── projects.json
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd primtech-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#F49F22', // Main orange
    // ... other shades
  },
  accent: {
    500: '#FF7F11', // Accent orange
    // ... other shades
  }
}
```

### Content
- **Services**: Edit `src/data/services.json`
- **Projects**: Edit `src/data/projects.json`
- **Contact Info**: Update phone numbers and addresses in components
- **Company Info**: Update company details in About page and Footer

### Images
Replace placeholder content with actual images:
- Project images in project cards
- Team member photos in About page
- Service icons (currently using Lucide React icons)

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Dependencies

### Core Dependencies
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-router-dom`: ^6.3.0
- `react-hook-form`: ^7.43.0

### UI & Styling
- `tailwindcss`: ^3.3.0
- `lucide-react`: ^0.263.1
- `aos`: ^2.3.4

### Development
- `react-scripts`: 5.0.1
- `autoprefixer`: ^10.4.14
- `postcss`: ^8.4.24

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages
1. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

## 📞 Contact Information

The website includes the following contact details:
- **Phone**: +880 1999-099003
- **Email**: info@primtech.com
- **Address**: House #123, Road #12, Banani, Dhaka-1213, Bangladesh
- **WhatsApp**: +880 1999-099003

## 🎯 SEO Features

- Meta tags for all pages
- Open Graph tags for social sharing
- Semantic HTML structure
- Alt text for images
- Structured data (can be added)
- Sitemap generation (can be added)

## 🔒 Security

- Form validation on client-side
- XSS protection through React
- Secure external links with `rel="noopener noreferrer"`

## 📈 Performance

- Optimized images (recommended)
- Lazy loading (can be implemented)
- Code splitting with React Router
- Minified CSS and JS in production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions:
- Email: info@primtech.com
- Phone: +880 1999-099003
- WhatsApp: +880 1999-099003

---

**Built with ❤️ for Primtech Limited** 