import React from 'react'
import style from './Paginator.module.css'

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
          <button className={style.user} key={index}>Page: {p}</button>
          // <span 
          //   className={currentPage === p && s.selectedPage}
          //   // onClick={(e) => {
          //   //   onCurrentPage(p)
          //   // }}
        )
      })}
    </div>
  )
}

export default Paginator
