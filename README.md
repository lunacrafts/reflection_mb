# Overview

Mirrorboards is a powerful platform that provides businesses with specialized dashboards tailored to meet their specific needs. Our platform includes a comprehensive set of communication tools that make it easy to integrate different components and streamline your apps. With Mirrorboards, you'll have everything you need to take your business to the next level.

# Installation

To install Mirrorboards, you will need to have git and pnpm installed on your system. Follow these steps to install and set up Mirrorboards:

1. Clone the repository using the following command:

`git clone git@github.com:mirrorboards/reflection.git`

2. Install the required dependencies using the following command:

`pnpm install`

3. Run the development server using the following command:

`pnpm run dev`

# Installation (Docker)

Follow these steps to set up Mirrorboards services:

1. Navigate to the docker directory:

`cd docker`

2. Build the Docker image:

`docker-compose build`

3. Start the Docker containers:

`docker-compose up`

4. Then you can connect to mongodb with URI

`mongodb://mongodb1:27011,mongodb2:27012,mongodb3:27013/mirrorboards?replicaSet=rs0`

# Components

Mirrorboards consists of several components that work together to provide a comprehensive platform.

## mirrorboards

The mirrorboards component is the web application (shell) that serves as the integration point for all services and components.

## luna

Luna is a tRPC router that communicates with Auth and Mirrorboards service.

## narnia

Luna is a tRPC router that communicates with external APIs.

## reflection

The reflection component contains several sub-components that provide specialized UI elements and functionality for Mirrorboards:

- `core`: Contains basic UI components and hooks.
- `hooks`: Contains specialized hooks for handling commands and the palette.
- `layouts`: Contains specialized layouts for creating dashboards.
