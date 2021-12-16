# hbomax-extension

Hide cursor during streaming on HBO Max.

The script targets the `<body>` tag on rendered DOM when url matches either:
-  `https://play.hbomax.com/episode/*` 
-  `https://play.hbomax.com/feature/*`. 

These patterns translates to `series` and `movies` respectively.

<br>

## How to enable extension

I don't know how to publish a chrome extension,  
so if you want to enable this extension, you need to:

1. Clone this repository to local host machine.  
    `git clone git@github.com:emilte/hbomax-extension.git`

2. Open Google Chrome browser and go to `chrome://extensions/`.

3. Click `Load unpacked` on the upper-left navbar and select the cloned repository.