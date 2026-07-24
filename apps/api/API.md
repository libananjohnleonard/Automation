# AI Ad Video Generator API

## Users

### GET Users

GET /users

### POST User

POST /users

Body:

{
"name":"",
"email":"",
"password":""
}

# Projects

### GET Projects

GET /projects

### POST Project

POST /projects

Body:

{
"title":"",
"description":"",
"userId":""
}

# Scenes

### POST Scene

POST /scenes

Body:

{
"projectId":"",
"script":"",
"duration":5,
"order":1
}

### GET Project Scenes

GET /scenes/project/:projectId

# Assets

### POST Asset

POST /assets

Body:

{
"projectId":"",
"type":"IMAGE",
"url":""
}

### GET Project Assets

GET /assets/project/:projectId

# Videos

### POST Generated Video

POST /videos

Body:

{
"projectId":"",
"videoUrl":"",
"status":"COMPLETED"
}

### GET Videos

GET /videos/project/:projectId
