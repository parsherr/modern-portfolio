import { socialMediaAccounts } from '@/utils/variables';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className='container mx-auto pb-8 w-11/12 sm:pb-10 sm:w-9/12 md:w-7/12'>
      <div className='space-y-2 my-8'>
        <h3 className='font-semibold text-3xl text-zinc-200 text-center' id='contect'> Contact </h3>
        <p className='text-zinc-400 text-center'> My social Media Accounts. </p>
      </div>
      <div className='grid gap-4 md:grid-cols-2'>
        {socialMediaAccounts.map((props, key) => (
          <Link key={key} href={props.link} className='hover:scale-105 rounded-md focusRing overflow-x-hidden cursor-pointer p-4 transition duration-200 border bg-zinc-900/30 border-zinc-900/30 items-center justify-between flex space-x-2'>
            <div className='line-clamp-2'>
              <h2 className='font-semibold text-zinc-200 truncate'>{props.name}</h2>
              <p className='text-zinc-400 line-clamp-2'>{props.name} {props.username}</p>
            </div>
            <div className='flex-shrink-0'>
              <props.iconURL size={'23px'} className='h-8 w-8 text-zinc-200 opacity-75'/>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}