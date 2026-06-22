import watchHub from './assets/images/watch_hub_mockup_1782041621662.jpg';
import taskSync from './assets/images/tasksync_mockup_1782041642811.jpg';
import ebookApp from './assets/images/ebook_mockup_1782041663829.jpg';
import HMS from './assets/images/hms_mockup_1782041684978.png';

import { BookOpenCheck, GraduationCap } from 'lucide-react';

export const PERSONAL_INFO = {
  fullName: "Ahmed Hamza Rana",
  firstName: "Ahmed",
  lastName: "Hamza Rana",
  title: "Flutter Developer",
  logoText: "AHR",
  subheading:
    "Building modern mobile experiences using Flutter, Firebase, Supabase and APIs.",
  avatarPath: "/src/assets/images/ahmed_profile_avatar_1782041412201.jpg",
  contact: {
    githubLabel: "github.com/ahmedhamzarana",
    linkedinLabel: "linkedin.com/in/ahmed-hamza-rana",
    phone: "+92 312 2040276",
    email: "ahmedhamzarana000@gmail.com",
    linkedin: "https://linkedin.com/in/ahmed-hamza-rana",
    github: "https://github.com/ahmedhamzarana",
  },
  resumeUrl: "#",
};

export const ABOUT_TEXT = {
  title: "About Me",
  paragraph:
    "I am a Flutter Developer focused on building clean, scalable and real-world mobile applications. I enjoy transforming ideas into mobile products using Flutter, Firebase, Supabase and modern development practices.",
  stats: [
    { value: "8+", label: "Projects Completed" },
    { value: "4+", label: "Certifications" },
    { value: "1+", label: "Internship Experience" },
    { value: "2026", label: "ADSE Completion" },
  ],
};

