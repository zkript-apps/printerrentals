import { Typography } from "@/common/components/ui/Typography"

const Banner = () => {
    return (
        <div className="w-full  
            h-28
            md:h-40
            lg:h-[216px] 
            relative 
            overflow-hidden 
            block z-10 
            bg-[url('/printer-title-bar-bg.jpg')] 
            bg-cover bg-no-repeat 
            bg-center before:content-[''] 
            before:absolute before:inset-0 
            before:block before:bg-gradient-to-r 
            before:from-blue-900 before:to-yellow-500 
            before:opacity-75 before:z-[-5]
            ">
        <div className="absolute inset-0 flex items-center justify-center">
          <Typography className="text-white text-[30px] md:text-[40px] uppercase">Printers</Typography>
        </div>
      </div>
    )
}

export default Banner