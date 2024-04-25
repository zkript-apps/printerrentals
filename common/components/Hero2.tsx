import React from "react";

const Hero2 = () => {
  return (
    <div
      className="w-full
            h-screen
            max-h-[32rem]
            p-24
            relative
            overflow-hidden
            block
            z-10
						
            bg-[url('https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]
            bg-cover
            bg-no-repeat
            bg-center

            before:content-['']
            before:absolute
            before:inset-0
            before:block
            before:bg-gradient-to-r
            before:from-green-400
            before:to-blue-500
            before:opacity-75
            before:z-[-5]
			"
    >
      <h1 className="text-black text-4xl">
        Image background with overlay gradient
      </h1>
    </div>
  );
};

export default Hero2;
