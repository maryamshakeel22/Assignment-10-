import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <div className="text-2xl">M<span className="text-pink-400">S</span></div>
        <div>
          <Link href={"#home"} className="mr-4 text-2xl hover:uppercase hover:text-rose-500">Home</Link>
          <Link href={"#cards"} className="mr-4 text-2xl hover:uppercase hover:text-rose-500">Cards</Link>
          </div>
      </header>
      <section id="home" className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 md:px-6 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Perfume
      </h1>
      <p className="mb-8 leading-relaxed">
      Perfume is a blend of art and chemistry, capturing emotions and memories in a bottle. It enhances personal style, leaving a lasting impression with every scent. A signature fragrance becomes an invisible accessory, reflecting individuality and mood. From floral to woody, each note tells a story.
      </p>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded"
        src={"/perfumefemale.avif"}
        alt="perfume"
        width={400}
        height={400}
      />
    </div>
  </div>
</section>

    <div id="cards" className="flex flex-wrap justify-center gap-5 w-full p-4 pb-20">
      {/* Card 1 */}
      <div className="flex flex-col items-center rounded-lg border border-pink-200 bg-white shadow-md text-center px-6 py-4 w-full md:w-1/3 lg:w-1/4 ">
        <Image
          src={'/mystic.jpg'}
          alt="perfume"
          width={200}
          height={200}
          className="hover:animate-spin"
        />
        <p className="py-2 text-2xl">Mystic Bloom</p>
        <p className="py-2 italic font-bold text-gray-700">A delicate floral scent with notes of jasmine,rose and vanilla.</p>
        <p className="py-2">RS 4000</p>
        <button className="bg-yellow-300 hover:bg-yellow-400 mb-2 p-2 rounded">Buy Now</button>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center rounded-lg border border-pink-200 bg-white shadow-md text-center px-6 py-4 w-full md:w-1/3 lg:w-1/4 ">
        <Image
          src={'/velvet.jpg'}
          alt="perfume"
          width={200}
          height={200}
          className="hover:animate-pulse"
        />
        <p className="py-2 text-2xl">Velcet Noir</p>
        <p className="py-2 italic font-bold text-gray-700">A rich, woody frangrance with hints of amber and musk.</p>
        <p className="py-2">RS 6000</p>
        <button className="bg-yellow-300 hover:bg-yellow-400 mb-2 p-2 rounded">Buy Now</button>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center rounded-lg border border-pink-200 bg-white shadow-md text-center px-6 py-4 w-full md:w-1/3 lg:w-1/4 ">
        <Image
          src={'/ocean.jpg'}
          alt="perfume"
          width={200}
          height={200}
          className="hover:animate-bounce"
        />
        <p className="py-2 text-2xl">Ocean Mist</p>
        <p className="py-2 italic font-bold text-gray-700">A fresh, aquatic aroma featuring sea breeze, citrus and driftwood.</p>
        <p className="py-2">RS 5000</p>
        <button className="bg-yellow-300 hover:bg-yellow-400 mb-2 p-2 rounded">Buy Now</button>
      </div>
 </div>
 </div>
 );
}
