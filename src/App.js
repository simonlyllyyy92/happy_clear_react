import React , {useState,useEffect } from 'react';
import Card from './components/card.component'
import GifPlayer from 'react-gif-player'
import Button from '@material-ui/core/Button';

//styles
import useStyles from './styles/appStyle'
//images
import allImages from './components/imageList.component'
import youWin from './assets/youwin.gif'
//react modal
import Modal from 'react-modal';

const App = () => {
  const classes = useStyles()
  const initialState = {
    keys: [],
    id: [],
    count: 0
  }
  //State
  const [state, setState] = useState(initialState)
  const [imageGalary, setImageGalary] = useState([])
  const [modalIsOpen,setIsOpen] = useState(false);
  const [initialRender, setRenderCount] = useState(0)

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

  //create a array with random image pairs from allImages
  const setUpRandomGalary = () => {
    let imageGalary = []
    for(let i = 1; i < 13; i++){
      let randomImage = Math.floor(Math.random() * Math.floor(11))
      imageGalary.push(allImages[randomImage])
      imageGalary.push(allImages[randomImage])
    }
    return imageGalary
  }
  // shuffle the imageGalary
  const shuffleImageGalary = () => {
    let array = [...setUpRandomGalary()]
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  const handleHardReload = () => {
    window.location.reload()
  }

  const handleLogOut = () => {
    window.close()
  }


  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      backgroundColor       : '#CECFD0'
    }
  };
   
  // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#root')


  useEffect(() => {
    setImageGalary(shuffleImageGalary())
    setRenderCount(1)
  }, [])

  useEffect(() => {
    const is_win = imageGalary.find(item => item.is_shown === true) 
    if(!is_win && initialRender !== 0){
      openModal()
    }
  }, [state])

  return (
    <>
      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
      >
          <div className = {classes.youWin_container}>
              <h2 style={{fontSize: "24px"}}>！！你赢了！！</h2>
              <GifPlayer gif={youWin} autoplay={true} style={{width: '100%', objectFit: 'fill'}}/>
              <div className = {classes.button}>
                <Button variant="contained" color="primary" onClick={handleHardReload}>
                  再来一次
                </Button>
                <Button variant="contained" onClick={handleLogOut}>结束游戏</Button>
              </div>
          </div>
      </Modal>
      <div className={classes.root_container}>
        <div className = {classes.content_container}>
            <>
              {imageGalary.map((item,index) => {
                return (
                <div className = {item.is_shown ? classes.card : classes.opacityTransition}>
                <Card
                    index = {index} 
                    imageGalary = {item} 
                    state = {state} 
                    addCount = {incrementCount} 
                    clearCount = {clearCount}
                  />
                </div>)
              })}
            </> 
        </div>
      </div>
    </>
  );
}

export default App;
