module.exports = {
  siteTitle: `Hello`,
  siteDescription: `This web site is about oinume, Kazuhiro Oinuma`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Kazuhiro Oinuma',
  twitterUsername: 'oinume',
  githubUsername: 'oinume',
  authorAvatar: '/images/avatar-oinume.png',
  authorDescription: `
<p>Software Engineer, with more than a decade of experience of product development. My key strengths are:</p>
<ul>
<li>Building scalable API with Go (2000+ req / sec)</li>
<li>Migrating from monolith to microservices architecture</li>
</ul>
<p>
In addition, my current role at Merpay is tech lead. I care about how to maximize my team performance. As tech lead, I did:
</p>
<ul>
<li>Decision to balance business KPI and solving technical issues.</li>
<li>Wrote many documents like coding guideline, architecture diagram and on-call document, etc.</li>
<li>A lot of code reviews</li>
<li>Improve delivery cycle</li>
</ul>
`,
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
      company: 'Mercari',
      begin: {
        month: 'may',
        year: '2016'
      },
      duration: null,
      occupation: 'Backend engineer',
      description: 'Tech lead in backend area. Migration from monolith to microservice for `Merpay Smart Payment`'
    },
    {
      company: 'CyberAgent',
      begin: {
        month: 'mar',
        year: '2010'
      },
      duration: '6 years and 1 month',
      occupation: 'Backend engineer',
      description: 'Backend and DevOps engineer. Java, Go, MySQL and AWS'
    },
    {
      company: 'Mixi',
      begin: {
        month: 'aug',
        year: '2005'
      },
      duration: '4 years and 5 months',
      occupation: 'Fullstack engineer',
      description: 'Fullstack engineer in `Find Job!` team'
    },
    {
      company: 'NetCentury',
      begin: {
        month: 'apr',
        year: '2001'
      },
      duration: '3 years and 3 month',
      occupation: 'Backend engineer',
      description: ''
    },
  ],
  portfolio: [],
  social: {
    twitter: 'https://twitter.com/oinume',
    linkedin: 'https://www.linkedin.com/in/oinume',
    github: 'https://github.com/oinume',
    email: 'oinume@gmail.com'
  },
  siteUrl: 'https://santosfrancisco.github.io/gatsbystarter-cv',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover-oinume.jpg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: '#000000cc',
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