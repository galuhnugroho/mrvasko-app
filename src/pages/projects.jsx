import { Fragment, Suspense } from 'react';
import Navbar from '../components/Layouts/Navbar';
import SplashCursor from '../components/ReactBits/SplashCursor/SplashCursor';
import CardProject from '../components/Fragments/CardProject';

const projects = [
  {
    id: 1,
    name: 'E-Voting',
    image: '/images/project-1.png',
    description: 'I built an e-voting website using Laravel, MySQL, and the SB Admin 2 dashboard template. The site supports user login, candidate management, and a one-time voting system.',
    link: 'https://github.com/galuhnugroho/e-voting',
  },
  {
    id: 2,
    name: 'MisterBlog',
    image: '/images/project-2.png',
    description: 'MisterBlog is a Laravel-based blog platform with MySQL, allowing users to create, manage, and view blog posts, featuring authentication and an admin panel.',
    link: 'https://github.com/galuhnugroho/',
  },
  {
    id: 3,
    name: 'Tokovasko (on progress)',
    image: '/images/project-3.png',
    description: 'Tokovasko is an e-commerce site built with Laravel and Filament',
    link: 'https://github.com/galuhnugroho/',
  },
];

const Projects = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      {/* <Header>My Projects</Header> */}

      <SplashCursor />

      <div className="hero bg-base-200 min-h-screen flex justify-center items-center px-4 py-6">
        <div className="w-full max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-3xl font-bold mb-4 text-center">My Projects</h1>
          <p className="text-xl sm:text-lg mb-8 text-center">I am a passionate web developer who loves creating amazing projects. Below are some of the projects I have worked on.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <CardProject key={project.id}>
                <CardProject.HeaderCard image={project.image}></CardProject.HeaderCard>
                <CardProject.BodyCard name={project.name} link={project.link}>
                  {project.description}
                </CardProject.BodyCard>
              </CardProject>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
