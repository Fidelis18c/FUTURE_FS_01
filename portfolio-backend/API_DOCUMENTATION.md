# 📄 Portfolio Contact Form API Documentation

This document provides a detailed overview of the available API endpoints, request/response formats, and security configurations.

---

## 🚀 Base URL
The API is hosted locally at:  
`http://localhost:5000/api`

---

## 🛠️ Endpoints

### 1. Submit Contact Form
**Endpoint**: `POST /contact`  
**Description**: Stores a new contact message in the database.

#### **Request Headers**
- `Content-Type: application/json`

#### **Request Body (JSON)**
| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `name` | `string` | **Yes** | Full name of the sender (Max 100 chars). |
| `email` | `string` | **Yes** | Valid email address of the sender. |
| `message` | `string` | **Yes** | The message content (Min 10 chars). |

**Example Request:**
```json
{
  "name": "Fidelis Joseph",
  "email": "fidelis@example.com",
  "message": "I would like to discuss a new project collaboration."
}
```

#### **Responses**

> [!TIP]
> **201 Created (Success)**
> ```json
> {
>   "status": "success",
>   "message": "Thank you! Your message has been sent successfully.",
>   "data": { "id": 1 }
> }
> ```

> [!WARNING]
> **400 Bad Request (Validation Error)**
> Happens if fields are missing or invalid (e.g. invalid email).
> ```json
> {
>   "status": "error",
>   "errors": [
>     { "msg": "Please provide a valid email address", "param": "email", "location": "body" }
>   ]
> }
> ```

> [!CAUTION]
> **429 Too Many Requests (Rate Limit)**
> Triggered if more than 50 requests are sent from the same IP within 1 hour.
> ```json
> {
>   "status": "error",
>   "message": "Too many contact messages sent from this IP, please try again after an hour."
> }
> ```

---

### 2. Fetch All Messages
**Endpoint**: `GET /contact`  
**Description**: Returns a list of all submitted messages, sorted by newest first.

#### **Responses**

> [!NOTE]
> **200 OK (Success)**
> ```json
> {
>   "status": "success",
>   "count": 2,
>   "data": [
>     {
>       "id": 2,
>       "name": "Jane Smith",
>       "email": "jane@example.com",
>       "message": "Hello, reaching out regarding your work.",
>       "createdAt": "2026-04-04T12:00:00.000Z"
>     },
>     {
>       "id": 1,
>       "name": "John Doe",
>       "email": "john@example.com",
>       "message": "Love your portfolio design!",
>       "createdAt": "2026-04-04T11:30:00.000Z"
>     }
>   ]
> }
> ```

---

### 3. Health Check
**Endpoint**: `GET /health`  
**Description**: Monitors API uptime and status.

**Success Response (200 OK):**
```json
{
  "status": "OK",
  "uptime": 124.55
}
```

---

## 🔒 Security & Rate Limiting
- **CORS**: Configured to restrict access. (Currently set to `*` for development; should be updated to your frontend URL in the [.env](file:///c:/Users/Fidelis%20Joseph/Desktop/PORTFOLIO/portfolio-backend/.env) file).
- **Helmet**: Secures the API by setting various HTTP headers.
- **Spam Protection**: The `POST /contact` endpoint is protected by a rate limiter (`50 requests/hour`).
- **SQLi Protection**: All database queries are parameterized via Prisma ORM.

---

## 🧪 Testing with cURL
You can test the submission endpoint directly from your terminal:

```bash
curl -X POST http://localhost:5000/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name": "Admin Test", "email": "admin@portfolio.com", "message": "Automated system test."}'
```
