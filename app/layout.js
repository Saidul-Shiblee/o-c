import { Inter,Oleo_Script_Swash_Caps,Archivo_Black} from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import "animate.css";

import localFont from 'next/font/local'

// Font files can be colocated inside of `app`


const Arabic = localFont({
  src: '../public/fonts/ElMessiri-Regular.ttf',
  variable: '--arabic-font'
})

const inter = Inter({ subsets: ['latin'], variable: '--english-font' })
const style = Oleo_Script_Swash_Caps({ subsets: ['latin'],weight:['400'] ,variable: '--style' })
const brand = Archivo_Black({ subsets: ['latin'],weight:['400'] ,variable: '--brand' })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${Arabic.variable} ${style.variable}  ${brand.variable} `}>
           {children}
           <Toaster />
      </body>

    </html>
  )
}
