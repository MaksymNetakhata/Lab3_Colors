import '../index.css';
import Info from './Info';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Palette from '../pages/Palette';

const Main = () => {
    return(
        <>
        <div className='w-128'>
        <div className='w-128 flex flex-row justify-between'>
            <div className='w-30p mb-10'>
                <Link to={{
  pathname: "palette/:flat-ui-colors-v1",
}} 
className='h-200 flex bg-white pt-2 rounded w-full flex-col pr-2.5 pl-2.5'>
                    <div className='w-full h-4/5'>
                        <div className='w-1/5 h-1/4 float-left bg-turquoise rounded-tl'></div>
                        <div className='w-1/5 h-1/4 float-left bg-emerald'></div>
                        <div className='w-1/5 h-1/4 float-left bg-peter-river'></div>
                        <div className='w-1/5 h-1/4 float-left bg-amethyst'></div>
                        <div className='w-1/5 h-1/4 float-left bg-wet-asphalt rounded-tr'></div>

                        <div className='w-1/5 h-1/4 float-left bg-green-sea'></div>
                        <div className='w-1/5 h-1/4 float-left bg-nephritis'></div>
                        <div className='w-1/5 h-1/4 float-left bg-belize-hole'></div>
                        <div className='w-1/5 h-1/4 float-left bg-wisteria'></div>
                        <div className='w-1/5 h-1/4 float-left bg-midnight-blue'></div>

                        <div className='w-1/5 h-1/4 float-left bg-sun-flower'></div>
                        <div className='w-1/5 h-1/4 float-left bg-carrot'></div>
                        <div className='w-1/5 h-1/4 float-left bg-alizarin'></div>
                        <div className='w-1/5 h-1/4 float-left bg-clouds'></div>
                        <div className='w-1/5 h-1/4 float-left bg-concrete'></div>

                        <div className='w-1/5 h-1/4 float-left bg-orange2 rounded-bl'></div>
                        <div className='w-1/5 h-1/4 float-left bg-pumpkin'></div>
                        <div className='w-1/5 h-1/4 float-left bg-pomegranate'></div>
                        <div className='w-1/5 h-1/4 float-left bg-silver'></div>
                        <div className='w-1/5 h-1/4 float-left bg-asbestos rounded-br'></div>
                    </div>
                    
                    <div className='text-black font-semibold flex flex-row justify-between'><p className='mt-1.5'>Flat UI Palette v1</p>
                    <span className="mt-1 text-xl mr-1">🎨</span>
                    </div>
                </Link>
            </div>
            <div className='w-30p'>
                <Link to={{
                    pathname: "palette/:flat-ui-colors-american"
                }} className='h-200 flex bg-white pt-2 rounded w-full flex-col pr-2.5 pl-2.5'>
                    <div className='w-full h-4/5'>
                        <div className='w-1/5 h-1/4 float-left bg-light-greenish-blue rounded-tl'></div>
                        <div className='w-1/5 h-1/4 float-left bg-faded-poster'></div>
                        <div className='w-1/5 h-1/4 float-left bg-green-darner-tail'></div>
                        <div className='w-1/5 h-1/4 float-left bg-shy-moment'></div>
                        <div className='w-1/5 h-1/4 float-left bg-city-lights rounded-tr'></div>

                        <div className='w-1/5 h-1/4 float-left bg-mint-leaf'></div>
                        <div className='w-1/5 h-1/4 float-left bg-robins-egg-blue'></div>
                        <div className='w-1/5 h-1/4 float-left bg-electron-blue'></div>
                        <div className='w-1/5 h-1/4 float-left bg-exodus-fruit'></div>
                        <div className='w-1/5 h-1/4 float-left bg-soothing-breeze'></div>

                        <div className='w-1/5 h-1/4 float-left bg-sour-lemon'></div>
                        <div className='w-1/5 h-1/4 float-left bg-first-date'></div>
                        <div className='w-1/5 h-1/4 float-left bg-pink-glamour'></div>
                        <div className='w-1/5 h-1/4 float-left bg-pico-8-pink'></div>
                        <div className='w-1/5 h-1/4 float-left bg-american-river'></div>

                        <div className='w-1/5 h-1/4 float-left bg-bright-yarrow rounded-bl'></div>
                        <div className='w-1/5 h-1/4 float-left bg-orangeville'></div>
                        <div className='w-1/5 h-1/4 float-left bg-chs-gong'></div>
                        <div className='w-1/5 h-1/4 float-left bg-prunus-avium'></div>
                        <div className='w-1/5 h-1/4 float-left bg-dracula-orchid rounded-br'></div>
                    </div>
                    
                    <div className='text-black font-semibold flex flex-row justify-between'><p className='mt-1.5'>Flat UI Palette v1</p>
                    <span className="mt-1 text-xl mr-1">🎨</span>
                    </div>
                </Link>
            </div>
            <div className='w-30p'>
            <Link to={{
                    pathname: "palette/:flat-ui-colors-american"
                }} className='h-200 flex bg-white pt-2 rounded w-full flex-col pr-2.5 pl-2.5'>
                    <div className='w-full h-4/5'>
                    <div className='w-1/5 h-1/4 float-left bg-light-greenish-blue rounded-tl'></div>
                        <div className='w-1/5 h-1/4 float-left bg-faded-poster'></div>
                        <div className='w-1/5 h-1/4 float-left bg-green-darner-tail'></div>
                        <div className='w-1/5 h-1/4 float-left bg-shy-moment'></div>
                        <div className='w-1/5 h-1/4 float-left bg-city-lights rounded-tr'></div>

                        <div className='w-1/5 h-1/4 float-left bg-mint-leaf'></div>
                        <div className='w-1/5 h-1/4 float-left bg-robins-egg-blue'></div>
                        <div className='w-1/5 h-1/4 float-left bg-electron-blue'></div>
                        <div className='w-1/5 h-1/4 float-left bg-exodus-fruit'></div>
                        <div className='w-1/5 h-1/4 float-left bg-soothing-breeze'></div>

                        <div className='w-1/5 h-1/4 float-left bg-sour-lemon'></div>
                        <div className='w-1/5 h-1/4 float-left bg-first-date'></div>
                        <div className='w-1/5 h-1/4 float-left bg-pink-glamour'></div>
                        <div className='w-1/5 h-1/4 float-left bg-pico-8-pink'></div>
                        <div className='w-1/5 h-1/4 float-left bg-american-river'></div>

                        <div className='w-1/5 h-1/4 float-left bg-bright-yarrow rounded-bl'></div>
                        <div className='w-1/5 h-1/4 float-left bg-orangeville'></div>
                        <div className='w-1/5 h-1/4 float-left bg-chs-gong'></div>
                        <div className='w-1/5 h-1/4 float-left bg-prunus-avium'></div>
                        <div className='w-1/5 h-1/4 float-left bg-dracula-orchid rounded-br'></div>
                    </div>
                    
                    <div className='text-black font-semibold flex flex-row justify-between'><p className='mt-1.5'>American Palette</p>
                    <span className="mt-1 text-xl mr-1">🎨</span>
                    </div>
                </Link>
            </div>
        </div>
            <div className='w-full mb-10'>
                <div className='flex justify-around p-3 h-14 bg-secondary rounded font-semibold'>
                <a href="https://base.usepanda.com/sources/B1vYMjKL6" className='mt-1'>
                🙌 Design with Webflow
                </a>
                <a href="https://base.usepanda.com/sources/rkBpKfmNT" className='mt-1'>
                🖐 Figma / Framer Components
                </a>

                <a href="https://base.usepanda.com/sources/HkbxQgv86" className='mt-1' >
                👋 Auto-Zoom Recorder
                </a>
                </div>
            </div>
            <div className='w-128 flex flex-row justify-between'>
            <div className='w-30p mb-10'>
            <Link to={{
                    pathname: "palette/:flat-ui-colors-aussie"
                }} className='h-200 flex bg-white pt-2 rounded w-full flex-col pr-2.5 pl-2.5'>
                    <div className='w-full h-4/5'>
                    <div className='w-1/5 h-1/4 float-left bg-beekeeper rounded-tl'></div>
                        <div className='w-1/5 h-1/4 float-left bg-spiced-nectarine'></div>
                        <div className='w-1/5 h-1/4 float-left bg-pink-glamour'></div>
                        <div className='w-1/5 h-1/4 float-left bg-june-bud'></div>
                        <div className='w-1/5 h-1/4 float-left bg-coastal-breeze rounded-tr'></div>

                        <div className='w-1/5 h-1/4 float-left bg-turbo'></div>
                        <div className='w-1/5 h-1/4 float-left bg-quince-jelly'></div>
                        <div className='w-1/5 h-1/4 float-left bg-carmine-pink'></div>
                        <div className='w-1/5 h-1/4 float-left bg-pure-apple'></div>
                        <div className='w-1/5 h-1/4 float-left bg-hint-of-ice-pack'></div>

                        <div className='w-1/5 h-1/4 float-left bg-middle-blue'></div>
                        <div className='w-1/5 h-1/4 float-left bg-heliotope'></div>
                        <div className='w-1/5 h-1/4 float-left bg-exodus-fruit'></div>
                        <div className='w-1/5 h-1/4 float-left bg-deep-koamaru'></div>
                        <div className='w-1/5 h-1/4 float-left bg-soaring-eagle'></div>

                        <div className='w-1/5 h-1/4 float-left bg-greenland-green rounded-bl'></div>
                        <div className='w-1/5 h-1/4 float-left bg-steel-pink'></div>
                        <div className='w-1/5 h-1/4 float-left bg-blurple'></div>
                        <div className='w-1/5 h-1/4 float-left bg-deep-cove'></div>
                        <div className='w-1/5 h-1/4 float-left bg-wizard-grey rounded-br'></div>
                    </div>
                    
                    <div className='text-black font-semibold flex flex-row justify-between'><p className='mt-1.5'>Aussie Palette</p>
                    <span className="mt-1 text-xl mr-1">🎨</span>
                    </div>
                </Link>
            </div>
            <div className='w-30p'>
            <Link to={{
                    pathname: "palette/:flat-ui-colors-british"
                }} className='h-200 flex bg-white pt-2 rounded w-full flex-col pr-2.5 pl-2.5'>
                    <div className='w-full h-4/5'>
                        <div className='w-1/5 h-1/4 float-left bg-protoss-pylon rounded-tl'></div>
                        <div className='w-1/5 h-1/4 float-left bg-periwinkle'></div>
                        <div className='w-1/5 h-1/4 float-left bg-rise-n-shine'></div>
                        <div className='w-1/5 h-1/4 float-left bg-download-progress'></div>
                        <div className='w-1/5 h-1/4 float-left bg-seabrook rounded-tr'></div>

                        <div className='w-1/5 h-1/4 float-left bg-vanadyl-blue'></div>
                        <div className='w-1/5 h-1/4 float-left bg-matt-purple'></div>
                        <div className='w-1/5 h-1/4 float-left bg-nanohanacha-gold'></div>
                        <div className='w-1/5 h-1/4 float-left bg-skirret-green'></div>
                        <div className='w-1/5 h-1/4 float-left bg-naval'></div>

                        <div className='w-1/5 h-1/4 float-left bg-nasturcian-flower'></div>
                        <div className='w-1/5 h-1/4 float-left bg-lynx-white'></div>
                        <div className='w-1/5 h-1/4 float-left bg-blueberry-soda'></div>
                        <div className='w-1/5 h-1/4 float-left bg-mazarine-blue'></div>
                        <div className='w-1/5 h-1/4 float-left bg-blue-nights'></div>

                        <div className='w-1/5 h-1/4 float-left bg-harley-davidson-orange rounded-bl'></div>
                        <div className='w-1/5 h-1/4 float-left bg-hint-of-pensive'></div>
                        <div className='w-1/5 h-1/4 float-left bg-chain-gang-grey'></div>
                        <div className='w-1/5 h-1/4 float-left bg-pico-void'></div>
                        <div className='w-1/5 h-1/4 float-left bg-electromagnetic rounded-br'></div>
                    </div>
                    
                    <div className='text-black font-semibold flex flex-row justify-between'><p className='mt-1.5'>British Palette</p>
                    <span className="mt-1 text-xl mr-1">🎨</span>
                    </div>
                </Link>
            </div>
            <div className='w-30p'>
            <Link to={{
                    pathname: "palette/:flat-ui-colors-canadian"
                }} className='h-200 flex bg-white pt-2 rounded w-full flex-col pr-2.5 pl-2.5'>
                    <div className='w-full h-4/5'>
                        <div className='w-1/5 h-1/4 float-left bg-jiglypuff rounded-tl'></div>
                        <div className='w-1/5 h-1/4 float-left bg-casandora-yellow'></div>
                        <div className='w-1/5 h-1/4 float-left bg-pastel-red'></div>
                        <div className='w-1/5 h-1/4 float-left bg-megaman'></div>
                        <div className='w-1/5 h-1/4 float-left bg-wild-caribbean-green rounded-tr'></div>

                        <div className='w-1/5 h-1/4 float-left bg-lian-hong-lotus-pink'></div>
                        <div className='w-1/5 h-1/4 float-left bg-double-dragon-skin'></div>
                        <div className='w-1/5 h-1/4 float-left bg-amour'></div>
                        <div className='w-1/5 h-1/4 float-left bg-cyanite'></div>
                        <div className='w-1/5 h-1/4 float-left bg-dark-mountain-meadow'></div>

                        <div className='w-1/5 h-1/4 float-left bg-jade-dust'></div>
                        <div className='w-1/5 h-1/4 float-left bg-joust-blue'></div>
                        <div className='w-1/5 h-1/4 float-left bg-nasu-purple'></div>
                        <div className='w-1/5 h-1/4 float-left bg-light-blue-balerina'></div>
                        <div className='w-1/5 h-1/4 float-left bg-fuel-town'></div>

                        <div className='w-1/5 h-1/4 float-left bg-aqua-velvet rounded-bl'></div>
                        <div className='w-1/5 h-1/4 float-left bg-bleu-de-france'></div>
                        <div className='w-1/5 h-1/4 float-left bg-bluebell'></div>
                        <div className='w-1/5 h-1/4 float-left bg-storm-petrel'></div>
                        <div className='w-1/5 h-1/4 float-left bg-imperial-primer rounded-br'></div>
                    </div>
                    
                    <div className='text-black font-semibold flex flex-row justify-between'><p className='mt-1.5'>Canadian Palette</p>
                    <span className="mt-1 text-xl mr-1">🎨</span>
                    </div>
                </Link>
            </div>
        </div>
        <div className='w-128 flex flex-row justify-between'>
            <div className='w-30p mb-10'>
            <Link to={{
                    pathname: "palette/:flat-ui-colors-chinese"
                }} className='h-200 flex bg-white pt-2 rounded w-full flex-col pr-2.5 pl-2.5'>
                    <div className='w-full h-4/5'>
                        <div className='w-1/5 h-1/4 float-left bg-golden-sand rounded-tl'></div>
                        <div className='w-1/5 h-1/4 float-left bg-coral'></div>
                        <div className='w-1/5 h-1/4 float-left bg-wild-watermelon'></div>
                        <div className='w-1/5 h-1/4 float-left bg-peace'></div>
                        <div className='w-1/5 h-1/4 float-left bg-grisaille rounded-tr'></div>

                        <div className='w-1/5 h-1/4 float-left bg-orange'></div>
                        <div className='w-1/5 h-1/4 float-left bg-bruschetta-tomato'></div>
                        <div className='w-1/5 h-1/4 float-left bg-watermelon'></div>
                        <div className='w-1/5 h-1/4 float-left bg-bay-wharf'></div>
                        <div className='w-1/5 h-1/4 float-left bg-prestige-blue'></div>

                        <div className='w-1/5 h-1/4 float-left bg-lime-soap'></div>
                        <div className='w-1/5 h-1/4 float-left bg-french-sky-blue'></div>
                        <div className='w-1/5 h-1/4 float-left bg-saturated-sky'></div>
                        <div className='w-1/5 h-1/4 float-left bg-white'></div>
                        <div className='w-1/5 h-1/4 float-left bg-city-lights'></div>

                        <div className='w-1/5 h-1/4 float-left bg-ufo-green rounded-bl'></div>
                        <div className='w-1/5 h-1/4 float-left bg-clear-chill'></div>
                        <div className='w-1/5 h-1/4 float-left bg-bright-greek'></div>
                        <div className='w-1/5 h-1/4 float-left bg-anti-flash-white'></div>
                        <div className='w-1/5 h-1/4 float-left bg-twinkle-blue rounded-br'></div>
                    </div>
                    
                    <div className='text-black font-semibold flex flex-row justify-between'><p className='mt-1.5'>Chinese Palette</p>
                    <span className="mt-1 text-xl mr-1">🎨</span>
                    </div>
                </Link>
            </div>
            <div className='w-30p'>
            <Link to={{
                    pathname: "palette/:flat-ui-colors-dutch"
                }} className='h-200 flex bg-white pt-2 rounded w-full flex-col pr-2.5 pl-2.5'>
                    <div className='w-full h-4/5'>
                        <div className='w-1/5 h-1/4 float-left bg-sunflower rounded-tl'></div>
                        <div className='w-1/5 h-1/4 float-left bg-energos'></div>
                        <div className='w-1/5 h-1/4 float-left bg-blue-martina'></div>
                        <div className='w-1/5 h-1/4 float-left bg-lavender-rose'></div>
                        <div className='w-1/5 h-1/4 float-left bg-bara-red rounded-tr'></div>

                        <div className='w-1/5 h-1/4 float-left bg-radiant-yellow'></div>
                        <div className='w-1/5 h-1/4 float-left bg-android-green'></div>
                        <div className='w-1/5 h-1/4 float-left bg-mediterranean-sea'></div>
                        <div className='w-1/5 h-1/4 float-left bg-lavender-tea'></div>
                        <div className='w-1/5 h-1/4 float-left bg-very-berry'></div>

                        <div className='w-1/5 h-1/4 float-left bg-puffins-bill'></div>
                        <div className='w-1/5 h-1/4 float-left bg-pixelated-grass'></div>
                        <div className='w-1/5 h-1/4 float-left bg-merchant-marine-blue'></div>
                        <div className='w-1/5 h-1/4 float-left bg-forgotten-purple'></div>
                        <div className='w-1/5 h-1/4 float-left bg-hollyhock'></div>

                        <div className='w-1/5 h-1/4 float-left bg-red-pigment rounded-bl'></div>
                        <div className='w-1/5 h-1/4 float-left bg-turkish-aqua'></div>
                        <div className='w-1/5 h-1/4 float-left bg-20000-leagues-under-the-sea'></div>
                        <div className='w-1/5 h-1/4 float-left bg-circumorbital-ring'></div>
                        <div className='w-1/5 h-1/4 float-left bg-magenta-purple rounded-br'></div>
                    </div>
                    
                    <div className='text-black font-semibold flex flex-row justify-between'><p className='mt-1.5'>Dutch Palette</p>
                    <span className="mt-1 text-xl mr-1">🎨</span>
                    </div>
                </Link>
            </div>
            <div className='w-30p'>
            <Link to={{
                    pathname: "palette/:flat-ui-colors-french"
                }} className='h-200 flex bg-white pt-2 rounded w-full flex-col pr-2.5 pl-2.5'>
                    <div className='w-full h-4/5'>
                        <div className='w-1/5 h-1/4 float-left bg-flat-flesh rounded-tl'></div>
                        <div className='w-1/5 h-1/4 float-left bg-melon-melody'></div>
                        <div className='w-1/5 h-1/4 float-left bg-livid'></div>
                        <div className='w-1/5 h-1/4 float-left bg-spray'></div>
                        <div className='w-1/5 h-1/4 float-left bg-paradis-green rounded-tr'></div>

                        <div className='w-1/5 h-1/4 float-left bg-squash-blossom'></div>
                        <div className='w-1/5 h-1/4 float-left bg-mandarin-red'></div>
                        <div className='w-1/5 h-1/4 float-left bg-azraq-blue'></div>
                        <div className='w-1/5 h-1/4 float-left bg-dupain'></div>
                        <div className='w-1/5 h-1/4 float-left bg-aurora-green'></div>

                        <div className='w-1/5 h-1/4 float-left bg-iceland-poppy'></div>
                        <div className='w-1/5 h-1/4 float-left bg-tomato-red'></div>
                        <div className='w-1/5 h-1/4 float-left bg-yue-guang-lan-blue'></div>
                        <div className='w-1/5 h-1/4 float-left bg-light-good-samaritan'></div>
                        <div className='w-1/5 h-1/4 float-left bg-waterfall'></div>

                        <div className='w-1/5 h-1/4 float-left bg-carrot-orange rounded-bl'></div>
                        <div className='w-1/5 h-1/4 float-left bg-jalapeno-red'></div>
                        <div className='w-1/5 h-1/4 float-left bg-dark-sapphire'></div>
                        <div className='w-1/5 h-1/4 float-left bg-forest-blues'></div>
                        <div className='w-1/5 h-1/4 float-left bg-reef-encounter rounded-br'></div>
                    </div>
                    
                    <div className='text-black font-semibold flex flex-row justify-between'><p className='mt-1.5'>French Palette</p>
                    <span className="mt-1 text-xl mr-1">🎨</span>
                    </div>
                </Link>
            </div>
        </div>
        <div className='w-128 flex flex-row justify-between'>
            <div className='w-30p mb-10'>
            <Link to={{
                    pathname: "palette/:flat-ui-colors-german"
                }} className='h-200 flex bg-white pt-2 rounded w-full flex-col pr-2.5 pl-2.5'>
                    <div className='w-full h-4/5'>
                        <div className='w-1/5 h-1/4 float-left bg-fusion-red rounded-tl'></div>
                        <div className='w-1/5 h-1/4 float-left bg-orange-hibiscus'></div>
                        <div className='w-1/5 h-1/4 float-left bg-flirtatious'></div>
                        <div className='w-1/5 h-1/4 float-left bg-reptile-green'></div>
                        <div className='w-1/5 h-1/4 float-left bg-maximum-blue-green rounded-tr'></div>

                        <div className='w-1/5 h-1/4 float-left bg-desire'></div>
                        <div className='w-1/5 h-1/4 float-left bg-beniukon-bronze'></div>
                        <div className='w-1/5 h-1/4 float-left bg-nyc-taxi'></div>
                        <div className='w-1/5 h-1/4 float-left bg-algal-fuel'></div>
                        <div className='w-1/5 h-1/4 float-left bg-turquoise-topaz'></div>

                        <div className='w-1/5 h-1/4 float-left bg-high-blue'></div>
                        <div className='w-1/5 h-1/4 float-left bg-c64-ntsc'></div>
                        <div className='w-1/5 h-1/4 float-left bg-lighter-purple'></div>
                        <div className='w-1/5 h-1/4 float-left bg-twinkle-blue'></div>
                        <div className='w-1/5 h-1/4 float-left bg-blue-grey'></div>

                        <div className='w-1/5 h-1/4 float-left bg-boyzone rounded-bl'></div>
                        <div className='w-1/5 h-1/4 float-left bg-royal-blue'></div>
                        <div className='w-1/5 h-1/4 float-left bg-gloomy-purple'></div>
                        <div className='w-1/5 h-1/4 float-left bg-innuendo'></div>
                        <div className='w-1/5 h-1/4 float-left bg-blue-horizon rounded-br'></div>
                    </div>
                    
                    <div className='text-black font-semibold flex flex-row justify-between'><p className='mt-1.5'>German Palette</p>
                    <span className="mt-1 text-xl mr-1">🎨</span>
                    </div>
                </Link>
            </div>
            <div className='w-30p'>
            <Link to={{
                    pathname: "palette/:flat-ui-colors-indian"
                }} className='h-200 flex bg-white pt-2 rounded w-full flex-col pr-2.5 pl-2.5'>
                    <div className='w-full h-4/5'>
                        <div className='w-1/5 h-1/4 float-left bg-orchid-orange rounded-tl'></div>
                        <div className='w-1/5 h-1/4 float-left bg-spiro-disco-ball'></div>
                        <div className='w-1/5 h-1/4 float-left bg-honey-glow'></div>
                        <div className='w-1/5 h-1/4 float-left bg-sweet-garden'></div>
                        <div className='w-1/5 h-1/4 float-left bg-falling-star rounded-tr'></div>

                        <div className='w-1/5 h-1/4 float-left bg-rich-gardenia'></div>
                        <div className='w-1/5 h-1/4 float-left bg-clear-chill'></div>
                        <div className='w-1/5 h-1/4 float-left bg-sarawak-white-pepper'></div>
                        <div className='w-1/5 h-1/4 float-left bg-keppel'></div>
                        <div className='w-1/5 h-1/4 float-left bg-ships-officer'></div>

                        <div className='w-1/5 h-1/4 float-left bg-fiery-fuchsia'></div>
                        <div className='w-1/5 h-1/4 float-left bg-bluebell'></div>
                        <div className='w-1/5 h-1/4 float-left bg-georgia-peach'></div>
                        <div className='w-1/5 h-1/4 float-left bg-oasis-stream'></div>
                        <div className='w-1/5 h-1/4 float-left bg-bright-ube'></div>

                        <div className='w-1/5 h-1/4 float-left bg-magenta-purple rounded-bl'></div>
                        <div className='w-1/5 h-1/4 float-left bg-ending-navy-blue'></div>
                        <div className='w-1/5 h-1/4 float-left bg-sasquatch-socks'></div>
                        <div className='w-1/5 h-1/4 float-left bg-pine-glade'></div>
                        <div className='w-1/5 h-1/4 float-left bg-highlighter-lavender rounded-br'></div>
                    </div>
                    
                    <div className='text-black font-semibold flex flex-row justify-between'><p className='mt-1.5'>Indian Palette</p>
                    <span className="mt-1 text-xl mr-1">🎨</span>
                    </div>
                </Link>
            </div>
            <div className='w-30p'>
            <Link to={{
                    pathname: "palette/:flat-ui-colors-russian"
                }} className='h-200 flex bg-white pt-2 rounded w-full flex-col pr-2.5 pl-2.5'>
                    <div className='w-full h-4/5'>
                        <div className='w-1/5 h-1/4 float-left bg-creamy-peach rounded-tl'></div>
                        <div className='w-1/5 h-1/4 float-left bg-rosy-highlight'></div>
                        <div className='w-1/5 h-1/4 float-left bg-soft-blue'></div>
                        <div className='w-1/5 h-1/4 float-left bg-brewed-mustard'></div>
                        <div className='w-1/5 h-1/4 float-left bg-old-geranium rounded-tr'></div>

                        <div className='w-1/5 h-1/4 float-left bg-sawtooth-aak'></div>
                        <div className='w-1/5 h-1/4 float-left bg-summertime'></div>
                        <div className='w-1/5 h-1/4 float-left bg-cornflower'></div>
                        <div className='w-1/5 h-1/4 float-left bg-tigerlily'></div>
                        <div className='w-1/5 h-1/4 float-left bg-deep-rose'></div>

                        <div className='w-1/5 h-1/4 float-left bg-purple-mountaint-majesty'></div>
                        <div className='w-1/5 h-1/4 float-left bg-rogue-pink'></div>
                        <div className='w-1/5 h-1/4 float-left bg-squeaky'></div>
                        <div className='w-1/5 h-1/4 float-left bg-apple-valley'></div>
                        <div className='w-1/5 h-1/4 float-left bg-pencil-lead'></div>

                        <div className='w-1/5 h-1/4 float-left bg-purple-corallite rounded-bl'></div>
                        <div className='w-1/5 h-1/4 float-left bg-flamingo-pink'></div>
                        <div className='w-1/5 h-1/4 float-left bg-blue-curacao'></div>
                        <div className='w-1/5 h-1/4 float-left bg-porcelain-rose'></div>
                        <div className='w-1/5 h-1/4 float-left bg-biscay rounded-br'></div>
                    </div>
                    
                    <div className='text-black font-semibold flex flex-row justify-between'><p className='mt-1.5'>Russian Palette</p>
                    <span className="mt-1 text-xl mr-1">🎨</span>
                    </div>
                </Link>
            </div>
        </div>
        <div className='w-128 flex flex-row justify-between'>
            <div className='w-30p mb-10'>
            <Link to={{
                    pathname: "palette/:flat-ui-colors-spanish"
                }} className='h-200 flex bg-white pt-2 rounded w-full flex-col pr-2.5 pl-2.5'>
                    <div className='w-full h-4/5'>
                        <div className='w-1/5 h-1/4 float-left bg-jacksons-purple rounded-tl'></div>
                        <div className='w-1/5 h-1/4 float-left bg-c64-purple'></div>
                        <div className='w-1/5 h-1/4 float-left bg-swan-white'></div>
                        <div className='w-1/5 h-1/4 float-left bg-summer-sky'></div>
                        <div className='w-1/5 h-1/4 float-left bg-celestial-green rounded-tr'></div>

                        <div className='w-1/5 h-1/4 float-left bg-lucky-point'></div>
                        <div className='w-1/5 h-1/4 float-left bg-liberty'></div>
                        <div className='w-1/5 h-1/4 float-left bg-hot-stone'></div>
                        <div className='w-1/5 h-1/4 float-left bg-devil-blue'></div>
                        <div className='w-1/5 h-1/4 float-left bg-palm-springs-splash'></div>

                        <div className='w-1/5 h-1/4 float-left bg-fluorescent-red'></div>
                        <div className='w-1/5 h-1/4 float-left bg-synthetic-pumpkin'></div>
                        <div className='w-1/5 h-1/4 float-left bg-crocodile-tooth'></div>
                        <div className='w-1/5 h-1/4 float-left bg-mandarin-sorbet2'></div>
                        <div className='w-1/5 h-1/4 float-left bg-spiced-butternut'></div>

                        <div className='w-1/5 h-1/4 float-left bg-eye-of-newt rounded-bl'></div>
                        <div className='w-1/5 h-1/4 float-left bg-chilean-fire'></div>
                        <div className='w-1/5 h-1/4 float-left bg-grey-porcelain'></div>
                        <div className='w-1/5 h-1/4 float-left bg-alameda-ochre'></div>
                        <div className='w-1/5 h-1/4 float-left bg-desert rounded-br'></div>
                    </div>
                    
                    <div className='text-black font-semibold flex flex-row justify-between'><p className='mt-1.5'>Spanish Palette</p>
                    <span className="mt-1 text-xl mr-1">🎨</span>
                    </div>
                </Link>
            </div>
            <div className='w-30p'>
            <Link to={{
                    pathname: "palette/:flat-ui-colors-swedish"
                }} className='h-200 flex bg-white pt-2 rounded w-full flex-col pr-2.5 pl-2.5'>
                    <div className='w-full h-4/5'>
                        <div className='w-1/5 h-1/4 float-left bg-highlighter-pink rounded-tl'></div>
                        <div className='w-1/5 h-1/4 float-left bg-dark-periwinkle'></div>
                        <div className='w-1/5 h-1/4 float-left bg-megaman2'></div>
                        <div className='w-1/5 h-1/4 float-left bg-fresh-turquoise'></div>
                        <div className='w-1/5 h-1/4 float-left bg-minty-green rounded-tr'></div>

                        <div className='w-1/5 h-1/4 float-left bg-sizzling-red'></div>
                        <div className='w-1/5 h-1/4 float-left bg-free-speech-blue'></div>
                        <div className='w-1/5 h-1/4 float-left bg-spiro-disco-ball2'></div>
                        <div className='w-1/5 h-1/4 float-left bg-jade-dust'></div>
                        <div className='w-1/5 h-1/4 float-left bg-green-teal'></div>

                        <div className='w-1/5 h-1/4 float-left bg-narenji-orange'></div>
                        <div className='w-1/5 h-1/4 float-left bg-yriel-yellow'></div>
                        <div className='w-1/5 h-1/4 float-left bg-sunset-orange'></div>
                        <div className='w-1/5 h-1/4 float-left bg-hint-of-elusive-blue'></div>
                        <div className='w-1/5 h-1/4 float-left bg-good-night'></div>

                        <div className='w-1/5 h-1/4 float-left bg-chrome-yellow rounded-bl'></div>
                        <div className='w-1/5 h-1/4 float-left bg-vibrant-yellow'></div>
                        <div className='w-1/5 h-1/4 float-left bg-red-orange'></div>
                        <div className='w-1/5 h-1/4 float-left bg-london-square'></div>
                        <div className='w-1/5 h-1/4 float-left bg-black-pearl rounded-br'></div>
                    </div>
                    
                    <div className='text-black font-semibold flex flex-row justify-between'><p className='mt-1.5'>Swedish Palette</p>
                    <span className="mt-1 text-xl mr-1">🎨</span>
                    </div>
                </Link>
            </div>
            <div className='w-30p'>
            <Link to={{
                    pathname: "palette/:flat-ui-colors-turkish"
                }} className='h-200 flex bg-white pt-2 rounded w-full flex-col pr-2.5 pl-2.5'>
                    <div className='w-full h-4/5'>
                        <div className='w-1/5 h-1/4 float-left bg-flat-flesh rounded-tl'></div>
                        <div className='w-1/5 h-1/4 float-left bg-melon-melody'></div>
                        <div className='w-1/5 h-1/4 float-left bg-livid'></div>
                        <div className='w-1/5 h-1/4 float-left bg-spray'></div>
                        <div className='w-1/5 h-1/4 float-left bg-paradis-green rounded-tr'></div>

                        <div className='w-1/5 h-1/4 float-left bg-squash-blossom'></div>
                        <div className='w-1/5 h-1/4 float-left bg-mandarin-red'></div>
                        <div className='w-1/5 h-1/4 float-left bg-azraq-blue'></div>
                        <div className='w-1/5 h-1/4 float-left bg-dupain'></div>
                        <div className='w-1/5 h-1/4 float-left bg-aurora-green'></div>

                        <div className='w-1/5 h-1/4 float-left bg-iceland-poppy'></div>
                        <div className='w-1/5 h-1/4 float-left bg-tomato-red'></div>
                        <div className='w-1/5 h-1/4 float-left bg-yue-guang-lan-blue'></div>
                        <div className='w-1/5 h-1/4 float-left bg-light-good-samaritan'></div>
                        <div className='w-1/5 h-1/4 float-left bg-waterfall'></div>

                        <div className='w-1/5 h-1/4 float-left bg-carrot-orange rounded-bl'></div>
                        <div className='w-1/5 h-1/4 float-left bg-jalapeno-red'></div>
                        <div className='w-1/5 h-1/4 float-left bg-dark-sapphire'></div>
                        <div className='w-1/5 h-1/4 float-left bg-forest-blues'></div>
                        <div className='w-1/5 h-1/4 float-left bg-reef-encounter rounded-br'></div>
                    </div>
                    
                    <div className='text-black font-semibold flex flex-row justify-between'><p className='mt-1.5'>Turkish Palette</p>
                    <span className="mt-1 text-xl mr-1">🎨</span>
                    </div>
                </Link>
            </div>
            </div>
            <div className='w-full mb-10'>
                <div className='flex justify-around p-3 h-14 bg-secondary rounded font-semibold mb-10'>
                <a href="https://base.usepanda.com/sources/B1vYMjKL6" className='mt-1'>
                
                💞&nbsp;&nbsp;&nbsp;&nbsp;Tweet and share your love for Flat UI Colors &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
  
                </a>
                </div>
            </div>

            <Info />
        </div>
        
        
        </>
    )
}

export default Main;