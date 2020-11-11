//images
import allImages from '../components/imageList.component'


  const setUpRandomGalary = (pairNums = 13) => {
    let imageGalary = []
    for(let i = 1; i < pairNums; i++){
      let randomImage = Math.floor(Math.random() * Math.floor(11))
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