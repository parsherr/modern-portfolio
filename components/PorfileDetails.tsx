// components/ProfileDetails.tsx
import { DiscordUserData } from '@/types';
import Image from 'next/image';
import { BiLogoVisualStudio } from 'react-icons/bi';
import { BsSpotify } from 'react-icons/bs';
import { FaFileCode, FaGamepad } from 'react-icons/fa';
import { SiTypescript, SiHtml5, SiCss3, SiJavascript, SiPython } from 'react-icons/si';
import ActivityCard from './ActivityCard';

export default function ProfileDetails({ discord }: { discord: DiscordUserData | null }) {
  const activities = discord?.data?.activities || [];
  const vsCode = activities.find(activity => activity.name === 'Visual Studio Code');
  const spotify = activities.find(activity => activity.name === 'Spotify');

  const filteredActivities = activities.filter(activity => activity.type !== 4);

  return (
    <div className="container mx-auto w-11/12 sm:w-9/12 md:w-7/12 my-16">
      <div className="bg-zinc-900/30 rounded-b-md flex flex-col md:flex-row md:items-center py-10 px-8 justify-between">
        <div className="relative flex-shrink-0 mb-4 md:mb-0 w-full md:w-auto text-center md:text-left">
          {discord ? (
            <div className={`relative w-24 h-24 md:w-36 md:h-36 mx-auto md:mx-0 rounded-full ring ${discord.data.discord_status === 'dnd' ? 'ring-[#ed4245]' : discord.data.discord_status === 'idle' ? 'ring-[#fee75c]' : discord.data.discord_status === 'online' ? 'ring-[#57f287]' : 'ring-[#2c2f33]'}`}>
              <Image
                className="rounded-full hover:opacity-75 transition duration-700"
                src={`https://cdn.discordapp.com/avatars/${discord.data.discord_user.id}/${discord.data.discord_user.avatar}`}
                alt="avatar"
                width={1024}
                height={1024}
              />
              <div className="hidden md:flex absolute bottom-1 right-1 w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#0d0d10] items-center justify-center">
                <div className={`w-2 h-2 md:w-4 md:h-4 rounded-full ${discord.data.discord_status === 'dnd' ? 'bg-red-500' : discord.data.discord_status === 'idle' ? 'bg-yellow-500' : discord.data.discord_status === 'online' ? 'bg-green-500' : 'bg-zinc-600'}`} />
              </div>
            </div>
          ) : (
            <div className="w-24 h-24 md:w-36 md:h-36 mx-auto md:mx-0 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <Image className="rounded-full hover:opacity-75 transition duration-700" src="https://media.tenor.com/IHdlTRsmcS4AAAAS/404.gif" alt="avatar" width={1024} height={1024} />
            </div>
          )}
        </div>
        <div className="flex flex-col items-center md:items-start md:w-8/12 md:ml-6 text-center md:text-left">
          <div className="space-y-2">
            <h1 className="text-xl md:text-2xl font-semibold" id="profile">
              <ul className="flex flex-col md:flex-row font-medium gap-x-1 items-center md:items-start justify-center md:justify-start">
                <li>Hello there, I&apos;m </li>
                <li style={{ fontSize: '1.5rem' }}>
                  Parsher
                </li>
                <li>
                  <div className="relative group">
                    <div
                      style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        pointerEvents: 'none',
                        backgroundColor: '#25093f',
                      }}
                      className="absolute left-1/2 transform -translate-x-1/2 -top-35 w-48 text-white text-sm rounded-md p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-l-6 border-r-6 border-b-8 border-l-transparent border-r-transparent border-b-zinc-800"></div>
                    </div>
                  </div>
                </li>
              </ul>
              <p className="text-center md:text-left" style={{ fontSize: '1rem' }}>Full-Stack Developer ・Content Creator</p>
            </h1>
            <p className="text-center md:text-left" style={{ fontSize: '0.8rem', paddingTop: '1rem' }}>
             I have been learning software myself for 5+ years and sharing the software I have been doing for 3 years on YouTube and GitHub. I&apos;ve been writing Discord bots for a long time, but now I&apos;m focused on web development.
            </p>
          </div>
        </div>
      </div>
      {filteredActivities.length > 0 && (
        <div className="bg-zinc-900/30 rounded-md p-4">
          {vsCode && (
            <ActivityCard
              imageUrl={`https://cdn.discordapp.com/app-assets/${vsCode.application_id}/${vsCode.assets.large_image}.png`}
              name={''}
              details={vsCode.details}
              state={vsCode.state}
            />
          )}
          {spotify && (
            <ActivityCard
              imageUrl={`https://i.scdn.co/image/${spotify.assets.large_image.replace('spotify:', '')}`}
              name="Listening to"
              details={spotify.details}
              state={spotify.state}
              spotify
            />
          )}
          {filteredActivities
            .filter(activity => activity.name !== 'Visual Studio Code' && activity.name !== 'Spotify')
            .map((activity, index) => (
              <ActivityCard
                key={index}
                imageUrl={
                  activity.assets && activity.assets.large_image
                    ? `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png`
                    : 'https://cdn.discordapp.com/attachments/1037116702403127377/1037116702403127378/default.png'
                }
                name={activity.name}
                details={activity.type === 2 ? `Editing ${activity.details}` : `Playing ${activity.details}`}
                state={activity.state ? activity.state : ''}
              />
            ))}
        </div>
      )}
    </div>
  );
}
