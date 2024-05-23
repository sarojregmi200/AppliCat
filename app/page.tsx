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
    horizontal: "left-0",
    vertical: "top-10",
  },
  {
    title: "IELTS",
    description:
      "Lorem Ipsum is simply dummy text of the printing a Lorem Ipsum is simply dummy text of the printing aLorem Ipsum is simply dummy text of the printing a",
    Icon: ReaderIcon,
    horizontal: "right-0",
    vertical: "top-10",
  },
  {
    title: "GRE",
    description:
      "Lorem Ipsum is simply dummy text of the printing a Lorem Ipsum is simply dummy text of the printing aLorem Ipsum is simply dummy text of the printing a",
    Icon: ReaderIcon,
    horizontal: "left-0",
    vertical: "bottom-10",
  },
  {
    title: "GMAT",
    description:
      "Lorem Ipsum is simply dummy text of the printing a Lorem Ipsum is simply dummy text of the printing aLorem Ipsum is simply dummy text of the printing a",
    Icon: ReaderIcon,
    horizontal: "right-0",
    vertical: "bottom-10",
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
  "https://lh5.googleusercontent.com/EituGLa2LhnAd-B-SUCpw9WhJTImioKqwFLpe1qDhAx1lKq_VSNiYVi-ghrMxROfyfwz8Rfz-cKYOKBDwh-7OEMButVijE5mXKI9333g2QaiPwzAY6_8HlOSaGI5gy3xHfgia1cB0mU669xrGJ4TXHU",
]



const Landing = () => {

  return (
    <div className="bg-black min-h-screen w-full">
      <Drawer open={true} />
      <LandingNav />

      <section className="text-center min-h-[calc(100vh-125px)] flex items-center justify-center relative px-4">
        <div className="max-w-[820px] mx-auto">
          <h1 className={`${katibeh.className} text-[10rem] text-white`}>
            Applicat
          </h1>
          <p
            className={`text-[24px] font-[400] text-[#e4e4e4] mt-3 ${roboto.className}`}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
          </p>

          <Link
            href="/auth"
            className={`bg-gradient-to-r from-[#F4442A] to-[#F1314A] text-[28px] font-[500] uppercase rounded-[8px] flex items-center justify-center space-x-2 mx-auto mt-5 w-[260px] h-[55px] py-2 px-6 text-white ${roboto.className}`}
          >
            <span>Some CTA</span>
            <ArrowTopRightIcon className="w-[36px] h-[36px] font-bold" />
          </Link>
        </div>
      </section>

      <section className="w-full h-auto relative">
        <Image
          src="/landing_big_cat.svg"
          alt="big cat"
          width={1920}
          height={1080}
          className=" w-full h-full object-contain object-center z-0"
        />

        <div className="md:w-[90%] mx-auto flex absolute top-0 left-0 right-0 w-full h-full">
          {SERVICES.map(
            ({ title, description, Icon, horizontal, vertical }) => (
              <div
                className={`absolute ${horizontal} ${vertical} bg-[#2d2d2d] bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg px-8 py-5 flex items-center max-w-[500px] max-h-[175px] w-full space-x-4`}
                style={{}}
              >
                <Icon className="w-[100px] h-[100px] text-white mx-auto" />
                <div>
                  <h2 className="text-white text-[29px] font-bold">{title}</h2>
                  <p className="text-white text-[15px] mt-3 leading-[18px]">
                    {description}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      <section className="w-full h-auto relative my-[96px]">
        <h2 className={`${katibeh.className} text-[82px] text-white text-center`}>
          Consult with students from
        </h2>
        <div className=" mx-auto mt-8 flex flex-row flex-wrap justify-center gap-2 ">
          {COLLEGELIST.map((college, index) => <div className="h-[100px] max-w-[280px]"><Image
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

      <section className="bg-red-600 h-48   flex flex-row px-[5%] justify-between items-center">
        <div className="flex flex-row  w-full justify-between items-end">
          <h2 className={`${roboto.className} text-4xl align-top text-white`}>
            Schedule your <br />appointment today
          </h2>
          <Link
            href="/auth"
            className={`bg-white text-[18px] font-[500] uppercase rounded-[8px] flex items-center justify-center space-x-2  w-[200px] h-[48px] py-2 px-6 text-red-600 ${roboto.className}`}
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
