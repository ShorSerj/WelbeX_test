const paginatorTasks = (tasks, pageSize=4, currentPage=1) => {
    let firstId = pageSize*(currentPage-1)+1
    let lastId = pageSize*currentPage
    let currentId = firstId
    let count = 0
    let tasksArr = [[]]
    let indexArr = 0
    let output = {}

    tasks.map((item)=> {
        item.userId > count ? count = item.userId : null
        if(item.userId >= firstId & item.userId <= lastId){
            if(item.userId == currentId){
                tasksArr[indexArr].push(item)
            }else if(item.userId > currentId){ 
                tasksArr.push([])
                indexArr++
                currentId++
                tasksArr[indexArr].push(item)
            }
        }
    })

    return(
        output = {
            count,
            tasksArr 
        }
    )
}
export default paginatorTasks