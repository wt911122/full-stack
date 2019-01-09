<template>
    <v-ons-page>
        <header-bar title="打个分吧"/>
        <v-ons-list>
            <v-ons-list-item>
               <div class="center">
                    <v-ons-input placeholder="评个分吧！" float
                        v-model="moodgrade"
                    >
                    </v-ons-input>
                </div>
            </v-ons-list-item>
        </v-ons-list>
        <v-ons-button modifier="large" style="margin: 6px 0" @click="finish">完成！</v-ons-button>
    </v-ons-page>
</template>
<script>
import header from '../../components/header.vue';
import form from './form';
import gql from 'graphql-tag';

export default {
    components: {
      'header-bar': header
    },
    data(){
        return {
            moodgrade: '',
        }
    },
    methods: {
        finish(){
            form.moodgrade = +this.moodgrade;
            console.log(form)
            this.$apollo.mutate({
                mutation: gql`
                    mutation (
                        $category: Int!,
                        $content: String!,
                        $cost:Float!,
                        $moodgrade: Float!
                    ) {
                        insertOneRecord(
                            category: $category,
                            content: $content,
                            cost: $cost,
                            moodgrade: $moodgrade,
                        )
                    }`,
                variables: form,
            }).then(() => {
                this.$router.push({ name: this.$route.matched[this.$route.matched.length - 2].name });
            })
            // graphqlRq(`mutation {
            //     insertOneRecord(
            //         category: "${form.category}",
            //         content: "${form.content}" ,
            //         cost: ${form.cost} ,
            //         moodgrade: ${form.moodgrade} ,
            //     )}`).then(() => {
            //         this.$router.push({ name: this.$route.matched[this.$route.matched.length - 2].name });
            //     })
        }
    }
}
</script>
