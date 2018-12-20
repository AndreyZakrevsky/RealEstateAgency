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
                    })
               })
                this.setState({images : imgArr });
             }).catch( alert );               
    }

    render(){
        const {images} = this.state;
        const scr =[];
        images.map( (img)=>{
                

                const itemImg ={
                    src: "fakeDB/realty/img/"+ img,
                    width: (Math.random() * (3 - 1)+ 1),
                    height: (Math.random() * (3 - 1)+ 1)
                } 
                scr.push(itemImg);
            }); 
        
        return(
            <div className="gallery">
              {
                   (this.state.images.length  !== 0) && <Gallery photos={scr} enableImageSelection={false}/>
              }
            </div>
        )
    }
}
    


export default MyGallery;





const IMAGES =
[{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFFQON-amykpv-chlkSjTvipRKPprQfY3ivhCoh1ebqz3B1xULGQ",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFFQON-amykpv-chlkSjTvipRKPprQfY3ivhCoh1ebqz3B1xULGQ",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}


];
