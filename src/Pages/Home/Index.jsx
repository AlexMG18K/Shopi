import { useContext } from "react"
import { ShoppingCartContext } from "../../Context/Index"
import LayOut from "../../Components/Layout"
import Card from "../../Components/Card/Index"
import ProductDetail from "../../Components/ProductDetail"

function Home() {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {            
      if(context.filteredItems?.length > 0) {
        return(
          context.filteredItems?.map((item) => (
            <Card key={item.id} alt={item}/>
          )))
      }else {
        return(
          <div>There aren't any coincidences</div>
        )
      }
    }
  

 return (
    <>
    <LayOut className='bg-orange-400	'>
    <div className="flex items-center w-80 justify-center py-5">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
    </div>
    <input 
    className='rounded-lg border-black w-80 p-4 mb-4 focus:outline-none border'
    onChange= {(event) => context.setSearchByTitle(event.target.value) } 
    type="text" 
    placeholder='Search product'/>
    <div className="grid gap-2 grid-cols-4 w-full max-w-screen-lg">
    {renderView()}
    </div>
    <ProductDetail/>
      </LayOut>

    </>
  )
}

export default Home