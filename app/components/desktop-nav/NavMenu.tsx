import { Josefin_Slab } from 'next/font/google';
import styles from './NavMenu.module.css';

// Initialize the Google Font (Josefin Slab)
const josefinSlab = Josefin_Slab({
  weight: '400',
  subsets: ['latin'],
});

export default function NavMenu() {
  return (
    <nav className={`${styles['nav-menu']} ${josefinSlab.className}`}>
      <ul>
        <li><a href="#mission">mission</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="#photos">photos</a></li>
        <li><a href="#musings">musings</a></li>
      </ul>
    </nav>
  );
}
