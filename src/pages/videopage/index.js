import { Link } from "react-router-dom";
import telegram from '../../assets/vid page/telegram.svg'
import facebook from '../../assets/vid page/Facebook svg.svg'
import whatsapp from '../../assets/vid page/whatsapp.svg'
import copy from '../../assets/vid page/copy.svg'
import close from '../../assets/vid page/close-circle.svg'
import edit from '../../assets/vid page/edit.svg'
import kite from '../../assets/vid page/success-kite 1 (1).svg'

export default function VideoPage() {
  return (
    <div className="mt-[80px] py-10">
      <section className="flex flex-col xl:flex-row px-5 md:px-24">
        <div className=" border-collapse xl:border-r w-full xl:w-[50%] pr-0 md:pr-16">
          <h1 className="text-[#141414] mb-10 font-bold text-4xl">
            Your video is ready!
          </h1>

          <div className=" mb-16">
            <h1 className="text-[#727272] text-base font-medium">Name</h1>
            <div className="flex gap-2 md:gap-8"> 
              <p className="text-[#413C6D] text-2xl font-semibold">
                Untitled_Video_20232509
              </p>
              <img src={edit} alt="edit" />
            </div>
          </div>

          <div className=" mb-16 bg-[#e3e1ee] py-3 px-6 flex-wrap rounded-2xl max-w-7xl">
            <input
              type="text"
              placeholder="Enter email of receiver"
              className="w-[85%] bg-transparent placeholder:text-[#434343] pr-4 py-3 border-none active:border-none focus:border-none"
            />
            <button className="bg-[#605C84] text-white rounded-lg font-medium text-base px-4 py-3 sm:w-[15%]  mt-2 sm:mt-0">
              Send
            </button>
          </div>

          <div className="mb-16">
            <h1 className=" text-xl font-semibold mb-4">Video Url</h1>
            <div className=" p-3 bg-[#fafafa] flex items-center justify-between rounded-2xl max-w-7xl flex-wrap">
              <p className="text-[#4B4B4B] break-all">
                https://www.helpmeout/Untitled_Video_20232509
              </p>
              <button className="flex items-center justify-center gap-2 border rounded-2xl mt-2 sm:mt-0 px-5 py-2">
                <img src={copy} alt="copy" className="" />
                <span className="">Copy</span>
              </button>
            </div>
          </div>

          <div>
            <h1 className="text-[#08051] text-base font-semibold">
              Share your video
            </h1>
            <div className="flex flex-wrap mt-2 gap-2">
              <button className="flex gap-1 px-4 py-3 border rounded-md">
                <img src={facebook} alt="facebook" />
                <span>Facebook</span>
              </button>

              <button className="flex gap-1 px-4 py-3 border rounded-md">
                <img src={whatsapp} alt="whatsapp" />
                <span>Whatsapp</span>
              </button>

              <button className="flex gap-1 px-4 py-3 border rounded-md">
                <img src={telegram} alt="telegram" />
                <span>Telegram</span>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-[50%] pl-0 xl:pl-11 mt-16">
          <div className="mb-20">

          </div>


          <div>
            <h1 className="font-semibold text-2xl">Transcript</h1>
            <div className=" mt-4  mb-10 ">
              <select
                id="languageSelect"
                className="border rounded-md py-2 pr-20 text-[#9d9d9d] text-base font-normal"
              >
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
              </select>
            </div>
            <div className="h-[250px] overflow-y-auto relative">
              {/* <div className="h-10 w-full opacity-50 absolute bottom-0 left-0 bg-white"></div> */}

              <div className="flex gap-6 mb-4">
                <p className="text-[#141414] text-base font-normal">0.01</p>
                <p className="text-base font-medium">
                  First step. Open Facebook on your desktop or mobile device and
                  locate "Marketplace" in the left-hand menu or at the top of
                  the
                </p>
              </div>

              <div className="flex gap-6 mb-4">
                <p className="text-[#141414] text-base font-normal">0.15</p>
                <p className="text-base font-medium">
                  First step. Open Facebook on your desktop or mobile device and
                  locate "Marketplace" in the left-hand menu or at the top of
                  the
                </p>
              </div>

              <div className="flex gap-6 mb-4">
                <p className="text-[#141414] text-base font-normal">0.30</p>
                <p className="text-base font-medium">
                  First step. Open Facebook on your desktop or mobile device and
                  locate "Marketplace" in the left-hand menu or at the top of
                  the
                </p>
              </div>

              <div className="flex gap-6 mb-4">
                <p className="text-[#141414] text-base font-normal">1.00</p>
                <p className="text-base font-medium">
                  First step. Open Facebook on your desktop or mobile device and
                  locate "Marketplace" in the left-hand menu or at the top of
                  the
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mt-10 bg-[#f7f7f7] py-12">
        <p className="text-[#141414] text-center font-semibold text-xl md:text-2xl w-[90%] md:w-[70%] mx-auto">
          To ensure the availability and privacy of your video, we recommend
          saving it to your account.
        </p>
        <div className='flex items-center justify-center'>
          <button className="text-white bg-[#120B48] px-8 py-4 rounded-lg my-10 mx-auto">
            Save Video
          </button>
        </div>
        <p className="text-[#7e7e7e] text-xl md:text-2xl font-semibold text-center">
          Don’t have an account?{" "}
          <Link to="/login">
            <span className="text-[#120B48] underline">Create account</span>
          </Link>
        </p>
      </section>
    </div>
  );
}
