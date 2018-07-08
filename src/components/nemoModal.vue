<template>
    <div v-show="nemoWrapFlag"  v-on:click="$emit('countAddFuc')">
        <div class='nemo-wrap'>

        </div>
        <h1 class='nemo-content'>
            {{msg}}-{{count}}
        </h1>
    </div>
</template>
<script>
export default {
    name: 'nemoModalvue',
    props: {
        count: {
            type: Number,
            default: 0
        }
    },
    data:()=> {
        return {
            msg: "hello map",
            nemoWrapFlag: true,
        };
    },
    computed: {

    },
    methods: {
        nemoHiddenWrap(){
            // this.nemoWrapFlag = false;
            // this.count++;
        }
    }
};
</script>
<style>
.nemo-wrap{
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0.8;

}
.nemo-content{
    position: absolute;
    z-index: 101;
    top: 50%;
    left: 50%;
    color: #ffffff;
    text-align: center;
    font-size: 28px;
    transform: translate(-50%,-50%);
}
</style>
