export const useDelay = (delay: number) => {
    const start = new Date().getTime()
    let end = start
    while (end < start + delay) {
        end = new Date().getTime()
    }
}
