Lendsqr-fe-test
-----

## Introduction

Lendsqr-fe-test is an admin management dashboard deployed [here](https://goodness-obi-lendsqr-fe-test.vercel.app).

## Overview

This is the frontend of an admin management dashboard with 3 pages - the login page, the users dashboard and the user details page.

## Deployment
View Deployed Page Here. Lendsqr

## Features
* A login page that routes to the users page by clicking the Sign-in button. The form takes in no value.
* The Users page that displays a paginated list of users.
* A user page that can be assessed by clicking on the user name on the users table or the view-details item on the dropdown for each user.

## Tech Stack (Dependencies)
### Frontend Dependencies
 * **react** as our javscript framwork
 * **react-dom**
 * **react-router-dom** for routing
 * **sass** for styling
 * **vite-plugin-svgr** to transform SVGs into React components
 * **react-paginate** for pagination
 * **moment** 
 * **antd** 

### Dev Dependencies
 * **typescript** for extending and typing our Javascript
 * **eslint** for linting
 * **vite** as our bundler
 * **vitest** for testing
 * **happy-dom** used by vutest to create a browser-like environment 
 * **@testing-library/react** that has a bunch of convenience features that make testing React significantly easier

## Running Project Locally
* Fork the repository to create a version on your account
* Clone the repository 
  ```bash
  //locally
  git clone https://github.com/<Your Github Username>lendsqr-fe-test.git
  ```
 * **Installing Node and NPM**
   This project depends on Nodejs and Node Package Manager (NPM). Before continuing, you must download and install Node (the download includes NPM) from [https://nodejs.com/en/download](https://nodejs.org/en/download/).

* **Installing project dependencies**
   This project uses NPM to manage software dependencies. NPM Relies on the package.json file in the root of this repository. After cloning, open your terminal and run:

  ```bash
  npm install
  ```
* **Run Locally**
  ```bash
  npm run dev
  ```
Open [http://localhost:5173](http://localhost:5173) to view it in the browser

* **Run Tests**
This project involves tests and can be run using:
  ```bash
  npm test or npm t
  ```
  
 ## Author
- LinkedIn - [Goodness Obi](https://www.linkedin.com/in/goodnessobi/)
