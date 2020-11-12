
export const determineDifficulty = (props = 'easy') => {
    let pairNums = props === 'easy' ? 13 : props === 'medium' ? 19 : 26 || 13
    let cardHeight = props === 'easy' ? '30%' : props === 'medium' ? '24%' : '19%' 
    let cardWidth = props === 'easy' ? '12%' : props === 'medium' ? '10.6%' : '9.5%' 
    let countDownTime = props === 'easy' ? 90000 : props === 'medium' ? 120000 : 210000 
    return {pairNums, cardHeight, cardWidth, countDownTime}
}

export const determinImageGalary = (pairNums) => {
    let imageSelection = pairNums === 13 ? 'easy' : pairNums === 19 ? 'medium' : 'hard' || 'easy'
    return imageSelection
}

export const determinRandomLength = (mode = 'easy') => {
    let randomLength = mode === 'easy' ? 11 : mode === 'medium' ? 22 : 32 || 11
    return randomLength
}