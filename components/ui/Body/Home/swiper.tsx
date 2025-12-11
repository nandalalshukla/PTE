"use client";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { cn } from "@/lib/utils";
import GoogleRating from "./GoogleRating";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    index: 1,
    name: "Ayushma Rana Magar",
    imagesrc: "/avatar.jpg",
    text: "My A1 language journey is too easy with the help of Prushotam sir and Suvam sir, I am thankful to the Pass the Excellence team who have started this affordable with quality learning. The creative ideas to memorize grammar, are preferred by the most. Overall, I wanna say that we cannot find this quality of education with affordable price, the one who want to try you will not regret.",
  },
  {
    index: 2,
    name: "Aakash Thapa",
    imagesrc: "/avatar.jpg",
    text: "Highly recommended for those who genuinely wants to learn german. Teachers are so helpful very interactive and this course is so affordable and flexible. My A1 journey with Pass the excellence was so good. I am so thankful to Purushottam Shukla sir because he gave us opportunity to learn German A1 which is excellent and affordable with friendly environment and i will continue by language learning journey with them.",
  },
  {
    index: 3,
    name: "Pardip Poudel",
    text: "I wanted to take a moment to thank the German team for their invaluable support and quick responses.I personally very satisfied by the method that unish sir teached us. It was so wonderfull.I raised a lot of question in his dm and I always get a answer in time .I felt like I was learned at physical class not an online .thank you for your hard work toward us @Unish A1 Instructor sir",
  },
  {
    index: 4,
    name: "RRR",
    imagesrc: "/avatar.jpg",
    text: "Firstly, I would like to thank purushottam sir. Malai online class line  mouka dinu vakoma .. and I am truly grateful for the opportunity to learn German with Unish Sir. It has been a great experience. I joined his class at the A2 level and now I am planning to continue my B1 journey with him as well. I noticed a major difference between learning with Unish Sir and other institutes. His teaching method is clear, practical, and highly effective an. If you are planning to learn German, I strongly recommend taking classes with Unish Sir. You will definitely see great results. Bahira ko classes vnda betternai lago malai chai #Pass the excellence",
  },
  {
    index: 5,
    name: "Puspa Thakuri",
    imagesrc: "/avatar.jpg",
    text: "Sehr geehrter Herr Timsina,I just wanted to take a moment to thank you for teaching me so kindly. Your encouragement and clear explanation made learning comfortable and more easier for me . I truly appreciate the time and care you put into helping me learn. Thank you for being such a wonderful teacher . I hope we will meet again in A2 class",
  },
  {
    index: 6,
    name: "Narayan Jha",
    imagesrc: "/avatar.jpg",
    text: "Honestly recommending every German laguage aspirant.Join Purushottam sir, & Get quality teaching. Best part he cares about our learning, push us every single day. Its been 15 days, i know 200+ German word, i can think and write daily life sentence. I am really grateful, I get to connect with him. Commenting from Saudi Arabia, preparing for Ausbildung für Längerhaltung und Logistik Spezialist.",
  },
  {
    index: 7,
    name: "Sudhira Rai",
    imagesrc: "/avatar.jpg",
    text: "First and foremost, I would like to thank my Tutor, Ms Aarushi Singh for her enormous support and diligent guidance during these two months Deutsch course for A2 level. It is my impression that she is a great tutor, who is so well equipped with not only the command over Deutsch language but also the ability to reach out to the learners. I am profoundly impressed by her patience, positive attitude and polite bearing. It was fun learning under her tutorship ! Best regards Sudhira",
  },
  {
    index: 8,
    name: "Resham",
    imagesrc: "/avatar.jpg",
    text: "कक्षा सुरु हुँदाको दिन देखि आज कक्षा अन्त्य हुँदाको दिनसम्म यस कक्षामा उपस्थित हुँदाको समयमा उत्प्रेरणा र हौसला सहित अध्यापन गराउनु हुने गुरु (Unish Timsina) र समन्वयको भूमिकामा रहनुहुने गुरु (Purushotam Sukla) दुवैजना गुरुहरु प्रति आभारी छु र हार्दिकताका साथ धन्यवाद! प्रकट गर्दछु। साथै सँगै अध्ययन गर्ने सम्पूर्ण साथीहरूको लक्ष्य पूरा होस् शुभेच्छा! (यदी संयोग मिलेछ भने आगामीकक्षामा अवश्य जोडिने छौं।)",
  },
  {
    index: 9,
    name: "Yosheph",
    imagesrc: "/avatar.jpg",
    text: "I found Unish Sir's online A1 German class after struggling to find affordable online class options in Kathmandu. At first, I was unsure if the class would be worth the price, but Unish Sir's simple, engaging teaching style made it a great experience. The class provides access to recorded videos of every session, so I can watch them if I miss a class or rewatch them whenever I want. The quality of teaching was far beyond the price I paid. Learning German A1 with Unish Sir has been an impressive experience, and I look forward to continuing with higher levels of German with him soon.",
  },
  {
    index: 10,
    name: "Biond J Kunwar",
    imagesrc: "/avatar.jpg",
    text: "If you want to be a success there must be a good guidance,so as my personal opinion I found it on my respected teacher Purusttam Shukla .I started a German language class with him before 2 weeks ago and I can say proudly he is the best teacher I ever seen in my language course career.You are not just a teacher, you are a true motivator.And I feel very greatful to choose you as my teacher. Thank you for everything sir.",
  },
  {
    index: 11,
    name: "Peru",
    imagesrc: "/avatar.jpg",
    text: "I sincerely thank Purusottam Sir for your dedicated effort and support during the German A1 course. Your clearexplanation of grammar and vocabulary, combined with engaging teaching methods, made learning enjoyable and effective. I truly appreciate your patience in addressing questions and ensuring everyone feels supported. Your enthusiasm for teaching has been both motivating and inspiring.",
  },
  {
    index: 12,
    name: "Sonam Tamang",
    imagesrc: "/avatar.jpg",
    text: "The only online institute in Nepal with incredibly affordable tuition fee and motivating instructor Mr. Purushottam Shukla I am greatfull of being a part of your wonderful institute. Strongly recommend for anyone with aspirations to learn Deutsch and make their Career in Germany .",
  },
  {
    index: 13,
    name: "Salina Magar",
    imagesrc: "/avatar.jpg",
    text: "Not every cheap things is worst .. example: Nepal most affordable German class ... It's way too much cheap but the quality; just WOW. Interactive, joyful and ya motivative is the most needy things to us as a student which we can have easily from our respective teachers of this organization. No worries even if you aren't able to attend the class, this team will be there to help you no matter what ... No regrets, no waste of money ... No boring days ... Doubt will be clear on the spot .. no attitude, no humiliation. And ya just WOW.",
  },
  {
    index: 14,
    name: "Roopa Khulal",
    imagesrc: "/avatar.jpg",
    text: "hello everyone mro chai aaja a1 sakyo class eakdamaii effective ani affordable xa sir friendly hunuhunxa ani cost pani eakdamii kam xa physical class vanda pani eakdamii affordable xa class .cost kam xa vanyara ramro padaii huna hola vanyara yo opportunity plz miss nagaridenu hola maile aru ma ni padheko ho a1 pursottam sir ko class jati effective theyana maile compair grda so plz don't miss & good luck for everyone .",
  },
  {
    index: 15,
    name: "Shrestha Tsuman",
    imagesrc: "/avatar.jpg",
    text: "I'm a B1-level student, but after a break in my studies, I've found myself struggling with grammar and the basics again. I've attended many classes, but I truly believe this teacher stands out from the rest. For so low fees, he offers so much value-his teaching is exceptional and deserves far more recognition. I highly recommend trying one or two of his classes; you'll quickly see the difference he makes.",
  },
];

