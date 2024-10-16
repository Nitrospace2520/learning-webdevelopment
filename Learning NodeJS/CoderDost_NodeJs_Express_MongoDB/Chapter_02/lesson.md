Here I learnt about 'Web Server using NodeJS' and request-response to a server from client or visa-versa

# HTTP Request:-

There are 3 parts of a 'REQUEST'

## REQUEST LINE:

Example of REQUEST:

- **GET** : to get the data from the server
- **POST** : to post the data to the server
- **PUT** :
- **PATCH** : to update the data with newdata to the server
- **DELETE** : to delete the data from the server

## HEADERS

User Agent: browser name
accept-content: text/html
accept-language: en-US
cookie: adsahkdsakdas

## BODY

username: randomuser
password: 1234567

# HTTP RESPONSE:-

There are also 3 parts of a response

## STATUS LINE

- _Status code for `Success` is 2XX_
  **example** 200: OK, 201: Created, 202: Accepted

- _Status code for `Redirections` is 3XX_
  **example** 301: Moved Permanently, 302: Found

- _Status code for `Client Error` is 4XX_
  **example** 400: Bad Request, 401: Unauthorised, 403: Forbidden, 404: Not Found, 405: Method Not Allowed

- _Status code for `Server Error` is 5XX_
  **example** 500: Internal Server Error, 502: Bad Gateway

## HEADERS

server: express
content-type: text/html
content-length: 1000
expires: Tue, 27 Apr 1971

## BODY

```html
<html>
  <head>
    ...
  </head>
  <body>
    ...
  </body>
</html>
```
