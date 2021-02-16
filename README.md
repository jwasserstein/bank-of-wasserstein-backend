# BANK OF WASSERSTEIN
BANK OF WASSERSTEIN is a demonstration banking application that allows users to create checking, savings, and investing accounts, submit deposits and withdrawals, and transfer money to other users. It’s a single page, fullstack application that uses React and Redux on the frontend and Node.js, Express, and MongoDB on the backend. The frontend is served by GitHub Pages and the backend runs on Heroku with a managed database provided by MongoDB Atlas. It was designed using Figma.  This repository holds the backend code.

## Running this Project
Run this project locally with `node index.js`.  If the environment variable `MONGODB_URI` is set, it will connect to that URI as its database; otherwise, it will try to connect to MongoDB locally.

## Deployment
This project is currently deployed on Heroku and can be found here: [https://bank-of-wasserstein-api@herokuapp.com](https://bank-of-wasserstein-api@herokuapp.com).

## Frontend
The frontend code can be found here: [https://github.com/jwasserstein/bank-of-wasserstein-frontend](https://github.com/jwasserstein/bank-of-wasserstein-frontend).
