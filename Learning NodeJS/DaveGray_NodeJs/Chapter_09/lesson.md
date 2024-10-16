# JWT => JSON Web Tokens

- After authentication for login two `tokens` are generated. Those are -
  - `Access Token` is a Short Time token which expires within 15mins.
  - `Refresh Token` is a Long Time token which expires within 1-2 hrs or days.
- Two mainly `Hazards` are there. Those are
  - `XSS`: Cross-Site Scripting
  - `CSRF`: CS Request Forgery

### `Access Token` :

- send as JSON client stores in memory, Do Not store in local storage or cookie to avoid the two hazards
- issued at Authorization Client uses for API Access until expires Verified with Middleware. New Token issued at Refresh request
- generate Access Token by :

```javascript
const ACCESS_TOKEN = require("crypto").randomBytes(64).toString("hex");
```

### `Refresh Token`:

- send as httpOnly cookie Not accessible via JavaScript Must have expiry at some point and remember that Refresh Token does not generate another Refresh Token
- issued at Authorization Client uses to request new Access Token. Verified with endpoint & database. Must be allowed to expire or logout
- generate Access Token by :

```javascript
const REFRESH_TOKEN = require("crypto").randomBytes(64).toString("hex");
```

#

- All required packages for this JWT Chapter -
  - dotenv
  - jsonwebtoken
  - cookie-parser
