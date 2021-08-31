import { Component, OnInit } from '@angular/core';
declare var NanoPlayer;

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss']
})
export class VideoplayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var player;
    var defaultUrl = "rtmp://bintu-play.nanocosmos.de/play"; 
    var defaultServer = {
        "websocket": "wss://bintu-play.nanocosmos.de:443/h5live/stream.mp4",
        "hls": "https://bintu-play.nanocosmos.de:443/h5live/http/playlist.m3u8",
        "progressive": "https://bintu-play.nanocosmos.de:443/h5live/http/stream.mp4"
    }; 
    var streamNames = [ 
       "AZyne-3AjTw", 
       "AZyne-9P1MO", 
       "AZyne-4lJhK", 
       "AZyne-IdgwS" 
    ]; 
    var config = {
        "source": {
            "entries": [
                {
                    "index": 0,
                    "label": "stream 1",
                    "info": {
                        "bitrate": 0,
                        "width": 0,
                        "height": 0,
                        "framerate": 0
                    },
                    "h5live": {
                        "rtmp": {
                            "url": defaultUrl,
                            "streamname": streamNames[0]
                        },
                        "server": defaultServer
                    }
                },
                {
                    "index": 1,
                    "label": "stream 2",
                    "info": {
                        "bitrate": 1200,
                        "width": 1280,
                        "height": 720,
                        "framerate": 30
                    },
                    "h5live": {
                        "rtmp": {
                            "url": defaultUrl,
                            "streamname": streamNames[1]
                        },
                        "server": defaultServer
                    }
                },
                {
                    "index": 2,
                    "label": "stream 3",
                    "info": {
                        "bitrate": 800,
                        "width": 852,
                        "height": 480,
                        "framerate": 30
                    },
                    "h5live": {
                        "rtmp": {
                            "url": defaultUrl,
                            "streamname": streamNames[2]
                        },
                        "server": defaultServer
                    }
                },
                {
                    "index": 3,
                    "label": "stream 4",
                    "info": {
                        "bitrate": 400,
                        "width": 640,
                        "height": 360,
                        "framerate": 25
                    },
                    "h5live": {
                        "rtmp": {
                            "url": defaultUrl,
                            "streamname": streamNames[3]
                        },
                        "server": defaultServer
                    }
                }
            ],
            "options": {
                "adaption": {
                    "rule": "deviationOfMean2"
                }
            },
            "startIndex": 1
        },
        "playback": {
            "autoplay": true,
            "automute": true,
            "muted": true
        },
        "style": {
            "displayMutedAutoplay": true,
            "width": "auto",
            "height": "auto"
        },
        "metrics": {
            "accountId": "nanocosmos1",
            "accountKey": "nc1wj472649fkjah",
            "userId": "nanoplayer-demo",
            "eventId": "nanocosmos-demo",
            "statsInterval": 10,
            "customField1": "demo",
            "customField2": "public",
            "customField3": "online resource"
        }
    };
    player = new NanoPlayer("playerDiv");
    player.setup(config);
  }

}
