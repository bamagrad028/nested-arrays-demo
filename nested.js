let appElemement = document.querySelector("#app")

let dataArray = [
    ["apple","banana","coconut","duran"],
    ["wheat","rye","sourdough"],
    ["carrot","tomoto","peach","mango"]
]
console.log(dataArray[0])

for (let outerIndex = 0; outerIndex < dataArray.length; outerIndex += 1) {
    const currentArray = dataArray [outerIndex];
    let newList = document.createElement("ol")
    appElemement.append(newList)
    for (let innerIndex = 0; innerIndex < currentArray.length; innerIndex += 1) {
        const currentElement = currentArray[innerIndex];
        let newItem =document.createElement("li")
        newItem.innerText = currentElement
        newList.append(newItem)

    }
    
}