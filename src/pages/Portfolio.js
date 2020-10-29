import styled from 'styled-components';

import ProjectCard from '../components/ProjectCard';

import mrp from '../static/img/mrp-screenshot.PNG';


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

  @media screen and (max-width: 768px){
    & {
      gap: 2em;
    }
  }

  @media screen and (max-width: 560px){
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
        <ProjectCard img="https://via.placeholder.com/1280" title="Lorem ipsum" description="Lorem ipsum dolor sit amet" />
        <ProjectCard img="https://via.placeholder.com/1280" title="Lorem ipsum" description="Lorem ipsum dolor sit amet" />
        <ProjectCard img="https://via.placeholder.com/1280" title="Lorem ipsum" description="Lorem ipsum dolor sit amet" />
        <ProjectCard img="https://via.placeholder.com/1280" title="Lorem ipsum" description="Lorem ipsum dolor sit amet" />
      </Gallery>
    </section>
  );
}

export default Products;