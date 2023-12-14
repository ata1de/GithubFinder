import { RepoItemProps } from "../types/user"
import classes from '../style/Project.module.css'

const Project = ({repo}:RepoItemProps) => {
  return (
    <div className={classes.project}>
        <li>
            <h2>{repo.name}</h2>
            <strong>Stars:</strong> {repo.stargazers_count}<br />
            <strong>Language:</strong> {repo.language}<br />
            <strong>Forks:</strong> {repo.forks_count}<br />
            {/* Adicione outras propriedades conforme necessário */}
        </li>
    </div>
  )
}

export default Project