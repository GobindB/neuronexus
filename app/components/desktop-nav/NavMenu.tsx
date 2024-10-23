import { Josefin_Slab } from 'next/font/google';
import Link from 'next/link';
import styles from './NavMenu.module.css';

// Initialize the Google Font (Josefin Slab)
const josefinSlab = Josefin_Slab({
  weight: '400',
  subsets: ['latin'],
});

export default function NavMenu() {
  return (
    <nav className={`${styles['nav-menu']} ${josefinSlab.className}`} role="navigation" aria-label="Main Navigation">
      <ul>
        <li>
          <Link href="/mission" scroll={false}>
            mission
          </Link>
        </li>
        <li>
          <Link href="#projects" scroll={false}>
            projects
          </Link>
        </li>
        <li>
          <Link href="#photos" scroll={false}>
            photos
          </Link>
        </li>
        <li>
          <Link href="#musings" scroll={false}>
            musings
          </Link>
        </li>
      </ul>
    </nav>
  );
}
