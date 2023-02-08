import { AUTHOR_NAME } from '../lib/constants'
import Container from './container'
import {GitHub, Instagram, Linkedin, Twitter} from 'react-feather'

type SocialMedia = {
  name: string;
  icon: JSX.Element;
  profileUrl: string;
} 

const SOCIALS: SocialMedia[] = [
  {
    name: 'Instagram',
    icon: <Instagram />,
    profileUrl: 'https://www.instagram.com/v_mnog/'
  },
  {
    name: 'Github',
    icon: <GitHub />,
    profileUrl: 'https://github.com/vmnog'
  },
  {
    name: 'Linkedin',
    icon: <Linkedin />,
    profileUrl: 'https://www.linkedin.com/in/vmnogueira/'
  },
  {
    name: 'Twitter',
    icon: <Twitter />,
    profileUrl: 'https://twitter.com/v_mnog'
  }
];

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center justify-between">
          <h3 className="text-xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4">
            <span className="text-lg font-normal">By</span> {AUTHOR_NAME}
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4">
            {SOCIALS.map(social => (
              <a
                key={social.name}
                href={social.profileUrl}
                target="_blank"
                className="mx-3 flex items-center gap-2 text-black hover:bg-gray-100 font-semibold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
              >
                <>
                  {social.icon}
                  {social.name}
                </>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
