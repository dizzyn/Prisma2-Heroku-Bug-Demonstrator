# Litehouse

## How to start

1. Clone project
2. clone `.env.example` to `.env`
3. `yarn` to install packages and generate graphql types (as _postinstall_ script)
4. `prisma2 migrate up --experimental` to create the database file (`dev.db`)
5. Now you are free to fly - just call `yarn dev`

## Deploy to Heroku

1. Create postgrass database there
2. Push and deploy (I have deployed to: [https://prisma2-demostrator.herokuapp.com/])
3. Visit that
