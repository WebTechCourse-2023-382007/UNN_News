# UNN_News

## Getting started

Installation
-----------

1. `git clone https://github.com/WebTechCourse-2023-382007/UNN_News`
2. `cd UNN_News`
3. Create configuration file named `.env`:

```
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=
```

Running the application
-----------

Common run:
`docker-compose up`:

Clean run:


```
docker-compose down --volumes && docker image prune -a -f && docker-compose up -d
```

Or simply run sh script: `sh build-scripts/compose/docker-compose-clean-up.sh`
