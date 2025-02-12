'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar.js';
import SocialButton from '../components/SocialButton.js';
import Header from '../components/Header.js';
import Project from '../components/Project.js';
import TechnologyUsed from '../components/TechnologyUsed.js';
import PhotoAlbum from '../components/PhotoAlbum.js';


// import global css
import '../styles/globals.css';

function handleSubmitClick() {
  let params = {
    nameField: document.getElementById('nameField').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  }

  emailjs.send('service_6fyq8q7', 'template_lexulwk', params).then(alert('Message Sent!'));
  nameField.value = '';
  email.value = '';
  subject.value = '';
  message.value = '';
}

export default function Page() {
  const aboutMe = `
    I am a dedicated developer based in Michigan and a senior Computer Science
    student at Grand Valley State University. My academic journey has provided
    me with a solid foundation in both theory and practice although my learning
    extends much beyond the classroom. I am a lifelong learner, with a growth
    mindset, always eager to learn and take on new challenges. With graduation
    on the horizon April 2025, I am excited to transition my passion for technology
    into real-world solutions for a mission I believe in. 
  `
  const tldr = `TLDR: I'm a software developer with a *soon to be* B.S. in Computer Science, who loves learning new tricks,
   building cool stuff, and tackling difficult problems.`;
  
  const techElems = {
    git: { techName: 'Git', techImg: '/git.svg' },
    react: { techName: 'React', techImg: '/react.svg' },
    html: { techName: 'HTML', techImg: '/html.svg' },
    css: { techName: 'CSS', techImg: '/css.svg' },
    js: { techName: 'JavaScript', techImg: '/javascript.svg' },
    createCoreML: { techName: 'Create/Core ML', techImg: '/ml.svg' },
    swift: { techName: 'Swift', techImg: '/swift.svg' },
    uiUx: { techName: 'UI/UX', techImg: '/uiux.svg' },
    python: { techName: 'Python', techImg: '/python.svg' },
    cpp: { techName: 'C++', techImg: '/cpp.svg' },
    c: { techName: 'C', techImg: '/c.svg' },
    sql: { techName: 'SQL', techImg: '/sql.svg' },
    kotlin: { techName: 'Kotlin', techImg: '/kotlin.svg' },
    pandas: { techName: 'Pandas', techImg: '/pandas.svg' },
    plotly: { techName: 'Plotly', techImg: '/plotly.svg' },
    numpy: { techName: 'Numpy', techImg: '/numpy.svg' },
    npm: { techName: 'NPM', techImg: '/npm.svg' },
    jest: { techName: 'Jest', techImg: '/jest.svg' },
    jira: { techName: 'Jira', techImg: '/jira.svg' },
    erp: { techName: 'NetSuite', techImg: '/erp.svg' },
    nodejs: { techName: 'Node.js', techImg: '/nodejs.svg' },
  };

  const projectDescriptions = {
    portfolio: `I spent a significant amount of time learning React, HTML, and CSS to create this portfolio, 
    and I am incredibly proud of the outcome. Building on that success, I am currently developing more 
    advanced React projects that leverage Next.js and other libraries to integrate robust 
    back end functionality.`,
    filmBuffs: `FilmBuffs is a iOS mobile application that allows users to search for movies, tv shows,
    actors, and actresses. The app utilizes the TMDb API to provide users with up-to-date information. In
    addition, FilmBuffs was made with machine learning in mind. It has a feature that allows users to take 
    a photo of an actor or actress and uses my machine learning model to identify and provide information 
    about the celebrity.`,
    vibify: `Vibify is a web application written in python that utilizes the Spotify API and returns the user
    informaiton regarding their top artists, songs, and genres. The application also provides the user with their
    statistics in comparison to the rest of the world listening to Spotify. Vibify was created by a team of 4 consisting
    of myself and 3 of my close friends.`,
    more: `I am currently working on a TON more projects and will keep this website updated as I continue learning. If 
    you are interested in seeing more of my work, please check out my GitHub page or contact me below. Thanks for checking
    out my page! :)`
  };

  const photos = {
    aniston: '/img/aniston.PNG',
    reynolds: '/img/reynolds.PNG',
    simpsons: '/img/simpsons.jpg',
    vibify: '/img/vibify.png'
  }

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="whole-page">
      <div className="left-panel">
        <div className="header">
          <h1 className="name-header">Clay Beal</h1>
          <h2 className="attribute-text">Software Developer</h2>
          <h2 className="attribute-text">Problem Solver</h2>
          <h2 className="attribute-text">Lifelong Learner</h2>
        </div>
        <div className="navbar">
          <Navbar buttons={[
            { text: "About", onClick: () => scrollToSection('about-section') },
            { text: "Skills", onClick: () => scrollToSection('skill-section') },
            { text: "Projects", onClick: () => scrollToSection('projects-section') },
            { text: "Contact", onClick: () => scrollToSection('contact-section') }
          ]} />
        </div>
        <div className='social-links'>
          <SocialButton img={"github.svg"} link={'https://github.com/clayster4004'} />
          <SocialButton img={"linkedin.svg"} link={'https://www.linkedin.com/in/claybeal/'} />
          <SocialButton img={"resume.svg"} link={'/resume/BealClayFebruary2025.pdf'} />
        </div>
      </div>

      <div className="right-panel">
        <div id="about-section">
          <Header header="About" />
          <div className="body-div">
            <p className="body-text">
              {aboutMe}
            </p>
            <p className="body-text body-text-tldr">
              {tldr}
            </p>

          </div>
        </div>

        <div id="skill-section" className="skill-div">
          <Header header="Skills" />
          <div className="skills">
            <h2 className="mini-header">
              Languages
            </h2>
            <TechnologyUsed techElems={[techElems.js, techElems.html, techElems.css, techElems.python, 
              techElems.c, techElems.cpp, techElems.swift, techElems.kotlin, techElems.sql]} />
            <h2 className="mini-header">
              Frameworks/Libraries
            </h2>
            <TechnologyUsed techElems={[techElems.react, techElems.pandas, 
              techElems.plotly, techElems.numpy, techElems.createCoreML]} />
            <h2 className="mini-header">
              Tools
            </h2>
            <TechnologyUsed techElems={[techElems.git, techElems.uiUx, techElems.npm, techElems.nodejs, techElems.jest, techElems.jira, techElems.erp]} />
          </div>
          
        </div>

        <div id="projects-section">
          <Header header="Projects" />
          <div className="project-div">
            <Project 
            projectName="This Portfolio!" 
            projectDesc={projectDescriptions.portfolio}
            techElems={<TechnologyUsed techElems={[techElems.react, techElems.html, techElems.css, techElems.js, techElems.git]} />}
            ghLink='https://github.com/clayster4004/Portfolio'
            />
          </div>          
          <div className="project-div">
            <Project 
            projectName="FilmBuffs" 
            projectDesc={projectDescriptions.filmBuffs} 
            //photoAlbum={<PhotoAlbum photos={[photos.aniston, photos.reynolds, photos.simpsons]} width="250px" height="450px" />}
            techElems={<TechnologyUsed techElems={[techElems.swift, techElems.createCoreML, techElems.uiUx, techElems.git]} /> }
            ghLink='https://github.com/clayster4004/FilmBuffs'
            />
          </div>
          <div className="project-div">
            <Project 
            projectName="Vibify"
            projectDesc={projectDescriptions.vibify}
            //photoAlbum={<PhotoAlbum photos={[photos.vibify]} width="450px" height="250px" />}
            techElems={<TechnologyUsed techElems={[techElems.python, techElems.uiUx, techElems.git]} />}
            ghLink='https://github.com/ianmccourt/GVSU-CIS350-BigDataGuys'
            />
          </div>
          <div className="body-div">
            <h1 className="more-header">
              More to Come!
            </h1>
            <p className="body-text body-text-tldr">
              {projectDescriptions.more}
            </p>
          </div>
        </div>

        <div id="contact-section" className="contact-div">
          <Header header="Contact" />
          <input id="nameField" className="name-input" placeholder="Name"></input>
          <input id="email" className="email-input" placeholder="Email"></input>
          <input id="subject" className="subject-input" placeholder="Subject"></input>
          <textarea id="message" className="message-input centered-placeholder" placeholder="Message"></textarea>
          <button className="submit-button" onClick={handleSubmitClick}>Submit</button>
        </div>
      </div>
    </div>
  );
}