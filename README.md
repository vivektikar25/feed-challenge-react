# FlipGive Feed Challenge

The API Endpoint details can be found below.

We'd LOVE for you to write tests!! We also value code which is clean, consistent, and easily understandable.

When you're done, be prepared to possibly review this code together and be able explain why you chose to write it the way you did.

Please share your code with us either on GitHub, or if privacy is important to you, there are free private repos with BitBucket (share with leighhalliday@gmail.com).

## React

Fork/Clone this repo and implement the `Activities` component. You must load the data before you can display it. There are 2 types of activities: `shared` and `posted`... for the different activities, you will need to pull the related data using the additional endpoints provided below. The `object` field contains a string with the ID needed to pull.

Do your best to make it efficient. The API is written poorly (totally beyond our control), and responds in 500ms... so the fewer requests we can make the better.

It is up to you to decide how to display these activities and whether to use additional components, but the `shared` should show the url that the user (actor) has shared, and the `posted` should show the content that the user (actor) has posted. You should try to make this page look good.

It's up to you whether you want to use component state, MobX or Redux.

## React Bonus

Have filters/toggles to show only the "shared" activities or only the "posted" activities, or all of the activities.

## Endpoints

* https://feed-challenge-api.herokuapp.com/activities Index of activities
* https://feed-challenge-api.herokuapp.com/shares/1 An individual share.
* https://feed-challenge-api.herokuapp.com/shares?ids=1,2,3 Index of shares, filtered by comma separated list of ids.
* https://feed-challenge-api.herokuapp.com/posts/1 An individual post.
* https://feed-challenge-api.herokuapp.com/posts?ids=1,2,3 Index of posts, filtered by comma separated list of ids.
