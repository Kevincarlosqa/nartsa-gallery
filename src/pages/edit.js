import Header from "@/components/Header";
import Page from "@/components/Page";

const Edit = () => {
  return (
    <Page>
      <Header />
      <div className="bg-[#0B0118] h-[100vh] w-[100vh] absolute top-0 right-0 left-0 bottom-0" />
      <h1>Edit Page</h1>
      {/* <div className=" translate-z-0 ">
        <div className="video-container w-[1000px] mt-[150px] mx-auto absolute top-0 left-0 right-0 flex flex-row   justify-center z-[-1] ">
          <video
            id="mi-video"
            className="w-full h-full "
            preload="false"
            playsInline
            loop
            muted
            // @ts-ignore
            autoPlay="autoplay"
            src="/cards-video.webm"
          ></video>
        </div>
      </div> */}
    </Page>
  );
};

export default Edit;
