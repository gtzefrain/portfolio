import React, { useState, useEffect } from "react";

import './App.scss';
function App() {
  let headshot = "foto.jpg"
  let languages = ['EN', 'ES']
  let info = {
    EN: {
      introduction: "Hello! I'm Efraín Gutiérrez",
      cover: "I'm a Front End Engineer with a passion for design. I currently work in consulting for American clients. I mostly work on front end but I also got knowledge on backend, devops, etc; I love React and CSS. I like to work on web experiences that impact the user. ",
      cover_cta: 'contact me!',
      cv_cta: 'Check my CV!',
      or: 'or ',
      projects_title: 'Projects',
      projects: [{
        language: 'Javascript',
        title: 'Plastic Lover',
        description: 'Promotional site to promote music releases. Animations done with JS y CSS.',
        // link: 'http://www.plasticlover.com.mx/'
        link: 'https://test-plastic-ep.herokuapp.com/',
        video: '/videos/plastic_video.mp4',
        thumb: '/thumbnails/plastic.png'
      }, {
        language: 'React',
        title: '8x8 Rebranding FE',
        description: 'Colaborator in the implementation of the rebranding of the sales site for 8x8.',
        link: 'https://8x8.com/',
        video: '/videos/8x8.mp4',
        thumb: '/thumbnails/8x8.png'
      }, {
        language: 'Javascript',
        title: 'Dynamic Theme',
        description: 'Proof of Concept for dynamic theming using Angular Material',
        link: 'https://material-theming.herokuapp.com/',
        video: '/videos/theming.mp4',
        thumb: '/thumbnails/theming.png'
      }, {
        language: 'Javascript',
        title: 'SLNA Blog',
        description: 'Blog for a local media site, done with KeystoneJS and MongoDB',
        link: 'https://blog-slna.herokuapp.com/blog',
        video: '/videos/slna.mp4',
        thumb: '/thumbnails/slna.png'
      }
      ]
    },
    ES: {
      introduction: 'Hola! Soy Efraín Gutiérrez',
      cover: 'Soy un Front End Engineer con una pasión por el diseño. Actualmente trabajo como consultor para clientes americanos. Mayoritariamente hago front-end development pero también tengo conocimientos de backend, devops y demás; soy fan de React y CSS. Me gusta trabajar con experiencias web que impacten a los usuarios.',
      cover_cta: 'contactame!',
      cv_cta: 'Revisa mi CV',
      or: 'o ',
      projects_title: 'Proyectos',
      projects: [{
        language: 'Javascript',
        title: 'Plastic Lover',
        description: 'Sitio promocional para lanzamiento de proyecto musical. Animaciones con JS y CSS',
        // link: 'http://www.plasticlover.com.mx/'
        link: 'https://test-plastic-ep.herokuapp.com/',
        video: '/videos/plastic_video.mp4',
        thumb: '/thumbnails/plastic.png'
      }, {
        language: 'React',
        title: '8x8 Rebranding FE',
        description: 'Colaborador en la implementacion de diseño del rebranding del sitio de ventas de 8x8',
        link: 'https://8x8.com/',
        video: '/videos/8x8.mp4',
        thumb: '/thumbnails/8x8.png'
      }, {
        language: 'Javascript',
        title: 'Dynamic Theme',
        description: 'Prueba de Concepto para cambio dinamico de temas usando Angular Material',
        link: 'https://material-theming.herokuapp.com/',
        video: '/videos/theming.mp4',
        thumb: '/thumbnails/theming.png'
      }, {
        language: 'Javascript',
        title: 'SLNA Blog',
        description: 'Blog hecho para medio local, elaborado con KeystoneJS',
        link: 'https://blog-slna.herokuapp.com/blog',
        video: '/videos/slna.mp4',
        thumb: '/thumbnails/slna.png'
      }
      ]
    }
  }
  const [video, setVideo] = useState('');
  const [thumb, setThumb] = useState('');
  const [language, setLanguage] = useState('EN');
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
  const { height, width } = useWindowDimensions();

  const selectedInfo = info[language]
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  const selectVideo = (videoURL, thumbURL) => {
    if (width > 992) {
      setVideo(videoURL)
      setThumb(thumbURL)
    }
  }

  const removeVideo = () => {
    if (width > 992) {
      setVideo('')
    }
  }
  return (
    <div className="app">
      <div className="info items-center padding-sides">
        <div className="introduction">
          <h3 className="name">
            {selectedInfo.introduction}
          </h3>
          <div className="lang-switcher">
            {languages.map((lang) => (
              <div className={`lang ${language === lang ? "active" : ""}`} onClick={() => setLanguage(lang)}>{lang}</div>
            ))}
          </div>
          <p className="cover">
            {selectedInfo.cover}
            <br />
            <a href="https://docs.google.com/document/d/1TEFLnq6AzpEBqfP-RRchc1g1e1DEd8ydZAnwpfqwsUc/edit?usp=sharing" target="_blank" className="mail"> {selectedInfo.cv_cta}</a> {selectedInfo.or}
            <a href="mailto:gtz.efrain@gmail.com" className="mail"> {selectedInfo.cover_cta}</a>
          </p>
        </div>
        <div className="styling">
          {video &&
            <div className="video-container">
              <img
                src={thumb}
                className="video-thumb tiny"
                alt="thumb"
                style={{ opacity: isVideoLoaded ? 0 : 1 }}
              />
              <video
                autoPlay
                playsInline
                muted
                loop
                src={video}
                onLoadedData={onLoadedData}
                style={{ opacity: isVideoLoaded ? 1 : 0 }}
              />
            </div>
          }
        </div>
        <div className="contact-bar flex items-center">
          <img src={headshot} className="headshot" alt="Efrain Gutierrez Headshot" />
          <ul className="social flex">
            <li className="twitter">
              <a className="flex items-center" href="https://twitter.com/elephrain">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
                <span>Twitter</span>
              </a>
            </li>
            <li className="github">
              <a className="flex items-center" href="https://github.com/gtzefrain">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>Github</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="projects items-center padding-sides">
        <h4 className="header">{selectedInfo.projects_title}</h4>
        {selectedInfo.projects.map((project) => (
          <a href={project.link} target="_blank">
            <article className="project transition" onMouseEnter={() => selectVideo(project.video, project.thumb)} onMouseLeave={() => removeVideo()}>
              <h5 className="language">{project.language}</h5>
              <h3 className="title">{project.title}</h3>
              <p className="description">{project.description}</p>
            </article>
          </a>
        ))}
      </div>
    </div >
  );
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export default App;
