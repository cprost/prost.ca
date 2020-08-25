<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://prost.ca">
    <img alt="Prost.ca logo" src="https://raw.githubusercontent.com/cprost/prost.ca/master/src/images/favicon-192x192.png" width="120" />
  </a>
</p>
<h1 align="center">
  Prost.ca
</h1>

![Screenshot of prost.ca index page](https://raw.githubusercontent.com/cprost/prost.ca/master/content/experience/project2/website.png)

My [personal website](https://prost.ca/) built from scratch with Gatsby + React, deployed on [Netlify](https://netlify.com/). It features lightning-fast loading from Gatsby's static site generation, while leveraging React's UI and state management features. Most content and pages are auto-generated from Markdown - no external CMS is required.

This site uses responsive design for both desktop and mobile browsing. Only a handful of frontend JS libraries to encourage faster loading; most of the heavy lifting is done at build time. A more in-depth discussion about building this website was posted on my [blog](https://prost.ca/blog/kickoff).

## License

This project was created under the MIT License, so feel free to fork or clone this website for your own use. If you choose to use this repo for your own website, credit would be appreciated but is not necessary.

## Installation

Before starting, you should have Node and NPM installed and updated. This was built with Node v12.18.2 and NPM v6.14.5 but will work with newer versions too.

1. **Install Gatsby via NPM**

    Installing Gatsby for just this repo can be done by omitting the `-g` flag below :
    ```shell
    npm install -g gatsby-cli
    ```

1.  **Clone the repository**
    
    Create a copy of the repository by cloning it to your computer :
    ```shell
    git clone https://github.com/cprost/prost.ca.git [your-site-name]
    ```

1.  **Install required packages**

    Navigate into your new site’s directory and install the required packages listed in package.json :

    ```shell
    cd [your-site-name]/
    npm install
    ```
    
1.  **Make and test your own edits**

    Most personal information is found in the `gatsby-config.js` file - edit this to suit your personal requirements. All other content like blog posts, projects, *etc.* can be found in the `content/` directory and should be modified as well. New features or UX edits can be made at this stage. You can test your changes and preview the site by running :

    ```shell
    npm start
    ```
    or
    ```shell
    npm run develop
    ```

1.  **Build a production version**

    Once you're ready to get your site online, you can generate an optimized production build by running :
    
    ```shell
    gatsby build
    ```
    
    The optimized production build can then be deployed (to default localhost:9000) by running :
    
    ```shell
    gatsby serve
    ```

## Deploy

If you want to host your site for free, you can deploy it to [Netlify](https://netlify.com/). Their CI service can build your site directly from a GitHub repository, plus the deployed site is hosted on their CDN. If you want to test out their deployment services, press the button below. A more in-depth guide to deploying on Netlify is linked below.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cprost/prost.ca)

[Deploying to Netlify from a GitHub repository](https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/)
