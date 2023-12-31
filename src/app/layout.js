import { Analytics } from '@vercel/analytics/react';
import { Big_Shoulders_Display } from "next/font/google";
import { Toaster } from "../components/ui/toaster"
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
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
      </head>
      <body className={`${bigShoulderDisplay.variable} font-sans bg-primary-800 text-white`}>
        {children}
        <Toaster/>
        <Analytics/>
      </body>
    </html>
  );
}
