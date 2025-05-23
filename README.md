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
    - login user
    - edit user - stretch
    - delete user - stretch

- Game
    - get all
    - get one game by ID - show route - future
    - admin create
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

 # Cart Routes:
  1. create a cartRoutes file

-private routes - userId is in req.header from middleware
  - add item to cart
    -trycatch
    -get userID from reqheader
    - find game  id - parameter or req.body
    - find user by id
        - res w/error
    -find cart by id
        -res w/error
    - push cart item to array
    -save cart
    -respond

  - remove item from cart
    -trycatch
    -get userID from reqheader
    - find game  id - parameter or req.body
    - find user by id
        - res w/error
    -find card by id
        -res w/error
    - filter/map array by item id and adjust
    -save cart
    -respond

  - get all cart items - show cart
    -trycatch
        -get cart by id and ``populate``
            - err check
        -respond with cart