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
      <div>
        <h1>SAMEFREAK</h1>
        <h4>FIND YOUR SAME-FREQUENCIES SOULMATE</h4>
        <Image src={BannerPNG} alt="banner" quality={100} />
        <div>
          <p>
            No more awkward silences – dive straight into the songs and places
            that fuel your passion, and put a whole new spin on match-making.
          </p>
          <form>
            <input />
            <button type="submit">Join the waiting list</button>
          </form>
        </div>
      </div>
      {/* highlight 1 */}
      <div>
        <div>
          <h3>Music Powered</h3>
          <h2>
            Connect on the tunes that make you tick and find the perfect
            first-date spots.
          </h2>
        </div>
        <Image src={Showcase1PNG} alt="showcase 1" />
      </div>

      {/* highligh 2 */}
      <div>
        <div>
          <h2>Unleash your inner Freak. Match based on your interests.</h2>
          <ul>
            <li>
              <div>
                <MusicSVG />
              </div>
              <div>
                <h4>Musical Match</h4>
                <p>
                  Find your perfect duet with music taste matching! Whether
                  it&apos;s the same bands or beats, we tune into love.
                </p>
              </div>
            </li>
            <li>
              <div>
                <BeersSVG />
              </div>
              <div>
                <h4>Venue Vibes</h4>
                <p>
                  Connect in the crowd! Match with someone who shares your vibe
                  and discover new hangout spots together.Find your perfect duet
                  with music taste matching! Whether it&apos;s the same bands or
                  beats, we tune into love.
                </p>
              </div>
            </li>
            <li>
              <div>
                <TicketSVG />
              </div>
              <div>
                <h4>Festival Flings</h4>
                <p>
                  Swipe to match and meet at the best events – let the festival
                  vibes set the stage for romance.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <div>
            <h4>What makes SameFreak stand out?</h4>
            <p>
              Envision a dating app powered by Spotify and interests,
              that&apos;s SameFreak! We prioritize music as the key to
              compatibility, enhancing deeper connections through meeting
              like-minded individuals at designated events or locales.
            </p>
          </div>
          <div>
            <h4>How does the matching process work?</h4>
            <p>
              Our algorithm uses genre preferences, favorite artists, and event
              interests to match people who share similar musical tastes,
              ensuring a harmonious and exciting first date experience.
            </p>
          </div>
        </div>
      </div>

      {/* footer */}
      <div>
        <div>
          <h3>Joing Now</h3>
          <p>
            No more awkward silences – dive straight into the songs and places
            that fuel your passion, and put a whole new spin on match-making.
          </p>
          <form>
            <input />
            <button type="submit">Join the waiting list</button>
          </form>
        </div>
        <footer>2023 © SameFreak Inc., All rights reserved.</footer>
      </div>
    </div>
  );
}
