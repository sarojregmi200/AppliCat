/* eslint-disable react/jsx-key */
import Image from "next/image";
import Link from "next/link";

// components
import LandingNav from "@/components/landing/LandingNav";

// fonts
import { katibeh, roboto } from "@/lib/fonts";

// icons
import { ArrowTopRightIcon, ReaderIcon } from "@radix-ui/react-icons";
import LandingFooter from "@/components/landing/LandingFooter";
import Drawer from "@/components/landing/Drawer";

const SERVICES = [
  {
    title: "SAT",
    description:
      "Lorem Ipsum is simply dummy text of the printing a Lorem Ipsum is simply dummy text of the printing aLorem Ipsum is simply dummy text of the printing a",
    Icon: ReaderIcon,
  },
  {
    title: "IELTS",
    description:
      "Lorem Ipsum is simply dummy text of the printing a Lorem Ipsum is simply dummy text of the printing aLorem Ipsum is simply dummy text of the printing a",
    Icon: ReaderIcon,
  },
  {
    title: "GRE",
    description:
      "Lorem Ipsum is simply dummy text of the printing a Lorem Ipsum is simply dummy text of the printing aLorem Ipsum is simply dummy text of the printing a",
    Icon: ReaderIcon,
  },
  {
    title: "GMAT",
    description:
      "Lorem Ipsum is simply dummy text of the printing a Lorem Ipsum is simply dummy text of the printing aLorem Ipsum is simply dummy text of the printing a",
    Icon: ReaderIcon,
  },
];
const COLLEGELIST = [
  "https://lh5.googleusercontent.com/EituGLa2LhnAd-B-SUCpw9WhJTImioKqwFLpe1qDhAx1lKq_VSNiYVi-ghrMxROfyfwz8Rfz-cKYOKBDwh-7OEMButVijE5mXKI9333g2QaiPwzAY6_8HlOSaGI5gy3xHfgia1cB0mU669xrGJ4TXHU",
  "https://lh5.googleusercontent.com/EituGLa2LhnAd-B-SUCpw9WhJTImioKqwFLpe1qDhAx1lKq_VSNiYVi-ghrMxROfyfwz8Rfz-cKYOKBDwh-7OEMButVijE5mXKI9333g2QaiPwzAY6_8HlOSaGI5gy3xHfgia1cB0mU669xrGJ4TXHU",
  "https://lh5.googleusercontent.com/EituGLa2LhnAd-B-SUCpw9WhJTImioKqwFLpe1qDhAx1lKq_VSNiYVi-ghrMxROfyfwz8Rfz-cKYOKBDwh-7OEMButVijE5mXKI9333g2QaiPwzAY6_8HlOSaGI5gy3xHfgia1cB0mU669xrGJ4TXHU",
  "https://lh5.googleusercontent.com/EituGLa2LhnAd-B-SUCpw9WhJTImioKqwFLpe1qDhAx1lKq_VSNiYVi-ghrMxROfyfwz8Rfz-cKYOKBDwh-7OEMButVijE5mXKI9333g2QaiPwzAY6_8HlOSaGI5gy3xHfgia1cB0mU669xrGJ4TXHU",
  "https://lh5.googleusercontent.com/EituGLa2LhnAd-B-SUCpw9WhJTImioKqwFLpe1qDhAx1lKq_VSNiYVi-ghrMxROfyfwz8Rfz-cKYOKBDwh-7OEMButVijE5mXKI9333g2QaiPwzAY6_8HlOSaGI5gy3xHfgia1cB0mU669xrGJ4TXHU",
  "https://lh5.googleusercontent.com/EituGLa2LhnAd-B-SUCpw9WhJTImioKqwFLpe1qDhAx1lKq_VSNiYVi-ghrMxROfyfwz8Rfz-cKYOKBDwh-7OEMButVijE5mXKI9333g2QaiPwzAY6_8HlOSaGI5gy3xHfgia1cB0mU669xrGJ4TXHU",
  "https://lh5.googleusercontent.com/EituGLa2LhnAd-B-SUCpw9WhJTImioKqwFLpe1qDhAx1lKq_VSNiYVi-ghrMxROfyfwz8Rfz-cKYOKBDwh-7OEMButVijE5mXKI9333g2QaiPwzAY6_8HlOSaGI5gy3xHfgia1cB0mU669xrGJ4TXHU",
  "https://lh5.googleusercontent.com/EituGLa2LhnAd-B-SUCpw9WhJTImioKqwFLpe1qDhAx1lKq_VSNiYVi-ghrMxROfyfwz8Rfz-cKYOKBDwh-7OEMButVijE5mXKI9333g2QaiPwzAY6_8HlOSaGI5gy3xHfgia1cB0mU669xrGJ4TXHU",
  "https://lh5.googleusercontent.com/EituGLa2LhnAd-B-SUCpw9WhJTImioKqwFLpe1qDhAx1lKq_VSNiYVi-ghrMxROfyfwz8Rfz-cKYOKBDwh-7OEMButVijE5mXKI9333g2QaiPwzAY6_8HlOSaGI5gy3xHfgia1cB0mU669xrGJ4TXHU",
  "https://lh5.googleusercontent.com/EituGLa2LhnAd-B-SUCpw9WhJTImioKqwFLpe1qDhAx1lKq_VSNiYVi-ghrMxROfyfwz8Rfz-cKYOKBDwh-7OEMButVijE5mXKI9333g2QaiPwzAY6_8HlOSaGI5gy3xHfgia1cB0mU669xrGJ4TXHU",
  "https://lh5.googleusercontent.com/EituGLa2LhnAd-B-SUCpw9WhJTImioKqwFLpe1qDhAx1lKq_VSNiYVi-ghrMxROfyfwz8Rfz-cKYOKBDwh-7OEMButVijE5mXKI9333g2QaiPwzAY6_8HlOSaGI5gy3xHfgia1cB0mU669xrGJ4TXHU",
  "https://lh5.googleusercontent.com/EituGLa2LhnAd-B-SUCpw9WhJTImioKqwFLpe1qDhAx1lKq_VSNiYVi-ghrMxROfyfwz8Rfz-cKYOKBDwh-7OEMButVijE5mXKI9333g2QaiPwzAY6_8HlOSaGI5gy3xHfgia1cB0mU669xrGJ4TXHU",
  "https://lh5.googleusercontent.com/EituGLa2LhnAd-B-SUCpw9WhJTImioKqwFLpe1qDhAx1lKq_VSNiYVi-ghrMxROfyfwz8Rfz-cKYOKBDwh-7OEMButVijE5mXKI9333g2QaiPwzAY6_8HlOSaGI5gy3xHfgia1cB0mU669xrGJ4TXHU",
]



