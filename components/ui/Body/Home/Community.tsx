import Image from "next/image";
import commuImg from "@/public/commu.jpg";
// import animate from "animate.css";
export default function Community() {
  return (
    <div
      className="flex flex-col md:flex-row lg:flex-row w-full
      bg-gray-100 mt-10
      dark:bg-gray-900
      rounded-2xl items-center p-4 animate__animated animate__fadeInUp"
    >
      <div className="relative bg-gray-800 rounded-2xl overflow-hidden dark:bg-gray-800 md:w-3/5 lg:w-3/5 w-full flex justify-center items-center">
        <Image
          src={commuImg}
          alt="Community"
          className="w-full h-auto object-cover p-2 rounded-3xl hover:scale-105 transition-transform duration-300"
          placeholder="blur"
        />
      </div>
      <div className="md:w-2/5 lg:w-2/5 w-full p-3 flex justify-items-center flex-col">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl text-center mb-2 lg:text-5xl md:text-4xl p-2 font-bold">
            Join Our Communities
          </h1>
          <p className=" text-xl text-center p-2 mb-2">
            Be the part of the largest German Language Learners Community in
            Nepal and get access to free study materials and latest updates
            related to German Language and Germany.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center p-3">
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 m-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition active:scale-95 text-lg text-center font-semibold"
          >
            Facebook Group
          </a>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 m-2 bg-emerald-700 text-white rounded-full hover:bg-emerald-800 transition active:scale-95 text-lg text-center font-semibold"
          >
            Whatsapp Group
          </a>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 m-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition active:scale-95 text-lg text-center font-semibold"
          >
            Google
          </a>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 m-2 bg-rose-700 text-white rounded-full hover:bg-rose-800 transition active:scale-95 text-lg text-center font-semibold"
          >
            Tik Tok
          </a>
        </div>
      </div>
    </div>
  );
}
