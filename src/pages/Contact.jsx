import { useParams } from 'react-router-dom'
export default function Contact() {
  const { contactId } = useParams()

  return (
    <div>
      <h1>Contact {contactId}</h1>
      <p></p>
    </div>
  )
}
