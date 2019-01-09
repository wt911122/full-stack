<template>
    <v-ons-page>
        <header-bar title="输入内容及花销"/>
        <v-ons-list>
            <v-ons-list-item>
               <div class="center">
                    <textarea class="textarea"
                        placeholder="Type here"
                        style="width: 100%; height: 100px;"  v-model="content" ></textarea>
                </div>
            </v-ons-list-item>
            <v-ons-list-item>
                <div class="right">
                    <span>￥</span>
                    <v-ons-input placeholder="代价是什么！" float
                        v-model="cost"
                    ></v-ons-input>
                </div>
            </v-ons-list-item>
        </v-ons-list>
        <v-ons-button modifier="large" style="margin: 6px 0" @click="toNext">下一步</v-ons-button>
    </v-ons-page>
</template>
<script>
import header from '../../components/header.vue';
import form from './form';
export default {
    components: {
      'header-bar': header
    },
    data(){
        return {
            content: '',
            cost: 0,
        }
    },
    methods: {
        toNext(){
            form.content = this.content;
            form.cost = +this.cost;
            console.log(form);
            this.$router.push({name: 'step3'})
        }
    }
}
</script>
