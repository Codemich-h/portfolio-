import { Dialog } from "@headlessui/react";




function SecondProject () {

    function openModel(){
        setIsOpen(true)
    }
    return(
        <>
            <div className='md:flex-col space-x-10 md:ml-14 lg:ml-9 ml-10 mt-10'>
               <button onClick={openModel} type='button' className='border rounded bg-yellow-500 ml-30 mt-18 md:h-32 md:w-32 text-white h-24 w-24 md:item-center'>Phone Book Application</button>
            </div>
        </>
    )
}

export default SecondProject;
