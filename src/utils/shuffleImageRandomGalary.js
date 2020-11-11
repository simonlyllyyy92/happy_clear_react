//images
import {easyModeImages, mediumModeImages, hardModeImages} from '../components/imageList.component'
import {determinImageGalary, determinRandomLength} from './determinDifficulty'


  const setUpRandomGalary = (pairNums = 13) => {
    let imageGalary = []
    let difficulty = determinImageGalary(pairNums)
    let randomLength = determinRandomLength(difficulty)
    let allImages = difficulty === 'easy' ? easyModeImages : difficulty === 'medium' ? mediumModeImages : hardModeImages 

    for(let i = 1; i < pairNums; i++){
      let randomImage = Math.floor(Math.random() * randomLength)
      imageGalary.push(allImages[randomImage])
      imageGalary.push(allImages[randomImage])
    }
    return imageGalary
  }
  // shuffle the imageGalary
  const shuffleImageGalary = (pairNums = 13) => {
    let array = [...setUpRandomGalary(pairNums)]
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }



export const shuffleImageRandomGalary = (pairNums) => {
    return shuffleImageGalary(pairNums)
}