import { BeaconNode } from "./BeaconsType";

export const Beacons: Record<string, BeaconNode> = 
  {
    "beacon": 
    {
      "type": "beacon",
      "name": "beacon",
      "icon": "__base__/graphics/icons/beacon.png",
      "flags": 
      [
        "placeable-player",
        "player-creation"
      ],
      "minable": 
      {
        "mining_time": 0.2,
        "result": "beacon"
      },
      "fast_replaceable_group": "beacon",
      "max_health": 200,
      "corpse": "beacon-remnants",
      "dying_explosion": "beacon-explosion",
      "collision_box": 
      [
        
        [
          -1.19999999999999996447286321199499070644378662109375,
          -1.19999999999999996447286321199499070644378662109375
        ],
        
        [
          1.19999999999999996447286321199499070644378662109375,
          1.19999999999999996447286321199499070644378662109375
        ]
      ],
      "selection_box": 
      [
        
        [
          -1.5,
          -1.5
        ],
        
        [
          1.5,
          1.5
        ]
      ],
      "damaged_trigger_effect": 
      {
        "type": "create-entity",
        "entity_name": "spark-explosion",
        "offset_deviation": 
        [
          
          [
            -0.5,
            -0.5
          ],
          
          [
            0.5,
            0.5
          ]
        ],
        "offsets": 
        [
          
          [
            0,
            1
          ]
        ],
        "damage_type_filters": "fire"
      },
      "drawing_box_vertical_extension": 0.7,
      "allowed_effects": 
      [
        "consumption",
        "speed",
        "pollution"
      ],
      "graphics_set": 
      {
        "module_icons_suppressed": true,
        "animation_progress": 1,
        "module_tint_mode": "mix",
        "no_modules_tint": 
        [
          1,
          0,
          0
        ],
        "random_animation_offset": true,
        "apply_module_tint": "secondary",
        "animation_list": 
        [
          
          {
            "render_layer": "floor-mechanics",
            "always_draw": true,
            "animation": 
            {
              "layers": 
              [
                
                {
                  "filename": "__base__/graphics/entity/beacon/beacon-bottom.png",
                  "width": 212,
                  "height": 192,
                  "scale": 0.5,
                  "shift": 
                  [
                    0.015625,
                    0.03125
                  ]
                },
                
                {
                  "filename": "__base__/graphics/entity/beacon/beacon-shadow.png",
                  "width": 244,
                  "height": 176,
                  "scale": 0.5,
                  "draw_as_shadow": true,
                  "shift": 
                  [
                    0.390625,
                    0.015625
                  ]
                }
              ]
            }
          },
          
          {
            "render_layer": "object",
            "always_draw": true,
            "animation": 
            {
              "filename": "__base__/graphics/entity/beacon/beacon-top.png",
              "width": 96,
              "height": 140,
              "scale": 0.5,
              "repeat_count": 45,
              "animation_speed": 0.5,
              "shift": 
              [
                0.09375,
                -0.59375
              ]
            }
          },
          
          {
            "render_layer": "object",
            "apply_tint": true,
            "always_draw": false,
            "animation": 
            {
              "filename": "__base__/graphics/entity/beacon/beacon-light.png",
              "line_length": 9,
              "width": 110,
              "height": 186,
              "frame_count": 45,
              "animation_speed": 0.5,
              "scale": 0.5,
              "shift": 
              [
                0.015625,
                -0.5625
              ],
              "blend_mode": "additive"
            }
          },
          
          {
            "render_layer": "object",
            "apply_tint": false,
            "always_draw": false,
            "animation": 
            {
              "filename": "__base__/graphics/entity/beacon/beacon-light.png",
              "line_length": 9,
              "width": 110,
              "height": 186,
              "frame_count": 45,
              "animation_speed": 0.5,
              "scale": 0.5,
              "shift": 
              [
                0.015625,
                -0.5625
              ],
              "draw_as_light": true,
              "blend_mode": "additive"
            }
          }
        ],
        "module_visualisations": 
        [
          
          {
            "art_style": "vanilla",
            "use_for_empty_slots": true,
            "tier_offset": 0,
            "slots": 
            [
              
              [
                
                {
                  "has_empty_slot": true,
                  "render_layer": "lower-object",
                  "pictures": 
                  {
                    "filename": "__base__/graphics/entity/beacon/beacon-module-slot-1.png",
                    "line_length": 4,
                    "width": 50,
                    "height": 66,
                    "variation_count": 4,
                    "scale": 0.5,
                    "shift": 
                    [
                      -0.5,
                      0.453125
                    ]
                  }
                },
                
                {
                  "apply_module_tint": "primary",
                  "render_layer": "lower-object",
                  "pictures": 
                  {
                    "filename": "__base__/graphics/entity/beacon/beacon-module-mask-box-1.png",
                    "line_length": 3,
                    "width": 36,
                    "height": 32,
                    "variation_count": 3,
                    "scale": 0.5,
                    "shift": 
                    [
                      -0.53125,
                      0.46875
                    ]
                  }
                },
                
                {
                  "apply_module_tint": "secondary",
                  "render_layer": "lower-object-above-shadow",
                  "pictures": 
                  {
                    "filename": "__base__/graphics/entity/beacon/beacon-module-mask-lights-1.png",
                    "line_length": 3,
                    "width": 26,
                    "height": 12,
                    "variation_count": 3,
                    "scale": 0.5,
                    "shift": 
                    [
                      -0.578125,
                      0.40625
                    ]
                  }
                },
                
                {
                  "apply_module_tint": "secondary",
                  "render_layer": "lower-object-above-shadow",
                  "pictures": 
                  {
                    "filename": "__base__/graphics/entity/beacon/beacon-module-lights-1.png",
                    "line_length": 3,
                    "width": 56,
                    "height": 42,
                    "variation_count": 3,
                    "shift": 
                    [
                      -0.5625,
                      0.40625
                    ],
                    "draw_as_light": true,
                    "scale": 0.5
                  }
                }
              ],
              
              [
                
                {
                  "has_empty_slot": true,
                  "render_layer": "lower-object",
                  "pictures": 
                  {
                    "filename": "__base__/graphics/entity/beacon/beacon-module-slot-2.png",
                    "line_length": 4,
                    "width": 46,
                    "height": 44,
                    "variation_count": 4,
                    "scale": 0.5,
                    "shift": 
                    [
                      0.59375,
                      -0.375
                    ]
                  }
                },
                
                {
                  "apply_module_tint": "primary",
                  "render_layer": "lower-object",
                  "pictures": 
                  {
                    "filename": "__base__/graphics/entity/beacon/beacon-module-mask-box-2.png",
                    "line_length": 3,
                    "width": 36,
                    "height": 26,
                    "variation_count": 3,
                    "scale": 0.5,
                    "shift": 
                    [
                      0.640625,
                      -0.375
                    ]
                  }
                },
                
                {
                  "apply_module_tint": "secondary",
                  "render_layer": "lower-object-above-shadow",
                  "pictures": 
                  {
                    "filename": "__base__/graphics/entity/beacon/beacon-module-mask-lights-2.png",
                    "line_length": 3,
                    "width": 24,
                    "height": 14,
                    "variation_count": 3,
                    "scale": 0.5,
                    "shift": 
                    [
                      0.6875,
                      -0.484375
                    ]
                  }
                },
                
                {
                  "apply_module_tint": "secondary",
                  "render_layer": "lower-object-above-shadow",
                  "pictures": 
                  {
                    "filename": "__base__/graphics/entity/beacon/beacon-module-lights-2.png",
                    "line_length": 3,
                    "width": 66,
                    "height": 46,
                    "variation_count": 3,
                    "shift": 
                    [
                      0.6875,
                      -0.5
                    ],
                    "draw_as_light": true,
                    "scale": 0.5
                  }
                }
              ]
            ]
          }
        ],
        "frozen_patch": 
        {
          "filename": "__space-age__/graphics/entity/frozen/beacon/beacon-frozen.png",
          "width": 212,
          "height": 192,
          "scale": 0.5,
          "shift": 
          [
            0.015625,
            0.03125
          ]
        }
      },
      "radius_visualisation_picture": 
      {
        "filename": "__base__/graphics/entity/beacon/beacon-radius-visualization.png",
        "priority": "extra-high-no-scale",
        "width": 10,
        "height": 10
      },
      "supply_area_distance": 3,
      "energy_source": 
      {
        "type": "electric",
        "usage_priority": "secondary-input"
      },
      "impact_category": "metal",
      "open_sound": 
      {
        "filename": "__base__/sound/open-close/beacon-open.ogg",
        "volume": 0.4
      },
      "close_sound": 
      {
        "filename": "__base__/sound/open-close/beacon-close.ogg",
        "volume": 0.4
      },
      "working_sound": 
      {
        "sound": 
        [
          
          {
            "filename": "__base__/sound/beacon-1.ogg",
            "volume": 0.3
          },
          
          {
            "filename": "__base__/sound/beacon-2.ogg",
            "volume": 0.3
          }
        ],
        "audible_distance_modifier": 0.3300000000000000266453525910037569701671600341796875,
        "max_sounds_per_type": 3
      },
      "energy_usage": "480kW",
      "distribution_effectivity": 1.5,
      "distribution_effectivity_bonus_per_quality_level": 0.2,
      "profile": 
      [
        1,
        0.70709999999999997299937604111619293689727783203125,
        0.577300000000000057553961596568115055561065673828125,
        0.5,
        0.44719999999999995310417943983338773250579833984375,
        0.408199999999999985078602549037896096706390380859375,
        0.3778999999999999914734871708787977695465087890625,
        0.3534999999999999698019337301957421004772186279296875,
        0.3332999999999999740651901447563432157039642333984375,
        0.316199999999999992184029906638897955417633056640625,
        0.301499999999999968025576890795491635799407958984375,
        0.288600000000000012079226507921703159809112548828125,
        0.2772999999999999687361196265555918216705322265625,
        0.267199999999999970867747833835892379283905029296875,
        0.2580999999999999960920149533194489777088165283203125,
        0.25,
        0.242499999999999982236431605997495353221893310546875,
        0.2356999999999999761968183520366437733173370361328125,
        0.2294000000000000039079850466805510222911834716796875,
        0.223599999999999976552089719916693866252899169921875,
        0.2181999999999999939603867460391484200954437255859375,
        0.2132000000000000117239551400416530668735504150390625,
        0.208499999999999996447286321199499070644378662109375,
        0.2040999999999999925393012745189480483531951904296875,
        0.2,
        0.196099999999999994315658113919198513031005859375,
        0.19239999999999998436805981327779591083526611328125,
        0.188900000000000023447910280083306133747100830078125,
        0.18559999999999998721023075631819665431976318359375,
        0.1825,
        0.1796000000000000085265128291212022304534912109375,
        0.1766999999999999904076730672386474907398223876953125,
        0.1739999999999999769073610877967439591884613037109375,
        0.1713999999999999968025576890795491635799407958984375,
        0.16900000000000002131628207280300557613372802734375,
        0.1665999999999999925393012745189480483531951904296875,
        0.1642999999999999971578290569595992565155029296875,
        0.162200000000000006394884621840901672840118408203125,
        0.160099999999999997868371792719699442386627197265625,
        0.1580999999999999960920149533194489777088165283203125,
        0.156099999999999994315658113919198513031005859375,
        0.1542999999999999971578290569595992565155029296875,
        0.152400000000000002131628207280300557613372802734375,
        0.1507000000000000117239551400416530668735504150390625,
        0.149000000000000003552713678800500929355621337890625,
        0.147400000000000002131628207280300557613372802734375,
        0.14580000000000001847411112976260483264923095703125,
        0.1443000000000000060396132539608515799045562744140625,
        0.14280000000000001136868377216160297393798828125,
        0.141399999999999987920773492078296840190887451171875,
        0.140000000000000017763568394002504646778106689453125,
        0.138600000000000012079226507921703159809112548828125,
        0.13729999999999999982236431605997495353221893310546875,
        0.13600000000000000976996261670137755572795867919921875,
        0.13480000000000000870414851306122727692127227783203125,
        0.1335999999999999854338739169179461896419525146484375,
        0.13239999999999998436805981327779591083526611328125,
        0.13129999999999999449329379785922355949878692626953125,
        0.13009999999999999342747969421907328069210052490234375,
        0.129000000000000003552713678800500929355621337890625,
        0.128000000000000003552713678800500929355621337890625,
        0.1270000000000000017763568394002504646778106689453125,
        0.12590000000000001190159082398167811334133148193359375,
        0.125,
        0.12399999999999999911182158029987476766109466552734375,
        0.1229999999999999982236431605997495353221893310546875,
        0.1221000000000000085265128291212022304534912109375,
        0.12119999999999999662492200513952411711215972900390625,
        0.12030000000000000692779167366097681224346160888671875,
        0.1194999999999999840127884453977458178997039794921875,
        0.118599999999999994315658113919198513031005859375,
        0.117799999999999993605115378159098327159881591796875,
        0.11700000000000001509903313490212894976139068603515625,
        0.116199999999999992184029906638897955417633056640625,
        0.1153999999999999914734871708787977695465087890625,
        0.11470000000000000195399252334027551114559173583984375,
        0.11390000000000000124344978758017532527446746826171875,
        0.11319999999999998951949464753852225840091705322265625,
        0.1125,
        0.1117999999999999882760448599583469331264495849609375,
        0.11109999999999999875655021241982467472553253173828125,
        0.110400000000000009237055564881302416324615478515625,
        0.1096999999999999975131004248396493494510650634765625,
        0.109099999999999997868371792719699442386627197265625,
        0.1084000000000000074606987254810519516468048095703125,
        0.10780000000000000692779167366097681224346160888671875,
        0.107200000000000006394884621840901672840118408203125,
        0.10660000000000000586197757002082653343677520751953125,
        0.10589999999999999413802242997917346656322479248046875,
        0.1053999999999999825917029738775454461574554443359375,
        0.10480000000000000426325641456060111522674560546875,
        0.10420000000000000373034936274052597582340240478515625,
        0.1036000000000000031974423109204508364200592041015625,
        0.10309999999999999165112285481882281601428985595703125,
        0.1024999999999999911182158029987476766109466552734375,
        0.1020000000000000017763568394002504646778106689453125,
        0.1015000000000000124344978758017532527446746826171875,
        0.10100000000000000088817841970012523233890533447265625,
        0.10050000000000001154631945610162802040576934814453125,
        0.1
      ],
      "beacon_counter": "same_type",
      "module_slots": 2,
      "icons_positioning": 
      [
        
        {
          "inventory_index": 1,
          "shift": 
          [
            0,
            0
          ],
          "multi_row_initial_height_modifier": -0.3,
          "max_icons_per_row": 2
        }
      ],
      "water_reflection": 
      {
        "pictures": 
        {
          "filename": "__base__/graphics/entity/beacon/beacon-reflection.png",
          "priority": "extra-high",
          "width": 24,
          "height": 28,
          "shift": 
          [
            0,
            1.71875
          ],
          "variation_count": 1,
          "scale": 5
        },
        "rotate": false,
        "orientation_to_variation": false
      },
      "heating_energy": "400kW"
    }
  };