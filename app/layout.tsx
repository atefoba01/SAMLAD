// import type { Metadata } from 'next'
// import { Geist, Geist_Mono } from 'next/font/google'
// import { Analytics } from '@vercel/analytics/next'
// import './globals.css'
// import { hydrateRoot } from 'react-dom/client';

// const _geist = Geist({ subsets: ["latin"] });
// const _geistMono = Geist_Mono({ subsets: ["latin"] });

// // export const metadata: Metadata = {
// //   title: 'Samlad Fashion Home',
// //   description: 'Discover and create stunning color palettes for your ceremonies. Find the perfect colors for weddings, engagements, and celebrations.',
// //   generator: 'Atef.App',
// //   icons: {
// //     icon: [
// //       {
// //         url: '/icon-light-32x32.png',
// //         media: '(prefers-color-scheme: light)',
// //       },
// //       {
// //         url: '/icon-dark-32x32.png',
// //         media: '(prefers-color-scheme: dark)',
// //       },
// //       {
// //         url: '/icon.svg',
// //         type: 'image/svg+xml',
// //       },
// //     ],
// //     apple: '/apple-icon.png',
// //   },
// //   viewport: {
// //     width: 'device-width',
// //     initialScale: 1,
// //     maximumScale: 1,
// //   },
// // }
// // export const viewport = {
// //   width: "device-width",
// //   initialScale: 1,
// // }



// export const metadata = {
//   title: "My App",
//   description: "My app description",
// }

// export const viewport = {
//   width: "device-width",
//   initialScale: 1,
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en" className="bg-background">
//       <body className="font-sans antialiased bg-background text-foreground">
//         {children}
//         {process.env.NODE_ENV === 'production' && <Analytics />}
//       </body>
//     </html>
//   )
// }



import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "My App",
  description: "My app description",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}