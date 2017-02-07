jquery.CashMeOusside.js
=====================

**Cash me ousside, How bow dah**

![Cash me ousside Example](http://demos.ijasoneverett.com/CashMeOusside/cashmeousside.png)

Tested on Chrome and Safari

## Demo

http://demos.ijasoneverett.com/CashMeOusside/

## Usage

```html
<button class="button">Click Me!</button>

<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
<script src="jquery.CashMeOusside.js" type="text/javascript"></script>
<script type="text/javascript">
    $(document).ready(function(){
        var plugin = $("body").CashMeOusside();
        $(".button").click( function(){
            plugin.show();
        });
    });
</script>
```

## Contact

Jason Everett

- https://github.com/ijason
- http://twitter.com/ijayson66

##License
Free to use under the MIT license. (http://www.opensource.org/licenses/mit-license.php)