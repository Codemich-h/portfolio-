import Image from '../images/bg-image.jpeg';
import SubImage from '../images/image1.avif';



function Section1() {
    const PDF_FILE = 'http://localhost:8080/resume.pdf';
    const downloadResume = (url) =>{
        const resume = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', resume);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }
    return(
        <div className='sm:text-center md:text-center mt-10'>
            <div className=''>
                <img src={Image} className='max-h-96 max-w-4xl max-auto md:min-w-full lg:w-full' />
                <h1 className='absolute top-10 left-10 mt-28 ml-12 sm:pt-1 md:mt-18 lg:mt-24 lg:ml-32 text-gray-200 text-center text-sm sm:text-lg md:text-xl lg:text-3xl font-bold'>Hi There,</h1>
                <p className='absolute top-10 left-10 mt-36 ml-12 pt-1 sm:pt-1 md:mt-38 lg:mt-30 lg:ml-32 text-gray-200 text-center text-xl md:text-2xl lg:text-3xl font-bold'>I'm Michell <strong className='text-orange-500'>Tokpah</strong></p>
                <img src={SubImage} className='absolute top-10 lg:right-24 mt-32 h-48 rounded-full hidden lg:block' />
                <p className='absolute top-24 left-10 ml-12 pt-1 text-gray-200 text-center text-lg mt-36 md:mt-36 lg:mt-36 md:text-2xl lg:text-3xl lg:ml-32 font-semibold'>I Am Into <strong className='text-yellow-400'>Software Engineer</strong></p>
                <button  onClick={() => downloadResume(PDF_FILE)} className='absolute top-10 left-10 mt-80 pt-1 ml-12 md:mt-72 lg:mt-34 lg:ml-32 hover:bg-yellow-600 text-white bg-yellow-500 border rounded-full h-10 w-32'>Resume
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='absolute top-2 left-0.50 mt-74 pt-0 ml-24 right-3 w-4 h-6'><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                </button>
            </div>
        </div>
    ) 
}

export default Section1;
