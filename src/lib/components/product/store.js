import { writable, derived } from 'svelte/store'
import { getProduct } from './graphql'

const store = writable([], () => {
  getProducts()
  return () => {}
})
const monthly = writable()
const url = import.meta.env.VITE_GRAPHQL_URL,
  name = '',
  type = '',
  limit = 200,
  page = 1,
  options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(getProduct(name, type, limit, page))
  }

async function getProducts() {
  const response = await fetch(url, options),
    res = await response.json(),
    products = await res.data.getProduct.products,
    monthly = products.filter(product => product.type === 'Bulanan')
  // if (products) {
  store.set(products)
  monthly.set(products)
  // }
}

// flatten products
// function flattenProducts(data) {
//   return data.map(item => {
//     // let image = item.image.url
//     // let image = `${url}${item.image.url}`;
//     return { ...item }
//   })
// }
// export default store
export { store, monthly }
// import { writable } from 'svelte-local-storage-store'
// export const produtcs_store = writable('produtcs_store', [])
