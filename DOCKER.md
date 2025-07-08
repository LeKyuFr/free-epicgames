# Docker Instructions

This document explains how to build and run the Epic Games Free Games application using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose (optional, but recommended)

## Building the Docker Image

To build the Docker image, run the following command from the project root directory:

```bash
docker build -t epic-games-free .
```

## Running the Container

### Option 1: Using Docker directly

```bash
docker run epic-games-free
```

### Option 2: Using Docker Compose (Recommended)

```bash
docker-compose up
```

To run in detached mode:

```bash
docker-compose up -d
```

To stop the container:

```bash
docker-compose down
```

## Customizing the Country Code

The default example fetches games for the US market. To change this, you can:

1. Modify the `src/example.ts` file and change `'US'` to your desired country code
2. Rebuild the Docker image
3. Run the container again

Available country codes include: US, FR, DE, GB, ES, IT, etc.

## Environment Variables

You can pass environment variables to customize the behavior:

```bash
docker run -e NODE_ENV=development epic-games-free
```

## Logs

The application logs will be displayed in the console output when running the container.

## Troubleshooting

If you encounter issues:

1. Make sure Docker is running
2. Check if the Epic Games API is accessible from your network
3. Verify that the country code is valid
4. Check the container logs: `docker logs <container_id>`
