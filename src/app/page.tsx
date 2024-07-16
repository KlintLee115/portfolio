import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ProjectsDisplay from '../components/ProjectsFragment/ProjectsDisplay';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className='mt-5'>

      <header className='gap-10 flex items-center justify-center lg:gap-64'>
        <p className="text-2xl md:text-6xl flex justify-center items-center 
          w-max aspect-square border border-black dark:border-white p-7 rounded-full">
          K.L</p>
        <div className='space-y-[1.5vh]'>
          <p className='text-2xl'>Klint Lee</p>
          <p className='header-desc'>Software Developer</p>
          <section className='flex items-center mr-8 mt-4 gap-4'>
            <Link href='https://github.com/KlintLee115/' target='_blank'><FontAwesomeIcon width={30} height={30} icon={faGithub} /></Link>
            <Link href='https://www.linkedin.com/in/klint-lee-12573a199/' target='_blank'><FontAwesomeIcon icon={faLinkedin} width={30} height={30} /></Link>
          </section>
          <p>I am very self driven.</p>
          <p>Lifes short, keep coding</p>
          <p>klintlee1@gmail.com</p>

        </div>
      </header>

      <ProjectsDisplay />

    </div>
  )
}