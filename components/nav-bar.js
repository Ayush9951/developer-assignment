import { IBM_Plex_Mono } from 'next/font/google';
const IBMPlexMono = IBM_Plex_Mono({ 
    weight: ['400'],
    subsets: ['latin'] 
});

import Link from 'next/link';

import Welcome from "./welcome";
export default function NavBar() {
    return (
        <>
            <div className="bg-no-repeat" style={{height:"400px",backgroundImage:"url('/images/Hawaii.png')"}}>
                <div className="bg-white border m-auto p-5 max-w-6xl flex justify-between rounded-xl relative top-5">
                    <div className="text-4xl italic">Aloha</div>
                    <div className={IBMPlexMono.className}>
                        <ul className="flex pt-2 gap-10 relative right-36">
                            <Link href="/">Home</Link>
                            <Link href="/hightlights/surfing/surfing">Surfing</Link>
                            <Link href="/hightlights/festivals/festivals">Hula</Link>
                            <Link href="/hightlights/volcanoes/volcanoes">Vulcano</Link>
                        </ul>
                    </div>
                    <button className="bg-teal-700 pl-5 pr-5 rounded-md text-white
                    ">Book a trip</button>
                </div>
                <Welcome/>
            </div>
            
        </>
    )
}