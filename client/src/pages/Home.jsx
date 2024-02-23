import './home.css'
import { useAuth } from '../store/Auth'
const Home = () => {
  const { Counter } = useAuth();
  console.log(Counter)
  return (
    <>
      <div className='wrapper'>
        <div className="section">
          <div className="left">
            <h4>we are the word best it company</h4>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit,</h1>
            <h1>Welcome to Our Company!</h1>
            <button className='btn btn-left'>Get Started Now</button>
            <button className='btn btn-left'>Get Started Now</button>

          </div>
        </div>
       
      </div>
    </>
  )
}

export default Home