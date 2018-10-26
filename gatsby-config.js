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
    'gatsby-plugin-offline',
  ],
  siteMetadata: {
    name: 'Victor Cinaglia',
    title: 'Victor Cinaglia - Software Engineer',
    keywords: [
      'Software Engineering',
      'Python',
      'JavaScript',
      'React & Redux',
      'Tornado',
      'Django',
    ],
    picture:
      'https://media.licdn.com/dms/image/C4E03AQEO3PS7rWlyeA/profile-displayphoto-shrink_200_200/0?e=1545264000&v=beta&t=S311yHJZRVoQLvI9WnBLs4oI8bW8K7GCvm17PAra5mo',
    summary:
      'Accomplished software engineer with over a decade of industry experience building and maintaining applications in Python and JavaScript. Passionate about learning new technologies and dealing with all aspects of web development, including architecture, documentation, implementation, testing, and delivery.',
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
        name: 'CI/CD & DevOps',
        items: [
          'Jenkins',
          'Travis',
          'Gitlab CI',
          'Gitflow',
          'Docker',
          'Consul',
          'Amazon ECS',
        ],
      },
      {
        name: 'Versioning',
        items: ['Git', 'Gitlab', 'Github', 'Bitbucket', 'Subversion'],
      },
      {
        name: 'Monitoring & Alerting',
        items: [
          'Graphite',
          'Grafana',
          'Statsd',
          'Nagios',
          'Sentry',
          'PagerDuty',
          'Loggly',
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
