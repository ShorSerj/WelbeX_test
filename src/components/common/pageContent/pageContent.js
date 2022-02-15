const pageContent = (tasks, pageSize, currentPage=2) => {
    let firstId = pageSize*(currentPage-1)+1
    let lastId = pageSize*currentPage
    let currentId = firstId
    let tasksArr = [[]]
    let indexArr = 0
    tasks.map((item)=> {
        if(item.userId >= firstId & item.userId <= lastId){
            if(item.userId == currentId){
                tasksArr[indexArr].push(item)
            }else if(item.userId > currentId){ 
                tasksArr.push([])
                indexArr++
                currentId++
                tasksArr[indexArr].push(item)
            }else{
                return
            }
        }
        // item.userId > totalUsersCount ? totalUsersCount = item.userId : null
    })
    return(
        tasksArr
    )
}
export default pageContent