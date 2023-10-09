import React  from 'react';
import classes from "./App.module.css"

import ProductPreview from './Components/ProductPreview';
import ProductDetails from './Components/ProductDetails';
import Topbar from './Components/Topbar';
import { Component } from "react";
import ProductData from './ProductData';

class App extends Component {
  state = {
    productData : ProductData,
    currentPreviewImagePos : 0,
    currentSelectedFeature : 0,
   
  }

  onColorOptionClick = (pos) =>{
  
    this.setState({currentPreviewImagePos : pos});
  }

  onFeatureItemClick = (pos) =>{
    this.setState({currentSelectedFeature:pos});
  }
  


  render(){
    
    return (
      <div className="App">
        <Topbar/>
       
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} 
            currentSelectedFeature={this.state.currentSelectedFeature}
            />
          </div>
  
          <div className={classes.ProductData}>
            <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} 
            currentPreviewImagePos={this.state.currentPreviewImagePos} onFeatureItemClick={this.onFeatureItemClick} 
            showHeartBeatSection={this.state.currentSelectedFeature }/>
          </div>
  
        </div>
      </div>
  
    );

    
  }
   

}

export default App;
