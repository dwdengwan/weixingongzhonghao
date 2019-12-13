<template>
  <div class="login">
    <h1>This is an login page</h1>
    <upLoad :msg="'111'"></upLoad>
  </div>
</template>

<script>
import upLoad from '@/components/upload.vue'

export default {
  name: 'home',
  components: {
    upLoad
  }
}
</script>