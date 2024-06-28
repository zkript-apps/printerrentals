import { Typography } from '@/common/components/ui/Typography';
import React from 'react';

const ContactUsSection = () => {
  return (
    <div
      className="w-full
        h-64
        relative
        overflow-hidden
        block
        z-10
                    
        bg-[url('/hero.jpg')]
        bg-cover
        bg-no-repeat
        bg-center

        before:content-['']
        before:absolute
        before:inset-0
        before:block
        before:bg-gradient-to-r
        before:from-blue-900
        before:to-yellow-500
        before:opacity-75
        before:z-[-5]"
    >
      <div className="flex items-center justify-center h-full relative z-10">
        <Typography className="text-center text-white text-5xl">CONTACT US</Typography>
      </div>
    </div>
  );
}

export default ContactUsSection;
