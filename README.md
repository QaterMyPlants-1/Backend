# Backend

## Authentication

**/api/auth/register - POST -** Singing up.

*What this endpoint requires:* `username` and `password`.
*You are also able to send a `phonenumber` to this endpoint, but this isn't required.*

**/api/auth/login - POST -** Logging in.

*What this endpoint requires:* `username` and `password`.

**/api/auth/logout - GET -** Logging out.

## EndPoints

## Plants

**/api/plants- GET -** Retrieve all plants.


**/api/plants - POST -** Add a plant.

*What this endpoint requires:* `name` and `species`.


**/api/plants/:id - PUT -** To edit plant.

*What this endpoint requires:* `name` and `species`.

**/api/plants/:id - DELETE -** To delete plant.

## Users

**/api/users/:id- GET -** Retrieve specified user.

**/api/users/:id - PUT -** To edit user.

*What this endpoint requires:* `username` and `password`.
*You are also able to send a `phonenumber` to this endpoint, but this isn't required.*

**/api/user/:id - DELETE -** To delete user.

## Deployment

https://watermyplants26.herokuapp.com/

## Built With

* **Node** - The language used to build the API
* **Express** - The framework used to build the API


# Authors

* **Anthony Carrillo** - *API* - [GitHub](https://github.com/anthony2698)

