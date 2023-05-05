# Tech-Blog
Repository for UWCB week 14 challenge MVC - Tech Blog

## Description
This is a MVC Tech Blog that will allow users to create an account, log in and make blog posts to share tech information with each other.

## Installation
To run this program first clone this repository. To install all the necessary dependencies run:
```bash
npm i
```
You can add seed data by running:
```bash
npm run seed
```
To start the server run:
```bash
npm run start
```

Alternatively you can run the deployed application on [Heroku](https://quiet-everglades-95440.herokuapp.com/)

## Usage
To use the app you must first log in if you have an existing account. If not click the Sign Up option on the top right corner.
Enter your credentials and upon signing up you should be taken to your dashboard where you can create your first post. 

Once you've entered your post name and content go ahead and click Create. You should see your created post to the right of your dashboard. To delete any of your posts just click Delete next to thatt post. If you also go back to your home page you should also see your new post added to the list of existing posts from other users.

To view individual posts click on the post name. Here you will also be able to add comments to the selected post.

![screenshot](./ss-techblog.png)

## Credit
Application created by Gene Kim

Email: [genedanielkim@gmail.com](mailto:genedanielkim@gmail.com)

## License
N/A
