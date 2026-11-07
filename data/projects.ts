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
    logo: '/logos/chessmate.svg',
    link: 'https://pyatrick666.itch.io/chessmate',
    slug: 'chessmate',
  },
  {
    title: 'RaspberryPi-PICO Projects',
    description: 'Embedded-system projects and experiments using the Raspberry Pi Pico (RP2040), including a temperature and humidity monitoring application with sensor-based data collection.',
    logo: '/logos/raspberrypi-pico.svg',
    link: 'https://github.com/pyatrick666/RaspberryPi-PICO',
    slug: 'raspberrypi-pico',
  },
  {
    title: '360-VR-',
    description: 'A single-page 360° warehouse cybersecurity awareness training experience with interactive risk hotspots, scenario questions, progress tracking, and audio feedback.',
    logo: '/logos/360vr.svg',
    link: 'https://pyatrick666.github.io/360-VR-/',
    slug: '360-vr',
  },
  {
    title: 'Hotel Information & Table Booking System',
    description: 'A full-stack Hotel Paradise Inn website concept featuring a guest photo gallery, Google reviews, editable menu and opening hours, table-booking requests, and an owner dashboard.',
    logo: '/logos/hotel.svg',
    link: 'https://patrickdev.lovable.app/#top',
    slug: 'demo-hotelsinfowithtablebookingsystem',
  },
  {
    title: 'CarRentalApp',
    description: 'A C# Windows Forms booking application with customer and rental details, SQL Server LocalDB persistence, and a searchable rental-records view.',
    logo: '/logos/carrental.svg',
    link: 'https://github.com/pyatrick666/CarRentalApp',
    slug: 'carrentalapp',
  },
];
