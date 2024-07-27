import React from 'react'
import TitleDescriptionLink from './TitleDescriptionLink'

const itemLinks = [
    {
      item: "Brother InkJet",
      link: "/printers/#brother-inkjet",
    },
    {
      item: "Brother LaserJet",
      link: "/printers/#brother-laserjet",
    },
    {
      item: "Epson InkJet",
      link: "/printers/#epson-inkjet",
    },
  ];

const PrinterForRentSection = () => {
  return (
    <div>
        <TitleDescriptionLink title='Printers for Rent' itemLinks={itemLinks}/>
    </div>
  )
}

export default PrinterForRentSection