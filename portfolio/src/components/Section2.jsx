import CssModel from './CssModel';
import HtmlModel from './HtmlModels';
import BootstrapModel from './BootstrapModel';
import TailwindModel from './TailwindModel';
import JavascriptModel from './JavascriptModel';
import ReactJsModel from './ReactJsModel';
import GithubModel from './GithubModel';
import MySQLModel from './MySQLModel';
import FirstProject from './FirstProject';
import SecondProject from './SecondProject';
import ThirdProject from './ThirdProject';
import Footer from './Footer';




function Section2() {

    return(
        <div className='mt-8'>
            <div className='text-center mt-15 ml-72 md:ml-4 lg:ml-7 md:text-center lg:text-center font-bold md:text-2xl lg:text-3xl text-gray-500'>
                <h2>My Skills</h2>
            </div>
            <div className='flex space-x-10 mr-2 md:flex lg:flex md:ml-14 lg:ml-96 lg:mr-90 mt-10'>
               <HtmlModel />
               <CssModel />
               <BootstrapModel />
               <TailwindModel />
            </div>
            <div className='flex space-x-10 mr-4 md:flex lg:flex md:ml-14 lg:ml-96 mt-10'>
               <JavascriptModel />
               <ReactJsModel />
               <GithubModel />
               <MySQLModel />
            </div>
            <div className='text-center mt-16 ml-72 md:ml-4 lg:ml-8 md:text-center lg:text-center font-bold md:text-2xl lg:text-3xl text-gray-500'>
                <h1>My Projects</h1>
            </div>
            <div className='flex space-x-14 md:space-x-24 lg:space-x-24 md:flex lg:flex md:ml-14 lg:ml-96 ml-4 mt-10'>
                <FirstProject />
                <SecondProject />
                <ThirdProject />
            </div>
            <div className='flex space-x-14 md:space-x-24 lg:space-x-24 md:flex lg:flex md:ml-24 lg:ml-96 ml-4 mt-10'>
                <FirstProject />
                <SecondProject />
                <ThirdProject />
            </div>
            <div className='mt-24 bg-cover'>
                <Footer />
            </div>
        </div>
    )
}

export default Section2;
