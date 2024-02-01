
import Footer from './components/Footer'
import Header from './components/Header'
import Content from './components/Content'
export default function Home() {
  
  
  return (
    <div className='min-h-screenn'>
      <Header />
      {/* navbar */}


      <Content />
      {/* Jokes counter , New Joke handler , Joke API fetching */}

      <Footer/> 
      {/* Views counter */}
    </div>
  )
}

