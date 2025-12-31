import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ClientWrapper } from "./client-wrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Guvnor - Menu",
  description: "Premium drinks & exceptional service at Guvnor Club, Uganda",
  icons: {
    icon: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  )
}