const sortImgs = (array: any) => {
    return array.sort((a: any, b: any) => {
        const anum = parseInt(a.node.name.charAt(0) + a.node.name.charAt(1))
        const bnum = parseInt(b.node.name.charAt(0) + b.node.name.charAt(1))
        if (anum < bnum) {
            return -1
        }
        if (anum > bnum) {
            return 1
        }
        return 0
    })
}
export default sortImgs