/* ✅ FIXED EDUCATION TIMELINE (NO JSX HERE) */
export const EDUCATION_TIMELINE = [
  {
    year: "2024 - 2026",
    title: "Associate Diploma in Software Engineering (ADSE)",
    institute: "Aptech / Private Institute",
    desc: "Focused on Flutter, Dart, React, backend APIs, and database systems.",
    icon: GraduationCap,
    status: "Completed",
  },
  {
    year: "2023 - 2024",
    title: "Frontend & Mobile App Development",
    institute: "Self Learning / Online Courses",
    desc: "Learned Flutter, UI/UX principles, REST APIs and state management.",
    icon: BookOpenCheck,
    status: "Certified",
  },
];
  export const SKILLS_DATA = {
    mobile: [
      {
        name: 'Flutter',
        level: 'Expert',
        progress: 95,
        desc: 'Building scalable, high-performance cross-platform mobile applications.'
      },
      {
        name: 'Dart',
        level: 'Expert',
        progress: 92,
        desc: 'Writing clean, maintainable and efficient code with modern practices.'
      },
      {
        name: 'Firebase',
        level: 'Advanced',
        progress: 88,
        desc: 'Authentication, Firestore, Storage and cloud-based backend solutions.'
      },
      {
        name: 'Supabase',
        level: 'Advanced',
        progress: 85,
        desc: 'Realtime databases, authentication and PostgreSQL-powered services.'
      },
      {
        name: 'GetX',
        level: 'Advanced',
        progress: 90,
        desc: 'Efficient state management, routing and dependency injection.'
      },
      {
        name: 'Provider',
        level: 'Advanced',
        progress: 85,
        desc: 'Reactive state management with clean architecture principles.'
      }
    ],

    backend: [
      {
        name: 'ASP.NET Core',
        level: 'Advanced',
        progress: 85,
        desc: 'Developing secure and scalable REST APIs and enterprise applications.'
      },
      {
        name: 'Express.js',
        level: 'Intermediate',
        progress: 75,
        desc: 'Fast and lightweight backend development with Node.js.'
      },
      {
        name: 'REST APIs',
        level: 'Expert',
        progress: 95,
        desc: 'Designing and integrating scalable APIs for web and mobile apps.'
      },
      {
        name: 'PHP',
        level: 'Proficient',
        progress: 70,
        desc: 'Server-side development and database-driven applications.'
      }
    ],

    database: [
      {
        name: 'Firestore',
        level: 'Advanced',
        progress: 88,
        desc: 'Realtime NoSQL database design and optimization.'
      },
      {
        name: 'MongoDB',
        level: 'Intermediate',
        progress: 75,
        desc: 'Document-based database development and aggregation pipelines.'
      },
      {
        name: 'MySQL',
        level: 'Advanced',
        progress: 85,
        desc: 'Relational database design, optimization and query performance.'
      },
      {
        name: 'SQL Server',
        level: 'Advanced',
        progress: 82,
        desc: 'Enterprise-grade database management and reporting systems.'
      }
    ],

    tools: [
      {
        name: 'Git',
        level: 'Expert',
        progress: 95,
        desc: 'Version control, branching strategies and collaboration workflows.'
      },
      {
        name: 'GitHub',
        level: 'Expert',
        progress: 95,
        desc: 'Repository management, CI/CD workflows and project collaboration.'
      },
      {
        name: 'VS Code',
        level: 'Primary IDE',
        progress: 98,
        desc: 'Daily development environment with advanced productivity tools.'
      },
      {
        name: 'Visual Studio',
        level: 'Advanced',
        progress: 85,
        desc: 'Professional environment for .NET and enterprise development.'
      }
    ]
  };
  export const EXPERIENCE_TIMELINE = [
    {
      role: "Flutter Developer Intern",
      company: "DevelopersHub Corporation",
      duration: "2 Months",
      status: "Completed",
      desc: "Contributed to a real-world Flutter project, implementing new features, fixing bugs and optimizing performance under senior mentorship.",
    },
  ];

  export const PROJECTS_LIST = [
    {
      title: "Watch Hub",
      projectType: "mobile",
      category: "E-Commerce Mobile App",
      tech: ["Flutter", "Supabase", "Dart", "REST API"],
      imageSeed: watchHub,
      codeUrl: "https://github.com/ahmedhamzarana/Watch-Hub-Flutter-App",
      liveUrl: "https://watcheshubadmin.netlify.app/"
    },

    {
      title: "TaskSync",
      projectType: "mobile",
      category: "Task Management App",
      tech: ["Flutter", "Supabase", "PostgreSQL", "GetX"],
      imageSeed: taskSync,
      codeUrl: "https://github.com/ahmedhamzarana/Task-Management-App",
      liveUrl: "https://github.com/ahmedhamzarana/Task-Management-App"
    },

    {
      title: "WhatsApp Clone",
      projectType: "uiux",
      category: "Messaging App",
      tech: ["Flutter", "Material UI/UX"],
      imageSeed: ebookApp,
      codeUrl: "https://github.com/ahmedhamzarana/ebook_app",
      liveUrl: "https://github.com/ahmedhamzarana/ebook_app"
    },

    {
      title: "Hotel Booking App",
      projectType: "fullstack",
      category: "Travel & Hospitality",
      tech: ["React", "JavaScript", "Express", "MongoDB"],
      imageSeed: HMS,
      codeUrl: "https://github.com/ahmedhamzarana/HospitalityManagement",
      liveUrl: "https://github.com/ahmedhamzarana/HospitalityManagement"
    }
  ];


  export const CERT_BADGES_ROW_1 = [
    { name: "🏆 Python Fundamentals", issuer: "Guido Academy / SoloLearn" },
    { name: "✨ Front End Development", issuer: "Meta Authorized / Coursera" },
    { name: "🤖 AI for Beginners", issuer: "Microsoft Learn Certificate" },
    { name: "📊 Microsoft Office Specialist", issuer: "Microsoft Certification" },
    { name: "🎓 Advanced Software Eng. (ADSE)", issuer: "Aptech Academic" }
  ];

  export const CERT_BADGES_ROW_2 = [
    { name: "🚀 Flutter Core Architecture", issuer: "Flutter Community" },
    { name: "📦 Firebase Enterprise Cloud", issuer: "Google Developer Hub" },
    { name: "🗄️ Relational Database SQL", issuer: "Aptech Enterprise" },
    { name: "🌐 Front-End Systems", issuer: "SoloLearn Certified" },
    { name: "🛠️ VCS Git Automation", issuer: "GitHub Core Certification" }
  ];
