# Backend app

Project title: Music Library

Creating a music library with PostgreSQL and Docker. The library can contain artists which can be added to the database or retrieved from it. 

After having run PostgreSQL inside the Docker container, you can send requests to the API.

Post request - '/artists' 
Will allow you to add another artist in the format

{
"name" : "insertname",
"genre": "insertgenre"
}

Get request - '/artists'
Will allow you to retrieve ALL artists

'artists/id'
Will allow you to retrieve artists by ID


