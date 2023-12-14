import { RepoItemProps } from "../types/user"

const Project = ({repo}:RepoItemProps) => {
  return (
    <div>
        <li >
            <strong>Name:</strong> {repo.name}<br />
            <strong>Stars:</strong> {repo.stargazers_count}<br />
            <strong>Language:</strong> {repo.language}<br />
            <strong>Forks:</strong> {repo.forks_count}<br />
            {/* Adicione outras propriedades conforme necessário */}
        </li>
    </div>
  )
}

export default Project