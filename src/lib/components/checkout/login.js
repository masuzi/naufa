import { create, test, skipWhen, enforce, warn, only } from 'vest'
import wait from 'wait'

const login_check_out = create((data = {}, currentField) => {
  only(currentField)

  test('handphone', 'Nomor Handphone wajib diisi!', () => {
    enforce(data.handphone).isNotBlank()
  })
  test('handphone', 'Nomor Handphone tidak valid!', () => {
    enforce(data.handphone).matches(
      /^(\+62|62)?[\s-]?0?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/
    )
  })

  test('password', 'Password wajib diisi!', () => {
    enforce(data.password).isNotBlank()
  })

})
export default login_check_out
