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

