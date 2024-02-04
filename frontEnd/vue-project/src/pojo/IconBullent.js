export default class IconBullet {
    name = "";
    status = "waiting"
    src;
    top = 0;
    speed = 3;
    // 构造函数
    constructor() {
        let index = Math.floor(Math.random() * 11) + 1;
        this.top =Math.random() *200;
        this.name = "icon" + index;
        setTimeout(() => {
            this.status = "done";
        }, 5000)
    }
}