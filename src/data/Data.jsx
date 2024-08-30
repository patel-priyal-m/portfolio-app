export const Education_data = [
  {
    icon: "fa-solid fa-graduation-cap",
    school: "University of Windsor, Windsor, ON",
    year: "2024-Present",
    description: "Master of Applied Computing",
    marks_type: "CGPA",
    marks: "8.83",
  },
  {
    icon: "fa-solid fa-graduation-cap",
    school: "L.D. College of Engineering, India",
    year: "2016-2020",
    description: "Bachelor of Engineering in Computer Engineering",
    marks_type: "CGPA",
    marks: "8.92",
  },
  {
    icon: "fa-solid fa-school",
    school: "Nutan High School, India",
    year: "2014-2016",
    description: "High School",
    marks_type: "Percentile",
    marks: "99.23",
  },
];

export const Work_data = [
  {
    icon: "fa-solid fa-briefcase",
    company: "Accenture",
    profile: "Packaged App Development Analyst",
    year: "10/2020 - 11/2023",
    description: [
      [
        "Web Development",
        "Skills: ASP.NET, MVC, HTML, CSS, JS, Solr, Sitecore, SQL",
        "Collaborated on <b>full-stack</b> development on Client based multilingual website for petroleum products",
        "Added functionalities for backend development of <b>APIs</b>, Migration of static PDF data to Dynamic page, Algorithm implementation for <b>indexing</b>, <b>searching</b> and <b>filtering</b> of data and Frontend development of Product and Resource pages",
        "<b>Deployed</b> applications on Windows and Linux based servers using both <b>automated</b> and <b>manual</b> procedures",
        "Facilitated <b>client meetings</b>, providing key suggestions and development updates to drive project progress",
        "Collaborated in <b>Agile</b> teams, participating in sprints, stand-ups, and retrospectives to ensure timely project delivery<br/><br/>"
      ],
      [
        "Automation Development",
        "Skills: Python, Sitecore CLI, React JS (gulp), Unix",
        "Implemented <b>Automation</b> functionalities using Sitecore CLI for Sitecore data manipulation, gulp for minifications and python scripts for deployment<br/><br/>",

      ],
      [
        "Service Management",
        "Skills: ServiceNow, Sitecore, ASP.NET, SCLA, Office 365, Microsoft Power Platform",
        "<b>Authored content</b> for 4 multilingual websites",
        "Resolved <b>tickets</b> and <b>enhancement requests</b> adhering to Service Level Agreement (SLA) utilizing <b>ServiceNow</b>",
        "Crafted <b>MSR</b> and <b>log reports</b> and monitored logs using SCLA to ensure accurate tracking and reporting",
        "Participated in the development of <b>Project Proposals</b> and the preparation of <b>cost estimation reports</b>",
        "Enhanced website security by conducting <b>SAST</b> and <b>DAST</b> scans, analyzing reports, collaborating with the infrastructure team, and implementing best practices in coding to mitigate risks"
      ],
    ],
  },

];

