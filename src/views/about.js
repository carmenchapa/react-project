import React, { Component } from 'react'
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import Image from '../components/AboutImage.js'

import data from '../data/about.json'
const cardStyles = {
		padding: '20px',
		paddingTop: '10px',
		boxShadow: 'none',
		border: '1px solid #EEEEEE'
}

let About = class Work extends Component {
	// constructor(props) {
 //    	super(props);
 //    	this.createImage = this.createImage.bind(this);
 //    	this.createImages = this.createImages.bind(this);  
 //  	}



// let About = React.createClass({
  createImage(image) {
    return (<div className="col s12 m3" key={image}><Card style={cardStyles}><CardMedia><Image source={image}/></CardMedia><CardTitle subtitle={"title"} /></Card></div>)
  }

  createImages(images) {
    return images.map(this.createImage);
  }

  render() {
    return (
      <div className="container">
        <div className="row">           
		            {this.createImages(data.images)}		        
        </div>
      </div>
    );
  }
};

export default About