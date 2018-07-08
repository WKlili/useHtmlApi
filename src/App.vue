<template>
    <div>
        <nemoModalvue v-on:countAddFuc="countAdd" :count="propCount"></nemoModalvue>
    </div>
</template>
<script>
import Vue from 'vue';
import nemoModalvue from './components/nemoModal.vue';

export default {
    components: {
        nemoModalvue
    },
   data() {
    return {
            propCount: 1,
        }
    },
    methods:{
        countAdd: function(){
            console.log(1);
            this.propCount++
        }
    }
}
</script>
<style>
</style>
