import { useEffect } from 'react'

export const changePageTitle = (title: string) => {
  useEffect(() => {
    document.title = `Students Sys | ${title}`
    return () => { document.title = 'Students Sys' }
  }, [title])
}
