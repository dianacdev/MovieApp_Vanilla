const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=29caf88e18476ded9e16d5445371bc4a'
const IMG_PATH = 'https://themoviedb.org/t/p/w1280'
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=29caf88e18476ded9e16d5445371bc4a&query="

const main = document.getElementById("section")
const form = document.getElementById("form")
const search = document.getElementById("query")


returnMovies(APILINK)
function returnMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data){
        console.log(data.results)
        data.results.forEach(
            element=>{
                const div_card = document.createElement('div')
                div_card.setAttribute('class', 'card')
                const div_row = document.createElement('div')
                div_row.setAttribute('class', 'row')
                const div_column = document.createElement('div')
                div_column.setAttribute('class', 'column')
                const image = document.createElement('img')
                image.setAttribute('class', 'thumbnail')
                image.setAttribute('id', 'image')
                const title = document.createElement('h3')
                image.setAttribute('id', 'title')
                const center = document.createElement('center')


                title.innerHTML = `${element.title}`  //returns movie title for api
                image.src = IMG_PATH + element.poster_path //returns image path from api
                center.appendChild(image) //adds image as a child of center
                div_card.appendChild(center)
                div_card.append(title)
                div_column.appendChild(div_card)
                div_row.appendChild(div_column)

                main.appendChild(div_row) //adding the card to main section
            })
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    main.innerHTML = ""
    const searchItem = search.value

    if (searchItem){
        returnMovies(SEARCHAPI + searchItem)
        search.value = ""
    }
})
