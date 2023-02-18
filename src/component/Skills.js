import React from 'react'
import { Heading } from '@chakra-ui/react'
import {FaHtml5,FaCss3Alt,FaBootstrap,FaGithubSquare,FaJsSquare,FaSass,FaJava,FaMicrosoft,FaNode,FaNpm,FaReact,FaPhp,FaPython} from 'react-icons/fa'
import {SiTailwindcss,SiNetlify,SiMysql,SiNotion,SiWordpress} from 'react-icons/si'
import {IoLogoVercel} from 'react-icons/io5'
export default function Skills() {
  return (
    <div className='p-4 md:mt-16'>
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
  <div className="icons my-20 grid grid-cols-2 md:grid-cols-6 gap-10 py-20 place-items-center">
    <FaHtml5 color='white' size='72' className='icon'/>
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
    <SiWordpress color='white' size='72' className='icon'/>
    {/* <SiDocs color='white' size='72' className='icon'/> */}



  </div>
  </div>
  )
}
