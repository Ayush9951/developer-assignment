import React, { useEffect } from "react"
import data from "./data.js"

import { IBM_Plex_Mono } from 'next/font/google';
const IBMPlexMono = IBM_Plex_Mono({ 
    weight: ['700'],
    subsets: ['latin'] 
});


import Card from "./Card.js"

function HighLights() {
   
    return (
        <>
            <div className="p-10 h-96 max-w-7xl m-auto">
                <h1 className={`${IBMPlexMono.className} relative bottom-4 pb-1 ml-1`}>HighLights</h1>
                <div className="flex gap-5">
                    {
                        data.map(hightlight => (
                            <Card 
                                title={hightlight.title} 
                                description={hightlight.description}
                                image={hightlight.image}
                                link={hightlight.link}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default HighLights