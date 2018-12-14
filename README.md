# putihclue
 Create Simple CRUD API

* Express
* MongoDB
* Mongoose
* Multer
* Bcrypt
* Jsonwebtoken


## Database API-Schema

### Auth

Method | endpoint       | Description
------ | -------------- | --------------------------
POST   | `/api/register` | register with new user data
POST   | `/api/login` | login with user data


### Users

Method | endpoint     | Description
------ | ------------ | -----------
GET    | `/users`     | Get All
GET    | `/users/:id` | get by:id
PUT    | `/users/:id` | update one

### Item

Method | endpoint     | Description
------ | ------------ | ----------------
GET    | `/api/item`     | Get All
GET    | `/api/item:id` | get by:id
POST   | `/api/item`     | post by: user id
DELETE | `/api/item:id` | delete by:id
PUT    | `/api/item:id` | update one

### Tenant

Method | endpoint                   | Description
------ | -------------------------- | ------------
GET    | `/api/tenant`          | Get All
GET    | `/api/tenant/:id` | get by:id
DELETE | `/api/tenant/:id`               | delete by:id
PUT | `/api/tenant/:id`               | update one
POST | `/api/tenant`               | create new tenant


### Order

Method | endpoint                   | Description
------ | -------------------------- | ------------
GET    | `/api/order`          | Get All order list
GET    | `/api/order/:id` | get by:id
DELETE | `/api/order/:id`               | delete order by:id
PUT | `/api/order/:id`               | update order
POST | `/api/order`               | create new order by ._id user and ._id item


