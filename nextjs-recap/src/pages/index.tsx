import Image from 'next/image'
import { Geist, Geist_Mono } from 'next/font/google'
import Button from '@/components/Button'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const Home = () => {
  const handleClick = () => {
    alert('Hello, Next.js!')
  }

  return (
    <div className='container'>
      <Button label='Click me' onClick={handleClick} />
    </div>
  )
}

export default Home
