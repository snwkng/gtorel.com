<script>
export default {
  props: {
    from: {
      type: String,
      default: () => "Орёл",
    },
  },
  setup() {},
};
</script>
<template>
  <input
    type="text"
    disabled
    class="form-input px-4 py-3 rounded-full"
    :value="from"
  />
</template>
