import { Cve } from './components/Cve';
import { Home } from './components/Home';
import { Profile } from './components/Profile';

export const routes = [
  {
    label: 'Home',
    path: '/',
    component: Home,
  },
  {
    label: 'Profile',
    path: '/profile',
    component: Profile,
  },
  {
    label: 'CVE',
    path: '/cve',
    component: Cve,
  },
];
