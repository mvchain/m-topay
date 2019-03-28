export function orderStatusFliter(v) {

    switch (v) {
        case 0:
            return '等待付款';
        case 1:
            return '已支付';
        case 2:
            return '已完成';
        case 4:
            return '已取消';
        default:
            return '失败';
    }
}
