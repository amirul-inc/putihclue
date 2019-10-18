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
GET    | `/api/users`     | Get All
GET    | `/api/users/:id` | get by:id
PUT    | `/api/users/:id` | update one

### Room

Method | endpoint     | Description
------ | ------------ | ----------------
GET    | `/api/room`     | Get All
GET    | `/api/room:id` | get by:id
POST   | `/api/room`     | post 
DELETE | `/api/room:id` | delete by:id
PUT    | `/api/room:id` | update one


###  Order Room

Method | endpoint                   | Description
------ | -------------------------- | ------------
GET    | `/api/room/order`          | Get All order list
GET    | `/api/room/order/:id` | get by:id
DELETE | `/api/room/order/:id`               | delete order by:id
PUT | `/api/room/order/:id`               | update order
POST | `/api/room/order`               | create new order by ._id user and ._id room


### Event

Method | endpoint     | Description
------ | ------------ | ----------------
GET    | `/api/event`     | Get All
GET    | `/api/event:id` | get by:id
POST   | `/api/event`     | post 
DELETE | `/api/event:id` | delete by:id
PUT    | `/api/event:id` | update one

### Order Event

Method | endpoint                   | Description
------ | -------------------------- | ------------
GET    | `/api/event/order`          | Get All order list
GET    | `/api/event/order/:id` | get by:id
DELETE | `/api/event/order/:id`               | delete order by:id
PUT | `/api/event/order/:id`               | update order
POST | `/api/event/order`               | create new order by ._id user and ._id event

### Tenant

Method | endpoint                   | Description
------ | -------------------------- | ------------
GET    | `/api/tenant`          | Get All
GET    | `/api/tenant/:id` | get by:id
DELETE | `/api/tenant/:id`               | delete by:id
PUT | `/api/tenant/:id`               | update one
POST | `/api/tenant`               | create new tenant


Ini adalah project untuk belajar fullstack javascript