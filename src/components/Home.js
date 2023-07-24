import './Home.css'
import News from './News'

export default function Home() {
    return(
        <>
        <h1>Home Page</h1>
        <div className="news-container">
        <News/>
        <News/>
        <News/>
        <News/>
        <News/>
        </div>

        </>
    )
}