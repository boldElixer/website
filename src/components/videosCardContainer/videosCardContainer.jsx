import React from 'react';
import './videosCardContainer.css';
import Card from '../ResourcesCard/ResourcesCard';
import { BsArrowRight } from 'react-icons/bs';


function CardContainer(props) {
  return <div>
      <div className={`cardContainer ${props.position}`} >
      <div className="container_heading">
          {props.about==="blogs"?"Read Our Blogs":"Watch Our Videos"}  <BsArrowRight className="container_arrow" />
      </div>
      <div className="cards_collection">
        <Card about="videos" />
        <Card about="videos" />
        <Card about="videos" />
        <Card about="videos" />
        <Card about="videos" />
        <Card about="videos" />

      </div>
      </div>
  </div>;
}

export default CardContainer;
