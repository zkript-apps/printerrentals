const Banner = () => {
  return (
    <div
      className="w-full
            h-28
            md:h-40
            lg:h-[216px]
            relative
            overflow-hidden
            block
            z-10
						
            bg-[url('https://printerrentalsph.com/wp-content/uploads/2019/01/nordwood-themes-469906-unsplash.jpg')]
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
      <h1 className="flex justify-center items-center h-full w-full text-[30px] md:text-[40px] text-white uppercase">
        Contact Us
      </h1>
    </div>
  );
};

export default Banner;
