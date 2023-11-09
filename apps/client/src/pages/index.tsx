import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button, Signup } from 'ui';
import Landing from './landing';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      hello world
      <Button/>
      <Signup/>
      <Landing/>
    </div>
  )
}
