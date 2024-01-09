<template>
    <component :is="name" v-bind="$props" />
</template>

<script>
import Loading from './Loading.vue'
import User from './User.vue'
import Mail from './Mail.vue'
import Send from './Send.vue'
import Like from './Like.vue'
import LikeSolid from './LikeSolid.vue'
import Chat from './Chat.vue'

export default {
    components: {
        Loading,
        User,
        Mail,
        Send,
        Like,
        LikeSolid,
        Chat
    },
    props: {
        name: {
            type: String,
            required: true
        }
    },
}
</script>