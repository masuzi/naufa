import { create, test, skipWhen, enforce, warn, only } from 'vest'
import wait from 'wait'

const login_check_out = create((data = {}, currentField) => {
  only(currentField)

test('full_name', 'Nama minimal 3 abjad! ', () => {
    enforce(data.full_name).longerThanOrEquals(3)
  })
  test('full_name', 'Nama harus abjad!', () => {
    enforce(data.full_name).matches(/^[a-zA-Z ]*$/)
  })

  test('handphone', 'Nomor Handphone wajib diisi!', () => {
    enforce(data.handphone).isNotBlank()
  })
  test('handphone', 'Nomor Handphone tidak valid!', () => {
    enforce(data.handphone).matches(
      /^(\+62|62)?[\s-]?0?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/
    )
  })
})
export default login_check_out
