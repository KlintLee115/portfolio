import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Tabs from "@/components/Tabs";
import { LinkedInButton } from "@/components/LinkedIn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Klint's Portfolio",
  description: "Klint's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-black dark:text-white`}>
        <header className='my-7'>
          <p className="text-4xl pb-5 text-center mb-5 border-b border-gray-50 border-opacity-25 mx-auto">&lt;Klint Lee /&gt;</p>

          <div className='flex flex-col gap-4 md:flex-row md:gap-0 justify-evenly items-center'>
            <p className='header-desc'>Software Developer</p>
            <section className='flex items-center gap-4'>
              <Link href='https://github.com/KlintLee115/' target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-blue-700 dark:stroke-cyan-400 tabler-icon tabler-icon-brand-github">
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
              </Link>
              <LinkedInButton url='https://www.linkedin.com/in/klint-lee' />
            </section>

            <p>klintlee1@gmail.com</p>

            <Link target='_blank' href={"https://docs.google.com/document/d/1_RVeDZwr9auDKL_aaQcB0f5dEK1BQIztIgVLNPbAghw/edit?usp=sharing"}>View my resume</Link>

          </div>
        </header>

        <section className="px-32">
          <Tabs />
          {children}
        </section>

      </body>
    </html>
  );
}
