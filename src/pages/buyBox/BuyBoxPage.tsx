import React from "react";

function BuyBoxPage() {
  return (
    <section className="px-20 text-xl pb-4">
      <h2 className="py-5 pb-12 font-bold text-base">Cryptopops | Buy box</h2>
      <div className="flex ">
        <div className="w-100 w-1/2">
          <video height="auto" className="m-0 ">
            <source
              src="../../../image/videoPop.90fcae92.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="w-1/2 px-14">
          <p className="text-black font-bold text-4xl">CryptoPop</p>
          <p className="text-black py-8 text-xl">
            Remaining Amount: 1949 / 2005
          </p>
          <p className="text-black text-xl">Price</p>
          <div className="flex py-4">
            <img className="w-10" src="/image/unnamed.png" />
            <p className="text-black text-3xl px-2 font-bold">113 BNB</p>
          </div>
          <div
            // onClick={handleFinish}
            className="text-center bg-black rounded-lg"
          >
            <button type="button" className="text-white py-2 text-2xl">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BuyBoxPage;
