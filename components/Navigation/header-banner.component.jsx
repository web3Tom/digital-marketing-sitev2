import Link from 'next/link';
import { MediaQuery } from '../../core/utils/use-media-query';

const HeaderBanner = () => {
  const isMobile = MediaQuery(480);

  return (
    <div className="absolute top-0 h-auto w-full bg-gradient-to-r from-secondary-500 via-primary-500 to-secondary-600">
      <div className="max-w-[1680px] h-7 mx-auto px-10 cus:px-0 sm:px-10 flex justify-center sm:justify-between items-center text-xs sm:text-sm">
        {isMobile ? null : (
          <div className="">
            <Link href="https://app.countrysidemedia.io">
              <a className="text-xs leading-3 font-semibold cursor-pointer select-none text-black hover:text-white sm:text-sm">
                Login
              </a>
            </Link>
          </div>
        )}
        <div className="flex justify-center gap-2 text-xs sm:justify-end sm:gap-3 sm:text-sm">
          {isMobile ? (
            <>
              <Link href="https://app.countrysidemedia.io">
                <a className="text-xs font-semibold leading-5 sm:text-sm sm:leading-normal cursor-pointer select-none text-white">
                  Login
                </a>
              </Link>
              <span className="text-black text-xs sm:text-sm">&#124;</span>
            </>
          ) : null}
          <Link href="/contact">
            <mark className="text-xs text-black font-semibold bg-transparent leading-5">
              (732) 795-5187
            </mark>
          </Link>
          <span className="text-black text-xs sm:text-sm">&#124;</span>
          <mark className="text-black font-semibold bg-transparent text-xs leading-5">
            contact@arcanadigital.io
          </mark>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
