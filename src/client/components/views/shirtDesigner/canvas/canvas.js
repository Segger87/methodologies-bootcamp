import React, {useState} from 'react'
import { Flex, Box, CanvasWrapperFront, CanvasWrapperLoad } from '../styles';
import CanvasDraw from 'react-canvas-draw'
import frontOfShirt from '../icons/tshirt.png'
import backOfShirt from '../icons/backoftshirt.png'


export default ({toggleCanvas, selectedColor, selectedRadius, selectedShirtColor, shirtOrientation }) =>{
 
    let front = '';
    let back = '';
    let loadableFrontCanvas = '';
    let loadableBackCanvas = '';

return(
<Flex>
        <CanvasWrapperFront showCanvas={!toggleCanvas}>
            <Box>
                <CanvasDraw
                ref={canvasDraw => (front = canvasDraw)}
                canvasHeight='600px'
                canvasWidth='500px'
                brushColor={selectedColor}
                brushRadius={selectedRadius}
                gridColor="rgba(150,150,150,0.2)"
                backgroundColor={selectedShirtColor}
                catenaryColor={selectedColor}
                imgSrc={frontOfShirt}
            /> 
            </Box>
            <Box>
                <CanvasDraw
                    ref={canvasDraw => (back = canvasDraw)}
                    canvasHeight='600px'
                    canvasWidth='500px'
                    brushColor={selectedColor}
                    brushRadius={selectedRadius}
                    gridColor="rgba(150,150,150,0.2)"
                    backgroundColor={selectedShirtColor}
                    catenaryColor={selectedColor}
                    imgSrc={backOfShirt}
                /> 
            </Box>
            </CanvasWrapperFront>
            <CanvasWrapperLoad showCanvas={toggleCanvas}>
                <Box>
                    <CanvasDraw
                        disabled
                        ref={canvasDraw => (loadableFrontCanvas = canvasDraw)}
                        saveData={localStorage.getItem("savedFrontDrawing")}
                        canvasHeight='600px'
                        canvasWidth='500px'
                        brushColor={selectedColor}
                        brushRadius={selectedRadius}
                        gridColor="rgba(150,150,150,0.2)"
                        backgroundColor={selectedShirtColor}
                        catenaryColor={selectedColor}
                        imgSrc={frontOfShirt}
                        loadTimeOffset={20}
                    />
                </Box>
                <Box>
                    <CanvasDraw
                        disabled
                        ref={canvasDraw => (loadableBackCanvas = canvasDraw)}
                        saveData={localStorage.getItem("savedBackDrawing")}
                        canvasHeight='600px'
                        canvasWidth='500px'
                        brushColor={selectedColor}
                        brushRadius={selectedRadius}
                        gridColor="rgba(150,150,150,0.2)"
                        backgroundColor={selectedShirtColor}
                        catenaryColor={selectedColor}
                        imgSrc={backOfShirt}
                        loadTimeOffset={20} 
                    />
                </Box>
            </CanvasWrapperLoad>
            <button
            onClick={() => {
                shirtOrientation === frontOfShirt ? front.undo() : back.undo();
            }}
          >
            Undo
          </button>
          <button
            onClick={() => {
              localStorage.setItem(
                shirtOrientation === frontOfShirt ? "savedFrontDrawing" : "savedBackDrawing",
                shirtOrientation === frontOfShirt ? front.getSaveData() : back.getSaveData()
              );
            }}
          >
          Save
          </button>
          
    </Flex>
)}