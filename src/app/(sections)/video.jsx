"use client";

const FullVideoSection = () => {
  return (
    <div className="w-full h-[300px] lg:h-[400px] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[400px] object-cover"
      >
        <source src="/videos/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default FullVideoSection;
