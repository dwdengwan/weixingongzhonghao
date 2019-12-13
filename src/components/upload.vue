<template>
  <div class="upload">
    <h1>{{ msg }}</h1>
    <div>this is an upload vue</div>
  </div>
</template>

<script>
export default {
  name: 'upload',
  props: {
    msg: String
  }
}
</script>