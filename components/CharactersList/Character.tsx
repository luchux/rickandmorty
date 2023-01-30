import Image from "next/image";
import { Types } from "types";

interface CharacterProps {
  character: Partial<Types.Character>;
  onClick: () => void;
}
export default function Character({
  character: { image, name, gender, species, status, origin, location },
  onClick,
}: CharacterProps) {
  return (
    <article
      className="flex items-start space-x-6 p-6 hover:bg-cyan-100 hover:opacity-70"
      onClick={onClick}
    >
      {image && (
        <Image
          src={image}
          alt=""
          width="60"
          height="88"
          className="flex-none rounded-md bg-slate-100"
        />
      )}
      <div className="min-w-0 relative flex-auto">
        <h2 className="font-semibold text-slate-900 truncate pr-20">{name}</h2>
        <div>
          <dt className="sr-only">Specie</dt>
          <dd className="">{species}</dd>
        </div>
      </div>
    </article>
  );
}
