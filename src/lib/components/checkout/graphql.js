export function createTransaction(handphone,full_name,products, paymentMethod) {
  const createTransaction = {
    operationName: 'createTransaction',
    query: `mutation createTransaction ($handphone:String,$full_name:String,$products:[ProductCartInput],$paymentMethod:String){
  createTransaction(transactionInput: {handphone:$handphone,full_name:$full_name,products:$products,paymentMethod:$paymentMethod}) {
    products{
      price
    }
    qrString
    merchantOrderId
    vaNumber
    paymentMethod
    handphone
    total
  }
}`,
    variables: {
      handphone: handphone,
      full_name: full_name,
      products: products,
      paymentMethod: paymentMethod,
    }
  }
  return createTransaction
}

export function getPaymentMethode() {
  const paymentMethod = {
    operationName: 'getPaymentMethode',
    query: `
    query getPaymentMethode {
      getPaymentMethode {
    error
    responseCode
    responseMessage
    paymentFee {
      paymentMethod
      paymentImage
      totalFee
    }
  }
}`
  }
  return paymentMethode
}

