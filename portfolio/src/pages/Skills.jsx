import Header from '../components/Header';
import Section1 from '../components/Section1';

function Skills() {
    return(
        <div>
            <Header />
            <Section1 />
            <div className='mt-8'>
                <div className='text-center mt-15 font-semibold md:text-2xl lg:text-3xl mr-10 text-gray-600'>
                    <h1 className='flex flex-row md:text-center'>
                    <span className='md:ml-98 ml-80 mb-4 text-lg'>Skills</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mb-2 ml-2 mt-1 md:w-6 md:h-6 md:ml-84 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" />
                        </svg>
                    </h1>
                </div>
                <div className='ml-1 mr-1 p-8 sm:ml-8 pb-80 mb-20 md:ml-36 md:mr-1 md:mt-10 bg-gray-100'>
                    <div className='flex flex-col md:flex-row sm:ml-5 md:mb-0 md:ml-10 md:mr-50 bg-white rounded space-y-0'>
                        <div className='p-30 py-20 pt-30 pr-10 pl-28 mt-2 mb-0'>
                            <div className='text-black text-bold mb-4 md:mb-10 ml-24 font-bold text-center p-1 mr-48'>
                                <p>HTML</p>
                            </div>
                            <div className>
                                <p className='text-sm mr-18'>I have a 2 years of working with HTML, I have a 2 years of working with HTML, I have a 2 years of working with HTML, I have a 2 years of working with HTML, I have a 2 years of working with HTML, I have a 2 years of working with HTML, I have a 2 years of working with HTML, I have a 2 years of working with HTML, I have a 2 years of working with HTML, I have a 2 years of working with HTML, I have a 2 years of working with HTML, I have a 2 years of working with HTML</p>
                            </div>
                        </div>
                        <div className='p-30 py-20 pt-30 pr-10 pl-28 mt-2'>
                            <div className='text-black mb-10 font-bold text-center mr-28'>
                                <p>HTML</p>
                            </div>
                            <div className>
                                <p className='text-sm '>I have a 2 years of working with HTML, I have a 2 years of working with HTML, I have a 2 years of working with HTML, I have a 2 years of working with HTML, I have a 2 years of working with HTML, I have a 2 years of working with HTML, I have a 2 years of working with HTML, I have a 2 years of working with HTML, I have a 2 years of working with HTML, I have a 2 years of working with HTML, I have a 2 years of working with HTML, I have a 2 years of working with HTML</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
