import { RocketSiloNode } from "./RocketSilosType";

export const RocketSilos: Record<string, RocketSiloNode> = 
{
  "rocket-silo": 
  {
    "type": "rocket-silo",
    "name": "rocket-silo",
    "icon": "__base__/graphics/icons/rocket-silo.png",
    "flags": 
    [
      "placeable-player",
      "player-creation"
    ],
    "fast_transfer_modules_into_module_slots_only": true,
    "crafting_categories": 
    [
      "rocket-building"
    ],
    "fast_replaceable_group": "rocket-silo",
    "rocket_parts_required": 50,
    "rocket_quick_relaunch_start_offset": -0.625,
    "cargo_station_parameters": 
    {
      "hatch_definitions": 
      [
        
        {
          "offset": 
          [
            0,
            0
          ],
          "pod_shadow_offset": 
          [
            0,
            0
          ],
          "cargo_unit_entity_to_spawn": "",
          "receiving_cargo_units": 
          {}
        }
      ],
      "prefer_packed_cargo_units": true
    },
    "crafting_speed": 1,
    "to_be_inserted_to_rocket_inventory_size": 20,
    "logistic_trash_inventory_size": 20,
    "icon_draw_specification": 
    {
      "shift": 
      [
        0,
        2
      ]
    },
    "module_slots": 4,
    "icons_positioning": 
    [
      
      {
        "inventory_index": 4,
        "shift": 
        [
          0,
          3.29999999999999982236431605997495353221893310546875
        ]
      }
    ],
    "fixed_recipe": "rocket-part",
    "show_recipe_icon": false,
    "allowed_effects": 
    [
      "consumption",
      "speed",
      "productivity",
      "pollution"
    ],
    "minable": 
    {
      "mining_time": 1,
      "result": "rocket-silo"
    },
    "max_health": 5000,
    "corpse": "rocket-silo-remnants",
    "dying_explosion": "rocket-silo-explosion",
    "collision_box": 
    [
      
      [
        -4.20000000000000017763568394002504646778106689453125,
        -4.20000000000000017763568394002504646778106689453125
      ],
      
      [
        4.20000000000000017763568394002504646778106689453125,
        4.20000000000000017763568394002504646778106689453125
      ]
    ],
    "selection_box": 
    [
      
      [
        -4.5,
        -4.5
      ],
      
      [
        4.5,
        4.5
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
    "hole_clipping_box": 
    [
      
      [
        -2.75,
        -1.149999999999999911182158029987476766109466552734375
      ],
      
      [
        2.75,
        2.25
      ]
    ],
    "resistances": 
    [
      
      {
        "type": "fire",
        "percent": 60
      },
      
      {
        "type": "impact",
        "percent": 60
      }
    ],
    "impact_category": "metal-large",
    "energy_source": 
    {
      "type": "electric",
      "usage_priority": "primary-input"
    },
    "energy_usage": "250kW",
    "lamp_energy_usage": "0kW",
    "active_energy_usage": "3990kW",
    "rocket_entity": "rocket-silo-rocket",
    "times_to_blink": 3,
    "light_blinking_speed": 0.0055555555555555553581825733999721705913543701171875,
    "door_opening_speed": 0.0039215686274509803155297049670480191707611083984375,
    "base_engine_light": 
    {
      "intensity": 1,
      "size": 25,
      "shift": 
      [
        0,
        1.5
      ]
    },
    "shadow_sprite": 
    {
      "filename": "__base__/graphics/entity/rocket-silo/00-rocket-silo-shadow.png",
      "priority": "medium",
      "width": 612,
      "height": 578,
      "draw_as_shadow": true,
      "dice": 2,
      "shift": 
      [
        0.21875,
        0.0625
      ],
      "scale": 0.5
    },
    "hole_sprite": 
    {
      "filename": "__base__/graphics/entity/rocket-silo/01-rocket-silo-hole.png",
      "width": 400,
      "height": 270,
      "shift": 
      [
        -0.15625,
        0.5
      ],
      "scale": 0.5
    },
    "hole_light_sprite": 
    {
      "filename": "__base__/graphics/entity/rocket-silo/01-rocket-silo-hole-light.png",
      "width": 400,
      "height": 270,
      "shift": 
      [
        -0.15625,
        0.5
      ],
      "tint": 
      [
        1,
        1,
        1,
        0
      ],
      "scale": 0.5
    },
    "rocket_shadow_overlay_sprite": 
    {
      "filename": "__base__/graphics/entity/rocket-silo/03-rocket-over-shadow-over-rocket.png",
      "width": 426,
      "height": 288,
      "shift": 
      [
        -0.0625,
        0.65625
      ],
      "scale": 0.5
    },
    "rocket_glow_overlay_sprite": 
    {
      "filename": "__base__/graphics/entity/rocket-silo/03-rocket-over-glow.png",
      "blend_mode": "additive",
      "width": 434,
      "height": 446,
      "shift": 
      [
        -0.09375,
        1.125
      ],
      "scale": 0.5
    },
    "door_back_sprite": 
    {
      "filename": "__base__/graphics/entity/rocket-silo/04-door-back.png",
      "width": 312,
      "height": 286,
      "shift": 
      [
        1.15625,
        0.375
      ],
      "scale": 0.5
    },
    "door_back_open_offset": 
    [
      1.8,
      -0.779386050000000096815711003728210926055908203125
    ],
    "door_front_sprite": 
    {
      "filename": "__base__/graphics/entity/rocket-silo/05-door-front.png",
      "width": 332,
      "height": 300,
      "shift": 
      [
        -0.875,
        1.03125
      ],
      "scale": 0.5
    },
    "door_front_open_offset": 
    [
      -1.8,
      0.779386050000000096815711003728210926055908203125
    ],
    "base_day_sprite": 
    {
      "filename": "__base__/graphics/entity/rocket-silo/06-rocket-silo.png",
      "dice_y": 3,
      "width": 608,
      "height": 596,
      "shift": 
      [
        0.09375,
        -0.03125
      ],
      "scale": 0.5
    },
    "red_lights_back_sprites": 
    {
      "layers": 
      [
        
        {
          "filename": "__base__/graphics/entity/rocket-silo/07-red-lights-back/red-light.png",
          "width": 32,
          "height": 32,
          "shift": 
          [
            1.34375,
            -1.09375
          ],
          "scale": 0.5
        },
        
        {
          "filename": "__base__/graphics/entity/rocket-silo/07-red-lights-back/red-light.png",
          "width": 32,
          "height": 32,
          "shift": 
          [
            2.3125,
            -0.4375
          ],
          "scale": 0.5
        },
        
        {
          "filename": "__base__/graphics/entity/rocket-silo/07-red-lights-back/red-light.png",
          "width": 32,
          "height": 32,
          "shift": 
          [
            2.65625,
            0.53125
          ],
          "scale": 0.5
        },
        
        {
          "filename": "__base__/graphics/entity/rocket-silo/07-red-lights-back/red-light.png",
          "width": 32,
          "height": 32,
          "shift": 
          [
            -2.65625,
            0.53125
          ],
          "scale": 0.5
        },
        
        {
          "filename": "__base__/graphics/entity/rocket-silo/07-red-lights-back/red-light.png",
          "width": 32,
          "height": 32,
          "shift": 
          [
            -2.3125,
            -0.4375
          ],
          "scale": 0.5
        },
        
        {
          "filename": "__base__/graphics/entity/rocket-silo/07-red-lights-back/red-light.png",
          "width": 32,
          "height": 32,
          "shift": 
          [
            -1.34375,
            -1.09375
          ],
          "scale": 0.5
        },
        
        {
          "filename": "__base__/graphics/entity/rocket-silo/07-red-lights-back/red-light.png",
          "width": 32,
          "height": 32,
          "shift": 
          [
            0,
            -1.375
          ],
          "scale": 0.5
        }
      ]
    },
    "red_lights_front_sprites": 
    {
      "layers": 
      [
        
        {
          "filename": "__base__/graphics/entity/rocket-silo/07-red-lights-back/red-light.png",
          "width": 32,
          "height": 32,
          "shift": 
          [
            2.3125,
            1.4375
          ],
          "scale": 0.5
        },
        
        {
          "filename": "__base__/graphics/entity/rocket-silo/07-red-lights-back/red-light.png",
          "width": 32,
          "height": 32,
          "shift": 
          [
            1.34375,
            2.03125
          ],
          "scale": 0.5
        },
        
        {
          "filename": "__base__/graphics/entity/rocket-silo/07-red-lights-back/red-light.png",
          "width": 32,
          "height": 32,
          "shift": 
          [
            0,
            2.375
          ],
          "scale": 0.5
        },
        
        {
          "filename": "__base__/graphics/entity/rocket-silo/07-red-lights-back/red-light.png",
          "width": 32,
          "height": 32,
          "shift": 
          [
            0,
            2.375
          ],
          "scale": 0.5
        },
        
        {
          "filename": "__base__/graphics/entity/rocket-silo/07-red-lights-back/red-light.png",
          "width": 32,
          "height": 32,
          "shift": 
          [
            -2.3125,
            1.4375
          ],
          "scale": 0.5
        }
      ]
    },
    "satellite_animation": 
    {
      "filename": "__base__/graphics/entity/rocket-silo/15-rocket-silo-turbine.png",
      "priority": "medium",
      "width": 54,
      "height": 88,
      "frame_count": 32,
      "line_length": 8,
      "animation_speed": 0.4,
      "shift": 
      [
        -3.125,
        3.46875
      ],
      "scale": 0.5
    },
    "arm_01_back_animation": 
    {
      "filename": "__base__/graphics/entity/rocket-silo/08-rocket-silo-arms-back.png",
      "priority": "medium",
      "width": 128,
      "height": 150,
      "frame_count": 32,
      "line_length": 32,
      "animation_speed": 0.3,
      "shift": 
      [
        -1.65625,
        -2.625
      ],
      "scale": 0.5
    },
    "arm_02_right_animation": 
    {
      "filename": "__base__/graphics/entity/rocket-silo/08-rocket-silo-arms-right.png",
      "priority": "medium",
      "width": 182,
      "height": 188,
      "frame_count": 32,
      "line_length": 32,
      "animation_speed": 0.3,
      "shift": 
      [
        3.15625,
        -1.1875
      ],
      "scale": 0.5
    },
    "arm_03_front_animation": 
    {
      "filename": "__base__/graphics/entity/rocket-silo/13-rocket-silo-arms-front.png",
      "priority": "medium",
      "width": 126,
      "height": 228,
      "frame_count": 32,
      "line_length": 32,
      "animation_speed": 0.3,
      "shift": 
      [
        -1.59375,
        0.5
      ],
      "scale": 0.5
    },
    "base_front_sprite": 
    {
      "filename": "__base__/graphics/entity/rocket-silo/14-rocket-silo-front.png",
      "width": 580,
      "height": 262,
      "shift": 
      [
        -0.03125,
        2.4375
      ],
      "scale": 0.5
    },
    "silo_fade_out_start_distance": 8,
    "silo_fade_out_end_distance": 15,
    "alarm_sound": "__base__/sound/silo-alarm.ogg",
    "quick_alarm_sound": 
    {
      "filename": "__base__/sound/silo-alarm-short.ogg",
      "volume": 1,
      "aggregation": 
      {
        "max_count": 2,
        "remove": true,
        "count_already_playing": true
      }
    },
    "clamps_on_sound": 
    {
      "filename": "__base__/sound/silo-clamps-on.ogg",
      "volume": 1,
      "aggregation": 
      {
        "max_count": 1,
        "remove": false,
        "count_already_playing": true
      }
    },
    "clamps_off_sound": 
    {
      "filename": "__base__/sound/silo-clamps-off.ogg",
      "volume": 0.8,
      "aggregation": 
      {
        "max_count": 1,
        "remove": false,
        "count_already_playing": true
      }
    },
    "doors_sound": 
    {
      "filename": "__base__/sound/silo-doors.ogg",
      "volume": 0.8,
      "aggregation": 
      {
        "max_count": 3,
        "remove": true,
        "count_already_playing": true
      }
    },
    "raise_rocket_sound": 
    {
      "filename": "__base__/sound/silo-raise-rocket.ogg",
      "volume": 1,
      "aggregation": 
      {
        "max_count": 2,
        "remove": true,
        "count_already_playing": true
      }
    },
    "open_sound": 
    {
      "filename": "__base__/sound/open-close/silo-open.ogg",
      "volume": 0.7
    },
    "close_sound": 
    {
      "filename": "__base__/sound/open-close/silo-close.ogg",
      "volume": 0.7
    },
    "working_sound": 
    {
      "sound": 
      {
        "filename": "__base__/sound/rocket-silo-working-1.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 3,
          "remove": true,
          "count_already_playing": true
        }
      },
      "fade_in_ticks": 10,
      "fade_out_ticks": 15
    },
    "hole_frozen": 
    {
      "filename": "__space-age__/graphics/entity/frozen/rocket-silo/01-rocket-silo-hole-frozen.png",
      "width": 400,
      "height": 270,
      "shift": 
      [
        -0.15625,
        0.5
      ],
      "scale": 0.5
    },
    "base_frozen": 
    {
      "filename": "__space-age__/graphics/entity/frozen/rocket-silo/06-rocket-silo-frozen.png",
      "width": 608,
      "height": 596,
      "shift": 
      [
        0.09375,
        -0.03125
      ],
      "scale": 0.5
    },
    "door_back_frozen": 
    {
      "filename": "__space-age__/graphics/entity/frozen/rocket-silo/04-door-back-frozen.png",
      "width": 312,
      "height": 286,
      "shift": 
      [
        1.15625,
        0.375
      ],
      "scale": 0.5
    },
    "door_front_frozen": 
    {
      "filename": "__space-age__/graphics/entity/frozen/rocket-silo/05-door-front-frozen.png",
      "width": 332,
      "height": 300,
      "shift": 
      [
        -0.875,
        1.03125
      ],
      "scale": 0.5
    },
    "base_front_frozen": 
    {
      "filename": "__space-age__/graphics/entity/frozen/rocket-silo/14-rocket-silo-front-frozen.png",
      "width": 580,
      "height": 262,
      "shift": 
      [
        -0.03125,
        2.4375
      ],
      "scale": 0.5
    },
    "launch_to_space_platforms": true,
    "heating_energy": "300kW",
    "surface_conditions": 
    [
      
      {
        "property": "pressure",
        "min": 1
      }
    ],
    "circuit_connector": 
    [
      
      {
        "sprites": 
        {
          "connector_main": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04a-base-sequence.png",
            "priority": "low",
            "width": 52,
            "height": 50,
            "scale": 0.5,
            "x": 52,
            "y": 150,
            "shift": 
            [
              1.515625,
              3.28125
            ]
          },
          "connector_shadow": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04b-base-shadow-sequence.png",
            "priority": "low",
            "draw_as_shadow": true,
            "width": 60,
            "height": 46,
            "scale": 0.5,
            "x": 60,
            "y": 138,
            "shift": 
            [
              2.4375,
              4.109375
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 62,
            "y": 174,
            "shift": 
            [
              1.515625,
              3.28125
            ]
          },
          "wire_pins_shadow": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04d-wire-shadow-sequence.png",
            "priority": "low",
            "draw_as_shadow": true,
            "width": 68,
            "height": 54,
            "scale": 0.5,
            "x": 68,
            "y": 162,
            "shift": 
            [
              2.515625,
              4.140625
            ]
          },
          "led_blue": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04e-blue-LED-on-sequence.png",
            "priority": "low",
            "draw_as_glow": true,
            "width": 60,
            "height": 60,
            "scale": 0.5,
            "x": 60,
            "y": 180,
            "shift": 
            [
              1.515625,
              3.25
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 46,
            "y": 132,
            "shift": 
            [
              1.515625,
              3.25
            ]
          },
          "led_green": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04h-green-LED-sequence.png",
            "priority": "low",
            "draw_as_glow": true,
            "width": 48,
            "height": 46,
            "scale": 0.5,
            "x": 48,
            "y": 138,
            "shift": 
            [
              1.515625,
              3.25
            ]
          },
          "led_red": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04i-red-LED-sequence.png",
            "priority": "low",
            "draw_as_glow": true,
            "width": 48,
            "height": 46,
            "scale": 0.5,
            "x": 48,
            "y": 138,
            "shift": 
            [
              1.515625,
              3.25
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            1.421875,
            3.5
          ],
          "red_green_led_light_offset": 
          [
            1.390625,
            3.40625
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              1.640625,
              3.4375
            ],
            "green": 
            [
              1.578125,
              3.625
            ]
          },
          "shadow": 
          {
            "red": 
            [
              2.796875,
              4.46875
            ],
            "green": 
            [
              2.546875,
              4.5
            ]
          }
        }
      },
      
      {
        "sprites": 
        {
          "connector_main": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04a-base-sequence.png",
            "priority": "low",
            "width": 52,
            "height": 50,
            "scale": 0.5,
            "x": 52,
            "y": 150,
            "shift": 
            [
              1.515625,
              3.28125
            ]
          },
          "connector_shadow": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04b-base-shadow-sequence.png",
            "priority": "low",
            "draw_as_shadow": true,
            "width": 60,
            "height": 46,
            "scale": 0.5,
            "x": 60,
            "y": 138,
            "shift": 
            [
              2.4375,
              4.109375
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 62,
            "y": 174,
            "shift": 
            [
              1.515625,
              3.28125
            ]
          },
          "wire_pins_shadow": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04d-wire-shadow-sequence.png",
            "priority": "low",
            "draw_as_shadow": true,
            "width": 68,
            "height": 54,
            "scale": 0.5,
            "x": 68,
            "y": 162,
            "shift": 
            [
              2.515625,
              4.140625
            ]
          },
          "led_blue": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04e-blue-LED-on-sequence.png",
            "priority": "low",
            "draw_as_glow": true,
            "width": 60,
            "height": 60,
            "scale": 0.5,
            "x": 60,
            "y": 180,
            "shift": 
            [
              1.515625,
              3.25
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 46,
            "y": 132,
            "shift": 
            [
              1.515625,
              3.25
            ]
          },
          "led_green": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04h-green-LED-sequence.png",
            "priority": "low",
            "draw_as_glow": true,
            "width": 48,
            "height": 46,
            "scale": 0.5,
            "x": 48,
            "y": 138,
            "shift": 
            [
              1.515625,
              3.25
            ]
          },
          "led_red": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04i-red-LED-sequence.png",
            "priority": "low",
            "draw_as_glow": true,
            "width": 48,
            "height": 46,
            "scale": 0.5,
            "x": 48,
            "y": 138,
            "shift": 
            [
              1.515625,
              3.25
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            1.421875,
            3.5
          ],
          "red_green_led_light_offset": 
          [
            1.390625,
            3.40625
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              1.640625,
              3.4375
            ],
            "green": 
            [
              1.578125,
              3.625
            ]
          },
          "shadow": 
          {
            "red": 
            [
              2.796875,
              4.46875
            ],
            "green": 
            [
              2.546875,
              4.5
            ]
          }
        }
      },
      
      {
        "sprites": 
        {
          "connector_main": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04a-base-sequence.png",
            "priority": "low",
            "width": 52,
            "height": 50,
            "scale": 0.5,
            "x": 52,
            "y": 150,
            "shift": 
            [
              1.515625,
              3.28125
            ]
          },
          "connector_shadow": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04b-base-shadow-sequence.png",
            "priority": "low",
            "draw_as_shadow": true,
            "width": 60,
            "height": 46,
            "scale": 0.5,
            "x": 60,
            "y": 138,
            "shift": 
            [
              2.4375,
              4.109375
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 62,
            "y": 174,
            "shift": 
            [
              1.515625,
              3.28125
            ]
          },
          "wire_pins_shadow": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04d-wire-shadow-sequence.png",
            "priority": "low",
            "draw_as_shadow": true,
            "width": 68,
            "height": 54,
            "scale": 0.5,
            "x": 68,
            "y": 162,
            "shift": 
            [
              2.515625,
              4.140625
            ]
          },
          "led_blue": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04e-blue-LED-on-sequence.png",
            "priority": "low",
            "draw_as_glow": true,
            "width": 60,
            "height": 60,
            "scale": 0.5,
            "x": 60,
            "y": 180,
            "shift": 
            [
              1.515625,
              3.25
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 46,
            "y": 132,
            "shift": 
            [
              1.515625,
              3.25
            ]
          },
          "led_green": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04h-green-LED-sequence.png",
            "priority": "low",
            "draw_as_glow": true,
            "width": 48,
            "height": 46,
            "scale": 0.5,
            "x": 48,
            "y": 138,
            "shift": 
            [
              1.515625,
              3.25
            ]
          },
          "led_red": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04i-red-LED-sequence.png",
            "priority": "low",
            "draw_as_glow": true,
            "width": 48,
            "height": 46,
            "scale": 0.5,
            "x": 48,
            "y": 138,
            "shift": 
            [
              1.515625,
              3.25
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            1.421875,
            3.5
          ],
          "red_green_led_light_offset": 
          [
            1.390625,
            3.40625
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              1.640625,
              3.4375
            ],
            "green": 
            [
              1.578125,
              3.625
            ]
          },
          "shadow": 
          {
            "red": 
            [
              2.796875,
              4.46875
            ],
            "green": 
            [
              2.546875,
              4.5
            ]
          }
        }
      },
      
      {
        "sprites": 
        {
          "connector_main": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04a-base-sequence.png",
            "priority": "low",
            "width": 52,
            "height": 50,
            "scale": 0.5,
            "x": 52,
            "y": 150,
            "shift": 
            [
              1.515625,
              3.28125
            ]
          },
          "connector_shadow": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04b-base-shadow-sequence.png",
            "priority": "low",
            "draw_as_shadow": true,
            "width": 60,
            "height": 46,
            "scale": 0.5,
            "x": 60,
            "y": 138,
            "shift": 
            [
              2.4375,
              4.109375
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 62,
            "y": 174,
            "shift": 
            [
              1.515625,
              3.28125
            ]
          },
          "wire_pins_shadow": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04d-wire-shadow-sequence.png",
            "priority": "low",
            "draw_as_shadow": true,
            "width": 68,
            "height": 54,
            "scale": 0.5,
            "x": 68,
            "y": 162,
            "shift": 
            [
              2.515625,
              4.140625
            ]
          },
          "led_blue": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04e-blue-LED-on-sequence.png",
            "priority": "low",
            "draw_as_glow": true,
            "width": 60,
            "height": 60,
            "scale": 0.5,
            "x": 60,
            "y": 180,
            "shift": 
            [
              1.515625,
              3.25
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 46,
            "y": 132,
            "shift": 
            [
              1.515625,
              3.25
            ]
          },
          "led_green": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04h-green-LED-sequence.png",
            "priority": "low",
            "draw_as_glow": true,
            "width": 48,
            "height": 46,
            "scale": 0.5,
            "x": 48,
            "y": 138,
            "shift": 
            [
              1.515625,
              3.25
            ]
          },
          "led_red": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04i-red-LED-sequence.png",
            "priority": "low",
            "draw_as_glow": true,
            "width": 48,
            "height": 46,
            "scale": 0.5,
            "x": 48,
            "y": 138,
            "shift": 
            [
              1.515625,
              3.25
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            1.421875,
            3.5
          ],
          "red_green_led_light_offset": 
          [
            1.390625,
            3.40625
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              1.640625,
              3.4375
            ],
            "green": 
            [
              1.578125,
              3.625
            ]
          },
          "shadow": 
          {
            "red": 
            [
              2.796875,
              4.46875
            ],
            "green": 
            [
              2.546875,
              4.5
            ]
          }
        }
      }
    ],
    "circuit_wire_max_distance": 9
  }
};