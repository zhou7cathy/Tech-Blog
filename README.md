# Tech-Blog

## Description
This application is created developers who want a CMS-style blog site so they can publish articles, blog posts,and their thoughts and opinions.

## Installation
connect-session-sequelize 
dotenv <br />
express <br />
express-handlebars <br />
express-session <br />
handlebars <br />
mysql2 <br />
sequelize <br />
bcrypt <br />


## Usage
Given a CMS-style blog site
-When I visit the site for the first time, I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in.<br />
-When I click on the homepage option, I am taken to the homepage.<br />
-When I click on any other links in the navigation, I am prompted to either sign up or sign in.<br />
-When I choose to sign up, I am prompted to create a username and password.<br />
-When I click on the sign-up button, my user credentials are saved and I am logged into the site.<br />
-When I revisit the site at a later time and choose to sign in, I am prompted to enter my username and password.<br />
-When I am signed in to the site, I see navigation links for the homepage, the dashboard, and the option to log out.<br />
-When I click on the homepage option in the navigation, I am taken to the homepage and presented with existing blog posts that include the post title and the date created.<br />
-When I click on an existing blog post, I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment.<br />
-When I enter a comment and click on the submit button while signed in, the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created.<br />
-When I click on the dashboard option in the navigation, I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post.<br />
-When I click on the button to add a new blog post, I am prompted to enter both a title and contents for my blog post.<br />
-When I click on the button to create a new blog post, the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post.<br />
-When I click on one of my existing posts in the dashboard, I am able to delete or update my post and taken back to an updated dashboard.<br />
-When I click on the logout option in the navigation, I am signed out of the site.<br />
-When I am idle on the site for more than a set time, I am able to view comments but I am prompted to log in again before I can add, update, or delete comments.<br />


The following image shows the web application's appearance and functionality:
![alt text](/assets/The-tech-blog-home.png)
![alt text](/assets/The-tech-blog-login.png)
![alt text](/assets/The-tech-blog-post.png)
![alt text](/assets/The-tech-blog-dashboard.png)
## License
N/A

## Contributing
N/A

## Tests
N/A

## Link to deployed application
https://secret-escarpment-59821.herokuapp.com/