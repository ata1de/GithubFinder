import { RepoItemProps } from "../types/user"
import classes from '../style/Project.module.css'
import { IoMdGitBranch } from 'react-icons/io';
import { MdStar, MdCode } from 'react-icons/md';

const Project = ({repo}:RepoItemProps) => {
  return (
    <div className={classes.project}>
        <li>
            <h2>{repo.name}</h2>
            <p> <MdCode /> {repo.language}</p>
            <div>
              <p> <IoMdGitBranch /> {repo.forks_count}</p>
              <p> <MdStar /> {repo.stargazers_count} </p>
            </div>
            {/* Adicione outras propriedades conforme necessário */}
        </li>
    </div>
  )
}

export default Project