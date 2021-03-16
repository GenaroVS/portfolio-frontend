import React, { useState } from 'react';
import '../styles/Links.css'
import { links, colors } from '../data/index';

type link = {
  text: string,
  url: string,
  type: string
}

function Links() {
  const [filter, setFilter] = useState<string>('all');

  const getRandColor = (colors: string[]): string => {
    var index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }

  const filterHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setFilter(e.target.value);
  }

  const getLinks = (links: link[]) => {
    return links
    .filter(link => {
      return filter !== 'all' ? link.type === filter : true;
    })
    .map(link => {
      var color = getRandColor(colors);
      return (<a
        href={link.url}
        target='_blank'
        rel='noreferrer'
        style={{
          backgroundColor: color,
          border: '3px solid ' + color
        }}>
          {link.text}
        </a>)
    })
  };

  const getOptions = (links: link[]): JSX.Element[] => {
    var options:JSX.Element[] = [];
    var types: string[] = links.map(link => {
      return link.type;
    });

    new Set(types).forEach((type, i) => {
      options.push(<option>{type}</option>);
    });

    return options;
  };

  return (
    <div id='links-page'>
      <select id='links-filter' onChange={filterHandler}>
        <option selected value='all'>All Links</option>
        {getOptions(links)}
      </select>
      <section id='links-cont'>
        {getLinks(links)}
      </section>
    </div>
  );
}

export default Links;