import { IBM_Plex_Mono } from 'next/font/google';
const IBMPlexMono = IBM_Plex_Mono({ 
    weight: ['400'],
    subsets: ['latin'] 
});

import Link from 'next/link';
import Image from 'next/image';

function Card({title, description, image,link}) {
    return (
        <>
            <div className={IBMPlexMono.className}>
                <div className=" h-96 rounded-xl shadow-xl" style={{width:"368px", height:"340px"}}>
                    <img src={image} className="rounded-t-xl" style={{height:"170px"}}/>
                    <div className="p-5">
                        <h1 className="text-teal-700 font-extrabold mb-2" style={{fontSize:"20px"}}>{title}</h1>
                        <p className='h-10' style={{fontSize:"16px"}}>{description}</p>
                        <Link href={link} className='float-right bg-teal-100 p-3 rounded-full relative top-3'>
                            <Image
                                src="/images/arrow.png"
                                width={15}
                                height={15}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card