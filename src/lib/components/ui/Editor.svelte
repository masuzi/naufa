<script>
  import { createEditor } from 'svelte-editorjs'

  const { editor, data, isReady } = createEditor()
</script>

<div use:editor />
