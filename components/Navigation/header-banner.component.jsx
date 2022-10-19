import Link from 'next/link';
import { MediaQuery } from '../../core/utils/use-media-query';

const HeaderBanner = () => {
  const isMobile = MediaQuery(480);

  return (
    <div className="absolute top-0 h-auto w-full bg-gradient-to-r from-transparent to-green-600 tab:from-transparent tab:via-transparent tab:to-green-600">
      <div className="h-7 max-w-[1680px] mx-auto px-10 sm:px-10 cus:px-0 flex justify-end items-center">
        <div className="flex justify-center gap-2 sm:gap-3 text-[10px] md:text-xs text-white font-semibold leading-5">
          <Link href="/contact">
            <mark className="bg-transparent text-white">(732) 795-5187</mark>
          </Link>
          <span>&#124;</span>
          <mark className="bg-transparent text-white">
            contact@arcanadigital.io
          </mark>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
