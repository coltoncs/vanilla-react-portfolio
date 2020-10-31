import styled from 'styled-components';

import ProjectCard from '../components/ProjectCard';

import {Aws, Database, Gitlab, ReactIcon, Users} from '../components/icons/index';

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5em;

  @media screen and (min-width: 1200px){
    & {
      flex-direction: row;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1199px){
    & {
      flex-direction: row;
    }
  }

  @media screen and (min-width: 560px) and (max-width: 768px){
    & {
      gap: 2em;
    }
  }

  @media screen and (max-width: 559px){
    & {
      gap: 1em;
    }
  }
`;

function Products() {
  return (
    <section>
      <div className="header">
        <h1>View a collection of some of my recent work</h1>
      </div>
      <Gallery>
        <ProjectCard img="https://via.placeholder.com/1280" title="Market Ready Painting" icons={[ReactIcon, Users, Database, Gitlab]} />
        <ProjectCard img="https://via.placeholder.com/1280" title="Personal Portfolio Site" icons={[ReactIcon, Users, Database]} />
        <ProjectCard img="https://via.placeholder.com/1280" title="React Weather App" icons={[ReactIcon, Users, Database]} />
        <ProjectCard img="https://via.placeholder.com/1280" title="Julian's Band Website" icons={[ReactIcon, Users, Database]} />
      </Gallery>
      <img src={ReactIcon}/>
    </section>
  );
}

export default Products;