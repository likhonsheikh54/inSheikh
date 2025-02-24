import type React from "react"
import "./globals.css"
import { Inter, Noto_Sans_Kayah_Li as Li_Ador_Noirrit } from "next/font/google"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] })
const liAdorNoirrit = Li_Ador_Noirrit({ subsets: ["bengali"], weight: ["400", "700"] })

export const metadata = {
  title: "inSheikh - উন্নত উইন্ডোজ নিরাপত্তা টুল",
  description: "উন্নত সিস্টেম শক্তিশালীকরণ এবং সুরক্ষা বৈশিষ্ট্যসহ ব্যাপক উইন্ডোজ নিরাপত্তা কনফিগারেশন টুল",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body className={`${inter.className} ${liAdorNoirrit.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}



import './globals.css'