import '../index.css';
import Navigation from './Navigation';
import Main from './Main';
import Footer from './Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Palette from '../pages/Palette';



const Bg = () => {
    return(
        <>
        <div className="bg-blue-800 w-screen bg-stars flex flex-col items-center text-white" >
            <Navigation />
            <Main />
            <Footer />
        </div>
        </>
    )
}


export default Bg;