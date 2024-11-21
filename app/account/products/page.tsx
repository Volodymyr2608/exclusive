import AccountLayout from '@/app/_components/layouts/Account'
import React from 'react'
import { getAllProducts } from './actions'
import MyProducts from '@/app/_components/modules/Account/Product/MyProducts'
import { Button } from '@/app/_components/ui/button'
import { Plus } from 'lucide-react'
import CreateProductForm from '@/app/_components/modules/Account/Product/CreateProductForm'

const ProductsPage = async () => {
  const { data } = await getAllProducts();

  return (
    <AccountLayout pageType='myProducts'>
      <div className='col-span-3 flex flex-col gap-y-10'>
        {/* <div className='py-2 px-4 flex justify-end'>
          <Button><Plus/> Create</Button>
        </div> */}
        <CreateProductForm />

        {data ? <MyProducts products={data} /> : null}
        
      </div>

    </AccountLayout>
  )
}

export default ProductsPage