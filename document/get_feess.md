# Feed

This service for get feeds.

## URL Test

```
http://xxx.xxx.xxx.xxx:xxxx/api/v1/feeds
```

## URL Production

```
http://xxx.xxx.xxx.xxx:xxxx/api/v1/feeds
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
| data                | feed object          | Transaction detail   			    | Mandatory           |

## Transaction Object   

| Field                 | Data Type            | Description                    | Mandatory/Optional  |
| -------------------   | -------------------- | ------------------------------ | ------------------- |
| episodeId             | Integer              | Episode id                     | Mandatory           |
| title                 | string               | Title episode        			    | Mandatory           |
| dsc                   | string               | Detail episode                 | Mandatory           |
| fileUrl               | string               | Url mp3 file                   | Mandatory           |
| detail                | string               | Url to website                 | Mandatory           |
| type                  | string               | Type episode                   | Mandatory           |
| onAir                 | string               | Date on air                    | Mandatory           |
| miniImageUrl          | string               | Url mini image                 | Mandatory           |
| mainImageUrl          | string               | Url main image                 | Mandatory           |
| coverImageUrl         | string               | Url cover image                | Mandatory           |
| mainEpisodeId         | Integer              | Main episode id                | Mandatory           |

**Example**

```json
{
    "success": true,
    "data": [
        {
            "episodeId": 1,
            "title": "Episode 01.1",
            "dsc": "สงครามไข่ / แมงมุมแวมไพร์ / ปล่อยเต่า / นิวตริโน่ไวกว่าแสง?",
            "fileUrl": "http://witcastthailand.com/witcast/witcast%20episode%201.mp3",
            "detail": "http://witcastthailand.com/witcast-episode-1/",
            "type": "NORMAL",
            "onAir": "06/16/2012 14:43:47",
            "miniImageUrl": "http://res.cloudinary.com/dmah7hexe/image/upload/v1474518624/Episode/miniImage/ep11_m.png",
            "mainImageUrl": "http://res.cloudinary.com/dmah7hexe/image/upload/v1474518544/Episode/mainImage/ep11_t.png",
            "coverImageUrl": "http://res.cloudinary.com/dmah7hexe/image/upload/v1474518339/Episode/coverImage/ep11_c.png",
            "mainEpisodeId": 1
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
