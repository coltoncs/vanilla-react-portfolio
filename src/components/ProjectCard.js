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

const Content = styled.div`
    color: #000;
    padding: 15px;
    text-align: center;
`;

const Title = styled.h2`
    color: white;
    text-shadow: 0 0 10px black;
`;

const Description = styled.p`
    margin: 0 5px;
`;

function ProjectCard({title, img, icons}){
    return(
        <Card>
            <Content>
                <Title>{title}</Title>
                <Description>{icons.map(icon => <span><img src={icon}/></span>)}</Description>
            </Content>
            <img src={img}/>
        </Card>
    )
}

export default ProjectCard;