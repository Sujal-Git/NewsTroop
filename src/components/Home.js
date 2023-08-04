import './Home.css'
import News from './News'
import { useEffect, useState } from 'react';

export default function Home() {

  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
   
  //useeffect to fetching the api and setting the usestate
  useEffect(() => {
    const getData = async () => {
      let response = await fetch(`https://newsapi.org/v2/everything?q=trending&from=2023-07-23&sortBy=popularity&apiKey=a5af9b32319a49d487b845235138babd&page=${page}`)
      let result = await response.json()
      setData(result.articles)
    }
    getData()

  }, [])

  //methods for updating page content with previous and next
  const setPrevious=async()=>{
      let response = await fetch(`https://newsapi.org/v2/everything?q=trending&from=2023-07-23&sortBy=popularity&apiKey=a5af9b32319a49d487b845235138babd&page=${page-1}`)
      let result = await response.json()
      setPage(page-1)
      setData(result.articles)
    
  }
  const setNext=async()=>{
      let response = await fetch(`https://newsapi.org/v2/everything?q=trending&from=2023-07-23&sortBy=popularity&apiKey=a5af9b32319a49d487b845235138babd&page=${+page+1}`)
      let result = await response.json()
      setPage(page+1)
      setData(result.articles)
      
  }


  return (
    <>
      <h1>NewsTroop</h1>
      <div className="news-container">
        {/* mapping the articles and rendering it in news component */}
        {data.map((key) => {
          return (
            <News key={key.title} title={key.title} imglink={key.urlToImage} description={key.description.slice(0, 80) + "...."} />
          )
        })}
      </div>
      <div className="buttonset">
        <button onClick={setPrevious}>Previous</button>
        <button onClick={setNext}>Next</button>
      </div>

    </>
  )
}