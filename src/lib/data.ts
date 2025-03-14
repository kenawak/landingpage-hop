import type { Project } from "./types"

// Sample featured projects
export const featuredProjects: Project[] = [
  {
    id: "1",
    title: "3D Apple Website",
    description: "I created a cool 3D website using GSAP and Three.js I made every component dynamic and I used react with typeScript to make it unique and added a cool loading page to make it even cooler",
    image: "/placeholder.svg?height=500&width=400",
    tags: ["React", "TypeScript", "Bot API"],
    social: {
      github: "https://github.com/roobiwebdev/3D-iPhone-Website",
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
  {
    id: "12",
    title: "Linksy",
    description: "A link/bookmark sharing platform.",
    image: "/path/to/image.jpg",  // Replace with actual image path
    tags: ["Platform", "Bookmark", "Sharing"],
    social: {
      github: "https://github.com/username/linksy",
      telegram: "https://t.me/linksy",
      linkedin: "https://linkedin.com/in/username",
      twitter: "https://twitter.com/username",
    }
  },
]

// Sample projects data for explore section
export const projectsData: Project[] = [
  ...featuredProjects,
  {
    id: "10",
    title: "SummarizeTube",
    description: "A Chrome extension that summarizes YouTube videos using Gemini AI.",
    image: "/path/to/image.jpg",  // Replace with actual image path
    tags: ["Chrome Extension", "AI", "YouTube"],
    social: {
      github: "https://github.com/yoni-tad/SummarizeTube",
      telegram: "http://t.me/yonitad0",
      twitter: "https://twitter.com/@Yoni__tad",
      linkedin: "https://www.linkedin.com/in/yoni-tad/"
    }
  },
  {
    id: "11",
    title: "Tip Calculator",
    description: "A responsive and interactive Tip Calculator Web application using HTML, CSS, and JavaScript.",
    image: "/path/to/image.jpg",  // Replace with actual image path
    tags: ["HTML", "CSS", "JavaScript"],
    social: {
      telegram: "https://t.me/telegramBotUI",
      twitter: "https://twitter.com/username",
    }
  },
  {
    id: "12",
    title: "Linksy",
    description: "A link/bookmark sharing platform.",
    image: "/path/to/image.jpg",  // Replace with actual image path
    tags: ["Platform", "Bookmark", "Sharing"],
    social: {
      github: "https://github.com/username/linksy",
      telegram: "https://t.me/linksy",
      linkedin: "https://linkedin.com/in/username",
      twitter: "https://twitter.com/username",
    }
  },
  {
    id: "13",
    title: "Conference Ticket Generator",
    description: "A small project that generates conference tickets using HTML, CSS, and JavaScript.",
    image: "https://res.cloudinary.com/dfonae1gu/image/upload/v1741909433/photo_4_18-01-2025_09-21-09_thumb_mwrdgt.jpg",  // Replace with actual image path
    tags: ["HTML", "CSS", "JavaScript"],
    social: {
      website: "https://conference-tickets.com",
      telegram: "https://t.me/conference",
      linkedin: "https://linkedin.com/in/username",
      twitter: "https://twitter.com/username",
    }
  },
  {
    id: "14",
    title: "Redat",
    description: "A site to help you figure out where to take the taxi you need and how much it might cost.",
    image: "https://res.cloudinary.com/dfonae1gu/image/upload/v1741909508/photo_5_18-01-2025_09-28-22_glqo5b.jpg",  // Replace with actual image path
    tags: ["Next.js", "TypeScript", "Shadcn UI", "Go"],
    social: {
      github: "https://github.com/username/redat",
      telegram: "https://t.me/redat",
      linkedin: "https://linkedin.com/in/username",
      twitter: "https://twitter.com/username",
    }
  },
  {
    id: "15",
    title: "Chat Illustration App",
    description: "A mobile chat appearance app using HTML and CSS for styling and responsiveness.",
    image: "https://res.cloudinary.com/dfonae1gu/image/upload/v1741909546/photo_6_22-01-2025_16-22-32_pl6191.jpg",  // Replace with actual image path
    tags: ["HTML", "CSS"],
    social: {
      github: "https://github.com/username/chat-illustration",
      website: "https://chat-illustration.com",
      telegram: "https://t.me/chatillustration",
      twitter: "https://twitter.com/username",
    }
  },
  {
    id: "16",
    title: "Course Progress Tracker",
    description: "A tool for students and educators to keep track of assignments and progress in real-time.",
    image: "https://res.cloudinary.com/dfonae1gu/image/upload/v1741909553/photo_7_22-01-2025_17-00-57_trbdma.jpg",  // Replace with actual image path
    tags: ["Tailwind CSS", "PHP", "MySQLi"],
    social: {
      telegram: "https://t.me/courseprogress",
      linkedin: "https://linkedin.com/in/username",
      twitter: "https://twitter.com/username",
    }
  },
  {
    id: "17",
    title: "Find Movies App",
    description: "An app to find the latest trending movies with real-time data fetching from TMDB.",
    image: "/path/to/image.jpg",  // Replace with actual image path
    tags: ["TMDB", "Appwrite", "Dynamic State Management"],
    social: {
      github: "https://github.com/username/find-movies",
      website: "https://find-movies.com",
      telegram: "https://t.me/findmovies",
      twitter: "https://twitter.com/username",
    }
  },
  {
    id: "18",
    title: "Github Profile Finder",
    description: "A tool to fetch and display detailed info about GitHub profiles using React and TypeScript.",
    image: "https://res.cloudinary.com/dfonae1gu/image/upload/v1741909617/photo_9_29-01-2025_08-12-26_sdadnt.jpg",  // Replace with actual image path
    tags: ["React", "TypeScript", "GitHub API"],
    social: {
      github: "https://github.com/username/github-profile-finder",
      website: "https://github-profile-finder.com",
      telegram: "https://t.me/githubprofilefinder",
      twitter: "https://twitter.com/username",
    }
  },
  {
    id: "19",
    title: "Dictionary App",
    description: "A dictionary app using TypeScript to fetch word meanings from the Free Dictionary API.",
    image: "/path/to/image.jpg",  // Replace with actual image path
    tags: ["TypeScript", "Free Dictionary API"],
    social: {
      github: "https://github.com/username/dictionary-app",
      website: "https://dictionary-app.com",
      telegram: "https://t.me/dictionaryapp",
      twitter: "https://twitter.com/username",
    }
  },
  {
    id: "20",
    title: "Pomodoro App",
    description: "A fully customizable pomodoro app using TypeScript.",
    image: "https://res.cloudinary.com/dfonae1gu/video/upload/v1741909881/application_tuqjt0.mp4",  // Replace with actual image path
    tags: ["TypeScript", "Pomodoro"],
    social: {
      github: "https://github.com/username/pomodoro-app",
      website: "https://pomodoro-app.com",
      telegram: "https://t.me/pomodoroapp",
      twitter: "https://twitter.com/username",
    }
  },
  {
    id: "21",
    title: "TeleInsight",
    description: "A telegram chat analysis bot.",
    image: "/path/to/image.jpg",  // Replace with actual image path
    tags: ["Telegram", "Chat Analysis"],
    social: {
      github: "https://github.com/username/teleinsight",
      website: "https://teleinsight.com",
      telegram: "https://t.me/teleinsight",
      linkedin: "https://linkedin.com/in/username",
      twitter: "https://twitter.com/username",
    }
  },
  {
    id: "22",
    title: "Bible Verse Website",
    description: "A web app to provide relevant Bible verses and topics related to specific themes.",
    image: "https://res.cloudinary.com/dfonae1gu/image/upload/v1741909656/photo_10_08-02-2025_12-35-13_bdbql7.jpg",  // Replace with actual image path
    tags: ["Bible", "Web App"],
    social: {
      github: "https://github.com/username/bible-verse",
      website: "https://bible-verse.com",
      telegram: "https://t.me/bibleverse",
      twitter: "https://twitter.com/username",
    }
  },
  {
    id: "23",
    title: "CGPA Pro",
    description: "A Telegram bot that helps university students calculate their GPA and CGPA.",
    image: "https://res.cloudinary.com/dfonae1gu/video/upload/v1741909668/application_1_oiisiw.mp4",  // Replace with actual image path
    tags: ["Telegram Bot", "GPA", "CGPA"],
    social: {
      github: "https://github.com/username/cgpa-pro",
      website: "https://cgpa-pro.com",
      telegram: "https://t.me/cgpa_pro_bot",
      linkedin: "https://linkedin.com/in/username",
      twitter: "https://twitter.com/username",
    }
  },
  {
    id: "24",
    title: "FastDrop",
    description: "A simple file-sharing tool built with Node.js, Express, MongoDB, Multer, and TailwindCSS.",
    image: "/path/to/image.jpg",  // Replace with actual image path
    tags: ["Node.js", "Express", "MongoDB", "File Sharing"],
    social: {
      github: "https://github.com/username/fastdrop",
      website: "https://fastdrop.yoni-tad.com",
      telegram: "https://t.me/fastdrop",
      linkedin: "https://linkedin.com/in/username",
      twitter: "https://twitter.com/username",
    }
  },
  {
    id: "25",
    title: "Sumz AI",
    description: "An AI-powered article summarizer that generates quick summaries of articles.",
    image: "https://res.cloudinary.com/dfonae1gu/video/upload/v1741909790/application_2_gnupzg.mp4",  // Replace with actual image path
    tags: ["AI", "Article Summarizer"],
    social: {
      github: "https://github.com/username/sumz-ai",
      website: "https://sumz-ai.com",
      telegram: "https://t.me/sumzai",
      twitter: "https://twitter.com/username",
    }
  },
  {
    id: "26",
    title: "Ye Elm Kazna",
    description: "A powerful web app designed to be your ultimate Islamic educational resource.",
    image: "/path/to/image.jpg",  // Replace with actual image path
    tags: ["Islamic", "Educational Resource"],
    social: {
      github: "https://github.com/username/ye-elm-kazna",
      website: "https://ye-elm-kazna.com",
      telegram: "https://t.me/yeelmkazna",
      linkedin: "https://linkedin.com/in/username",
      twitter: "https://twitter.com/username",
    }
  },
  {
    id: "27",
    title: "Airpod Landing Page",
    description: "A fully responsive landing page developed during an internship.",
    image: "https://res.cloudinary.com/dfonae1gu/image/upload/v1741909721/photo_12_24-02-2025_21-32-35_g68g3p.jpg",  // Replace with actual image path
    tags: ["Responsive", "Landing Page"],
    social: {
      github: "https://github.com/username/airpod-landing",
      website: "https://airpod-landing.com",
      telegram: "https://t.me/airpodlanding",
      linkedin: "https://linkedin.com/in/username",
      twitter: "https://twitter.com/username",
    }
  },
  {
    id: "28",
    title: "Stop Watch",
    description: "A stopwatch that allows users to start, stop, and reset the timer.",
    image: "https://res.cloudinary.com/dfonae1gu/image/upload/v1741909782/photo_13_24-02-2025_21-37-43_q9cphp.jpg",  // Replace with actual image path
    tags: ["HTML", "CSS", "JavaScript"],
    social: {
      github: "https://github.com/username/stopwatch",
      website: "https://stopwatch.com",
      telegram: "https://t.me/stopwatch",
      linkedin: "https://linkedin.com/in/username",
      twitter: "https://twitter.com/username",
    }
  },
  {
    id: "29",
    title: "Contact Form",
    description: "A contact form for users to fill out and submit.",
    image: "/path/to/image.jpg",  // Replace with actual image path
    tags: ["Contact Form", "Web"],
    social: {
      github: "https://github.com/emmadumbi/contact-form-main",
      website: "https://contact-form-maiin.netlify.app",
      telegram: "http://t.me/Emmy_D",
      linkedin: "https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav",
      twitter: "https://twitter.com/@emmy_dev",
    }
  },
]

