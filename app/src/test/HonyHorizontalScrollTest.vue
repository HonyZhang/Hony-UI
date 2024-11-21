<template>
    <hony-horizontal-scroll :scrollFactor="2"
                            :showScrollIndicators="true"
                            :leftArrowIcon="'iconfont icon-custom-left'"
                            :rightArrowIcon="'iconfont icon-custom-right'"
                            :arrowIconSize="30"
                            :arrowIconColor="'red'"
                            :showScrollbar="false">
        <div style="width: 300px; height: 100px; background-color: lightblue;">Item 1</div>
        <div style="width: 300px; height: 100px; background-color: lightcoral;">Item 2</div>
        <div style="width: 300px; height: 100px; background-color: lightgreen;">Item 3</div>
        <div style="width: 300px; height: 100px; background-color: lightpink;">Item 4</div>
        <div style="width: 300px; height: 100px; background-color: lightyellow;">Item 5</div>
        <div style="width: 300px; height: 100px; background-color: lightgray;">Item 6</div>
        <div style="width: 300px; height: 100px; background-color: lightblue;">Item 7</div>
        <div style="width: 300px; height: 100px; background-color: lightcoral;">Item 8</div>
        <div style="width: 300px; height: 100px; background-color: lightgreen;">Item 9</div>
        <div style="width: 300px; height: 100px; background-color: lightpink;">Item 10</div>
    </hony-horizontal-scroll>
</template>

<script setup lang="ts">
import {HonyHorizontalScroll} from 'hony-ui';
import "../../../packages/styles/fonts/iconfont.css"

defineOptions({name: 'HonyHorizontalScrollTest'})
</script>