const Landing = () => {
  return (
    <div className=" min-h-screen w-full overflow-x-hidden">
      <LandingNav />

      <section className=" bg-transparent text-center min-h-[calc(100vh-125px)] flex items-center justify-center relative px-4">
        <div className="max-w-[640px] mx-auto " >
          <h1 className={`${katibeh.className} text-9xl text-white `}>
            Applicat
          </h1>
          <p
            className={`text-md font-[400] text-[#e4e4e4] -mt-3 ${roboto.className}`}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard
          </p>

          <Link
            href="/auth"
            className={`bg-gradient-to-r from-[#F4442A] to-[#F1314A]  text-xl font-[500] uppercase rounded-[8px] flex items-center justify-center space-x-2 mx-auto mt-5 w-[260px] h-[55px] py-2 px-6 text-white ${roboto.className}`}
          >
            <span>Book Now</span>
            <ArrowTopRightIcon className="w-6 h-6 font-bold" />
          </Link>
        </div>
      </section>

      <section className="w-full h-auto relative max-lg:overflow-hidden max-lg:bg-[url('/landing_big_cat.svg')] max-lg:bg-fixed max-lg:bg-no-repeat max-lg:bg-contain max-lg:bg-center max-lg:py-16">
        <Image
          src="/landing_big_cat.svg"
          alt="big cat"
          width={1920}
          height={1080}
          className=" w-full h-full object-contain object-center z-0  max-lg:hidden max-lg:top-0 max-lg:left-0 max-lg:right-0 max-lg:object-cover"
        />

        <div className={`w-full px-[5%] 2xl:px-0 grid grid-cols-[min(500px,35vw)_min(500px,35vw)] justify-between place-items-center 2xl:max-w-[1400px] lg:max-h-[min(80vh, 1400px)] mx-auto absolute top-0 left-0 right-0 h-full  max-lg:grid-cols-2 max-lg:!relative max-lg:gap-8 max-sm:grid-cols-1`}>
          {SERVICES.map(
            ({ title, description, Icon, }, index) => (
              <div
                className={`bg-[#2d2d2d] bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg px-4 py-4 flex items-start max-w-[min(500px,35vw)] max-h-[175px] max-lg:max-w-full max-lg:justify-normal ${index == 2 && "lg:translate-x-8"} ${index == 3 && "lg:-translate-x-8"}`}
              ><div>
                  <Icon className=" h-10 w-auto mr-2 text-white" />
                </div>
                <div>
                  <h2 className="text-white text-xl font-bold">{title}</h2>
                  <p className="text-white text-sm  leading-[18px]">
                    {description}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      <section className="w-full px-[5%] h-auto relative my-[96px] 2xl:max-w-[1400px] 2xl:mx-auto">
        <h2 className={`${katibeh.className} text-5xl text-white text-center`}>
          Talk to Freshmen from
        </h2>
        <div className=" mx-auto mt-8 flex flex-row flex-wrap justify-center gap-2 ">
          {COLLEGELIST.map((college, index) => <div className="h-[84px] max-w-[200px]"><Image
            key={`college${index}`}
            src={`${college}`}
            alt="big cat"
            className="h-full w-full bg-white rounded-lg object-contain object-center z-0"
            height={100}
            width={240}
          /></div>)
          }
        </div>
      </section>

      <section className="bg-red-600 h-48   flex flex-row  px-[5%] justify-center items-center ">
        <div className="flex flex-row gap-4  w-full justify-between items-end max-md:flex-col max-md:items-center max-md:justify-center 2xl:max-w-[1400px] ">
          <h2 className={`${roboto.className} text-4xl align-top max-md:text-center text-white font-bold`}>
            Book Your <br /> Session Today
          </h2>
          <Link
            href="/auth"
            className={`bg-white text-lg font-bold uppercase rounded-[8px] flex items-center justify-center space-x-2  w-[200px] h-[48px] py-2 px-6 text-red-600 ${roboto.className}`}
          >
            <span>Book Now</span>
          </Link>
        </div>
      </section>
      <LandingFooter />

    </div>
  );
};

export default Landing;
