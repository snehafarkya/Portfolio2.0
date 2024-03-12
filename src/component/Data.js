import meta from '../assets/blogsimage/meta.png'
import petra from '../assets/blogsimage/petra.png'
import menstrual from '../assets/blogsimage/menstrual.png'
import linkedin from '../assets/blogsimage/linkedin.png'
import love from '../assets/blogsimage/love.png'
import cloud1 from '../assets/blogsimage/cloud1.png'
import cloud2 from '../assets/blogsimage/cloud2.jpg'
import aws1 from '../assets/blogsimage/aws1.jpg'
import aws2 from '../assets/blogsimage/aws2.webp'
import insta from '../assets/blogsimage/insta.webp'
import mongodb from "../assets/blogsimage/mongodb.avif"
import nodejs from "../assets/blogsimage/nodejs.avif"



const Data = [
  {
    id:'8',
    image:nodejs,
    title:'Node.js Events: Building Event-Driven Applications',
    category:'Technical',
    categoryDesc:"In the vast era of rapid technology development, it is necvessary to stay updated! Read my technical articles here.",
    desc:'Node.js is a powerful and widely used JavaScript runtime built on Chromes V8 JavaScript engine. It allows developers to build scalable',
    link:'https://snehafarkya.hashnode.dev/nodejs-events-building-event-driven-applications'
  },  
  {
    id:'12',
    image:petra,
    title:'The Rose-Tinted Beauty of Petra: Exploring the Sculpturous Rose City',
    categoryDesc:"Not only I write on tech, but I love travelling and so I am dicovering the hidden gems of WORLD. Come join me in this.",
    category:'Travel',
    desc:'The 2000-year-old city of Petra is among one of the seven wonders of the world. An interesting city covered with ...',
    link:'https://sneha-farkya.notion.site/sneha-farkya/Petra-A-Rose-City-4228d8ca1ead476785d327ac754629c6'
  },

  {
    id:'3',
    image:"https://cdn.hashnode.com/res/hashnode/image/upload/v1694518523619/e0feeb0c-04cc-499e-8889-9ad3c27c9caf.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    title:'Initiating Pull Requests on GitHub: Hacktoberfest 2023 Edition',
    category:'Technical',
    desc:"GitHub, the world's largest community of developers, provides a powerful platform for collaborative software development. One of the fundamental...",
    link:'https://snehafarkya.hashnode.dev/initiating-pull-requests-on-github-hacktoberfest-2023-edition'
  },
  {
    id:'8',
    image:mongodb,
    title:'Connecting MongoDB with Express.js: A Practical Guide',
    category:'Technical',
    desc:'Integrating MongoDB, a popular NoSQL database, with Express.js, a robust web application framework, enables developers to build powerful...',
    link:'https://snehafarkya.hashnode.dev/connecting-mongodb-with-expressjs-a-practical-guide'
  },
  {
    id:'11',
    image:meta,
    title:'Moving Towards a Democratic World',
    categoryDesc:"Living in the society give us every right to know the current happenings as well as to correct the society. Take your popcorn and start reading about Love, society, peer pressure etc.",
    category:'Social',
    desc:'The Internet is getting fast and we are getting trapped! In the modern era, if we want to understand any concept, google...',
    link:'https://snehafarkya.hashnode.dev/moving-towards-a-democratic-internet'
  },
  
  {
    id:'2',
    image:aws1,
    title:'Top AWS Customers you should know',
    category:'Technical',
    desc:'Sometimes, it may seem as though the $120 billion cloud industry just popped up out of nowhere. Nevertheless, Amazon Web Services (AWS)...',
    link:'https://docs.google.com/document/d/1UL8r0HgBvsMQbnA_6dRozD0kGuY0K6i76FB61TvyCEk/edit?usp=sharing'
  },
  {
    id:'4',
    image:cloud1,
    title:'A Rise in the Clouds: Analyzing Google Cloud Revenue',
    category:'Technical',
    desc:'Five years ago, Google entered the market of Cloud Computing. It started providing...',
    link:'https://docs.google.com/document/d/15dCHYIrvzACtLXp16cVlldBVbCOlMYJO-TyM0TMTpbk/edit?usp=sharing'
  },
  {
    id:'5',
    image:cloud2,
    title:'Take a look at Google Kubernetes Engine Pricing',
    category:'Technical',
    desc:'Kubernetes, also known as K8s, is an open-source platform to deploy, scale and manage...',
    link:'https://docs.google.com/document/d/1jozpv1U2Y8EY6ZSNTNoR4cTbj1baRuPJYFhQiFaebcM/edit?usp=sharing'
  },
  {
    id:'6',
    image:aws2,
    title:'Different ways to get AWS credits',
    category:'Technical',
    desc:'A cost-effective services, products, data warehouses, high-powered computing, storage, development, analytics, content...',
    link:'https://docs.google.com/document/d/15OQn6CT7sOJIIbwMzZ-qhKJV_rs5Y0NEQDiNELptlIo/edit?usp=sharing'
  },
  {
    id:'1',
    image:aws2,
    title:'AWS Dominates the Cloud: A Look at AWS Revenue in 2022',
    category:'Technical',
    desc:'back to 2002, an initial beta release of AWS took place. It provided SOAP and XML interfaces for the Amazon product catalog .....',
    link:'https://docs.google.com/document/d/1LCBuXMgaw-c3NnyPJFl2HMIqnz_Hy5FbSVeNBDIIw1M/edit?usp=sharing'
  },
  {
    id:'7',
    image:"https://cdn.hashnode.com/res/hashnode/image/upload/v1686932554289/d5ffb956-58f2-4ec8-a2ea-bdbbb10a3a56.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    title:'Crafting a Dynamic Profile Card: Unleashing React and Tailwind CSS',
    category:'Technical',
    desc:"In this tutorial, we'll explore how to build an interactive Profile Card using React and Tailwind CSS. We'll walk through...",
    link:'https://snehafarkya.hashnode.dev/crafting-a-dynamic-profile-card-unleashing-react-and-tailwind-css'
  },
  {
    id:'8',
    image:"https://cdn.hashnode.com/res/hashnode/image/upload/v1685902524303/883eb839-df5a-43dd-afd3-45cf569cfc64.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    title:'Getting Started with MySQL and Node.js: A Basic Code Example',
    category:'Technical',
    desc:'MySQL is one of the most popular open-source relational database management systems, and Node.js is a powerful JavaScript runtime environment.',
    link:'https://snehafarkya.hashnode.dev/getting-started-with-mysql-and-nodejs-a-basic-code-example'
  },
  {
    id:'9',
    image:insta,
    title:'How to build brand on Instagram',
    category:'Social',
    desc:'Fascinating right? Instagram has now become the voice of billions of people around the world! Owned by Facebook in 2012, Instagram has...',
    link:'https://docs.google.com/document/d/1Vjke2bCMLbWKYHuIpEO3iIwt2Vmc2gVGuvD9G83XSuE/edit?usp=sharing'
  },
  {
    id:'10',
    image:linkedin,
    title:'Mark a shine on Linkedin Profile',
    category:'Social',
    desc:'LinkedIn is a social platform that is used for professional purposes, connecting the world over the internet. It was Launched on May 5, 2003...',
    link:'https://snehafarkya.hashnode.dev/how-to-get-started-with-linkedin-profile'
  },

  {
    id:'13',
    image:menstrual,
    title:'Blooming into Menstrual Hygiene Day',
    category:'Social',
    desc:'Before framing anything, I would like to ask you something! How did you react when you first got to know...',
    link:'https://sneha-farkya.notion.site/Blooming-into-Menstrual-Hygiene-Day-82f1b1013c214a9d88d1b36080541828'
  },
  {
    id:'14',
    image:love,
    title:'Nourish Your Love: The Secret to a Thriving Relationship',
    category:'Social',
    desc:'Love has many forms around us be it a Mother-children love, friends love, or a romantic one! Every relation has its importance as well as definition...',
    link:'https://sneha-farkya.notion.site/A-Healthy-Love-Life-55ce69049fb94edbb525652da17be34a'
  },

]
export default Data