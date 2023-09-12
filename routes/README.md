## APIs

---

> ### Signup User

- Route: `/`
- Method: `POST`
- **Body:**

```json
{
	"name": "Andrew Mark"
}
```

- **Response:**

201 Success

```json
{
	"user": {
		"id": "650099dc4903338ba48c18d6",
		"name": "Andrew Mark"
	}
}
```

> ### Get user by Id

- Route: `/api/650099dc4903338ba48c18d6`
- Method: `GET`
- **Response:**

200 Success

```json
[
	{
		"id": "650099dc4903338ba48c18d6",
		"name": "Andrew Mark"
	}
]
```

> ### Update User Profile

- Route: `/api/650099dc4903338ba48c18d6`
- Method: `PATCH`
- **Body:**

```json
{
	"name":"Nonso Tester
}
```

- **Response:**

201 Success

```json
{
	"name": "Nonso Tester"
}
```

> ### Delete User

- Route: `/api/650099dc4903338ba48c18d6`
- Method: `DELETE`

- **Response:**

200 Success

```json
{
	"message": "User Deleted",
	"name": "Nonso Tester"
}
```

---
