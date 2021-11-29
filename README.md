# Hello and welcome to the Company.com Full Stack Software Engineer coding challenge!

## Get Started

1. Checkout a new branch from the `main` branch with the following format: `firstname-lastname`.
   - Example: `git checkout main && git checkout -b "charlie-wilhite"`
2. Set a timer for yourself at this point for 5.5 hours.
3. Complete all your work for the below requirements within the `/client` and `/server` directories.

## Server Requirements

1. Has an endpoint `/products` with a `GET` method that should fetch all products in the database "products" collection.
2. Has an endpoint `/search/:name` with a `GET` method that should fetch all products that contain the `name` path parameter in their name (`product.name`).
3. Has an endpoint `/cart` with a `POST` method that allows your client to store a persistent shopping cart experience.
4. Has an endpoint `/cart` with a `GET` method that allows your client to fetch their current cart experience.

### Notes

The implementation of server should be done with Node, or a Node library of your choice. This is because the mock database was built with `lowdb` and your server should use `lowdb` methods to fetch and insert data. ([`lowdb` documentation](https://github.com/typicode/lowdb)). Look at the `_lowdb-example.js`, and `_lowdb-example.json` files to get an idea for how it works. You can also run `node _lowdb-example.js` in your CLI to test the output in that file. The actual database you should interface with is `db.json`.

You should NOT use the `lowdb sync` adapters, the goal of this local database is to emulate async data fetching.

## Client Requirements

1. Renders a main "Product List" view of all products and displays their `name`, `features`, `price`, and `image`.
   - Each Product has a button that allows you to add to "Shopping Cart"
2. Should have a "Product Search" feature that allows you to search for Products by name.
   - Should make user of the `/search` endpoint in your server
   - Should replace the currently rendered "Product List" with only the Products returned from the search endpoint.
3. Has a "Shopping Cart" feature that should have the following functionality:
   - Lets you add products to it
   - Lets you remove products from it
   - Calculates and renders the total price correctly
   - Should make use of the `/cart` endpoint in your server and be persistent
   - Does NOT need any purchase functionality

### Notes:

**The client can be implemented with the language or framework of your choice. And you may add any additional dependencies you may need.**

Both the server and the client only need to run in this local environment, no deployment is necessary.

Feel free to google things as needed, and please emulate what your normal coding environment would be like.

## Submit

1. Stage and commit your final changes to your feature branch.
2. Push your branch to the remote origin.
