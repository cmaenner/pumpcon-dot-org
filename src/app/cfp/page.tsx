import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'CFP',
  description:
    'The Best Western is a Whole foods, but Pumpcon goes on.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Call for Papers (CFP)
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            The Best Western is a Whole foods, but Pumpcon goes on.
            </p>
            <p>
            Talks are single track, in a bar. Take that into account when considering your topic.
            No recordings, so feel free to say something candid or embarassing. Be as underground as you like. 
            Confess to a crime in front of fifty fellow hackers.
            </p>
            <p>
            Talks can be between 10 and 45 minutes on topics related to cybersecurity.
            Acceptances are done on a rolling basis.
            Email <a href="mailto: papers@pumpcon.org">papers@pumpcon.org</a> with the following:
            </p>
            <p>
            Title<br/>
            Abstract (1-2 paragraphs)<br/>
            Estimated length<br/>
            Anything you will need other than a projector
            </p>
            <p>
            #WHEN:<br/>
            Talks are a single track, Saturday October 22, 2022<br/>
            </p>
            <p>
            #WHERE:<br/>
            Filthadelphia, PA<br/>
            </p>
            <p>
            #WHY:<br/>
            Because in your heart, you know you want to.<br/>
            </p>
            <p>
            #GAMES AND PRIZES<br/>
            To be announced via @pumpcon on the Twitters.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/pumpcon" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink href="https://github.com/cmaenner/pumpcon-dot-org" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="mailto: papers@pumpcon.org"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              papers@pumpcon.org
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
