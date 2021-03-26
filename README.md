# LocaMap-backend-challenge

Welcome to our Engineering Challenge repository 🖖

If you found this repository it probably means that you are participating in our recruitment process. Thank you for your time and energy.

Please fork this repo before you start working on the challenge, read it careful and take your time and think about the solution. Also, please fork this repository because we will evaluate the code on the fork.

This is an opportunity for us both to work together and get to know each other in a more technical way. If you have any doubts please open and issue and we'll reach out to help.

## Challenge Objective

At Abord, Travel is the very core of our product. We have deep integrations of maps and locations almost on every screen within the app. Your objective for this challenge is to build an API that takes a latitude and longitude coordinate pair and return with the name of the country.

There are plenty of ways this can be implemented - We only need you to give us one.
Feel free to use any third party resources or APIs as long as you document about it in the ReadME.

> HAVE FUN!!

## Problem and Solution

The goal is to create an API that returns the country that a pair of coordinates is in. My solution was to create a NodeJS Server and use the google maps geocoding api to find what country the pair of coordinates was in.

## Reasoing for Technical choices

I have solved a similar problem before for my Basketball Court finder web app so I chose to use the Google Maps API since I had some experiance with it. I chose to use NodeJS and ExpressJS since I had the most experiance with these frameworks.

## Tradeoffs

I would have used TypeScript, to help build easier to understand and bug free code. Since this is an interview challenge problem and the goal is to complete it within 2-3 hours, I didn't see it as worth it to setup Typescript for this project. Google Maps API also has some setup required before they can use their API, for the first 6 months you get free credits but after that you must pay after 40,000 API calls. However for this project I doubt I will surpass 40,000 api calls so I saw this trade off as worth it.

## How to use API

You can reach the API at https://interview-challenge-1.herokuapp.com/api/location. It is a POST endpoint, so you need to properties in the body part of the request. it should be formatted as follows:

```
{
    "lat": Insert latitude here,
    "lon": Insert longitude here
}
```

## How to use this repo

You will have to create your own google api account to get a google api key. Once you get the API key you can just make a key_dev.js file in the config folder and enter the key similar to how keys_prod.js does it. After that you just clone the repo, install the dependencies, run npm run start and you are ready to go!.

## Relevent work

My github has some code I am proud of, the basketball court finder I mentioned earlier can be visited at https://ball-runner.herokuapp.com/
