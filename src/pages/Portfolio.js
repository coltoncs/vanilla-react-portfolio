import ProjectCard from '../components/ProjectCard';

function Products(){
    return (
        <section>
            <div className="header">
                <h1>View a collection of some of my recent work</h1>
            </div>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </section>
    );
}

export default Products;