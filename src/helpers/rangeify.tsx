const rangeify = (
    oldValue: number,
    oldMin: number,
    oldMax: number,
    newMin: number,
    newMax: number
) => {
    const oldRange = oldMax - oldMin
    const newRange = newMax - newMin

    const newValue = ((oldValue - oldMin) * newRange) / oldRange + newMin
    return newValue
}
export default rangeify
