import './ProjectCard.css';

import ReactIcon from '../static/svg/react.svg';

function ProjectCard({title, img, meta, description}){
    return(
        <div className="card">
            <div classNames="card-header">
                <img src="https://via.placeholder.com/150"/>
                <p>Tech used:</p>
                <img src={ReactIcon} width="25px"/>
            </div>

            <div className="card-body">
                <p>This website was a project</p>
            </div>
        </div>
    )
}

export default ProjectCard;