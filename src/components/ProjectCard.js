import React from './icons/React';
import styled from 'styled-components';

const Card = styled.div`
    max-width: 75%;
    position: relative;
    overflow: hidden;
    max-height: 750px;
    box-shadow: 0px 0px 11px 0px #353e53;
    transition: box-shadow 1s, transform 1.6s;


    &:hover {
        box-shadow: 0px 0px 37px 0px #001924;
        cursor: pointer;
        transform: scale(1.03);
    }

    & img {
    max-width: 100%;
    border-radius: 5px;
    transition: 0.5s;
    }
`;

const Description = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    margin-top: -64%;
    z-index: 102;
    color: #000;
    padding: 15px;
    text-align: center;
`;

function ProjectCard({title, img, meta, description}){
    return(
        <Card>
            <img src={img}/>
            <div className="blur"></div>
            <Description>
                <h2>{title}</h2>
                <p>{description}</p>
            </Description>
        </Card>
    )
}

export default ProjectCard;