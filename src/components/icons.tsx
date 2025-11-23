import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

export function BnbIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m12 3-5.29 5.29L3 12l3.71 3.71L12 21l5.29-5.29L21 12l-3.71-3.71Z" />
      <path d="m5.23 8.71 3.06 3.06-3.06 3.06" />
      <path d="m15.71 8.71-3.06 3.06 3.06 3.06" />
      <path d="m12 8.04 1.53 1.53-1.53 1.53" />
      <path d="m12 12.96 1.53 1.53-1.53 1.53" />
      <path d="m12 8.04-1.53 1.53 1.53 1.53" />
      <path d="m12 12.96-1.53 1.53 1.53 1.53" />
    </svg>
  );
}

export function SolIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15.43 3.32a1.5 1.5 0 0 0-1.43-.82h-4a1.5 1.5 0 0 0-1.43.82L3.32 8.57a1.5 1.5 0 0 0 .82 1.43l4.55 2.62a1.5 1.5 0 0 1 0 .76l-4.55 2.62a1.5 1.5 0 0 0-.82 1.43l1.25 5.25a1.5 1.5 0 0 0 1.43.82h4a1.5 1.5 0 0 0 1.43-.82l5.25-5.25a1.5 1.5 0 0 0-.82-1.43l-4.55-2.62a1.5 1.5 0 0 1 0-.76l4.55-2.62a1.5 1.5 0 0 0 .82-1.43Z" />
    </svg>
  );
}

export function GlobeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export function PillIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
      <path d="m8.5 8.5 7 7" />
    </svg>
  );
}

export function CubesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="3" y="3" rx="1" />
    </svg>
  );
}

export function SlashIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18.33 6.67l-2.66 2.66" />
      <path d="M19.33 11.33l-4.66 4.66" />
      <path d="M16 18.5l-2-2" />
    </svg>
  );
}

export function NectarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        d="M12 2L18.66 6V12L12 15.46L5.34 12V6L12 2ZM12 4.46L7.14 7.25V11L12 13.54L16.86 11V7.25L12 4.46Z"
        fill="currentColor"
      />
      <path
        d="M5.33997 6L12 9.33L18.66 6L12 2.67L5.33997 6Z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M12 22L18.66 18V12L12 15.46L5.34 12V18L12 22Z"
        fill="currentColor"
      />
      <path
        d="M12,11.5l6.66-3.33v6L12,17.5l-6.66-3.33v-6L12,11.5z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  );
}

export function NectarIcon2(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M32 5.33301L46.6667 13.333V29.333L32 37.333L17.3333 29.333V13.333L32 5.33301Z"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M17.3333 13.333L32 21.333L46.6667 13.333"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M32 58.667L46.6667 50.667V34.667L32 42.667L17.3333 34.667V50.667L32 58.667Z"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M17.3333 34.667L32 26.667L46.6667 34.667"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M5.33331 24L17.3333 17.3333V30.6667L5.33331 37.3333V24Z"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M46.6667 30.6667V17.3333L58.6667 24V37.3333L46.6667 30.6667Z"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  );
}

export function ChefHatOffIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M8.5 2.5a2.5 2.5 0 0 1 5 0V5h-5V2.5Z" />
      <path d="M12.5 5H17a2 2 0 0 1 2 2v2.5" />
      <path d="M20 15.5V21H4v-5.5" />
      <path d="M4 11.5V9a2 2 0 0 1 2-2h2.5" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </svg>
  );
}

export function SlidersHorizontalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="21" x2="14" y1="4" y2="4" />
      <line x1="10" x2="3" y1="4" y2="4" />
      <line x1="21" x2="12" y1="12" y2="12" />
      <line x1="8" x2="3" y1="12" y2="12" />
      <line x1="21" x2="16" y1="20" y2="20" />
      <line x1="12" x2="3" y1="20" y2="20" />
      <line x1="14" x2="14" y1="2" y2="6" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="16" x2="16" y1="18" y2="22" />
    </svg>
  );
}

export const PumpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.33325 10V2.66667H11.3333V10H12.6666V11.3333H8.66659V10H9.33325Z"
      fill="currentColor"
    />
    <path
      d="M4.66675 13.3333V6H6.66675V13.3333H8.00008V14.6667H4.00008V13.3333H4.66675Z"
      fill="currentColor"
    />
  </svg>
);

