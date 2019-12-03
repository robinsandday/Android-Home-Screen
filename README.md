# Android-Home-Screen
Android Home Screen
var urlpart = location.href.split('=');

//urlpart[1] is use as a dynamic url 

Like base url is	https://robinsandday.github.io/Android-Home-Screen/index.html?url=dynamicurl

                $("#preview-frame").attr("src", urlpart[1]);
                var myDynamicManifest = {
                    "background_color": "White",
                    "description": "Robins & Day Knack App.",
                    "display": "fullscreen",
                    "icons": [
                        {
                            "src": "https://robinsandday.github.io/Android-Home-Screen/icon/app-icon.png",
                            "sizes": "144x144",
                            "type": "image/png"
                        }
                    ],
                    "name": "Robins & Day",
                    "short_name": "Robins & Day",
                    "start_url": "https://robinsandday.github.io/Android-Home-Screen/index.html?id=" + urlpart[1]
                }
                const stringManifest = JSON.stringify(myDynamicManifest);
                const blob = new Blob([stringManifest], { type: 'application/json' });
                const manifestURL = URL.createObjectURL(blob);
 
               document.querySelector('#my-manifest-placeholder').setAttribute('href', manifestURL);



David's COmments from Sunny's Email.

I make changes in readme file .
now you can make everyurl dynamic using that code .. 

Like base url is 

https://robinsandday.github.io/Android-Home-Screen/index.html 

dynamic url is https://salesjourney2.knack.com/digital-deal-file-orders#dialog-order-information/new-digital-deal-file/customer-details/5dd679a47e9c3700168213ce

Then you send url to client 
https://robinsandday.github.io/Android-Home-Screen/index.html?Dynamicurl= https://salesjourney2.knack.com/digital-deal-file-orders#dialog-order-information/new-digital-deal-file/customer-details/5dd679a47e9c3700168213ce 

Regards,
Sunny Singla

