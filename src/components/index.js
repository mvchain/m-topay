import confirmBox from './Confirm/confirm.js'
import messageBox from './Message/message.js'
// 这里是重点
export default {
    install(Vue) {
        Vue.prototype.$confirm = confirmBox;
        Vue.prototype.$message = messageBox;
    },
};
