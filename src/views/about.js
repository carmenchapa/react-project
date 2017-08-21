import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { Route } from 'react-router-dom';
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import Image from '../components/AboutImage.js'
import ButtonProjects from '../components/ButtonProjects.js'

import data from '../data/about.json'
const cardStyles = {
		padding: '20px',
		marginTop: '40px',
		boxShadow: 'none',
		border: '1px solid #EEEEEE'
}

let About = class Work extends Component {
	// constructor(props) {
 //    	super(props);
 //    	this.createImage = this.createImage.bind(this);
 //    	this.createImages = this.createImages.bind(this);  
 //  	}
 //<Route path="https://unsplash.it/images"/>

  createImage(image) {
    return (
    	<div className="col s12 m4 l3" key={image.src}>
    		<Card style={cardStyles}>
    			<CardMedia>
    				<Image source={image.src}/>
    			</CardMedia>
	    		<CardTitle subtitle={image.name} />
	    		<CardActions>
	    			<Link to={`/view/${image.code}`}>
	    			<ButtonProjects id='buttonAbout'  backgroundColor="#FFC400"  label="view" labelColor='#fff' />
	    			</Link>
	    			
	    		</CardActions>
	    	</Card>
	    </div>
	    )
  }

  createImages(images) {
    return images.map(this.createImage);
  }

  render() {
    return (
      <div className="container">
        <div className="row">           
		            {this.createImages(data.images, data.names)}		        
        </div>
      </div>
    );
  }
};

export default About