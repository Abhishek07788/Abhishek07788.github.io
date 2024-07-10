export const data = {
  // --- Home --
  universal: {
    color: "#fe9119",
    // color: "#dc3545",
  },
  profile: {
    first_name: "Abhishek",
    meddle_name: "Pratap",
    last_name: "Solanki",
    full_name: "Abhishek Pratap Solanki",
    profile_image: "./assets/profile_pic.png",
    designation: "Full Stack Developer",
    company_name: "Digited Labs Private Limited, Hyderabad",
    date_of_joining: "01 May 2023",
    date_of_left: "31 May 2024",
    date_of_IT: "01-04-2022",
    mobile: "9758207006",
    email: "abhisheksolanki1020.gmail.com",
    github_username: "Abhishek07788",
    linkedin_handle: "http://www.linkedin.com/in/abhishekpratapsolanki",
    github_handle: "https://github.com/Abhishek07788",
    website: "https://abhishek07788.github.io/",
    resume: "./assets/Abhishek-Pratap-Solanki-Resume.pdf",
    resume_url:
      "https://drive.google.com/file/d/11cBo69VOoq3wcwtPFDMv0t6R7MeHgrB8/view?usp=sharing",
    email_img: "./assets/emailimg.png",
    profile_img_bg: "./assets/yellowBrushImg.png",
    stop_form: false,

    social_icons: [
      {
        link: "http://www.linkedin.com/in/abhishekpratapsolanki",
        name: "LinkeDin",
        type: "linkedin",
        color: "#0a66c2",
        icon: "",
      },
      {
        link: "https://github.com/Abhishek07788",
        name: "GitHub",
        type: "github",
        color: "#3f3d55",
        icon: "",
      },
      {
        link: "mailto:abhisheksolanki1020@gmail.com",
        name: "Email",
        type: "email",
        color: "#f04244",
        icon: "",
      },
      {
        link: "tel:+919758207006",
        name: "Phone or WhatsApp",
        type: "phone",
        color: "#4db946",
        icon: "",
      },
    ],
  },

  logo_img: {
    hii_logo: "./assets/hii_gif.gif",
  },

  // ---- About me --
  about_me: {
    image: "./assets/AboutImg.gif",
    contents: [
      {
        content:
          "Hello, my name is Abhishek Pratap Solanki, I am a Full Stack Developer at DigitEd Labs Private limited, Hyderabad.",
      },
      {
        content: `Quick learner and having ${getTotalExperience(
          "01-04-2022"
        )}+ Years of experience in full-stack web development with core knowledge of MERN stack technology.`,
      },
      {
        content:
          "Hands on experience in building React Web and Android App. Works efficiently both in frontend as well as backend and is proficient in Data Structure and Algorithms.",
      },
      {
        content:
          "Worked on 5+ company projects and have built 15+ major projects on my own. I have learned a great deal about teamwork, leadership, and communication. After years of rigorous experience, here I am, looking for an opportunity as a Full Stack web developer or Frontend developer.",
      },
    ],
  },

  // --- Projects --
  projects: [
    {
      image: "./assets/BeautyHub.gif",
      name: "BeautyHub",
      description:
        "BeautyHub is an online retailer that sells premium beauty, clinical skincare,and luxury spa products. On this website, I have built the Navbar, Signup, and login functionalities. I have also handled the entire backend for signup and log-in by using JWT.",
      is_group_project: true,
      collaborators: 5,
      duration: "05 Days",
      tech_stacks:
        "ReactJS | CSS | JavaScript | Chakra UI | NODEJS | EXPRESS | MONGODB | JWT",
      github: "https://github.com/Sagarsandbhor17/Beautyhub",
      video_watch_on: "Google Drive",
      is_github_private: false,
      video: "",
      // video:
      //   "https://drive.google.com/file/d/1f1TdXvjqz58Ndki73CsjqVV0vgNA8SQT/view?usp=sharing",
      deploy_link: "https://beautyhubproject.netlify.app/",
      deployed_on: "Netlify",
    },
    {
      image: "./assets/Bitrix24.gif",
      name: "Bitrix24 - Clone",
      description:
        "This is a clone of Bitrix24 website. From Homepage, Login&SignUp to Feeds-Update, Tasks Adding-Deleting-Changing Status, Calendar Todo-Adding-Deleting. We have cloned every functionalities. In this project my part was 'FEED' Page.",
      is_group_project: true,
      collaborators: 5,
      duration: "05 Days",
      tech_stacks:
        "ReactJS | CSS | JavaScript | Chakra UI | NODEJS | EXPRESS | MONGODB",
      github: "https://github.com/amitchouhan948/possible-temper-2642",
      video_watch_on: "Google Drive",
      is_github_private: false,
      video: "",
      // video:
      //   "https://drive.google.com/file/d/1GM3cAQ-ztVqKW6MdbhrCQJoL_Sv9h7dN/view?usp=sharing",
      deploy_link: "https://bitrix24in.netlify.app/",
      deployed_on: "Netlify",
    },
    {
      image: "./assets/lystClone.gif",
      name: "LYST - Clone",
      description:
        "This website is a clone of 'lyst.com'. Lyst is a global fashion search platform. I have cloned it individually, and this project is fully responsive.",
      is_group_project: false,
      collaborators: null,
      duration: "04 Days",
      tech_stacks: "ReactJS | CSS | JavaScript | Json Server | Chakra UI",
      github:
        "https://github.com/Abhishek07788/impartial-honey-6054/tree/main/lyst.com",
      is_github_private: false,
      video_watch_on: "LinkeDin",
      video: "",
      // video:
      //   "https://www.linkedin.com/posts/abhishekpratapsolanki_project-lyst-react-activity-6970317062455848960-TnLX?utm_source=share&utm_medium=member_desktop",
      deploy_link: "https://cute-souffle-8b7dcd.netlify.app/",
      deployed_on: "Netlify",
    },
    {
      image: "./assets/portfolio.gif",
      name: "My Portfolio",
      description:
        "This is my fully responsive portfolio, which I recently made using React & Chakra UI. This website has Dark mode, scrolling functionality, etc.",
      is_group_project: false,
      collaborators: null,
      duration: "04 Days",
      tech_stacks: "ReactJS | CSS | JavaScript | Chakra UI | AOS Animation",
      github: "https://github.com/Abhishek07788/Abhishek-Portfolio",
      is_github_private: true,
      video_watch_on: "Google Drive",
      video: "",
      // video:
      //   "https://drive.google.com/file/d/1QwJVeoJ4oPI1SZcC60JrgzbNMwmPBnjC/view?usp=sharing",
      deploy_link: "https://abhishek07788.github.io/",
      deployed_on: "GitHub",
    },
    {
      image: "./assets/animotoClone.gif",
      name: "Animoto - Clone",
      description:
        "This website is a clone of 'Animoto.com,' where users can edit and make new videos. This website has lots of templates for making different videos. In this team project, I created the navbar and footer parts. In the create option, I have built 9 Different pages.",
      is_group_project: true,
      collaborators: 5,
      duration: "05 Days",
      tech_stacks: "HTML | CSS | JavaScript | Json Server",
      github: "https://github.com/rohan209547mourya/deeply-tub-2367",
      video_watch_on: "Google Drive",
      is_github_private: false,
      video: "",
      // video:
      //   "https://drive.google.com/file/d/1NBMMAl62B0tKTbssrkckqv4ycGUz5bmx/view?usp=sharing",
      deploy_link: "https://bright-sopapillas-48eab1.netlify.app/html/business",
      deployed_on: "Netlify",
    },
    {
      image: "./assets/cosheduleClone.gif",
      name: "Coschedule - Clone",
      description:
        "This website is a clone of 'coschedule.com'. CoSchedule Marketing Suite is a family of agile marketing products that help you coordinate your process, projects, and teams. In this team project, I created the navbar, Home page, footer part and Headline page.",
      is_group_project: true,
      collaborators: 4,
      duration: "05 Days",
      tech_stacks: "HTML | CSS | JavaScript",
      github: "https://github.com/Abhishek07788/CoShedule-Website-Project-",
      video_watch_on: "Google Drive",
      is_github_private: false,
      video: "",
      // video:
      //   "https://drive.google.com/file/d/1aZrzo1eFi9F2us2oqO7jp4QnQj7jfcB-/view?usp=sharing",
      deploy_link: "https://bejewelled-lebkuchen-8a5107.netlify.app/",
      deployed_on: "Netlify",
    },
    {
      image: "./assets/chat-app.gif",
      name: "Live Chat App",
      description:
        "The Live Chat App enables one-on-one conversations with blocking features for user control. It showcases live typing status and Online status, enhancing real-time interaction and communication privacy.",
      is_group_project: false,
      collaborators: 0,
      duration: "09 Days",
      tech_stacks:
        "NextJS | TypeScript | Material UI | axios | socket-io-client | JavaScript | socket.io | NODEJS | EXPRESS | MONGODB | JWT",
      github: "https://github.com/Abhishek07788/live-chat-app",
      video_watch_on: "Video is not Available",
      is_github_private: false,
      video: "",
      deploy_link: "",
      deployed_on: "(Link is not Available)",
    },
    {
      image: "./assets/music_player.png",
      name: "Music Player",
      description:
        "Developed a music player application in one day, featuring a drag-and-drop music list, play, pause, next, previous controls, and a sliding progress bar for seamless user experience.",
      is_group_project: false,
      collaborators: 0,
      duration: "01 Day",
      tech_stacks:
        "React | Javascript | CSS | Material UI | Audio | React-Beautiful-Dnd",
      github: "https://github.com/Abhishek07788/music-player",
      video_watch_on: "Video is not Available",
      is_github_private: false,
      video: "",
      deploy_link: "https://my-dream-music.netlify.app/",
      deployed_on: "Netlify",
    },
  ],

  // --- GitHub overView --
  github: {
    github_stats: [
      {
        name: "stat",
        light_theme_link:
          "https://github-readme-stats.vercel.app/api?username=abhishek07788&show_icons=true&locale=en&theme=tokyonight",
        dark_theme_link:
          "https://github-readme-stats.vercel.app/api?username=abhishek07788&show_icons=true&locale=en&layout=compact&theme=flag-india",
      },
      {
        name: "streak",
        light_theme_link:
          "https://github-readme-streak-stats.herokuapp.com/?user=abhishek07788&show_icons=true&locale=en&theme=tokyonight",
        dark_theme_link:
          "https://github-readme-streak-stats.herokuapp.com/?user=abhishek07788&show_icons=true&locale=en&",
      },
      {
        name: "languages",
        light_theme_link:
          "https://github-readme-stats.vercel.app/api/top-langs?username=abhishek07788&show_icons=true&locale=en&layout=compact&theme=tokyonight  ",
        dark_theme_link:
          "https://github-readme-stats.vercel.app/api/top-langs?username=abhishek07788&show_icons=true&locale=en&layout=compact&theme=flag-india",
      },
    ],
    stats: [
      {
        number: getTotalExperience("01-04-2022") + "y",
        title: "Total",
        subTitle: "Experience",
      },

      {
        number: 20,
        title: "Projects",
        subTitle: "Done",
      },
      {
        number: 5,
        title: "Projects",
        subTitle: "Company",
      },
      {
        number: 500,
        title: "DSA",
        subTitle: "Solved (OJ)",
      },
    ],
  },

  // --- Skills --
  skills: [
    {
      name: "HTML",
      image: "./assets/html.svg",
    },
    {
      name: "CSS",
      image: "./assets/css.svg",
    },
    {
      name: "JavaScript",
      image: "./assets/javascript.svg",
    },
    {
      name: "TypeScript",
      image: "./assets/typescript.png",
    },
    {
      name: "React JS",
      image: "./assets/react.svg",
    },
    {
      name: "React Native",
      image: "./assets/reactnative.png",
    },
    {
      name: "Expo",
      image: "./assets/expo.png",
    },
    {
      name: "Next JS",
      image: "./assets/nextjs.png",
    },
    {
      name: "Redux",
      image: "./assets/redux.svg",
    },
    {
      name: "Chakra UI",
      image: "./assets/chakraui.png",
    },
    {
      name: "Material UI",
      image: "./assets/materialui.svg",
    },
    {
      name: "Express",
      image: "./assets/express.svg",
    },
    {
      name: "Node JS",
      image: "./assets/nodejs.svg",
    },
    {
      name: "Mongo DB",
      image: "./assets/mongodb.svg",
    },
    {
      name: "Git",
      image: "./assets/git.svg",
    },
    {
      name: "Yarn",
      image: "./assets/yarn.png",
    },
    {
      name: "NPM",
      image: "./assets/npm.svg",
    },
    {
      name: "Post Man",
      image: "./assets/postman.png",
    },
  ],
};

