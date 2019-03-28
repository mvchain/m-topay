<template>
    <p>{{time}}</p>
</template>

<script>
    export default {
        name: 'count-down',
        data() {
            return {
                time: 'aaa',
                flag: false,
                timeFlag: 0,
                timer: null,
                count: 0
            }
        },
        mounted() {

            this.count = Math.floor(this.endTime / 1000);
            this.time = this.format(Math.floor(this.endTime / 1000) * 1000);
            this.format(Math.floor(this.endTime / 1000) * 1000);
            this.timeDown(Math.floor(this.endTime / 1000) * 1000)

        },
        props: {
            endTime: Number
        },
        methods: {
            timeDown() {
                this.timer = setInterval(() => {
                    this.count--;
                    if (this.count <= 0) {
                        clearInterval(this.timer);
                        this.time = '时间截止'
                        return;
                    }
                    this.format(this.count * 1000)
                }, 1000);

            },
            format(time) {
                let m = parseInt((time % (1000 * 60 * 60)) / (1000 * 60));
                let s = (time % (1000 * 60)) / 1000;
                this.time =  m+'分'+s+'秒'
            }
        },
        destoryed() {
            clearInterval(this.timer);
        }
    }

</script>

<style lang="scss">

</style>
