date = new Date();
// console.log(date);
Date.prototype.formatDate = function(){
    return this.getFullYear() + '年' + this.getMonth()+1 + '月' + this.getDate() + '日';
}
console.log(date.formatDate());