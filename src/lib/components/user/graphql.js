export function viewById(id) {
    const viewById = {
        operationName: 'viewById',
      query: `query viewById($id: ID!) {
          viewById(id: $id) {
            id
            full_name
            picture
            email
            role
            handphone
            status
            rt
            rw
            district
            sub_district
            address
            type
            organization
            register_date
            profile_img
          }
        }`,
      variables: {
        id: id
      }
    }
    return viewById
}

export function viewAllTransaction(handphone, merchantOrderId) {
    const viewAllTransaction = {
        operationName: 'viewAllTransaction',
      query: `query viewAllTransaction($handphone: String,$merchantOrderId:String) {
  viewAllTransaction(handphone: $handphone, merchantOrderId: $merchantOrderId, limit: 100, page: 1) {
    transactions {
      handphone
      products {
        _id
        item
        name
        price
        quantity
      }
      merchantOrderId
      vaNumber
      qrString
      paymentMethod
      total
      statusCode
      createdAt
    }
  }
}`,
      variables: {
        handphone: handphone,
        merchantOrderId:merchantOrderId,
      }
    }
    return viewAllTransaction
}

export function getVoucher(handphone, type) {
    const getVoucher = {
        operationName: 'getVoucher',
      query: `query getVoucher($handphone: String) {
  getVoucher(handphone: $handphone, name: "", type: "", limit: 10, page: 1) {
    
    vouchers {
      voucher_num
      password
      code
      status
      item {
        name
      }
      createdAt
    }
  }
}`,
      variables: {
        handphone: handphone
      }
    }
    return getVoucher
}

export function getMessage(handphone, type) {
    const getMessage = {
        operationName: 'getMessage',
      query: `query getMessage($handphone: String) {
  getMessage(
    handphone: $handphone
    full_name: ""
    type: ""
    limit: 100
    page: 1
  ) {
    messages {
      user {
        full_name
        handphone
      }
      number
      full_name
      handphone
      address
      transaction {
        merchantOrderId
      }
      voucher {
        voucher_num
      }
      content
      status
      createdAt
    }
    total_pages
  }
}`,
      variables: {
        handphone: handphone
      }
    }
    return getMessage
}


// export function viewAllTransaction(handphone) {
//     const getMessage = {
//         operationName: 'viewAllTransaction',
//       query: `query viewAllTransaction($merchantOrderId: String) {
//   viewAllTransaction(handphone: $handphone, type: "", limit: 2, page: 1) {
//     transactions {
//       merchantOrderId
//       vaNumber
//       qrString
//       paymentMethod
//       total
//     }
//   }
// }`,
//       variables: {
//         handphone: handphone
//       }
//     }
//     return viewAllTransaction
// }

