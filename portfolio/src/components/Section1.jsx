import Image from '../images/bg-image.jpeg';
import SubImage from '../images/image1.avif';

function Section1() {


    return(
        <div className='text-center mt-10'>
            <div className=''>
                <img src={Image} className='max-h-96 w-full' />
                <h1 className='absolute top-10 left-10 mt-32 ml-28 pt-1 text-gray-200 text-center text-3xl font-bold'>Hi There,</h1>
                <p className='absolute top-10 left-10 mt-48 ml-28 pt-1 text-gray-200 text-center text-3xl font-bold'>I'm Michell <strong className='text-orange-500'>Tokpah</strong></p>
                <img src={SubImage} className='absolute top-10 right-80 mt-32 h-48 rounded-full' />
                <p className='absolute top-24 left-10 mt-48 ml-28 pt-1 text-gray-200 text-center text-lg font-semibold'>I Am Into <strong className='text-yellow-400'>Software Engineer</strong></p>
            </div>
            <div>
                <h1 className='flex flex-left w-small'></h1>
            </div>
        </div>
    ) 
}

export default Section1;
