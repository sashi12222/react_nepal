# 🗺️ Interactive Nepal Map

A responsive React application featuring an interactive map of Nepal with province selection capabilities and toast notifications.

## 🚀 Features

- **Interactive Province Selection** - Click to select multiple provinces
- **Real-time Visual Feedback** - Hover effects and selection highlighting
- **Toast Notifications** - Instant feedback when provinces are selected
- **Fully Responsive Design** - Adapts to mobile, tablet, and desktop screens
- **Province Tooltips** - Hover to see province names
- **Debounced Interactions** - Optimized performance to prevent duplicate notifications

## �️ Tech Stack

- **React** 19.1.0
- **@react-map/nepal** - Interactive Nepal map component
- **react-toastify** - Toast notification system
- **Vite** - Build tool and development server
- **CSS3** - Custom responsive styling

## 📱 Responsive Breakpoints

| Device        | Screen Size | Map Size |
| ------------- | ----------- | -------- |
| Mobile        | ≤ 480px     | 300px    |
| Tablet        | ≤ 768px     | 500px    |
| Small Desktop | ≤ 1024px    | 700px    |
| Large Desktop | > 1024px    | 1000px   |

## 🎨 Design Features

- **Dark Theme** - Black background with white text
- **Custom Colors** - Orange hover effects, red selection highlights
- **Typography** - Responsive font sizing using clamp()
- **Smooth Interactions** - CSS transitions and hover effects
- **Accessible Tooltips** - High contrast hint system

## 📦 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/sashi12222/react_nepal.git
   cd react_nepal
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📂 Project Structure

```
src/
├── App.jsx          # Main component with map logic
├── App.css          # Responsive styling
├── index.css        # Global styles and reset
└── main.jsx         # Application entry point
```

## 🎯 Key Components

### Map Configuration

- **Type**: Multiple selection mode
- **Stroke**: Custom border styling
- **Hints**: Province name tooltips
- **Responsive sizing**: Dynamic based on screen width

### Toast System

- **Debounced notifications**: Prevents duplicate toasts
- **Custom styling**: Matches app theme
- **Position**: Top-right corner

## 🌟 Live Demo

👉 **[View Live Application](https://68869c9e6d69ea8b6bece4fa--remarkable-biscotti-124caa.netlify.app/day23/)**

## � Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Learning Notes

This project was developed as part of the **#100DaysOfCode** challenge with **@SkillShikshya**. Key learning outcomes include:

- React hooks (`useState`, `useEffect`, `useRef`)
- Responsive design with CSS media queries
- Event handling and state management
- Performance optimization with debouncing
- Modern build tools (Vite)

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[@react-map/nepal](https://www.npmjs.com/package/@react-map/nepal)** - For the interactive Nepal map component
- **[react-toastify](https://fkhadra.github.io/react-toastify/)** - For the notification system

---

**Made with ❤️ by [sashi12222](https://github.com/sashi12222)**
