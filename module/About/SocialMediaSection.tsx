import React from 'react'
import TitleDescriptionLink from './TitleDescriptionLink'

const itemLinks = [
    {
      item: "Facebook",
      link: "https://www.facebook.com/printerrentalsph/",
    },
    {
      item: "Twitter",
      link: "https://printerrentalsph.com/about/#",
    },
    {
      item: "Instagram",
      link: "https://printerrentalsph.com/about/#",
    },
  ];

const SocialMediaSection = () => {
  return (
    <div>
        <TitleDescriptionLink title='Social Media' itemLinks={itemLinks}/>
    </div>
  )
}

export default SocialMediaSection