import Styles from './ProjectForm.module.css'

function ProjectForm() {
    return (
        <form className= {Styles.form}>
            <div>
                <input 
                    type="text" 
                    name="name"
                    placeholder="Insira o nome do projeto"
                />
            </div>

            <div>
                <input 
                    type="number"
                    min="0"
                    placeholder="Insira o Orçamento Total"
                />
            </div>

            <div>
                <select name="category_id" defaultValue="">
                    <option value="" disabled>
                        Selecione a categoria
                    </option>
                </select>
            </div>
            <div>
                <input type="submit" value = "Criar Projeto"></input>
            </div>
        </form>
    )
}

export default ProjectForm;
