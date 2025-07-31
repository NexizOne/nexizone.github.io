<script setup lang="ts">
</script>

<template>
    <div class="h-100 overflow-hidden position-relative ">
        <div class="h-100 hpr position-absolute top-0 start-0  bottom-0 end-0">
            <div class="scene">
                <div class="wrap">
                    <div class="wall wall-right"></div>
                    <div class="wall wall-left"></div>
                    <div class="wall wall-top"></div>
                    <div class="wall wall-bottom"></div>
                    <div class="wall wall-back"></div>
                </div>
                <div class="wrap">
                    <div class="wall wall-right"></div>
                    <div class="wall wall-left"></div>
                    <div class="wall wall-top"></div>
                    <div class="wall wall-bottom"></div>
                    <div class="wall wall-back"></div>
                </div>
            </div>
        </div>
        <div class="position-absolute top-0 start-0 bottom-0 end-0">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/../../../assets/scss/hyperspace.scss';
</style>
