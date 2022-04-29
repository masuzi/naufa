export function createMessageContact(full_name, email,handphone, address,content) {
  const createMessageContact = {
    operationName: 'createMessage',
    query: `mutation createMessage(
  $full_name: String
  $email: String
  $handphone: String
  $address: String
  $content: String
) {
  createMessage(
    messageInput: {
      full_name: $full_name
      email:$email
      handphone: $handphone
      address: $address
      content: $content
    }
  ) {
    number
    content
  }
}`,
    variables: {
      full_name: full_name,
      email:email,
      handphone: handphone,
      address: address,
      content: content,
    }
  }
  return createMessageContact
}
