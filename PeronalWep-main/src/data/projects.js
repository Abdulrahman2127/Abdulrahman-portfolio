// Supplied screenshots are bundled by Vite for production.
import apifarmImage from "../assets/projects/apifarm.png";
import ticketflowImage from "../assets/projects/ticketflow.png";
import riwaqImage from "../assets/projects/riwaq-coffee.png";
import textImproverImage from "../assets/projects/ai-text-improver.png";
import emptrackImage from "../assets/projects/emptrack.png";

export const projects = [
  {
    id: "apifarm",
    title: { en: "ApiFarm", ar: "ApiFarm" },
    description: {
      en: "A smart agriculture platform that combines weather data and AI to help farmers discover suitable crops and make better farming decisions.",
      ar: "منصة زراعية ذكية تجمع بين بيانات الطقس والذكاء الاصطناعي لمساعدة المزارعين على اكتشاف المحاصيل المناسبة واتخاذ قرارات زراعية أفضل.",
    },
    image: apifarmImage,
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "AI API",
      "OpenWeather API",
    ],
    liveUrl: "https://apifarm-frontend.onrender.com",
    githubUrl: "https://github.com/Abdulrahman2127/apiFarm",
    featured: true,
  },
  {
    id: "ticketflow",
    title: { en: "TicketFlow", ar: "TicketFlow" },
    description: {
      en: "A full-stack IT support platform for submitting and tracking requests, with ticket, workspace, user and status management for IT teams.",
      ar: "منصة متكاملة للدعم الفني تتيح إرسال الطلبات ومتابعتها، وتمكّن فرق تقنية المعلومات من إدارة التذاكر ومساحات العمل والمستخدمين وحالات الطلبات.",
    },
    image: ticketflowImage,
    imagePosition: "left top",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    liveUrl: "https://ticketflow-frontend-8cy3.onrender.com",
    githubUrl: "https://github.com/Abdulrahman2127/TicketFlow",
    featured: true,
  },
  {
    id: "riwaq",
    title: { en: "Riwaq Coffee", ar: "رواق" },
    description: {
      en: "A responsive Arabic-first digital coffee menu with RTL support, menu categories and a clean, mobile-friendly layout suitable for QR access.",
      ar: "منيو رقمي متجاوب للكوفي بتصميم عربي عصري، يدعم RTL ويعرض أقسام المنيو والمنتجات بواجهة نظيفة ومناسبة للاستخدام عبر الجوال ورمز QR.",
    },
    image: riwaqImage,
    technologies: ["React", "Vite", "CSS", "Lucide React"],
    liveUrl: "https://coffee-menu-bazs.onrender.com",
    githubUrl: "",
  },
  {
    id: "ai-text-improver",
    title: { en: "AI Text Improver", ar: "AI Text Improver" },
    description: {
      en: "An AI-powered web application that improves and refines user-provided text into clearer, more polished writing.",
      ar: "تطبيق ويب مدعوم بالذكاء الاصطناعي لتحسين وصقل النصوص التي يدخلها المستخدم وتحويلها إلى صياغة أوضح وأكثر احترافية.",
    },
    image: textImproverImage,
    technologies: ["React", "TypeScript", "Node.js", "Express", "AI API"],
    liveUrl: "https://ai-text-improver-9vh8.onrender.com",
    githubUrl: "https://github.com/Abdulrahman2127/ai-text-improver-",
  },
  {
    id: "emptrack",
    title: { en: "EmpTrack", ar: "EmpTrack" },
    description: {
      en: "A full-stack employee management system with secure authentication and CRUD operations for creating, viewing, updating and managing employee records.",
      ar: "نظام متكامل لإدارة الموظفين وتنظيم سجلاتهم، مع نظام مصادقة آمن وعمليات CRUD لإنشاء بيانات الموظفين وعرضها وتحديثها وإدارتها.",
    },
    image: emptrackImage,
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    liveUrl: "https://emptrack-1.onrender.com",
    githubUrl: "https://github.com/Abdulrahman2127/EmpTrack",
  },
];
