import Link from 'next/link';

const HeaderBanner = () => {
  return (
    <div className="flex justify-end items-center w-full h-9 pr-5 bg-transparent text-xs md:text-sm">
      <div className="flex justify-center gap-3">
        <Link href="/contact">
          <mark className="text-white font-semibold bg-transparent">
            (732) 795-5187
          </mark>
        </Link>
        <span className="text-white">&#124;</span>
        <mark className="text-gray-400 font-medium bg-transparent">
          contact@arcanadigital.io
        </mark>
      </div>
    </div>
  );
};

export default HeaderBanner;
