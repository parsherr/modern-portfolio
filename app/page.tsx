'use client';

import Contact from '@/components/Contact';
import Stack from '@/components/Stack';
import PorfileDetails from '@/components/PorfileDetails';
import About from '@/components/About';
import Works from '@/components/Works';
import Repositories from '@/components/Repositories';
import { DiscordUserData, GithubRepositoriesData } from '@/types';
import SWR from '@/utils/swr';
import { githubUsername } from '@/utils/variables';
import { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { animateScroll as scroll } from 'react-scroll';
import Navbar from '@/components/Navbar';
import Loader from '@/components/Loader';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';


export default function Home() {
  const discord = SWR('discord');
  const discordUser: DiscordUserData | null = discord.data ? discord.data : null;

  const github = SWR('github');
  const githubUser: GithubRepositoriesData | null = github.data ? github.data : null;

  const handleScrollToTop = () => {
    scroll.scrollToTop();
  };

  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(top > 0);
    };

    window.addEventListener('scroll', handleScroll);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full">
        <div className="w-[100%] md:w-[85%] max-w-8xl mx-auto">
          <div id="about">
            <br />
            <FadeInSection>
              <PorfileDetails discord={discordUser} />
            </FadeInSection>
            <FadeInSection>
              <About />
            </FadeInSection>
          </div>
          <div id="technologies">
            <FadeInSection>
              <Stack />
            </FadeInSection>
          </div>
          <div id="contact">
            <FadeInSection>
              <Contact />
            </FadeInSection>
          </div>
          <div id="works">
            <FadeInSection>
              <Works />
            </FadeInSection>
          </div>
          <div id="repositories">
            <FadeInSection>
              <Repositories github={githubUser} />
            </FadeInSection>
          </div>
        </div>
        <div className="flex space-x-2 mr-6 mb-4 right-0 bottom-0 z-50 fixed items-center sm:space-x-4">
          <button
            onClick={handleScrollToTop}
            className={`opacity-100 cursor-pointer inline-flex items-center p-2 rounded-full bg-zinc-900 hover:bg-zinc-900/80 transition-opacity ${
              isVisible ? 'visible' : 'invisible'
            }`}
          >
            <AiOutlineArrowUp size={'23px'} className="h-6 w-6 text-zinc-400" />
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
