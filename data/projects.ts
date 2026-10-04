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
    title: 'RaspberryPi-PICO Projects',
    description: 'Embedded-system projects and experiments using the Raspberry Pi Pico (RP2040), including a temperature and humidity monitoring application with sensor-based data collection.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/pyatrick666/RaspberryPi-PICO',
    slug: 'raspberrypi-pico',
  },
  {
    title: 'CarRentalApp',
    description: 'A Windows desktop car rental application designed to manage vehicles, rentals, and customer information through a dedicated desktop interface.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/pyatrick666/CarRentalApp',
    slug: 'carrentalapp',
  },
];
