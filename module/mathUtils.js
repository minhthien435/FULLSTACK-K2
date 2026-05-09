export  const PI = 3.14;
export function add(a,b){
    return a+b;
}

export const logError=(msg) => console.log(msg);
export default function logInfo(msg){
    console.log(msg);
}
// file sensor.js
export const getTemp = () => 30; // Nhiệt độ
export const getHumi = () => 70; // Độ ẩm
export const getHeartRate = () => 80; // Nhịp tim