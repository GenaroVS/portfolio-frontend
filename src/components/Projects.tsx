import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import '../styles/Projects.css';
import { colors, projects } from '../data/index';

type props = {photos?: string[], videos?: string[]};

interface displayArgs {
  video: string;
  photo: string;
  project: typeof projects[0];
}

function Projects({ photos, videos }: props) {
  var minifiedBuffer = 0;
  const [show, setShow] = useState<boolean | string>(false);
  const btnRef = React.useRef<HTMLButtonElement>(null);

  const toggleOpen = (e: React.MouseEvent<HTMLElement>): void => {
    if (e.currentTarget.nodeName === 'VIDEO') {
      e.stopPropagation();
      return;
    }
    if (window.innerWidth > 768) {
      e.currentTarget.classList.toggle('open');
    }
  }

  const toggleActive = (e: React.TransitionEvent): void => {
    if (!e.propertyName.includes('flex')) return;
    if (window.innerWidth > 768 && minifiedBuffer > 0) {
      minifiedBuffer -= 1
    } else if (window.innerWidth > 768) {
      e.currentTarget.classList.toggle('open-active');
    } else {
      minifiedBuffer = projects.length;
    }
  }

  const handleDisplay = ({photo, video, project}: displayArgs): JSX.Element | null => {
    if (project.display === 'video' && show === project.name) {
      return (
        <>
          <img className='canPlay' src={photo} alt='Project screenshot' />
          <Modal>
            <button ref={btnRef} onClick={(e) =>{
              e.stopPropagation();
              setShow(false);
            }}>
              X Close
            </button>
            <video src={video} autoPlay controls />
          </Modal>
        </>
      )
    } else if (project.display === 'video') {
      return <img className='canPlay' src={photo} alt='Project screenshot' />
    } else if (project.display === 'photo') {
      return <img src={photo} alt='Project screenshot' />
    }

    return null;
  }

  useEffect(() => {
    btnRef.current && btnRef.current.focus();
  })

  return (
    <section id='projects-cont'>
      {photos && videos && projects.map((project, i) => {
        return (
          <div onClick={toggleOpen}
            onTransitionEnd={toggleActive}
            className='project'
            style={{backgroundColor: colors[i]}}
          >
            <h3>{project.name}</h3>
            <a href={project.url} target='_blank' rel='noreferrer'>
              <i className="fab fa-github fa-lg"></i>
            </a>
            <p>{project.desc}</p>
            <div className='display' onClick={(e) => {
              e.stopPropagation();
              setShow(project.name)
            }}>
              { handleDisplay({video: videos[i], photo: photos[i], project}) }
            </div>
            <p>{project.tools}</p>
          </div>
        )
      })}
    </section>
  );
}

export default Projects;