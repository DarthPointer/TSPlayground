import { BoilerNode } from "./BoilersType";

export const Boilers: Record<string, BoilerNode> =
  {
    "boiler": 
    {
      "type": "boiler",
      "name": "boiler",
      "icon": "__base__/graphics/icons/boiler.png",
      "flags": 
      [
        "placeable-neutral",
        "player-creation"
      ],
      "minable": 
      {
        "mining_time": 0.2,
        "result": "boiler"
      },
      "fast_replaceable_group": "boiler",
      "max_health": 200,
      "corpse": "boiler-remnants",
      "dying_explosion": "boiler-explosion",
      "impact_category": "metal-large",
      "mode": "output-to-separate-pipe",
      "resistances": 
      [
        
        {
          "type": "fire",
          "percent": 90
        },
        
        {
          "type": "explosion",
          "percent": 30
        },
        
        {
          "type": "impact",
          "percent": 30
        }
      ],
      "collision_box": 
      [
        
        [
          -1.29000000000000003552713678800500929355621337890625,
          -0.79000000000000003552713678800500929355621337890625
        ],
        
        [
          1.29000000000000003552713678800500929355621337890625,
          0.79000000000000003552713678800500929355621337890625
        ]
      ],
      "selection_box": 
      [
        
        [
          -1.5,
          -1
        ],
        
        [
          1.5,
          1
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
      "target_temperature": 165,
      "fluid_box": 
      {
        "volume": 200,
        "pipe_covers": 
        {
          "north": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/pipe-covers/pipe-cover-north.png",
                "priority": "extra-high",
                "width": 128,
                "height": 128,
                "scale": 0.5
              },
              
              {
                "filename": "__base__/graphics/entity/pipe-covers/pipe-cover-north-shadow.png",
                "priority": "extra-high",
                "width": 128,
                "height": 128,
                "scale": 0.5,
                "draw_as_shadow": true
              }
            ]
          },
          "east": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/pipe-covers/pipe-cover-east.png",
                "priority": "extra-high",
                "width": 128,
                "height": 128,
                "scale": 0.5
              },
              
              {
                "filename": "__base__/graphics/entity/pipe-covers/pipe-cover-east-shadow.png",
                "priority": "extra-high",
                "width": 128,
                "height": 128,
                "scale": 0.5,
                "draw_as_shadow": true
              }
            ]
          },
          "south": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/pipe-covers/pipe-cover-south.png",
                "priority": "extra-high",
                "width": 128,
                "height": 128,
                "scale": 0.5
              },
              
              {
                "filename": "__base__/graphics/entity/pipe-covers/pipe-cover-south-shadow.png",
                "priority": "extra-high",
                "width": 128,
                "height": 128,
                "scale": 0.5,
                "draw_as_shadow": true
              }
            ]
          },
          "west": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/pipe-covers/pipe-cover-west.png",
                "priority": "extra-high",
                "width": 128,
                "height": 128,
                "scale": 0.5
              },
              
              {
                "filename": "__base__/graphics/entity/pipe-covers/pipe-cover-west-shadow.png",
                "priority": "extra-high",
                "width": 128,
                "height": 128,
                "scale": 0.5,
                "draw_as_shadow": true
              }
            ]
          }
        },
        "pipe_connections": 
        [
          
          {
            "flow_direction": "input-output",
            "direction": 12,
            "position": 
            [
              -1,
              0.5
            ]
          },
          
          {
            "flow_direction": "input-output",
            "direction": 4,
            "position": 
            [
              1,
              0.5
            ]
          }
        ],
        "production_type": "input",
        "filter": "water"
      },
      "output_fluid_box": 
      {
        "volume": 200,
        "pipe_covers": 
        {
          "north": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/pipe-covers/pipe-cover-north.png",
                "priority": "extra-high",
                "width": 128,
                "height": 128,
                "scale": 0.5
              },
              
              {
                "filename": "__base__/graphics/entity/pipe-covers/pipe-cover-north-shadow.png",
                "priority": "extra-high",
                "width": 128,
                "height": 128,
                "scale": 0.5,
                "draw_as_shadow": true
              }
            ]
          },
          "east": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/pipe-covers/pipe-cover-east.png",
                "priority": "extra-high",
                "width": 128,
                "height": 128,
                "scale": 0.5
              },
              
              {
                "filename": "__base__/graphics/entity/pipe-covers/pipe-cover-east-shadow.png",
                "priority": "extra-high",
                "width": 128,
                "height": 128,
                "scale": 0.5,
                "draw_as_shadow": true
              }
            ]
          },
          "south": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/pipe-covers/pipe-cover-south.png",
                "priority": "extra-high",
                "width": 128,
                "height": 128,
                "scale": 0.5
              },
              
              {
                "filename": "__base__/graphics/entity/pipe-covers/pipe-cover-south-shadow.png",
                "priority": "extra-high",
                "width": 128,
                "height": 128,
                "scale": 0.5,
                "draw_as_shadow": true
              }
            ]
          },
          "west": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/pipe-covers/pipe-cover-west.png",
                "priority": "extra-high",
                "width": 128,
                "height": 128,
                "scale": 0.5
              },
              
              {
                "filename": "__base__/graphics/entity/pipe-covers/pipe-cover-west-shadow.png",
                "priority": "extra-high",
                "width": 128,
                "height": 128,
                "scale": 0.5,
                "draw_as_shadow": true
              }
            ]
          }
        },
        "pipe_connections": 
        [
          
          {
            "flow_direction": "output",
            "direction": 0,
            "position": 
            [
              0,
              -0.5
            ]
          }
        ],
        "production_type": "output",
        "filter": "steam"
      },
      "energy_consumption": "1.8MW",
      "energy_source": 
      {
        "type": "burner",
        "fuel_categories": 
        [
          "chemical"
        ],
        "effectivity": 1,
        "fuel_inventory_size": 1,
        "emissions_per_minute": 
        {
          "pollution": 30
        },
        "light_flicker": 
        {
          "color": 
          [
            0,
            0,
            0
          ],
          "minimum_intensity": 0.6,
          "maximum_intensity": 0.95
        },
        "smoke": 
        [
          
          {
            "name": "smoke",
            "north_position": 
            [
              -1.1875,
              -1.484375
            ],
            "south_position": 
            [
              1.203125,
              -1
            ],
            "east_position": 
            [
              0.625,
              -2.1875
            ],
            "west_position": 
            [
              -0.59375,
              -0.265625
            ],
            "frequency": 15,
            "starting_vertical_speed": 0,
            "starting_frame_deviation": 60
          }
        ]
      },
      "working_sound": 
      {
        "sound": 
        {
          "filename": "__base__/sound/boiler.ogg",
          "volume": 0.7
        },
        "audible_distance_modifier": 0.3,
        "fade_in_ticks": 4,
        "fade_out_ticks": 20
      },
      "open_sound": 
      {
        "filename": "__base__/sound/open-close/steam-open.ogg",
        "volume": 0.5699999999999999289457264239899814128875732421875
      },
      "close_sound": 
      {
        "filename": "__base__/sound/open-close/steam-close.ogg",
        "volume": 0.5
      },
      "pictures": 
      {
        "north": 
        {
          "structure": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/boiler/boiler-N-idle.png",
                "priority": "extra-high",
                "width": 269,
                "height": 221,
                "shift": 
                [
                  -0.0390625,
                  0.1640625
                ],
                "scale": 0.5
              },
              
              {
                "filename": "__base__/graphics/entity/boiler/boiler-N-shadow.png",
                "priority": "extra-high",
                "width": 274,
                "height": 164,
                "scale": 0.5,
                "shift": 
                [
                  0.640625,
                  0.28125
                ],
                "draw_as_shadow": true
              }
            ]
          },
          "fire": 
          {
            "filename": "__base__/graphics/entity/boiler/boiler-N-fire.png",
            "draw_as_glow": true,
            "priority": "extra-high",
            "frame_count": 64,
            "line_length": 8,
            "width": 26,
            "height": 26,
            "animation_speed": 0.5,
            "shift": 
            [
              0,
              -0.265625
            ],
            "scale": 0.5
          },
          "fire_glow": 
          {
            "filename": "__base__/graphics/entity/boiler/boiler-N-light.png",
            "draw_as_glow": true,
            "priority": "extra-high",
            "width": 200,
            "height": 173,
            "shift": 
            [
              -0.03125,
              -0.2109375
            ],
            "blend_mode": "additive",
            "scale": 0.5
          }
        },
        "east": 
        {
          "structure": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/boiler/boiler-E-idle.png",
                "priority": "extra-high",
                "width": 216,
                "height": 301,
                "shift": 
                [
                  -0.09375,
                  0.0390625
                ],
                "scale": 0.5
              },
              
              {
                "filename": "__base__/graphics/entity/boiler/boiler-E-shadow.png",
                "priority": "extra-high",
                "width": 184,
                "height": 194,
                "scale": 0.5,
                "shift": 
                [
                  0.9375,
                  0.296875
                ],
                "draw_as_shadow": true
              }
            ]
          },
          "patch": 
          {
            "filename": "__base__/graphics/entity/boiler/boiler-E-patch.png",
            "width": 6,
            "height": 36,
            "shift": 
            [
              1.046875,
              -0.421875
            ],
            "scale": 0.5
          },
          "fire": 
          {
            "filename": "__base__/graphics/entity/boiler/boiler-E-fire.png",
            "draw_as_glow": true,
            "priority": "extra-high",
            "frame_count": 64,
            "line_length": 8,
            "width": 28,
            "height": 28,
            "animation_speed": 0.5,
            "shift": 
            [
              -0.296875,
              -0.6875
            ],
            "scale": 0.5
          },
          "fire_glow": 
          {
            "filename": "__base__/graphics/entity/boiler/boiler-E-light.png",
            "draw_as_glow": true,
            "priority": "extra-high",
            "width": 139,
            "height": 244,
            "shift": 
            [
              0.0078125,
              -0.40625
            ],
            "blend_mode": "additive",
            "scale": 0.5
          }
        },
        "south": 
        {
          "structure": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/boiler/boiler-S-idle.png",
                "priority": "extra-high",
                "width": 260,
                "height": 192,
                "shift": 
                [
                  0.125,
                  0.40625
                ],
                "scale": 0.5
              },
              
              {
                "filename": "__base__/graphics/entity/boiler/boiler-S-shadow.png",
                "priority": "extra-high",
                "width": 311,
                "height": 131,
                "scale": 0.5,
                "shift": 
                [
                  0.9296875,
                  0.4921875
                ],
                "draw_as_shadow": true
              }
            ]
          },
          "fire": 
          {
            "filename": "__base__/graphics/entity/boiler/boiler-S-fire.png",
            "draw_as_glow": true,
            "priority": "extra-high",
            "frame_count": 64,
            "line_length": 8,
            "width": 26,
            "height": 16,
            "animation_speed": 0.5,
            "shift": 
            [
              -0.03125,
              -0.828125
            ],
            "scale": 0.5
          },
          "fire_glow": 
          {
            "filename": "__base__/graphics/entity/boiler/boiler-S-light.png",
            "draw_as_glow": true,
            "priority": "extra-high",
            "width": 200,
            "height": 162,
            "shift": 
            [
              0.03125,
              0.171875
            ],
            "blend_mode": "additive",
            "scale": 0.5
          }
        },
        "west": 
        {
          "structure": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/boiler/boiler-W-idle.png",
                "priority": "extra-high",
                "width": 196,
                "height": 273,
                "shift": 
                [
                  0.046875,
                  0.2421875
                ],
                "scale": 0.5
              },
              
              {
                "filename": "__base__/graphics/entity/boiler/boiler-W-shadow.png",
                "priority": "extra-high",
                "width": 206,
                "height": 218,
                "scale": 0.5,
                "shift": 
                [
                  0.609375,
                  0.203125
                ],
                "draw_as_shadow": true
              }
            ]
          },
          "fire": 
          {
            "filename": "__base__/graphics/entity/boiler/boiler-W-fire.png",
            "draw_as_glow": true,
            "priority": "extra-high",
            "frame_count": 64,
            "line_length": 8,
            "width": 30,
            "height": 29,
            "animation_speed": 0.5,
            "shift": 
            [
              0.40625,
              -0.7265625
            ],
            "scale": 0.5
          },
          "fire_glow": 
          {
            "filename": "__base__/graphics/entity/boiler/boiler-W-light.png",
            "draw_as_glow": true,
            "priority": "extra-high",
            "width": 136,
            "height": 217,
            "shift": 
            [
              0.0625,
              -0.1953125
            ],
            "blend_mode": "additive",
            "scale": 0.5
          }
        }
      },
      "fire_flicker_enabled": true,
      "fire_glow_flicker_enabled": true,
      "burning_cooldown": 20,
      "water_reflection": 
      {
        "pictures": 
        {
          "filename": "__base__/graphics/entity/boiler/boiler-reflection.png",
          "priority": "extra-high",
          "width": 28,
          "height": 32,
          "shift": 
          [
            0.15625,
            0.9375
          ],
          "variation_count": 4,
          "scale": 5
        },
        "rotate": false,
        "orientation_to_variation": true
      },
      "surface_conditions": 
      [
        
        {
          "property": "pressure",
          "min": 10
        }
      ]
    },
    "heat-exchanger": 
    {
      "type": "boiler",
      "name": "heat-exchanger",
      "icon": "__base__/graphics/icons/heat-boiler.png",
      "flags": 
      [
        "placeable-neutral",
        "player-creation"
      ],
      "minable": 
      {
        "mining_time": 0.1,
        "result": "heat-exchanger"
      },
      "fast_replaceable_group": "heat-exchanger",
      "max_health": 200,
      "corpse": "heat-exchanger-remnants",
      "dying_explosion": "heat-exchanger-explosion",
      "impact_category": "metal",
      "mode": "output-to-separate-pipe",
      "resistances": 
      [
        
        {
          "type": "fire",
          "percent": 90
        },
        
        {
          "type": "explosion",
          "percent": 30
        },
        
        {
          "type": "impact",
          "percent": 30
        }
      ],
      "collision_box": 
      [
        
        [
          -1.29000000000000003552713678800500929355621337890625,
          -0.79000000000000003552713678800500929355621337890625
        ],
        
        [
          1.29000000000000003552713678800500929355621337890625,
          0.79000000000000003552713678800500929355621337890625
        ]
      ],
      "selection_box": 
      [
        
        [
          -1.5,
          -1
        ],
        
        [
          1.5,
          1
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
      "target_temperature": 500,
      "fluid_box": 
      {
        "volume": 200,
        "pipe_covers": 
        {
          "north": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/pipe-covers/pipe-cover-north.png",
                "priority": "extra-high",
                "width": 128,
                "height": 128,
                "scale": 0.5
              },
              
              {
                "filename": "__base__/graphics/entity/pipe-covers/pipe-cover-north-shadow.png",
                "priority": "extra-high",
                "width": 128,
                "height": 128,
                "scale": 0.5,
                "draw_as_shadow": true
              }
            ]
          },
          "east": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/pipe-covers/pipe-cover-east.png",
                "priority": "extra-high",
                "width": 128,
                "height": 128,
                "scale": 0.5
              },
              
              {
                "filename": "__base__/graphics/entity/pipe-covers/pipe-cover-east-shadow.png",
                "priority": "extra-high",
                "width": 128,
                "height": 128,
                "scale": 0.5,
                "draw_as_shadow": true
              }
            ]
          },
          "south": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/pipe-covers/pipe-cover-south.png",
                "priority": "extra-high",
                "width": 128,
                "height": 128,
                "scale": 0.5
              },
              
              {
                "filename": "__base__/graphics/entity/pipe-covers/pipe-cover-south-shadow.png",
                "priority": "extra-high",
                "width": 128,
                "height": 128,
                "scale": 0.5,
                "draw_as_shadow": true
              }
            ]
          },
          "west": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/pipe-covers/pipe-cover-west.png",
                "priority": "extra-high",
                "width": 128,
                "height": 128,
                "scale": 0.5
              },
              
              {
                "filename": "__base__/graphics/entity/pipe-covers/pipe-cover-west-shadow.png",
                "priority": "extra-high",
                "width": 128,
                "height": 128,
                "scale": 0.5,
                "draw_as_shadow": true
              }
            ]
          }
        },
        "pipe_connections": 
        [
          
          {
            "flow_direction": "input-output",
            "direction": 12,
            "position": 
            [
              -1,
              0.5
            ]
          },
          
          {
            "flow_direction": "input-output",
            "direction": 4,
            "position": 
            [
              1,
              0.5
            ]
          }
        ],
        "production_type": "input",
        "filter": "water"
      },
      "output_fluid_box": 
      {
        "volume": 200,
        "pipe_covers": 
        {
          "north": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/pipe-covers/pipe-cover-north.png",
                "priority": "extra-high",
                "width": 128,
                "height": 128,
                "scale": 0.5
              },
              
              {
                "filename": "__base__/graphics/entity/pipe-covers/pipe-cover-north-shadow.png",
                "priority": "extra-high",
                "width": 128,
                "height": 128,
                "scale": 0.5,
                "draw_as_shadow": true
              }
            ]
          },
          "east": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/pipe-covers/pipe-cover-east.png",
                "priority": "extra-high",
                "width": 128,
                "height": 128,
                "scale": 0.5
              },
              
              {
                "filename": "__base__/graphics/entity/pipe-covers/pipe-cover-east-shadow.png",
                "priority": "extra-high",
                "width": 128,
                "height": 128,
                "scale": 0.5,
                "draw_as_shadow": true
              }
            ]
          },
          "south": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/pipe-covers/pipe-cover-south.png",
                "priority": "extra-high",
                "width": 128,
                "height": 128,
                "scale": 0.5
              },
              
              {
                "filename": "__base__/graphics/entity/pipe-covers/pipe-cover-south-shadow.png",
                "priority": "extra-high",
                "width": 128,
                "height": 128,
                "scale": 0.5,
                "draw_as_shadow": true
              }
            ]
          },
          "west": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/pipe-covers/pipe-cover-west.png",
                "priority": "extra-high",
                "width": 128,
                "height": 128,
                "scale": 0.5
              },
              
              {
                "filename": "__base__/graphics/entity/pipe-covers/pipe-cover-west-shadow.png",
                "priority": "extra-high",
                "width": 128,
                "height": 128,
                "scale": 0.5,
                "draw_as_shadow": true
              }
            ]
          }
        },
        "pipe_connections": 
        [
          
          {
            "flow_direction": "output",
            "direction": 0,
            "position": 
            [
              0,
              -0.5
            ]
          }
        ],
        "production_type": "output",
        "filter": "steam"
      },
      "energy_consumption": "10MW",
      "energy_source": 
      {
        "type": "heat",
        "max_temperature": 1000,
        "specific_heat": "1MJ",
        "max_transfer": "2GW",
        "min_working_temperature": 500,
        "minimum_glow_temperature": 350,
        "connections": 
        [
          
          {
            "position": 
            [
              0,
              0.5
            ],
            "direction": 8
          }
        ],
        "pipe_covers": 
        {
          "north": 
          {
            "filename": "__base__/graphics/entity/heat-exchanger/heatex-endings.png",
            "priority": "high",
            "x": 0,
            "y": 0,
            "width": 64,
            "height": 64,
            "tint_as_overlay": false,
            "scale": 0.5
          },
          "east": 
          {
            "filename": "__base__/graphics/entity/heat-exchanger/heatex-endings.png",
            "priority": "high",
            "x": 64,
            "y": 0,
            "width": 64,
            "height": 64,
            "tint_as_overlay": false,
            "scale": 0.5
          },
          "south": 
          {
            "filename": "__base__/graphics/entity/heat-exchanger/heatex-endings.png",
            "priority": "high",
            "x": 128,
            "y": 0,
            "width": 64,
            "height": 64,
            "tint_as_overlay": false,
            "scale": 0.5
          },
          "west": 
          {
            "filename": "__base__/graphics/entity/heat-exchanger/heatex-endings.png",
            "priority": "high",
            "x": 192,
            "y": 0,
            "width": 64,
            "height": 64,
            "tint_as_overlay": false,
            "scale": 0.5
          }
        },
        "heat_pipe_covers": 
        {
          "north": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/heat-exchanger/heatex-endings-heated.png",
                "priority": "high",
                "x": 0,
                "y": 0,
                "width": 64,
                "height": 64,
                "tint_as_overlay": false,
                "scale": 0.5,
                "tint": 
                [
                  0.5,
                  0.4,
                  0.3,
                  0.5
                ]
              },
              
              {
                "filename": "__base__/graphics/entity/heat-exchanger/heatex-endings-heated.png",
                "priority": "high",
                "x": 0,
                "y": 0,
                "width": 64,
                "height": 64,
                "draw_as_light": true,
                "tint_as_overlay": false,
                "scale": 0.5,
                "tint": 
                [
                  1,
                  1,
                  1,
                  1
                ]
              }
            ]
          },
          "east": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/heat-exchanger/heatex-endings-heated.png",
                "priority": "high",
                "x": 64,
                "y": 0,
                "width": 64,
                "height": 64,
                "tint_as_overlay": false,
                "scale": 0.5,
                "tint": 
                [
                  0.5,
                  0.4,
                  0.3,
                  0.5
                ]
              },
              
              {
                "filename": "__base__/graphics/entity/heat-exchanger/heatex-endings-heated.png",
                "priority": "high",
                "x": 64,
                "y": 0,
                "width": 64,
                "height": 64,
                "draw_as_light": true,
                "tint_as_overlay": false,
                "scale": 0.5,
                "tint": 
                [
                  1,
                  1,
                  1,
                  1
                ]
              }
            ]
          },
          "south": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/heat-exchanger/heatex-endings-heated.png",
                "priority": "high",
                "x": 128,
                "y": 0,
                "width": 64,
                "height": 64,
                "tint_as_overlay": false,
                "scale": 0.5,
                "tint": 
                [
                  0.5,
                  0.4,
                  0.3,
                  0.5
                ]
              },
              
              {
                "filename": "__base__/graphics/entity/heat-exchanger/heatex-endings-heated.png",
                "priority": "high",
                "x": 128,
                "y": 0,
                "width": 64,
                "height": 64,
                "draw_as_light": true,
                "tint_as_overlay": false,
                "scale": 0.5,
                "tint": 
                [
                  1,
                  1,
                  1,
                  1
                ]
              }
            ]
          },
          "west": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/heat-exchanger/heatex-endings-heated.png",
                "priority": "high",
                "x": 192,
                "y": 0,
                "width": 64,
                "height": 64,
                "tint_as_overlay": false,
                "scale": 0.5,
                "tint": 
                [
                  0.5,
                  0.4,
                  0.3,
                  0.5
                ]
              },
              
              {
                "filename": "__base__/graphics/entity/heat-exchanger/heatex-endings-heated.png",
                "priority": "high",
                "x": 192,
                "y": 0,
                "width": 64,
                "height": 64,
                "draw_as_light": true,
                "tint_as_overlay": false,
                "scale": 0.5,
                "tint": 
                [
                  1,
                  1,
                  1,
                  1
                ]
              }
            ]
          }
        },
        "heat_picture": 
        {
          "north": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/heat-exchanger/heatex-N-heated.png",
                "priority": "extra-high",
                "width": 44,
                "height": 96,
                "shift": 
                [
                  -0.015625,
                  0.265625
                ],
                "scale": 0.5,
                "tint": 
                [
                  0.5,
                  0.4,
                  0.3,
                  0.5
                ]
              },
              
              {
                "filename": "__base__/graphics/entity/heat-exchanger/heatex-N-heated.png",
                "priority": "extra-high",
                "width": 44,
                "height": 96,
                "shift": 
                [
                  -0.015625,
                  0.265625
                ],
                "scale": 0.5,
                "tint": 
                [
                  1,
                  1,
                  1,
                  1
                ],
                "draw_as_light": true
              }
            ]
          },
          "east": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/heat-exchanger/heatex-E-heated.png",
                "priority": "extra-high",
                "width": 80,
                "height": 80,
                "shift": 
                [
                  -0.65625,
                  -0.40625
                ],
                "scale": 0.5,
                "tint": 
                [
                  0.5,
                  0.4,
                  0.3,
                  0.5
                ]
              },
              
              {
                "filename": "__base__/graphics/entity/heat-exchanger/heatex-E-heated.png",
                "priority": "extra-high",
                "width": 80,
                "height": 80,
                "shift": 
                [
                  -0.65625,
                  -0.40625
                ],
                "scale": 0.5,
                "tint": 
                [
                  1,
                  1,
                  1,
                  1
                ],
                "draw_as_light": true
              }
            ]
          },
          "south": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/heat-exchanger/heatex-S-heated.png",
                "priority": "extra-high",
                "width": 28,
                "height": 40,
                "shift": 
                [
                  -0.03125,
                  -0.9375
                ],
                "scale": 0.5,
                "tint": 
                [
                  0.5,
                  0.4,
                  0.3,
                  0.5
                ]
              },
              
              {
                "filename": "__base__/graphics/entity/heat-exchanger/heatex-S-heated.png",
                "priority": "extra-high",
                "width": 28,
                "height": 40,
                "shift": 
                [
                  -0.03125,
                  -0.9375
                ],
                "scale": 0.5,
                "tint": 
                [
                  1,
                  1,
                  1,
                  1
                ],
                "draw_as_light": true
              }
            ]
          },
          "west": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/heat-exchanger/heatex-W-heated.png",
                "priority": "extra-high",
                "width": 64,
                "height": 76,
                "shift": 
                [
                  0.71875,
                  -0.40625
                ],
                "scale": 0.5,
                "tint": 
                [
                  0.5,
                  0.4,
                  0.3,
                  0.5
                ]
              },
              
              {
                "filename": "__base__/graphics/entity/heat-exchanger/heatex-W-heated.png",
                "priority": "extra-high",
                "width": 64,
                "height": 76,
                "shift": 
                [
                  0.71875,
                  -0.40625
                ],
                "scale": 0.5,
                "tint": 
                [
                  1,
                  1,
                  1,
                  1
                ],
                "draw_as_light": true
              }
            ]
          }
        }
      },
      "working_sound": 
      {
        "sound": 
        {
          "filename": "__base__/sound/heat-exchanger.ogg",
          "volume": 0.65,
          "modifiers": 
          {
            "type": "main-menu",
            "volume_multiplier": 0.7
          }
        },
        "audible_distance_modifier": 0.5,
        "fade_in_ticks": 4,
        "fade_out_ticks": 20
      },
      "open_sound": 
      {
        "filename": "__base__/sound/open-close/steam-open.ogg",
        "volume": 0.5699999999999999289457264239899814128875732421875
      },
      "close_sound": 
      {
        "filename": "__base__/sound/open-close/steam-close.ogg",
        "volume": 0.5
      },
      "pictures": 
      {
        "north": 
        {
          "structure": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/heat-exchanger/heatex-N-idle.png",
                "priority": "extra-high",
                "width": 269,
                "height": 221,
                "shift": 
                [
                  -0.0390625,
                  0.1640625
                ],
                "scale": 0.5
              },
              
              {
                "filename": "__base__/graphics/entity/boiler/boiler-N-shadow.png",
                "priority": "extra-high",
                "width": 274,
                "height": 164,
                "scale": 0.5,
                "shift": 
                [
                  0.640625,
                  0.28125
                ],
                "draw_as_shadow": true
              }
            ]
          }
        },
        "east": 
        {
          "structure": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/heat-exchanger/heatex-E-idle.png",
                "priority": "extra-high",
                "width": 211,
                "height": 301,
                "shift": 
                [
                  -0.0546875,
                  0.0390625
                ],
                "scale": 0.5
              },
              
              {
                "filename": "__base__/graphics/entity/boiler/boiler-E-shadow.png",
                "priority": "extra-high",
                "width": 184,
                "height": 194,
                "scale": 0.5,
                "shift": 
                [
                  0.9375,
                  0.296875
                ],
                "draw_as_shadow": true
              }
            ]
          }
        },
        "south": 
        {
          "structure": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/heat-exchanger/heatex-S-idle.png",
                "priority": "extra-high",
                "width": 260,
                "height": 201,
                "shift": 
                [
                  0.125,
                  0.3359375
                ],
                "scale": 0.5
              },
              
              {
                "filename": "__base__/graphics/entity/boiler/boiler-S-shadow.png",
                "priority": "extra-high",
                "width": 311,
                "height": 131,
                "scale": 0.5,
                "shift": 
                [
                  0.9296875,
                  0.4921875
                ],
                "draw_as_shadow": true
              }
            ]
          }
        },
        "west": 
        {
          "structure": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/heat-exchanger/heatex-W-idle.png",
                "priority": "extra-high",
                "width": 196,
                "height": 273,
                "shift": 
                [
                  0.046875,
                  0.2421875
                ],
                "scale": 0.5
              },
              
              {
                "filename": "__base__/graphics/entity/boiler/boiler-W-shadow.png",
                "priority": "extra-high",
                "width": 206,
                "height": 218,
                "scale": 0.5,
                "shift": 
                [
                  0.609375,
                  0.203125
                ],
                "draw_as_shadow": true
              }
            ]
          }
        }
      },
      "burning_cooldown": 20,
      "water_reflection": 
      {
        "pictures": 
        {
          "filename": "__base__/graphics/entity/boiler/boiler-reflection.png",
          "priority": "extra-high",
          "width": 28,
          "height": 32,
          "shift": 
          [
            0.15625,
            0.9375
          ],
          "variation_count": 4,
          "scale": 5
        },
        "rotate": false,
        "orientation_to_variation": true
      }
    }
  };