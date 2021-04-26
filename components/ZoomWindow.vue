
<template>


    <div>

    </div>

    

</template>


<script> 

import {MEETING_ID, API_KEY, API_SECRET} from '../static/credencialesZoom'
let logueo
let signature
let NAME = "nombre"
/*Esto es como el problema con el cliente y servidor*/
if (process.browser) {
    //const {ZoomMtg} = require('@zoomus/websdk');
    
    
    //ZoomMtg.setZoomJSLib('https://dmogdx0jrul3u.cloudfront.net/1.3.7/lib', '/av'); 
    //ZoomMtg.setZoomJSLib('https://dmogdx0jrul3u.cloudfront.net/1.9.1/lib', '/av');
    this.ZoomMtg.setZoomJSLib('https://source.zoom.us/1.9.1/lib', '/av'); 
    
    this.ZoomMtg.preLoadWasm();

    this.ZoomMtg.prepareJssdk();

     signature = this.ZoomMtg.generateSignature({

      meetingNumber: MEETING_ID,

      apiKey: API_KEY,

      apiSecret: API_SECRET,

      role: parseInt(0, 10),

      success: function(res) {

        // eslint-disable-next-line

        console.log("success signature: " + res.result);

      }

    });

    this.ZoomMtg.i18n.load("es-ES");/*borrar este para ver eoso del ingles que lase joinign meeting'*/
    this.ZoomMtg.i18n.reload("es-ES");


    logueo = this.ZoomMtg.init({

    leaveUrl: "zoom.us",

    disableInvite: true,

    isSupportAV: true,

    meetingInfo: [
          'topic',
          'host',
    ],

    success: () => {

      this.ZoomMtg.join({

            meetingNumber: MEETING_ID,

            userName: NAME,

            signature: signature,

            apiKey: API_KEY,

            /*userEmail: "email@gmail.com",*/

            passWord: "*******",

        success: function(res) {

          // eslint-disable-next-line

          console.log("join meeting success");

        },

        error: function(res) {

          // eslint-disable-next-line

          console.log(res);

        }

      });

    },

    error: function(res) {

       //eslint-disable-next-line

      console.log(res);

    }

  });

}

export default {

 head() {
return {
     
      /*
        EQUIVALENT TO 
        <link rel="..." href="...">
      */
      link: [
        {
          type: "text/css",
          rel: "stylesheet",
          href: "https://source.zoom.us/1.9.1/css/bootstrap.css",
        },
        {
          type: "text/css",
          rel: "stylesheet",
          href: "https://source.zoom.us/1.9.1/css/react-select.css",
        },
      ],

       /*
        EQUIVALENT TO 
        <script src="...">
      */
      script: [
        { sameSite:"None",src: "https://source.zoom.us/1.9.1/lib/vendor/react.min.js" },
        { sameSite:"None",src: "https://source.zoom.us/1.9.1/lib/vendor/react-dom.min.js" },
        { sameSite:"None",src: "https://source.zoom.us/1.9.1/lib/vendor/redux.min.js" },
        { sameSite:"None",src: "https://source.zoom.us/1.9.1/lib/vendor/redux-thunk.min.js" },
        { sameSite:"None",src: "https://source.zoom.us/1.9.1/lib/vendor/lodash.min.js" },
        { sameSite:"None",src: "https://source.zoom.us/zoom-meeting-1.9.1.min.js" },
      ],
    };
  },

  async mounted () {
      logueo
  }

};

</script>
