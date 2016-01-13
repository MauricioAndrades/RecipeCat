### Description



The goal of this project is to put what you've learned to use to:

*   [Write a project proposal and get it approved by an instructor](#proposal)
*   [Follow an agile development workflow](#agile)
*   [Create and deploy a complete CRUD app](#create-deploy)
*   [Make a video highlighting the functionality of your app](#video)
*   [Complete a write-up of the project](#write-up)
*   [Add all three of these to an online portfolio](#portfolio)
*   [Present your work to the class](#present)



## Write a project proposal and get it approved by an instructor

For this project, you will be assigned into groups of four. Together, you will
need to come up with a product idea, and write it as a proposal that includes:

*   A project description
    *   Who uses it?
    *   What outputs do they need?
    *   What inputs are needed to generate those outputs?
*   A list of technologies that you plan to use
*   A well-defined and written-out feature list

There are some constraints around what technologies MUST be present in your
app. Check out [Create and deploy a web app](#create-deploy) below.

### Example Ideas

*   Library
*   Movie Database
*   Blog
*   Retail Store
*   Student Enrollment System
*   Sports Performance Database
*   Trip Itenerary



## Follow an agile development workflow

An instructor will act as your Product Owner, and will approve, prioritize, and
eventually accept your stories.

*   You are free to use whatever project management tools you want. You may
    continue to use Tracker, or you may try using Jira, Bitbucket, Trello, or
    another tool.
*   You must give your product owner access to whatever tool you use, as they
    will be responsible for prioritizing your work
*   Work with your team to come up with a few _digitally-generated_ wireframes.
    Use a tool such as InVision, Balsamiq, Lucid Chart, or Gliffy

Most of your day will be spent working on your user stories. Agile teams are
self-organizing, so you will be responsible for making commitments to each
other and dividing up your work efficiently. You will do daily standups where
each of you will answer:

*   What did you do yesterday?
*   What will you do today?
*   What are blocked on?

At the end of each day, you will go through the acceptance process with your
product owner:

*   You will show them your **deployed** app
*   They will review your code
*   They will accept or reject your delivered story, with feedback

At the end of the project, you will go through the retro process as if you were
going to continue working on this team. Answer the following questions:

*   What went well?
*   What went poorly?
*   What's next?



## Create and deploy a complete CRUD app

Your web app should:

*   CRUD
    *   Allow users to create, read, update, and delete data from a form
    *   Interact with a server-side A
*   HTML

    *   Make good use of semantic HTML tags
    *   Be well-indented, [validated](https://validator.w3.org/nu/), etc.
*   CSS

    *   Be well-designed
    *   Use either SASS or a styling framework like Bootstrap
        *   If you are using Bootstrap, please consider theming with something
            like bootswatch, customizing the download with SASS, or a
            [customizer](http://getbootstrap.com/customize/)
    *   Be well-indented and clean
    *   Use at least one web font
    *   Split code into separate files where appropriate
    *   Responsive design optional but strongly encouraged
*   JavaScript

    *   Well-indented, [linted](http://www.javascriptlint.com/online_lint.php),
        and use excellent variable names
    *   Split code into separate files where appropriate
    *   Optionally, use a test-driven development approach
*   Workflow

    *   Use wireframes to create your layouts before you build them
    *   Use a feature-branch workflow for your user stories
    *   Squash commits and issue pull requests rather merging directly to
        master

Your API should:

*   API
    *   Use express.js
    *   Have routes for create, read, update, and delete operations on multiple
        routes
    *   Be designed according to RESTful principles
    *   CRUD data from/to a relational database using SQL or an ORM
*   Auth
    *   Support functionality for three role types:
        *   A non-logged in user
        *   A logged-in user with limited permissions
        *   A logged-in superuser
    *   Support login via a social network
    *   Passwords should be hashed
    *   Use signed Cookies
*   Database
    *   Use PostGres
    *   Be normalized to 3rd Normal Form
    *   Be seeded with data
    *   Have a separate user for the application
*   Workflow
    *   Use a feature-branch workflow for your user stories
    *   Use an automated tool (such as Gulp) to build, deploy, and test your
        project
    *   Document dependencies in a `package.json` file
    *   Squash commits and issue pull requests rather merging directly to
        master

Note that you will end up with 3 deployments- your client-side web app, your
API, and your database. The code for these should also be stored in 3 separate
repositories.



## Make a video highlighting the functionality of your app

*   Make a 3-6 minute video explaining your project and demonstrating its
    features



## Complete a write-up of the project

*   Describe what the project is, the technologies you used, and some
    information about the workflow you followed.
*   1-2 tight paragraphs



## Add all three of these to an online portfolio

*   Create a portfolio on the [student portal](http://students.galvanize.com)
*   Link to your final deployed site, your video, your respositories, and your
    write-up
*   This will be added to your web development portfolio



## Present your work to the class

*   Be prepared to spend ~10 minutes presenting your work to the class.

* * *

This is a realistic approximation of what developing real products on a
software team is like. You will have approximately 20-25 hours of class time to
work on this. **It will not be enough time to do a good job on this project**.
Plan on spending extra time outside of class, and coordinate this time with
your team. This is another Big Deal Week, and you should put maximum effort
into making it successful. You can and should use your teammates, classmates on
other teams, and your instructors as learning resources, but this should be
your own work.
