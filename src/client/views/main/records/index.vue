<template>
    <div>
        <p v-if="ABRecords.length === 0" class="text-center">还没有任何记录</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            ABRecords: [],
            hasMore: false,
        }
    },
    created(){
        this.getUserRecords();
    },
    methods: {
        getUserRecords(){
            const gpl = `{
                ABRecords(pageSize:10 page:1) {
                    hasMore
                    records {
                    category
                    content
                    cost
                    moodgrade
                    }
                }
            }`
            fetch('/graphql', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                },
                body: JSON.stringify({query: gpl})
            })
            .then(r => r.json())
            .then(({ data }) => {
                console.log('data returned:', data)
                this.ABRecords = data.ABRecords.records;
                this.hasMore = data.ABRecords.hasMore;
            });
      }
    }
}
</script>
