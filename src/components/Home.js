import './Home.css'
import News from './News'
import { useEffect, useState } from 'react';

export default function Home() {

  var article=[
    {
      "source": {
        "id": null,
        "name": "Android Central"
      },
      "author": "michael.hicks@futurenet.com (Michael L Hicks)",
      "title": "I’m sick of fitness watches guilting me into poor life choices",
      "description": "When watches gamify fitness, there will come a time when you have no choice but to lose the game. And your fitness app is designed to make you feel bad about it.",
      "url": "https://www.androidcentral.com/wearables/im-sick-of-fitness-watches-guilting-me-into-poor-life-choices",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/CQQvLqEfbB6nXN5rqpVRje-1200-80.jpeg",
      "publishedAt": "2023-07-23T15:00:35Z",
      "content": "As I write this column, the Garmin watch on my wrist is telling me I've \"moderately\" recovered from my last run and recommends I do a sprint training workout mixed in with 30 minutes of light running… [+5059 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Anna Tims",
      "title": "Car parts shortage leaves drivers in limbo as makers ‘put sales first’",
      "description": "Motorists are waiting months for repairs, or having cars written off, because replacement parts apparently cannot be found. But are they just being fobbed off?It was a snowy day in early March when Ruth Joad pranged her car. The one-year-old Volkswagen needed…",
      "url": "https://www.theguardian.com/money/2023/jul/24/car-parts-shortage-leaves-drivers-in-limbo-as-makers-put-sales-first",
      "urlToImage": "https://i.guim.co.uk/img/media/fd1fdebe739f66482e99449b5ae85093056f12e4/0_187_5616_3370/master/5616.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=b90a4ca78b984f4f161fc38f4a86e4ee",
      "publishedAt": "2023-07-24T08:00:05Z",
      "content": "It was a snowy day in early March when Ruth Joad pranged her car. The one-year-old Volkswagen needed a new bumper and sensors. Her insurer, Aviva, told her to book it into an approved dealership and … [+7103 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MacRumors"
      },
      "author": "Tim Hardwick",
      "title": "Spotify Increases Premium Plan Price to $10.99 a Month",
      "description": "Spotify is increasing its Premium plan to $10.99 per month, up from $9.99, the company has announced. The price hike applies to users in the U.S., the U.K., and several other countries.\n\n\n\n\n\n\"So that we can keep innovating, we are changing our Premium prices …",
      "url": "https://www.macrumors.com/2023/07/24/spotify-increases-premium-plan-price/",
      "urlToImage": "https://images.macrumors.com/t/7-nfr3K2_BPQYeb0zBLJE8hdAb0=/2500x/article-new/2021/08/General-Spotify-Feature.jpg",
      "publishedAt": "2023-07-24T11:33:21Z",
      "content": "Spotify is increasing its Premium plan to $10.99 per month, up from $9.99, the company has announced. The price hike applies to users in the United States, the United Kingdom, the European Union, and… [+1877 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MacRumors"
      },
      "author": "Tim Hardwick",
      "title": "Apple Retail Stores to Offer Customers Home Delivery Option",
      "description": "Apple retail store staff will soon be able to offer customers home delivery during the ordering process, rather than having to carry purchased products home themselves.\n\n\n\n\n\nWriting in his latest Power On newsletter, Bloomberg's Mark Gurman reports that the E…",
      "url": "https://www.macrumors.com/2023/07/24/apple-retail-stores-home-delivery-option/",
      "urlToImage": "https://images.macrumors.com/t/e46of-tlEiF9UGXgf8zlRi4zdVw=/1600x/article-new/2023/06/Apple-Store-Vancouver-Canada.jpg",
      "publishedAt": "2023-07-24T08:51:55Z",
      "content": "Apple retail store staff will soon be able to offer customers home delivery during the ordering process, rather than having to carry purchased products home themselves.\r\nWriting in his latest Power O… [+1359 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "George Glover",
      "title": "US stocks have rallied so hard that the market is setting its sights on all-time highs once again",
      "description": "The S&P 500 has erased nearly all its losses from a hellish 2022 this year and now trades just 260 points below its previous record level.",
      "url": "https://markets.businessinsider.com/news/stocks/stocks-ai-chatgpt-inflation-recession-sp-500-all-time-high-2023-7",
      "urlToImage": "https://i.insider.com/64be33ccbea34400195f9f4c?width=1200&format=jpeg",
      "publishedAt": "2023-07-24T09:15:20Z",
      "content": "The S&P 500 is trading just below its previous all-time high.Spencer Platt / Getty Images\r\n<ul>\n<li>The S&P 500 has erased nearly all its losses from a hellish 2022 this year.</li>\n<li>It now trades … [+1601 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Taylor Rains",
      "title": "Private jets can be tracked. Here are all the sneaky ways billionaires can still fly unseen.",
      "description": "One college student sparked a worldwide trend of tracking celebrity private jets on social media, and billionaires absolutely hate it.",
      "url": "https://www.businessinsider.com/how-billionaires-try-to-avoid-jet-tracking-social-media-accounts-2023-7",
      "urlToImage": "https://i.insider.com/64b82ce98a4e660019e34857?width=1200&format=jpeg",
      "publishedAt": "2023-07-24T09:00:01Z",
      "content": "Many of the billionaires who descended upon Sun Valley, Idaho, for their annual \"summer camp\" were enrolled in jet-dodging programs like LADD and PIA to avoid public following.Kevin Dietsch/Getty Ima… [+4341 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hipertextual"
      },
      "author": "Rubén Chicharro",
      "title": "Apple cambia sus planes respecto al Mac mini y el MacBook Pro con M3",
      "description": "Este octubre, Apple podría renovar algunos de sus Mac junto con un nuevo chip M3 algo más potente que el SoC actual; el M2, tal y como reveló Mark Gurman, de Bloomberg, en uno de sus boletines semanales de noticias. Pero hay una serie de modelos específicos q…",
      "url": "http://hipertextual.com/2023/07/apple-cambia-sus-planes-respecto-al-mac-mini-y-el-macbook-pro-con-m3",
      "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2021/11/DSC04181-scaled.jpg",
      "publishedAt": "2023-07-24T08:39:36Z",
      "content": "Este octubre, Apple podría renovar algunos de sus Mac junto con un nuevo chip M3 algo más potente que el SoC actual; el M2, tal y como reveló Mark Gurman, de Bloomberg, en uno de sus boletines semana… [+2705 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "HuffPost"
      },
      "author": "Ben Blanchet",
      "title": "Artist Bids Farewell To ‘Great Blue Bird’ Design In Twitter Logo Tribute",
      "description": "Martin Grasser, one of the minds behind the Twitter logo, wrote that the iconic design \"did so much\" since it launched in 2012.",
      "url": "https://www.huffpost.com/entry/artist-twitter-logo-tribute_n_64be01dae4b093f07cb526b3",
      "urlToImage": "https://img.huffingtonpost.com/asset/64be07652600006400fda884.jpeg?cache=VhINckqIQ3&ops=1200_630",
      "publishedAt": "2023-07-24T06:22:08Z",
      "content": "One of the people behind Twitters iconic logo said goodbye to the great blue bird on Friday after Elon Musk announced that he plans to do away with the design in favor of an X.\r\nMartin Grasser, a Bay… [+3161 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Xataka.com"
      },
      "author": "Javier Marquez",
      "title": "Cuando este buscador tuvo la oportunidad de comprar Google por menos de un millón de dólares (y decidió dejarla pasar)",
      "description": "Google es una de esas multinacionales que casi todo el mundo conoce. Sus productos y servicios, de alguna u otra forma, están presentes en la vida de millones de personas. Cuando envían correos de Gmail, cuando navegan entre los vídeos de YouTube o cuando tra…",
      "url": "https://www.xataka.com/empresas-y-economia/cuando-sergey-brin-larry-page-quisieron-venderle-google-a-precio-ganga-a-este-buscador",
      "urlToImage": "https://i.blogs.es/0f0996/google-excite-12/840_560.jpeg",
      "publishedAt": "2023-07-23T19:00:43Z",
      "content": "Google es una de esas multinacionales que casi todo el mundo conoce. Sus productos y servicios, de alguna u otra forma, están presentes en la vida de millones de personas. Cuando envían correos de Gm… [+4166 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Xataka.com"
      },
      "author": "Yúbal Fernández",
      "title": "Mejores VPN 2023: guía con los 17 mejores servicios para proteger tu privacidad online",
      "description": "Te traemos una guía con los 17 mejores servicios de VPN, para que puedas elegir el que más te convence para tus necesidades. No nos vamos a centrar en las VPN gratis, ya que es algo que ya hicimos y estos servicios no siempre cuidan bien de tu privacidad, sin…",
      "url": "https://www.xataka.com/basics/mejores-vpn-2023-guia-17-mejores-servicios-para-proteger-tu-privacidad-online",
      "urlToImage": "https://i.blogs.es/947ce0/vpn/840_560.jpeg",
      "publishedAt": "2023-07-23T12:00:44Z",
      "content": "Te traemos una guía con los 17 mejores servicios de VPN, para que puedas elegir el que más te convence para tus necesidades. No nos vamos a centrar en las VPN gratis, ya que es algo que ya hicimos y … [+11540 chars]"
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "Reviewed, Jon Winkler, Elsie Boskamp and Daniel Donabedian, USA TODAY",
      "title": "Shop the 10 best Amazon deals on Keurig, Instant Pot and TCL",
      "description": "Save big this summer by shopping the best Amazon deals on air conditioners, pressure cookers, garden hoses and more home essentials.",
      "url": "https://www.usatoday.com/story/money/reviewed/2023/07/23/best-amazon-deals-sales/70452843007/",
      "urlToImage": "https://www.gannett-cdn.com/authoring/authoring-images/2023/07/23/USAT/70452893007-amazon-hero-72323.png?auto=webp&crop=2989,1688,x8,y0&format=pjpg&width=1200",
      "publishedAt": "2023-07-23T14:02:15Z",
      "content": "Recommendations are independently chosen by Revieweds editors. Purchases you make through our links may earn us and our publishing partners a commission.\r\nIf you want to save big while shopping this … [+7471 chars]"
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Kurt Knutsson, CyberGuy Report",
      "title": "Top ways to optimize your PC and Mac devices",
      "description": "Kurt \"Cyberguy\" Knutsson gives you a step-by-step on your respective computer settings to make sure your device is operating at max capacity all the time.",
      "url": "https://www.foxnews.com/tech/top-ways-optimize-your-pc-mac-devices",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/07/1-WOMAN-SMILES-AT-COMPUTER.jpg",
      "publishedAt": "2023-07-23T15:24:57Z",
      "content": "When using your computer, you want to make sure that you're truly getting the best use out of it, especially considering how much money you spend on your devices. Fortunately, there are numerous ways… [+9444 chars]"
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "The Kim Komando Show",
      "title": "Don't let what happened to Julie on vacation happen to you: Essential travel safety tips",
      "description": "Summer travel is in full swing and so are loads of new ways that thieves and cybercriminals alike target tourists. Here is how to protect yourself on the road.",
      "url": "https://www.foxnews.com/tech/dont-let-what-happened-julie-vacation-happen-you-essential-travel-safety-tips",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/07/GettyImages-1241089667.jpg",
      "publishedAt": "2023-07-23T17:56:55Z",
      "content": "My friend Julie was on vacation in Rome with her 14-year-old daughter. During their visit, they stopped to take some selfies. Spotting their struggle to fit themselves and the grandeur of the backdro… [+6533 chars]"
    }
  ]
 const [data, setData] = useState(article)
  return (
    <>
      <h1>NewsTroop</h1>
      <div className="news-container">
        {/* mapping the articles and rendering it in news component */}
       {data.map((key)=>{
        return (
      <News key={key.title}   title={key.title} imglink={key.urlToImage} description={key.description.slice(0,80)+"...."}/>
        )
       })}
      </div>

    </>
  )
}