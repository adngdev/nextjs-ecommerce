import { ReactNode } from 'react';

import { Inter } from 'next/font/google';

import './globals.css';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Toaster />
                {children}
            </body>
        </html>
    );
};
