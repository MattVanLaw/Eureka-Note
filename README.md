# Eureka!Note

## Summary
[Eureka!Note](https://eureka-note.herokuapp.com "Eureka! Live") is a single-page, RESTful web application for online note taking, created with Ruby on Rails and React-Redux.

* **Features**
  * Sign up, log in, and log out
  * Create, edit, and destroy notebooks and notes
  * Rich text-editing
  * Tag Notes
* Coming soon
  * Note Search
  * Filter by Tags

## Technologies
#### Back End
* Ruby on Rails
* PostgreSQL (database)
* AJAX with a JSON API

#### Front End
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [React-Quill](https://github.com/zenoamaro/react-quill) (text editing)
* [React-Search-Input](https://github.com/enkidevs/react-search-input) (search)
* [BCrypt](https://github.com/codahale/bcrypt-ruby) (authorization)
* [Devise](https://github.com/plataformatec/devise) (omniauth)

## Features
### User Authentication
On the back end, Rails, using BCrypt, saves a password digest (not the actual password) to the database. To log in, a user's password is hashed and checked against what is saved.

![Signup Form](https://github.com/MattVanLaw/Eureka-Note/blob/master/app/assets/images/signup.png?raw=true)

### Notes and Notebooks
The core functionality of Eureka!Note is in creating and editing notes. When a user logs in, they are directed to the All Notes page, a list of every note associated with their account.

![All Notes Page](https://github.com/MattVanLaw/Eureka-Note/blob/master/app/assets/images/all-notes.png?raw=true)

Through the Notebooks page, users may see a notebook with only its notes. Tags can be added discretely to each individual note. Also, for a more spread out and minimalist view, a note can be expanded to take up the entire window.

![Notebooks Page](https://github.com/MattVanLaw/Eureka-Note/blob/master/app/assets/images/notebooks.png?raw=true)

### Rich Text Editing
Through [React-Quill](https://github.com/zenoamaro/react-quill), Eureka!Note offers a number of common text-editing tools, such as multiple fonts, text color, bold, italic, underline, checkboxes and their more vanilla friends, ordered and unordered lists, links, image upload, etc.

### Search
Users can search for a keyword in either note title or body text, via the [React-Search-Input](https://github.com/enkidevs/react-search-input) component.
