<template>
    <v-ons-page>
        <header-bar title="新增记录"/>
        <v-ons-list>
            <v-ons-list-item>类型：</v-ons-list-item>
            <v-ons-list-item>
                <v-ons-select style="width: 100%"
                    v-model="category"
                >
                    <option v-for="item in items" :key="item.value" :value="item.value">
                        {{ item.text }}
                    </option>
                </v-ons-select>
             </v-ons-list-item>
            <v-ons-list-item>内容：</v-ons-list-item>
            <v-ons-list-item>
                <div class="center">
                    <v-ons-input
                        v-model="content"
                        placeholder="Username"
                        type="text"
                        modifier="large"
                        float
                        required
                    >
                    </v-ons-input>
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
            category: undefined,
            items: [
                {
                    value: 'catering',
                    text: '餐饮',
                },
                {
                    value: 'costume',
                    text: '服饰',
                },
                {
                    value: 'service',
                    text: '服务',
                },
            ],
            content: ''
        }
    }
}
</script>
