<template>
  <div>
    <input type="file" accept=".jpeg,.jpg,image/jpeg" @change="uploadFile" />
  </div>
</template>
<script>
import { unWrap } from '~/utils/fetchUtils'

export default {
  methods: {
    async uploadFile(e) {
      const file = e.target.files[0]
      if (!file) {
        return
      }
      const filename = file.name.split('.').slice(0, -1).join('.') + Date.now()
      const options = {
        timestamp: Date.now(),
        public_id: filename,
      }

      //We do it here because admin web is a SPA
      //Call cloudinary MDW to get the signed url
      const response = await unWrap(
        await fetch('/api/cloudinary/signature', {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify(options),
        })
      )

      const signature = response.json.signature

      const readData = (fileObj) =>
        new Promise((resolve) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result)
          reader.readAsDataURL(fileObj)
        })
      const data = await readData(file)

      const asset = await this.$cloudinary.upload(data, {
        ...options,
        signature,
        apiKey: this.$config.cloudinary.apiKey,
      })

      this.$emit('file-uploaded', asset.public_id)
    },
  },
}
</script>
