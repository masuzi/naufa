import { toast } from '@zerodevx/svelte-toast'

export const success = m => toast.push(m, {
  theme: {
    '--toastBackground': 'green',
    '--toastColor': 'white',
    '--toastBarBackground': 'olive'
  }
})

export const warningToast = m => toast.push(m, { theme: {
    '--toastBackground': '#EB4E8F',
    '--toastColor': 'white',
    '--toastBarBackground': 'white'
}
})
  
export const successToast = m => toast.push(m, { theme: {
    '--toastBackground': '#16A34A',
    '--toastColor': 'white',
    '--toastBarBackground': 'white'
  } })

// export const failure = m => toast.push(m, { theme: { ... } })