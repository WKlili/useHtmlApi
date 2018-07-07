<template>
<div id='app'>
 <h1>
    {{msg}}
  </h1>
</div>
</template>
<script>
export default {
    data() {
        return {
            msg: "hello"
        };
    }
};
</script>
<style>
h1 {
    color: red;
}
</style>
