import clsx from "clsx";
import Popup from "./components/Popup";
import Slider from "./components/Slider";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

function App() {
  const imagesUrls = [
    "/images/slide1.png",
    "/images/slide5.png",
    "/images/slide2.png",
    "/images/slide1.png",
    "/images/slide5.png",
  ];

  return (
    <div className="bg-secondary-900">
      <Header />
      <main>
        <div className="relative">
          <div className="absolute top-3 md:top-11 left-0 right-0 m-auto text-center">
            <h1 className="font-bold text-[24px] md:text-[48px] bg-linear-to-r from-neutral via-[#FFD3E3] to-[#FFEA9F] inline-block text-transparent bg-clip-text">
              XIAOMI TV max Series
            </h1>
            <h3 className="text-neutral font-light text-[16px] md:text-[32px]">
              View to the max
            </h3>
          </div>
          <img
            src="/images/banner.jpg"
            alt="banner"
            className="object-cover h-[350px] md:h-auto md:w-full"
          />
        </div>
        <div className="py-10 md:py-20 px-5 lg:px-40 flex flex-col">
          <h2 className="text-primary mb-1 p-2 text-[18px] md:text-[24px] font-black italic text-center bg-linear-to-r from-[#13141500] via-primary-900 to-[#13141500]">
            TOP BEST-SELLING PRODUCTS
          </h2>
          <div className="mb-10 md:mb-20">
            <div className="text-neutral-500 text-[10px] md:text-[14px] flex px6 py-2 rounnded-[8px] font-black italic">
              <span className="w-1/6 text-left">NO.</span>
              <span className="w-2/6 text-left">PRODUCTS</span>
              <span className="w-1/6 text-left">QUANTITY</span>
              <span className="w-2/6 text-right">PRICE</span>
            </div>
            <div className="flex flex-col gap-1 md:gap-3.5 max-h-[300px] md:max-h-[470px] overflow-y-auto">
              {[...Array(25)].map((_, index) => {
                return (
                  <div
                    className={clsx(
                      "bg-[#202023] rounded-2xl flex items-center p-3 md:py-4 md:px-5"
                    )}
                    style={{
                      background:
                        index === 0
                          ? "linear-gradient(90deg, #38322a, #202023)"
                          : index === 1
                          ? "linear-gradient(90deg, #37383d, #202023)"
                          : index === 2
                          ? "linear-gradient(90deg, #413731, #202023)"
                          : "",
                    }}
                  >
                    <div className="w-1/6 text-left place-content-center font-black italic text-[20px] md:text-[32px] text-primary-200">
                      {index < 3 ? (
                        <img
                          src={`/images/${index + 1}-rank.png`}
                          alt={`${index + 1}-rank`}
                          className="inline-block w-5 h-5 md:w-10 md:h-10 mr-2"
                        />
                      ) : (
                        index + 1
                      )}
                    </div>
                    <span className="w-2/6 text-neutral-100 font-black text-[10px] md:text-[16px] italic leading-6 text-left">
                      XIAOMI max 24
                    </span>
                    <span className="w-1/6 text-neutral-100 font-black text-[10px] md:text-[16px] italic leading-6 text-left">
                      1,424,042
                    </span>
                    <span className="w-2/6 text-right">
                      <span className="text-primary italic bg-secondary-900 font-black px-2 py-1 rounded-2xl text-[10px] md:text-[16px]">
                        $ 7,090,434
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <Slider
            title="TOP PRODUCTS"
            type="multiple"
            imagesUrls={imagesUrls}
          />
          <div className="md:flex gap-6 items-end mt-10 md:mt-20">
            <div className="w-full md:w-1/2">
              <Slider
                title="BLACK FRIDAY"
                type="single"
                imagesUrls={["/images/slide6.png", "/images/slide6.png"]}
                imgClassName="md:h-[300px]"
              />
            </div>

            <div className="w-full md:w-1/2 flex relative gap-2 md:gap-6 mt-10 md:mt-0">
              <div className="w-1/2">
                <h2 className="text-primary text-[18px] md:text-[24px] font-black italic md:mb-4.5">
                  NEW PRODUCTS
                </h2>
                <img
                  src="/images/new-product.png"
                  alt=""
                  className="md:h-[300px] rounded-lg"
                />
              </div>
              <div className="w-1/2">
                <h2 className="text-primary text-[18px] md:text-[24px] font-black italic md:mb-4.5">
                  SALE
                </h2>
                <img
                  src="/images/new-product.png"
                  alt=""
                  className="md:h-[300px] rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Popup />
    </div>
  );
}

export default App;
