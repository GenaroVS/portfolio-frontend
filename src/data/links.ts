type link = {
  text: string,
  url: string,
  type: string
}

const links: link[] = [
  {
    text: 'Dynamic Promise Queue',
    url: 'https://medium.com/@karenmarkosyan/how-to-manage-promises-into-dynamic-queue-with-vanilla-javascript-9d0d1f8d4df5',
    type: 'Fullstack'
  },
  {
    text: 'Guide on useEffect',
    url: 'https://overreacted.io/a-complete-guide-to-useeffect/',
    type: 'Frontend'
  },
  {
    text: 'Fetching Data w/ Hooks',
    url: 'https://www.robinwieruch.de/react-hooks-fetch-data',
    type: 'Frontend'
  },
  {
    text: 'Javascript DSA Repo',
    url: 'https://github.com/trekhleb/javascript-algorithms',
    type: 'DSA'
  },
  {
    text: 'SSL w/ Nginx',
    url: 'https://www.sitepoint.com/configuring-nginx-ssl-node-js/',
    type: 'Backend'
  },
  {
    text: 'SSL Best Practices',
    url: 'https://github.com/ssllabs/research/wiki/SSL-and-TLS-Deployment-Best-Practices',
    type: 'Backend'
  },
  {
    text: 'Neumorphism',
    url: 'https://neumorphism.io/#e0e0e0',
    type: 'Frontend'
  },
  {
    text: 'System Design Questions',
    url: 'https://medium.com/javarevisited/25-software-design-interview-questions-to-crack-any-programming-and-technical-interviews-4b8237942db0',
    type: 'DSA'
  },
  {
    text: 'Sharding Pinterest',
    url: 'https://medium.com/pinterest-engineering/sharding-pinterest-how-we-scaled-our-mysql-fleet-3f341e96ca6f',
    type: 'Devops'
  },
  {
    text: 'Big O Cheat Sheet',
    url: 'https://www.bigocheatsheet.com/',
    type: 'DSA'
  },
  {
    text: 'Dynamic Programming',
    url: 'https://techdose.co.in/courses/dynamic-programming-course/',
    type: 'DSA'
  },
  {
    text: 'Leetcode Patterns',
    url: 'https://seanprashad.com/leetcode-patterns/',
    type: 'DSA'
  },
  {
    text: '7 Day DSA Cheat Sheet',
    url: 'https://techdose.co.in/7-days-dsa-cheat-sheet-quick-preparation-plan/',
    type: 'DSA'
  },
  {
    text: 'Bit Manipulation',
    url: 'https://www.hackerearth.com/practice/notes/bit-manipulation/',
    type: 'DSA'
  },
  {
    text: 'From Nand to Tetris',
    url: 'https://www.coursera.org/learn/build-a-computer',
    type: 'Fullstack'
  },
  {
    text: 'BitBucket to AWS Code Deploy',
    url: 'https://medium.com/paul-zhao-projects/continuous-deployment-pipeline-with-bitbucket-pipelines-to-aws-ec2-using-aws-code-deploy-684ddcc1717f',
    type: 'Devops'
  },
  {
    text: 'Backend Scaling Numbers',
    url: 'http://highscalability.com/numbers-everyone-should-know',
    type: 'Backend'
  },
  {
    text: 'React-TS Cheat Sheet',
    url: 'https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets',
    type: 'Frontend'
  },
  {
    text: 'TS Type Notation',
    url: 'https://2ality.com/2018/04/type-notation-typescript.html#typing-arrays',
    type: 'Frontend'
  },
  {
    text: 'Cheat Sheetception',
    url: 'https://dev.to/devlorenzo/the-ultimate-compilation-of-cheat-sheets-2-53he',
    type: 'Fullstack'
  },
  {
    text: 'Graphql Tutorials',
    url: 'https://www.howtographql.com/',
    type: 'Backend'
  },
  {
    text: 'Free AI Course',
    url: 'https://www.fast.ai/',
    type: 'Backend'
  },
  {
    text: 'Passport.js JWT\'s',
    url: 'https://www.freecodecamp.org/news/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52/',
    type: 'Backend'
  },
  {
    text: 'Node Streams Handbook',
    url: 'https://github.com/substack/stream-handbook',
    type: 'Backend'
  },
  {
    text: 'Public API\'s',
    url: 'https://github.com/public-apis/public-apis',
    type: 'Backend'
  },
  {
    text: 'Console log tips',
    url: 'https://dev.to/ackshaey/level-up-your-javascript-browser-logs-with-these-console-log-tips-55o2',
    type: 'Fullstack'
  },
  {
    text: '650+ Free Online Courses',
    url: 'https://www.freecodecamp.org/news/650-free-online-programming-computer-science-courses-you-can-start-this-september/',
    type: 'Fullstack'
  },
  {
    text: 'Jonas\' Resources',
    url: 'http://codingheroes.io/resources/',
    type: 'Frontend'
  },
  {
    text: 'CSS Tricks',
    url: 'https://css-tricks.com/',
    type: 'Frontend'
  },
  {
    text: 'Linux Commands',
    url: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/',
    type: 'Devops'
  },
  {
    text: 'Nassim Taleb Reading List',
    url: 'https://medium.com/the-mission/61-books-nassim-taleb-recommends-you-read-in-his-own-words-fc2e17a7f3c1',
    type: 'Random Reading'
  },
  {
    text: 'Geothermal Energy Blog',
    url: 'https://www.heatbeat.energy/blog',
    type: 'Random Reading'
  },
  {
    text: 'Tech Optimism',
    url: 'https://elidourado.com/blog/notes-on-technology-2020s/',
    type: 'Random Reading'
  },
  {
    text: 'Richard Feynman Algebra Lecture',
    url: 'https://www.feynmanlectures.caltech.edu/I_22.html',
    type: 'Random Reading'
  },
  {
    text: '7 Mnemonic Techniques',
    url: 'https://theutopianlife.com/2014/02/04/supercharge-memory-7-mnemonic-techniques-put-practice-today/',
    type: 'Random Reading'
  },
  {
    text: 'MRU Economics',
    url: 'https://mru.org/learn',
    type: 'Random Reading'
  }
];

export default links;
