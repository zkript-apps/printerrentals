import React from 'react'
import TitleDescriptionLink from './TitleDescriptionLink'

const itemLinks = [
    {
      item: "Home",
      link: "/home",
    },
    {
      item: "Printers",
      link: "/printers",
    },
    {
      item: "About",
      link: "/about",
    },
    {
        item: "Blog",
        link: "/blog",
      },
      {
        item: "Contact",
        link: "/contact",
      },
  ];

const PagesSection = () => {
  return (
    <div>
        <TitleDescriptionLink title='Pages' itemLinks={itemLinks}/>
    </div>
  )
}

export default PagesSection