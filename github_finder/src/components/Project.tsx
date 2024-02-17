import { RepoItemProps } from "../types/user"
import classes from '../style/Project.module.css'
import { IoMdGitBranch } from 'react-icons/io';
import { MdStar, MdCode } from 'react-icons/md';
import { Link } from "react-router-dom";

const Project = ({repo}:RepoItemProps) => {
  return (
    <div className={classes.project}>
        <li>
            <Link to={repo.html_url} 
            style={{ fontSize: '1.5rem' }}
            >{repo.name}</Link>
            <p> <MdCode /> {repo.language}</p>

            <div className={classes.stats}>
              <div>
                <p className={classes.icons}> <IoMdGitBranch /></p>
                <p>{repo.forks_count}</p>
              </div>
              <div>
                <p className={classes.icons}> <MdStar /></p>
                <p>{repo.stargazers_count}</p>
              </div>
            </div>
        </li>
    </div>
  )
}


export default Project