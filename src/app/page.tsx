import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ProjectsDisplay from '../components/ProjectsFragment/ProjectsDisplay';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className='mt-5'>

      <header className='my-7'>
        <p className="text-4xl pb-5 text-center mb-5 border-b border-gray-50 border-opacity-25 w-4/5 mx-auto">&lt;Klint Lee /&gt;</p>

        <div className='flex justify-evenly items-center'>
          <p className='header-desc'>Software Developer</p>
          <section className='flex items-center gap-4'>
            <Link href='https://github.com/KlintLee115/' target='_blank'><FontAwesomeIcon width={30} height={30} icon={faGithub} /></Link>
            <Link href='https://www.linkedin.com/in/klint-lee-12573a199/' target='_blank'><FontAwesomeIcon icon={faLinkedin} width={30} height={30} /></Link>
          </section>

          <p>klintlee1@gmail.com</p>

        </div>
      </header>

      <ProjectsDisplay />

    </div>
  )
}