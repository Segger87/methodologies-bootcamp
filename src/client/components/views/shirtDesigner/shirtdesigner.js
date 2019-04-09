import React, {useState} from 'react';
import CanvasDraw from 'react-canvas-draw'
import {
    Box,
    Flex,
    Button,
    CanvasWrapperFront,
    CanvasWrapperLoad
} from './styles';
import ColorPicker from './colorPicker.js'
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { SliderRail, Handle, Track, Tick } from './sliders/sliders';
import frontOfShirt from './icons/tshirt.png'
import backOfShirt from './icons/backoftshirt.png'
import { ChromePicker } from 'react-color';


export default () => {
const [selectedColor, setColor] = useState(`rgba(241,112,19,1)`)
const [selectedShirtColor, setShirtColor] = useState('white')
const [selectedRadius, setRadius] = useState(1)
const [shirtOrientation, setShirtOrientation] = useState(frontOfShirt)  
const [toggleCanvas, setToggleCanvas] = useState(false)   

const domain = [1, 25];
const defaultValues = [1];

let front = '';
let back = '';
let loadableFrontCanvas = '';
let loadableBackCanvas = '';

const sliderStyle = {
    position: "relative",
    width: "100%"
};


const setColorState = ({rgb}) => {
    console.log(rgb)
    console.log(selectedColor)
    setColor(`rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`)
}

const setShirtColorState = (color) => {
    setShirtColor(color)
}

const setBrushRadius = (e) => {
    let [value] = e;
    setRadius(value)
}

const toggleShirtOrientation = (shirt) => {
    setShirtOrientation(shirt)
}

const toggleCanvasDisplay = (orientation) => {
    setToggleCanvas(!toggleCanvas)
}


return (
<Box>
    <h1>Set your brush colour</h1>
    <ChromePicker color={selectedColor} onChange={(e) => setColorState(e)}/>
           
    <Flex flexDirection='column' alignItems='center'>
        <h1>Select your shirt colour</h1>
    <Flex>
        <Flex flexDirection='column' alignItems='center'>
            <ColorPicker color='blue' />
            <Button onClick={() => setShirtColorState('blue')}>Select</Button>
        </Flex>

        <Flex flexDirection='column' alignItems='center'>
            <ColorPicker color='green'/>
            <Button onClick={() => setShirtColorState('green')}>Select</Button>
        </Flex>

        <Flex flexDirection='column' alignItems='center'>
            <ColorPicker color='red' />
            <Button onClick={() => setShirtColorState('red')}>Select</Button>
        </Flex>

        <Flex flexDirection='column' alignItems='center'>
            <ColorPicker color='black' />
            <Button onClick={() => setShirtColorState('black')}>Select</Button>
        </Flex>
    </Flex>

    </Flex>
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
        </Flex>
        <Flex flexDirection='column'>
        <Flex alignItems='center    '>
            <Button onClick={() => toggleShirtOrientation(frontOfShirt)}>Front</Button>
            <Button onClick={() => toggleShirtOrientation(backOfShirt)}>Back</Button>
        </Flex>
            <Box style={{ margin: "10%", height: 10, width: "80%" }}>
            <h1>Set your brush radius</h1>
                <Slider
                mode={2}
                step={1}
                domain={domain}
                rootStyle={sliderStyle}
                values={defaultValues}
                onChange={(e) => setBrushRadius(e)}
                >
                    <Rail>
                        {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
                    </Rail>
                    <Handles>
                        {({ handles, getHandleProps }) => (
                        <div className="slider-handles">
                            {handles.map(handle => (
                            <Handle
                                key={handle.id}
                                handle={handle}
                                domain={domain}
                                getHandleProps={getHandleProps}
                            />
                            ))}
                        </div>
                        )}
                    </Handles>
                    <Tracks left={false} right={false}>
                        {({ tracks, getTrackProps }) => (
                        <div className="slider-tracks">
                            {tracks.map(({ id, source, target }) => (
                            <Track
                                key={id}
                                source={source}
                                target={target}
                                getTrackProps={getTrackProps}
                            />
                            ))}
                        </div>
                        )}
                    </Tracks>
                    <Ticks count={10}>
                        {({ ticks }) => (
                        <div className="slider-ticks">
                            {ticks.map(tick => (
                            <Tick key={tick.id} tick={tick} count={ticks.length} />
                            ))}
                        </div>
                        )}
                    </Ticks>
                </Slider>
            </Box>
            <Box>
                <button
                onClick={() => {
                    shirtOrientation === frontOfShirt ? front.undo() : back.undo();
                }}>
                Undo
                </button>
            </Box>
            <Box>
                <button
                onClick={() => {
                localStorage.setItem(
                    "savedFrontDrawing",
                    front.getSaveData()
                );
                localStorage.setItem(
                    "savedBackDrawing",
                    back.getSaveData()
                );
                }}>
                Save
                </button>
            </Box>
            <Box>
                <button
            onClick={() => {
                toggleCanvasDisplay()
                loadableFrontCanvas.loadSaveData(
                localStorage.getItem("savedFrontDrawing")
                ) && loadableBackCanvas.loadSaveData(
                    localStorage.getItem("savedBackDrawing")
                )
            }}
            >LOAD</button>
            </Box>
       
    <Flex flexDirection='column' alignItems='center'>

    <Flex flexDirection='column' alignItems='center'>
        <h1>Select your brush colour</h1>
        <Flex>
            <Flex flexDirection='column' alignItems='center'>
                <ColorPicker color='blue' />
                <Button onClick={() => setColorState('blue')}>Select</Button>
            </Flex>

            <Flex flexDirection='column' alignItems='center'>
                <ColorPicker color='green'/>
                <Button onClick={() => setColorState('green')}>Select</Button>
            </Flex>

            <Flex flexDirection='column' alignItems='center'>
                <ColorPicker color='red' />
                <Button onClick={() => setColorState('red')}>Select</Button>
            </Flex>

            <Flex flexDirection='column' alignItems='center'>
                <ColorPicker color='black' />
                <Button onClick={() => setColorState('black')}>Select</Button>
            </Flex>
        </Flex>
    </Flex>

        </Flex>
        
    </Flex>
</Box>
)}