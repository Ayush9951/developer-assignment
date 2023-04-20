import { IBM_Plex_Mono } from 'next/font/google';
const IBMPlexMono = IBM_Plex_Mono({ 
    weight: ['700'],
    subsets: ['latin'] 
});

function Welcome() {
    return (
        <>
            <div className={IBMPlexMono.className}>
                <div className="text-center max-w p-20 m-auto text-white">
                    <h1 className='text-8xl opacity-50'>Welcome</h1>
                    <h1 className="text-8xl opacity-80">to Hawaii</h1>
                </div>
            </div>
        </>
    )
}

export default Welcome