export const Project_data = [
  {
    icon: "fa-solid fa-video",
    name: "Deep Surveillance System (Violence Detection System)",
    key_skills: "Deep Learning, LSTM, Android Studio, AWS, Redis Queue",
    description: [
      "Empowered users to upload videos, potentially containing violence, via a mobile application to a central storage system on AWS.",
      "Leveraged <b>Deep Learning</b> and <b>LSTM</b> to detect instances of violence in uploaded videos.",
      "Facilitated transfer of these videos to authoritative organizations through a <b>web application</b>, if violence is detected using <b>AWS S3</b> to web portal developed using React.",
      "Secured <b>1st position<b/> in college-wide project competition."
    ],
    website: "https://www.youtube.com/watch?v=pY210luZtMQ"
  }
  ,

  {
    icon: "fa-solid fa-dove",
    name: "Bird Migration Analysis",
    key_skills: "NASA Power, GBIF, Geo-Json, Leaflet, Regression Model",
    description: [
      "Developed a model utilizing data available on <b>NASA Power</b> and <b>GBIF</b> for analysis of temperature and bird migration pattern.",
      "Analyzed <b>time-stamped</b> data with <b>Geo-Json</b> format to <b>visualize</b> on maps using Leaflet library.",
      "Trained <b>regression model</b> to predict exact location of birds.",
      
    ],
    website: "https://github.com/patel-priyal-m/BirdMigration"
  },
  {
    icon: "fa-solid fa-shopping-cart",
    name: "Electralytics (Find best deal on e-commerce platforms)",
    key_skills: "Java, Spring-boot, Selenium, JSoup",
    description: [
      "Created a web <b>scraper</b> to fetch data from major e-commerce platforms.",
      "Demonstrated usage of various algorithms like <b>HashMap, LinkedList, Tree Map, Red-Black Tree</b> for creating functionalities like Page Ranking, Word Completion, Inverted Indexing, Pattern Matching, Spell checker etc."
    ],
    website: "https://github.com/patel-priyal-m/Electralytics/tree/main"
  },
  {
    icon: "fa-solid fa-disease",
    name: "Parkinson's Disease Detection",
    key_skills: "K-Means, Random Forest, KNN, Linear Regression, SVM",
    description: [
      "Utilized <b>sleep efficiency data</b> from Kaggle.com to categorize individuals into those with Parkinson's and healthy individuals.",
      "Used a non-invasive method (machine learning model) for early detection of Parkinson's disease.",
      "Performed <b>K-means</b> clustering to create a labeled dataset which is used for training various ML models."
    ],
    website: "https://github.com/patel-priyal-m/parkinsons-disease-detection"
  },
  {
    icon: "fa-solid fa-face-smile",
    name: "Twitter Based Sentiment Analysis",
    key_skills: "Machine Learning, Python",
    description: [
      "Performed certain pre-processing methods for cleaning the <b>Twitter dataset</b>.",
      "Tested the accuracy on classifiers (SVM, Naive Bayes, Decision Tree, Random Forest, KNN)."
    ],
    website: ""
  },
  {
    icon: "fa-solid fa-blog",
    name: "Blogpost Application",
    key_skills: "Flask, Django, CRUD Operations",
    description: [
      "Developed a full-stack blog platform integrating <b>Flask</b> for API management and <b>Django</b> for content administration.",
      "Implemented seamless <b>CRUD</b> operations for posts, leveraging Django’s admin interface and Flask's RESTful services."
    ],
    website: ""
  },
  {
    icon: "fa-solid fa-school-circle-check",
    name: "Face Recognition Based Attendance Application",
    key_skills: "Java, Android Studio, Firebase",
    description: [
      "This application consists of 2 steps: <b>QR scanning</b> and <b>Face Recognition</b>.",
      "Based on the QR code shown by faculty, a student can scan the QR which opens the camera through which a student's face is recognized and attendance is marked."
    ],
    website: ""
  },
  {
    icon: "fa-solid fa-lock",
    name: "AppLock Android Application",
    key_skills: "Java, Android Studio",
    description: [
      "This application consists of 2 functions: Locking application manually and Locking an application after a certain time of usage.",
      "User can lock an application with a password directly or in a timed manner to revoke access of using certain applications."
    ],
    website: "https://github.com/patel-priyal-m/applock"
  },


];

export const Skills_data = [
  {
    skill: "C"
  },
  {
    skill: "C++"
  },
  {
    skill: "C#"
  },
  {
    skill: "Java"
  },
  {
    skill: "Python"
  },
  {
    skill: "R"
  },
  {
    skill: "JavaScript"
  },
  {
    skill: "MySQL"
  },
  {
    skill: "MongoDB"
  },
  {
    skill: "HTML"
  },
  {
    skill: "CSS"
  },
  {
    skill: "JS"
  },
  {
    skill: "jQuery"
  },
  {
    skill: "Bootstrap"
  },
  {
    skill: "React"
  },
  {
    skill: "ASP.net"
  },
  {
    skill: "MVC"
  },
  {
    skill: "Flask"
  },
  {
    skill: "Spring Boot"
  },
  {
    skill: "Flutter (Dart)"
  },
  {
    skill: "Android Studio (Java)"
  },
  {
    skill: "Sitecore"
  },
  {
    skill: "SOLR"
  },
  {
    skill: "Git"
  },
  {
    skill: "Postman"
  },
  {
    skill: "OpenCV"
  },
  {
    skill: "PyCharm"
  },
  {
    skill: "Android Studio"
  },
  {
    skill: "Eclipse"
  },
  {
    skill: "IntelliJ"
  },
  {
    skill: "Visual Studio"
  },
  {
    skill: "SCLA"
  },
  {
    skill: "SSMS"
  },
  {
    skill: "MS PowerApps"
  },
  {
    skill: "Google Colab"
  },
  {
    skill: "Microsoft Azure"
  },
  {
    skill: "Unix (Ubuntu, Debian)"
  }

];
