
# Idea Board #
## What is Idea Board? ##
This is a simple application created with the MEAN stack to keep a log of ideas for upcoming hackathons (or anything, really).

The application is meant to be a very simple and very basic idea board, with no login; anyone can post to the board. This is to ensure flexibility and simplicity so that anyone can customize the application to fit their needs.

## Basic Usage ##
### Requirements ###
To use the Idea Board, you need to have the following installed on your system:

- node
- bower
- mongodb

### Installation ###
1. `cd server` and install the required packages with `npm install`.
2. `cd public` and install the required packages with `bower install`.
3. Ensure that you have a mongodb instance running.
4. Start the application with `npm start`.
5. Go to [http://localhost:3000](http://localhost:3000) to view the application.

## Notes ##
The Idea Board is styled with Bootstrap, but `/server/public/css` contains `style.sass` for custom css.

The Idea Board lists Ideas starting from the most recent.

## Possible Upcoming Features ##
- Post Flagging
- Liking posts/Voting posts
