import { Program } from '../types';

export const programs: Program[] = [
  {
    id: "prog-1",
    title: "Bachelor of Science in Computer Science",
    description: "A comprehensive program that provides a strong foundation in computer science theory, programming, and software development. Students will learn programming languages, algorithms, data structures, and software engineering principles, preparing them for careers in software development, systems analysis, and more.",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    level: "Undergraduate",
    duration: "4 years",
    credits: 120,
    departments: ["Computer Science"],
    courses: [
      {
        id: "cs101",
        code: "CS101",
        title: "Introduction to Programming",
        description: "Fundamentals of programming using Python, covering variables, control structures, functions, and basic data structures.",
        credits: 3,
        prerequisites: []
      },
      {
        id: "cs201",
        code: "CS201",
        title: "Data Structures and Algorithms",
        description: "Implementation and analysis of fundamental data structures and algorithms, including lists, stacks, queues, trees, and graphs.",
        credits: 4,
        prerequisites: ["CS101"]
      }
    ]
  },
  {
    id: "prog-2",
    title: "Bachelor of Science in Data Science",
    description: "An interdisciplinary program that combines computer science, statistics, and domain expertise to extract knowledge and insights from data. Students will learn data analysis, machine learning, statistical modeling, and data visualization, preparing them for careers in data analysis, machine learning engineering, and more.",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    level: "Undergraduate",
    duration: "4 years",
    credits: 120,
    departments: ["Computer Science", "Mathematics"],
    courses: [
      {
        id: "ds101",
        code: "DS101",
        title: "Introduction to Data Science",
        description: "Overview of data science concepts, tools, and methodologies, including data collection, cleaning, analysis, and visualization.",
        credits: 3,
        prerequisites: []
      },
      {
        id: "ds201",
        code: "DS201",
        title: "Machine Learning Fundamentals",
        description: "Introduction to machine learning algorithms, techniques, and applications, including supervised and unsupervised learning.",
        credits: 4,
        prerequisites: ["DS101", "MATH201"]
      }
    ]
  },
  {
    id: "prog-3",
    title: "Bachelor of Science in Cybersecurity",
    description: "A specialized program focused on protecting computer systems, networks, and data from security threats. Students will learn network security, cryptography, ethical hacking, and security management, preparing them for careers in cybersecurity analysis, security engineering, and more.",
    image: "https://images.pexels.com/photos/211151/pexels-photo-211151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    level: "Undergraduate",
    duration: "4 years",
    credits: 120,
    departments: ["Computer Science", "Information Security"],
    courses: [
      {
        id: "cy101",
        code: "CY101",
        title: "Introduction to Cybersecurity",
        description: "Overview of cybersecurity concepts, threats, vulnerabilities, and basic protection mechanisms.",
        credits: 3,
        prerequisites: []
      },
      {
        id: "cy201",
        code: "CY201",
        title: "Network Security",
        description: "Principles and practices of securing computer networks, including authentication, encryption, and intrusion detection.",
        credits: 4,
        prerequisites: ["CY101", "CS250"]
      }
    ]
  },
  {
    id: "prog-4",
    title: "Master of Science in Artificial Intelligence",
    description: "An advanced program focused on the theory and application of artificial intelligence. Students will study machine learning, natural language processing, computer vision, and robotics, preparing them for careers in AI research, machine learning engineering, and more.",
    image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    level: "Graduate",
    duration: "2 years",
    credits: 36,
    departments: ["Computer Science", "Artificial Intelligence"],
    courses: [
      {
        id: "ai501",
        code: "AI501",
        title: "Machine Learning",
        description: "Advanced techniques in machine learning, including deep learning, reinforcement learning, and neural networks.",
        credits: 3,
        prerequisites: []
      },
      {
        id: "ai502",
        code: "AI502",
        title: "Natural Language Processing",
        description: "Computational approaches to processing and understanding human language, including text classification, sentiment analysis, and language generation.",
        credits: 3,
        prerequisites: ["AI501"]
      }
    ]
  },
  {
    id: "prog-5",
    title: "Master of Science in Software Engineering",
    description: "A specialized program focused on software development methodologies, tools, and practices. Students will learn advanced software design, testing, project management, and quality assurance, preparing them for careers in software architecture, project management, and more.",
    image: "https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    level: "Graduate",
    duration: "2 years",
    credits: 36,
    departments: ["Software Engineering"],
    courses: [
      {
        id: "se501",
        code: "SE501",
        title: "Software Development Methodologies",
        description: "Analysis and application of various software development methodologies, including agile, scrum, and DevOps.",
        credits: 3,
        prerequisites: []
      },
      {
        id: "se502",
        code: "SE502",
        title: "Software Testing and Quality Assurance",
        description: "Techniques and tools for ensuring software quality, including unit testing, integration testing, and continuous integration.",
        credits: 3,
        prerequisites: ["SE501"]
      }
    ]
  },
  {
    id: "prog-6",
    title: "Ph.D. in Computer Science",
    description: "A research-focused doctoral program that prepares students for advanced research and leadership in computer science. Students will conduct original research in areas such as algorithms, artificial intelligence, computer systems, and theoretical computer science.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    level: "Doctorate",
    duration: "4-5 years",
    credits: 72,
    departments: ["Computer Science"],
    courses: [
      {
        id: "cs701",
        code: "CS701",
        title: "Advanced Algorithms",
        description: "In-depth study of advanced algorithmic techniques and their applications, including approximation algorithms, randomized algorithms, and online algorithms.",
        credits: 3,
        prerequisites: []
      },
      {
        id: "cs702",
        code: "CS702",
        title: "Research Methods in Computer Science",
        description: "Methods and tools for conducting research in computer science, including literature review, experimental design, and research ethics.",
        credits: 3,
        prerequisites: []
      }
    ]
  },
  {
    id: "prog-7",
    title: "Certificate in Cloud Computing",
    description: "A focused program that provides practical skills in cloud computing technologies and platforms. Students will learn cloud architecture, deployment, security, and management, preparing them for careers in cloud administration, architecture, and development.",
    image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    level: "Certificate",
    duration: "6 months",
    credits: 12,
    departments: ["Computer Science", "Information Technology"],
    courses: [
      {
        id: "cc101",
        code: "CC101",
        title: "Cloud Computing Fundamentals",
        description: "Introduction to cloud computing concepts, models, and services, including SaaS, PaaS, and IaaS.",
        credits: 3,
        prerequisites: []
      },
      {
        id: "cc102",
        code: "CC102",
        title: "Cloud Deployment and Management",
        description: "Practical skills in deploying, managing, and scaling applications on major cloud platforms.",
        credits: 3,
        prerequisites: ["CC101"]
      }
    ]
  },
  {
    id: "prog-8",
    title: "Certificate in Blockchain Technology",
    description: "A specialized program that explores the principles and applications of blockchain technology. Students will learn blockchain architecture, smart contracts, decentralized applications, and blockchain security, preparing them for careers in blockchain development, consulting, and research.",
    image: "https://images.pexels.com/photos/8919576/pexels-photo-8919576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    level: "Certificate",
    duration: "6 months",
    credits: 12,
    departments: ["Computer Science", "Blockchain Technology"],
    courses: [
      {
        id: "bt101",
        code: "BT101",
        title: "Blockchain Fundamentals",
        description: "Introduction to blockchain technology, including distributed ledgers, consensus mechanisms, and cryptographic principles.",
        credits: 3,
        prerequisites: []
      },
      {
        id: "bt102",
        code: "BT102",
        title: "Smart Contracts and Decentralized Applications",
        description: "Development of smart contracts and decentralized applications on blockchain platforms.",
        credits: 3,
        prerequisites: ["BT101"]
      }
    ]
  }
];