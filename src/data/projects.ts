interface project {
  name: string;
  desc: string;
  githubUrl: string;
  siteUrl: string;
  tools: string;
  display: string;
}

const colors: string[] = [
  '#C8102E',
  '#00B2A9',
  '#D45C11',
  '#3BB50E',
]

const projects:project[] = [
  {
    name: 'Aqua-Photos',
    desc: 'Photo grid and carousel for property rental site.',
    githubUrl: 'https://github.com/Aqua-App/photos',
    siteUrl: 'https://github.com/Aqua-App/photos',
    tools: 'React - Node - Styled Components - MySQL',
    display: 'video'
  },
  {
    name: 'Spotifind',
    desc: 'Randomly find active small time music artists.',
    githubUrl: 'https://github.com/GenaroVS/spotifind',
    siteUrl: 'https://spot1find.herokuapp.com/',
    tools: 'React - Node - Spotify API - PostgreSQL',
    display: 'photo'
  },
  {
    name: 'TicTacToe',
    desc: 'The classic 2-player game',
    githubUrl: 'https://github.com/GenaroVS/TicTacToe',
    siteUrl: 'https://github.com/GenaroVS/TicTacToe',
    tools: 'Pure Javascript',
    display: 'photo'
  },
];

export {
  colors,
  projects
}