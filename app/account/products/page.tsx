import AccountLayout from '@/app/_components/layouts/Account'
import { getInjection } from '@/di/container'
import React from 'react'
import { getAllProducts } from './actions'
import MyProducts from '@/app/_components/modules/Account/Product/MyProducts'

const ProductsPage = async () => {
  const { error, data } = await getAllProducts();

  return (
    <AccountLayout pageType='myProducts'>
      <div className='col-span-3'>

        {data ? <MyProducts products={data} /> : null}
        
      </div>

    </AccountLayout>
  )
}

export default ProductsPage