import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Guvnor Club - Drinks, Food & Shisha Menu",
  description: "Premium drinks, exceptional service, and premium shisha at Guvnor Club, Uganda. Whatever Your Mood, We've Got The Colour!",
  icons: {
    icon: "/logo.png",
  },
  keywords: ["Guvnor Club", "Kampala nightclub", "drinks menu", "shisha", "cocktails", "Uganda nightlife", "hookah", "premium shisha"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}