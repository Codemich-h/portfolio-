import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';
import Skills from '../pages/Skills';
import Education from '../pages/Education';
import Work from '../pages/Work';
import Experience from '../pages/Experience';


function Router() {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/resume' element={<Resume />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                    <Route path='/skills' element={<Skills />}></Route>
                    <Route path='/education' element={<Education />}></Route>
                    <Route path='/work' element={<Work />}></Route>
                    <Route path='/experience' element={<Experience />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;
