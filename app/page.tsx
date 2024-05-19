import Image from 'next/image'
import { Button } from "@/components/ui/button"


export default function Home() {
  return (<div className='text-3xl font-medium text-sky-800'>
    Hello World!
    <Button variant="outline">Button</Button>
  </div>)
}
