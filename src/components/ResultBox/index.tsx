import { useEffect, useState } from 'react'
import './index.scss'

const ResultBox = ({ wordsCount, charCount , paraCount , sentenceCount  , pronouncount}: any) => {
  const [resultBar, setResultBar] = useState([
    {
      title: 'Words',
      value: 0,
    },
    {
      title: 'Characters',
      value: 0,
    },
    {
      title: 'Sentences',
      value: 0,
    },
    {
      title: 'Paragraphs',
      value: 0,
    },
    {
      title: 'Pronouns',
      value: 0,
    },
  ])
  

  useEffect(() => {
    if (!!resultBar.length) {
      setResultBar((prev:any) => {
        return prev.map((item: any) => {
      if (item?.title === 'Words') {
        item.value = wordsCount
      } else if (item?.title === "Characters") {
        item.value = charCount
      } else if (item?.title === "Paragraphs") {
        item.value = paraCount

      }else if (item?.title === "Sentences") { 
        item.value = sentenceCount

      }else if (item?.title === "Pronouns") { 
        item.value = pronouncount

      }
          
      return item
    })
    })
    }
    
  
  }, [wordsCount , charCount , paraCount , sentenceCount , pronouncount])
  

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
