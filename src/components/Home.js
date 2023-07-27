import './Home.css'
import News from './News'
import { useState } from 'react';
export default function Home() {
  var articles=[
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": null,
          "title": "India to face apple crunch as heavy rain hits production - Reuters India",
          "description": "India to face apple crunch as heavy rain hits productionReuters India",
          "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiYmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL2luZGlhL2luZGlhLWZhY2UtYXBwbGUtY3J1bmNoLWhlYXZ5LXJhaW4taGl0cy1wcm9kdWN0aW9uLTIwMjMtMDctMjQv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
          "urlToImage": null,
          "publishedAt": "2023-07-24T05:32:00Z",
          "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
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
        },
        {
          "source": {
            "id": null,
            "name": "The New Yorker"
          },
          "author": "Adam Iscoe",
          "title": "Subway Riders to Fifteen-Cent Fare Hike: Drop Dead!",
          "description": "The train cost a nickel in 1904. The M.T.A. held town halls to let citizens sound off about the latest increase, to two dollars and ninety cents, Adam Iscoe writes.",
          "url": "https://www.newyorker.com/magazine/2023/07/31/subway-riders-to-fifteen-cent-fare-hike-drop-dead",
          "urlToImage": "https://media.newyorker.com/photos/64baf9c2ada160419b41f5fd/16:9/w_1280,c_limit/r42727illuweb-site.png",
          "publishedAt": "2023-07-24T10:00:00Z",
          "content": "In October, 1904, a middle-aged woman from Brooklyn, as one story goes, bought the first subway ticket in New York City. The train ran from City Hall to Harlemnine miles, twenty-eight stations. The g… [+4255 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Moz.com"
          },
          "author": "Zach Edelstein",
          "title": "6 Ways ChatGPT Can Improve Your SEO",
          "description": "From on-page optimizations to technical SEO, AI can do more than create content. Supercharge your organic traffic with these tips from Moz’s SEO Director.",
          "url": "https://moz.com/blog/ai-tools-to-improve-seo",
          "urlToImage": null,
          "publishedAt": "2023-07-24T07:00:00Z",
          "content": "Most of the discourse surrounding the impact of artificial intelligence (AI) on SEO has been about content creation. This makes perfect sense. Large language models (LLMs) have fundamentally changed … [+7945 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hubspot.com"
          },
          "author": "np@neilpatel.com (Neil Patel)",
          "title": "16 Call-to-Action Formulas That Make People Want to Click, According to Neil Patel",
          "description": "Good things happen when you create killer calls-to-action. I would even argue that your website can't be successful unless you produce great calls-to-action.",
          "url": "https://blog.hubspot.com/marketing/call-to-action-formulas#article",
          "urlToImage": "https://blog.hubspot.com/hubfs/the%20best%20CTAs%20according%20to%20Neil%20Patel-1.png#keepProtocol",
          "publishedAt": "2023-07-24T11:00:00Z",
          "content": "Good things happen when you create killer calls-to-action. I would even argue that your website can't be successful unless you produce great calls-to-action.\r\nThe ideal CTA, however, isn't always eas… [+8154 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Digital Trends"
          },
          "author": "Alex Blake",
          "title": "Want an M3 Max MacBook Pro? There’s a lengthy wait ahead",
          "description": "Apple’s high-end MacBook Pro with M3 Pro and M3 Max chips might not launch until mid-2024, with the M3 Mac mini facing an even longer delay. Here’s why.",
          "url": "http://www.digitaltrends.com/computing/apple-m3-pro-max-macbook-pro-2024/",
          "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2022/10/apple-macbook-pro-14-front-angled-e1666806572977.jpg?resize=1200%2C630&p=1",
          "publishedAt": "2023-07-24T10:30:13Z",
          "content": "If you’ve been holding out for a super-powered MacBook Pro with a high-end M3 Pro or M3 Max chip, you could have a lengthy wait on your hands. That’s because despite Apple’s plans to launch new Macs … [+2331 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Digital Trends"
          },
          "author": "Luke Larsen",
          "title": "Should you buy the M2 MacBook Pro or wait for the M3?",
          "description": "With the M3 chip on the horizon, is it worth the wait? Which MacBook Pro should you buy in the meantime?",
          "url": "http://www.digitaltrends.com/computing/buy-m2-macbook-pro-or-wait-for-m3/",
          "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/02/macbook-pro-14-m2-max.jpg?resize=1200%2C630&p=1",
          "publishedAt": "2023-07-23T13:00:02Z",
          "content": "It’s been over a year since the M2 was announced, with the chip first appearing in the 13-inch MacBook Pro and 13-inch MacBook Air. With the M3 chip on the horizon, you might wondering if you’re bett… [+3177 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Historyvshollywood.com"
          },
          "author": "Kevin Lang",
          "title": "History vs. Hollywood: Oppenheimer",
          "description": "The Oppenheimer true story is compared to the Christopher Nolan movie about physicist J. Robert Oppenheimer, director of the Manhattan Project at Los Alamos that produced the atomic bomb.",
          "url": "https://www.historyvshollywood.com/reelfaces/oppenheimer/",
          "urlToImage": "https://www.historyvshollywood.com/reelfaces/images/2022/12/oppenheimer/social.jpg",
          "publishedAt": "2023-07-24T04:07:41Z",
          "content": "Historical Accuracy (Q&amp;A):\r\nDid J. Robert Oppenheimer leave a poison apple on his tutor's desk?The Oppenheimer true story reveals that as a young graduate student at Cambridge, Oppenheimer grew d… [+19146 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Nxdomain.no"
          },
          "author": null,
          "title": "What every IT person needs to know about OpenBSD",
          "description": "Comments",
          "url": "https://nxdomain.no/~peter/what_every_it_person_needs_to_know_about_openbsd.html",
          "urlToImage": null,
          "publishedAt": "2023-07-23T07:51:33Z",
          "content": "Peter N. M. Hansteen\r\nHow to have fun with the worlds most important free software project\"Functional, free and secure by default\", OpenBSD remains a crucial yet largely unacknowledged player in the … [+39849 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Swift.org"
          },
          "author": "Apple Inc.",
          "title": "Mixing Swift and C++",
          "description": "Swift is a general-purpose programming language built using a modern approach to safety, performance, and software design patterns.",
          "url": "https://swift.org/documentation/cxx-interop/",
          "urlToImage": "https://swift.org/apple-touch-icon-180x180.png",
          "publishedAt": "2023-07-23T14:04:53Z",
          "content": "Table of Contents\r\nIntroduction\r\nThis document is the reference guide describing how to mix Swift and C++. It\r\ndescribes how C++ APIs get imported into Swift, and provides examples showing\r\nhow vario… [+61089 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Gutenberg.org"
          },
          "author": null,
          "title": "Down and Out in the Magic Kingdom",
          "description": "Comments",
          "url": "https://www.gutenberg.org/files/8086/8086-h/8086-h.htm",
          "urlToImage": null,
          "publishedAt": "2023-07-23T10:07:11Z",
          "content": "Blurbs:\r\nHe sparkles! He fizzes! He does backflips and breaks the furniture! Science fiction needs Cory Doctorow!\r\nBruce Sterling\r\nAuthor, The Hacker Crackdown and Distraction\r\nIn the true spirit of … [+275617 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "heise online"
          },
          "author": "Stefan Porteck",
          "title": "heise+ | Auto-Infotainment: Drahtlos-Dongles für Apple CarPlay und Android Auto im Test",
          "description": "Die grafische Oberfläche des Smartphones kann man mit Wireless-Dongles aufs Display des Car-Infotainment-Systems spiegeln. Wir haben sechs Geräte getestet.",
          "url": "https://www.heise.de/ratgeber/Auto-Infotainment-Drahtlos-Dongles-fuer-Apple-CarPlay-und-Android-Auto-im-Test-9218758.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
          "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/2/7/2/5/0/8/b239ee19f1b3331820102c0c2cceb3cfca2fab3dbede7de618ad0acf8f78c3e1-c1d48c5b0e9e96ef.jpeg",
          "publishedAt": "2023-07-24T05:30:00Z",
          "content": "Inhaltsverzeichnis\r\nDas Smartphone drängt aufs Cockpit-Display: Kein Wunder, Google Maps ist übersichtlicher als die meisten Navis und wartet stets mit sehr guten Echtzeit-Verkehrsdaten auf. Zudem wi… [+1423 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "heise online"
          },
          "author": "Ben Schwan",
          "title": "Bericht: Kein Interesse an Vision-Pro-App bei Netflix",
          "description": "Der Streamingdienst macht derzeit noch keine Anstalten, auf Apples erstes Mixed-Reality-Headset zu kommen. Denkbar ist allerdings, dass die iPad-App läuft.",
          "url": "https://www.heise.de/news/Bericht-Kein-Interesse-an-Vision-Pro-App-bei-Netflix-9224247.html",
          "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/2/7/5/4/0/9/no_nf_visionpro-24e19e93dbe85bfe.png",
          "publishedAt": "2023-07-24T07:47:00Z",
          "content": "Apples Vision Pro wird zum Start wohl ohne eine spezielle Netflix-App auskommen müssen. Das berichtet der gut vernetzte Bloomberg-Journalist Mark Gurman in seinem Newsletter vom Wochenende. Seinen An… [+2447 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "9to5Mac"
          },
          "author": "Ben Lovejoy",
          "title": "Apple Car external displays could use hi-viz tech to advise other road users",
          "description": "One of the features of Drive.ai, a self-driving car startup acquired by Apple back in 2019, was the use of external displays intended to let pedestrians and other road users know what the car was doing. A new patent for Apple Car external displays shows how t…",
          "url": "https://9to5mac.com/2023/07/24/apple-car-external-displays/",
          "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/07/Apple-Car-external-displays.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
          "publishedAt": "2023-07-24T11:15:06Z",
          "content": "One of the features of Drive.ai, a self-driving car startup acquired by Apple back in 2019, was the use of external displays intended to let pedestrians and other road users know what the car was doi… [+3434 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "9to5Mac"
          },
          "author": "Benjamin Mayo",
          "title": "Bloomberg: Apple considering price hike for iPhone 15 Pro and Pro Max",
          "description": "Apple is considering to raise the price for the iPhone 15 Pro and iPhone 15 Pro Max, according to a new report from Bloomberg. The price of the lower-end iPhone 15 and iPhone 15 Plus would remain the same.\nOverall, the publication says Apple expects to ship a…",
          "url": "https://9to5mac.com/2023/07/24/bloomberg-apple-raise-price-iphone-15-pro/",
          "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/04/15-8.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
          "publishedAt": "2023-07-24T10:35:12Z",
          "content": "Apple is considering to raise the price for the iPhone 15 Pro and iPhone 15 Pro Max, according to a new report from Bloomberg. The price of the lower-end iPhone 15 and iPhone 15 Plus would remain the… [+877 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "9to5Mac"
          },
          "author": "Benjamin Mayo",
          "title": "Apple retail stores will soon be able to offer home delivery for customer orders",
          "description": "Via Mark Gurman’s Power On newsletter, Apple is gearing up to offer a new option for Apple retail store employees to offer customers when buying a product. Employees will now be able to make sales with home delivery, instead of requiring the customer carry th…",
          "url": "https://9to5mac.com/2023/07/23/apple-retail-stores-home-delivery/",
          "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/06/look-inside-apple-battersea-store.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
          "publishedAt": "2023-07-23T15:44:02Z",
          "content": "Via Mark Gurman’s Power On newsletter, Apple is gearing up to offer a new option for Apple retail store employees to offer customers when buying a product. Employees will now be able to make sales wi… [+1411 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Android Police"
          },
          "author": "Rajesh Pandey",
          "title": "Spotify is raising its prices across the board",
          "description": "Less than a week after YouTube, all Spotify plans are getting more expensive",
          "url": "https://www.androidpolice.com/spotify-raising-prices-across-board/",
          "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/06/asus-zenfone-10-review-spotify-plant.jpg",
          "publishedAt": "2023-07-24T11:05:17Z",
          "content": "Over the last few years, almost all streaming services have become more expensive. This includes the likes of Netflix, Disney+, Apple Music, and even YouTube Premium. Spotify also hiked its prices in… [+1840 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Android Police"
          },
          "author": "Kayode Oluwatayo",
          "title": "Phone insurance plans: Which Android protection plan is best?",
          "description": "There are lots of phone insurance options, but which one is best for you? Here's a rundown of all the major Android phone protection plans.",
          "url": "https://www.androidpolice.com/phone-insurance-plan-comparison/",
          "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/04/cracked-broken-shattered-phone-screen.jpg",
          "publishedAt": "2023-07-23T09:33:26Z",
          "content": "Most premium phones are still costly, and screens haven't stopped breaking. If you're afraid of repair costs or misplacing pricey devices, carriers and smartphone manufacturers offer protection plans… [+7266 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Autoblog"
          },
          "author": "James Riswick",
          "title": "2024 Ford Mustang First Drive Review: You want silly? It gives you silly",
          "description": "Filed under:\n Ford,First Drives,Convertible,Coupe,Performance\n Continue reading 2024 Ford Mustang First Drive Review: You want silly? It gives you silly\n2024 Ford Mustang First Drive Review: You want silly? It gives you silly originally appeared on Autoblog o…",
          "url": "https://www.autoblog.com/2023/07/24/2024-ford-mustang-first-drive-review/",
          "urlToImage": "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2023/07/21152012/2024-Ford-Mustang-EcoBoost-front-three-quarter-Yellow-Splash.jpg",
          "publishedAt": "2023-07-24T10:01:00Z",
          "content": "ARCADIA, Calif. All-new was thrown around a lot during the press launch of the 2024 Ford Mustang, but thats stretching the definition of the word all. The 2024 Mustang is based on the previous genera… [+9543 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Thekitchn.com"
          },
          "author": "Meg Asby",
          "title": "16 Things I Do “Wrong” When I Cook — And Refuse to Change, Ever",
          "description": "Sorry, pro chefs. \nREAD MORE...",
          "url": "https://www.thekitchn.com/wrong-things-cooking-23553671",
          "urlToImage": "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/stock%2FGettyImages-1227566541",
          "publishedAt": "2023-07-23T12:30:00Z",
          "content": "We independently select these products—if you buy from one of our links, we may earn a commission. All prices were accurate at the time of publishing.\r\nSomething you should know about me is that I li… [+3099 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "AppleInsider"
          },
          "author": "news@appleinsider.com (Stephen Silver)",
          "title": "Crime blotter: Police officer indicted for 2021 Apple Store punch",
          "description": "In the latest Apple Crime Blotter, alleged Apple Store thieves are accused of speaking Pig Latin, a sentence is set in Minneapolis thefts, and an iCloud investigation leads to an officer's arrest.Apple Store on Broadway in New York The latest in an occasional…",
          "url": "https://appleinsider.com/articles/23/07/23/crime-blotter-police-officer-indicted-for-2021-apple-store-punch",
          "urlToImage": "https://photos5.appleinsider.com/gallery/55518-112734-UWSapplestore-xl.jpg",
          "publishedAt": "2023-07-23T11:39:09Z",
          "content": "Apple Store on Broadway in New York \r\nIn the latest Apple Crime Blotter, alleged Apple Store thieves are accused of speaking Pig Latin, a sentence is set in Minneapolis thefts, and an iCloud investig… [+6237 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "AppleInsider"
          },
          "author": "news@appleinsider.com (Chip Loder)",
          "title": "How to fix the Apple Music \"error -54\" on macOS",
          "description": "Error -54 can sometimes appear when you edit your Apple Music Library on your Mac. Here's how to fix theIf you use Apple's Music app on macOS, you may have encountered error -54 on occasion. This error can occur in response to several actions in Music:<ol><li…",
          "url": "https://appleinsider.com/inside/apple-music/tips/how-to-fix-the-apple-music-error--54-on-macos",
          "urlToImage": "https://photos5.appleinsider.com/gallery/55508-112741-lede-xl.jpg",
          "publishedAt": "2023-07-23T17:08:14Z",
          "content": "Error -54 can sometimes appear when you edit your Apple Music Library on your Mac. Here's how to fix the \r\nIf you use Apple's Music app on macOS, you may have encountered error -54 on occasion. This … [+7136 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "AppleInsider"
          },
          "author": "news@appleinsider.com (William Gallagher)",
          "title": "Apple is considering making the iPhone 15 Pro more expensive",
          "description": "Apple is reportedly looking to keep iPhone shipments steady year-over-year, and is looking to increase its revenue by raising the price of the iPhone 15 Pro models.Render of the iPhone 15 Pro by AppleInsiderBefore the COVID pandemic and then during chip suppl…",
          "url": "https://appleinsider.com/articles/23/07/24/apple-is-considering-making-the-iphone-15-pro-more-expensive",
          "urlToImage": "https://photos5.appleinsider.com/gallery/55548-112799-000-lead-iPhone-15-Pro-render-xl.jpg",
          "publishedAt": "2023-07-24T11:08:16Z",
          "content": "Render of the iPhone 15 Pro by AppleInsider\r\nApple is reportedly looking to keep iPhone shipments steady year-over-year, and is looking to increase its revenue by raising the price of the iPhone 15 P… [+1495 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "AppleInsider"
          },
          "author": "news@appleinsider.com (Malcolm Owen)",
          "title": "Apple Store EasyPay Online Ordering brings shipment options to retail sales",
          "description": "Apple Store employees will be able to complete a sale for products out of stock at a location, by allowing for EasyPay point-of-sale machines to be used for home delivery orders.A problem with visiting any store is that if a product is out of stock, the sales…",
          "url": "https://appleinsider.com/articles/23/07/23/apple-store-easypay-online-ordering-brings-shipment-options-to-retail-sales",
          "urlToImage": "https://photos5.appleinsider.com/gallery/55537-112782-51462-101839-reston-apple-store-xl-xl.jpg",
          "publishedAt": "2023-07-23T13:33:13Z",
          "content": "Apple Store employees will be able to complete a sale for products out of stock at a location, by allowing for EasyPay point-of-sale machines to be used for home delivery orders. \r\nA problem with vis… [+1732 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "AppleInsider"
          },
          "author": "news@appleinsider.com (AppleInsider Staff)",
          "title": "Daily deals: 35% off 55-inch Amazon Fire TV, $15 off Pluggable USB-C Docking Station, $899 refurbished M2 13-inch MacBook Pro,",
          "description": "Today's top deals include $650 off Sennheiser HD 800 S Headphones, a half-price H&A UMP-5 USB Multi-Pattern Condenser Microphone, $199 AirPods Pro Gen 2, and more.Get 35% off a 55-inch Amazon Fire TVThe AppleInsider team searches the internet for fantastic de…",
          "url": "https://appleinsider.com/articles/23/07/23/daily-deals-35-off-55-inch-amazon-fire-tv-15-off-pluggable-usb-c-docking-station-899-refurbished-m2-13-inch-macbook-pro",
          "urlToImage": "https://photos5.appleinsider.com/gallery/55535-112784-deals-july-23-xl.jpg",
          "publishedAt": "2023-07-23T16:29:27Z",
          "content": "Get 35% off a 55-inch Amazon Fire TV\r\nToday's top deals include $650 off Sennheiser HD 800 S Headphones, a half-price H&amp;A UMP-5 USB Multi-Pattern Condenser Microphone, $199 AirPods Pro Gen 2, and… [+1385 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "AppleInsider"
          },
          "author": "news@appleinsider.com (Evan Selleck)",
          "title": "Beats Studio Pro vs. Beats Studio 3 -- compared",
          "description": "After months of rumors, Beats officially announced the new Studio Pro over-ear headphones with a design reminiscent of the Studio 3, and a lot has changed in five years. Here's how the two models' specs, batteries, and more, compare.Beats Studio Pro and Beats…",
          "url": "https://appleinsider.com/inside/beats-by-dre/vs/beats-studio-pro-vs-beats-studio-3----compared",
          "urlToImage": "https://photos5.appleinsider.com/gallery/55499-112763-beatscompare-xl.jpg",
          "publishedAt": "2023-07-24T11:40:22Z",
          "content": "After months of rumors, Beats officially announced the new Studio Pro over-ear headphones with a design reminiscent of the Studio 3, and a lot has changed in five years. Here's how the two models' sp… [+9798 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "AppleInsider"
          },
          "author": "news@appleinsider.com (Amanda Laskin)",
          "title": "B&H launches Mac mini sale with prices as low as $479",
          "description": "Trying to find a great deal on a desktop computer? B&H is currently having a sale on the popular and affordable Mac mini, with prices as low as $479.Mac mini: small but mighty\r\nThe Mac mini is a low-profile powerhouse computer that fits comfortably in any env…",
          "url": "https://appleinsider.com/articles/23/07/23/bh-launches-mac-mini-sale-with-prices-as-low-as-479",
          "urlToImage": "https://photos5.appleinsider.com/gallery/55513-112739-macmini-xl.jpg",
          "publishedAt": "2023-07-23T18:36:03Z",
          "content": "Trying to find a great deal on a desktop computer? B&amp;H is currently having a sale on the popular and affordable Mac mini, with prices as low as $479. \r\nMac mini: small but mighty\r\nThe Mac mini is… [+6425 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "AppleInsider"
          },
          "author": "news@appleinsider.com (William Gallagher)",
          "title": "Spotify announces Premium price increase worldwide",
          "description": "Spotify Premium will now cost $1 more per month in the US, and the service is increasing an equivalent amount in over 50 other countries.Credit: SpotifyAn increase to the US pricing was recently rumored as Spotify struggles to stay profitable. However, it was…",
          "url": "https://appleinsider.com/articles/23/07/24/spotify-announces-premium-price-increase-worldwide",
          "urlToImage": "https://photos5.appleinsider.com/gallery/43969-85507-Spotify-xl.jpg",
          "publishedAt": "2023-07-24T11:37:42Z",
          "content": "Credit: Spotify\r\nSpotify Premium will now cost $1 more per month in the US, and the service is increasing an equivalent amount in over 50 other countries.\r\nAn increase to the US pricing was recently … [+1271 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "AppleInsider"
          },
          "author": "news@appleinsider.com (Catherine Cargill)",
          "title": "Hohem iSteady M6 Kit review: take your videos from dull to dazzling",
          "description": "The Hohem iSteady M6 Kit can help you film cinematic masterpieces with your iPhone. But be prepared to learn the ropes, as this gimbal is not for beginners.Review: Hohem iSteady M6 KitIf you are an avid iPhone videographer, you know how frustrating it is to d…",
          "url": "https://appleinsider.com/articles/23/07/23/hohem-isteady-m6-kit-review-take-your-videos-from-dull-to-dazzling",
          "urlToImage": "https://photos5.appleinsider.com/gallery/55526-112754-1-xl.jpg",
          "publishedAt": "2023-07-23T21:34:31Z",
          "content": "Review: Hohem iSteady M6 Kit\r\nThe Hohem iSteady M6 Kit can help you film cinematic masterpieces with your iPhone. But be prepared to learn the ropes, as this gimbal is not for beginners.\r\nIf you are … [+7057 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Yanko Design"
          },
          "author": "Sarang Sheth",
          "title": "The 6-in-1 MagSafe Charging Dock for your iPhone, Watch, and MacBook We Wished Apple Made",
          "description": "The 6-in-1 MagSafe Charging Dock for your iPhone, Watch, and MacBook We Wished Apple MadeI’m not really salty about the AirPower mat anymore, but what I do find a little irksome is that Apple just abandoned the idea of...",
          "url": "https://www.yankodesign.com/2023/07/22/the-6-in-1-magsafe-charging-dock-for-your-iphone-watch-and-macbook-we-wished-apple-made/",
          "urlToImage": "https://www.yankodesign.com/images/design_news/2023/07/6-in-1_MagSafe_charger_we_wished_Apple_made_layout.jpg",
          "publishedAt": "2023-07-23T01:45:42Z",
          "content": "I’m not really salty about the AirPower mat anymore, but what I do find a little irksome is that Apple just abandoned the idea of a consolidated charging solution entirely. Sure, they developed MagSa… [+3365 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Windows Central"
          },
          "author": "Jason Ward",
          "title": "Microsoft's dubious positioning of the Surface Duo killed an ambitious vision",
          "description": "The Surface Duo was ahead of the curve, literally. Despite massive improvements in the Duo 2, Microsoft's mistakes are all too familiar.",
          "url": "https://www.windowscentral.com/phones/microsofts-dubious-positioning-of-the-surface-duo-killed-an-ambitious-vision",
          "urlToImage": "https://cdn.mos.cms.futurecdn.net/qShfGHnfcYuaxMy4QBECAX-1200-80.jpg",
          "publishedAt": "2023-07-23T13:00:01Z",
          "content": "(Image credit: Windows Central)\r\nI was in the room on Oct 2nd, 2019, in New York, when Microsoft's Chief Product Officer Panos Panay, like a magician pulling matter from an immaterial plane, revealed… [+13512 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Journal du geek"
          },
          "author": "tristan carballeda",
          "title": "Apple Vision Pro : Netflix ne serait pas de la partie",
          "description": "L'Apple Vision Pro n'est pas encore commercialisé qu'il alimente déjà les controverses et les débats. \nApple Vision Pro : Netflix ne serait pas de la partie",
          "url": "https://www.journaldugeek.com/2023/07/24/apple-vision-pro-netflix-ne-serait-pas-de-la-partie/",
          "urlToImage": "https://www.journaldugeek.com/content/uploads/2023/06/copie-de-ajouter-un-titre-5.jpg",
          "publishedAt": "2023-07-24T10:00:32Z",
          "content": "L'Apple Vision Pro n'est pas encore commercialisé qu'il alimente déjà les controverses et les débats.Netflix ne devrait pas développer dapplication spécialement pour lApple Vision Pro. Le casque de r… [+2462 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Journal du geek"
          },
          "author": "Amandine Jonniaux",
          "title": "La carte vitale arrive sur smartphone : comment en profiter ?",
          "description": "L'application carte vitale est désormais accessible sur smartphone. On vous explique comment en profiter.\nLa carte vitale arrive sur smartphone : comment en profiter ?",
          "url": "https://www.journaldugeek.com/2023/07/24/la-carte-vitale-arrive-sur-smartphone-comment-en-profiter/",
          "urlToImage": "https://www.journaldugeek.com/content/uploads/2022/02/template-jdg-4-1.jpg",
          "publishedAt": "2023-07-24T10:30:14Z",
          "content": "L'application carte vitale est désormais accessible sur smartphone. On vous explique comment en profiter.Après le permis de conduire et la carte d’identité dématérialisée, qui permettront bientôt de … [+2614 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Journal du geek"
          },
          "author": "Amandine Jonniaux",
          "title": "Spotify augmente le tarif de son abonnement Premium, il va falloir passer à la caisse",
          "description": "Spotify va augmenter le prix de son abonnement Premium, il faudra bientôt payer plus cher pour profiter du service de streaming musical.\nSpotify augmente le tarif de son abonnement Premium, il va falloir passer à la caisse",
          "url": "https://www.journaldugeek.com/2023/07/24/spotify-augmente-le-tarif-de-son-abonnement-premium-il-va-falloir-passer-a-la-caisse/",
          "urlToImage": "https://www.journaldugeek.com/content/uploads/2021/02/puria-berenji-eoliis02ixw-unsplash-scaled.jpg",
          "publishedAt": "2023-07-24T09:30:55Z",
          "content": "Spotify va augmenter le prix de son abonnement Premium, il faudra bientôt payer plus cher pour profiter du service de streaming musical.Mauvaise nouvelle pour les abonnés Spotify Premium. Dans un art… [+2619 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Applesfera.com"
          },
          "author": "Fran Bouzas",
          "title": "La operadora italiana que pudo comprar Apple y hoy está al borde de la ruina",
          "description": "Corría el año 1998 y Apple no se encontraba en la mejor de sus etapas. Una concatenación de malas decisiones, egos encontrados, la marcha forzada de Steve Jobs y un rumbo que hacía tiempo que ni estaba, ni se le esperaba, hicieron caer a la empresa a una situ…",
          "url": "https://www.applesfera.com/curiosidades/operadora-italiana-que-pudo-comprar-apple-hoy-esta-al-borde-ruina",
          "urlToImage": "https://i.blogs.es/fb875f/carles-rabada-nxp7wgyudey-unsplash/840_560.jpeg",
          "publishedAt": "2023-07-23T15:31:06Z",
          "content": "Corría el año 1998 y Apple no se encontraba en la mejor de sus etapas. Una concatenación de malas decisiones, egos encontrados, la marcha forzada de Steve Jobs y un rumbo que hacía tiempo que ni esta… [+3214 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Applesfera.com"
          },
          "author": "Pedro Aznar",
          "title": "La presentación del iPhone 15 en tiempos de las Vision Pro: así mejorarán los dispositivos de Apple gracias a sus innovaciones",
          "description": "Sólo queda un mes para que Apple anuncie el próximo Apple Event. La presentación del iPhone 15 - y más - que llega cada año a principios de septiembre está a la vuelta de la esquina. Los cálculos pueden no ser exactos, y más este año que podríamos contar con …",
          "url": "https://www.applesfera.com/apple-1/presentacion-iphone-15-tiempos-vision-pro-asi-mejoraran-dispositivos-apple-gracias-a-sus-innovaciones",
          "urlToImage": "https://i.blogs.es/bed71f/iphone-15-vision-pro-apple-event-septiembre-2023-26/840_560.jpeg",
          "publishedAt": "2023-07-23T10:00:43Z",
          "content": "Sólo queda un mes para que Apple anuncie el próximo Apple Event. La presentación del iPhone 15 - y más - que llega cada año a principios de septiembre está a la vuelta de la esquina. Los cálculos pue… [+10420 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Applesfera.com"
          },
          "author": "Jesús Quesada",
          "title": "Tableta Xiaomi Pad 6 VS iPad Air (2022): características, diferencias y precios",
          "description": "Apple es la reina indiscutible de las tabletas. Sus iPad han conseguido ser la opción preferida de muchos usuarios por tener un buen rendimiento, un amplio catálogo de aplicaciones, buen soporte de actualizaciones y compatibilidad con accesorios tan interesan…",
          "url": "https://www.applesfera.com/seleccion/tableta-xiaomi-pad-6-vs-ipad-air-2022-caracteristicas-diferencias-precios",
          "urlToImage": "https://i.blogs.es/236a4c/xiaomi-pad-6-vs-ipad-air-2022/840_560.jpeg",
          "publishedAt": "2023-07-23T17:00:43Z",
          "content": "Apple es la reina indiscutible de las tabletas. Sus iPad han conseguido ser la opción preferida de muchos usuarios por tener un buen rendimiento, un amplio catálogo de aplicaciones, buen soporte de a… [+9939 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Applesfera.com"
          },
          "author": "Miguel López",
          "title": "Quién es Lawrence Levy, la mano derecha de Steve Jobs que reflotó Pixar y le ahorró una fortuna en pérdidas",
          "description": "Steve Jobs no dejó su huella solamente en Apple. Sabemos que pasó parte de su juventud en Atari, sabemos que fundó Next tras ser despedido y sabemos que también tiene un gran legado en los estudios de Pixar. Y como ha ocurrido con Apple, el paso de Jobs por P…",
          "url": "https://www.applesfera.com/curiosidades/quien-lawrence-levy-mano-derecha-steve-jobs-que-refloto-pixar-le-ahorro-fortuna-perdidas",
          "urlToImage": "https://i.blogs.es/6847c0/lawrence-levy-pixar-toy-story-woody-buzz-lightyear/840_560.jpeg",
          "publishedAt": "2023-07-23T08:00:43Z",
          "content": "Steve Jobs no dejó su huella solamente en Apple. Sabemos que pasó parte de su juventud en Atari, sabemos que fundó Next tras ser despedido y sabemos que también tiene un gran legado en los estudios d… [+3832 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Applesfera.com"
          },
          "author": "Fran Bouzas",
          "title": "Por fin: WhatsApp iOS incorpora una de las funciones más demandadas",
          "description": "Uno de los mayores trastornos que hemos sufrido todos a la hora de cambiar de iPhone es el pasar nuestro historial de mensajes de uno a otro. No hacerlo puede suponer un problema tremendo, y es un proceso largo, lento y tedioso que, hasta ahora, no había form…",
          "url": "https://www.applesfera.com/aplicaciones-ios-1/whatsapp-ios-incorpora-funciones-demandadas",
          "urlToImage": "https://i.blogs.es/6ef753/diseno-sin-titulo-176/840_560.jpeg",
          "publishedAt": "2023-07-24T11:30:47Z",
          "content": "Uno de los mayores trastornos que hemos sufrido todos a la hora de cambiar de iPhone es el pasar nuestro historial de mensajes de uno a otro. No hacerlo puede suponer un problema tremendo, y es un pr… [+2001 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Applesfera.com"
          },
          "author": "Miguel López",
          "title": "He borrado de mi móvil estas aplicaciones por gastar demasiada batería, y no he perdido ninguno de sus contenidos",
          "description": "Si iOS es el alma del iPhone, las aplicaciones son el alma de iOS. Nos movemos cada día con ellas, las abrimos y cerramos (en un mal hábito) continuadamente, y no solemos darnos cuenta de aquellas que consumen mucha batería sin que se note en nuestro uso coti…",
          "url": "https://www.applesfera.com/aplicaciones-ios-1/he-borrado-mi-movil-estas-aplicaciones-gastar-demasiada-bateria-no-he-perdido-ninguno-sus-contenidos",
          "urlToImage": "https://i.blogs.es/44bb9c/captura-de-pantalla-2023-07-24-a-las-12.41.02/840_560.jpeg",
          "publishedAt": "2023-07-24T10:42:23Z",
          "content": "Si iOS es el alma del iPhone, las aplicaciones son el alma de iOS. Nos movemos cada día con ellas, las abrimos y cerramos (en un mal hábito) continuadamente, y no solemos darnos cuenta de aquellas qu… [+2689 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Applesfera.com"
          },
          "author": "David Bernal Raspall",
          "title": "Cómo desinstalar apps sin eliminarlas en nuestro iPhone para ganar espacio sin perder datos",
          "description": "Son muchos los contenidos que almacenamos en nuestro iPhone y que ocupan espacio en él. Desde las fotos hasta las películas que descargamos hasta las mismas aplicaciones que instalamos. Unas aplicaciones que, en algunos casos, pueden llegar a pesar varios GB …",
          "url": "https://www.applesfera.com/tutoriales/como-desinstalar-apps-eliminarlas-nuestro-iphone-ganar-espacio-perder-nada",
          "urlToImage": "https://i.blogs.es/5fdab6/diseno-sin-titulo-172/840_560.jpeg",
          "publishedAt": "2023-07-24T10:03:39Z",
          "content": "Son muchos los contenidos que almacenamos en nuestro iPhone y que ocupan espacio en él. Desde las fotos hasta las películas que descargamos hasta las mismas aplicaciones que instalamos. Unas aplicaci… [+4274 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "MakeUseOf"
          },
          "author": "Jose Luansing Jr.",
          "title": "10 Ways Human Influencers Can Outperform Virtual Influencers",
          "description": "Human influencers can still thrive amid their AI virtual counterparts. Employ these strategies to stay relevant on social media.",
          "url": "https://www.makeuseof.com/ways-human-influencers-outperform-virtual-influencers/",
          "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/07/human-girl-and-virtual-influencer-side-by-side.jpg",
          "publishedAt": "2023-07-23T20:15:23Z",
          "content": "The proliferation of virtual influencers is changing the way brands approach digital marketing. They could make AI-generated personas go viral while simultaneously cutting their ad spend—buying AI to… [+7267 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Theregister.com"
          },
          "author": "Katyanna Quach",
          "title": "Google fails to get AI engineer lawsuit claiming wrongful termination thrown out",
          "description": "Plus: Apple is building its own large language models internally, and AI South Park is terrible\nAI in brief Judges have tentatively rejected Google's request to dismiss a lawsuit filed by a former engineer who accused the company of firing him for challenging…",
          "url": "https://www.theregister.com/2023/07/24/ai_in_brief/",
          "urlToImage": "https://regmedia.co.uk/2019/09/04/shutterstock_google_hq.jpg",
          "publishedAt": "2023-07-24T10:39:07Z",
          "content": "AI in brief Judges have tentatively rejected Google's request to dismiss a lawsuit filed by a former engineer who accused the company of firing him for challenging an internal AI chip design research… [+4825 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Presse-citron"
          },
          "author": "Setra",
          "title": "Et si votre prochain MacBook avait un écran de 20 pouces ?",
          "description": "Apple travaillerait bien sur un MacBook avec écran pliable de 20 pouces. Ses partenaires seraient Samsung Display et LG Display.",
          "url": "https://www.presse-citron.net/et-si-votre-prochain-macbook-avait-un-ecran-de-20-pouces/",
          "urlToImage": "https://www.presse-citron.net/app/uploads/2023/06/test-macbook-air-15-vs-13.jpg",
          "publishedAt": "2023-07-24T08:30:41Z",
          "content": "<ul><li>Après les smartphones pliants, les ordinateurs à écrans pliables arrivent aussi</li><li>Apple sintéresserait à ce format et travaillerait avec Samsung et LG</li><li>Cela permettrait davoir de… [+2444 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Golem.de"
          },
          "author": "Ingo Pakalski",
          "title": "Gratis-Streaming von Amazon: Freevee-App für iPhone, iPad und Apple TV verfügbar",
          "description": "Für Amazons Videostreamingdienst Freevee muss keine Abogebühr bezahlt werden. In den Sendungen gibt es Werbeunterbrechungen. (Freevee, Amazon)",
          "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fgratis-streaming-von-amazon-freevee-app-fuer-iphone-ipad-und-apple-tv-verfuegbar-2307-176080.html&referer=https%3A%2F%2Ft.co%2F97fbc10483",
          "urlToImage": null,
          "publishedAt": "2023-07-23T08:19:02Z",
          "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The A.V. Club"
          },
          "author": "Manuel Betancourt",
          "title": "How To With John Wilson season 3 review: A funny, probing, brilliant sendoff",
          "description": "Every episode of How To With John Wilson, which kicks off its third and final season July 28 on HBO, opens with a key, if unassuming, greeting: “Hey, New York.” Wilson, who narrates every episode of his nonfiction series culled from hours and hours of footage…",
          "url": "https://www.avclub.com/how-to-with-john-wilson-season-3-review-tv-hbo-final-1850649766",
          "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/bf53c8bab085051436946fc9b25a1020.jpg",
          "publishedAt": "2023-07-24T04:01:00Z",
          "content": "Every episode of How To With John Wilson, which kicks off its third and final season July 28 on HBO, opens with a key, if unassuming, greeting: Hey, New York. Wilson, who narrates every episode of hi… [+5172 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Golem.de"
          },
          "author": "Oliver Nickel",
          "title": "Apple Silicon: Funktioniert das Macbook Air 15 als Business-Gerät?",
          "description": "Apple will uns im Interview vom Wert des neuen Macbook Air 15 im Business-Umfeld überzeugen. Das klappt nur teilweise. Eine Analyse von Oliver Nickel (Business-Notebooks, Apple)",
          "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fapple-silicon-funktioniert-das-macbook-air-15-als-business-geraet-2307-175958.html&referer=https%3A%2F%2Ft.co%2Fb1f5c523a7",
          "urlToImage": null,
          "publishedAt": "2023-07-23T07:00:02Z",
          "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Xataka Android"
          },
          "author": "Iván Linares",
          "title": "Android tiene el estigma de las actualizaciones, pero lo cierto es que Google mantiene los móviles mucho mejor que Apple",
          "description": "Android lleva acumulando dos estigmas casi desde su nacimiento: el de sufrir más ralentizaciones que su rival, iOS, y el de carecer de soporte para actualizaciones. El primer punto hace años que pasó a la historia: basta con analizar cualquier gama media para…",
          "url": "https://www.xatakandroid.com/sistema-operativo/android-tiene-estigma-actualizaciones-cierto-que-google-mantiene-moviles-mucho-mejor-que-apple",
          "urlToImage": "https://i.blogs.es/090c9b/lucha-android-iphone/840_560.jpeg",
          "publishedAt": "2023-07-23T08:57:46Z",
          "content": "Android lleva acumulando dos estigmas casi desde su nacimiento: el de sufrir más ralentizaciones que su rival, iOS, y el de carecer de soporte para actualizaciones. El primer punto hace años que pasó… [+5993 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Xataka Android"
          },
          "author": "Alejandro Alcolea",
          "title": "A Google Maps y Waze le ha salido un duro rival: Magic Earth lo tiene casi todo, incluida la navegación offline",
          "description": "Actualmente, perderse por una ciudad o por carretera es algo que sólo sucede si queremos que suceda. Nuestros teléfonos llevan apps de mapas preinstaladas -Google Maps en el caso de Android y Apple Maps en el de iOS- y son dos aplicaciones que funcionan genia…",
          "url": "https://www.xatakandroid.com/tutoriales/a-google-maps-waze-le-ha-salido-duro-rival-magic-earth-tiene-casi-todo-incluida-navegacion-offline",
          "urlToImage": "https://i.blogs.es/34a16f/ventilador-xiaomi-inteligente-11/840_560.jpeg",
          "publishedAt": "2023-07-24T08:37:47Z",
          "content": "Actualmente, perderse por una ciudad o por carretera es algo que sólo sucede si queremos que suceda. Nuestros teléfonos llevan apps de mapas preinstaladas -Google Maps en el caso de Android y Apple M… [+3252 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Android Authority"
          },
          "author": "Adamya Sharma",
          "title": "Spotify Premium price hike likely coming to the US this week",
          "description": "The service will reportedly get a $1 price increase.",
          "url": "https://www.androidauthority.com/spotify-premium-price-hike-3347665/",
          "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2022/11/Spotify-Premium-banner-ad.jpg",
          "publishedAt": "2023-07-24T04:44:41Z",
          "content": "<ul><li>Spotify will reportedly hike prices for its individual Premium plan in the US.</li><li>The price increase might happen sometime this week.</li><li>The streaming service also has plans to incr… [+1251 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Presse-citron"
          },
          "author": "Setra",
          "title": "Selon Apple, 99% des utilisateurs d’iPhone 14 en sont satisfaits : c’est vrai ce mensonge ?",
          "description": "Selon Apple, 99 % des utilisateurs de la série iPhone 14 en Amérique du Nord sont satisfaits. Une entreprise explique pourquoi c’est impossible.",
          "url": "https://www.presse-citron.net/selon-apple-99-des-utilisateurs-diphone-14-en-sont-satisfaits-cest-vrai-ce-mensonge/",
          "urlToImage": "https://www.presse-citron.net/app/uploads/2023/01/apple-iphone-14.webp",
          "publishedAt": "2023-07-24T11:30:53Z",
          "content": "<ul><li>Apple a annoncé un taux de satisfaction de 99 % pour la série iPhone 14</li><li>Mais selon Perfectrec, il est impossible dobtenir de tels résultats en utilisant les méthodes de sondage tradit… [+2868 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The A.V. Club"
          },
          "author": "Sam Barsanti",
          "title": "SAG-AFTRA is using the strike to push for more influencers and content creators to unionize",
          "description": "After the SAG-AFTRA strike began last week, the union released official guidelines for online influencers and content creators on how they can support those on strike and how they can manage existing contracts and sponsorship deals. It was a somewhat interest…",
          "url": "https://www.avclub.com/sag-aftra-influencers-content-creators-1850668557",
          "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/f8db5cf4f35042ec7483f4cb2cb2612c.jpg",
          "publishedAt": "2023-07-23T18:32:00Z",
          "content": "After the SAG-AFTRA strike began last week, the union released official guidelines for online influencers and content creators on how they can support those on strike and how they can manage existing… [+2242 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "BGR"
          },
          "author": "Chris Smith",
          "title": "How to blur the background of iPhone photos",
          "description": "Basic photo edits only take a few seconds on iPhone, as Apple includes plenty of options in the Photos app to spruce up your pictures …\nThe post How to blur the background of iPhone photos appeared first on BGR.",
          "url": "https://bgr.com/tech/how-to-blur-the-background-of-iphone-photos/",
          "urlToImage": "https://bgr.com/wp-content/uploads/2022/09/apple-iphone-14-2.jpg?quality=82&strip=all",
          "publishedAt": "2023-07-23T22:08:00Z",
          "content": "Basic photo edits only take a few seconds on iPhone, as Apple includes plenty of options in the Photos app to spruce up your pictures as soon as you take them. For example, you can remove the backgro… [+2601 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "BGR"
          },
          "author": "José Adorno",
          "title": "iPhone 15 Pro again rumored to get a possible price hike, but no delay expected",
          "description": "A report by Bloomberg corroborates that the iPhone 15 Pro models could cost more, as Apple wants to increase revenue despite shipping fewer units than …\nThe post iPhone 15 Pro again rumored to get a possible price hike, but no delay expected appeared first on…",
          "url": "https://bgr.com/tech/iphone-15-pro-again-rumored-to-get-a-possible-price-hike-but-no-delay-expected/",
          "urlToImage": "https://bgr.com/wp-content/uploads/2023/02/iphone-15-ultra-concept-bgr-1.jpg?quality=82&strip=all",
          "publishedAt": "2023-07-24T11:20:33Z",
          "content": "A report by Bloomberg corroborates that the iPhone 15 Pro models could cost more, as Apple wants to increase revenue despite shipping fewer units than previously expected. In addition, rumors saying … [+2267 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "BGR"
          },
          "author": "Andy Meek",
          "title": "The Bureau, France’s pulse-pounding answer to Homeland, is getting an American remake",
          "description": "Too often, the spies we encounter in books, TV shows, and movies come off as reductive imitations of the real thing. They fall somewhere on …\nThe post The Bureau, France’s pulse-pounding answer to Homeland, is getting an American remake appeared first on BGR.",
          "url": "https://bgr.com/entertainment/best-tv-series-to-watch-right-now-amazon-sundance-now-the-bureau/",
          "urlToImage": "https://bgr.com/wp-content/uploads/2020/06/webp.net-resizeimage-20.jpg?quality=82&strip=all",
          "publishedAt": "2023-07-24T00:09:00Z",
          "content": "Too often, the spies we encounter in books, TV shows, and movies come off as reductive imitations of the real thing. They fall somewhere on a spectrum between 007’s sophistication and the two-dimensi… [+5776 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Cracked.com"
          },
          "author": "Erik Barnes",
          "title": "13 Hall of Fame Jokes and Moments from ‘Futurama’",
          "description": "Good news, everyone! We have ‘Futurama’ jokes",
          "url": "https://www.cracked.com/article_38791_13-hall-of-fame-jokes-and-moments-from-futurama.html",
          "urlToImage": "https://s3.crackedcdn.com/phpimages/article/6/9/2/903692.jpg",
          "publishedAt": "2023-07-23T15:00:00Z",
          "content": "Since 1999, Futurama has been a beacon of quality sci-fi humor and hijinks. Until it was canceled in 2003. Then brought back in 2008. Then canceled again in 2013. Only to be brought back again this s… [+2367 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Small Business Trends"
          },
          "author": "Myra Nizami",
          "title": "15 Ways to Get Repeat Business",
          "description": "Get to know the important role of repeat business in driving sustainable success with insights into how to capitalize on its potential.",
          "url": "https://smallbiztrends.com/2023/07/repeat-business-2.html",
          "urlToImage": "https://media.smallbiztrends.com/2023/07/repeat-business.png",
          "publishedAt": "2023-07-24T10:00:21Z",
          "content": "The importance of repeat customers often gets overlooked in the dynamic world of small businesses, yet these loyal patrons are the backbone of successful enterprises. Repeat business affirms the qual… [+29070 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "iMore"
          },
          "author": "Tammy Rogers",
          "title": "iPhone 15 Pro could be stronger and lighter thanks to space-age materials",
          "description": "Rather than stainless steel, it looks like Apple might be creating a titanium-based iPhone 15 surround.",
          "url": "https://www.imore.com/iphone/iphone-15/iphone-15-pro-could-be-stronger-and-lighter-thanks-to-space-age-materials",
          "urlToImage": "https://cdn.mos.cms.futurecdn.net/NBeQsn8uxEUBQyALpC34sj-1200-80.jpeg",
          "publishedAt": "2023-07-24T10:35:46Z",
          "content": "It's used in Spacecraft, Airplanes, 200mph racecars, and premium Apple Watch Ultras — and now it's coming to the iPhone 15. According to a recent leak from leaker Unknownz21 on Twitter (Or is that X … [+1848 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "iMore"
          },
          "author": "heyimjoew@gmail.com (Joe Wituschek)",
          "title": "Why Apple needs to bring back the iPhone mini with the iPhone 15 lineup",
          "description": "Apple may have thought big screens were the way to go, but I believe it's time for them to embrace tiny phones again.",
          "url": "https://www.imore.com/iphone/apple-needs-to-bring-back-the-iphone-mini-with-the-iphone-15",
          "urlToImage": "https://cdn.mos.cms.futurecdn.net/wWqy8jXANphZUNNxMMyE8n-1200-80.png",
          "publishedAt": "2023-07-23T11:11:16Z",
          "content": "We’re only two months out from the new iPhone most likely being announced and, if Apple doesn’t resurrect the iPhone mini, I’m going to be incredibly bummed.\r\nI know, it’s a long shot. The model was … [+5619 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "iMore"
          },
          "author": "emailhim@tshakatalkstech.com (Tshaka Armstrong)",
          "title": "Beats Studio Pro are still a G Thang — so why all the hate?",
          "description": "The Beats Studio Pro are many things, but they've also let a weird subsection of audio obsessives emerge from the gloom to decry them again. And that's sad.",
          "url": "https://www.imore.com/airpods/beats-studio-pro-still-a-g-thang",
          "urlToImage": "https://cdn.mos.cms.futurecdn.net/EfXHA354yGZW7Gq4cMJ76d-1200-80.jpg",
          "publishedAt": "2023-07-24T11:00:00Z",
          "content": "July 25th, 2008. That’s the year that Dr. Dre went from having his immaculately engineered and mastered music IN your head, to ON your head. That was the year that the good Doctor dropped the Monster… [+9706 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "iMore"
          },
          "author": "karefree2@yahoo.com (Karen S Freeman)",
          "title": "Scosche BoomCan MS: Pairable, propable, portable MagSafe Speaker",
          "description": "Pop this MagSafe speaker on the back of your iPhone; it acts as a kickstand. Or get two and pair them together for stereo sound anywhere, anytime.",
          "url": "https://www.imore.com/music-movies-tv/speakers/scosche-boomcan-ms-pairable-propable-portable-magsafe-speaker",
          "urlToImage": "https://cdn.mos.cms.futurecdn.net/9yd2Y76EL3zHWsrMYXbjTJ-1200-80.jpeg",
          "publishedAt": "2023-07-24T08:57:32Z",
          "content": "The Scosche BoomCan MS (MagSafe Speaker) might be the accessory you never knew you needed. Roughly the size and shape of a hockey puck, this Bluetooth speaker is easy to slip into a bag when you want… [+6135 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "MacRumors"
          },
          "author": "Tim Hardwick",
          "title": "Bloomberg: Apple Considering Price Hike for iPhone 15 Pro Models",
          "description": "Apple is \"considering\" raising the price for both Pro models in its upcoming iPhone 15 series, according to Bloomberg.\n\n\n\n\n\nCiting unnamed people familiar with the matter, the report claims that despite a projected decline in the overall smartphone market, Ap…",
          "url": "https://www.macrumors.com/2023/07/24/apple-price-hike-iphone-15-pro-models/",
          "urlToImage": "https://images.macrumors.com/t/VXoW3Y-__lbD9u2WsGEhbu_Q-lQ=/2500x/article-new/2023/07/iPhone-15-Pro-Two-Volume-Buttons-and-Titanium-Feature-Blue-Green.jpg",
          "publishedAt": "2023-07-24T10:56:20Z",
          "content": "Apple is \"considering\" raising the price for both Pro models in its upcoming iPhone 15 series, according to Bloomberg.\r\nCiting unnamed people familiar with the matter, the report claims that despite … [+1360 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "MacRumors"
          },
          "author": "Hartley Charlton",
          "title": "Gurman: Refreshed High-End MacBook Pro and Mac Mini With M3 Chips to Launch Next Year",
          "description": "The Mac mini and high-end MacBook Pro models will not be among the first wave of Macs to launch with the M3 chip later this year, according to Bloomberg's Mark Gurman.\n\n\n\n\n\nIn the latest edition of his \"Power On\" newsletter, Gurman said that he believes \"it's…",
          "url": "https://www.macrumors.com/2023/07/23/new-macbook-pro-and-mac-mini-with-m3-2024-launch/",
          "urlToImage": "https://images.macrumors.com/t/na4HVhc4mouDF2FPKTOTu2lM9xQ=/1810x/article-new/2021/12/m3-feature-black.jpg",
          "publishedAt": "2023-07-23T12:16:12Z",
          "content": "The Mac mini and high-end MacBook Pro will not be among the first wave of Macs to launch with the M3 chip later this year, according to Bloomberg's Mark Gurman.\r\nIn the latest edition of his \"Power O… [+1349 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Les Numériques"
          },
          "author": "Tanguy Andrillon",
          "title": "Test Hisense 65U8KQ : un téléviseur Mini-Led abordable, réactif et lumineux",
          "description": "Avec ses 1056 zones de rétroéclairage et sa dalle VA 4K UHD 144 Hz, le téléviseur Hisense 65U8KQ s'annonce très prometteur, d'autant plus qu'il héberge un système audio Dolby Atmos 50 W. De quoi concurrencer les modèles bien plus onéreux ?",
          "url": "https://www.lesnumeriques.com/tv-televiseur/hisense-65u8kq-p73717/test.html",
          "urlToImage": "https://cdn.lesnumeriques.com/optim/test/21/211860/8770b91e-hisense-65u8kq-un-televiseur-mini-led-abordable-reactif-et-lumineux__1200_630__183-89-2735-1428_wtmk.jpg",
          "publishedAt": "2023-07-24T05:00:00Z",
          "content": "Le Hisense 65U8KQ embarque une dalle LCD VA comme en atteste la forme des sous-pixels.\r\nLe téléviseur Hisense 65U8KQ abrite une dalle VA qui permet d'afficher un bon contraste au détriment d'angles d… [+5262 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Les Numériques"
          },
          "author": "Antonin Leeno",
          "title": "Dossier : Tout savoir sur le Nintendo eShop",
          "description": "Le Nintendo eShop est une boutique en ligne mise en place par la firme nippone en 2011. Il entend permettre aux détenteurs de consoles Nintendo d’acheter des jeux, télécharger des démos gratuites et obtenir des informations sur les prochains titres. Dans cet …",
          "url": "https://www.lesnumeriques.com/gaming/tout-savoir-sur-le-nintendo-eshop-a210587.html",
          "urlToImage": "https://cdn.lesnumeriques.com/optim/article/21/210587/fb9dd124-tout-savoir-sur-le-nintendo-eshop__1200_630__114-281-1787-1159.jpg",
          "publishedAt": "2023-07-23T11:00:00Z",
          "content": "Vous êtes lheureux propriétaire dune console Nintendo (Wii U, 3DS ou Switch) ? Alors le Nintendo eShop est certainement votre espace favori. Il sagit de la bibliothèque numérique de jeux vidéo du jap… [+4859 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Xatakamovil.com"
          },
          "author": "Pepu Ricca",
          "title": "Más brillo y menos consumo energético: el futuro cercano de los paneles OLED que Apple y Samsung miran de reojo",
          "description": "La división de paneles de Samsung y LG son los principales fabricantes de pantallas OLED para móviles y tablets, entre otros dispositivos. A nivel mundial dominan la escena, pues sus productos son utilizados por muchas otras marcas. Además, invierten en I+D p…",
          "url": "https://www.xatakamovil.com/desarrollo/brillo-consumo-energetico-futuro-cercano-paneles-oled-que-apple-samsung-miran-reojo",
          "urlToImage": "https://i.blogs.es/60fd7c/1366_2000-1-/840_560.jpeg",
          "publishedAt": "2023-07-24T11:30:48Z",
          "content": "La división de paneles de Samsung y LG son los principales fabricantes de pantallas OLED para móviles y tablets, entre otros dispositivos. A nivel mundial dominan la escena, pues sus productos son ut… [+2649 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Xatakamovil.com"
          },
          "author": "Eva Rodriguez",
          "title": "No tengo ni Android Auto ni Apple CarPlay en mi coche ni falta que me hace: por qué prefiero usar mi móvil con un soporte",
          "description": "En mi casa tenemos dos coches: un Seat León de 2018 de mi pareja, con una radio con Android Auto y Apple Carplay y mi Volkswagen Polo de 2015, que pese a ser relativamente nuevo, tiene una pantalla donde ver qué canción se está reproduciendo, datos de la cond…",
          "url": "https://www.xatakamovil.com/movil-y-sociedad/no-tengo-android-auto-apple-carplay-mi-coche-falta-que-me-hace-que-prefiero-usar-mi-movil-directamente",
          "urlToImage": "https://i.blogs.es/250e05/portada-google/840_560.jpeg",
          "publishedAt": "2023-07-23T14:00:44Z",
          "content": "En mi casa tenemos dos coches: un Seat León de 2018 de mi pareja, con una radio con Android Auto y Apple Carplay y mi Volkswagen Polo de 2015, que pese a ser relativamente nuevo, tiene una pantalla d… [+3627 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Xatakamovil.com"
          },
          "author": "Eva Rodriguez",
          "title": "Pasaba muchas horas delante del iPhone y con estos ajustes logré despegarme poco a poco",
          "description": "No es ningún secreto que uno de los objetivos de las redes sociales es generar engagment para que sigas dentro otro minutito más...y así luego echas un vistazo a las estadísticas de uso de tu teléfono y te llevas una desagradable sorpresa: no tenía nada espec…",
          "url": "https://www.xatakamovil.com/movil-y-sociedad/pasaba-muchas-horas-delante-iphone-estos-ajustes-logre-despegarme-poco-a-poco",
          "urlToImage": "https://i.blogs.es/188edc/iphone/840_560.jpeg",
          "publishedAt": "2023-07-23T11:00:43Z",
          "content": "No es ningún secreto que uno de los objetivos de las redes sociales es generar engagment para que sigas dentro otro minutito más...y así luego echas un vistazo a las estadísticas de uso de tu teléfon… [+6035 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Techmeme.com"
          },
          "author": null,
          "title": "Sources: Apple asks suppliers to produce about 85M iPhone 15 units in 2023, only slightly below 2021 and 2022's 90M target, and considers raising 15 Pro prices (Bloomberg)",
          "description": "Bloomberg:\nSources: Apple asks suppliers to produce about 85M iPhone 15 units in 2023, only slightly below 2021 and 2022's 90M target, and considers raising 15 Pro prices  —  - Apple targets 85 million units, roughly in line with last year  — Its fortunes aff…",
          "url": "https://www.techmeme.com/230724/p6",
          "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iDwH5VBlY.rM/v1/1200x800.jpg",
          "publishedAt": "2023-07-24T11:02:39Z",
          "content": "About This Page\r\nThis is a Techmeme archive page.\r\nIt shows how the site appeared at 7:05 AM ET, July 24, 2023.\r\nThe most current version of the site as always is available at our home page.\r\nTo view… [+67 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "tagesschau.de"
          },
          "author": "tagesschau.de",
          "title": "Marktbericht: Karten im DAX werden neu gemischt",
          "description": "Der DAX dürfte zu Beginn der neuen Börsenwoche zunächst keine großen Sprünge machen. Nach dem kleinen Verfallstag dürften sich die Anleger am deutschen Aktienmarkt nun neu orientieren.",
          "url": "https://www.tagesschau.de/wirtschaft/finanzen/marktberichte/marktbericht-dax-kurse-aktuell-apple-amazon-tesla-meta-google-100.html",
          "urlToImage": "https://images.tagesschau.de/image/c1256297-08e3-4363-81f9-e695c17c3e8b/AAABiC66iz8/AAABg8tME_8/16x9-1280/boerse-302.jpg",
          "publishedAt": "2023-07-24T05:32:40Z",
          "content": "Stand: 24.07.2023 07:32 Uhr\r\nDer DAX dürfte zu Beginn der neuen Börsenwoche zunächst keine großen Sprünge machen. Nach dem kleinen Verfallstag dürften sich die Anleger am deutschen Aktienmarkt nun ne… [+3253 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Caschys Blog"
          },
          "author": "Felix Frank",
          "title": "Apple: „Mein Fotostream“ ist bald Geschichte – Daten sichern ist angesagt",
          "description": "Seit dem 26. Juni 2023 ist es nicht mehr möglich sein, Fotos von Geräten auf „Mein Fotostream“ hochzuladen. Hierbei handelt es sich um einen Dienst, der Nutzern eine automatische Foto- und Videosynchronisation zwischen Apple-Geräten erlaubt. Bis zu 1.000 Foto…",
          "url": "https://stadt-bremerhaven.de/apple-mein-fotostream-ist-bald-geschichte-daten-sichern-ist-angesagt/",
          "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2023/05/mein-fotostream.jpg",
          "publishedAt": "2023-07-24T07:30:53Z",
          "content": "Seit dem 26. Juni 2023 ist es nicht mehr möglich sein, Fotos von Geräten auf „Mein Fotostream“ hochzuladen. Hierbei handelt es sich um einen Dienst, der Nutzern eine automatische Foto- und Videosynch… [+1007 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Caschys Blog"
          },
          "author": "caschy",
          "title": "E-Mail-Adresse verbergen: Apples Service in anderen Browsern nutzen",
          "description": "Mit macOS Monterey, iOS 15 und iPad OS 15 kam seinerzeit auch eine Funktion namens „E-Mail-Adresse verbergen“ ins System, welche eure echte E-Mail-Adresse vor Anbietern verbirgt. Apple selbst verbaut das Ganze natürlich fest in seinen Apps und dem Safari-Brow…",
          "url": "https://stadt-bremerhaven.de/e-mail-adresse-verbergen-apples-service-in-anderen-browsern-nutzen/",
          "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2023/07/hidemymail.jpg",
          "publishedAt": "2023-07-23T07:30:59Z",
          "content": "Mit macOS Monterey, iOS 15 und iPad OS 15 kam seinerzeit auch eine Funktion namens E-Mail-Adresse verbergen ins System, welche eure echte E-Mail-Adresse vor Anbietern verbirgt. Apple selbst verbaut d… [+2014 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Caschys Blog"
          },
          "author": "caschy",
          "title": "Pokémon GO bekommt Routen-Funktion",
          "description": "Noch jemand bei Pokémon GO dabei? Dann gibt es nun ein neues Feature. Pokémon GO erhält mit Routen ein neues Feature, das der Community eine weitere Möglichkeit eröffnet, zusammen ihre Umgebung zu erkunden. Routen erlauben es Trainern, ihre schönsten Laufstre…",
          "url": "https://stadt-bremerhaven.de/pokemon-go-bekommt-routen-funktion/",
          "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2023/07/poke-route-2.jpg",
          "publishedAt": "2023-07-24T06:30:28Z",
          "content": "Noch jemand bei Pokémon GO dabei? Dann gibt es nun ein neues Feature. Pokémon GO erhält mit Routen ein neues Feature, das der Community eine weitere Möglichkeit eröffnet, zusammen ihre Umgebung zu er… [+1613 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Caschys Blog"
          },
          "author": "André Westphal",
          "title": "Immer wieder sonntags KW 29",
          "description": "Ein neues Juli-Wochenende und ich hoffe, ihr könnt euch ein wenig von der Arbeitswoche erholen. Wer schon am frühen Morgen in diesen Beitrag schaut, dem wünsche ich entsprechend, dass er oder sie freiwillig so früh erwacht ist. Doch werden wir...Zum Beitrag: …",
          "url": "https://stadt-bremerhaven.de/immer-wieder-sonntags-kw-29-10/",
          "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2022/07/Kaffee-Sonntags.jpg",
          "publishedAt": "2023-07-23T04:30:22Z",
          "content": "Ein neues Juli-Wochenende und ich hoffe, ihr könnt euch ein wenig von der Arbeitswoche erholen. Wer schon am frühen Morgen in diesen Beitrag schaut, dem wünsche ich entsprechend, dass er oder sie fre… [+2952 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Frandroid"
          },
          "author": "Hugo Bernard",
          "title": "Pourquoi le Vision Pro pourrait être un échec commercial pour Apple",
          "description": "L'année prochaine sortira le Vision Pro, premier casque de réalité mixte d'Apple. Les risques pour la firme sont grands et de premiers indices laissent à penser qu'il est probable que ce casque se vende en très peu d'exemplaires (à l'échelle d'Apple). En caus…",
          "url": "https://www.frandroid.com/marques/apple/1752061_pourquoi-le-vision-pro-pourrait-etre-un-echec-commercial-pour-apple",
          "urlToImage": "https://images.frandroid.com/wp-content/uploads/2023/06/image-1.jpg",
          "publishedAt": "2023-07-24T09:22:38Z",
          "content": "L'année prochaine sortira le Vision Pro, premier casque de réalité mixte d'Apple. Les risques pour la firme sont grands et de premiers indices laissent à penser qu'il est probable que ce casque se ve… [+4656 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Frandroid"
          },
          "author": "Nathan Le Gohlisse",
          "title": "iPhone SE : le nouveau modèle arriverait encore plus tard que vous le pensez",
          "description": "Modèle le plus abordable chez Apple, l'iPhone SE de 3e génération ne serait finalement pas près d'être remplacé. De nouvelles informations laissent entendre que le modèle de 4e génération n'arriverait pas en 2024... mais potentiellement l'année suivante.",
          "url": "https://www.frandroid.com/marques/apple/1752063_iphone-se-le-nouveau-modele-arriverait-encore-plus-tard-que-vous-le-pensez",
          "urlToImage": "https://images.frandroid.com/wp-content/uploads/2021/04/iphone-xr-rouge.jpg",
          "publishedAt": "2023-07-24T09:56:51Z",
          "content": "Modèle le plus abordable chez Apple, l'iPhone SE de 3e génération ne serait finalement pas près d'être remplacé. De nouvelles informations laissent entendre que le modèle de 4e génération n'arriverai… [+2429 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Wwwhatsnew.com"
          },
          "author": "Juan Diego Polo",
          "title": "Rusia declara a los productos Apple ‘persona non grata’ en su administración pública",
          "description": "Rusia ha decidido marcar una firme línea roja en lo que respecta a la utilización de tecnología occidental en su administración pública. En un movimiento que pone en evidencia las crecientes tensiones entre los gigantes tecnológicos occidentales y el Kremlin,…",
          "url": "https://wwwhatsnew.com/2023/07/24/rusia-declara-a-los-productos-apple-persona-non-grata-en-su-administracion-publica/",
          "urlToImage": "https://wwwhatsnew.com/wp-content/uploads/2023/07/manzana-en-rusia.jpg",
          "publishedAt": "2023-07-24T00:00:44Z",
          "content": "Rusia ha decidido marcar una firme línea roja en lo que respecta a la utilización de tecnología occidental en su administración pública. En un movimiento que pone en evidencia las crecientes tensione… [+2430 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Lifehacker.ru"
          },
          "author": "Дарья Бакина",
          "title": "Подкаст «Повар варит ти»: magazine — журнал, cover — обложка, article — статья",
          "description": "В этом эпизоде запомнить новые английские слова вам помогут маг Зина, бабушкин ковёр и серебряный кол.",
          "url": "https://lifehacker.ru/povar-varit-ti-21/",
          "urlToImage": "https://cdn.lifehacker.ru/wp-content/uploads/2023/06/LX-saJt-LX_1687507325-1024x512.jpg",
          "publishedAt": "2023-07-24T10:30:50Z",
          "content": "« » , , . , . .\r\n , : magazine , cover , article .\r\n , .\r\n « » , : Apple Podcasts, Google Podcasts, YouTube, «», «», «», CastboxSoundStream."
        },
        {
          "source": {
            "id": "lenta",
            "name": "Lenta"
          },
          "author": "Андрей Ставицкий",
          "title": "Разработку складного ноутбука Apple подтвердили",
          "description": "В компании Samsung косвенно подтвердили, что работают над дисплеем, который получит первый складной ноутбук от Apple. По информации инсайдеров, складной экран ноутбука в сложенном состоянии будет иметь диагональ 13 дюймов, в разложенном — 20,5 дюйма. Девайс м…",
          "url": "https://lenta.ru/news/2023/07/24/macbook_fold/",
          "urlToImage": "https://icdn.lenta.ru/images/2023/07/24/10/20230724103514769/share_382beeb1ed001bb33f199f63b05de51b.jpeg",
          "publishedAt": "2023-07-24T09:43:27Z",
          "content": "Samsung , , Apple, 2025 . The Elec.\r\n Samsung Display -, . - , .\r\n - , 20,5 25 . The Elec, Samsung, Apple, MacBook.\r\n , Apple 13 , 20,5 . 2025 . , .\r\n, Apple . Samsung Display LG Display."
        },
        {
          "source": {
            "id": "lenta",
            "name": "Lenta"
          },
          "author": "Вячеслав Агапов",
          "title": "Европа и США решили обойтись без китайских денег",
          "description": "Китайские инвесторы стали отказываться от вложений в экономику Европы и США на фоне роста враждебности к капиталу из КНР. Вместо вложения денег в недвижимость и развития производств в западных странах бизнесмены из Китая стали совершать больше сделок в Азии, …",
          "url": "https://lenta.ru/news/2023/07/24/invest_stop/",
          "urlToImage": "https://icdn.lenta.ru/images/2023/07/24/11/20230724110341816/share_e7b50ce78126d748d0c417e1ecf7bcc5.jpg",
          "publishedAt": "2023-07-24T08:47:12Z",
          "content": ". , The Wall Street Journal (WSJ).\r\n - , , .\r\n , .\r\n« », S&amp;P Global Ratings - . , , - .\r\n . , . , , , , , .\r\n , 2022 147 ( 18 ). 2016 196 , , .\r\n . CNN , . , , .\r\n , , . Goldman Sachs, Tesla, App… [+52 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Srad.jp"
          },
          "author": "headless",
          "title": "米タコベル、「Taco Tuesday」商標の抹消を勝ち取る",
          "description": "米特許商標庁商標審判部 (USPTO TTAB) は 14 日、商標「TACO TUESDAY」登録抹消を求める米 Taco Bell の訴えを認めた\n(商標抹消情報 [1]、\n[2]、\nFOODBEAST の記事、\nWSJ の記事)。\n\n火曜日をタコスの日として宣伝する「TACO TUESDAY」は一般的なフレーズとみなされているが、レストランサービスを対象とした商標はニュージャージー州を除く全米でメキシカンレストランチェーン Taco John's が登録しており、ニュージャージー州のみ Gregory's …",
          "url": "https://yro.srad.jp/story/23/07/23/0157236/",
          "urlToImage": "https://srad.jp/static/topics/court_64.png",
          "publishedAt": "2023-07-23T02:19:00Z",
          "content": "(USPTO TTAB) 14 TACO TUESDAY Taco Bell \r\n( [1][2]FOODBEAST WSJ )TACO TUESDAY Taco John's Gregory's Restaurant &amp; Bar Taco Bell 5 \r\nTTAB Taco Bell Taco John's 18 Gregory's Restaurant &amp; Bar \r\n(G… [+109 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Ifanr.com"
          },
          "author": "方嘉文",
          "title": "早报 | M3 版 MacBook Pro 或明年发布 / 马斯克宣布 Twitter 将换 logo / 微博将推 VVIP 会员体系",
          "description": "· vivo 自曝自研影像芯片 V3\n· realme 11 4G 外观和配置曝光\n·《芭比》预计可为玩偶行业带来 140 亿美元收入#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。\n爱范儿 |\n原文链接 ·\n查看评论 ·\n新浪微博",
          "url": "https://www.ifanr.com/1556416",
          "urlToImage": "https://s3.ifanr.com/images/ep/cover-images/xing_ren_cover.jpg",
          "publishedAt": "2023-07-24T00:48:11Z",
          "content": "Twitter Twitter logo X X \r\n X logo \r\nx.com Twitter \r\nTwitter CEO Linda Yaccarino \r\nTwitter \r\nX \r\nTwitter \r\n 4 Twitter X Corp\r\nBaichuan-7B Meta LLaMa \r\n 20 \r\n LLaMa\r\nOpenAI\r\n VIP/SVIP VVIP \r\nV + VVIP … [+734 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "01net.com"
          },
          "author": "Mickael Bazoge",
          "title": "Netflix n’a pas prévu d’application pour le casque de réalité mixte d’Apple",
          "description": "Netflix n'aurait pas l'intention d'optimiser son application pour le Vision Pro. Ça ne veux pas dire que les utilisateurs du casque de réalité mixte d'Apple seront privés des contenus du service de streaming…",
          "url": "https://www.01net.com/actualites/netflix-ne-prevoit-pas-dapplication-dediee-pour-le-vision-pro.html",
          "urlToImage": "https://www.01net.com/app/uploads/2023/07/Camera-2.jpg",
          "publishedAt": "2023-07-24T06:00:15Z",
          "content": "Netflix n’aurait pas l’intention d’optimiser son application pour le Vision Pro. Ça ne veux pas dire que les utilisateurs du casque de réalité mixte d’Apple seront privés des contenus du service de s… [+3399 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Touchlab.jp"
          },
          "author": "Nakimo",
          "title": "【30%OFF】充電器はこれ一つ「Anker PowerPort III 3-Port 65W Pod」がセール中",
          "description": "Amazonで、急速充電器「Anker PowerPort III 3-Port 65W Pod」が30%OFFで販売されています(タイムセールとポイント還元の合計)。 この充電器の主な特徴は次のとおり： USB-C x […]\nThe post 【30%OFF】充電器はこれ一つ「Anker PowerPort III 3-Port 65W Pod」がセール中 first appeared on Touch Lab - タッチ ラボ.©2019 \"Touch Lab - タッチ ラボ\".",
          "url": "https://touchlab.jp/2023/07/anker_powerportiii_3port65wpod_2023july23/",
          "urlToImage": "https://touchlab.jp/wp-content/uploads/2023/07/anker_powerportiii_3port65wpod_w_30.jpg",
          "publishedAt": "2023-07-23T04:09:21Z",
          "content": "Amazonで、急速充電器「Anker PowerPort III 3-Port 65W Pod」が30%OFFで販売されています(タイムセールとポイント還元の合計)。\nこの充電器の主な特徴は次のとおり：\n<ul>\n<li>USB-C x 2/ USB-A x 1</li>\n<li>USB-C PD 最大65W</li>\n<li>3台同時充電</li>\n<li>折り畳み式プラグ</li>\n<li… [+696 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Touchlab.jp"
          },
          "author": "Nakimo",
          "title": "【30%OFF】充電器はこれ一つ「Anker PowerPort III 3-Port 65W Pod」がセール中",
          "description": "Amazonで、急速充電器「Anker PowerPort III 3-Port 65W Pod」が30%OFFで販売されています(タイムセールとポイント還元の合計)。 この充電器の主な特徴は次のとおり： USB-C x […]\nThe post 【30%OFF】充電器はこれ一つ「Anker PowerPort III 3-Port 65W Pod」がセール中 first appeared on Touch Lab - タッチ ラボ.©2019 \"Touch Lab - タッチ ラボ\".",
          "url": "http://touchlab.jp/2023/07/anker_powerportiii_3port65wpod_2023july23/",
          "urlToImage": "http://touchlab.jp/wp-content/uploads/2023/07/anker_powerportiii_3port65wpod_w_30.jpg",
          "publishedAt": "2023-07-23T04:09:21Z",
          "content": "Amazonで、急速充電器「Anker PowerPort III 3-Port 65W Pod」が30%OFFで販売されています(タイムセールとポイント還元の合計)。\nこの充電器の主な特徴は次のとおり：\n<ul>\n<li>USB-C x 2/ USB-A x 1</li>\n<li>USB-C PD 最大65W</li>\n<li>3台同時充電</li>\n<li>折り畳み式プラグ</li>\n<li… [+696 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "GSMArena.com"
          },
          "author": "Peter",
          "title": "Flashback: a look back at the best mobile games of 2013",
          "description": "According to stats from App Annie, back in 20213 there were only 7 mobile games with a revenue of $100 million (or more) a year (PDF). Fast forward to 2021 and there were 7 mobile games with revenues of $100 million or more... a month. Mobile games are now th…",
          "url": "https://www.gsmarena.com/flashback_a_look_back_at_the_best_mobile_games_of_2013-news-59251.php",
          "urlToImage": "https://fdn.gsmarena.com/imgroot/news/23/07/flashback-best-mobile-games-of-2013/-952x498w6/gsmarena_000.jpg",
          "publishedAt": "2023-07-23T07:11:02Z",
          "content": "According to stats from App Annie, back in 20213 there were only 7 mobile games with a revenue of $100 million (or more) a year (PDF). Fast forward to 2021 and there were 7 mobile games with revenues… [+4462 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "GSMArena.com"
          },
          "author": "Peter",
          "title": "Weekly deals: the best smartphone deals from Germany, the UK, the US and India",
          "description": "With the craziness of Prime Day over, things have settled down but there are still plenty of good deals to be had, especially as makers start discounting older devices to clear out their inventory. We also found deals on new devices too, some of which launche…",
          "url": "https://www.gsmarena.com/weekly_deals_the_best_smartphone_deals_from_germany_the_uk_the_us_and_india-news-59272.php",
          "urlToImage": "https://fdn.gsmarena.com/imgroot/news/23/07/weekly-deals-21/-952x498w6/gsmarena_000.jpg",
          "publishedAt": "2023-07-23T13:27:01Z",
          "content": "With the craziness of Prime Day over, things have settled down but there are still plenty of good deals to be had, especially as makers start discounting older devices to clear out their inventory. W… [+11201 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "01net.com"
          },
          "author": "Dimitri Charitsis",
          "title": "Test de la Garmin Forerunner 965: le meilleur rapport qualité/prix de toutes les montres de sport chez Garmin?",
          "description": "Dotée dun écran Amoled, la Forerunner de 965 pourrait bien être la bonne surprise des montres de sport de Garmin. Moins chère que lEpix 2 et que lEpix Pro est-elle pour autant moins performante ?",
          "url": "https://www.01net.com/actualites/test-de-la-garmin-forerunner-965-le-meilleur-rapport-qualite-prix-de-toutes-les-montres-de-sport-chez-garmin.html",
          "urlToImage": "https://www.01net.com/app/uploads/2023/07/IMG_7212.jpg",
          "publishedAt": "2023-07-24T05:43:22Z",
          "content": "Dotée dun écran Amoled, la Forerunner de 965 pourrait bien être la bonne surprise des montres de sport de Garmin. Moins chère que lEpix 2 et que lEpix Pro est-elle pour autant moins performante ?Garm… [+14561 chars]"
        }
      ]
    
    const [data=articles, setNews] = useState('')
    
   
    return(
        <>
        <h1>News</h1>
        <div className="news-container">
        <News imglink="https://i.blogs.es/947ce0/vpn/840_560.jpeg" title="England Qualifies For CWC 2019" description="England have successfully qualified for CWC 2019 after beating zimbawe by 8 wickets."   />

        </div>

        </>
    )
}