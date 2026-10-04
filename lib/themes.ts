export interface ThemeInfo {
  name: string;
  theme: string;
  icon: string;
  publisher: string;
}

export const THEMES: ThemeInfo[] = [
  {
    name: 'GitHub Dark',
    theme: 'github-dark',
    icon: '/logos/vscode_icon.svg',
    publisher: 'GitHub',
  },
  {
    name: 'Dracula',
    theme: 'dracula',
    icon: '/logos/vscode_icon.svg',
    publisher: 'Dracula Theme',
  },
  {
    name: 'Ayu Dark',
    theme: 'ayu-dark',
    icon: '/logos/vscode_icon.svg',
    publisher: 'teabyii',
  },
  {
    name: 'Ayu Mirage',
    theme: 'ayu-mirage',
    icon: '/logos/vscode_icon.svg',
    publisher: 'teabyii',
  },
  {
    name: 'Nord',
    theme: 'nord',
    icon: '/logos/vscode_icon.svg',
    publisher: 'arcticicestudio',
  },
  {
    name: 'Night Owl',
    theme: 'night-owl',
    icon: '/logos/vscode_icon.svg',
    publisher: 'sarah.drasner',
  },
];

export const THEME_KEYS = THEMES.map(t => t.theme) as [string, ...string[]];
