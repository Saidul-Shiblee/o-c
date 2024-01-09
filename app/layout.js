'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { SessionProvider } from "next-auth/react"
import "animate.css";

import localFont from 'next/font/local'

// Font files can be colocated inside of `app`


const Arabic = localFont({
  src: '../public/fonts/ElMessiri-Regular.ttf',
  variable: '--arabic-font'
})

const inter = Inter({ subsets: ['latin'], variable: '--english-font' })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${Arabic.variable} `}>
        <SessionProvider>
           {children}
           <Toaster />
        </SessionProvider>
      
      </body>

    </html>
  )
}
