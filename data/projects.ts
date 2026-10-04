export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'ChessMate',
    description: 'A chess game built with Flutter, focused on a clean and playable mobile experience.',
    logo: '/logos/vsc.svg',
    link: 'https://pyatrick666.itch.io/chessmate',
    slug: 'chessmate',
  },
  {
    title: 'RaspberryPi-PICO',
    description: 'A Raspberry Pi Pico project exploring embedded systems and microcontroller development.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/pyatrick666/RaspberryPi-PICO',
    slug: 'raspberrypi-pico',
  },
  {
    title: 'CarRentalApp',
    description: 'A car rental application project focused on practical application development.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/pyatrick666/CarRentalApp',
    slug: 'carrentalapp',
  },
];
