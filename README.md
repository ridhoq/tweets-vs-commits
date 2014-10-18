#tweets-vs-commits

##Installation
1. Clone the repo: `$git clone https://github.com/ridhoq/tweets-vs-commits.git`
2. Install dependencies: `$npm install && bower install`
3. Serve the app with gulp: `gulp serve`

##Implementation
I ended up using [OAuth.io](https://oauth.io/) to authenticate for the APIs. Since this app is 100% client side, there’s no way to secure consumer key/secrets. OAuth.io handles that for me without me having to build my own backend. The implementation is largely inspired by this [article](
http://www.chaosm.net/blog/2014/05/24/angularjs-twitter-authentication-with-oauth-io/).

##TODO
- Fix dates
- Merge tweets/commits into one list and render that list
- Show total tweets/commits for a given user (commits is more difficult since there is no API endpoint)
