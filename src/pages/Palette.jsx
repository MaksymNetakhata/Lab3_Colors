import { Link, useParams } from 'react-router-dom';
import data from './pallete.json';
import soundFile from './src_notify.mp3';
import { useState } from 'react';

const Palette = () => {
    
    const { paletteId } = useParams();
    
    const cleanPaletteId = paletteId.slice(1);
    const selectedPalette = data.find(palette => palette.id === cleanPaletteId);

    const [isSoundOn, setIsSoundOn] = useState(true);

    const toggleSound = () => {
        setIsSoundOn(prevState => !prevState);
    };
    const handleCopy = (color) => {
        navigator.clipboard.writeText(color);

        const fullScreenColorDiv = document.createElement('div');
        fullScreenColorDiv.style.backgroundColor = color;
        fullScreenColorDiv.style.position = 'fixed';
        fullScreenColorDiv.style.top = '0';
        fullScreenColorDiv.style.left = '0';
        fullScreenColorDiv.style.width = '100%';
        fullScreenColorDiv.style.height = '100%';
        fullScreenColorDiv.style.zIndex = '9999';
        fullScreenColorDiv.style.display = 'flex';
        fullScreenColorDiv.style.justifyContent = 'center';
        fullScreenColorDiv.style.alignItems = 'center';
        fullScreenColorDiv.innerHTML = `<p style="color: white; font-size: 48px; font-family: barlow; font-weight: 600;">COLOR COPIED!</p>`;

        document.body.appendChild(fullScreenColorDiv);

        // Воспроизвести звук
        const audio = new Audio(soundFile);
        audio.volume = 0.3;
        if(isSoundOn)
        {
            audio.play();
        }

        setTimeout(() => {
            fullScreenColorDiv.remove();
        }, 1000);
        
    };

    return(
        <>
        <div className='h-screen'>
            <div className='h-[50px] pl-5 pr-5 leading-45 flex flex-row justify-space items-center'>
                <Link to={{
  pathname: "/",
}} >
    <span className='font-bold font-barlow'>← Back</span>
</Link>
<div className='absolute left-1/2 top-7p ml-n135 bg-black h-9 w-270 rounded text-center flex items-center justify-center'>
        <span className='text-white font-semibold font-barlow'>Copy Format: HEX (#AA1923)</span> 
  </div>
  <a  className='absolute right-2 font-semibold font-barlow' onClick={toggleSound}><span>{isSoundOn ? 'Sound On 🔊' : 'Sound Off 🔇'} </span></a>
            </div>
            <div className='h-[1205px]'>
            {selectedPalette.colors.map((color, i) => (
                <div className='w-1/5 float-left h-1/4 relative cursor-pointer' key={i} style={{ backgroundColor: color.color }}>
                    <a href="#" className='h-10 w-[100px] absolute left-1/2 top-1/2 leading-45 ml-n50 mt-n22 text-center flex justify-center items-center text-white border rounded border-white font-barlow' onClick={() => handleCopy(color.color)}>COPY</a>
                    <h1 className='absolute bottom-2 right-2 uppercase text-white font-semibold font-barlow'>{color.name}</h1>
                </div>

            ))
        }
        </div>
        
        <div className='float-right flex items-center justify-center leading-45 font-semibold font-barlow'>
            <span className='mt-3 mr-5'>{selectedPalette.paletteName}</span>
        </div>
        </div>

        </>
    )
}

export default Palette;