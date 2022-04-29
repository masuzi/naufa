
import { derived, writable } from 'svelte/store'
import { browser } from '$app/env'

export let showCart = writable(false)

const storedSession = JSON.parse(browser && localStorage.getItem('session')) || null
export let session = writable(browser && storedSession)
session.subscribe(val => browser && (localStorage.session = JSON.stringify(val)))

const storedcart = JSON.parse(browser && localStorage.getItem('cart')) || []
export const cart = writable(browser && storedcart)
cart.subscribe(val => browser && (localStorage.cart = JSON.stringify(val)))

export const total = derived(cart, $cart => {
  let total = Array.isArray($cart)
  ? $cart.reduce((acc, obj) => {
    return (acc + obj.price * obj.quantity);
  }, 0): 0;
  return parseFloat(total.toFixed(2));
});

// export let total = derived(cart, cart =>
//   cart.reduce((acc, obj) => acc + obj.price * obj.quantity, 0)
// )

export const total_item = derived(cart, $cart => {
  let total_item = Array.isArray($cart)
  ? $cart.reduce((acc, obj) => {
    return (acc  +  obj.quantity);
  }, 0): 0;
  return parseFloat(total_item.toFixed(2));
});
// export let total_item = derived(cart, cart =>
//   cart.reduce((acc, obj) => acc  +  obj.quantity, 0)
// )

export let userDetails = writable()

export function openCart() {
  // console.log('triggered open cart')
  // if (innerWidth < 640) {
    // goto('/cart')
  // } else {
    $showCart = true
  // }
}
// export let closeCart = () => {
//     $showCart = false
//   }
export let isRecurring = writable()
export let requrring = writable()
export let check_out_store = writable(true)
export let check_out_response= writable()
export let payment_methode = writable()
export const methodes = writable()
export let bank = writable()
export let agen = writable()
export let e_banking = writable()
export let m_banking = writable()
export let retail_select = writable()
export let dompet_select = writable()
export let qris_select = writable()
export let gotoCheckout=writable()
// export let total_item = writable()
