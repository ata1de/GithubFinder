import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Project from "../components/Project";
import classes from '../style/Repos.module.css'

import { ReposProps } from "../types/user";

const Repos = () => {
    const { username } = useParams();
    const [repos, setRepos] = useState<ReposProps[]>([]); // Defina o tipo para ReposProps[]


    const loadRepos = async () => {
        const res = await fetch(`https://api.github.com/users/${username}/repos`);
        const data: ReposProps[] = await res.json(); // Defina o tipo para ReposProps[]

        // Função para ordenar os elementos pelo número de estrelas, e pelos forks
        const sortedRepos = data.sort((a, b) => {
          if (b.stargazers_count !== a.stargazers_count) {
            return b.stargazers_count - a.stargazers_count;
          } else {
            return b.forks_count - a.forks_count;
          }
        });

        setRepos(sortedRepos);
        console.log(sortedRepos);

    };

    useEffect(() => {
        loadRepos();
    }, []);

    return (
        <div className={classes.repos}>
            <div>
                <ul>
                    {repos.slice(0,5).map(repo => (
                        <Project key={repo.name} repo={repo} />
                    ))}
                </ul>
            </div>
            {/* Aqui você pode renderizar os dados dos repositórios, por exemplo: */}
        </div>
    );
}

export default Repos;
