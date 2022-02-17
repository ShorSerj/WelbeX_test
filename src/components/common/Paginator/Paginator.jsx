import React from 'react'
import style from './Paginator.module.scss'

const Paginator = ({totalUsersCount,pageSize, currentPage=1, onCurrentPage}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return (
    <div className={style.users}>
      {pages.map((p, index) => {
        return (
          <button className={style.user + ' ' + (currentPage === p && style.selectedPage) } key={index} onClick={(e) => {onCurrentPage(p)}}>Page: {p}</button>
        )
      })}
    </div>
  )
}

export default Paginator
