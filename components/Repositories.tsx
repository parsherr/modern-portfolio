import { GithubRepositoriesData } from '@/types';
import { Colors } from '@/utils/colors';
import { githubUsername } from '@/utils/variables';
import Link from 'next/link';
import { BiGitRepoForked } from 'react-icons/bi';
import { FaRegStar } from 'react-icons/fa';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { useEffect, useState } from 'react';

export default function Repositories({ github }: { github: GithubRepositoriesData | null }) {
  const [repoCount, setRepoCount] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setRepoCount(6);
      }
      else {
        setRepoCount(12);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='container mx-auto pb-8 w-11/12 sm:pb-10 sm:w-9/12 md:w-7/12'>
      <div className='space-y-2 my-8'>
        <h3 className='font-semibold text-3xl text-zinc-200 text-center' id='repositories'>
          Repositories
        </h3>
        <p className='text-zinc-400 text-center'>My Github Open Source Projects.</p>
      </div>

      <div className='flex flex-col md:grid md:grid-cols-2 gap-4'>
        {github ? (
          github
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, repoCount)
            .map((data, key) => (
              <div
                className='hover:scale-105 w-full rounded-lg bg-zinc-900/30 border border-zinc-900/30 p-4 cursor-pointer transition-colors duration-200'
                key={key}
              >
                <Link href={`https://github.com/${githubUsername}/${data.name}`}>
                  <div className='flex flex-col'>
                    <div className='flex justify-between items-center'>
                      <h1 className='font-semibold hover:opacity-75 truncate'>
                        {data.name}
                      </h1>
                      <div className='text-xs px-2 py-1 rounded-2xl opacity-40'>
                        Updated {formatDistanceToNow(parseISO(data.updated_at), { addSuffix: true })}
                      </div>
                    </div>
                    <br />
                    <h1 className='text-sm line-clamp-2'>{data.description}</h1>
                    <div className='flex items-center gap-4 mt-8'>
                      <div className='flex items-center gap-2'>
                        <div
                          className='w-4 h-4 rounded-full'
                          style={{
                            backgroundColor:
                              // @ts-ignore
                              Colors[data.language]?.color || 'GRAY',
                          }}
                        />
                        <h1 className='text-xs'>{data.language}</h1>
                      </div>
                      <div className='flex items-center gap-2'>
                        <FaRegStar size='18px' color='GRAY' />
                        <h1 className='font-semibold text-sm'>{data.stargazers_count}</h1>
                      </div>
                      <div className='flex items-center gap-2'>
                        <BiGitRepoForked size='18px' color='GRAY' />
                        <h1 className='font-semibold text-sm'>{data.forks}</h1>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
        ) : null}
      </div>
    </div>
  );
}