function onPage(words) {
    const main = document.getElementById("main")
    let newText = document.createTextNode(words)
    let newBreak = document.createElement("br")
    main.appendChild(newText)
    main.appendChild(newBreak)

}



fetch("http://jservice.io/api/category?id=780")
    .then(res => res.json())
    .then(data => {
        let newTitle = data.title
        let randomQuestion = data.clues[Math.floor(Math.random() * data.clues_count)]
        let question = randomQuestion.question
        onPage('The category is ' + newTitle)
        onPage(question)
    })


async function postUp() {

    const response = await fetch("http://jservice.io/api/category?id=25")
    const category = await response.json()
    let clue = category.clues[Math.floor(Math.random() * category.clues_count)]
    let title = category.title
    onPage('The category is ' + title)
    onPage(clue.question)
}

postUp()
