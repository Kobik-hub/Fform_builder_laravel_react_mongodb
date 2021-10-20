
# Form builder

A brief description of what this project does and who it's for


## Tech Stack

**Client:** React, , Bootstrap

**Server:** Laravel, MongoDB

  
## Installation

Install my-project with npm

```bash
Make sure you have the MongoDB PHP driver installed. You can find installation instructions at 
http://php.net/manual/en/mongodb.installation.php 
the db connection in the .env file is 
DB_CONNECTION=mongodb
DB_HOST=127.0.0.1
DB_PORT=27017
DB_DATABASE=form_builder
DB_USERNAME=
DB_PASSWORD=
if you want to use remoted db your can change that there.

To run the app write on the console 'npm run serve'
```
    
## API Reference

#### Register

```http
  Post /api/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. |
| `email` | `string` | **Required**.  |
| `password` | `string` | **Required**.  |
| `password_confirmation` | `string` | **Required**. |


#### Login

```http
  Post /api/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. |
| `password`      | `string` | **Required**. |

#### Create form

```http
  Post /api/forms/create
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. |
| `user_id`      | `string` | **Required**. |
| `form_items`      | `[object:{name,type}]` | **Required**. |

#### Get all users forms

```http
  Get /api/users/forms/{formId}
```

#### Get form

```http
  Get /api/forms/{formId}
```

#### Submit form

```http
  Post /api/forms/{formId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `form_id`      | `string` | **Required**. |
| `from_data`      | `[object:{name,input html typte}]` | **Required**. |