export default function SwiperPass() {
  return (
    <section className="w-full py-10 bg-gray-50 dark:bg-gray-900/50 transition-colors">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#5227FF]/10 text-[#5227FF] font-semibold text-sm mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from our students who have successfully started their German
            language journey with us.
          </p>
        </div>

        <div className="relative px-2">
          {/* Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-[#5227FF] hover:scale-110 transition-transform disabled:opacity-50 hidden md:flex">
            <HiArrowLeft size={24} />
          </button>
          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-[#5227FF] hover:scale-110 transition-transform disabled:opacity-50 hidden md:flex">
            <HiArrowRight size={24} />
          </button>

          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            loop={true}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            spaceBetween={30}
            pagination={{
              clickable: true,
              bulletActiveClass:
                "swiper-pagination-bullet-active !bg-[#5227FF]",
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            grabCursor={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-14"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.index} className="h-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={cn(
                    "h-full flex flex-col",
                    "rounded-2xl pl-8 py-8 pr-2",
                    "bg-white dark:bg-gray-800",
                    "border border-gray-100 dark:border-gray-700",
                    "shadow-sm hover:shadow-xl",
                    "transition-all duration-300"
                  )}
                >
                  <div className="mb-6 text-[#5227FF]/20">
                    <FaQuoteLeft size={40} />
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-grow overflow-y-auto max-h-[200px] pr-2 custom-scrollbar">
                    {item.text}
                  </p>

                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5227FF] to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">
                        {item.name}
                      </h3>
                      <p className="text-sm text-[#5227FF]">Student</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-12 flex flex-col justify-center items-center gap-6">
          <div className="text-center flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white p-2">
              4.9 Stars Rating on Google
            </h2>
            <span className="p-3 text-center">
              <GoogleRating />
            </span>
          </div>
          <div className="flex justify-center items-center">
            <a
              href="https://g.page/r/CQS4X4GZJf-eEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5
             rounded-lg border
             bg-white dark:bg-[#1a1a1a]
             border-gray-300 dark:border-gray-700
             text-gray-800 dark:text-gray-200
             shadow-sm hover:shadow-md
             hover:bg-gray-50 dark:hover:bg-[#252525]
             transition-all duration-200"
            >
              <img
                src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
                className="w-5 h-5"
                alt="Google Logo"
              />
              Review Us on Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
