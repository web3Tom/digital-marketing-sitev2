import Image from 'next/image';
import React from 'react';
import { myLoader } from '../../utils/image-loader';

const CRMIntegrations = () => {
  return (
    <>
      <p className="text-center text-lg xs:text-xl sm:text-2xl tab:text-4xl">
        Easily <b className="text-primary">Integrates</b> With Leading Apps
      </p>
      <div className="mt-3 w-full h-full grid grid-rows-2 justify-center items-center">
        <div className="flex justify-between items-center gap-x-4 sm:gap-x-16">
          <div className="relative w-[80px] h-[60px] xs:w-[90px] xs:h-[67px] tab:w-[100px] tab:h-[75px] md:w-[120px] md:h-[90px]">
            <Image
              loader={myLoader}
              src="6350456fd7a60e6b6e35e212"
              alt="clio-integration"
              layout="fill"
              objectFit
            />
          </div>
          <div className="relative w-[80px] h-[60px] xs:w-[90px] xs:h-[67px] tab:w-[100px] tab:h-[75px] md:w-[120px] md:h-[90px]">
            <Image
              loader={myLoader}
              src="63504abeac2b4c2e640ae714"
              alt="google-integration"
              layout="fill"
              objectFit
            />
          </div>
          <div className="relative w-[80px] h-[60px] xs:w-[90px] xs:h-[67px] tab:w-[100px] tab:h-[75px] md:w-[120px] md:h-[90px]">
            <Image
              loader={myLoader}
              src="63504c4a137cf4776915cdec"
              alt="fb-messenger-integration"
              layout="fill"
            />
          </div>
        </div>
        <div className="flex justify-evenly items-center">
          <div className="relative w-[80px] h-[60px] xs:w-[90px] xs:h-[67px] tab:w-[100px] tab:h-[75px] md:w-[120px] md:h-[90px]">
            <Image
              loader={myLoader}
              src="63504cc04c6f5e76379c35e7"
              alt="zapier-integration"
              layout="fill"
            />
          </div>
          <div className="relative w-[80px] h-[60px] xs:w-[90px] xs:h-[67px] tab:w-[100px] tab:h-[75px] md:w-[120px] md:h-[90px]">
            <Image
              loader={myLoader}
              src="63504d174c6f5ea0189c3600"
              alt="quickbooks-integration"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CRMIntegrations;
