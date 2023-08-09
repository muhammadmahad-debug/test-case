import { useState } from 'react'
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'
import { pronouns } from './data/pronouns'

const App = () => {
  const [text, setText] = useState('')
  const [wordCount, setWordCount] = useState<number>(0)
  const [charCount, setCharCount] = useState<number>(0)
  const [countSentence, setCountSentence] = useState<number>(0)
  const [countPara, setCountPara] = useState<number>(0)
  const [pronouncount, setPronouncount] = useState<number>(0)
  const handleChange = (e: React.ChangeEvent<any>) => {
    const newText = e.target.value
    setText(newText)
    setWordCount(countWord(newText))

    setCharCount(newText.length)
    setCountSentence(getSentenceCount(newText))
    setCountPara(getParagraphCount(newText))
    setPronouncount(getPronounCount(newText))

  }
  const countWord = (text: string) => { 
    if(text.trim() === '') return 0
    const words = text.trim().split(/\s+/)
    return words.length
  }
  const getSentenceCount = (text: string) => {
    if(text.trim() === '') return 0
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim() === '')
    return sentences.length
  }
  const getParagraphCount = (text: string) => { 
    if(text.trim() === '') return 0
    const paragraphs = text.split("\n").filter(paragraph => paragraph.trim() === '')
    return paragraphs.length
  }
  const getPronounCount = (text: string) => { 
    const words = text.toLowerCase().split(/\s+/)
    const pronounCount:any = words.filter(word => pronouns.includes(word)).length
    return pronounCount.length 
  }
  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox wordsCount={wordCount} charCount={charCount} paraCount={countPara} sentenceCount={countSentence } pronouncount={pronouncount} />
          <TextArea value={text} autoFocus onChange={handleChange} />
          <BottomResultBox  />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
