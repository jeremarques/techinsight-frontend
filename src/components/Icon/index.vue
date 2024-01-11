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
import LogOut from './LogOut.vue'
import Profile from './Profile.vue'
import DocumentText from './Document.vue'
import QuestionMarkCircle from './QuestionMarkCircle.vue'
import Settings from './Settings.vue'
import Glass from './Glass.vue'
import Home from './Home.vue'
import PlusCircle from './PlusCircle.vue'
import ChatText from './ChatText.vue'
import Bell from './Bell.vue'
import ChevronDown from './ChevronDown.vue'

export default {
    components: {
        Loading,
        User,
        Mail,
        Send,
        Like,
        LikeSolid,
        Chat,
        LogOut,
        Profile,
        DocumentText,
        QuestionMarkCircle,
        Settings,
        Glass,
        Home,
        PlusCircle,
        ChatText,
        Bell,
        ChevronDown
    },
    props: {
        name: {
            type: String,
            required: true
        }
    },
}
</script>