# Getting Started with Create React App

This project(task) was developed in React, tailwindcss and REST APIs.

## Project description

This project was developed using React, tailwind and REST APIs to try and implement the demands of the task. 
    
## Project installation
Clone or download the source code for the respository and in the repository folder run npm install.


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Three Questions for the task 
1.) Tricks to optimize the web application can are: - 
        Minimize HTTP requests.
        Minify and combine files.
        Using asynchronous loading for CSS and JavaScript files.
        Defer JavaScript loading.
        Minimize time to first byte.
        Reduce server response time.
        Choose the right hosting option for your needs.
        Run a compression audit.
 
2.) To design a safe and secure authentication we can use JWT(JSON Web Tokens).JWT is an Internet proposed standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims. The tokens are signed either using a private secret or a public/private key. For example, a server could generate a token that has the claim "logged in as admin" and provide that to a client. The client could then use that token to prove that it is logged in as admin. The tokens can be signed by one party's private key (usually the server's) so that party can subsequently verify the token is legitimate. If the other party, by some suitable and trustworthy means, is in possession of the corresponding public key, they too are able to verify the token's legitimacy. The tokens are designed to be compact, URL-safe, and usable especially in a web-browser single-sign-on (SSO) context. JWT claims can typically be used to pass identity of authenticated users between an identity provider and a service provider, or any other type of claims as required by business processes. So basically when the user sends credentials to the server a unique JWT string is created and verified on the server side and then stored back to the client side, in order to let the user access to the content of his account. Similarly in the verification side of things(like accessing personal profile things, changing passwords), the JWT will be sent from the client storage to the server side for verification and then will be checked in order to allow the user to perform the necessary actions. 
 
 
3.) Session storage — The session storage uses the sessionStorage object to store data on a temporary basis, for a single browser window or tab. The data disappears when the session ends i.e. when the user closes that browser window or tab.
 
 The localStorage object stores data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year. The localStorage property is read-only.
An HTTP cookie is a small piece of data stored on the user's computer by the web browser while browsing a website. Cookies were designed to be a reliable mechanism for websites to remember stateful information or to record the user's browsing activity. 
