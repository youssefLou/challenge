import { Layout } from "./Layout";

function Home() {
  return (
    <>
      <div className="h-full w-full bg-gradient-to-t from-white from-10% via-gray-300 via-30% to-gray-300 to-90%">
        <div className=" text-center max-w-4xl mx-auto px-4 py-8 ">
          <div className=" mb-8">
            <h1 className="text-4xl  font-bold text-black mb-4">
              The 7-Day <span className="text-blue-500">Challenge</span>
            </h1>
            <p className="text-xl text-black">
              This is my never before seen breakdown of how to launch a
              successful dropshipping store in as little as 7 days...
            </p>
            <p className="font-bold text-lg	  ">
              Get started today for <span className="text-blue-500">free.</span>
            </p>
          </div>

          <div className=" aspect-w-16 aspect-h-9 mb-8">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/VIDEO_ID_HERE"
            ></iframe>
          </div>

          <button className="inline-flex shadow-2xl  h-auto w-auto px-14 py-2 transition ease-in-out delay-150    rounded-full border-2 border-white  bg-green-400 hover:-translate-y-1 hover:scale-80 duration-200">
            <h1 className="pr-10 text-2xl text-white ">Click To Get Started</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-white "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <Layout />
    </>
  );
}

export default Home;
