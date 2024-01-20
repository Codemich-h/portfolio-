import { Link } from 'react-router-dom';
import {useState} from 'react'
import {
    Popover, 
    Dialog
} from '@headlessui/react';
import {Bars3Icon, 
    XMarkIcon
} from '@heroicons/react/24/solid';



function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState((false));


    return(
        <header className='bg-auto bg-no-repeat md:bg-contain'>
            <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8' aria-label='Global'>
                <div className="flex lg:flex-1 uppercase ml-8 sm:ml-1 md:ml-6 lg:-ml-4">
                    <Link to='/' >Logo</Link>
                </div>
                <div className='flex lg:hidden'>
                    <button type='button' className='mr-2  inline-flex justify-center rounded-md p-2.5 text-gray-700 text-' onClick={() => setIsMobileMenuOpen(true)}>
                        <span className='sr-only'>Open main menu</span>
                        <Bars3Icon className='h-8 w-6 ml-52 -mr-96' aria-hidden='true'></Bars3Icon>
                    </button>
                </div>
                <Popover.Group className='hidden lg:flex lg:gap-x-12'>
                    <ul className='flex flex-col p-4 md:p-0 mt-4 mr-56 font-medium border md:flex-row md:space-x-4 md:mt-0 md:border-0 sm:text-sx'>
                        <li>
                           <Link to='/' className='text-sm font-semibold leading-6 text-gray-900 focus:text-blue-600 hover:text-blue-600'>Home</Link>
                        </li>
                        <li>
                           <Link to='/about' className='text-sm font-semibold leading-6 text-gray-900 focus:text-blue-600 hover:text-blue-600'>About</Link>
                        </li>
                        <li>
                           <Link to='/skills' className='text-sm font-semibold leading-6 text-gray-900 focus:text-blue-600 hover:text-blue-600'>Skills</Link>
                        </li>
                        <li>
                           <Link to='/education' className='text-sm font-semibold leading-6 text-gray-900 focus:text-blue-600 hover:text-blue-600'>Education</Link>
                        </li>
                        <li>
                           <Link to='/work' className='text-sm font-semibold leading-6 text-gray-900 focus:text-blue-600 hover:text-blue-600'>Work</Link>
                        </li>
                        <li>
                           <Link to='/experience' className='text-sm font-semibold leading-6 text-gray-900 focus:text-blue-600 hover:text-blue-600'>Experience</Link>
                        </li>
                        <li>
                           <Link to='/contact' className='text-sm font-semibold leading-6 text-gray-900 focus:text-blue-600 hover:text-blue-600'>Contact</Link>
                        </li>
                    </ul>
                </Popover.Group>
            </nav>
            <Dialog as='div' className='lg:hidden' open={isMobileMenuOpen} onClose={setIsMobileMenuOpen}>
                <div className='fixed inset-0 z-10'>
                    <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full h-25 overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
                        <div className='flex items-center justify-between'>
                            <div className="flex lg:flex-0 md:hidden uppercase">
                               <Link to='/' className=''>Logo</Link>
                            </div>
                            <button type='button' className='-m-2.5 rounded-md p-2.5 text-gray-700' onClick={() => setIsMobileMenuOpen(false)}>
                                <span className='sr-only'>close menu</span>
                                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                            </button>
                        </div>
                        <div className='mt-3 pt-0.50 flow-root'>
                            <div className='-my-6 divide-y divide-gray-500/10'>
                                <div className='space-y-1 py-6'>
                                    <ul className='flex flex-col p-4 md:p-0 mt-4 mr-56 font-small   md:flex-col md:space-x-6 md:mt-0 md:border-0 uppercase'>
                                        <li>
                                           <Link to='/' className='-mx-3 block rounded-lg px-3 py-2 text-sm hover:font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-blue-600 focus:text-blue-600 '>Home</Link>
                                        </li>
                                        <li>
                                           <Link to='/about' className='-mx-3 block rounded-lg px-3 py-2 text-sm hover:font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-blue-600 focus:text-blue-600'>About</Link>
                                        </li>
                                        <li>
                                           <Link to='/resume' className='-mx-3 block rounded-lg px-3 py-2 text-sm hover:font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-blue-600 focus:text-blue-600'>Resume</Link>
                                        </li>
                                        <li>
                                           <Link to='/skills' className='-mx-3 block rounded-lg px-3 py-2 text-sm hover:font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-blue-600 focus:text-blue-600'>Skills</Link>
                                        </li>
                                        <li>
                                           <Link to='/contact' className='-mx-3 block rounded-lg px-3 py-2 text-sm hover:font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-blue-600 focus:text-blue-600'>Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </header>
    ) 
}

export default Header;
