
import dynamic from 'next/dynamic'
import Footer from '@/components/footer'

const Map = dynamic(() => import('../components/map'),{ssr:false})



export default function Home() {

  const style = { map_style:'w-full h-32' }

  return (
    <>
      
      <header className="font-extrabold text-3xl text-center py-32">

        OSM integration

      </header>

      <section className="w-10/12 mx-auto">

        <Map/>

      </section>

      <Footer/>


    </>
  )
}
