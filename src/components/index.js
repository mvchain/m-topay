import confirmBox from './Confirm/confirm.js'
// 这里是重点
export default {
    install(Vue) {
        Vue.prototype.$confirm = confirmBox;
    },
};
