import React from 'react'
import JokeCard from './JokeCard';


export default async function Content() {


    return (
        <div className="hero min-h-screen bg-gradient-to-l from-slate-800 to-slate-700">
            <div className="hero-content flex-col lg:flex-row">
                <img src="./img.jpg" className="max-w-md rounded-2xl shadow-4xl" />
                <div className='p-10 text-white text-2xl min-w-[50vw] min-h-72'>
                    <JokeCard />
                </div>
            </div>
        </div>
    )
}