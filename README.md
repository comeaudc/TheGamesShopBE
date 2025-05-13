# The GamesShop BackEnd

## Brief Desc:
Server built to serve data from mongoDB to our frontend.

## Schemas:
- Users
    - name
    - pwd
    - email
    - admin: bool
- Games
    - name
    - category
    - price
    - numOfPlayer
    - desc
    - qty
- Cart
    - items
    - totaltotal price
    - userID

## Routes
- Users
    - post user
    - read user
    - edit user - stretch
    - delete user - stretch

- Game
    - get all
    - get one game by ID
    - admin update
    - admin delete


- Cart
    - add to cart
    - remove from cart
    - "checkout"

## Technologies
 - Mongoose
 - express
 - dotenv
 - logger/morgan
 -cors - for connecting to out front end