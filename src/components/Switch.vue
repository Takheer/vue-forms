<template>
    <div>
        <div id="on" @click="switchValue(true)" :class="{'active': value}">On</div>
        <div id="off" @click="switchValue(false)" :class="{'active': !value}">Off</div>
    </div>
</template>

<script>
    export default {
        name: "Switch",
        props: {
            value: Boolean
        },
        methods: {
            switchValue(flag){
                this.$emit('input', flag)
            }
        }
    }
</script>

<style lang="scss" scoped>
    #on, #off {
        width: 40px;
        height: 20px;
        background-color: lightgray;
        padding: 2px;
        display: inline-block;
        margin: 10px -2px;
        box-sizing: content-box;
        cursor: pointer;
        text-align: center;
        transition: background-color .2s ease-in;
    }
    #on {
        &:hover, &:focus, &.active {
            background-color: lightgreen;
        }

    }
    #off {
        &:hover, &:focus, &.active {
            background-color: lightcoral;
        }

    }
</style>