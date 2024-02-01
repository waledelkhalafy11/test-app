// this should be a client component to be able to react and be dynamic as much it could be
'use client' 
import React from 'react'
import { useState , useEffect } from 'react';


// Quoted joke interface 

interface Joke {
    categories: string ,
    created_at: string ,
    icon_url: string,
    id: string ,
    updated_at: string ,
    url: string ,
    value: string 
}

 
const JokeCard =  () => {
  const [jokeNum, setJokeNum] = useState<number>(1) 
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState<Joke>({  categories: ' ' ,
                                            created_at: ' ' ,
                                            icon_url: ' ',
                                            id: ' ' ,
                                            updated_at: ' ' ,
                                            url: ' ' ,
                                            value: ' ' 
                                          })


                                          
// Fetching a new joke

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random?'+ new URLSearchParams({
      category: 'dev'}))
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)

      })
  }, [jokeNum])

  

  
  return (
    <>
            <h1 className="text-5xl font-bold">Joke {jokeNum} </h1>
            {isLoading ? <p className="py-6 pl-10 min-w-[70wv]"><span className="loading loading-ring loading-lg"></span></p> : <p className="py-6 min-w-[70wv]">{data.value}</p>}
            
            <button onClick={()=> setJokeNum(jokeNum + 1)} className="btn btn-primary">Another Joke</button>
            </>
  )
}

export default JokeCard