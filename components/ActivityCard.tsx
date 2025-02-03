import Image from 'next/image';

interface ActivityCardProps {
  imageUrl: string;
  name: string;
  details: string;
  state: string;
  spotify?: boolean;
}

const ActivityCard = ({ imageUrl, name, details, state, spotify }: ActivityCardProps) => {
  return (
    <div className="font-medium rounded-md flex text-zinc-300 items-center mt-4">
      <div className="area mr-4">
        <Image src={imageUrl} alt={name} width={64} height={64} className="rounded-md" />
      </div>
      <div className="truncate hover:text-clip w-full">
        <div className="text-zinc-300 break-words mx-2 select-none leading-tight">
          <p className="truncate">
            {spotify ? (
              <>
                Listening to <b className="text-ellipsis">{details}</b> by <b className="text-ellipsis">{state}</b>
              </>
            ) : (
              <>
                <b className="text-ellipsis">{name}</b>
                {state && (
                  <>
                    <b className="text-ellipsis">{details}</b> in <b className="text-ellipsis">{state}</b>
                  </>
                )}
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;