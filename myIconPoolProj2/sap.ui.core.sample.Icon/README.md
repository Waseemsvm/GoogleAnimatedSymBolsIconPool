Step1:
download the woff file and prepare codepoints json file and place in the icons(can be any name) directory

Step2
Register the Font Icons using the below syntax in the component.js files init method.

                sap.ui.core.IconPool.registerFont({
    				fontFamily: "material_symbols",
    				fontURI: "./Icons/"
    			});

Step3:
Now you are ready to use the icons anywhere in your application
use the below uri format to point to the required icons

    sap-icon://material_symbols/add_alarm

Step4:
Add the style myPulse(can be any name) to the required material symbol.
Use the following format to add styles.

.myPulse {
animation: pulse 3s infinite;
}

@keyframes pulse {
0% {
font-variation-settings: "wght" 100;
}

50% {
font-variation-settings: "wght" 700;
}

100% {
font-variation-settings: "wght" 100;
}
}
