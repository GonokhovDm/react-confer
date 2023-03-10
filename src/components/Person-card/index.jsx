import React from 'react';

import fbSvg from '../../assets/facebook.svg';
import instSvg from '../../assets/instagram.svg';
import twitterSvg from '../../assets/twitter.svg';
import linkedinSvg from '../../assets/linkedin.svg';

import './PersonCard.scss'

function PersonCard(props) {
  return (
    <div className="speakings__card">
      <div className="speakings__card-photo">
        <img src={props.imageUrl} alt="" />
      </div>
			<div className="speakings__card-contacts">
        <img src={fbSvg} alt="" />
        <img src={instSvg} alt="" />
        <img src={twitterSvg} alt="" />
        <img src={linkedinSvg} alt="" />
      </div>
			<div className="speakings__card-info">
				<span>{props.name}</span>
				<p>{props.title}</p>
			</div>
		</div>
  )
}

export default PersonCard