export const BagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.66675 4.66667L4.00008 5.33333V14H12.0001V5.33333L11.3334 4.66667H4.66675ZM5.52675 6H10.4734L10.6667 6.19333V12.6667H5.33341V6.19333L5.52675 6ZM8.00008 2C6.52675 2 5.33341 3.19333 5.33341 4.66667H6.66675C6.66675 4.08 7.24675 3.33333 8.00008 3.33333C8.75341 3.33333 9.33341 4.08 9.33341 4.66667H10.6667C10.6667 3.19333 9.47341 2 8.00008 2Z"
      fill="currentColor"
    />
  </svg>
);

export const DaosIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.00004 2.66667C6.15337 2.66667 4.66671 4.15333 4.66671 6C4.66671 7.84667 6.15337 9.33333 8.00004 9.33333C9.84671 9.33333 11.3334 7.84667 11.3334 6C11.3334 4.15333 9.84671 2.66667 8.00004 2.66667ZM2.66671 13.3333C2.66671 11.52 4.00004 10.6667 5.76004 10.32L8.00004 10.6667L10.24 10.32C12 10.6667 13.3334 11.52 13.3334 13.3333V14H2.66671V13.3333Z"
      fill="currentColor"
    />
  </svg>
);

export const BelieveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.00004 1.33333L10.0267 5.38667L14.6667 6.04667L11.3334 9.27333L12.0534 14L8.00004 11.8867L3.94671 14L4.66671 9.27333L1.33337 6.04667L5.97337 5.38667L8.00004 1.33333Z"
      fill="currentColor"
    />
  </svg>
);

export const BoopIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 14.6667C11.6667 14.6667 14.6667 11.6667 14.6667 8C14.6667 4.33333 11.6667 1.33333 8 1.33333C4.33333 1.33333 1.33333 4.33333 1.33333 8C1.33333 11.6667 4.33333 14.6667 8 14.6667ZM8 3.33333C9.32667 3.33333 10.4 4.40667 10.4 5.73333C10.4 6.74 9.80667 7.42 9.04 7.82C9.52 8.08 9.86667 8.6 9.86667 9.25333C9.86667 10.28 9.04 11.0933 8 11.0933C6.96 11.0933 6.13333 10.28 6.13333 9.25333C6.13333 8.6 6.48 8.08 6.96 7.82C6.19333 7.42 5.6 6.74 5.6 5.73333C5.6 4.40667 6.67333 3.33333 8 3.33333Z"
      fill="currentColor"
    />
  </svg>
);

export const RaydiumIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 1.33333C4.32 1.33333 1.33333 4.32 1.33333 8C1.33333 11.68 4.32 14.6667 8 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8C14.6667 4.32 11.68 1.33333 8 1.33333ZM8 3.33333C10.5733 3.33333 12.6667 5.42667 12.6667 8C12.6667 10.5733 10.5733 12.6667 8 12.6667C5.42667 12.6667 3.33333 10.5733 3.33333 8C3.33333 5.42667 5.42667 3.33333 8 3.33333ZM8 4.66667C7.08 4.66667 6.20667 5.2 5.76667 6H10.24C9.8 5.2 8.92 4.66667 8 4.66667ZM10.2333 10H5.76667C6.20667 10.8 7.08 11.3333 8 11.3333C8.92 11.3333 9.8 10.8 10.2333 10Z"
      fill="currentColor"
    />
  </svg>
);

export const MayhemIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.00004 1.33333L1.33337 14.6667H14.6667L8.00004 1.33333ZM8.00004 4.88L10.3467 9.33333H5.65337L8.00004 4.88Z"
      fill="currentColor"
    />
  </svg>
);

export const MoonshotIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.82667 3.82667C2.05333 5.6 1.33333 8 1.33333 8C1.33333 8 2.05333 10.4 3.82667 12.1733C5.6 13.9467 8 14.6667 8 14.6667C8 14.6667 10.4 13.9467 12.1733 12.1733C13.9467 10.4 14.6667 8 14.6667 8C14.6667 8 13.9467 5.6 12.1733 3.82667C10.4 2.05333 8 1.33333 8 1.33333C8 1.33333 5.6 2.05333 3.82667 3.82667ZM8 4.66667C9.84 4.66667 11.3333 6.16 11.3333 8C11.3333 9.84 9.84 11.3333 8 11.3333C6.16 11.3333 4.66667 9.84 4.66667 8C4.66667 6.16 6.16 4.66667 8 4.66667Z"
      fill="currentColor"
    />
  </svg>
);

