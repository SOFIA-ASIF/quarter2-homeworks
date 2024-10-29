import {Ambulance,Smartphone,ChevronDown } from "lucide-react";
import logos from '@/MiniHackathonPics/logos.png';
import Image from "next/image";
export default function NavbarH(){
    return(
        <nav className="px-56 py-4 top-0 h-28 w-full bg-black flex flex-col m-0 text-white justify-start">
            <div className="flex justify-between border-b border-b-stone-700 pb-1">
                <div className="flex">
                    <Smartphone /><p>Download App via SMS</p>
                </div>
                <div className="flex text-right ">
                    <p className="border-x border-x-solid border-x-white px-2">Sign Up</p>
                    <p className="px-2">Sign In</p>
                </div>
            </div>
                
            <div className="flex justify-between mt-4">
                <Image src={logos} alt="logoImage" height={240} width={190} />
                <ul className="flex gap-12">
                    <li>Used Cars</li>
                    <li>New Cars</li>
                    <li>Bikes</li>
                    <li>Auto Store</li>
                    <li>Forums</li>
                    <li>Video</li>
                    <li>Blog</li>
                    <li className="flex">More<ChevronDown /></li>
                </ul>
                <button className="flex bg-red-700 h-6 p-4 justify-center items-center rounded-lg">Post an Ad <ChevronDown /></button>
            </div>
            
        </nav>
    )
}