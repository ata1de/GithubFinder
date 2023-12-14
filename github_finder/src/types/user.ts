export type UserpProps = {
    avatar_url: string;
    login: string;
    location:string;
    followers: number;
    following: number;
    repos_url: string
}

export type ReposProps = {
    name:string;
    stargazers_count: number;
    language: string;
    forks_count: number
}


export type RepoItemProps = {
    repo: {
      stargazers_count: number;
      language: string;
      forks_count: number;
      name: string;
    };
  };