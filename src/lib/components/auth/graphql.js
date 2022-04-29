export function createUser(handphone, password,full_name,address) {
    const createUser = {
        operationName: 'createUser',
        query: `mutation createUser($handphone:String!, $password: String!,$full_name:String,$address:String) {
            createUser(userInput: { handphone:$handphone, password: $password,full_name:$full_name,address:$address }) {
                token
                user {
                    id
                    full_name
                    handphone
                }
            }
        }  
        `,
      variables: {
        handphone: handphone,
        password: password,
        full_name: full_name,
        address:address,
        }
    }
    return createUser
}

export function userLogin(email, handphone, password) {
    const userLogin = {
        operationName: 'userLogin',
        query: `mutation userLogin($email: String, $handphone:String!, $password: String!) {
  login(userInput: { email: $email, handphone:$handphone, password: $password }) {
    token
    user {
      id
      full_name
      handphone
    }
  }
}
        `,
        variables: {
            email: email,
            handphone: handphone,
            password: password
        }
    }
    return userLogin
}

export function requestOtp(handphone) {
  const requestOtp = {
    operationName: 'requestOtp',
    query: `mutation requestOtp($handphone: String!) {
  requestOtp(handphone: $handphone) {
    otp
    handphone
  }
}`,
    variables: {
      handphone: handphone
    }
  }
  return requestOtp
}

export function login(handphone,otp) {
  const login = {
    operationName: 'login',
    query: `mutation login($handphone:String!,$otp:String!){
  login(handphone: $handphone, otp: $otp) {
    token
    user {
      id
      full_name
      nik
      picture
      email
      handphone
      otp
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
  }
}`,
    variables: {
        handphone: handphone,
        otp:otp
    }
  }
  return login
}

export function loginPass(handphone,password) {
  const loginPass = {
    operationName: 'loginPass',
    query: `mutation loginPass($handphone: String!, $password: String!) {
  loginPass(
    loginPasswordInput: { password: $password, handphone: $handphone }
  ) {
    token
    user {
      id
      full_name
      nik
      picture
      email
      handphone
      otp
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
  }
}`,
    variables: {
        handphone: handphone,
        password:password
    }
  }
  return loginPass
}

