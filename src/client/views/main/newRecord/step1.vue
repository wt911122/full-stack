<template>
    <v-ons-page>
        <header-bar title="选择类型"/>
        <v-ons-list>
            <v-ons-list-item v-for="item in items" :key="item.value" @click="toStep2(item)">
                <div class="left">
                    <img class="list-item__thumbnail" :src="require('@/assets/kitty.jpeg')">
                </div>
                <div class="center">
                    <span class="list-item__title"> {{ item.text }}</span><span class="list-item__subtitle">{{item.desc}}</span>
                </div>
            </v-ons-list-item>
        </v-ons-list>
    </v-ons-page>
</template>
<script>
import header from '../../components/header.vue';
export default {
    components: {
      'header-bar': header
    },
    data(){
        return {
            items: [
                {
                    value: 'catering',
                    text: '餐饮',
                    desc: '吃的！'
                },
                {
                    value: 'costume',
                    text: '服饰',
                    desc: '穿的！'
                },
                {
                    value: 'service',
                    text: '服务',
                    desc: '你懂的！'
                },
            ],
        }
    },
    methods: {
        toStep2(item){
            this.$router.push({name: 'step2', query: { item: item.value }})
        }
    }
}
</script>
