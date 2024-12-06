'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Session } from 'next-auth';
import React, { useEffect, useState } from 'react'

interface getUserReposProps {
  session : Session | null
}

const GetUserRepos : React.FC<getUserReposProps> = async ({ session }) => {
  const [repos, setRepos] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRepos = async () => {
      const githubToken = session?.accessToken
      console.log(githubToken)

      if(githubToken){
        try {
          const response = await fetch('https://api.github.com/user/repos', {
            headers : {
              Authorization : `Bearer ${githubToken}`
            },
          });

          const data = await response.json()
          setRepos(data)
        } catch (error) {
          console.log("Error fetching repos", error)
        } finally {
          setLoading(false)
        }
      }
    };

    if(session){
      fetchRepos();
    }
  },[session])

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>Access Your Repos</DropdownMenuTrigger>
        <DropdownMenuContent>
          {repos.map((repo) => (
            <DropdownMenuItem>{repo}</DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default GetUserRepos