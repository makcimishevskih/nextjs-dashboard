import { GlobeAltIcon } from '@heroicons/react/24/outline';

type AcmeLogoProps = {
  readonly font: string;
};

export default function AcmeLogo({ font }: AcmeLogoProps) {
  return (
    <div
      className={`${font} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