export const CandleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.66671 12V6.66667H9.33337V12H10.6667V13.3333H5.33337V12H6.66671ZM8.00004 2C7.08004 2 6.66671 3.10667 6.66671 4V4.66667H9.33337V4C9.33337 3.10667 8.92004 2 8.00004 2Z"
      fill="currentColor"
    />
  </svg>
);

export const JupiterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.66671 2.66667V4H2.66671V10H4.66671V11.3333H6.00004V13.3333C8.94004 13.3333 11.3334 10.94 11.3334 8C11.3334 7.08 11.0734 6.2 10.6267 5.43333L8.85337 7.20667L8.14671 6.5L9.92004 4.72667C9.15337 4.28 8.27337 4 7.33337 4H6.00004V2.66667H4.66671Z"
      fill="currentColor"
    />
  </svg>
);

export const LaunchpadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.00004 1.33333L1.33337 5.33333L8.00004 9.33333L14.6667 5.33333L8.00004 1.33333ZM1.33337 10V12L8.00004 16L14.6667 12V10L8.00004 14L1.33337 10Z"
      fill="currentColor"
    />
  </svg>
);

export const MeteoraIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 1.33333L1.33333 8L8 14.6667L14.6667 8L8 1.33333ZM8 3.52L12.48 8L8 12.48L3.52 8L8 3.52Z"
      fill="currentColor"
    />
  </svg>
);

export const OrcaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.00004 1.33333C4.32004 1.33333 1.33337 4.32 1.33337 8C1.33337 11.68 4.32004 14.6667 8.00004 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8C14.6667 4.32 11.68 1.33333 8.00004 1.33333ZM4.00004 6C4.00004 4.89333 4.89337 4 6.00004 4C7.10671 4 8.00004 4.89333 8.00004 6C8.00004 7.10667 7.10671 8 6.00004 8C4.89337 8 4.00004 7.10667 4.00004 6ZM10.6667 10.6667C10.12 10.6667 9.66671 10.2133 9.66671 9.66667V8.33333H8.33337V9.66667C8.33337 10.94 9.36004 12 10.6667 12C11.9734 12 13.0001 10.94 13.0001 9.66667V8.33333H11.6667V9.66667C11.6667 10.2133 11.2134 10.6667 10.6667 10.6667Z"
      fill="currentColor"
    />
  </svg>
);

export const BonkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 1.33333L1.33333 8H5.33333V14.6667H10.6667V8H14.6667L8 1.33333Z"
      fill="currentColor"
    />
  </svg>
);

export const HeavenIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 1.33333L1.33333 8L8 14.6667L14.6667 8L8 1.33333ZM8 5.66667L10.3333 8L8 10.3333L5.66667 8L8 5.66667Z"
      fill="currentColor"
    />
  </svg>
);

export const SugarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 1.33333L1.33333 8L8 14.6667L14.6667 8L8 1.33333Z"
      fill="currentColor"
    />
  </svg>
);

export const MoonitIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.00004 1.33333C4.32004 1.33333 1.33337 4.32 1.33337 8C1.33337 11.68 4.32004 14.6667 8.00004 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8C14.6667 4.32 11.68 1.33333 8.00004 1.33333ZM8.00004 3.33333C10.5734 3.33333 12.6667 5.42667 12.6667 8C12.6667 9.17333 12.22 10.2 11.4867 10.9467C10.74 11.6933 9.71337 12.1333 8.54004 12.1333C8.42004 12.1333 8.29337 12.1267 8.17337 12.1133C6.46004 11.96 5.10004 10.4267 5.10004 8.66667C5.10004 6.82 6.58671 5.33333 8.42671 5.33333C8.58671 5.33333 8.74671 5.34667 8.90004 5.38C8.54004 4.18667 7.28671 3.33333 5.86671 3.33333C4.24671 3.33333 2.93337 4.64667 2.93337 6.26667C2.93337 6.62667 3.00671 6.96667 3.12671 7.28667C3.32671 5.06 5.42004 3.33333 8.00004 3.33333Z"
      fill="currentColor"
    />
  </svg>
);

export const DynamicIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8 1.33333L1.33333 8L8 14.6667V1.33333Z" fill="currentColor" />
  </svg>
);

