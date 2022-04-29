export function getProduct(name, type, limit, page) {
  const getProduct = {
    operationName: 'getProduct',
    query: `query getProduct($name: String, $type: String, $limit: Int, $page: Int) {
  getProduct(name: $name, type: $type, limit: $limit, page: $page) {
    products {
      _id
      id
      name
      type
      price
      promo_price
      bandwith
      fup
      benefit {
        benefit
      }
      description
      icon
      img
      pinned
      start_promo
      end_promo
      disclaim
      created_by
      update_by
    }
    count
    search_count
    total_pages
  }
}`,
    variables: {
      name: name,
      type: type,
      limit: limit,
      page: page
    }
  }
  return getProduct
}