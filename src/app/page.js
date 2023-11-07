import Image from "next/image";
import BannerPNG from "@/assets/banner-0.png";
import Showcase1PNG from "@/assets/showcase-1.png";
import MusicSVG from "@/assets/music-svg";
import BeersSVG from "@/assets/beers-svg";
import TicketSVG from "@/assets/ticket-svg";
import FormWaitlist from "@/components/waitlist-form";
export default function Home() {
  return (
    <div>
      {/* hero */}
      <div className="flex flex-col md:justify-center min-h-[100vh] md:min-h-screen mx-auto text-center">
        <h1 className="font-black leading-[0.8] font-display text-[16vw] order-2 md:order-none md:text-9xl">
          SAMEFREAK
        </h1>
        <h4 className="order-3 text-lg font-extrabold md:order-none md:text-2xl font-display">
          FIND YOUR SAME-FREQUENCIES SOULMATE
        </h4>
        <figure className="relative order-1 w-full h-[70vh] md:h-60 md:my-4 mb-6 md:order-none">
          <Image
            src={BannerPNG}
            alt="banner"
            fill
            className="object-cover"
          />
        </figure>
        <div className="flex flex-col items-center order-4 mx-4 space-y-2 md:order-none md:mx-0">
          <p className="hidden max-w-xl md:block">
            No more awkward silences – dive straight into the songs and places
            that fuel your passion, and put a whole new spin on match-making.
          </p>
          <FormWaitlist/>
        </div>
      </div>
      {/* highlight 1 */}
      <div className="mt-8 bg-black">
        <div className="container flex flex-col justify-between px-8 py-8 mx-auto space-y-8 md:px-0 md:py-12 md:flex-row">
          <div className="pt-8 pr-8 space-y-8 md:pt-16">
            <h3 className="text-2xl font-semibold">Music Powered</h3>
            <h2 className="max-w-lg text-4xl font-bold text-secondary-400 font-display">
              Connect on the tunes that make you tick and find the perfect
              first-date spots.
            </h2>
          </div>
          <Image className="self-end" height={400} src={Showcase1PNG} alt="showcase 1" />
        </div>
      </div>

      {/* highligh 2 */}
      <div className="container pb-16 mx-auto">
        <div className="flex flex-col py-16">
          <h2 className="max-w-sm mx-auto mb-8 text-xl font-semibold text-center md:max-w-none text-secondary-400">
            Unleash your inner Freak. Match based on your interests.
          </h2>
          <ul className="max-w-2xl mx-auto space-y-4">
            <li className="flex p-4 bg-primary-700 rounded-xl">
              <div className="flex items-center justify-center flex-shrink-0 w-24 h-24 bg-black rounded-xl">
                <MusicSVG />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-secondary-400">
                  Musical Match
                </h4>
                <p>
                  Find your perfect duet with music taste matching! Whether
                  it&apos;s the same bands or beats, we tune into love.
                </p>
              </div>
            </li>
            <li className="flex p-4 bg-primary-700 rounded-xl">
              <div className="flex items-center justify-center flex-shrink-0 w-24 h-24 bg-black rounded-xl">
                <BeersSVG />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-secondary-400">
                  Venue Vibes
                </h4>
                <p>
                  Connect in the crowd! Match with someone who shares your vibe
                  and discover new hangout spots together.
                </p>
              </div>
            </li>
            <li className="flex p-4 bg-primary-700 rounded-xl">
              <div className="flex items-center justify-center flex-shrink-0 w-24 h-24 bg-black rounded-xl">
                <TicketSVG />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-secondary-400">
                  Festival Flings
                </h4>
                <p>
                  Swipe to match and meet at the best events – let the festival
                  vibes set the stage for romance.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex flex-col mx-4 space-y-4 md:space-y-0 md:mx-0 md:space-x-4 md:flex-row">
          <div className="flex-1">
            <h4 className="mb-8 text-xl font-semibold text-secondary-400">
              What makes SameFreak stand out?
            </h4>
            <p className="text-base leading-8">
              Envision a dating app powered by Spotify and interests,
              that&apos;s SameFreak! We prioritize music as the key to
              compatibility, enhancing deeper connections through meeting
              like-minded individuals at designated events or locales.
            </p>
          </div>
          <div className="flex-1">
            <h4 className="mb-8 text-xl font-semibold text-secondary-400">
              How does the matching process work?
            </h4>
            <p className="text-base leading-8">
              Our algorithm uses genre preferences, favorite artists, and event
              interests to match people who share similar musical tastes,
              ensuring a harmonious and exciting first date experience.
            </p>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="py-6 mt-8 bg-accent-600">
        <div className="flex flex-col items-center mx-4 mb-16 md:mx-0">
          <h3 className="mb-4 text-4xl font-bold uppercase font-display">
            Join Now
          </h3>
          <p className="max-w-xl mb-8 text-center">
            No more awkward silences – dive straight into the songs and places
            that fuel your passion, and put a whole new spin on match-making.
          </p>
          <FormWaitlist/>
        </div>

        <footer className="text-center muted">
          2023 © SameFreak Inc., All rights reserved.
        </footer>
      </div>
    </div>
  );
}
