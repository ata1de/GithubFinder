import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Project from "../components/Project";

// Defina o tipo ReposProps
type ReposProps = {
    stargazers_count: number;
    language: string;
    forks_count: number;
    name: string; // Adicione outras propriedades conforme necessário
}

const Repos = () => {
    const { username } = useParams();
    const [repos, setRepos] = useState<ReposProps[]>([]); // Defina o tipo para ReposProps[]


    const loadRepos = async () => {
        const res = await fetch(`https://api.github.com/users/${username}/repos`);
        const data: ReposProps[] = await res.json(); // Defina o tipo para ReposProps[]
        setRepos(data);
        console.log(data);

    };

    useEffect(() => {
        loadRepos();
    }, []);

    return (
        <div>
            {/* Aqui você pode renderizar os dados dos repositórios, por exemplo: */}
            <ul>
                {repos.map(repo => (
                    <Project key={repo.name} repo={repo} />
                ))}
            </ul>
        </div>
    );
}

export default Repos;
