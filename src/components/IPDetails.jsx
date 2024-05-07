import React from 'react';

export default function IPDetails({ apiData }) {
  return (
    <>
      {!apiData ? (
        <div>Loading...</div>
      ) : (
        <div className="absolute bottom-0 translate-y-1/2 flex flex-wrap bg-white justify-center items-center w-[90%] lg:w-[70%] p-[20px] text-center sm:text-left rounded-xl flex-col sm:flex-row z-10 gap-2">
          <div className="flex-1">
            <h2 className="text-[10px] text-[hsl(0, 0%, 59%)]">IP ADDRESS</h2>
            <p className="text-[hsl(0, 0%, 17%)] font-bold text-[20px]">
              {apiData?.query}
            </p>
          </div>
          <div className="flex-1">
            <h2 className="text-[10px] text-[hsl(0, 0%, 59%)]">LOCATION</h2>
            <p className="text-[hsl(0, 0%, 17%)] font-bold text-[20px]">
              {apiData?.regionName}, {apiData?.countryCode}
            </p>
          </div>
          <div className="flex-1">
            <h2 className="text-[10px] text-[hsl(0, 0%, 59%)]">TIMEZONE</h2>
            <p className="text-[hsl(0, 0%, 17%)] font-bold text-[20px]">
              {apiData?.timezone}{' '}
            </p>
          </div>
          {apiData?.isp && (
            <div className="flex-1">
              <h2 className="text-[10px] text-[hsl(0, 0%, 59%)]">ISP</h2>
              <p className="text-[hsl(0, 0%, 17%)] font-bold text-[20px]">
                {apiData?.isp}
              </p>
            </div>
          )}
          <div></div>
        </div>
      )}
    </>
  );
}
