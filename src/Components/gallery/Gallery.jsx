import React from 'react';
import './gallery.scss';
import Gallery from 'react-photo-gallery';

class MyGallery extends React.Component {
    constructor(){
        super();
        this.state = {images: [] };
    }
    
    componentWillMount(){  
        fetch('fakeDB/realty/realty.json').then( (response)=> { 
                return response.json();
            }).then( (res)=> {
                res = res.map( (el)=>el.img);
               return res; 
             }).then( (res)=> {
                let imgArr = [];
                res.map( (el)=>{
                        el.map( (e)=>{
                            imgArr.push(e);
                            return imgArr; 
                        })
                  return imgArr;  
               })
                this.setState({images : imgArr });
             }).catch( alert );               
    }

    render(){
        const {images} = this.state;
        const src =[];
        images.map( (img , i)=>{
                const itemImg ={
                    src: "fakeDB/realty/img/"+ img,
                    width: (Math.random() * (3 - 1)+ 1),
                    height: (Math.random() * (3 - 1)+ 1),
                    key:i
                } 
                src.push(itemImg);
                return src;
            }); 
        
        return(
            <div className="gallery">
              {
                   (this.state.images.length  !== 0) && <Gallery photos={src} />
              }
            </div>
        )
    }
}
    
export default MyGallery;
