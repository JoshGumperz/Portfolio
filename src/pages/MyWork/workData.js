const techBlogImage = `${process.env.PUBLIC_URL}/assets/Images/Tech-Blog.png`
const ArcaderunnerImage = `${process.env.PUBLIC_URL}/assets/Images/Arcaderunner.png`
const weatherDashboardImage = `${process.env.PUBLIC_URL}/assets/Images/Weather-Dashboard.png`
const passwordGeneratorImage = `${process.env.PUBLIC_URL}/assets/Images/Password-Generator.png`

export const TechBlog = {
    title: "Tech Blog",
    description: "Built with Handlebars.js, JavaScript, jQuery, Node.js, MySQL, and more, the Tech Blog serves as a blog website that allows users to create accounts, create/update/delete blog posts, and view/reply to other users blog posts all while utilizing a clean, user friendly UI.",
    deployed_url: 'https://whispering-thicket-43771.herokuapp.com/',
    repo_url: 'https://github.com/JoshGumperz/tech-blog',
    image: techBlogImage 
} 
export const Arcaderunner = {
    title: "Arcaderunner",
    description: "Built with React, Node.js, MySQL, and more, Arcaderunner is an 80s themed game hosting platform. Arcaderunner aims to provide the user with a fun and immersive gaming experience.",
    deployed_url: 'https://afternoon-eyrie-60513.herokuapp.com/',
    repo_url: 'https://github.com/ts795/arcaderunner',
    image: ArcaderunnerImage
}
export const WeatherDashboard = {
    title: "Weather Dashboard",
    description: "Built with HTML/CSS, JavaScript, & jQuery, Weather Dashboard utilizes a clean, friendly UI to show the user the latest up to date weather data for any city they search and includes features such as search history and a color coded UV Index.",
    deployed_url: 'https://joshgumperz.github.io/weather-tracker/',
    repo_url: 'https://github.com/JoshGumperz/weather-tracker',
    image: weatherDashboardImage
}
export const PasswordGenerator = {
    title: "Password Generator",
    description: "Built with HTML/CSS, & JavaScript, Password Generator provides an easy to use, accessible tool for generating randomized passwords.",
    deployed_url: 'https://joshgumperz.github.io/Password-Generator/',
    repo_url: 'https://github.com/JoshGumperz/Password-Generator',
    image: passwordGeneratorImage
}
