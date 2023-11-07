import Image from "next/image";
import BannerPNG from "@/assets/banner.png";
import Showcase1PNG from "@/assets/showcase-1.png";
import MusicSVG from "@/assets/music-svg";
import BeersSVG from "@/assets/beers-svg";
import TicketSVG from "@/assets/ticket-svg";

export default function Home() {
  return (
    <div>
      {/* hero */}
      <div className="container flex flex-col justify-center min-h-screen mx-auto text-center">
        <h1 className="font-black leading-[0.8] font-display text-[20vw] md:text-9xl">
          SAMEFREAK
        </h1>
        <h4 className="text-lg font-extrabold md:text-2xl font-display">
          FIND YOUR SAME-FREQUENCIES SOULMATE
        </h4>
        <Image
          src={BannerPNG}
          alt="banner"
          className="mx-auto my-4"
          quality={100}
        />
        <div className="flex flex-col items-center mx-4 space-y-2 md:mx-0">
          <p className="max-w-xl">
            No more awkward silences – dive straight into the songs and places
            that fuel your passion, and put a whole new spin on match-making.
          </p>
          <form className="flex w-full py-1 pl-4 pr-1 rounded-full md:max-w-md bg-secondary-50/80">
            <input
              className="flex-1 py-1 text-sm bg-transparent focus:outline-none text-primary-950 min-w-lg"
              type="text"
              placeholder="luke.zkywalker@jedie.xyz"
            />
            <button
              className="px-4 text-sm font-semibold tracking-tight rounded-full shadow-md bg-secondary-400 text-primary-900"
              type="submit"
            >
              Join the waiting list
            </button>
          </form>
        </div>
      </div>
      {/* highlight 1 */}
      <div className="bg-black">
        <div className="container flex justify-between py-12 mx-auto">
          <div className="pt-16 pr-8 space-y-8">
            <h3 className="text-2xl font-semibold">Music Powered</h3>
            <h2 className="text-4xl font-bold text-secondary-400 font-display">
              Connect on the tunes that make you tick and find the perfect
              first-date spots.
            </h2>
          </div>
          <Image height={400} src={Showcase1PNG} alt="showcase 1" />
        </div>
      </div>

      {/* highligh 2 */}
      <div className="container pb-16 mx-auto">
        <div className="flex flex-col py-16">
          <h2 className="mb-8 text-xl font-semibold text-center text-secondary-400">
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

        <div className="flex space-x-4">
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
          <h3 className="mb-4 text-4xl font-bold uppercase font-display">Join Now</h3>
          <p className="max-w-xl mb-8 text-center">
            No more awkward silences – dive straight into the songs and places
            that fuel your passion, and put a whole new spin on match-making.
          </p>
          <form className="flex w-full py-1 pl-4 pr-1 rounded-full md:max-w-md bg-secondary-50/80">
            <input
              className="flex-1 py-1 text-sm bg-transparent focus:outline-none text-primary-950 min-w-lg"
              type="text"
              placeholder="luke.zkywalker@jedie.xyz"
            />
            <button
              className="px-4 text-sm font-semibold tracking-tight rounded-full shadow-md bg-secondary-400 text-primary-900"
              type="submit"
            >
              Join the waiting list
            </button>
          </form>
        </div>

        <footer className="text-center muted">2023 © SameFreak Inc., All rights reserved.</footer>
      </div>
    </div>
  );
}