export const UsdcIcon = (props: { className?: string }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("text-[#2775CA]", props.className)}
  >
    <path
      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
      fill="currentColor"
    />
    <path
      d="M16.0002 24.4287C20.6631 24.4287 24.4287 20.6631 24.4287 16.0002C24.4287 11.3372 20.6631 7.57166 16.0002 7.57166C11.3372 7.57166 7.57166 11.3372 7.57166 16.0002C7.57166 20.6631 11.3372 24.4287 16.0002 24.4287Z"
      fill="white"
    />
    <path
      d="M17.6001 19.3518C17.6001 20.0163 17.2915 20.627 16.7573 21.045C16.1961 21.4899 15.4851 21.7145 14.7397 21.7145C13.5651 21.7145 12.5699 21.2351 11.8317 20.3547L12.8339 19.4607C13.2519 20.0028 13.8814 20.325 14.6268 20.325C15.0117 20.325 15.3338 20.211 15.5891 19.9698C15.8444 19.7286 15.9811 19.4249 15.9811 19.0805C15.9811 18.2858 15.3338 17.7844 14.1207 17.3995C12.6025 16.9201 11.8452 16.0826 11.8452 14.9215C11.8452 13.7196 12.6989 12.7513 14.0799 12.4497L14.0934 10.2858H15.5891V12.3807C16.5186 12.5085 17.1659 13.0166 17.5103 13.7915L16.4812 14.5401C16.2259 14.054 15.7715 13.7031 15.1936 13.6235V15.5355C17.0689 16.2033 17.6001 17.3712 17.6001 19.3518Z"
      fill="currentColor"
    />
  </svg>
);

export const UsdIcon = (props: { className?: string }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("text-yellow-400", props.className)}
  >
    <path
      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
      fill="currentColor"
    />
    <path
      d="M16.0002 24.4287C20.6631 24.4287 24.4287 20.6631 24.4287 16.0002C24.4287 11.3372 20.6631 7.57166 16.0002 7.57166C11.3372 7.57166 7.57166 11.3372 7.57166 16.0002C7.57166 20.6631 11.3372 24.4287 16.0002 24.4287Z"
      fill="white"
    />
    <path
      d="M17.6001 19.3518C17.6001 20.0163 17.2915 20.627 16.7573 21.045C16.1961 21.4899 15.4851 21.7145 14.7397 21.7145C13.5651 21.7145 12.5699 21.2351 11.8317 20.3547L12.8339 19.4607C13.2519 20.0028 13.8814 20.325 14.6268 20.325C15.0117 20.325 15.3338 20.211 15.5891 19.9698C15.8444 19.7286 15.9811 19.4249 15.9811 19.0805C15.9811 18.2858 15.3338 17.7844 14.1207 17.3995C12.6025 16.9201 11.8452 16.0826 11.8452 14.9215C11.8452 13.7196 12.6989 12.7513 14.0799 12.4497L14.0934 10.2858H15.5891V12.3807C16.5186 12.5085 17.1659 13.0166 17.5103 13.7915L16.4812 14.5401C16.2259 14.054 15.7715 13.7031 15.1936 13.6235V15.5355C17.0689 16.2033 17.6001 17.3712 17.6001 19.3518Z"
      fill="currentColor"
    />
  </svg>
);

export const ChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const RefreshCwIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M3 21v-5h5" />
  </svg>
);

export const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export const CheckboxCheckedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="14" height="14" rx="2" fill="#2563EB" />
    <path
      d="M10.5 4.5L6 9L3.5 6.5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CheckboxUncheckedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="0.5"
      y="0.5"
      width="13"
      height="13"
      rx="1.5"
      fill="#1E293B"
      stroke="#475569"
    />
  </svg>
);

export const DollarSignIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="12" x2="12" y1="2" y2="22" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

export const UsersIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const MessageCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
  </svg>
);

export const AtSignIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
  </svg>
);

export const CodeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export const Globe2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 21v-4a2 2 0 0 0-2-2H7l-4 4Z" />
    <path d="M17.5 3A2.5 2.5 0 0 1 20 5.5V17a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5.5A2.5 2.5 0 0 1 9.5 3Z" />
  </svg>
);

export const BookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
  </svg>
);

export const Users2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M14 19a6 6 0 0 0-12 0" />
    <circle cx="8" cy="9" r="4" />
    <path d="M22 19a6 6 0 0 0-6-6" />
    <path d="M16 11.37a4 4 0 0 1 0-2.74" />
  </svg>
);

export const FileTextIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
    <path d="M10 9H8" />
  </svg>
);
