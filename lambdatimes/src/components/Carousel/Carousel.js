import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 

let curImg = 0;

export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
    }
  }

  componentDidMount(){
    this.setState({ images: carouselData })
  }

  leftClick = () => {
    if (curImg === 0) {
      curImg = this.state.images.length - 1;
    }
    else {
      curImg = curImg - 1;
    }
  }

  rightClick = () => {
    if (curImg === this.state.images.length - 1) {
      curImg = 0;
    }
    else {
      curImg = curImg + 1;
    }
  }

  selectedImage = () => {
    return <img src={this.state.images[curImg]} style={{display: 'block'}} alt="" />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
        <img src={this.state.images[curImg]} style={{display: 'block'}} alt="" />
      </div>
    )
  }
}