<template>
    <basic-vue-chat :initial-feed="feed" :title="'Satış Danışmanı'"></basic-vue-chat>
</template>

<script>
    import BasicVueChat from 'basic-vue-chat'
    export default {
        components: {
            BasicVueChat
        },
        name: "ChatWindow",

        data(){
            return {
                feed : [
                    {
                        id: 1,
                        author: 'Aslı',
                        contents: 'Merhaba! Size nasıl yardımcı olabilirim?',
                        date: new Date().getHours().toString() + ':' + new Date().getMinutes().toString() + ':04'
                    },
                ]
            }
        }
    }
</script>

<style scoped>


</style>