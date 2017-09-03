# Data Version

This service for get data version.

## URL Test

```
http://xxx.xxx.xxx.xxx:xxxx/api/v1/versions/data
```

## URL Production

```
http://xxx.xxx.xxx.xxx:xxxx/api/v1/versions/data
```

## Method

```
GET
```

## Data Format

```
JSON
```

## Authentication   

```
Basic Authentication
```

## Basic Authentication Username and Password   

```
username = "witcastauth"
password = "1qazZAQ!"
```


## Header   

| Header type        | Example value    | Description                         | Mandatory/Optional  |
| ------------------ | ---------------- | ----------------------------------- | ------------------- |
| Content-Type       | application/json | Standards for the JSON              | Mandatory           |
| Authorization      | Basic 1234567    | Data from Basic Authentication      | Mandatory           |


## Request Data   

**None**

## Response Success   

| Field               | Data Type            | Description                    | Mandatory/Optional  |
| ------------------- | -------------------- | ------------------------------ | ------------------- |
| success             | boolean              | Value is "true"                | Mandatory           |
| data_version        | double               | Version of data   			  | Mandatory           |

**Example**

```json
{
    "success": true,
    "data_version": 3
}
```

## Response Fail   

| Field          | Data Type    | Description                | Mandatory/Optional  |
| -------------- | ------------ | -------------------------- | ------------------- |
| success        | boolean      | Value is "false"           | Mandatory           |
| error_message  | string       | Error message form server  | Mandatory           |

**Example**

```json
{
  "success": false,
  "error_message": "Error something."
}
```
