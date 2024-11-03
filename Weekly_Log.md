# Weekly Log for Financial Investment Advisor Project

# Week 1: [14-10-2024]
The first week was focused on setting up the foundational structure of the Financial Investment Advisor project. Key tasks included initializing the Django environment, planning out essential features, and laying the groundwork for the project’s main components.

## Things Completed
Project Setup and Configuration:

* Watched tutorials and researched how to use Django.
* Created a new Django project called “Financial Investment Advisor” and set up a virtual environment to manage dependencies.
* Configured settings.py, adding necessary default apps like 'django.contrib.admin', 'django.contrib.auth', and 'django.contrib.staticfiles'.
* Initialized the custom advisor app and added it to INSTALLED_APPS.
* Developed the index.html template to serve as a master layout, with placeholders for navigation, login, and register.
* Planned and started integrating admin controls.
* Began implementing Django’s built-in authentication system, including setting up URLs and views for user registration and login.
* Outlined admin functionalities, such as deleting inactive users, and planned features like account deletion for investors.

## Things That Didn’t Work

### Configuration Errors:
* Encountered problems with incorrect paths and syntax errors in settings.py, which initially prevented the server from running.
* Problem: Difficulty activating the virtual environment correctly, which caused errors when running Django commands.
* Solution: Researched and practiced proper activation commands for different operating systems to fix this.

## Future Goals for Week 2
*	Make sure the environment is set up properly and run it on a local host server.
*	Work on the registration and login pages using CSS and HTML.
*	Develop and link views for the Site Terms, Privacy Policy, and Unsubscribe pages.
*   Ensure smooth navigation between pages by configuring URL routing correctly.

# Week 2 : [20-10-2024]
Week 2 was dedicated to improving the design of the website, setting up essential features, and addressing persistent configuration problems. Significant effort went into making pages more user-friendly and responsive.

## Things Completed

### Created Registration page:
* Designed register.html and login.html using HTML and CSS Grid for better alignment and responsiveness. 
* Refined the layout to ensure a modern and user-friendly experience.

### New Views Implementation:
* Added functionality in views.py to manage the content for the Site Terms, Privacy Policy, and Unsubscribe pages.
* Connected these views to register.html using Django’s {% url %} template tag, making navigation between these pages easy.
* Updated urls.py to include routes for these new views and ensured that all links worked correctly within the templates.

### Progress on Register Page:
* Worked on the register page but encountered errors related to views and URL configurations, which prevented it from functioning properly.
* Researched solutions through multiple YouTube videos and online resources to resolve these issues.
* Learned more about Django’s built-in forms for login and registration.

### Removed Email Verification Temporarily:
* Encountered problems when trying to send a verification email upon user registration, which failed to work as expected.
* Temporarily removed the email verification feature to focus on core functionality but plan to revisit and implement it in the future.

## Things That Didn’t Work

* Persistent KeyError: 'admin':
* Despite ensuring 'django.contrib.admin' was listed in INSTALLED_APPS, the error continued to appear.
 
### Page Navigation Issues:
* Some links initially did not direct to the correct views, causing confusion during testing.
* Solution: Cleared pycache directories, rechecked configurations, and reinstalled Django to ensure no issues with the environment.

## Future Goals for Week 3
* Focus on resolving the KeyError: 'admin' and ensure the admin interface works properly.
* Finalize the design and functionality of the registration page.
* Begin working on login page.

# Week 3 : [28-10-2024]
Week 3 was a productive period focused on extensive debugging and adding new features. The KeyError: 'admin' and other issues were successfully resolved, and the core functionalities of the project are now operational.

## Things Completed

### Functionality Implementation:
* Made the register and login pages functional. Although basic styling has not been added yet, the pages are working as intended.
* Added a logout button for user sessions to enhance navigation.
* Created an admin account with comprehensive management features:
        * Admins can delete user accounts and manage user information, including updating passwords and login details upon user request.
* Resolved all previous admin-related issues, ensuring the project runs smoothly on the local host.


### Problems Faced
* Minor configuration challenges were encountered but were resolved with further testing and adjustments.


## Future Goals for Week 4

### Page Styling:
* Work on adding CSS to style the register, login, and other user interface pages to improve the visual design.

### Database Functionality:
* Start designing database models for assets and user profiles and run successful migrations.
* Develop and test CRUD operations for managing assets.

### Investment Simulation Tool:
* Begin working on the What-If simulation tool, focusing on data visualization for investment performance.

### Further Enhancements:
* Optimize the admin panel for better user management and consider adding more features for admin control if necessary.
