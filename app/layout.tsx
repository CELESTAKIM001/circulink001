import './globals.css';
import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Splash } from '@/components/Splash';
export const metadata: Metadata = {title:'CIRCULINK — TUNA TAKA TAKA',description:'A circular-economy marketplace for reusable, recyclable and repairable materials.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Splash/><div className="topbar"/><Navigation/>{children}</body></html>}
