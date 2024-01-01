import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  nextjs,
  tailwind,
  nodejs,
  expressjs,
  mongodb,
  interns,
  upwork,
  nextalgo,
  weathersnap,
  linearvision,
  palmflow,
  mintify,
  hairday,
  threejs,
  mitch,
  kevin,
  tracy,
} from "../src/assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Back-end Developer",
    icon: backend,
  },
  {
    title: "Tutor & Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Front-end Developer",
    company_name: "Interns Pakistan",
    icon: interns,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Dec 2022",
    points: [
      "Developed and maintained web applications using React.js and other related technologies.",
      "Translated UI/UX design wireframes into code, ensuring that the final product matched the design aesthetic.",
      "Delivered responsive websites that are compatible with multiple browsers and compliant with accessibility standards.",
      "Considered the aesthetics of the UI design throughout the development process.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#15A800",
    date: "Aug 2022 - Present",
    points: [
      "Delivering projects on Full-Stack Development, utilizing my expertise in the MERN stack, ReactJS/Native, Azure, AI/ML, and Metaverse.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Providing personal tutoring in various technologies such as API's, AI & VR/AR development.",
      "Maintaining effective communication with clients to ensure their satisfaction and delivering solutions that meet their needs.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Next Algo",
    icon: nextalgo,
    iconBg: "#E6DEDD",
    date: "Apr 2023 - Present",
    points: [
      "Developing mobile applications using React Native, leveraging the power of JavaScript to create cross-platform experiences.",
      "Integrating with back-end services and APIs to fetch and display data in mobile applications.",
      "Troubleshooting and debugging issues to ensure smooth performance and user experience across different devices and platforms.",
      "Communicating effectively with clients and stakeholders to understand their requirements, provide updates, and ensure client satisfaction.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Sharjeel has been nothing short of amazing. He is prepared, proactive, and knowledgeable.",
    name: "Mitch Schneider",
    designation: "CEO",
    company: "Infinium Designs",
    image: mitch,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their client's success as Sharjeel does.",
    name: "Kevin Dunne",
    designation: "COS",
    company: "Industry Dive",
    image: kevin,
  },
  {
    testimonial:
      "After Sharjeel revamped & optimized our website, our traffic increased by 50%. Such a good experience!",
    name: "Tracy Dinh",
    designation: "CTO",
    company: "Bits",
    image: tracy,
  },
];

const projects = [
  {
    name: "Mintify",
    description:
      "Embark on the NFT revolution with Mintify: a cutting-edge React Native marketplace animated with react native reanimated.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "expo",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: mintify,
    source_code_link: "https://github.com/Sharjeel-Riaz/Mintify",
    project_link: "https://mintify-showcase.vercel.app/",
  },
  {
    name: "PaLMFlow",
    description:
      "Innovative React Native and Expo-powered app, PaLMFlow, integrates Google PaLM 2.0 API for a personalized Conversational AI experience.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: palmflow,
    source_code_link: "https://github.com/Sharjeel-Riaz/PaLMFlow",
    project_link: "https://github.com/Sharjeel-Riaz/PaLMFlow",
  },
  {
    name: "Weather Snap",
    description:
      "Web-based weather app that everages the power of OpenWeatherMap and RapidAPI to provide accurate and up-to-date weather information for any location around the world.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "framer",
        color: "pink-text-gradient",
      },
    ],
    image: weathersnap,
    source_code_link: "https://github.com/Sharjeel-Riaz/Weather-Snap",
    project_link: "https://weather-snap.vercel.app/",
  },
  {
    name: "Linear Vision",
    description:
      "Web application that enables users with the power of DALL-E 2's API integration & an image editor resulting in a sleek and minimalist user interface to edit your images creatively.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: linearvision,
    source_code_link: "https://github.com/Sharjeel-Riaz/Linear-Vision",
    project_link: "https://sharjeel-riaz.github.io/Linear-Vision/",
  },
  {
    name: "Hair Day",
    description:
      "An all-inclusive salon experience platform that empowers users to book a wide range of haircare and beauty services, and provides personalized recommendations for their unique needs.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: hairday,
    source_code_link: "https://github.com/Sharjeel-Riaz/Hair-Day-Website",
    project_link: "https://sharjeel-riaz.github.io/Hair-Day-Website/",
  },
];

export { services, technologies, experiences, testimonials, projects };
