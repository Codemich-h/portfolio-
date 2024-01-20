import { Dialog } from "@headlessui/react";




function TailwindModel () {

    function openModel(){
        setIsOpen(true)
    }
    return(
        <>
            <div className='md:flex-col space-x-10 md:ml-14 lg:ml-9 ml-10 mt-10'>
               <button onClick={openModel} type='button' className='border rounded-full bg-blue-500 ml-30 mt-25 md:h-32 md:w-32 text-white h-20 w-20 md:item-center'>Tailwind</button>
            </div>
        </>
    )
}

export default TailwindModel;
