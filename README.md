
##Hello There beautifull people of WTX :

as you can see this is my purposed solution to the challenge that was giving to me , i tried to fix and make sure that i am following the mockup and every detail in both mockup and challenge.md , 

Unfortunately time wasnt really on my side , 

as you will see i deployed the website on vercel already and it did setup  apip line , of the things that i loved about this challenge that i created a backlog for it [images here] , and then started to work on them ( divide and conqure) i tried to finish it all with everything related , but i  couldnt fix the login issue , i traced it alot , but couldnt found the bug in the UI 
as for the search i tried to fix it , but alot still can be done , so i tried to implement SSR ( server side rendering )  and i was trying to implement SWR for easier and simplier data fetching , but i couldnt finish it as wll . it think its needs more time from my side and a bit of discussion can go here . 


I have also a kind of Still todo things in this challenge and a list i d love to share , its not a big one , i would say , the challenge is completed almost , but thewre is always a space for improving , and if i had more time i would fix and enhance more .



as for all the other challenges and possible challenges , 

i created a seprate page called cchallenges that contains all the challenges and possible challenges with thier answers , 

i will put them here too:
 # The challenge

After you have a look around the code, we want to hear from you in what ways would you improve this. Feel free to ask questions about how it works.

1. What steps would you take to make this code better?
"so first i started by cleaning all the redundunt and repeated code , and then i tried to put a main shared  layout component that contains the main layout for the website and wrapped my app with it , and then i tried fixing and organizing more the way data fetched , by implementing SSR( server side rendering) and thinking of caching library , i tried not to use alot of 3rd party library so not to increase the load time "

2. Have you found any "red-flags"?
"alot of useEffect without depencies , same for useCallback no depencies at all , the way that fetching data and updating the states accordingly , the naming of some of the stuff "

3. If you were pairing with a junior dev, what would be your initial steps to start fixing this?
"first of as i am always having an agile mindset , for whatever project i am working on , i started by going through the code , and then identifing the possible challenges or pain points , and then i had my very one kinda of small backlog , with all UI implementation , and then functuinality , and by having a view of possible tickets , i started to work on them one by one , if i am pairing with a junior , i would discuss few of the tickets and then propably assign few of the simple ui and functionality tasks to them , like working on modal component or one of the needed fullfilling components or pages  , and also i did setup a github repo with a deployment enviroment and deploytment pipeline , and tried to commit each time i finsh something and then , so if i am pairing with a junior he can setup the repo and keep pushing as well once he commits . CI/CD always  "

4. What do you see as the major issues on this code?
to much redundant code , also so much useEffect with no dependencies or the wrong one , use callback with no dependencies as well , over all the way its fetching data . the way it perform the search without using query params or forward binding for updating the queries param, the way it loads the images , we can use lazy loading for that "

5. Do you identify any bugs by looking at the code (and seeing it working)?
"there is so much of redundant code , and repeated code , all the repeated useEffect , and so many useEffect without the right dependency , also the naming and api routes design can be enhanced "

6. What would you do to debug these problems with flashes while searching?
"to debug the problem , i got to use the dev tools to analyze from network tab , what is the request that is done , by doing that and From what i have seen on index.js i think it happnes as we fetch the data  inside the useEffect  and updating status which is not ideal ,also as there is so much use effect each for doing the same kinda of stuff . so my first thought  was to clean all the useEffect that is not wanted and then we can use built features on Next js like Serverside rendring ( SSR) to fetch the data on the server side and then if we want to optimize more , we can use cashing library to cash the data and only load when needed , like React Query or SWR --> for me i decided to use SWR as its type script supported , light weight and fits the use case"

# Possible challenges

1. If the filters selected are "brand=mercedes" and "model=actros" we want to send to the backend the query parameter "promotion=true". How would you proceed?
"first we will have to extract the query parames and check if they are equal top the desired brand and model , then we will push a new query param with promotion and as well will do a post request to our api route to add this paramter when the conditions are met"

2. How would you fix the login bug currently happening?
"So i had a look on current login page , and noticed he is saving the input as user name and password , and then it ges send to the api created in auth.ts api route toi validate if its the right user name and password , tbh i checked the input is recorded and gets delivered to the endpoint and the validation is always wrong , i kinda didnt have enough time to fix complelety , i would need more time to debug it even more "

3. Assuming that the authentication bug is fixed (and that we get a token on the `/api/auth` request), how would you handle the authentication state to guarantee that the my-account page works?
"i would useContext so i can make sure the authenticated page is when user loged in and keeping the status as logged in , maybe save the login status on local storage for astart and then useContext for more organized way "

4. Have you checked the loading state? What would be your approach to improve it? 
"first on top of my head we can use a styled sekelton componet for a start to load instead of the app is loading"

5. If you had to make this page faster, what would you do?
"so first we will start by cutting any 3rd libraries that is not needed , and then we can use SWR and other caching technices for the data fetching , we can install some analysis and montering tools maybe , debug using the DEVtools to see the request and what its taking time to load or to retrieve , use lazyloading to load the images "

6. Imagine you had a loader implemented on the search page, but now you want to use it in multiple other pages, what would you do?
"I would make a universal Loader component that is statfull and can be used in different pages and share it between those different pages"

7. Any tools/approaches you would use to make this code better?
"so when i approached this project i tried not to use as much tools or 3d party library as possible , as not to add to the challenge size and as to keep it fast and light , i used only material UI for the accordion on these challenges to save my time , i used SWR , and thats it , if i would love to add tools , i would probably bring tailwind css , but i didnt want to change the styling already there , as to consider if there is part of the team , that wont know it for example , i would propaply use party town to make the wibe site faster , i would use as well some of the analytics , and montering tools"

8. What do you think in missing in order to make this code reach production?
"I tried to deployed this on production as you can use it already on production , but i think we will need to assign ( if there is any) enviroment variables , and then do a build and upload or files ( or somewebsites like vercel can do this to you"







Last but not least , hope you guys having an amaizng time and Thank you 