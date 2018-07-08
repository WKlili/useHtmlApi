<template>
    <div>
        <nemo-modalvue
        v-bind:nemoInput="innerInput"
        v-on:input="innerInput = $event"

        v-on:countAddFuc="countAdd" 
        :count="propCount">
        插槽测试
        </nemo-modalvue>
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
            innerInput: ''
        }
    },
    methods:{
        countAdd: function($event){
            console.log($event);
            console.log(this.innerInput)
            this.propCount++
        }
    }
}
</script>
<style>
</style>
