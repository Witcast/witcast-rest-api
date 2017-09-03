# Main Episode

This service for get main episode.

## URL Test

```
http://xxx.xxx.xxx.xxx:xxxx/api/v1/mains
```

## URL Production

```
http://xxx.xxx.xxx.xxx:xxxx/api/v1/mains
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
| data                | main episode object  | Main episode list   			  | Mandatory           |

## Transaction Object   

| Field                 | Data Type            | Description                    | Mandatory/Optional  |
| -------------------   | -------------------- | ------------------------------ | ------------------- |
| mainEpisodeId         | Integer              | Main episode id                | Mandatory           |
| title                 | string               | Title main episode        	    | Mandatory           |
| dsc                   | string               | Detail main episode            | Mandatory           |
| imageUrl              | string               | Url image                      | Mandatory           |
| subEpisodeCount       | Integer              | Part of sub episode            | Mandatory           |

**Example**

```json
{
    "success": true,
    "data": [
        {
            "mainEpisodeId": 1,
            "title": "Episode 01",
            "dsc": "สงครามไข่ / แมงมุมแวมไพร์ / ปล่อยเต่า / นิวตริโน่ไวกว่าแสง?",
            "imageUrl": "http://res.cloudinary.com/dmah7hexe/image/upload/v1470211089/GroupEpisode/ep1.png",
            "subEpisodeCount": 1
        }
    ]
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