export function getTotalExperience(inputDate) {
  // Split the inputDate by "-" and construct a new Date object
  let [day, month, year] = inputDate.split("-");
  let inputDateObj = new Date(`${year}-${month}-${day}`);
  let currentDate = new Date();

  let yearsDifference = currentDate.getFullYear() - inputDateObj.getFullYear();
  let currentMonth = currentDate.getMonth() + 1;
  let inputMonth = inputDateObj.getMonth();
  let monthsDifference = currentMonth - inputMonth;
  let daysDifference = currentDate.getDate() - inputDateObj.getDate();

  // Adjust years difference based on months and days
  if (monthsDifference < 0 || (monthsDifference === 0 && daysDifference < 0)) {
    yearsDifference--;
    monthsDifference += 12; // Add 12 months to monthsDifference
  }

  let totalYears =
    yearsDifference + monthsDifference / 12 + daysDifference / 365;

  // Check if totalYears is less than 1.0
  if (totalYears < 1.0) {
    let totalMonths = yearsDifference * 12 + monthsDifference;
    return `${totalMonths}+ Months`;
  } else {
    // Check if totalYears is a whole number
    if (Number.isInteger(totalYears)) {
      return `${totalYears}`;
    } else {
      return `${totalYears.toFixed(1)}`;
    }
  }
}
