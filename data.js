var APP_DATA = {
  "scenes": [
    {
      "id": "0-front",
      "name": "Front",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.022202139852012692,
          "pitch": 0.03993930075327512,
          "rotation": 0,
          "target": "1-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entry",
      "name": "Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.37994475254954985,
        "pitch": 0.015216263783615958,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -0.002306589243008972,
          "pitch": 0.022359646321042703,
          "rotation": 0,
          "target": "10-top-stairs"
        },
        {
          "yaw": 0.5985380979502288,
          "pitch": 0.03219462430292275,
          "rotation": 0,
          "target": "2-corridor1"
        },
        {
          "yaw": -2.5537254387198995,
          "pitch": -0.06707533621744766,
          "rotation": 0,
          "target": "0-front"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-corridor1",
      "name": "Corridor1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.5625989542229277,
        "pitch": -0.003804065945891111,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -1.931407413774167,
          "pitch": -0.005813503262071862,
          "rotation": 0,
          "target": "3-kitchen"
        },
        {
          "yaw": -0.33070961093553564,
          "pitch": -0.054236734983621915,
          "rotation": 0,
          "target": "1-entry"
        },
        {
          "yaw": 2.7165272306138517,
          "pitch": 0.01697451208447376,
          "rotation": 0,
          "target": "4-corridor2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.2405263298790565,
        "pitch": 4.982137244979867e-7,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 1.2291393902015706,
          "pitch": -0.07725582885011306,
          "rotation": 0,
          "target": "2-corridor1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-corridor2",
      "name": "Corridor2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.490242669010554,
        "pitch": -3.552713678800501e-15,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -1.155959709766627,
          "pitch": 0.31201328528780436,
          "rotation": 0,
          "target": "5-carpark"
        },
        {
          "yaw": -2.325846286985053,
          "pitch": -0.004177035604712387,
          "rotation": 0,
          "target": "2-corridor1"
        },
        {
          "yaw": 2.3175858106969685,
          "pitch": -0.021774684756014295,
          "rotation": 0,
          "target": "6-toilet"
        },
        {
          "yaw": 0.8302469993474091,
          "pitch": -0.004594170004477149,
          "rotation": 0,
          "target": "7-leavingroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-carpark",
      "name": "CarPark",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.097592515942978,
        "pitch": -0.03804065945902657,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -1.474517100345956,
          "pitch": -0.09421239893694278,
          "rotation": 0,
          "target": "4-corridor2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.2063575757542484,
          "pitch": -0.13842653663093785,
          "title": "Car Park",
          "text": "Covered Car Park belonging to the house."
        },
        {
          "yaw": 1.4204389246820757,
          "pitch": -0.13875096079455318,
          "title": "Car Park",
          "text": "Covered Car Park belonging to the house."
        }
      ]
    },
    {
      "id": "6-toilet",
      "name": "Toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.7476676355451026,
        "pitch": -0.005706098918851765,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -1.995620355453834,
          "pitch": -0.014142090813539454,
          "rotation": 0,
          "target": "4-corridor2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-leavingroom",
      "name": "Leavingroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.2499242566205595,
        "pitch": 0.015215878687946827,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -1.9696792927305573,
          "pitch": -0.021935004105793965,
          "rotation": 0,
          "target": "14-backyard"
        },
        {
          "yaw": 2.222572506639411,
          "pitch": 0.08971810980274775,
          "rotation": 0,
          "target": "4-corridor2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-suit1",
      "name": "Suit1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.3801526700386137,
        "pitch": -0.013314230810667738,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 1.88196742854276,
          "pitch": -0.027247614322828184,
          "rotation": 0,
          "target": "11-balcony"
        },
        {
          "yaw": 0.726184206985252,
          "pitch": -0.03524175796222906,
          "rotation": 0,
          "target": "12-bath-room1"
        },
        {
          "yaw": -0.470802768934071,
          "pitch": -0.03870407745269233,
          "rotation": 0,
          "target": "10-top-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-suit2",
      "name": "Suit2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9147235812909607,
          "pitch": -0.024307754089111455,
          "rotation": 0,
          "target": "13-bathroom2"
        },
        {
          "yaw": -2.999616537805835,
          "pitch": -0.06708444437628458,
          "rotation": 0,
          "target": "10-top-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-top-stairs",
      "name": "Top Stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.042165979884316585,
          "pitch": 0.54295995923394,
          "rotation": 0,
          "target": "1-entry"
        },
        {
          "yaw": -0.4105071650067451,
          "pitch": 0.050858331324477035,
          "rotation": 0,
          "target": "9-suit2"
        },
        {
          "yaw": -2.022441420517211,
          "pitch": -0.03349517880943864,
          "rotation": 0,
          "target": "8-suit1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-balcony",
      "name": "Balcony",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.4595716843489477,
        "pitch": 0.0019017922388098185,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 1.4694615421138648,
          "pitch": 0.13668966058716947,
          "rotation": 0,
          "target": "8-suit1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-bath-room1",
      "name": "Bath Room1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.8487064461509295,
        "pitch": -0.038040837563928065,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -0.9524879536725841,
          "pitch": 0.02291267587622592,
          "rotation": 0,
          "target": "8-suit1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-bathroom2",
      "name": "Bathroom2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.24300353431613964,
        "pitch": 0.026628378242586237,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -2.7016374847016387,
          "pitch": -0.016666723536415518,
          "rotation": 0,
          "target": "9-suit2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-backyard",
      "name": "Backyard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.6540351065053986,
        "pitch": -0.005706098918858871,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -1.3506084832704204,
          "pitch": 0.0009118695152867673,
          "rotation": 0,
          "target": "7-leavingroom"
        },
        {
          "yaw": 2.8476345913385614,
          "pitch": 0.03463011602839039,
          "rotation": 0,
          "target": "15-ptah-to-the-swiming-pool1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-ptah-to-the-swiming-pool1",
      "name": "Ptah to the Swiming Pool1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.8914604794801928,
        "pitch": 0.022824395675408837,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 0.9219665847305265,
          "pitch": 0.012494684206231454,
          "rotation": 0,
          "target": "16-ptah-to-the-swiming-pool2"
        },
        {
          "yaw": -1.672840421568555,
          "pitch": 0.05019035162139218,
          "rotation": 0,
          "target": "14-backyard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-ptah-to-the-swiming-pool2",
      "name": "Ptah to the Swiming Pool2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.076201910600245,
        "pitch": -0.011831098117736971,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 0.35987394908944914,
          "pitch": 0.028219980934650835,
          "rotation": 0,
          "target": "15-ptah-to-the-swiming-pool1"
        },
        {
          "yaw": 2.56257929053222,
          "pitch": -0.018041196928949788,
          "rotation": 0,
          "target": "17-swiming-pool1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-swiming-pool1",
      "name": "Swiming Pool1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.9375233872027806,
        "pitch": -0.013314230810669514,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 2.465576758936143,
          "pitch": 0.03556849438838228,
          "rotation": 0,
          "target": "20-swiming-pool2"
        },
        {
          "yaw": 1.116884949326094,
          "pitch": 0.03742129025792096,
          "rotation": 0,
          "target": "18-barbecue"
        },
        {
          "yaw": -1.7486748449947704,
          "pitch": 0.025924159385269263,
          "rotation": 0,
          "target": "16-ptah-to-the-swiming-pool2"
        },
        {
          "yaw": 2.059619158495013,
          "pitch": 0.009663745537981328,
          "rotation": 0,
          "target": "19-kids-swiming-pool"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-barbecue",
      "name": "Barbecue",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.4421183918290144,
        "pitch": 0.03233753365594971,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 1.7583120032386645,
          "pitch": 0.05535202702501962,
          "rotation": 0,
          "target": "17-swiming-pool1"
        },
        {
          "yaw": 0.4489268242000346,
          "pitch": 0.04483377976674596,
          "rotation": 0,
          "target": "19-kids-swiming-pool"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-kids-swiming-pool",
      "name": "Kids Swiming Pool",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.12351560860268052,
        "pitch": 0.015216263783614181,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 0.6011957019914025,
          "pitch": 0.037176195155865344,
          "rotation": 0,
          "target": "18-barbecue"
        },
        {
          "yaw": -1.405328730335114,
          "pitch": 0.07798335189103156,
          "rotation": 0,
          "target": "20-swiming-pool2"
        },
        {
          "yaw": -0.31704652737428063,
          "pitch": 0.006953782861227609,
          "rotation": 0,
          "target": "17-swiming-pool1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-swiming-pool2",
      "name": "Swiming Pool2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6367253765372203,
          "pitch": 0.026127701619218513,
          "rotation": 0,
          "target": "17-swiming-pool1"
        },
        {
          "yaw": -3.073665503307307,
          "pitch": 0.12649263124673027,
          "rotation": 0,
          "target": "19-kids-swiming-pool"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Albufeira House",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
