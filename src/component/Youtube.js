import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Heading } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';
import xmljs from 'xml-js';
import { MdInsights } from "react-icons/md";


const Youtube = () => {
  const [jsonData, setJsonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchXMLData = async () => {
      try {
        const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.youtube.com/feeds/videos.xml?channel_id=UCNizQ0yVEPOm3-QJBKcG5Nw'));
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const xml = data.contents;
        const result = xmljs.xml2js(xml, { compact: true });
        setJsonData(result.feed.entry);
      } catch (err) {
        setError('Error fetching XML data');
      } finally {
        setLoading(false);
      }
    };
    fetchXMLData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })}`;
  };

  return (
    <>
      <Helmet>
        <title>Youtube Playlist</title>
        <meta
          name="description"
          content="This is the blogs page of my portfolio. I am a technical writer and I write about tech and travel."
        />
        <link rel="canonical" href="/playlist" />
      </Helmet>
      <div className='md:mx-28'>
        <Heading
          size="xl"
          as="h2"
          width="fit-content"
          fontFamily='Orbitron'
          paddingBottom="4px"
          letterSpacing='1px'
          marginX={{base:'24px',md:'0px'}}
          borderBottom="2px solid"
          borderBottomWidth="3px"
          textColor="white"
          marginBottom="20px"
          paddingX={{base:"16px",md:"4px"}}
          paddingTop={{base:'28', md:'0'}}
        >
          Playlist ✨
        </Heading>
        <div className="flex w-fit flex-row flex-wrap md:gap-8 justify-center">
          {jsonData.map((video, index) => (
            <div key={index} className="video-list bg-white rounded-lg ">
              <div className='bg-transparent flex flex-col gap-4 w-[350px] h-max'>
              <div className="h-[200px] ">
      {/* {videoLoading && (
        <img
          src={wonders}
          alt="Loading..."
          className="absolute inset-0 object-cover w-full h-full"
          style={{ zIndex: 1 }} // Ensure image is on top
        />
      )} */}
      <ReactPlayer
        url={video.link._attributes.href}
        controls
        playing
      />
    </div>
                <div className="flex flex-col gap-1 px-4 pb-4">
                  <div className="flex justify-between">
                  </div>
                  <span className='text-ellipsis leading-5 line-clamp-2 text-black text-base font-bold'>
                    {video.title._text}
                  </span>
                  <p className='text-gray-600 flex justify-between items-center font-semibold text-sm'>
                    {/* {video.author.name._text} &#x2022;  */}
                    {/* <span className='text-gray-600 font-medium'> */}
                      {formatDate(video.published._text)}
                    <span><MdInsights /> {video?.media?.group?.media?.statistics?._attributes?.views}</span>
                    {/* {console.log('views:',video.media.group)} */}
                    {/* </span> */}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Youtube;
