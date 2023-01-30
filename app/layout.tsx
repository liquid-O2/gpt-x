import localfont from '@next/font/local'
import '../styles/globals.css'

const NeueBit = localfont({
  src: [
    {
      path: '../fonts/PPNeueBit-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-NeueBit',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={NeueBit.variable}>
      <head />
      <body className='font-bold bg-background text-white text-2xl'>{children}</body>
    </html>
  )
}
