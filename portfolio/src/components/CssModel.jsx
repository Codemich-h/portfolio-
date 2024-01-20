import { Dialog } from "@headlessui/react";




function CssModel () {

    function openModel(){
        setIsOpen(true)
    }
    return(
        <>
            <div className='md:flex-row lg:flex-row space-x-10 md:ml-24 lg:ml-36 ml-10 mt-10'>
               <button onClick={openModel} type='button' className='border rounded-full bg-blue-500 ml-30 mt-25 md:h-32 md:w-32 text-white h-20 w-20 md:item-center'>CSS</button>
            </div>
        </>
    )
}

export default CssModel;
