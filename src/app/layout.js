import { Plus_Jakarta_Sans, Big_Shoulders_Display } from "next/font/google";
import "./globals.css";

const bigShoulderDisplay = Big_Shoulders_Display({subsets: ['latin'], variable: '--font-big-shoulders-display'})


export const metadata = {
  title: "SameFreak - Find Your Musical Soulmate",
  description:
    "SameFreak connects you with your musical match in Jakarta. Discover love through shared tastes in rock-punk, indie-pop, and more.",
  keywords:
    "SameFreak, music dating, Jakarta dating app, indie lovers, punk rock dating, music matchmaking, find music soulmate, connect music fans, indie-pop scene Jakarta, rock-punk community, musical dating app, dating by music taste",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bigShoulderDisplay.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
