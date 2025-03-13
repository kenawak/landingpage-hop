import type { Project } from "./types"

// Sample featured projects
export const featuredProjects: Project[] = [
  {
    id: "1",
    title: "TelegramBotUI",
    description: "A modern UI framework for Telegram bots with rich components and interactions.",
    image: "/placeholder.svg?height=500&width=400",
    tags: ["React", "TypeScript", "Bot API"],
    social: {
      github: "https://github.com/username/TelegramBotUI",
      telegram: "https://t.me/telegramBotUI",
    },
  },
  {
    id: "2",
    title: "Code Snippet Sharing",
    description: "Share and discover code snippets with syntax highlighting and version control integration.",
    image: "/placeholder.svg?height=500&width=400",
    tags: ["Python", "FastAPI", "MongoDB"],
    social: {
      github: "https://github.com/username/code-snippet-sharing",
      telegram: "https://t.me/codesnippets",
    },
  },
  {
    id: "3",
    title: "DevMeet",
    description: "Connect with developers in your area for meetups, hackathons, and coding sessions.",
    image: "/placeholder.svg?height=500&width=400",
    tags: ["React Native", "Firebase", "Maps API"],
    social: {
      github: "https://github.com/username/devmeet",
      telegram: "https://t.me/devmeet",
    },
  },
]

// Sample projects data for explore section
export const projectsData: Project[] = [
  ...featuredProjects,
  {
    id: "4",
    title: "AI Code Assistant",
    description:
      "An AI-powered code assistant that helps you write better code faster with context-aware suggestions and automated refactoring.",
    image: "/placeholder.svg?height=500&width=400",
    gallery: [
      "/placeholder.svg?height=500&width=400",
      "/placeholder.svg?height=500&width=400",
      "/placeholder.svg?height=500&width=400",
    ],
    tags: ["Python", "Machine Learning", "VS Code Extension"],
    techStack: ["Python", "TensorFlow", "TypeScript", "VS Code API"],
    social: {
      github: "https://github.com/username/ai-code-assistant",
      telegram: "https://t.me/aicodeassistant",
      twitter: "https://twitter.com/aicodeassistant",
      linkedin: "https://linkedin.com/in/username",
    },
  },
  {
    id: "5",
    title: "CryptoTrack",
    description: "Track your cryptocurrency portfolio with real-time price updates, alerts, and performance analytics.",
    image: "/placeholder.svg?height=500&width=400",
    tags: ["React", "Node.js", "Crypto API"],
    techStack: ["React", "Node.js", "CoinGecko API", "Chart.js"],
    social: {
      github: "https://github.com/username/cryptotrack",
      telegram: "https://t.me/cryptotrack",
    },
  },
  {
    id: "6",
    title: "Weather App",
    description:
      "A beautiful and interactive weather app with 7-day forecasts, real-time alerts, and location-based recommendations.",
    image: "/placeholder.svg?height=500&width=400",
    tags: ["Vue.js", "OpenWeather API"],
    techStack: ["Vue.js", "Axios", "OpenWeather API", "Geolocation API"],
    social: {
      github: "https://github.com/username/weather-app",
      telegram: "https://t.me/weatherapp",
    },
  },
  {
    id: "7",
    title: "Task Planner",
    description: "An intuitive task planner with smart scheduling, recurring tasks, and productivity analytics.",
    image: "/placeholder.svg?height=500&width=400",
    tags: ["React", "Firebase", "PWA"],
    techStack: ["React", "Firebase", "Progressive Web App", "LocalStorage"],
    social: {
      github: "https://github.com/username/task-planner",
      telegram: "https://t.me/taskplanner",
    },
  },
  {
    id: "8",
    title: "Recipe Finder",
    description: "Discover recipes based on ingredients you have, dietary restrictions, and cooking time.",
    image: "/placeholder.svg?height=500&width=400",
    tags: ["JavaScript", "Food API", "Responsive"],
    techStack: ["JavaScript", "HTML5", "CSS3", "Spoonacular API"],
    social: {
      github: "https://github.com/username/recipe-finder",
      telegram: "https://t.me/recipefinder",
    },
  },
  {
    id: "9",
    title: "Budget Tracker",
    description:
      "Keep track of your expenses, set budgets, and visualize your spending habits with interactive charts.",
    image: "/placeholder.svg?height=500&width=400",
    tags: ["Angular", "MongoDB", "Express"],
    techStack: ["Angular", "MongoDB", "Express", "Node.js", "Chart.js"],
    social: {
      github: "https://github.com/username/budget-tracker",
      telegram: "https://t.me/budgettracker",
    },
  },
]

