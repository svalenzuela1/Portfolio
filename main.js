
console.log($)

let url = 'https://spreadsheets.google.com/feeds/list/1UUsLTR3KfDVDztVxiJ9pC61R8jDDpiVVilF-fxHzp4U/od6/public/values?alt=json'

fetch(url)  // starts the fetch process

.then(response => response.json())
.then(data => {//console.log('data:', data))
let projects = data.feed.entry.map( entry => {
    return {
       title: entry.gsx$title.$t,
       image: entry.gsx$image.$t,
       description: entry.gsx$description.$t,
       url: entry.gsx$url.$t
        }
    })
    app(projects)
})

const app = (data) => {
    console.log('app is running!')
    console.log(data)

    const createProjectElement = (project) => {
        const $div =$('<div>').addClass('API')
        $div.append($('<h2>').text(project.title).addClass('apiTitles'))
        $div.append($('<p>').text(project.description).addClass('apiTexts'))
        $div.append($('<img>').attr('src', project.image).addClass('apiImages'))
        $div.append($('<a>').attr('href', project.url).addClass('apiURL'))
        return $div
    }

    
    data.forEach(project =>{

        const $projectDiv = createProjectElement(project)
       // $('#projectSection').css('border','solid red')
        $('.projectSection').append($projectDiv)


    })

}


//HAMBURGER FUNCTION
//alex youtube tutorial
const $hamburger = $(".burger")
const $tabletLinks = $(".tabletLink")
let show = false;

const showMenu = (event) => {
    if (show) {
        $tabletLinks.each(function(index){
            $(this).css("display","none")
        })
        show = false
    } else {
        $tabletLinks.each(function(index){
            $(this).css("display","block")
        })
        show = true
    }
}

$hamburger.on("click", showMenu)


document.getElementById('submit')

