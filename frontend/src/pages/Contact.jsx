import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const navigate = useNavigate()

  const goHome = () => {
    navigate('/')
  }

  return (
    <>
      <button onClick={goHome}>Go Home</button>
      <h1>Contact us</h1>
    </>
  )
}
