# FriendKeeper
FriendKeeper is a fullstack chrome extension built by Dylan Thorwaldson that allows users to receive customized desktop notifications to help build and maintain friendships.

Have you ever forgotten a friends birthday or anniversary? Or thought of a friend you haven’t heard from in a while and wish you would stay in touch more consistently? FriendKeeper can help! Let's take a look at how:


![Popup](https://github.com/DTThor/FriendKeeper/blob/master/readme_screencaps/popup-clicked.png "Popup")

Firstly, click on our handy chrome extension browser button to launch FriendKeeper's web application!

![Landing](https://github.com/DTThor/FriendKeeper/blob/master/readme_screencaps/landing.png "Landing")

Now that you're on the landing page, you can see your list of current friendships FriendKeeper is helping you maintain. Let's add a friend!

![addfriend](https://github.com/DTThor/FriendKeeper/blob/master/readme_screencaps/addfriend_form.png "addfriend")

Users input their friends information like name, birthday, anniversary, and how often the user would like to contact that friend via 3 different mediums: Email, Phone, and Text.

Once the user submits data for a friend, chrome will send a friendly reminder to the user’s desktop when it’s time to reach out to the given friend on whatever medium the user provides. This is MVP.


![editfriend](https://github.com/DTThor/FriendKeeper/blob/master/readme_screencaps/editfriend_form.png "editfriend")

If anything changes, or a user wants to reach out to his/her friends more (or less) often, users have the ability to edit each friend's information, or delete them entirely (sad face).

![sample](https://github.com/DTThor/FriendKeeper/blob/master/readme_screencaps/sample_notification.png "sample")

When it's time to reach out to a friend, FriendKeeper will send this friendly reminder based on the users input type and duration!

## Tech Stack
### Frontend
* HTML & CSS(Flexbox)
* Chrome Extension (JS and JSON)
* AngularJS
### Backend
* Node
* Express
* PostgreSQL
### Deployment
* Heroku

## Challenges
FriendKeeper is the very first chrome extension I've built, so the newness of the technology brought it's own host of challenges. Beyond that, however, a main challenge that I faced was actually getting the chrome notifications to not only send, but to send at the correct time. Investigating what documentation is current/applicable for Chrome apps/extensions proved to be a challenge, especially considering the fact that Chrome apps will be deprecated soon, and that the apps and extensions documentation is very similar. I overcame this challenge by actually using a notification system that is browser agnostic, so as not to rely on Chrome's notification API.

## Video!
Check out the below demo video, and watch FriendKeeper help save a friendship!

<a href="http://www.youtube.com/watch?feature=player_embedded&v=bv_pRo9f0M8" target="_blank"><img src="http://img.youtube.com/vi/bv_pRo9f0M8/0.jpg" 
alt="FriendKeeper Walkthrough" width="240" height="180" border="10" /></a>
