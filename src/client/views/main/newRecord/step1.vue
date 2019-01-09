<template>
    <v-ons-page>
        <header-bar title="选择类型"/>
        <v-ons-list>
            <v-ons-list-item v-for="item in Categories" :key="item.id" @click="toStep2(item)">
                <div class="left">
                    <img class="list-item__thumbnail" :src="require('@/assets/kitty.jpeg')">
                </div>
                <div class="center">
                    <span class="list-item__title"> {{ item.name }}</span><span class="list-item__subtitle">{{item.describe}}</span>
                </div>
            </v-ons-list-item>
        </v-ons-list>
    </v-ons-page>
</template>
<script>
import header from '../../components/header.vue';
import form from './form';
import gql from 'graphql-tag';
export default {
    apollo: {
        Categories: gql`{
            Categories {
                id
                name
                describe
            }}`
    },
    components: {
      'header-bar': header
    },
    data(){
        return {
            Categories: [],
        }
    },
    methods: {
        toStep2(item){
            form.category = +item.id;
            this.$router.push({name: 'step2'});
        }
    }
}
</script>
