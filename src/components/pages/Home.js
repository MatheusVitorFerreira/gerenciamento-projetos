import Styles from './Home.module.css'
import savings from './../images/saving.png'
import LinkButton from '../layout/LinkButton'


function Home(){
    return(
      <section className={Styles.home_container}>
        <h1> Bem- Vindo ao <span> Gerenciamento de Projetos</span></h1>
        <p>Começe a Gerenciar os seus projetos agora mesmo!</p>
        <LinkButton to= "/newProject" text= "Criar Projeto"/>
        <img src={savings} alt = "Gerenciamento Projetos"/>
      </section>
    )   
   }
   
   export default Home