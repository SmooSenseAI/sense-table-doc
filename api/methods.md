# API Methods

Detailed documentation for all available API methods and endpoints.

## User Management

### Get User

Retrieve information about a specific user.

**Endpoint**: `GET /users/{user_id}`

**Parameters**:

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | string | Yes | Unique identifier for the user |
| `include_profile` | boolean | No | Whether to include profile data (default: false) |

**Example Request**:

::: code-group

```javascript [JavaScript]
const response = await fetch('/api/v1/users/123?include_profile=true', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
});

const user = await response.json();
```

```python [Python]
import requests

response = requests.get(
    '/api/v1/users/123',
    params={'include_profile': True},
    headers={'Authorization': 'Bearer YOUR_API_KEY'}
)

user = response.json()
```

```curl [cURL]
curl -X GET \
  '/api/v1/users/123?include_profile=true' \
  -H 'Authorization: Bearer YOUR_API_KEY'
```

:::

**Example Response**:

```json
{
  "status": "success",
  "data": {
    "id": "123",
    "username": "john_doe",
    "email": "john@example.com",
    "created_at": "2024-01-15T10:30:00Z",
    "profile": {
      "first_name": "John",
      "last_name": "Doe",
      "avatar_url": "https://example.com/avatar.jpg"
    }
  }
}
```

### Create User

Create a new user account.

**Endpoint**: `POST /users`

**Request Body**:

```json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "profile": {
    "first_name": "string",
    "last_name": "string"
  }
}
```

**Example**:

::: code-group

```javascript [JavaScript]
const response = await fetch('/api/v1/users', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    username: 'jane_doe',
    email: 'jane@example.com',
    password: 'secure_password123',
    profile: {
      first_name: 'Jane',
      last_name: 'Doe'
    }
  })
});

const result = await response.json();
```

```python [Python]
import requests

data = {
    'username': 'jane_doe',
    'email': 'jane@example.com',
    'password': 'secure_password123',
    'profile': {
        'first_name': 'Jane',
        'last_name': 'Doe'
    }
}

response = requests.post(
    '/api/v1/users',
    json=data,
    headers={'Authorization': 'Bearer YOUR_API_KEY'}
)

result = response.json()
```

:::

## Data Management

### Upload File

Upload a file to the server.

**Endpoint**: `POST /files`

**Content-Type**: `multipart/form-data`

**Parameters**:

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file` | file | Yes | The file to upload |
| `folder` | string | No | Target folder path |
| `public` | boolean | No | Make file publicly accessible |

**Example**:

::: code-group

```javascript [JavaScript]
const formData = new FormData();
formData.append('file', fileInput.files[0]);
formData.append('folder', 'documents');
formData.append('public', 'true');

const response = await fetch('/api/v1/files', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: formData
});

const result = await response.json();
```

```python [Python]
import requests

files = {'file': open('document.pdf', 'rb')}
data = {
    'folder': 'documents',
    'public': True
}

response = requests.post(
    '/api/v1/files',
    files=files,
    data=data,
    headers={'Authorization': 'Bearer YOUR_API_KEY'}
)

result = response.json()
```

```curl [cURL]
curl -X POST \
  '/api/v1/files' \
  -H 'Authorization: Bearer YOUR_API_KEY' \
  -F 'file=@document.pdf' \
  -F 'folder=documents' \
  -F 'public=true'
```

:::

## WebSocket Events

For real-time functionality, connect to our WebSocket endpoint.

**Endpoint**: `wss://api.yourdomain.com/v1/ws`

### Connection

```javascript
const ws = new WebSocket('wss://api.yourdomain.com/v1/ws?token=YOUR_API_KEY');

ws.onopen = function(event) {
  console.log('Connected to WebSocket');
};

ws.onmessage = function(event) {
  const data = JSON.parse(event.data);
  console.log('Received:', data);
};
```

### Event Types

#### User Online Status

Triggered when a user's online status changes.

```json
{
  "event": "user_status_changed",
  "data": {
    "user_id": "123",
    "status": "online",
    "timestamp": "2024-01-15T10:30:00Z"
  }
}
```

#### New Message

Triggered when a new message is received.

```json
{
  "event": "new_message",
  "data": {
    "message_id": "msg_456",
    "from_user_id": "123",
    "content": "Hello, world!",
    "timestamp": "2024-01-15T10:30:00Z"
  }
}
```

## Error Codes

| Code | Description | Solution |
|------|-------------|----------|
| `INVALID_TOKEN` | API token is invalid or expired | Generate a new API token |
| `RATE_LIMIT_EXCEEDED` | Too many requests | Wait before making more requests |
| `VALIDATION_ERROR` | Request data validation failed | Check request parameters |
| `RESOURCE_NOT_FOUND` | Requested resource doesn't exist | Verify the resource ID |
| `INSUFFICIENT_PERMISSIONS` | User lacks required permissions | Contact administrator |

## Webhooks

Configure webhooks to receive real-time notifications about events.

### Setup

1. Go to your dashboard settings
2. Add a webhook URL
3. Select events to subscribe to
4. Save your configuration

### Example Payload

```json
{
  "event": "user.created",
  "data": {
    "id": "123",
    "username": "new_user",
    "email": "newuser@example.com"
  },
  "timestamp": "2024-01-15T10:30:00Z",
  "signature": "sha256=abc123..."
}
```

### Verifying Webhooks

```javascript
const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
    
  return signature === `sha256=${expectedSignature}`;
}
``` 