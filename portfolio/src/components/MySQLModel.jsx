import { Dialog } from "@headlessui/react";




function MySQLModel () {

    function openModel(){
        setIsOpen(true)
    }
    return(
        <>
            <div className='ml-8 mt-10 md:flex-col space-x-10 md:ml-14 lg:ml-9 '>
               <button onClick={openModel} type='button' className='border rounded-full bg-blue-500 ml-30  mt-25 md:h-32 md:w-32 text-white h-20 w-20 md:item-center'>Javascript</button>
            </div>
        </>
    )
}

export default MySQLModel;
