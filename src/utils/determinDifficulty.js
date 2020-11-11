
export const determineDifficulty = (props = 'easy') => {
    let pairNums = props === 'easy' ? 13 : props === 'medium' ? 19 : 26 || 13
    let cardHeight = props === 'easy' ? '30%' : props === 'medium' ? '24%' : '19%' 
    let cardWidth = props === 'easy' ? '12%' : props === 'medium' ? '10.6%' : '9.5%' 
    return {pairNums, cardHeight, cardWidth}
}