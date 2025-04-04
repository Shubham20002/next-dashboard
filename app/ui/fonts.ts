import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';

// Configure the font
export const lusitana = Lusitana({
  weight: ['400', '700'], // Specify weights you need
  subsets: ['latin'], // Specify subsets
  display: 'swap', // Optional: improves loading performance
});
 
export const inter = Inter({ subsets: ['latin'] });