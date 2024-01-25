# Steps to run in Docker

### <u> To build the Docker Image, execute below command </u>

` docker build -t gatsby-dev . `


### <u>Run the Docker Container with Volume Mapping: </u>

Use docker run with volume mapping to sync your local Gatsby project files with the container. Replace /path/to/your/gatsby-project with the path to your Gatsby project on your host machine.

`docker run -v /path/to/your/gatsby-project:/app -p 8000:8000 --name gatsby-container gatsby-dev`


### <u> Start Gatsby Development Server Inside the Container: </u> 

After the container is up, start Gatsby in development mode:

`docker exec -it gatsby-container gatsby develop -H 0.0.0.0`

The -H 0.0.0.0 option makes Gatsby accessible from your host machine.

### <u>  Access the Site: </u>

Your Gatsby site should now be accessible at http://localhost:8000.
