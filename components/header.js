import React, {useEffect} from 'react'
import Image from 'next/image'
import {SearchIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon, MenuIcon} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/dist/client/router'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'


function header() {
    const { data: session } = useSession();
    const [open, setOpen] = useRecoilState(modalState);
    const router = useRouter();
    return (
        <div className="shadow-sm border-b bg-white z-50 sticky top-0" >
            <div className="flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto ">
                {/* Left - Brand */}
                <div onClick={()=>router.push('/')} className="relative hidden lg:inline-grid w-24 cursor-pointer">
                    <Image src="https://links.papareact.com/ocw" layout="fill" objectFit="contain" />
                </div>

                <div onClick={()=>router.push('/')} className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
                    <Image src="https://links.papareact.com/jjm" layout="fill" objectFit="contain" />
                </div>


                {/* Middle - Search input field */}
                <div className="max-w-xs">
                    <div className="mt-1 relative p-3 rounded-md">
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="w-5 h-5 text-gray-500" />
                        </div>
                        <input className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md" type="text" placeholder="Search" />
                    </div>
                </div>

                {/* Right - Menu */}

                <div className="flex justify-end items-center space-x-4">
                    <HomeIcon onClick={()=>router.push('/')} className="navBtn" />
                    <MenuIcon className="h-6 sm:hidden cursor-pointer" />
                    {session ? (
                        <>
                        <div className="relative navBtn">
                            <PaperAirplaneIcon className="navBtn rotate-45" />
                            <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white  ">3</div>
                        </div>
                        
                        <PlusCircleIcon onClick={()=>setOpen(true)} className="navBtn" />
                        <UserGroupIcon className="navBtn" />
                        <HeartIcon className="navBtn" />
    
                        <img onClick={signOut} src={session.user.image} alt="profile pic" className="h-10 rounded-full cursor-pointer border border-gray" />
                        </>
                    )
                    :(
                        <>
                            <button onClick={()=>router.push('/auth/signin')} className="font-semibold" >Sign In</button>
                           
                        </>
                    )}
                  
                  
                     
                    
                </div>
            </div>
        </div>
    )
}

export default header
