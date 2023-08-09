import './index.scss'
import { TextareaHTMLAttributes } from 'react'
interface TextAreaProps extends TextareaHTMLAttributes<any> { 

}
const TextArea :React.FC<TextAreaProps> = (props) => {
  return <textarea {...props} className="text-area" placeholder="Paste your text here..." />
}

export default TextArea
