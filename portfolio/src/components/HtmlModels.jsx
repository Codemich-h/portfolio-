import { Dialog, Transition } from "@headlessui/react";
import {useState, Fragment} from 'react';




function HtmlModel () {
    const [isOpen, setIsOpen] = useState(true)

    function openModel(){
        setIsOpen(true);
    }

    function closeModel () {
        setIsOpen(false);
    }
    return(
        <>
            <div className='md:flex-col space-x-10 md:ml-14 lg:ml-38.50 2xl:-ml-40 ml-24 mt-10'>
               <button onClick={openModel} type='button' className='border rounded-full bg-blue-500 ml-30 mt-25 md:h-32 md:w-32 text-white h-20 w-20 md:item-center'>HTML</button>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as='div' className='relative z-10' onClose={closeModel}>
                    <Transition.Child as={Fragment} enter="ease-out duration-100" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className='fixed insert-0 bg-black/25' />
                    </Transition.Child>
                    <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex min-h-full lg:min-w-full items-center justify-center p-4 text-center'>
                            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                                <Dialog.Panel className='w-full max-w-md  lg:min-w-full lg:ml-28 lg:mr-36 transform overflow-hidden rounded-2xl bg-white p-32  text-left align-middle shadow-xl transition-all'>
                                    <Dialog.Title className='text-lg font-medium leading-6 text-gray-900' as='h3'>
                                        Take a look through my HTML skill
                                    </Dialog.Title>
                                    <div className='mt-4 text-center'>
                                        <p>hsadsafsdfjasldfasdllaaklfglksfgsflkgklfklsdklfgklfdkgklfdgklfdsklgkdsgkfksdgkfldskgjdkfssdfkljgskdjfgklsdfkljgkdfjskgjkdfjgkdfjkgkdfjgkjdfksjgkfdjgkdfjklgjdfkljgkdfjkgjdfkjgkfdjkgjhsadsafsdfjasldfasdllaaklfglksfgsflkgklfklsdklfgklfdkgklfdgklfdsklgkdsgkfksdgkfldskgjdkfssdfkljgskdjfgklsdfkljgkdfjskgjkdfjgkdfjkjgkdfjgkjdfksjgkfdjgkdfjklgjdfkljgkdfjkgjdfkjgkfdjkgj</p>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default HtmlModel;
