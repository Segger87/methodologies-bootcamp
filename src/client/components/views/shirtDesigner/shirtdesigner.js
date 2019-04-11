import React, {useState} from 'react';
import CanvasDraw from 'react-canvas-draw'
import {
    Box,
    Flex,
    Button,
    CanvasWrapperFront,
    CanvasWrapperLoad
} from './styles';
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { SliderRail, Handle, Track, Tick } from './sliders/sliders';
import frontOfShirt from './icons/tshirt.png'
import backOfShirt from './icons/backoftshirt.png'
import { ChromePicker } from 'react-color';
import ImageUploader from './imgUpload'


export default () => {
const [selectedColor, setColor] = useState(`rgba(241,112,19,1)`)
const [selectedShirtColor, setShirtColor] = useState('white')
const [selectedRadius, setRadius] = useState(1)
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
    setColor(`rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`)
}

const setShirtColorState = (color) => {
    setShirtColor(color)
}

const setBrushRadius = (e) => {
    let [value] = e;
    setRadius(value)
}

const toggleCanvasDisplay = (orientation) => {
    setToggleCanvas(!toggleCanvas)
}


return (
<Box>
    <Flex>
        <Flex flexDirection='column'>
            <Box ml='60px'>
                <h1>Set your brush colour</h1>
                <ChromePicker color={selectedColor} onChange={(e) => setColorState(e)}/>
            </Box> 
            <Box ml='30px'>
            <h1>Select your shirt colour</h1>
                <Flex>
                    <Flex flexDirection='column' alignItems='center'>
                        <Button onClick={() => setShirtColorState('blue')} color={'blue'}>Blue</Button>
                    </Flex>

                    <Flex flexDirection='column' alignItems='center'>
                        <Button onClick={() => setShirtColorState('green')} color={'green'}>Green</Button>
                    </Flex>

                    <Flex flexDirection='column' alignItems='center'>
                        <Button onClick={() => setShirtColorState('red')} color={'red'}>Red</Button>
                    </Flex>

                    <Flex flexDirection='column' alignItems='center'>
                        <Button onClick={() => setShirtColorState('black')} color={'black'}>Black</Button>
                    </Flex>

                    <Flex flexDirection='column' alignItems='center'>
                        <Button onClick={() => setShirtColorState('white')} color={'white'}>White</Button>
                    </Flex>
                </Flex>
            </Box>
            <Box style={{ margin: "5%", height: 10, width: "100%" }}>
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
    </Flex>  
        <Flex justifyContent='center'>
            <Box mr='20px'>
                <Button
                    onClick={() => {
                        front.undo()
                        back.undo();
                }}>Undo
                </Button>
            </Box>
            <Box mr='20px'>
                <Button
                    onClick={() => {
                    localStorage.setItem(
                        "savedFrontDrawing",
                        front.getSaveData()
                    );
                    localStorage.setItem(
                        "savedBackDrawing",
                        back.getSaveData()
                    );
                }}>Save
                </Button>
            </Box>
            <Box>
                <Button
                    onClick={() => {
                        toggleCanvasDisplay()
                        loadableFrontCanvas.loadSaveData(
                        localStorage.getItem("savedFrontDrawing")
                        ) && loadableBackCanvas.loadSaveData(
                            localStorage.getItem("savedBackDrawing")
                        )
                    }}>LOAD
                </Button>
            </Box>
        </Flex>
    <ImageUploader />
</Box>
)}