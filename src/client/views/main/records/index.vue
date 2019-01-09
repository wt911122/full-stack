<template>
    <div>
        <p v-if="ABRecords.length === 0" class="text-center">还没有任何记录</p>
        <v-ons-list>
            <template v-for="r in ABRecords.records">
                <div :key="r.id">
                    <v-ons-list-header v-if="r.anotherDay">{{r.time | dateFormat}}</v-ons-list-header>
                    <v-ons-list-item>
                        <div class="left">
                            <img class="list-item__thumbnail" :src="require(`@/assets/catering_64.png`)">
                        </div>
                        <div class="center">
                            <span class="list-item__title">{{r.content}}</span>
                            <span class="list-item__subtitle">￥{{r.cost}}</span>
                        </div>
                        <div class="right">
                            {{r.moodgrade}}
                        </div>
                    </v-ons-list-item>
                </div>
            </template>
        </v-ons-list>
    </div>
</template>
<script>
import { dateFormat } from '@/util/filters';
import gql from 'graphql-tag';
export default {
    apollo: {
        ABRecords: {
            // GraphQL Query
            query: gql`query
                ABRecords($pageSize: Int!, $page: Int!) {
                    ABRecords(pageSize: $pageSize, page: $page) {
                        hasMore
                        records {
                            id
                            category {
                                id
                                name
                                describe
                            }
                            content
                            cost
                            moodgrade
                            time
                        }
                    }
                }`,
            // Reactive variables
            variables() {
                return {
                    pageSize: this.pageSize,
                    page: this.page,
                }
            },
        },
    },
    filters: {
        dateFormat
    },
    data(){
        return {
            ABRecords: {
                records: [],
                hasMore: false,
            },
            pageSize: 20,
            page: 1,
        }
    },
}
</script>
