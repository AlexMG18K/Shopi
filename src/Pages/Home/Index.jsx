import { useState, useEffect } from "react"
import LayOut from "../../Components/Layout"
import Card from "../../Components/Card/Index"
import ProductDetail from "../../Components/ProductDetail"

function Home() {
const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then (response => response.json())
    .then(data => setItems(data))
}, [])

 return (
    <>
    <LayOut className='bg-orange-400	'>
    Home
    <div className="grid gap-2 grid-cols-4 w-full max-w-screen-lg">
    {
      items?.map((item) => (
        <Card key={item.id} alt={item}/>
      ))
    }
    </div>
    <ProductDetail/>
      </LayOut>

    </>
  )
}

export default Home