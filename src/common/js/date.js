export function changeTime(Time) {
    var time = new Date(Time);
    var year = time.getFullYear(),
　　month = time.getMonth() + 1,
　　date = time.getDate(),
　　hour = time.getHours(),
　　minute = time.getMinutes(),
　　second = time.getSeconds();
　　return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
};