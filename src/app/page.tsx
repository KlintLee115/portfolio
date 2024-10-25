import Link from 'next/link';
import MainSection from '@/components/MainSection';

export default function HomePage() {
  return (
    <div className='mt-5'>

      <header className='my-7'>
        <p className="text-4xl pb-5 text-center mb-5 border-b border-gray-50 border-opacity-25 w-4/5 mx-auto">&lt;Klint Lee /&gt;</p>

        <div className='flex justify-evenly items-center'>
          <p className='header-desc'>Software Developer</p>
          <section className='flex items-center gap-4'>
            <Link href='https://github.com/KlintLee115/' target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="cyan" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github">
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
            </Link>
            <Link href='https://www.linkedin.com/in/klint-lee-12573a199/' target='_blank' className='bg-cyan-500 rounded-sm'>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="black" stroke="cyan" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github">
                <path d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" />
              </svg>
            </Link>
          </section>

          <p>klintlee1@gmail.com</p>

          <Link target='_blank' href={"/software_resume.pdf"}>View my resume</Link>

        </div>
      </header>

      <MainSection />

    </div>
  )
}