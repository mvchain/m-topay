import Vue from 'vue';
import confirmVue from './confirm.vue';
const defaults = {
    show: true,
    message: '',
    cancelBtn: '',
    confirmBtn: '',
    onSuccess: null,
    cancelHandler: null

};

const confirmVueConstructor = Vue.extend(confirmVue);
confirmVueConstructor.prototype.close = function () {
    let vm = this;
    let promise = new Promise(function(resolve, reject) {
        if (vm.$el && vm.$el.parentNode) {
            vm.$el.parentNode.removeChild(vm.$el);
        }
        resolve()
        vm.$destroy();
        vm.show = false;
    })
    return promise
}


const confirmBox =(options = {}) => {
    options = Object.assign({}, defaults, options); // 将默认参数和形参整合
    let parent = document.body ;

    // 生成dom并传入参数
    let instance = new confirmVueConstructor({
        el: document.createElement('div'),
        data: options
    });

    // 将生成的html挂入dom
    parent.appendChild(instance.$el);

    // 挂入dom后显示
    Vue.nextTick(() => {
        instance.show = true;
    });

    return instance;
};

export default confirmBox;
