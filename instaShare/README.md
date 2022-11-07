In this project i have build a Insta Share App (clone) by applying the react concepts like class component,list and keys , component lifecycle methods, routing concepts, authentication, and authorization.

In this project the data fetched from an internal server using a class component and displaying that data using component lifecycle methods, routing concepts, authentication, and authorization, and adding responsiveness to the website.

Prerequisites UI Prerequisites Figma?

Figma is a vector graphics editor and prototyping tool which is primarily web-based. You can check more info on the <a href="https://www.figma.com/" Cloudinary to get image URLs from Cloudinary

The app have the following functionalities (Routes)

Login Route

When an invalid username and password are provided and the Login button is clicked, then the respective error message received from the response is displayed When a valid username and password are provided and the Login button is clicked, then the page navigated to the Home Route When an unauthenticated user tries to access the Home Route, Profile Route, and User Profile Route, then the page navigated to the Login Route When an authenticated user tries to access the Home Route, Profile Route, and User Profile Route, then the page will be navigated to the respective route When an authenticated user tries to access the Login Route, then the page will navigated to the Home Route Header

When the Website logo is clicked, then the page navigated to the Home Route When the Home link in the Header is clicked, then the page navigated to the Home Route When the Profile link in the Header is clicked, then the page navigated to the My Profile Route When the Logout button is clicked, then the page navigated to the Login Route Home Route

When an authenticated user opens the Home Route

An HTTP GET request will be made to User Stories API URL with jwt_token in the Cookies

Loader is displayed while fetching the data

After the data is fetched successfully, the response received will be displayed

If the HTTP GET request made is unsuccessful, then the failure view will be displayed

When the Retry button in the failure view is clicked, an HTTP GET request will made to the User Stories API URL

An HTTP GET request will made to the Posts API URL with jwt_token in the Cookies

Loader will displayed while fetching the data After the data is fetched successfully, the response received is displayed If the HTTP GET request made is unsuccessful, then the failure view will displayed When the Retry button is clicked, an HTTP GET request made to the Posts API URL When the username in the particular post is clicked, then the page will navigated to the User Details Route

When the Like icon (FcLike) is clicked,

An HTTP POST request will be made to the Post Like API URL Icon will change to Unlike icon (BsHeart) Likes count of that particular post will be incremented by one When the Unlike icon is clicked,

An HTTP POST request will be made to the Post Like API URL Icon will change to Like icon Likes count of that particular post will be decremented by one User Profile Route

When an authenticated user opens the User Profile Route

An HTTP GET request should be made to the User Profile API URL with jwt_token in the Cookies and user_id as a path parameter

Loader will be displayed while fetching the data After the data is fetched successfully, the response received will displayed If the HTTP GET request made is unsuccessful, then the failure view displayed When the Retry button is clicked, an HTTP GET request will be made to the User Profile API URL If the list of posts are empty, then the BiCamera from react-icons is displayed My Profile Route

When an authenticated user opens the My Profile Route

An HTTP GET request should be made to the My Profile API URL with jwt_token in the Cookies

Loader will displayed while fetching the data After the data is fetched successfully, the response received will displayed If the HTTP GET request made is unsuccessful, then the failure view displayed When the Retry button is clicked, an HTTP GET request will be made to the My Profile API URL Search Functionality

When an authenticated user search posts using post caption by clicking on the Search icon

An HTTP GET request will be made to the Search Posts API URL with jwt_token in the Cookies and search post as a query parameter

Loader will be displayed while fetching the data After the data is fetched successfully, the response will displayed If the HTTP GET request made is unsuccessful, then the failure view will displayed When the Retry button is clicked, an HTTP GET request will made to the Search Posts API URL When the username in the particular post is clicked, then the page will be navigated to the User Details Route

When the Like icon is clicked,

An HTTP POST request will made to the Post Like API URL Icon will change to Unlike icon Likes count of that particular post incremented by one When the Unlike icon is clicked,

An HTTP POST request will be made to the Post Like API URL Icon will change to Like icon Likes count of that particular post decremented by one Not Found Route

When a random path is provided in the URL, then the page will navigated to the Not Found Route Important Note In this project, the data we have sent through POST-APIs are not saved in the Database. If you refresh the page, the changes will not be persisted Whenever you do a POST-API call, we are sending a mock object as a response Routes

Login Route component when the path in URL matches /login Home Route component when the path in URL matches / MyProfile Route component when the path in URL matches /my-profile UserProfile Route component when the path in URL matches /users/:id Resources Login API

API: https://apis.ccbp.in/login

User Stories API

API: https://apis.ccbp.in/insta-share/stories

Posts API

API: https://apis.ccbp.in/insta-share/posts

Post Like API

API: https://apis.ccbp.in/insta-share/posts/{postId}/like

My Profile API

API: https://apis.ccbp.in/insta-share/my-profile

User Profile API

API: https://apis.ccbp.in/insta-share/users/{userId}

Search Posts API

API: https://apis.ccbp.in/insta-share/posts?search={searchInput}

User Credentials You can use any one of the following credentials

username: rahul password: rahul@2021 username: aakash password: sky@007 username: agastya password: myth#789 username: advika password: world@5 username: binita password: modest\*6
