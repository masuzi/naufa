import { toast } from '@zerodevx/svelte-toast'

export const success = m => toast.push(m, {
  theme: {
    '--toastBackground': '#BBF7D0',
    '--toastColor': '#16A34A',
    '--toastBarBackground': '#166534'
  }
})

export const warningeee = m => toast.push(m, {
  theme: {
    '--toastBackground': '#BBF7D0',
    '--toastColor': '#16A34A',
    '--toastBarBackground': '#166534'
  }
})