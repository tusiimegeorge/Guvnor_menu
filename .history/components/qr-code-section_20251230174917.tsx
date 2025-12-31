"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import QRCode from "react-qr-code"
import { useEffect, useState } from "react"

export function QRCodeSection() {
  const [menuUrl, setMenuUrl] = useState("")

  useEffect(() => {
    // Get the current URL once component mounts on client
    if (typeof window !== "undefined") {
      setMenuUrl(window.location.href)
    }
  }, [])

  const downloadQRCode = () => {
    const svg = document.getElementById("qr-code")
    if (!svg) return

    const svgData = new XMLSerializer().serializeToString(svg)
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    const img = new Image()

    img.onload = () => {
      canvas.width = img.width
      canvas.height = img.height
      ctx?.drawImage(img, 0, 0)
      const pngFile = canvas.toDataURL("image/png")

      const downloadLink = document.createElement("a")
      downloadLink.download = "menu-qr-code.png"
      downloadLink.href = pngFile
      downloadLink.click()
    }

    img.src = "data:image/svg+xml;base64," + btoa(svgData)
  }

  if (!menuUrl) {
    return null
  }

  return (
    <section className="border-y border-border bg-secondary/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight sm:text-4xl">Share Our Menu</h2>
          <p className="mb-8 text-muted-foreground text-balance">
            Scan this QR code to view our menu on your device or download it for printing
          </p>

          <Card className="mx-auto inline-block bg-white p-8">
            <QRCode id="qr-code" value={menuUrl} size={256} className="h-auto w-full max-w-xs" />
          </Card>

          <div className="mt-6">
            <Button onClick={downloadQRCode} size="lg" className="gap-2">
              <Download className="h-5 w-5" />
              Download QR Code
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">Place this QR code on your tables for easy menu access</p>
        </div>
      </div>
    </section>
  )
}
