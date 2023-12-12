import React, { useState } from 'react'
import Search from '../components/Search'
import { UserpProps } from '../types/user'

const Home = () => {
    const [user, setUser] = useState<UserpProps | null>(null)

    const loadUser =async (userName:string) => {

        const res = await fetch(`https://api.github.com/users/${userName}`)

        const data = await res.json()

        const {avatar_url, login, location, followers, following} = data

        const userData: UserpProps = {
            avatar_url,
            login,
            location,
            followers,
            following,
        };

        setUser(userData)
        
    }
  return (
    <div>
        <Search loadUser={loadUser} />
        {user && <p>{user.login}</p>}
    </div>
  )
}

export default Home