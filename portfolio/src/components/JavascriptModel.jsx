import { Dialog } from "@headlessui/react";




function JavascriptModel () {

    function openModel(){
        setIsOpen(true)
    }
    return(
        <>
            <div className='md:flex-col space-x-10 lg:ml-38.50 2xl:-ml-40 md:ml-14 ml-24 mt-10'>
               <button onClick={openModel} type='button' className='border rounded-full bg-blue-500 ml-30 mt-25 md:h-32 md:w-32 text-white h-20 w-20 md:item-center'>Javascript</button>
            </div>
        </>
    )
}
export default JavascriptModel;
