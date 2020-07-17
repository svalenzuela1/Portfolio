
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
        const $div =$('<div>')//.addClass('API')
        $div.append($('<h2>').text(project.title))//.addClass('apiTitles'))
        $div.append($('<p>').text(project.description))//.addClass('apiTexts'))
        $div.append($('<img>').attr('src', project.image))//.addClass('apiImages'))
        $div.append($('<a>').attr('href', project.url))//.addClass('apiURL'))
        return $div
    }
    //$('body').append(createProjectElement(data[0]))
    
    data.forEach(project =>{

        const $projectDiv = createProjectElement(project)
       // $('#projectSection').css('border','solid red')
        $('.projectSection').append($projectDiv)


    })

}

/*
//HAMBURGER FUNCTION
const $burger = $(“.burger”)
const $menu = $(“.menu")
let show = false;
const showMenu = (event) => {
    if (show) {
        $right1.each(function(index){
            $(this).css(“display”,“none”)
        })
        show = false
    } else {
        $menu.each(function(index){
            $(this).css(“display”,“block”)
        })
        show = true
    }
}
*/

/*
//skills section
const githubImg = "https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png";

//let clickOnGithub = () => {
    const $gitLogo = $('<img>')
    //const githubImg = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png';
    $gitLogo.attr('src', "https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png")
    $('.projects').append($gitLogo)

    $gitLogo.on('click', (event) => {
location.replace("https://github.com/svalenzuela1")
    }
*/
//})
//}

 //$githubImg.on('click',(event) => {
  //  clickOnGithub()
//})

/*
.then( response => response.json() )    // returns the JSON data as a JS object
    .then( data => {
        // creates an array of parsed project objects
        const projects = data.feed.entry.map( entry => {
             return {
                title: entry.gsx$title.$t,
                image: entry.gsx$image.$t,
                description: entry.gsx$description.$t,
                url: entry.gsx$url.$t
             }
         })
         
         app(projects)  // calls the application with your new projects array as argument
    })
// all application logic is included inside the app() function    
const app = (projects) => {
    // creates a jQuery DOM element based on an individual project object
    const createProjectElement = (project) => {
        const $div = $('<div>').addClass("project")
        $div.append($('<h2>').text(project.title))
        $div.append($('<img>').attr('src', project.image))
        $div.append($('<p>').addClass("description").text(project.description))
        $div.append($('<a>').attr('href', project.url).text("LINK >>"))
        return $div
    }
    // adds each project element to <body>
    projects.forEach(project => {
        const $projectDiv = createProjectElement(project)
        $('body').append($projectDiv)
    })
}
*/
