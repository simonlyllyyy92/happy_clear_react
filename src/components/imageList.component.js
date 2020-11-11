//Easy mode Images
import Bird_1 from '../assets/easyBird/Bird_1.jpeg'
import Bird_2 from '../assets/easyBird/Bird_2.jpeg'
import Bird_3 from '../assets/easyBird/Bird_3.jpeg'
import Bird_4 from '../assets/easyBird/Bird_4.jpeg'
import Bird_5 from '../assets/easyBird/Bird_5.jpeg'
import Bird_6 from '../assets/easyBird/Bird_6.png'
import Bird_7 from '../assets/easyBird/Bird_7.jpg'
import Bird_8 from '../assets/easyBird/Bird_8.jpg'
import Pig_1 from '../assets/easyBird/Pig_1.jpeg'
import Pig_2 from '../assets/easyBird/Pig_2.jpeg'
import Pig_3 from '../assets/easyBird/Pig_3.jpg'

//Medium mode Images
import M_Bird_1 from '../assets/mediumBird/angryBird1.jpg'
import M_Bird_2 from '../assets/mediumBird/angryBird2.png'
import M_Bird_3 from '../assets/mediumBird/angryBird3.jpeg'
import M_Bird_4 from '../assets/mediumBird/angryBird4.jpg'
import M_Bird_5 from '../assets/mediumBird/angryBird5.png'
import M_Bird_6 from '../assets/mediumBird/angryBird6.jpeg'
import M_Bird_7 from '../assets/mediumBird/angryBird7.jpg'
// import M_Bird_8 from '../assets/mediumBird/angryBird8.png'
import M_Bird_9 from '../assets/mediumBird/cuteBird1.jpg'
import M_Bird_10 from '../assets/mediumBird/funnyBird1.jpeg'
// import M_Bird_11 from '../assets/mediumBird/funnyBird2.png'
import M_Bird_12 from '../assets/mediumBird/funnyBird3.jpeg'
import M_Bird_13 from '../assets/mediumBird/funnyBird4.jpeg'

//Hard mode Images
import H_Pig_1 from '../assets/hardBird/kingPig1.jpeg'
import H_Pig_2 from '../assets/hardBird/naniPig1.jpeg'
import H_Pig_3 from '../assets/hardBird/smilyPig2.jpg'
import H_Pig_4 from '../assets/hardBird/smilyPig3.jpeg'
import H_Bird_1 from '../assets/hardBird/naniBird1.jpeg'
import H_Bird_2 from '../assets/hardBird/naniBird3.jpeg'
import H_Bird_3 from '../assets/hardBird/naniBird4.jpeg'
import H_Bird_4 from '../assets/hardBird/panicBird1.png'
import H_Bird_5 from '../assets/hardBird/smillyBird3.png'
import H_Bird_6 from '../assets/hardBird/smilyBird1.jpeg'
import H_Bird_7 from '../assets/hardBird/smilyBird2.png'

export let easyModeImages = [
    {
        imgUrl: Bird_1,
        id: 0,
        is_shown: true
    },
    {
        imgUrl: Bird_2,
        id: 1,
        is_shown: true
    },
    {
        imgUrl: Bird_3,
        id: 2,
        is_shown: true
    },
    {
        imgUrl: Bird_4,
        id: 3,
        is_shown: true
    },
    {
        imgUrl: Bird_5,
        id: 4,
        is_shown: true
    },
    {
        imgUrl: Bird_6,
        id: 5,
        is_shown: true
    },
    {
        imgUrl: Bird_7,
        id: 6,
        is_shown: true
    },
    {
        imgUrl: Bird_8,
        id: 7,
        is_shown: true
    },
    {
        imgUrl: Pig_1,
        id: 8,
        is_shown: true
    },
    {
        imgUrl: Pig_2,
        id: 9,
        is_shown: true
    },
    {
        imgUrl: Pig_3,
        id: 10,
        is_shown: true
    }
]

export let mediumModeImages = [
    ...easyModeImages,
    {
        imgUrl: M_Bird_1,
        id: 11,
        is_shown: true
    },  {
        imgUrl: M_Bird_2,
        id: 12,
        is_shown: true
    },  {
        imgUrl: M_Bird_3,
        id: 13,
        is_shown: true
    },  {
        imgUrl: M_Bird_4,
        id: 14,
        is_shown: true
    },  {
        imgUrl: M_Bird_5,
        id: 15,
        is_shown: true
    },  {
        imgUrl: M_Bird_6,
        id: 16,
        is_shown: true
    },  {
        imgUrl: M_Bird_7,
        id: 17,
        is_shown: true
    },  {
        imgUrl: M_Bird_9,
        id: 19,
        is_shown: true
    },  {
        imgUrl: M_Bird_10,
        id: 20,
        is_shown: true
    },  {
        imgUrl: M_Bird_12,
        id: 22,
        is_shown: true
    },  {
        imgUrl: M_Bird_13,
        id: 23,
        is_shown: true
    },
]

export let hardModeImages = [
    ...easyModeImages,
    ...mediumModeImages,
    {
        imgUrl: H_Pig_1,
        id: 24,
        is_shown: true
    }, 
    {
        imgUrl: H_Pig_2,
        id: 25,
        is_shown: true
    }, 
    {
        imgUrl: H_Pig_3,
        id: 26,
        is_shown: true
    }, 
    {
        imgUrl: H_Pig_4,
        id: 27,
        is_shown: true
    }, 
    {
        imgUrl: H_Bird_1,
        id: 28,
        is_shown: true
    }, 
    {
        imgUrl: H_Bird_2,
        id: 29,
        is_shown: true
    }, 
    {
        imgUrl: H_Bird_3,
        id: 30,
        is_shown: true
    }, 
    {
        imgUrl: H_Bird_4,
        id: 31,
        is_shown: true
    }, 
    {
        imgUrl: H_Bird_5,
        id: 32,
        is_shown: true
    }, 
    {
        imgUrl: H_Bird_6,
        id: 33,
        is_shown: true
    }, 
    {
        imgUrl: H_Bird_7,
        id: 34,
        is_shown: true
    }, 
]
