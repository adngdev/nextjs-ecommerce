import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';

import './globals.css';

import Providers from '@/components/Providers';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <Navbar />
                    <Toaster
                        position={`top-center`}
                        toastOptions={{
                            unstyled: true,
                            classNames: {
                                error: 'bg-red-400',
                                success: 'text-green-400',
                                warning: 'text-yellow-400',
                                info: 'bg-blue-400',
                            }
                        }}
                    />
                    {children}
                </Providers>
            </body>
        </html>
    );
};
