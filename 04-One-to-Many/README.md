# One to Many Relationships

## Review
- Let's build a school class
- Our school should have @instructors = []
- But what if we want our instructors to be more robust?

#### Let's build Twitter!
 - Or... at least the Minimum Viable Product(MVP) aka Skateboard
 - https://i.pinimg.com/originals/18/11/c7/1811c7266a60cf87b8765de2a4c99edc.jpg

## Objectives

* Implement one object to many objects relationship
  * One user has many tweets
  * One tweet belongs to user
* Demonstrate single source of truth
* Infer type of method (class or instance) through naming conventions
* Practice passing custom objects as arguments to methods

## Deliverables

* Create a User class. The class should have these methods:
  * `#initialize` which takes a username and have a reader method for the username
  * `#tweets` that returns an array of Tweet instances
  * `#post_tweet` that takes a message, creates a new tweet, and adds it to the user's tweet collection
* Create a Tweet class. The class should have these methods:
  * `Tweet#message` that returns a string
  * `Tweet#user` that returns an instance of the user class
  * `Tweet.all` that returns all the Tweets created.
  * `Tweet#username` that returns the username of the tweet's user