import React from 'react'
import { Heading } from '@chakra-ui/react'
import {FaHtml5,FaCss3Alt,FaBootstrap,FaGithubSquare,FaJsSquare,FaSass,FaJava,FaMicrosoft,FaNode,FaNpm,FaReact,FaPhp,FaPython, FaBitbucket} from 'react-icons/fa'
import {SiTailwindcss,SiNetlify,SiMysql,SiNotion,SiWordpress, SiNextdotjs} from 'react-icons/si'
import {IoLogoVercel} from 'react-icons/io5'
export default function Skills() {
  const data = [
    {
      icon: <FaHtml5 color='black' size='56' className='  z-50 h-12 p-1 flex justify-center items-center'/>,
      label:'5/5 HTML5'
    },
    {
      icon:<FaCss3Alt color='black' size='56' className='  z-50 h-12 p-1'/>,
      label:'5/5 CSS3'
    },
    {
      icon:<FaBootstrap color='black' size='56' className='  z-50 h-12 p-1'/>,
      label:'4/5 BootStrap'
    },
    {
      icon:<FaReact color='black' size='56' className='  z-50 h-12 p-1'/>,
      label:'4/5 React Js'
    },
    {
      icon:<FaJsSquare color='black' size='56' className='  z-50 h-12 p-1'/>,
      label:'4/5 JavaScript'
    },
    {
      icon:<FaGithubSquare color='black' size='56' className='  z-50 h-12 p-1'/>,
      label:'5/5 GitHub'
    },
    {
      icon:<FaSass color='black' size='56' className='  z-50 h-12 p-1'/>,
      label:'4/5 Sass'
    },
    {
      icon:<SiNotion color='black' size='56' className='  z-50 h-12 p-1'/>,
      label:'5/5 Notion'
    },
    {
      icon:<FaMicrosoft color='black' size='56' className='  z-50 h-12 p-1'/>,
      label:'5/5 Microsoft'
    },
    {
      icon:<FaNode color='black' size='56' className='  z-50 h-12 p-1'/>,
      label:'3/5 Node'
    },
    {
      icon:<FaNpm color='black' size='56' className='  z-50 h-12 p-1'/>,
      label:'4/5 Npm'
    },
    {
      icon:<SiWordpress color='black' size='56' className='  z-50 h-12 p-1'/>,
      label:'5/5 HTML5'
    },
    {
      icon:<SiTailwindcss color='black' size='56' className='  z-50 h-12 p-1'/>,
      label:'5/5 HTML5'
    },
    {
      icon:<SiNetlify color='black' size='56' className='  z-50 h-12 p-1'/>,
      label:'4/5 Netlify'
    },
    {
      icon:<SiNextdotjs color='black' size='56' className='  z-50 h-12 p-1'/>,
      label:'4/5 Next Js'
    },
    {
      icon: <SiMysql color='black' size='56' className='  z-50 h-12 p-1'/>,
      label:'3/5 MySql'
    },
    {
      icon: <IoLogoVercel color='black' size='56' className='  z-50 h-12 p-1'/>,
      label:'5/5 Vercel'
    },
    {
      icon: <FaBitbucket color='black' size='56' className='  z-50 h-12 p-1'/>,
      label:'5/5 BitBucket'
    },
  ]
  return (
    <div className='md:p-4 px-6 mt-10 md:mt-16'>
      <Heading
    size="lg"
    as="h2"
    textDecoration="underline"
    textAlign={{}}
    fontFamily='Orbitron'
    letterSpacing='1px'
    color='white'
    // className='icon'
  >
    Skills
  </Heading>
  <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 gap-x-10 md:py-20 py-10 place-items-center">
    {data.map((item,index)=>{
      return(
        <>
         <div className="w-80 bg-white/50 group transition ease-in-out duration-700 h-14 hover:bg-white rounded-3xl z-10 relative flex items-center">
      <div className="rounded-3xl h-14  group-hover:translate-x-[263px] transition ease-in-out duration-700 bg-white absolute flex justify-center items-center">
    {/* <FaHtml5 color='black' size='56' className='rounded-3xl z-50 h-14'/> */}
{item.icon}
    </div>
    <p className='text-center flex justify-center items-center mx-auto skillbtnfill left-20 text-xl group-hover:scale-[1.03] font-bold'>{item.label}</p>
    </div>
        </>
      )
    })}
   
    {/* <FaHtml5 color='white' size='72' className='icon'/>
    <FaCss3Alt color='white' size='72' className='icon'/>
    <FaBootstrap color='white' size='72' className='icon'/>
    <FaReact color='white' size='72' className='icon'/>
    <FaJsSquare color='white' size='72' className='icon'/>
    <FaNode color='white' size='72' className='icon'/>
    <FaGithubSquare color='white' size='72' className='icon'/>
    <FaNpm color='white' size='72' className='icon'/>
    <FaMicrosoft color='white' size='72' className='icon'/>
    <FaPython color='white' size='72' className='icon'/>
    <FaSass color='white' size='72' className='icon'/>
    <SiTailwindcss color='white' size='72' className='icon'/>
    <IoLogoVercel color='white' size='72' className='icon'/>
    <SiNetlify color='white' size='72' className='icon'/>
    <SiMysql color='white' size='72' className='icon'/>
    <FaJava color='white' size='72' className='icon'/>
    <SiNotion color='white' size='72' className='icon'/>
    <SiWordpress color='white' size='72' className='icon'/> */}
    {/* <SiDocs color='white' size='72' className='icon'/> */}



  </div>
  </div>
  )
}
