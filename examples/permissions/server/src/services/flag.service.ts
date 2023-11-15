export const hasFlag = (flag: number, flagToCheck: number) => {
    return (flag & flagToCheck) === flagToCheck
}