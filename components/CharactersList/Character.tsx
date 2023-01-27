import Image from "next/image";
import { Types } from "types";

export default function Character({
  image,
  name,
  id,
  episode,
  status,
  location,
  species,
  origin,
  gender,
}: Partial<Types.Character>) {
  return (
    <article className="flex items-start space-x-6 p-6">
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
        <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium space-x-2">
          <div>
            <dt className="sr-only">Gender</dt>
            <dd className="px-1.5 ring-1 ring-slate-200 rounded">{gender}</dd>
          </div>
          <div>
            <dt className="sr-only">Specie</dt>
            <dd className="px-1.5 ring-1 ring-slate-200 rounded">{species}</dd>
          </div>
          <div>
            <dt className="sr-only">Status</dt>
            <dd className="px-1.5 ring-1 ring-slate-200 rounded">
              {/* <svg
                width="2"
                height="2"
                fill="currentColor"
                className="mx-2 text-slate-300"
                aria-hidden="true"
              >
                <circle cx="1" cy="1" r="1" />
              </svg> */}
              {status}
            </dd>
          </div>
          <div>
            <dt className="sr-only">Origin</dt>
            <dd className="flex items-center px-1.5 ring-1 ring-slate-200 rounded">
              {/* <svg
                width="2"
                height="2"
                fill="currentColor"
                className="mx-2 text-slate-300"
                aria-hidden="true"
              >
                <circle cx="1" cy="1" r="1" />
              </svg> */}
              {origin?.name}
            </dd>
          </div>
          <div>
            <dt className="sr-only">Location</dt>
            <dd className="flex items-center px-1.5 ring-1 ring-slate-200 rounded">
              {/* <svg
                width="2"
                height="2"
                fill="currentColor"
                className="mx-2 text-slate-300"
                aria-hidden="true"
              >
                <circle cx="1" cy="1" r="1" />
              </svg> */}
              {location?.name}
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
