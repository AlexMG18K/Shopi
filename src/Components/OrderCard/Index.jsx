import { XMarkIcon } from '@heroicons/react/24/solid'


const OrderCard = props => {
    const {id, title, imageURL, price, handleDelete} = props

    let renderXmarkIcon
    if(handleDelete) {
        renderXmarkIcon =<XMarkIcon  
        className='h-6 w-6 text-black cursor-pointer'
        onClick={() => handleDelete(id)} 
        />
    }

    return(
        <div className="flex justify-between items-center gap-2">
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageURL} alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex items-center gap-2 overflow' >
                <p className='text-lg font-medium'>${price}</p>
                {renderXmarkIcon}
            </div>
        </div>
    )
}

export default OrderCard