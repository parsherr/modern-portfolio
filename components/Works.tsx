import { works } from '@/utils/variables';
import Image from 'next/image';
import Link from 'next/link';

export default function Works() {
  return (
    <div className="container mx-auto pb-8 w-11/12 sm:pb-10 sm:w-9/12 md:w-7/12">
      <header className="space-y-2 my-8">
        <h3 className="text-center font-semibold text-3xl text-zinc-200" id="works">Works</h3>
        <p className="text-center font-semibold text-zinc-400">My Works</p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {works.map(({ name, description, link, iconURL, view }, index) => (
          <div key={index} className="area bg-zinc-900/30 border border-zinc-900/30 rounded-md overflow-hidden transition duration-200 hover:scale-105">
            <a href={link} className="block">
              <img src={view} alt="Project Screenshot" className="w-full h-auto object-cover" />
            </a>
            <Link href={link} className="p-4 flex items-center justify-between space-x-2">
              <div className="line-clamp-2">
                <h2 className="font-semibold text-zinc-200 truncate">{name}</h2>
                <p className="text-zinc-500 line-clamp-2">{description}</p>
              </div>
              <div className="flex-shrink-0">
                <Image src={iconURL} alt={name} width={56} height={56} className="rounded-full shadow-md shadow-black" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}