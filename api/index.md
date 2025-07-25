# API Reference

Welcome to the API documentation. This section provides detailed information about available methods, endpoints, and data structures.

## Overview

This API documentation demonstrates how you can structure technical reference material using VitePress. You can document:

- REST API endpoints
- Function/method references
- Data structures and schemas
- Code examples and usage patterns

## Getting Started with API Docs

### Authentication

Most API endpoints require authentication. Include your API key in the request headers:

```http
Authorization: Bearer YOUR_API_KEY
```

### Base URL

All API requests should be made to:

```
https://api.yourdomain.com/v1
```

### Response Format

All responses are returned in JSON format:

```json
{
  "status": "success",
  "data": {},
  "message": "Operation completed successfully"
}
```

### Error Handling

Error responses follow this structure:

```json
{
  "status": "error",
  "error_code": "VALIDATION_ERROR",
  "message": "Invalid request parameters",
  "details": {}
}
```

## Common HTTP Status Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |
| 500 | Internal Server Error |

## Rate Limiting

API requests are rate limited to:

- **Free tier**: 100 requests per hour
- **Pro tier**: 1,000 requests per hour
- **Enterprise**: Custom limits

When you exceed the rate limit, you'll receive a `429 Too Many Requests` response.

## SDKs and Libraries

We provide official SDKs for popular programming languages:

::: code-group

```javascript [JavaScript]
npm install @yourapi/javascript-sdk
```

```python [Python]
pip install yourapi-python-sdk
```

```php [PHP]
composer require yourapi/php-sdk
```

:::

## Quick Examples

### Making Your First Request

::: code-group

```javascript [JavaScript]
const response = await fetch('https://api.yourdomain.com/v1/users', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data);
```

```python [Python]
import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get('https://api.yourdomain.com/v1/users', headers=headers)
data = response.json()
print(data)
```

```curl [cURL]
curl -X GET \
  'https://api.yourdomain.com/v1/users' \
  -H 'Authorization: Bearer YOUR_API_KEY' \
  -H 'Content-Type: application/json'
```

:::

## Next Steps

- [Methods Reference](/api/methods) - Detailed method documentation
- [Code Examples](https://github.com/SmooSenseAI/sense-table-doc/tree/main/examples) - Sample implementations

## Support

Need help? Contact our support team:

- **Email**: support@yourdomain.com
- **Discord**: [Join our community](https://discord.gg/your-server)
- **GitHub**: [Report issues](https://github.com/SmooSenseAI/sense-table-doc/issues) 