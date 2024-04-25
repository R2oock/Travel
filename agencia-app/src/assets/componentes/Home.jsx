import Styles from './home.module.css'
import Mala from './img/mala.png'



function Home() {
  return (
    <div className={Styles.home}>
        <div className={Styles.img}>
            <img src={Mala}/>
        </div>
        <div className={Styles.text}>
            <h1>Encontre aqui  a viagem dos seus sonhos!!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo molestias provident perferendis tenetur atque omnis sunt ipsam debitis sapiente ipsa aperiam itaque odit enim, quod dolorum amet! Ab, delectus reprehenderit!</p>
        </div>
    </div>
    )
}

export default Home