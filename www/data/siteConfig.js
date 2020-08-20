module.exports = {
  siteTitle: `Hello`,
  siteDescription: `This web site is about oinume, Kazuhiro Oinuma`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Kazuhiro Oinuma',
  twitterUsername: 'oinume',
  githubUsername: 'oinume',
  authorAvatar: '/images/avatar-oinume.png',
  authorDescription: `Developer, passionate about what I do. Always interested in how the sites were made, I started to study HTML by hobby. <br />
    In 2012 I started working as a support technician and I approached the developers.
    In 2015, I started to study C # and started to contribute with the team giving maintenance in an application in C # and .NET. <br />
    I currently work as a frontend developer and mainly work with <strong>Javascript, NodeJS e React.</strong>`,
  skills: [
    {
      name: 'Go',
      level: 80
    },
    {
      name: 'Python',
      level: 50
    },
    {
      name: 'Java',
      level: 50
    },
    {
      name: 'Google Cloud Platform',
      level: 70
    },
    {
      name: 'MySQL',
      level: 70
    },
    {
      name: 'React',
      level: 20
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "Mercari",
      begin: {
        month: 'may',
        year: '2016'
      },
      duration: null,
      occupation: "Backend engineer",
      description: "TBD"
    },
    {
      company: "CyberAgent",
      begin: {
        month: 'mar',
        year: '2010'
      },
      duration: '6 years and 1 month',
      occupation: "Backend and DevOps engineer",
      description: 'TBD'
    },
    {
      company: 'Mixi',
      begin: {
        month: 'aug',
        year: '2005'
      },
      duration: '4 years and 5 months',
      occupation: "Backend engineer",
      description: "TBD"
    },
    {
      company: "NetCentury",
      begin: {
        month: 'apr',
        year: '2001'
      },
      duration: '3 years and 3 month',
      occupation: "Backend engineer",
      description: "TBD"
    },
  ],
  portfolio: [
    {
      image: "/images/gatsby-starter-cv.png",
      description: "Gatsby starter CV template",
      url: "https://www.gatsbyjs.org/starters/santosfrancisco/gatsby-starter-cv/"
    },
    {
      image: "/images/awesome-grid.png",
      description: "Responsive grid for ReactJS",
      url: "https://github.com/santosfrancisco/react-awesome-styled-grid"
    },
    /* more portifolio items here */
  ],
  social: {
    twitter: "https://twitter.com/oinume",
    linkedin: "https://www.linkedin.com/in/oinume",
    github: "https://github.com/oinume",
    email: "oinume@gmail.com"
  },
  siteUrl: 'https://santosfrancisco.github.io/gatsbystarter-cv',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover-oinume.jpg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: false, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Blog(EN)',
      url: 'https://journal.lampetty.net/archive/category/in%20English',
    },
    {
      label: 'Blog(JA)',
      url: 'https://journal.lampetty.net/',
    }
  ]
}