<script lang="ts">
  // import QrCodeDisplay from '$lib/components/layout/QrCodeDisplay.svelte';
  // import Validator from 'validator';
  import QRCode from 'qrcode'

  /**
   * The text inserted into the textarea by the user.
   *
   * @type {string}
   */
  let text = ''

  /**
   * The generated encoded data url.
   *
   * @type {string}
   */
  let encodedData = ''

  /**
   * Store for error messages.
   *
   * @type {string}
   */
  let error = ''

  /**
   * Flag to track a loading state.
   *
   * @type {boolean}
   */
  let loading = false

  /**
   * Copy of the entered test used as a preview/review for the user.
   */
  let textPreview: string

  /**
   * Reactive flag to check if the QRCode  generation was successful.
   */
  $: generateOk = encodedData && encodedData.length > 0 && text.length === 0

  /**
   * Reset all textual data.
   */
  function resetInputs(): void {
    text = ''
    encodedData = ''
    error = ''
  }

  function sanitizeInput(text: string): string {
    const sanitized = Validator.escape(text)
    return Validator.trim(sanitized)
  }

  async function generateQrCode(text: string): Promise<void> {
    loading = true
    try {
      const txt = JSON.stringify(text)
      // resetInputs();
      encodedData = await QRCode.toDataURL(txt)
      if (encodedData) {
        // TODO: there has to be a better way to track loading state
        textPreview = txt
        loading = false
      }
    } catch (err) {
      loading = false
      error = err.message
    }
  }
</script>

<!-- <PageHeader>Text</PageHeader> -->

<div class="flex flex-col">
  {#if generateOk}
    <!-- <QrCodeDisplay> -->
    <img class="h-64 w-64" alt="QR Code" src={encodedData} />
    <!-- <code>
				{textPreview}
			</code> -->
    <!-- </QrCodeDisplay> -->
  {/if}
</div>
