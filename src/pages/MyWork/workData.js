const techBlogImage = `${process.env.PUBLIC_URL}/assets/Images/TechBlog.png`
const ArcaderunnerImage = `${process.env.PUBLIC_URL}/assets/Images/Arcaderunner.png`
const myBooksImage = `${process.env.PUBLIC_URL}/assets/Images/Mybooks.png`
const weatherDashboardImage = `${process.env.PUBLIC_URL}/assets/Images/WeatherDashboard.png`
const passwordGeneratorImage = `${process.env.PUBLIC_URL}/assets/Images/PasswordGenerator.png`
const instantMessengerImage = `${process.env.PUBLIC_URL}/assets/Images/InstantMessenger.png`
const potluckOrganizerImage = `${process.env.PUBLIC_URL}/assets/Images/PotluckOrganizer.png`

export const workData = [
    {
        title: "InstantMessenger",
        description: "Built with React, Node, Express, MongoDB, and Socket.io, InstantMessenger is a real time chat app that allows you to create accounts, add contacts, and send/edit/delete messages all in real time.",
        deployed_url: 'https://jg-instant-messenger.herokuapp.com/',
        repo_url: 'https://github.com/JoshGumperz/instant-messenger',
        image: instantMessengerImage 
    },
    {
        title: "Tech Blog",
        description: "Built with Handlebars.js, JavaScript, jQuery, Node.js, MySQL, and more, the Tech Blog serves as a blog website that allows users to create accounts, create/update/delete blog posts, and view/reply to other users blog posts all while utilizing a clean, user friendly UI.",
        deployed_url: 'https://whispering-thicket-43771.herokuapp.com/',
        repo_url: 'https://github.com/JoshGumperz/tech-blog',
        image: techBlogImage 
    }, 
    {
        title: "Arcaderunner",
        description: "Built with React, Node.js, MySQL, and more, Arcaderunner is an 80s themed game hosting platform. Arcaderunner aims to provide the user with a fun and immersive gaming experience.",
        deployed_url: 'https://afternoon-eyrie-60513.herokuapp.com/',
        repo_url: 'https://github.com/ts795/arcaderunner',
        image: ArcaderunnerImage
    },
    {
        title: "Potluck Organizer",
        description: "Built with React, Node, Express, and MongoDB, this is a project that I helped build with the purpose of organizing a potluck event for alumni from the bootcamp I did. The event happened in July of 2022, and this is the actual website that we used to organize it.",
        deployed_url: 'https://potluck-party-event.herokuapp.com/',
        repo_url: 'https://github.com/JoshGumperz/potluckparty',
        image: potluckOrganizerImage 
    },
    {
        title: "My Books",
        description: "Built with Handlebars.js, JavaScript, jQuery, Node.js, MySQL, and more, MyBooks is a book search engine which utilizes Google's Books API to display up to date information on any book the user searches. Users can also create accounts, and save a list of all their favorite books!",
        deployed_url: 'https://my-books-1748.herokuapp.com/',
        repo_url: 'https://github.com/JoshGumperz/MyBooks',
        image: myBooksImage 
    }, 
    {
        title: "Weather Dashboard",
        description: "Built with HTML/CSS, JavaScript, & jQuery, Weather Dashboard utilizes a clean, friendly UI to show the user the latest up to date weather data for any city they search and includes features such as search history and a color coded UV Index.",
        deployed_url: 'https://joshgumperz.github.io/weather-tracker/',
        repo_url: 'https://github.com/JoshGumperz/weather-tracker',
        image: weatherDashboardImage
    },
    {
        title: "Password Generator",
        description: "Built with HTML/CSS, & JavaScript, Password Generator provides an easy to use, accessible tool for generating randomized passwords.",
        deployed_url: 'https://joshgumperz.github.io/Password-Generator/',
        repo_url: 'https://github.com/JoshGumperz/Password-Generator',
        image: passwordGeneratorImage
    } 
]


