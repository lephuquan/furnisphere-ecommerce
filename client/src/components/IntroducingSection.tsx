import React from 'react';

const IntroducingSection = () => {
  return (
    <>
      <div className="flex h-auto w-full justify-center">
        {/* Mobile video */}
        <div
          className="block aspect-[19/25] w-full md:hidden"
          data-style="vimeo-video"
          data-vimeo-initialized="true"
        >
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <iframe
              className="h-full w-full"
              src="https://player.vimeo.com/video/1037970705?h=da21c34104&amp;autoplay=1&amp;title=0&amp;byline=0&amp;muted=1&amp;autopause=0&amp;controls=0&amp;loop=1&amp;app_id=122963"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="W25_kravet HP1_D_1680w x 970h_120524"
              data-ready="true"
              style={{ pointerEvents: 'none' }}
            ></iframe>
          </a>
        </div>

        {/* PC video */}
        <div className="hidden aspect-[43/25] w-full md:block">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <iframe
              className="h-full w-full"
              src="https://player.vimeo.com/video/1036505667?h=6d3daa96b8&amp;autoplay=1&amp;title=0&amp;byline=0&amp;muted=1&amp;autopause=0&amp;controls=0&amp;loop=1&amp;app_id=122963"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="W25_kravet HP1_D_1680w x 970h_120524"
              data-ready="true"
              style={{ pointerEvents: 'none' }}
            ></iframe>
          </a>
        </div>
      </div>
    </>
  );
};

export default IntroducingSection;
