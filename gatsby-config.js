module.exports = {
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Victor Cinaglia',
        short_name: 'cinaglia.com',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#222222',
        display: 'standalone',
        icon: 'src/assets/icon.png',
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
  ],
  siteMetadata: {
    siteUrl: 'https://cinaglia.com',
    name: 'Victor Cinaglia',
    title: 'Victor Cinaglia - Software Engineer',
    keywords: [
      'Software Engineering',
      'Python',
      'JavaScript',
      'React & Redux',
      'Tornado',
      'Cloud Computing',
    ],
    picture: 'https://github.com/cinaglia.png?size=100',
    summary:
      'Software engineer with over a decade of industry experience building and maintaining applications in Python and JavaScript. Passionate about learning new technologies and dealing with all aspects of web development, including architecture, documentation, implementation, testing, and delivery.',
    email: 'victor@cinaglia.com',
    specialties: [
      {
        name: 'Languages',
        items: [
          'Python',
          'JavaScript',
          'Node',
          'SQL',
          'HTML',
          'CSS',
          'PHP',
          'Golang',
          'Bash',
        ],
      },
      {
        name: 'Frameworks',
        items: [
          'React & Redux',
          'Ramda',
          'Backbone',
          'Express',
          'Tornado',
          'Flask',
          'Django',
        ],
      },
      {
        name: 'Data & Storage',
        items: [
          'PostgreSQL',
          'MySQL',
          'DynamoDB',
          'S3',
          'Redis',
          'RabbitMQ',
          'Memcached',
        ],
      },
      {
        name: 'DevOps & CI/CD',
        items: [
          'Docker',
          'Kubernetes',
          'Amazon ECS',
          'GKE',
          'CircleCI',
          'Jenkins',
          'GitLab CI/CD',
        ],
      },
      {
        name: 'Versioning',
        items: ['Git', 'Gitflow', 'Gitlab', 'Subversion', 'Bitbucket'],
      },
      {
        name: 'Monitoring & Alerting',
        items: [
          'Graphite',
          'Prometheus',
          'Grafana',
          'Elasticsearch',
          'PagerDuty',
        ],
      },
    ],
    social: [
      {
        name: 'LinkedIn',
        icon: 'linkedin',
        url: 'https://www.linkedin.com/in/victorcinaglia',
      },
      {
        name: 'Github',
        icon: 'github',
        url: 'https://github.com/cinaglia',
      },
      {
        name: 'Twitter',
        icon: 'twitter-square',
        url: 'https://twitter.com/cinaglia',
      },
    ],
  },
};
