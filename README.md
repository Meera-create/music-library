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


**Concepts focused on:**
-Database Design
-SQL
-Postgres
-CRUD Operations


TO DO LIST:
-I plan to add an albums page to the project, allowing the user to access albums but also add their own. The album will take the keys of ID, Name and Year.
- With further time, I would like to add a front end project to this backend to make it accessible to a user, maybe using React. 
