export default class WaitFor {

    condition: Function;
    interval = 10;
    resolve: Function = ()=>{};
    callback: Function = async ()=>{};

    /**
     * @description 检测方法，直到符合条件
     * @author Chorin <xiaolinxuan@foxmail.com>
     * @date 2020-06-26
     * @memberof WaitFor
     */
    private async wait(){
      if(this.condition()){
        await this.callback();
        this.resolve();
      }else{
        setTimeout(()=>{
          this.wait();
        }, this.interval);
      }
    }

    async then(cb: Function): Promise<any>{
      this.callback = cb;
      return new Promise((resolve)=>{
          this.resolve = resolve;
      });
    }

    /**
     * Creates an instance of WaitFor.
     * @author Chorin <xiaolinxuan@foxmail.com>
     * @date 2020-06-26
     * @param {Function} condition
     * @param {number} [interval=10]
     * @memberof WaitFor
     */
    constructor(condition: Function, interval: number = 10){
      this.condition = condition;
      this.interval = interval;
      ///让then先执行完
      setTimeout(()=>{
        this.wait();
      }, 0);
    }
}