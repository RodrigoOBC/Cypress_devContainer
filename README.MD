# Cypress Project with Docker

This project uses Cypress for test automation and is configured to run inside a Docker environment. This guide details how to set up and run the environment, as well as execute the tests.

## 🚀 Setting Up and Starting the Environment with Docker

### Prerequisites

Make sure you have Docker and Docker Compose installed on your system.

### Setup Steps:

1- Enter the .devcontainer directory:

``` bash
cd .devcontainer
```

2 - Build and start the Docker containers:

``` bash
docker-compose -f docker-compose.yml up -d --build
```

3 - Access the container: Replace <container-name> with the name of the container configured in docker-compose.yml (for example, Cypress-container).

``` bash
docker exec -it <container-name> /bin/bash
```

## 🧪 Running the Tests

After accessing the terminal inside the container:

1 - Run the tests with UI: Use the Cypress command to open the environment where the tests will be executed:

``` bash
npx cypress open
```

2 - Run the tests via CLI: Use the Cypress command to run the tests via CLI:

``` bash
npx cypress run
```

## 🛠 Project Structure
- .devcontainer/: Contains the Docker environment configuration.

- docker-compose.yml: Docker Compose configuration file.

### Other configuration files.

- e2e/: Folder where we will find the "cy" files of our project.
- Fixtures/: Folder where we will find the files with the objects that belong to the page class.
- support/: Folder with the organized Cypress Pages.
- - Pages/: Folder where we will find the files with the classes that map the actions of each "Page".
- cypress.config.js: Cypress configuration.

## 💡 Tips

- Restart the container: If you need to restart the environment, use:

``` bash
docker-compose -f docker-compose.yml restart
```

- Stop the containers:
``` bash
docker-compose -f docker-compose.yml down
```

- Customize the container: Update the docker-compose.yml as needed to adjust to your environment.

With this, your Docker environment with Cypress is configured and ready to run tests in an isolated and efficient manner. 🎉

By RodrigoOBC
