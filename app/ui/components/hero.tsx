import Link from "next/link";

const Hero = () => {
  return (
    <section className="container m-auto w-full h-screen px-6 py-4 flex flex-col justify-center items-center space-y-3">
      <h1 className="text-center">Welcome to DarshanWebDev Blog</h1>

      <h3 className="pb-20 text-center">Sharing insights into Tech and more</h3>

      <div className="w-full flex justify-around">
        <Link href="/blogs">Explore Blogs</Link>
        <Link href="/blogs">Learn More</Link>
      </div>
    </section>
  );
};

export default Hero;
