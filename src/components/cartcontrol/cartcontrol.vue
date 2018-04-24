<template>
   <div class="cartcontrol">
       <transition name="show">
            <div class="cart-decrease icon-remove_circle_outline" v-show="food.count>0" @click.stop.prevent="decreaseCart($event)"></div>
       </transition>
       
       <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
       <div class="cart-add icon-add_circle" @click.stop.prevent="addCart($event)"></div>
   </div>
</template>
   
<script>
import Vue from 'vue'
   export default {
       props:{
           food:{
               type:Object
           }
       },
       data() {
           return {
           }
       },
       created() {
        //    console.log(this.food)
       },
       methods: {
           addCart(event){
               if(!event._constructed){
                   return
               }
               if(!this.food.count){
                Vue.set(this.food,'count',1)
               }else{
                   console.log('hhfds')
                   this.food.count ++
               }
            //    this.$emit('cartAdd',event.target)
           },
           decreaseCart(event){
               if(!event._constructed){
                   return
               }
               if(!this.food.count){
                   this.food.count = 0
                Vue.set(this.food,'count',1)
               }else{
                   this.food.count --
               }
           }
       }
   }
</script>
   
<style lang='stylus' scoped>
   .cartcontrol
        font-size 0
        .show-enter-active, .show-leave-active 
            display inline-block
            transition: all 0.4s linear;
            transform translate3d(0,0,0)
            transform rotate(0)
        .show-enter, .show-leave-to
            opacity: 0;
            transform translate3d(24px,0,0)
            transform rotate(180deg)
        .cart-decrease
            display inline-block
            transition: all 0.4s linear;
            padding 6px
            font-size 24px
            line-height 24px
            color rgb(0,160,220)
        .cart-count
            display inline-block
            vertical-align top
            width 12px
            padding-top 6px
            line-height 24px
            text-align center
            font-size 10px
            color rgb(147,153,159)
        .cart-add
            display inline-block
            padding 6px
            font-size 24px
            line-height 24px
            color rgb(0,160,220)
</style>