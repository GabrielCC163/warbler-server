Warbler API - Twitter clone - Udemy: Advanced Web Developer Bootcamp

Commands:

Create a file .env with a key exactly like: SECRET_KEY=kasjdnksajdnkasjd

Install nodemon and start the server: \
npm install -g nodemon \
cd warbler-server && nodemon

Start MongoDB locally: \
docker run --name mongodb -p 27017:27017 -d mongo

Install HTTPIE.

Signup a user: \
http POST localhost:8081/api/auth/signup username=firstuser password=secret email=test@firsttest.com

Signin: \
http POST localhost:8081/api/auth/signin password=secret email=test@firsttest.com

Create a message: \
Get the user ID and the token showed from signin request and past it here: \
http POST localhost:8081/api/users/<USER_ID>/messages "Authorization:Bearer <USER_TOKEN>" text="some message"

