import React , {useState,useEffect } from 'react';
//styles
import useStyles from './styles/appStyle'
//react modal
import Modal from 'react-modal';
//difficulty selection
import DifficultySel from './components/difficultySelection.component'
import CardList from './components/cardlist/cardlist.component'
import WinOrLoseModal from './components/modal/winOrloseModal.component'
//utils
import {shuffleImageRandomGalary} from './utils/shuffleImageRandomGalary'
import {determineDifficulty} from './utils/determinDifficulty'

const App = () => {
  const classes = useStyles()
  
  //State
  const [state, setState] = useState({
    keys: [],
    id: [],
    count: 0
  })
  const [imageGalary, setImageGalary] = useState([])
  const [modalIsOpen,setIsOpen] = useState(false);
  const [initialRender, setRenderCount] = useState(0)
  const [difficulty, setdifficulty] = useState('easy')
  const [hightAndWidth, setHeightAndWidth] = useState({
    cardHeight: '',
    cardWidth: '',
    pairNums: 13
  })

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }
  //increment setCount
  const incrementCount = (key, id) => {
      setState({
        keys: [...state.keys, key],
        id: [...state.id, id],
        count: state.count + 1
      })
  }

  const clearCount = () => {
    if(state.id[0] === state.id[1] && state.keys[0] !== state.keys[1]){
      imageGalary[state.keys[0]] = {...imageGalary[state.keys[0]], is_shown:false}
      imageGalary[state.keys[1]] = {...imageGalary[state.keys[1]], is_shown:false}
    }
    setState({
        keys: [],
        id: [],
        count: 0
      })
  }

  Modal.setAppElement('#root')

  useEffect(() => {
    setImageGalary(shuffleImageRandomGalary())
    setRenderCount(1)
  }, [])

  useEffect(() => {
    const is_win = imageGalary.find(item => item.is_shown === true) 
    if(!is_win && initialRender !== 0){
      openModal()
    }
  }, [state])

  useEffect(() => {
    let determinObject = determineDifficulty(difficulty)
    setHeightAndWidth({
      cardHeight: determinObject.cardHeight,
      cardWidth: determinObject.cardWidth,
      pairNums: determinObject.pairNums
    })
  }, [difficulty])

  useEffect(() => {
    setImageGalary(shuffleImageRandomGalary(hightAndWidth.pairNums))
  }, [hightAndWidth])

  return (
    <>
      <WinOrLoseModal 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />
      <div className={classes.root_container}>
        <DifficultySel value={difficulty} handleSelectDifficulty={setdifficulty}/>
        <CardList 
          imageGalary = {imageGalary}
          incrementCount = {incrementCount}
          clearCount = {clearCount}
          state = {state}
          cardHeight = {hightAndWidth.cardHeight}
          cardWidth = {hightAndWidth.cardWidth}
        />
      </div>
    </>
  );
}

export default App;
