import React, {useState} from 'react';
import ImageUploader from 'react-images-upload';
import { ImgBox } from './styles';

 
export default () => {

const [pictures, setPictures] = useState([])
 
   const onDrop = picture => {
        readFile(picture).then((file, dataUrl) => {
            setPictures(pictures.concat(file.dataURL))
            //console.log(pictures)
        })
    }
    const readFile=([file])=> {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          // Read the image via FileReader API and save image result in state.
          reader.onload = function (e) {
            // Add the file name to the data URL
            let dataURL = e.target.result;
            dataURL = dataURL.replace(";base64", `;name=${file.name};base64`);
            resolve({file, dataURL});
          };
    
          reader.readAsDataURL(file);
        });
      }
 
    return (
        <div>
             <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={(e) => onDrop(e)}
                imgExtension={['.jpg', '.gif', '.png', '.gif', '.svg']}
                maxFileSize={5242880}
            />

            {pictures.map((pic, index) =>(
                <ImgBox key={index}>
                    <img src={pic} alt="preview"/>
                </ImgBox>
            ))}
        </div>
       
    );
}