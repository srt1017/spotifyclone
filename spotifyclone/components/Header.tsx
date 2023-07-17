"use client";

import { useRouter } from "next/navigation"
import { twMerge } from "tailwind-merge";
import { RxCaretLeft } from "react-icons/rx";

interface HeaderProps {
    children: React.ReactNode,
    className?: string,
}

const Header: React.FC<HeaderProps> = ( { children, className } ) => {
    const router = useRouter()

    const handleLogout = () => {
        //handle logout
    }
  return (
    <div className={twMerge(`h-fit bg-gradient-to-b from-emerald-800 p-6`, className)}>
        <div className="w-full mb-4 flex items-center justify-between">
            <div className="hidden md:flex gap-x-2 items-center">
                <button>
                    <RxCaretLeft className="rounded-full flex items-center bg-black justify-center hover:opacity-75"size={35}/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header