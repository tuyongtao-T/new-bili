export function sleep(s) {
    let now = new Date().getTime();
    while (new Date().getTime() === (s + now)) {
        return ;
    }
}