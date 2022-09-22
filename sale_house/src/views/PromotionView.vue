<template>
<div>
<lightbox
  :images="images"
/>
</div>
</template>

<script>
export default {
  data: () => ({
    images: [
      {
        src: 'http://localhost:3000/assets/pm-1.png'
      },
      {
        src: 'http://localhost:3000/assets/pm-2.png'
      },
      {
        src: 'http://localhost:3000/assets/pm-3.png'
      },
      {
        src: 'http://localhost:3000/assets/pm-4.png'
      }
    ]
  })
}
</script>
