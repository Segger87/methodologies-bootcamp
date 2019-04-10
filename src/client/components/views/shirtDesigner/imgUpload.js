import React, {useState} from 'react';
import ImageUploader from 'react-images-upload';
 
export default () => {
 
const [pictures, setPictures] = useState([])
 
   const onDrop = picture => {
        setPictures(pictures.concat(picture))
        console.log(pictures)
    }
 
    return (
        <div>
             <ImageUploader
            withIcon={true}
            buttonText='Choose images'
            onChange={(e) => onDrop(e)}
            imgExtension={['.jpg', '.gif', '.png', '.gif', '.svg']}
            maxFileSize={5242880}
            withPreview={true}
            />

            {/* {pictures.map(pic =>(
                <div>
                    <img src={pic} alt=''/>
                </div>
            ))} */}
        </div>
       
    );
}