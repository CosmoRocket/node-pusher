# Node Pusher
A simple subscribe / publish interface using Pusher

## Routes
### POST /push
- Publishes a message to the pusher API
```javascript
Content-Type: application/json

{
  "message": "Hello Alex",
  "channel": "my-channel",
  "event": "my-event
}
```
- To subscribe to a message, follow the html below
```javascript
<!DOCTYPE html>
<head>
  <title>Pusher Test</title>
  <script src="https://js.pusher.com/4.1/pusher.min.js"></script>
  <script>

    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    var pusher = new Pusher('5c395da69c6cefb9c67d', {
      cluster: 'ap1',
      encrypted: true
    });

    var channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function(data) {
      alert(data.message);
    });
  </script>
</head>
```
