import React from 'react';

const PotteryBarn = () => {
  return (
    <div>
      {/* Mobile screen */}
      <div className="block flex w-full flex-col gap-4 md:hidden">
        <a href="#" className="flex w-full flex-col items-center justify-center space-y-0">
          <div className="flex w-full flex-col items-center justify-center bg-[#606c4c] pt-[2%]">
            <iframe
              src="https://player.vimeo.com/video/1047278480?h=da21c34104&amp;autoplay=1&amp;title=0&amp;byline=0&amp;muted=1&amp;autopause=0&amp;controls=0&amp;loop=1&amp;app_id=122963"
              className="aspect-[27/22] w-[90%]"
              allowFullScreen
            ></iframe>
          </div>

          <img
            src="https://assets.pbimgs.com/pbimgs/ab/images/dp/ecm/202504/2011/001/001.png"
            alt="banner"
          />
        </a>
        <a href="#">
          <img
            src="https://assets.pbimgs.com/pbimgs/ab/images/dp/ecm/202505/2656/001/001.jpg"
            alt="banner"
          />
        </a>
      </div>

      {/* PC screen */}
      <div className="hidden md:block">
        <a href="#">
          <div className="flex w-full items-center justify-center">
            <img
              className="aspect-[22/23] w-[40%]"
              src="https://assets.pbimgs.com/pbimgs/ab/images/dp/ecm/202504/2011/001/002.png"
              alt="banner"
            />
            <iframe
              className="aspect-[30/21] w-[60%]"
              src="https://player.vimeo.com/video/1047278464?h=da21c34104&amp;autoplay=1&amp;title=0&amp;byline=0&amp;muted=1&amp;autopause=0&amp;controls=0&amp;loop=1&amp;app_id=122963"
              allowFullScreen
            ></iframe>
          </div>
        </a>
      </div>
    </div>
  );
};

export default PotteryBarn;
