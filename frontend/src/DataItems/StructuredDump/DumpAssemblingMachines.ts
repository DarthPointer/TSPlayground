import { AssemblingMachineNode } from "./AssemblingMachinesType";

export const AssemblingMachines: Record<string, AssemblingMachineNode> =
{
  "assembling-machine-1": 
  {
    "type": "assembling-machine",
    "name": "assembling-machine-1",
    "icon": "__base__/graphics/icons/assembling-machine-1.png",
    "flags": 
    [
      "placeable-neutral",
      "placeable-player",
      "player-creation"
    ],
    "minable": 
    {
      "mining_time": 0.2,
      "result": "assembling-machine-1"
    },
    "max_health": 300,
    "corpse": "assembling-machine-1-remnants",
    "dying_explosion": "assembling-machine-1-explosion",
    "icon_draw_specification": 
    {
      "shift": 
      [
        0,
        -0.3
      ]
    },
    "resistances": 
    [
      
      {
        "type": "fire",
        "percent": 70
      }
    ],
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
    "fast_replaceable_group": "assembling-machine",
    "next_upgrade": "assembling-machine-2",
    "circuit_wire_max_distance": 9,
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
            "x": 104,
            "y": 100,
            "shift": 
            [
              0.75,
              0.8125
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
            "x": 120,
            "y": 92,
            "shift": 
            [
              1.171875,
              1.046875
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 124,
            "y": 116,
            "shift": 
            [
              0.75,
              0.8125
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
            "x": 136,
            "y": 108,
            "shift": 
            [
              1.25,
              1.078125
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
            "x": 120,
            "y": 120,
            "shift": 
            [
              0.75,
              0.78125
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 92,
            "y": 88,
            "shift": 
            [
              0.75,
              0.78125
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
            "x": 96,
            "y": 92,
            "shift": 
            [
              0.75,
              0.78125
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
            "x": 96,
            "y": 92,
            "shift": 
            [
              0.75,
              0.78125
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            0.75,
            1.03125
          ],
          "red_green_led_light_offset": 
          [
            0.75,
            0.875
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              1,
              0.8125
            ],
            "green": 
            [
              1.0625,
              1.03125
            ]
          },
          "shadow": 
          {
            "red": 
            [
              1.6875,
              1.25
            ],
            "green": 
            [
              1.5625,
              1.3125
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
            "x": 104,
            "y": 100,
            "shift": 
            [
              0.75,
              0.8125
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
            "x": 120,
            "y": 92,
            "shift": 
            [
              1.171875,
              1.046875
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 124,
            "y": 116,
            "shift": 
            [
              0.75,
              0.8125
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
            "x": 136,
            "y": 108,
            "shift": 
            [
              1.25,
              1.078125
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
            "x": 120,
            "y": 120,
            "shift": 
            [
              0.75,
              0.78125
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 92,
            "y": 88,
            "shift": 
            [
              0.75,
              0.78125
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
            "x": 96,
            "y": 92,
            "shift": 
            [
              0.75,
              0.78125
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
            "x": 96,
            "y": 92,
            "shift": 
            [
              0.75,
              0.78125
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            0.75,
            1.03125
          ],
          "red_green_led_light_offset": 
          [
            0.75,
            0.875
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              1,
              0.8125
            ],
            "green": 
            [
              1.0625,
              1.03125
            ]
          },
          "shadow": 
          {
            "red": 
            [
              1.6875,
              1.25
            ],
            "green": 
            [
              1.5625,
              1.3125
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
            "x": 104,
            "y": 100,
            "shift": 
            [
              0.75,
              0.8125
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
            "x": 120,
            "y": 92,
            "shift": 
            [
              1.171875,
              1.046875
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 124,
            "y": 116,
            "shift": 
            [
              0.75,
              0.8125
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
            "x": 136,
            "y": 108,
            "shift": 
            [
              1.25,
              1.078125
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
            "x": 120,
            "y": 120,
            "shift": 
            [
              0.75,
              0.78125
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 92,
            "y": 88,
            "shift": 
            [
              0.75,
              0.78125
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
            "x": 96,
            "y": 92,
            "shift": 
            [
              0.75,
              0.78125
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
            "x": 96,
            "y": 92,
            "shift": 
            [
              0.75,
              0.78125
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            0.75,
            1.03125
          ],
          "red_green_led_light_offset": 
          [
            0.75,
            0.875
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              1,
              0.8125
            ],
            "green": 
            [
              1.0625,
              1.03125
            ]
          },
          "shadow": 
          {
            "red": 
            [
              1.6875,
              1.25
            ],
            "green": 
            [
              1.5625,
              1.3125
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
            "x": 104,
            "y": 100,
            "shift": 
            [
              0.75,
              0.8125
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
            "x": 120,
            "y": 92,
            "shift": 
            [
              1.171875,
              1.046875
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 124,
            "y": 116,
            "shift": 
            [
              0.75,
              0.8125
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
            "x": 136,
            "y": 108,
            "shift": 
            [
              1.25,
              1.078125
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
            "x": 120,
            "y": 120,
            "shift": 
            [
              0.75,
              0.78125
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 92,
            "y": 88,
            "shift": 
            [
              0.75,
              0.78125
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
            "x": 96,
            "y": 92,
            "shift": 
            [
              0.75,
              0.78125
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
            "x": 96,
            "y": 92,
            "shift": 
            [
              0.75,
              0.78125
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            0.75,
            1.03125
          ],
          "red_green_led_light_offset": 
          [
            0.75,
            0.875
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              1,
              0.8125
            ],
            "green": 
            [
              1.0625,
              1.03125
            ]
          },
          "shadow": 
          {
            "red": 
            [
              1.6875,
              1.25
            ],
            "green": 
            [
              1.5625,
              1.3125
            ]
          }
        }
      }
    ],
    "alert_icon_shift": 
    [
      0,
      -0.375
    ],
    "graphics_set": 
    {
      "animation": 
      {
        "layers": 
        [
          
          {
            "filename": "__base__/graphics/entity/assembling-machine-1/assembling-machine-1.png",
            "priority": "high",
            "width": 214,
            "height": 226,
            "frame_count": 32,
            "line_length": 8,
            "shift": 
            [
              0,
              0.0625
            ],
            "scale": 0.5
          },
          
          {
            "filename": "__base__/graphics/entity/assembling-machine-1/assembling-machine-1-shadow.png",
            "priority": "high",
            "width": 190,
            "height": 165,
            "line_length": 1,
            "repeat_count": 32,
            "draw_as_shadow": true,
            "shift": 
            [
              0.265625,
              0.15625
            ],
            "scale": 0.5
          }
        ]
      },
      "reset_animation_when_frozen": true,
      "frozen_patch": 
      {
        "filename": "__space-age__/graphics/entity/frozen/assembling-machine/assembling-machine-1-frozen.png",
        "priority": "high",
        "width": 214,
        "height": 226,
        "shift": 
        [
          0,
          0.0625
        ],
        "scale": 0.5
      }
    },
    "crafting_categories": 
    [
      "crafting",
      "basic-crafting",
      "advanced-crafting",
      "electronics",
      "pressing"
    ],
    "crafting_speed": 0.5,
    "energy_source": 
    {
      "type": "electric",
      "usage_priority": "secondary-input",
      "emissions_per_minute": 
      {
        "pollution": 4
      }
    },
    "energy_usage": "75kW",
    "open_sound": 
    {
      "filename": "__base__/sound/machine-open.ogg",
      "volume": 0.5
    },
    "close_sound": 
    {
      "filename": "__base__/sound/machine-close.ogg",
      "volume": 0.5
    },
    "allowed_effects": 
    [
      "speed",
      "consumption",
      "pollution"
    ],
    "effect_receiver": 
    {
      "uses_module_effects": false,
      "uses_beacon_effects": false,
      "uses_surface_effects": true
    },
    "impact_category": "metal",
    "working_sound": 
    {
      "sound": 
      {
        "filename": "__base__/sound/assembling-machine-t1-1.ogg",
        "volume": 0.5
      },
      "audible_distance_modifier": 0.5,
      "fade_in_ticks": 4,
      "fade_out_ticks": 20
    },
    "heating_energy": "100kW"
  },
  "assembling-machine-2": 
  {
    "type": "assembling-machine",
    "name": "assembling-machine-2",
    "icon": "__base__/graphics/icons/assembling-machine-2.png",
    "flags": 
    [
      "placeable-neutral",
      "placeable-player",
      "player-creation"
    ],
    "minable": 
    {
      "mining_time": 0.2,
      "result": "assembling-machine-2"
    },
    "max_health": 350,
    "corpse": "assembling-machine-2-remnants",
    "dying_explosion": "assembling-machine-2-explosion",
    "icon_draw_specification": 
    {
      "shift": 
      [
        0,
        -0.3
      ]
    },
    "circuit_wire_max_distance": 9,
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
            "x": 104,
            "y": 100,
            "shift": 
            [
              0.75,
              0.8125
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
            "x": 120,
            "y": 92,
            "shift": 
            [
              1.171875,
              1.046875
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 124,
            "y": 116,
            "shift": 
            [
              0.75,
              0.8125
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
            "x": 136,
            "y": 108,
            "shift": 
            [
              1.25,
              1.078125
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
            "x": 120,
            "y": 120,
            "shift": 
            [
              0.75,
              0.78125
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 92,
            "y": 88,
            "shift": 
            [
              0.75,
              0.78125
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
            "x": 96,
            "y": 92,
            "shift": 
            [
              0.75,
              0.78125
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
            "x": 96,
            "y": 92,
            "shift": 
            [
              0.75,
              0.78125
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            0.75,
            1.03125
          ],
          "red_green_led_light_offset": 
          [
            0.75,
            0.875
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              1,
              0.8125
            ],
            "green": 
            [
              1.0625,
              1.03125
            ]
          },
          "shadow": 
          {
            "red": 
            [
              1.6875,
              1.25
            ],
            "green": 
            [
              1.5625,
              1.3125
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
            "x": 104,
            "y": 100,
            "shift": 
            [
              0.75,
              0.8125
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
            "x": 120,
            "y": 92,
            "shift": 
            [
              1.171875,
              1.046875
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 124,
            "y": 116,
            "shift": 
            [
              0.75,
              0.8125
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
            "x": 136,
            "y": 108,
            "shift": 
            [
              1.25,
              1.078125
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
            "x": 120,
            "y": 120,
            "shift": 
            [
              0.75,
              0.78125
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 92,
            "y": 88,
            "shift": 
            [
              0.75,
              0.78125
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
            "x": 96,
            "y": 92,
            "shift": 
            [
              0.75,
              0.78125
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
            "x": 96,
            "y": 92,
            "shift": 
            [
              0.75,
              0.78125
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            0.75,
            1.03125
          ],
          "red_green_led_light_offset": 
          [
            0.75,
            0.875
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              1,
              0.8125
            ],
            "green": 
            [
              1.0625,
              1.03125
            ]
          },
          "shadow": 
          {
            "red": 
            [
              1.6875,
              1.25
            ],
            "green": 
            [
              1.5625,
              1.3125
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
            "x": 104,
            "y": 100,
            "shift": 
            [
              0.75,
              0.8125
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
            "x": 120,
            "y": 92,
            "shift": 
            [
              1.171875,
              1.046875
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 124,
            "y": 116,
            "shift": 
            [
              0.75,
              0.8125
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
            "x": 136,
            "y": 108,
            "shift": 
            [
              1.25,
              1.078125
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
            "x": 120,
            "y": 120,
            "shift": 
            [
              0.75,
              0.78125
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 92,
            "y": 88,
            "shift": 
            [
              0.75,
              0.78125
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
            "x": 96,
            "y": 92,
            "shift": 
            [
              0.75,
              0.78125
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
            "x": 96,
            "y": 92,
            "shift": 
            [
              0.75,
              0.78125
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            0.75,
            1.03125
          ],
          "red_green_led_light_offset": 
          [
            0.75,
            0.875
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              1,
              0.8125
            ],
            "green": 
            [
              1.0625,
              1.03125
            ]
          },
          "shadow": 
          {
            "red": 
            [
              1.6875,
              1.25
            ],
            "green": 
            [
              1.5625,
              1.3125
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
            "x": 104,
            "y": 100,
            "shift": 
            [
              0.75,
              0.8125
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
            "x": 120,
            "y": 92,
            "shift": 
            [
              1.171875,
              1.046875
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 124,
            "y": 116,
            "shift": 
            [
              0.75,
              0.8125
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
            "x": 136,
            "y": 108,
            "shift": 
            [
              1.25,
              1.078125
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
            "x": 120,
            "y": 120,
            "shift": 
            [
              0.75,
              0.78125
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 92,
            "y": 88,
            "shift": 
            [
              0.75,
              0.78125
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
            "x": 96,
            "y": 92,
            "shift": 
            [
              0.75,
              0.78125
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
            "x": 96,
            "y": 92,
            "shift": 
            [
              0.75,
              0.78125
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            0.75,
            1.03125
          ],
          "red_green_led_light_offset": 
          [
            0.75,
            0.875
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              1,
              0.8125
            ],
            "green": 
            [
              1.0625,
              1.03125
            ]
          },
          "shadow": 
          {
            "red": 
            [
              1.6875,
              1.25
            ],
            "green": 
            [
              1.5625,
              1.3125
            ]
          }
        }
      }
    ],
    "alert_icon_shift": 
    [
      0,
      -0.375
    ],
    "resistances": 
    [
      
      {
        "type": "fire",
        "percent": 70
      }
    ],
    "fluid_boxes": 
    [
      
      {
        "production_type": "input",
        "pipe_picture": 
        {
          "north": 
          {
            "filename": "__base__/graphics/entity/assembling-machine-2/assembling-machine-2-pipe-N.png",
            "priority": "extra-high",
            "width": 71,
            "height": 38,
            "shift": 
            [
              0.0703125,
              0.421875
            ],
            "scale": 0.5
          },
          "east": 
          {
            "filename": "__base__/graphics/entity/assembling-machine-2/assembling-machine-2-pipe-E.png",
            "priority": "extra-high",
            "width": 42,
            "height": 76,
            "shift": 
            [
              -0.765625,
              0.03125
            ],
            "scale": 0.5
          },
          "south": 
          {
            "filename": "__base__/graphics/entity/assembling-machine-2/assembling-machine-2-pipe-S.png",
            "priority": "extra-high",
            "width": 88,
            "height": 61,
            "shift": 
            [
              0,
              -0.9765625
            ],
            "scale": 0.5
          },
          "west": 
          {
            "filename": "__base__/graphics/entity/assembling-machine-2/assembling-machine-2-pipe-W.png",
            "priority": "extra-high",
            "width": 39,
            "height": 73,
            "shift": 
            [
              0.8046875,
              0.0390625
            ],
            "scale": 0.5
          }
        },
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
        "volume": 1000,
        "pipe_connections": 
        [
          
          {
            "flow_direction": "input",
            "direction": 0,
            "position": 
            [
              0,
              -1
            ]
          }
        ],
        "secondary_draw_orders": 
        {
          "north": -1
        },
        "pipe_covers_frozen": 
        {
          "north": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-north.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "east": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-east.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "south": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-south.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "west": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-west.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          }
        },
        "pipe_picture_frozen": 
        {
          "north": 
          {
            "filename": "__space-age__/graphics/entity/frozen/assembling-machine/assembling-machine-pipe-N-frozen.png",
            "priority": "extra-high",
            "width": 71,
            "height": 38,
            "shift": 
            [
              0.0703125,
              0.421875
            ],
            "scale": 0.5
          },
          "east": 
          {
            "filename": "__space-age__/graphics/entity/frozen/assembling-machine/assembling-machine-pipe-E-frozen.png",
            "priority": "extra-high",
            "width": 42,
            "height": 76,
            "shift": 
            [
              -0.765625,
              0.03125
            ],
            "scale": 0.5
          },
          "south": 
          {
            "filename": "__space-age__/graphics/entity/frozen/assembling-machine/assembling-machine-pipe-S-frozen.png",
            "priority": "extra-high",
            "width": 88,
            "height": 61,
            "shift": 
            [
              0,
              -0.9765625
            ],
            "scale": 0.5
          },
          "west": 
          {
            "filename": "__space-age__/graphics/entity/frozen/assembling-machine/assembling-machine-pipe-W-frozen.png",
            "priority": "extra-high",
            "width": 39,
            "height": 73,
            "shift": 
            [
              0.8046875,
              0.0390625
            ],
            "scale": 0.5
          }
        }
      },
      
      {
        "production_type": "output",
        "pipe_picture": 
        {
          "north": 
          {
            "filename": "__base__/graphics/entity/assembling-machine-2/assembling-machine-2-pipe-N.png",
            "priority": "extra-high",
            "width": 71,
            "height": 38,
            "shift": 
            [
              0.0703125,
              0.421875
            ],
            "scale": 0.5
          },
          "east": 
          {
            "filename": "__base__/graphics/entity/assembling-machine-2/assembling-machine-2-pipe-E.png",
            "priority": "extra-high",
            "width": 42,
            "height": 76,
            "shift": 
            [
              -0.765625,
              0.03125
            ],
            "scale": 0.5
          },
          "south": 
          {
            "filename": "__base__/graphics/entity/assembling-machine-2/assembling-machine-2-pipe-S.png",
            "priority": "extra-high",
            "width": 88,
            "height": 61,
            "shift": 
            [
              0,
              -0.9765625
            ],
            "scale": 0.5
          },
          "west": 
          {
            "filename": "__base__/graphics/entity/assembling-machine-2/assembling-machine-2-pipe-W.png",
            "priority": "extra-high",
            "width": 39,
            "height": 73,
            "shift": 
            [
              0.8046875,
              0.0390625
            ],
            "scale": 0.5
          }
        },
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
        "volume": 1000,
        "pipe_connections": 
        [
          
          {
            "flow_direction": "output",
            "direction": 8,
            "position": 
            [
              0,
              1
            ]
          }
        ],
        "secondary_draw_orders": 
        {
          "north": -1
        },
        "pipe_covers_frozen": 
        {
          "north": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-north.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "east": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-east.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "south": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-south.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "west": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-west.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          }
        },
        "pipe_picture_frozen": 
        {
          "north": 
          {
            "filename": "__space-age__/graphics/entity/frozen/assembling-machine/assembling-machine-pipe-N-frozen.png",
            "priority": "extra-high",
            "width": 71,
            "height": 38,
            "shift": 
            [
              0.0703125,
              0.421875
            ],
            "scale": 0.5
          },
          "east": 
          {
            "filename": "__space-age__/graphics/entity/frozen/assembling-machine/assembling-machine-pipe-E-frozen.png",
            "priority": "extra-high",
            "width": 42,
            "height": 76,
            "shift": 
            [
              -0.765625,
              0.03125
            ],
            "scale": 0.5
          },
          "south": 
          {
            "filename": "__space-age__/graphics/entity/frozen/assembling-machine/assembling-machine-pipe-S-frozen.png",
            "priority": "extra-high",
            "width": 88,
            "height": 61,
            "shift": 
            [
              0,
              -0.9765625
            ],
            "scale": 0.5
          },
          "west": 
          {
            "filename": "__space-age__/graphics/entity/frozen/assembling-machine/assembling-machine-pipe-W-frozen.png",
            "priority": "extra-high",
            "width": 39,
            "height": 73,
            "shift": 
            [
              0.8046875,
              0.0390625
            ],
            "scale": 0.5
          }
        }
      }
    ],
    "fluid_boxes_off_when_no_fluid_recipe": true,
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
    "fast_replaceable_group": "assembling-machine",
    "next_upgrade": "assembling-machine-3",
    "graphics_set": 
    {
      "animation": 
      {
        "layers": 
        [
          
          {
            "filename": "__base__/graphics/entity/assembling-machine-2/assembling-machine-2.png",
            "priority": "high",
            "width": 214,
            "height": 218,
            "frame_count": 32,
            "line_length": 8,
            "shift": 
            [
              0,
              0.125
            ],
            "scale": 0.5
          },
          
          {
            "filename": "__base__/graphics/entity/assembling-machine-2/assembling-machine-2-shadow.png",
            "priority": "high",
            "width": 196,
            "height": 163,
            "frame_count": 32,
            "line_length": 8,
            "draw_as_shadow": true,
            "shift": 
            [
              0.375,
              0.1484375
            ],
            "scale": 0.5
          }
        ]
      },
      "reset_animation_when_frozen": true,
      "frozen_patch": 
      {
        "filename": "__space-age__/graphics/entity/frozen/assembling-machine/assembling-machine-2-frozen.png",
        "priority": "high",
        "width": 214,
        "height": 218,
        "shift": 
        [
          0,
          0.125
        ],
        "scale": 0.5
      }
    },
    "open_sound": 
    {
      "filename": "__base__/sound/machine-open.ogg",
      "volume": 0.5
    },
    "close_sound": 
    {
      "filename": "__base__/sound/machine-close.ogg",
      "volume": 0.5
    },
    "impact_category": "metal",
    "working_sound": 
    {
      "sound": 
      {
        "filename": "__base__/sound/assembling-machine-t2-1.ogg",
        "volume": 0.45
      },
      "audible_distance_modifier": 0.5,
      "fade_in_ticks": 4,
      "fade_out_ticks": 20
    },
    "crafting_categories": 
    [
      "basic-crafting",
      "crafting",
      "advanced-crafting",
      "crafting-with-fluid",
      "electronics",
      "electronics-with-fluid",
      "pressing",
      "metallurgy-or-assembling",
      "organic-or-hand-crafting",
      "organic-or-assembling",
      "electronics-or-assembling",
      "cryogenics-or-assembling",
      "crafting-with-fluid-or-metallurgy"
    ],
    "crafting_speed": 0.75,
    "energy_source": 
    {
      "type": "electric",
      "usage_priority": "secondary-input",
      "emissions_per_minute": 
      {
        "pollution": 3
      }
    },
    "energy_usage": "150kW",
    "module_slots": 2,
    "allowed_effects": 
    [
      "consumption",
      "speed",
      "productivity",
      "pollution",
      "quality"
    ],
    "heating_energy": "100kW"
  },
  "assembling-machine-3": 
  {
    "type": "assembling-machine",
    "name": "assembling-machine-3",
    "icon": "__base__/graphics/icons/assembling-machine-3.png",
    "flags": 
    [
      "placeable-neutral",
      "placeable-player",
      "player-creation"
    ],
    "minable": 
    {
      "mining_time": 0.2,
      "result": "assembling-machine-3"
    },
    "max_health": 400,
    "corpse": "assembling-machine-3-remnants",
    "dying_explosion": "assembling-machine-3-explosion",
    "icon_draw_specification": 
    {
      "shift": 
      [
        0,
        -0.3
      ]
    },
    "circuit_wire_max_distance": 9,
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
            "x": 104,
            "y": 100,
            "shift": 
            [
              0.75,
              0.8125
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
            "x": 120,
            "y": 92,
            "shift": 
            [
              1.171875,
              1.046875
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 124,
            "y": 116,
            "shift": 
            [
              0.75,
              0.8125
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
            "x": 136,
            "y": 108,
            "shift": 
            [
              1.25,
              1.078125
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
            "x": 120,
            "y": 120,
            "shift": 
            [
              0.75,
              0.78125
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 92,
            "y": 88,
            "shift": 
            [
              0.75,
              0.78125
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
            "x": 96,
            "y": 92,
            "shift": 
            [
              0.75,
              0.78125
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
            "x": 96,
            "y": 92,
            "shift": 
            [
              0.75,
              0.78125
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            0.75,
            1.03125
          ],
          "red_green_led_light_offset": 
          [
            0.75,
            0.875
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              1,
              0.8125
            ],
            "green": 
            [
              1.0625,
              1.03125
            ]
          },
          "shadow": 
          {
            "red": 
            [
              1.6875,
              1.25
            ],
            "green": 
            [
              1.5625,
              1.3125
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
            "x": 104,
            "y": 100,
            "shift": 
            [
              0.75,
              0.8125
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
            "x": 120,
            "y": 92,
            "shift": 
            [
              1.171875,
              1.046875
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 124,
            "y": 116,
            "shift": 
            [
              0.75,
              0.8125
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
            "x": 136,
            "y": 108,
            "shift": 
            [
              1.25,
              1.078125
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
            "x": 120,
            "y": 120,
            "shift": 
            [
              0.75,
              0.78125
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 92,
            "y": 88,
            "shift": 
            [
              0.75,
              0.78125
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
            "x": 96,
            "y": 92,
            "shift": 
            [
              0.75,
              0.78125
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
            "x": 96,
            "y": 92,
            "shift": 
            [
              0.75,
              0.78125
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            0.75,
            1.03125
          ],
          "red_green_led_light_offset": 
          [
            0.75,
            0.875
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              1,
              0.8125
            ],
            "green": 
            [
              1.0625,
              1.03125
            ]
          },
          "shadow": 
          {
            "red": 
            [
              1.6875,
              1.25
            ],
            "green": 
            [
              1.5625,
              1.3125
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
            "x": 104,
            "y": 100,
            "shift": 
            [
              0.75,
              0.8125
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
            "x": 120,
            "y": 92,
            "shift": 
            [
              1.171875,
              1.046875
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 124,
            "y": 116,
            "shift": 
            [
              0.75,
              0.8125
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
            "x": 136,
            "y": 108,
            "shift": 
            [
              1.25,
              1.078125
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
            "x": 120,
            "y": 120,
            "shift": 
            [
              0.75,
              0.78125
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 92,
            "y": 88,
            "shift": 
            [
              0.75,
              0.78125
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
            "x": 96,
            "y": 92,
            "shift": 
            [
              0.75,
              0.78125
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
            "x": 96,
            "y": 92,
            "shift": 
            [
              0.75,
              0.78125
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            0.75,
            1.03125
          ],
          "red_green_led_light_offset": 
          [
            0.75,
            0.875
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              1,
              0.8125
            ],
            "green": 
            [
              1.0625,
              1.03125
            ]
          },
          "shadow": 
          {
            "red": 
            [
              1.6875,
              1.25
            ],
            "green": 
            [
              1.5625,
              1.3125
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
            "x": 104,
            "y": 100,
            "shift": 
            [
              0.75,
              0.8125
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
            "x": 120,
            "y": 92,
            "shift": 
            [
              1.171875,
              1.046875
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 124,
            "y": 116,
            "shift": 
            [
              0.75,
              0.8125
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
            "x": 136,
            "y": 108,
            "shift": 
            [
              1.25,
              1.078125
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
            "x": 120,
            "y": 120,
            "shift": 
            [
              0.75,
              0.78125
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 92,
            "y": 88,
            "shift": 
            [
              0.75,
              0.78125
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
            "x": 96,
            "y": 92,
            "shift": 
            [
              0.75,
              0.78125
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
            "x": 96,
            "y": 92,
            "shift": 
            [
              0.75,
              0.78125
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            0.75,
            1.03125
          ],
          "red_green_led_light_offset": 
          [
            0.75,
            0.875
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              1,
              0.8125
            ],
            "green": 
            [
              1.0625,
              1.03125
            ]
          },
          "shadow": 
          {
            "red": 
            [
              1.6875,
              1.25
            ],
            "green": 
            [
              1.5625,
              1.3125
            ]
          }
        }
      }
    ],
    "alert_icon_shift": 
    [
      0,
      -0.375
    ],
    "resistances": 
    [
      
      {
        "type": "fire",
        "percent": 70
      }
    ],
    "fluid_boxes": 
    [
      
      {
        "production_type": "input",
        "pipe_picture": 
        {
          "north": 
          {
            "filename": "__base__/graphics/entity/assembling-machine-3/assembling-machine-3-pipe-N.png",
            "priority": "extra-high",
            "width": 71,
            "height": 38,
            "shift": 
            [
              0.0703125,
              0.421875
            ],
            "scale": 0.5
          },
          "east": 
          {
            "filename": "__base__/graphics/entity/assembling-machine-3/assembling-machine-3-pipe-E.png",
            "priority": "extra-high",
            "width": 42,
            "height": 76,
            "shift": 
            [
              -0.765625,
              0.03125
            ],
            "scale": 0.5
          },
          "south": 
          {
            "filename": "__base__/graphics/entity/assembling-machine-3/assembling-machine-3-pipe-S.png",
            "priority": "extra-high",
            "width": 88,
            "height": 61,
            "shift": 
            [
              0,
              -0.9765625
            ],
            "scale": 0.5
          },
          "west": 
          {
            "filename": "__base__/graphics/entity/assembling-machine-3/assembling-machine-3-pipe-W.png",
            "priority": "extra-high",
            "width": 39,
            "height": 73,
            "shift": 
            [
              0.8046875,
              0.0390625
            ],
            "scale": 0.5
          }
        },
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
        "volume": 1000,
        "pipe_connections": 
        [
          
          {
            "flow_direction": "input",
            "direction": 0,
            "position": 
            [
              0,
              -1
            ]
          }
        ],
        "secondary_draw_orders": 
        {
          "north": -1
        },
        "pipe_covers_frozen": 
        {
          "north": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-north.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "east": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-east.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "south": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-south.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "west": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-west.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          }
        },
        "pipe_picture_frozen": 
        {
          "north": 
          {
            "filename": "__space-age__/graphics/entity/frozen/assembling-machine/assembling-machine-pipe-N-frozen.png",
            "priority": "extra-high",
            "width": 71,
            "height": 38,
            "shift": 
            [
              0.0703125,
              0.421875
            ],
            "scale": 0.5
          },
          "east": 
          {
            "filename": "__space-age__/graphics/entity/frozen/assembling-machine/assembling-machine-pipe-E-frozen.png",
            "priority": "extra-high",
            "width": 42,
            "height": 76,
            "shift": 
            [
              -0.765625,
              0.03125
            ],
            "scale": 0.5
          },
          "south": 
          {
            "filename": "__space-age__/graphics/entity/frozen/assembling-machine/assembling-machine-pipe-S-frozen.png",
            "priority": "extra-high",
            "width": 88,
            "height": 61,
            "shift": 
            [
              0,
              -0.9765625
            ],
            "scale": 0.5
          },
          "west": 
          {
            "filename": "__space-age__/graphics/entity/frozen/assembling-machine/assembling-machine-pipe-W-frozen.png",
            "priority": "extra-high",
            "width": 39,
            "height": 73,
            "shift": 
            [
              0.8046875,
              0.0390625
            ],
            "scale": 0.5
          }
        }
      },
      
      {
        "production_type": "output",
        "pipe_picture": 
        {
          "north": 
          {
            "filename": "__base__/graphics/entity/assembling-machine-3/assembling-machine-3-pipe-N.png",
            "priority": "extra-high",
            "width": 71,
            "height": 38,
            "shift": 
            [
              0.0703125,
              0.421875
            ],
            "scale": 0.5
          },
          "east": 
          {
            "filename": "__base__/graphics/entity/assembling-machine-3/assembling-machine-3-pipe-E.png",
            "priority": "extra-high",
            "width": 42,
            "height": 76,
            "shift": 
            [
              -0.765625,
              0.03125
            ],
            "scale": 0.5
          },
          "south": 
          {
            "filename": "__base__/graphics/entity/assembling-machine-3/assembling-machine-3-pipe-S.png",
            "priority": "extra-high",
            "width": 88,
            "height": 61,
            "shift": 
            [
              0,
              -0.9765625
            ],
            "scale": 0.5
          },
          "west": 
          {
            "filename": "__base__/graphics/entity/assembling-machine-3/assembling-machine-3-pipe-W.png",
            "priority": "extra-high",
            "width": 39,
            "height": 73,
            "shift": 
            [
              0.8046875,
              0.0390625
            ],
            "scale": 0.5
          }
        },
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
        "volume": 1000,
        "pipe_connections": 
        [
          
          {
            "flow_direction": "output",
            "direction": 8,
            "position": 
            [
              0,
              1
            ]
          }
        ],
        "secondary_draw_orders": 
        {
          "north": -1
        },
        "pipe_covers_frozen": 
        {
          "north": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-north.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "east": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-east.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "south": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-south.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "west": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-west.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          }
        },
        "pipe_picture_frozen": 
        {
          "north": 
          {
            "filename": "__space-age__/graphics/entity/frozen/assembling-machine/assembling-machine-pipe-N-frozen.png",
            "priority": "extra-high",
            "width": 71,
            "height": 38,
            "shift": 
            [
              0.0703125,
              0.421875
            ],
            "scale": 0.5
          },
          "east": 
          {
            "filename": "__space-age__/graphics/entity/frozen/assembling-machine/assembling-machine-pipe-E-frozen.png",
            "priority": "extra-high",
            "width": 42,
            "height": 76,
            "shift": 
            [
              -0.765625,
              0.03125
            ],
            "scale": 0.5
          },
          "south": 
          {
            "filename": "__space-age__/graphics/entity/frozen/assembling-machine/assembling-machine-pipe-S-frozen.png",
            "priority": "extra-high",
            "width": 88,
            "height": 61,
            "shift": 
            [
              0,
              -0.9765625
            ],
            "scale": 0.5
          },
          "west": 
          {
            "filename": "__space-age__/graphics/entity/frozen/assembling-machine/assembling-machine-pipe-W-frozen.png",
            "priority": "extra-high",
            "width": 39,
            "height": 73,
            "shift": 
            [
              0.8046875,
              0.0390625
            ],
            "scale": 0.5
          }
        }
      }
    ],
    "fluid_boxes_off_when_no_fluid_recipe": true,
    "open_sound": 
    {
      "filename": "__base__/sound/machine-open.ogg",
      "volume": 0.5
    },
    "close_sound": 
    {
      "filename": "__base__/sound/machine-close.ogg",
      "volume": 0.5
    },
    "impact_category": "metal",
    "working_sound": 
    {
      "sound": 
      {
        "filename": "__base__/sound/assembling-machine-t3-1.ogg",
        "volume": 0.45
      },
      "audible_distance_modifier": 0.5,
      "fade_in_ticks": 4,
      "fade_out_ticks": 20
    },
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
    "drawing_box_vertical_extension": 0.2,
    "fast_replaceable_group": "assembling-machine",
    "graphics_set": 
    {
      "animation_progress": 0.5,
      "animation": 
      {
        "layers": 
        [
          
          {
            "filename": "__base__/graphics/entity/assembling-machine-3/assembling-machine-3.png",
            "priority": "high",
            "width": 214,
            "height": 237,
            "frame_count": 32,
            "line_length": 8,
            "shift": 
            [
              0,
              -0.0234375
            ],
            "scale": 0.5
          },
          
          {
            "filename": "__base__/graphics/entity/assembling-machine-3/assembling-machine-3-shadow.png",
            "priority": "high",
            "width": 260,
            "height": 162,
            "frame_count": 32,
            "line_length": 8,
            "draw_as_shadow": true,
            "shift": 
            [
              0.875,
              0.125
            ],
            "scale": 0.5
          }
        ]
      },
      "reset_animation_when_frozen": true,
      "frozen_patch": 
      {
        "filename": "__space-age__/graphics/entity/frozen/assembling-machine/assembling-machine-3-frozen.png",
        "priority": "high",
        "width": 214,
        "height": 237,
        "shift": 
        [
          0,
          -0.0234375
        ],
        "scale": 0.5
      }
    },
    "crafting_categories": 
    [
      "basic-crafting",
      "crafting",
      "advanced-crafting",
      "crafting-with-fluid",
      "electronics",
      "electronics-with-fluid",
      "pressing",
      "metallurgy-or-assembling",
      "organic-or-hand-crafting",
      "organic-or-assembling",
      "electronics-or-assembling",
      "cryogenics-or-assembling",
      "crafting-with-fluid-or-metallurgy"
    ],
    "crafting_speed": 1.25,
    "energy_source": 
    {
      "type": "electric",
      "usage_priority": "secondary-input",
      "emissions_per_minute": 
      {
        "pollution": 2
      }
    },
    "energy_usage": "375kW",
    "module_slots": 4,
    "allowed_effects": 
    [
      "consumption",
      "speed",
      "productivity",
      "pollution",
      "quality"
    ],
    "heating_energy": "100kW"
  },
  "oil-refinery": 
  {
    "type": "assembling-machine",
    "name": "oil-refinery",
    "icon": "__base__/graphics/icons/oil-refinery.png",
    "flags": 
    [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": 
    {
      "mining_time": 0.2,
      "result": "oil-refinery"
    },
    "fast_replaceable_group": "oil-refinery",
    "max_health": 350,
    "corpse": "oil-refinery-remnants",
    "dying_explosion": "oil-refinery-explosion",
    "icon_draw_specification": 
    {
      "scale": 2,
      "shift": 
      [
        0,
        -0.3
      ]
    },
    "circuit_wire_max_distance": 9,
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
            "y": 100,
            "shift": 
            [
              -1.40625,
              -0.890625
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
            "y": 92,
            "shift": 
            [
              1.59375,
              0.421875
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
            "y": 116,
            "shift": 
            [
              -1.40625,
              -0.890625
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
            "y": 108,
            "shift": 
            [
              1.671875,
              0.453125
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
            "y": 120,
            "shift": 
            [
              -1.40625,
              -0.921875
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
            "y": 88,
            "shift": 
            [
              -1.40625,
              -0.921875
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
            "y": 92,
            "shift": 
            [
              -1.40625,
              -0.921875
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
            "y": 92,
            "shift": 
            [
              -1.40625,
              -0.921875
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            -1.5625,
            -0.703125
          ],
          "red_green_led_light_offset": 
          [
            -1.53125,
            -0.859375
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              -1.25,
              -0.765625
            ],
            "green": 
            [
              -1.375,
              -0.578125
            ]
          },
          "shadow": 
          {
            "red": 
            [
              1.984375,
              0.75
            ],
            "green": 
            [
              1.671875,
              0.8125
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
            "x": 156,
            "y": 100,
            "shift": 
            [
              0.921875,
              -0.71875
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
            "x": 180,
            "y": 92,
            "shift": 
            [
              2.609375,
              1.734375
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 186,
            "y": 116,
            "shift": 
            [
              0.921875,
              -0.71875
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
            "x": 204,
            "y": 108,
            "shift": 
            [
              2.6875,
              1.765625
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
            "x": 180,
            "y": 120,
            "shift": 
            [
              0.921875,
              -0.75
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 138,
            "y": 88,
            "shift": 
            [
              0.921875,
              -0.75
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
            "x": 144,
            "y": 92,
            "shift": 
            [
              0.921875,
              -0.75
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
            "x": 144,
            "y": 92,
            "shift": 
            [
              0.921875,
              -0.75
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            1.109375,
            -0.5625
          ],
          "red_green_led_light_offset": 
          [
            1.078125,
            -0.6875
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              1.203125,
              -0.875
            ],
            "green": 
            [
              1.296875,
              -0.6875
            ]
          },
          "shadow": 
          {
            "red": 
            [
              3.125,
              1.71875
            ],
            "green": 
            [
              3.0625,
              1.8125
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
            "x": 156,
            "y": 100,
            "shift": 
            [
              0.921875,
              -0.71875
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
            "x": 180,
            "y": 92,
            "shift": 
            [
              2.65625,
              2.125
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 186,
            "y": 116,
            "shift": 
            [
              0.921875,
              -0.71875
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
            "x": 204,
            "y": 108,
            "shift": 
            [
              2.734375,
              2.15625
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
            "x": 180,
            "y": 120,
            "shift": 
            [
              0.921875,
              -0.75
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 138,
            "y": 88,
            "shift": 
            [
              0.921875,
              -0.75
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
            "x": 144,
            "y": 92,
            "shift": 
            [
              0.921875,
              -0.75
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
            "x": 144,
            "y": 92,
            "shift": 
            [
              0.921875,
              -0.75
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            1.109375,
            -0.5625
          ],
          "red_green_led_light_offset": 
          [
            1.078125,
            -0.6875
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              1.203125,
              -0.875
            ],
            "green": 
            [
              1.296875,
              -0.6875
            ]
          },
          "shadow": 
          {
            "red": 
            [
              3.171875,
              2.109375
            ],
            "green": 
            [
              3.109375,
              2.203125
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
            "y": 100,
            "shift": 
            [
              -0.25,
              -1.078125
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
            "y": 92,
            "shift": 
            [
              2.78125,
              2.5
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
            "y": 116,
            "shift": 
            [
              -0.25,
              -1.078125
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
            "y": 108,
            "shift": 
            [
              2.859375,
              2.53125
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
            "y": 120,
            "shift": 
            [
              -0.25,
              -1.109375
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
            "y": 88,
            "shift": 
            [
              -0.25,
              -1.109375
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
            "y": 92,
            "shift": 
            [
              -0.25,
              -1.109375
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
            "y": 92,
            "shift": 
            [
              -0.25,
              -1.109375
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            -0.40625,
            -0.890625
          ],
          "red_green_led_light_offset": 
          [
            -0.375,
            -1.046875
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              -0.09375,
              -0.953125
            ],
            "green": 
            [
              -0.21875,
              -0.765625
            ]
          },
          "shadow": 
          {
            "red": 
            [
              3.171875,
              2.828125
            ],
            "green": 
            [
              2.859375,
              2.890625
            ]
          }
        }
      }
    ],
    "collision_box": 
    [
      
      [
        -2.29999999999999982236431605997495353221893310546875,
        -2.29999999999999982236431605997495353221893310546875
      ],
      
      [
        2.29999999999999982236431605997495353221893310546875,
        2.29999999999999982236431605997495353221893310546875
      ]
    ],
    "collision_mask": 
    {
      "layers": 
      {
        "item": true,
        "object": true,
        "player": true,
        "water_tile": true,
        "elevated_rail": true,
        "is_object": true,
        "is_lower_object": true
      }
    },
    "selection_box": 
    [
      
      [
        -2.5,
        -2.5
      ],
      
      [
        2.5,
        2.5
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
    "drawing_box_vertical_extension": 0.3,
    "module_slots": 3,
    "allowed_effects": 
    [
      "consumption",
      "speed",
      "productivity",
      "pollution"
    ],
    "crafting_categories": 
    [
      "oil-processing"
    ],
    "crafting_speed": 1,
    "energy_source": 
    {
      "type": "electric",
      "usage_priority": "secondary-input",
      "emissions_per_minute": 
      {
        "pollution": 6
      }
    },
    "energy_usage": "420kW",
    "graphics_set": 
    {
      "animation": 
      {
        "north": 
        {
          "layers": 
          [
            
            {
              "filename": "__base__/graphics/entity/oil-refinery/oil-refinery.png",
              "priority": "high",
              "x": 0,
              "y": 0,
              "width": 386,
              "height": 430,
              "shift": 
              [
                0,
                -0.234375
              ],
              "tint_as_overlay": false,
              "scale": 0.5
            },
            
            {
              "filename": "__base__/graphics/entity/oil-refinery/oil-refinery-shadow.png",
              "priority": "high",
              "x": 0,
              "y": 0,
              "width": 674,
              "height": 426,
              "shift": 
              [
                2.578125,
                0.828125
              ],
              "draw_as_shadow": true,
              "tint_as_overlay": false,
              "scale": 0.5
            }
          ]
        },
        "east": 
        {
          "layers": 
          [
            
            {
              "filename": "__base__/graphics/entity/oil-refinery/oil-refinery.png",
              "priority": "high",
              "x": 386,
              "y": 0,
              "width": 386,
              "height": 430,
              "shift": 
              [
                0,
                -0.234375
              ],
              "tint_as_overlay": false,
              "scale": 0.5
            },
            
            {
              "filename": "__base__/graphics/entity/oil-refinery/oil-refinery-shadow.png",
              "priority": "high",
              "x": 674,
              "y": 0,
              "width": 674,
              "height": 426,
              "shift": 
              [
                2.578125,
                0.828125
              ],
              "draw_as_shadow": true,
              "tint_as_overlay": false,
              "scale": 0.5
            }
          ]
        },
        "south": 
        {
          "layers": 
          [
            
            {
              "filename": "__base__/graphics/entity/oil-refinery/oil-refinery.png",
              "priority": "high",
              "x": 772,
              "y": 0,
              "width": 386,
              "height": 430,
              "shift": 
              [
                0,
                -0.234375
              ],
              "tint_as_overlay": false,
              "scale": 0.5
            },
            
            {
              "filename": "__base__/graphics/entity/oil-refinery/oil-refinery-shadow.png",
              "priority": "high",
              "x": 1348,
              "y": 0,
              "width": 674,
              "height": 426,
              "shift": 
              [
                2.578125,
                0.828125
              ],
              "draw_as_shadow": true,
              "tint_as_overlay": false,
              "scale": 0.5
            }
          ]
        },
        "west": 
        {
          "layers": 
          [
            
            {
              "filename": "__base__/graphics/entity/oil-refinery/oil-refinery.png",
              "priority": "high",
              "x": 1158,
              "y": 0,
              "width": 386,
              "height": 430,
              "shift": 
              [
                0,
                -0.234375
              ],
              "tint_as_overlay": false,
              "scale": 0.5
            },
            
            {
              "filename": "__base__/graphics/entity/oil-refinery/oil-refinery-shadow.png",
              "priority": "high",
              "x": 2022,
              "y": 0,
              "width": 674,
              "height": 426,
              "shift": 
              [
                2.578125,
                0.828125
              ],
              "draw_as_shadow": true,
              "tint_as_overlay": false,
              "scale": 0.5
            }
          ]
        }
      },
      "working_visualisations": 
      [
        
        {
          "fadeout": true,
          "constant_speed": true,
          "north_position": 
          [
            1.0625,
            -2.03125
          ],
          "east_position": 
          [
            -1.625,
            -1.90625
          ],
          "south_position": 
          [
            -1.84375,
            -2.5625
          ],
          "west_position": 
          [
            1.78125,
            -1.8125
          ],
          "animation": 
          {
            "filename": "__base__/graphics/entity/oil-refinery/oil-refinery-fire.png",
            "line_length": 10,
            "width": 40,
            "height": 81,
            "frame_count": 60,
            "animation_speed": 0.75,
            "scale": 0.5,
            "draw_as_glow": true,
            "shift": 
            [
              0,
              -0.4453125
            ]
          }
        },
        
        {
          "fadeout": true,
          "north_animation": 
          {
            "filename": "__base__/graphics/entity/oil-refinery/oil-refinery-light.png",
            "width": 321,
            "height": 205,
            "blend_mode": "additive",
            "draw_as_glow": true,
            "shift": 
            [
              -0.03125,
              -1.5625
            ],
            "scale": 0.5
          },
          "east_animation": 
          {
            "filename": "__base__/graphics/entity/oil-refinery/oil-refinery-light.png",
            "width": 321,
            "x": 321,
            "height": 205,
            "blend_mode": "additive",
            "draw_as_glow": true,
            "shift": 
            [
              -0.03125,
              -1.5625
            ],
            "scale": 0.5
          },
          "south_animation": 
          {
            "filename": "__base__/graphics/entity/oil-refinery/oil-refinery-light.png",
            "width": 321,
            "x": 642,
            "height": 205,
            "blend_mode": "additive",
            "draw_as_glow": true,
            "shift": 
            [
              -0.03125,
              -1.5625
            ],
            "scale": 0.5
          },
          "west_animation": 
          {
            "filename": "__base__/graphics/entity/oil-refinery/oil-refinery-light.png",
            "width": 321,
            "x": 963,
            "height": 205,
            "blend_mode": "additive",
            "draw_as_glow": true,
            "shift": 
            [
              -0.03125,
              -1.5625
            ],
            "scale": 0.5
          }
        }
      ],
      "frozen_patch": 
      {
        "north": 
        {
          "filename": "__space-age__/graphics/entity/frozen/oil-refinery/oil-refinery.png",
          "priority": "high",
          "width": 386,
          "height": 430,
          "shift": 
          [
            0,
            -0.234375
          ],
          "scale": 0.5
        },
        "east": 
        {
          "filename": "__space-age__/graphics/entity/frozen/oil-refinery/oil-refinery.png",
          "priority": "high",
          "width": 386,
          "x": 386,
          "height": 430,
          "shift": 
          [
            0,
            -0.234375
          ],
          "scale": 0.5
        },
        "south": 
        {
          "filename": "__space-age__/graphics/entity/frozen/oil-refinery/oil-refinery.png",
          "priority": "high",
          "width": 386,
          "x": 772,
          "height": 430,
          "shift": 
          [
            0,
            -0.234375
          ],
          "scale": 0.5
        },
        "west": 
        {
          "filename": "__space-age__/graphics/entity/frozen/oil-refinery/oil-refinery.png",
          "priority": "high",
          "width": 386,
          "x": 1158,
          "height": 430,
          "shift": 
          [
            0,
            -0.234375
          ],
          "scale": 0.5
        }
      }
    },
    "impact_category": "metal-large",
    "open_sound": 
    {
      "filename": "__base__/sound/open-close/metal-large-open.ogg",
      "volume": 0.8
    },
    "close_sound": 
    {
      "filename": "__base__/sound/open-close/metal-large-close.ogg",
      "volume": 0.7
    },
    "working_sound": 
    {
      "sound": 
      {
        "filename": "__base__/sound/oil-refinery.ogg"
      },
      "fade_in_ticks": 4,
      "fade_out_ticks": 20
    },
    "fluid_boxes": 
    [
      
      {
        "production_type": "input",
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
        "volume": 1000,
        "pipe_connections": 
        [
          
          {
            "flow_direction": "input",
            "direction": 8,
            "position": 
            [
              -1,
              2
            ]
          }
        ],
        "pipe_covers_frozen": 
        {
          "north": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-north.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "east": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-east.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "south": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-south.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "west": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-west.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          }
        }
      },
      
      {
        "production_type": "input",
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
        "volume": 1000,
        "pipe_connections": 
        [
          
          {
            "flow_direction": "input",
            "direction": 8,
            "position": 
            [
              1,
              2
            ]
          }
        ],
        "pipe_covers_frozen": 
        {
          "north": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-north.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "east": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-east.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "south": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-south.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "west": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-west.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          }
        }
      },
      
      {
        "production_type": "output",
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
        "volume": 100,
        "pipe_connections": 
        [
          
          {
            "flow_direction": "output",
            "direction": 0,
            "position": 
            [
              -2,
              -2
            ]
          }
        ],
        "pipe_covers_frozen": 
        {
          "north": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-north.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "east": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-east.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "south": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-south.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "west": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-west.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          }
        }
      },
      
      {
        "production_type": "output",
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
        "volume": 100,
        "pipe_connections": 
        [
          
          {
            "flow_direction": "output",
            "direction": 0,
            "position": 
            [
              0,
              -2
            ]
          }
        ],
        "pipe_covers_frozen": 
        {
          "north": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-north.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "east": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-east.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "south": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-south.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "west": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-west.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          }
        }
      },
      
      {
        "production_type": "output",
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
        "volume": 100,
        "pipe_connections": 
        [
          
          {
            "flow_direction": "output",
            "direction": 0,
            "position": 
            [
              2,
              -2
            ]
          }
        ],
        "pipe_covers_frozen": 
        {
          "north": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-north.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "east": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-east.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "south": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-south.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "west": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-west.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          }
        }
      }
    ],
    "water_reflection": 
    {
      "pictures": 
      {
        "filename": "__base__/graphics/entity/oil-refinery/oil-refinery-reflection.png",
        "priority": "extra-high",
        "width": 40,
        "height": 48,
        "shift": 
        [
          0.15625,
          2.96875
        ],
        "variation_count": 4,
        "scale": 5
      },
      "rotate": false,
      "orientation_to_variation": true
    },
    "heating_energy": "200kW",
    "map_generator_bounding_box": 
    [
      
      [
        -2.399999999999999911182158029987476766109466552734375,
        -2.399999999999999911182158029987476766109466552734375
      ],
      
      [
        2.399999999999999911182158029987476766109466552734375,
        2.399999999999999911182158029987476766109466552734375
      ]
    ]
  },
  "chemical-plant": 
  {
    "type": "assembling-machine",
    "name": "chemical-plant",
    "icon": "__base__/graphics/icons/chemical-plant.png",
    "flags": 
    [
      "placeable-neutral",
      "placeable-player",
      "player-creation"
    ],
    "minable": 
    {
      "mining_time": 0.1,
      "result": "chemical-plant"
    },
    "fast_replaceable_group": "chemical-plant",
    "max_health": 300,
    "corpse": "chemical-plant-remnants",
    "dying_explosion": "chemical-plant-explosion",
    "icon_draw_specification": 
    {
      "shift": 
      [
        0,
        -0.3
      ]
    },
    "circuit_wire_max_distance": 9,
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
            "x": 104,
            "y": 0,
            "shift": 
            [
              0.515625,
              -0.59375
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
            "x": 120,
            "y": 0,
            "shift": 
            [
              0.890625,
              0.03125
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 124,
            "y": 0,
            "shift": 
            [
              0.515625,
              -0.59375
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
            "x": 136,
            "y": 0,
            "shift": 
            [
              0.96875,
              0.0625
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
            "x": 120,
            "y": 0,
            "shift": 
            [
              0.515625,
              -0.625
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 92,
            "y": 0,
            "shift": 
            [
              0.515625,
              -0.625
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
            "x": 96,
            "y": 0,
            "shift": 
            [
              0.515625,
              -0.625
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
            "x": 96,
            "y": 0,
            "shift": 
            [
              0.515625,
              -0.625
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            0.515625,
            -0.625
          ],
          "red_green_led_light_offset": 
          [
            0.515625,
            -0.71875
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              0.765625,
              -0.71875
            ],
            "green": 
            [
              0.828125,
              -0.5625
            ]
          },
          "shadow": 
          {
            "red": 
            [
              1.1875,
              -0.046875
            ],
            "green": 
            [
              1.28125,
              0.140625
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
            "x": 364,
            "y": 0,
            "shift": 
            [
              0.09375,
              0.03125
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
            "x": 420,
            "y": 0,
            "shift": 
            [
              0.46875,
              0.65625
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 434,
            "y": 0,
            "shift": 
            [
              0.09375,
              0.03125
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
            "x": 476,
            "y": 0,
            "shift": 
            [
              0.546875,
              0.6875
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
            "x": 420,
            "y": 0,
            "shift": 
            [
              0.09375,
              0
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 322,
            "y": 0,
            "shift": 
            [
              0.09375,
              0
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
            "x": 336,
            "y": 0,
            "shift": 
            [
              0.09375,
              0
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
            "x": 336,
            "y": 0,
            "shift": 
            [
              0.09375,
              0
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            -0.0625,
            -0.21875
          ],
          "red_green_led_light_offset": 
          [
            0.03125,
            -0.15625
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              -0.125,
              0.03125
            ],
            "green": 
            [
              -0.3125,
              -0.03125
            ]
          },
          "shadow": 
          {
            "red": 
            [
              0.265625,
              0.703125
            ],
            "green": 
            [
              0.078125,
              0.578125
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
            "x": 312,
            "y": 0,
            "shift": 
            [
              -0.46875,
              -0.046875
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
            "x": 360,
            "y": 0,
            "shift": 
            [
              -0.09375,
              0.578125
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 372,
            "y": 0,
            "shift": 
            [
              -0.46875,
              -0.046875
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
            "x": 408,
            "y": 0,
            "shift": 
            [
              -0.015625,
              0.609375
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
            "x": 360,
            "y": 0,
            "shift": 
            [
              -0.46875,
              -0.078125
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 276,
            "y": 0,
            "shift": 
            [
              -0.46875,
              -0.078125
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
            "x": 288,
            "y": 0,
            "shift": 
            [
              -0.46875,
              -0.078125
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
            "x": 288,
            "y": 0,
            "shift": 
            [
              -0.46875,
              -0.078125
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            -0.46875,
            -0.359375
          ],
          "red_green_led_light_offset": 
          [
            -0.46875,
            -0.265625
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              -0.78125,
              -0.171875
            ],
            "green": 
            [
              -0.71875,
              -0.390625
            ]
          },
          "shadow": 
          {
            "red": 
            [
              -0.390625,
              0.46875
            ],
            "green": 
            [
              -0.265625,
              0.3125
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
            "x": 312,
            "y": 150,
            "shift": 
            [
              -0.390625,
              -0.421875
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
            "x": 360,
            "y": 138,
            "shift": 
            [
              -0.015625,
              0.203125
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 372,
            "y": 174,
            "shift": 
            [
              -0.390625,
              -0.421875
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
            "x": 408,
            "y": 162,
            "shift": 
            [
              0.0625,
              0.234375
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
            "x": 360,
            "y": 180,
            "shift": 
            [
              -0.390625,
              -0.453125
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 276,
            "y": 132,
            "shift": 
            [
              -0.390625,
              -0.453125
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
            "x": 288,
            "y": 138,
            "shift": 
            [
              -0.390625,
              -0.453125
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
            "x": 288,
            "y": 138,
            "shift": 
            [
              -0.390625,
              -0.453125
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            -0.390625,
            -0.171875
          ],
          "red_green_led_light_offset": 
          [
            -0.390625,
            -0.265625
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              -0.640625,
              -0.390625
            ],
            "green": 
            [
              -0.671875,
              -0.171875
            ]
          },
          "shadow": 
          {
            "red": 
            [
              -0.03125,
              0.46875
            ],
            "green": 
            [
              -0.28125,
              0.46875
            ]
          }
        }
      }
    ],
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
    "drawing_box_vertical_extension": 0.4,
    "module_slots": 3,
    "allowed_effects": 
    [
      "consumption",
      "speed",
      "productivity",
      "pollution",
      "quality"
    ],
    "graphics_set": 
    {
      "animation": 
      {
        "north": 
        {
          "layers": 
          [
            
            {
              "filename": "__base__/graphics/entity/chemical-plant/chemical-plant.png",
              "priority": "high",
              "x": 0,
              "y": 0,
              "width": 220,
              "height": 292,
              "frame_count": 24,
              "line_length": 12,
              "shift": 
              [
                0.015625,
                -0.28125
              ],
              "tint_as_overlay": false,
              "scale": 0.5
            },
            
            {
              "filename": "__base__/graphics/entity/chemical-plant/chemical-plant-shadow.png",
              "priority": "high",
              "x": 0,
              "y": 0,
              "width": 312,
              "height": 222,
              "repeat_count": 24,
              "shift": 
              [
                0.84375,
                0.1875
              ],
              "draw_as_shadow": true,
              "tint_as_overlay": false,
              "scale": 0.5
            }
          ]
        },
        "east": 
        {
          "layers": 
          [
            
            {
              "filename": "__base__/graphics/entity/chemical-plant/chemical-plant.png",
              "priority": "high",
              "x": 0,
              "y": 584,
              "width": 220,
              "height": 292,
              "frame_count": 24,
              "line_length": 12,
              "shift": 
              [
                0.015625,
                -0.28125
              ],
              "tint_as_overlay": false,
              "scale": 0.5
            },
            
            {
              "filename": "__base__/graphics/entity/chemical-plant/chemical-plant-shadow.png",
              "priority": "high",
              "x": 312,
              "y": 0,
              "width": 312,
              "height": 222,
              "repeat_count": 24,
              "shift": 
              [
                0.84375,
                0.1875
              ],
              "draw_as_shadow": true,
              "tint_as_overlay": false,
              "scale": 0.5
            }
          ]
        },
        "south": 
        {
          "layers": 
          [
            
            {
              "filename": "__base__/graphics/entity/chemical-plant/chemical-plant.png",
              "priority": "high",
              "x": 0,
              "y": 1168,
              "width": 220,
              "height": 292,
              "frame_count": 24,
              "line_length": 12,
              "shift": 
              [
                0.015625,
                -0.28125
              ],
              "tint_as_overlay": false,
              "scale": 0.5
            },
            
            {
              "filename": "__base__/graphics/entity/chemical-plant/chemical-plant-shadow.png",
              "priority": "high",
              "x": 624,
              "y": 0,
              "width": 312,
              "height": 222,
              "repeat_count": 24,
              "shift": 
              [
                0.84375,
                0.1875
              ],
              "draw_as_shadow": true,
              "tint_as_overlay": false,
              "scale": 0.5
            }
          ]
        },
        "west": 
        {
          "layers": 
          [
            
            {
              "filename": "__base__/graphics/entity/chemical-plant/chemical-plant.png",
              "priority": "high",
              "x": 0,
              "y": 1752,
              "width": 220,
              "height": 292,
              "frame_count": 24,
              "line_length": 12,
              "shift": 
              [
                0.015625,
                -0.28125
              ],
              "tint_as_overlay": false,
              "scale": 0.5
            },
            
            {
              "filename": "__base__/graphics/entity/chemical-plant/chemical-plant-shadow.png",
              "priority": "high",
              "x": 936,
              "y": 0,
              "width": 312,
              "height": 222,
              "repeat_count": 24,
              "shift": 
              [
                0.84375,
                0.1875
              ],
              "draw_as_shadow": true,
              "tint_as_overlay": false,
              "scale": 0.5
            }
          ]
        }
      },
      "working_visualisations": 
      [
        
        {
          "apply_recipe_tint": "primary",
          "north_animation": 
          {
            "filename": "__base__/graphics/entity/chemical-plant/chemical-plant-liquid-north.png",
            "frame_count": 24,
            "line_length": 6,
            "width": 66,
            "height": 44,
            "shift": 
            [
              0.71875,
              0.46875
            ],
            "scale": 0.5
          },
          "east_animation": 
          {
            "filename": "__base__/graphics/entity/chemical-plant/chemical-plant-liquid-east.png",
            "frame_count": 24,
            "line_length": 6,
            "width": 70,
            "height": 36,
            "shift": 
            [
              0,
              0.6875
            ],
            "scale": 0.5
          },
          "south_animation": 
          {
            "filename": "__base__/graphics/entity/chemical-plant/chemical-plant-liquid-south.png",
            "frame_count": 24,
            "line_length": 6,
            "width": 66,
            "height": 42,
            "shift": 
            [
              0,
              0.53125
            ],
            "scale": 0.5
          },
          "west_animation": 
          {
            "filename": "__base__/graphics/entity/chemical-plant/chemical-plant-liquid-west.png",
            "frame_count": 24,
            "line_length": 6,
            "width": 74,
            "height": 36,
            "shift": 
            [
              -0.3125,
              0.40625
            ],
            "scale": 0.5
          }
        },
        
        {
          "apply_recipe_tint": "secondary",
          "north_animation": 
          {
            "filename": "__base__/graphics/entity/chemical-plant/chemical-plant-foam-north.png",
            "frame_count": 24,
            "line_length": 6,
            "width": 62,
            "height": 42,
            "shift": 
            [
              0.75,
              0.46875
            ],
            "scale": 0.5
          },
          "east_animation": 
          {
            "filename": "__base__/graphics/entity/chemical-plant/chemical-plant-foam-east.png",
            "frame_count": 24,
            "line_length": 6,
            "width": 68,
            "height": 36,
            "shift": 
            [
              0,
              0.6875
            ],
            "scale": 0.5
          },
          "south_animation": 
          {
            "filename": "__base__/graphics/entity/chemical-plant/chemical-plant-foam-south.png",
            "frame_count": 24,
            "line_length": 6,
            "width": 60,
            "height": 40,
            "shift": 
            [
              0.03125,
              0.53125
            ],
            "scale": 0.5
          },
          "west_animation": 
          {
            "filename": "__base__/graphics/entity/chemical-plant/chemical-plant-foam-west.png",
            "frame_count": 24,
            "line_length": 6,
            "width": 68,
            "height": 28,
            "shift": 
            [
              -0.28125,
              0.46875
            ],
            "scale": 0.5
          }
        },
        
        {
          "apply_recipe_tint": "tertiary",
          "fadeout": true,
          "constant_speed": true,
          "north_position": 
          [
            -0.46875,
            -2.515625
          ],
          "east_position": 
          [
            0.453125,
            -2.34375
          ],
          "south_position": 
          [
            0.1875,
            -2.09375
          ],
          "west_position": 
          [
            -0.5,
            -2.03125
          ],
          "render_layer": "wires",
          "animation": 
          {
            "filename": "__base__/graphics/entity/chemical-plant/chemical-plant-smoke-outer.png",
            "frame_count": 47,
            "line_length": 16,
            "width": 90,
            "height": 188,
            "animation_speed": 0.5,
            "shift": 
            [
              -0.0625,
              -1.25
            ],
            "scale": 0.5
          }
        },
        
        {
          "apply_recipe_tint": "quaternary",
          "fadeout": true,
          "constant_speed": true,
          "north_position": 
          [
            -0.46875,
            -2.515625
          ],
          "east_position": 
          [
            0.453125,
            -2.34375
          ],
          "south_position": 
          [
            0.1875,
            -2.09375
          ],
          "west_position": 
          [
            -0.5,
            -2.03125
          ],
          "render_layer": "wires",
          "animation": 
          {
            "filename": "__base__/graphics/entity/chemical-plant/chemical-plant-smoke-inner.png",
            "frame_count": 47,
            "line_length": 16,
            "width": 40,
            "height": 84,
            "animation_speed": 0.5,
            "shift": 
            [
              0,
              -0.4375
            ],
            "scale": 0.5
          }
        }
      ],
      "frozen_patch": 
      {
        "north": 
        {
          "filename": "__space-age__/graphics/entity/frozen/chemical-plant/chemical-plant-frozen.png",
          "priority": "high",
          "width": 220,
          "height": 292,
          "shift": 
          [
            0.015625,
            -0.28125
          ],
          "scale": 0.5
        },
        "east": 
        {
          "filename": "__space-age__/graphics/entity/frozen/chemical-plant/chemical-plant-frozen.png",
          "priority": "high",
          "x": 220,
          "width": 220,
          "height": 292,
          "shift": 
          [
            0.015625,
            -0.28125
          ],
          "scale": 0.5
        },
        "south": 
        {
          "filename": "__space-age__/graphics/entity/frozen/chemical-plant/chemical-plant-frozen.png",
          "priority": "high",
          "x": 440,
          "width": 220,
          "height": 292,
          "shift": 
          [
            0.015625,
            -0.28125
          ],
          "scale": 0.5
        },
        "west": 
        {
          "filename": "__space-age__/graphics/entity/frozen/chemical-plant/chemical-plant-frozen.png",
          "priority": "high",
          "x": 660,
          "width": 220,
          "height": 292,
          "shift": 
          [
            0.015625,
            -0.28125
          ],
          "scale": 0.5
        }
      }
    },
    "impact_category": "metal-large",
    "open_sound": 
    {
      "filename": "__base__/sound/open-close/fluid-open.ogg",
      "volume": 0.55
    },
    "close_sound": 
    {
      "filename": "__base__/sound/open-close/fluid-close.ogg",
      "volume": 0.54000000000000003552713678800500929355621337890625
    },
    "working_sound": 
    {
      "sound": 
      [
        
        {
          "filename": "__base__/sound/chemical-plant-1.ogg",
          "volume": 0.5
        },
        
        {
          "filename": "__base__/sound/chemical-plant-2.ogg",
          "volume": 0.5
        },
        
        {
          "filename": "__base__/sound/chemical-plant-3.ogg",
          "volume": 0.5
        }
      ],
      "apparent_volume": 1.5,
      "fade_in_ticks": 4,
      "fade_out_ticks": 20
    },
    "crafting_speed": 1,
    "energy_source": 
    {
      "type": "electric",
      "usage_priority": "secondary-input",
      "emissions_per_minute": 
      {
        "pollution": 4
      }
    },
    "energy_usage": "210kW",
    "crafting_categories": 
    [
      "chemistry",
      "chemistry-or-cryogenics",
      "organic-or-chemistry"
    ],
    "fluid_boxes": 
    [
      
      {
        "production_type": "input",
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
        "volume": 1000,
        "pipe_connections": 
        [
          
          {
            "flow_direction": "input",
            "direction": 0,
            "position": 
            [
              -1,
              -1
            ]
          }
        ],
        "pipe_covers_frozen": 
        {
          "north": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-north.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "east": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-east.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "south": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-south.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "west": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-west.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          }
        }
      },
      
      {
        "production_type": "input",
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
        "volume": 1000,
        "pipe_connections": 
        [
          
          {
            "flow_direction": "input",
            "direction": 0,
            "position": 
            [
              1,
              -1
            ]
          }
        ],
        "pipe_covers_frozen": 
        {
          "north": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-north.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "east": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-east.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "south": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-south.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "west": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-west.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          }
        }
      },
      
      {
        "production_type": "output",
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
        "volume": 100,
        "pipe_connections": 
        [
          
          {
            "flow_direction": "output",
            "direction": 8,
            "position": 
            [
              -1,
              1
            ]
          }
        ],
        "pipe_covers_frozen": 
        {
          "north": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-north.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "east": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-east.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "south": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-south.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "west": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-west.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          }
        }
      },
      
      {
        "production_type": "output",
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
        "volume": 100,
        "pipe_connections": 
        [
          
          {
            "flow_direction": "output",
            "direction": 8,
            "position": 
            [
              1,
              1
            ]
          }
        ],
        "pipe_covers_frozen": 
        {
          "north": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-north.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "east": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-east.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "south": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-south.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          },
          "west": 
          {
            "filename": "__space-age__/graphics/entity/frozen/pipe-covers/pipe-cover-west.png",
            "priority": "extra-high",
            "width": 128,
            "height": 128,
            "scale": 0.5
          }
        }
      }
    ],
    "water_reflection": 
    {
      "pictures": 
      {
        "filename": "__base__/graphics/entity/chemical-plant/chemical-plant-reflection.png",
        "priority": "extra-high",
        "width": 28,
        "height": 36,
        "shift": 
        [
          0.15625,
          1.875
        ],
        "variation_count": 4,
        "scale": 5
      },
      "rotate": false,
      "orientation_to_variation": true
    },
    "heating_energy": "100kW"
  },
  "centrifuge": 
  {
    "type": "assembling-machine",
    "name": "centrifuge",
    "icon": "__base__/graphics/icons/centrifuge.png",
    "flags": 
    [
      "placeable-neutral",
      "placeable-player",
      "player-creation"
    ],
    "minable": 
    {
      "mining_time": 0.1,
      "result": "centrifuge"
    },
    "fast_replaceable_group": "centrifuge",
    "max_health": 350,
    "corpse": "centrifuge-remnants",
    "dying_explosion": "centrifuge-explosion",
    "icon_draw_specification": 
    {
      "shift": 
      [
        0,
        -0.3
      ]
    },
    "circuit_wire_max_distance": 9,
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
            "x": 156,
            "y": 150,
            "shift": 
            [
              1.234375,
              1.015625
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 186,
            "y": 174,
            "shift": 
            [
              1.234375,
              1.015625
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
            "x": 180,
            "y": 180,
            "shift": 
            [
              1.234375,
              0.984375
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 138,
            "y": 132,
            "shift": 
            [
              1.234375,
              0.984375
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
            "x": 144,
            "y": 138,
            "shift": 
            [
              1.234375,
              0.984375
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
            "x": 144,
            "y": 138,
            "shift": 
            [
              1.234375,
              0.984375
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            1.359375,
            1.203125
          ],
          "red_green_led_light_offset": 
          [
            1.390625,
            1.109375
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              1.484375,
              0.890625
            ],
            "green": 
            [
              1.546875,
              1.078125
            ]
          },
          "shadow": 
          {
            "red": 
            [
              2.03125,
              1.265625
            ],
            "green": 
            [
              1.90625,
              1.328125
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
            "x": 156,
            "y": 150,
            "shift": 
            [
              1.234375,
              1.015625
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 186,
            "y": 174,
            "shift": 
            [
              1.234375,
              1.015625
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
            "x": 180,
            "y": 180,
            "shift": 
            [
              1.234375,
              0.984375
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 138,
            "y": 132,
            "shift": 
            [
              1.234375,
              0.984375
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
            "x": 144,
            "y": 138,
            "shift": 
            [
              1.234375,
              0.984375
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
            "x": 144,
            "y": 138,
            "shift": 
            [
              1.234375,
              0.984375
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            1.359375,
            1.203125
          ],
          "red_green_led_light_offset": 
          [
            1.390625,
            1.109375
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              1.484375,
              0.890625
            ],
            "green": 
            [
              1.546875,
              1.078125
            ]
          },
          "shadow": 
          {
            "red": 
            [
              2.03125,
              1.265625
            ],
            "green": 
            [
              1.90625,
              1.328125
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
            "x": 156,
            "y": 150,
            "shift": 
            [
              1.234375,
              1.015625
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 186,
            "y": 174,
            "shift": 
            [
              1.234375,
              1.015625
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
            "x": 180,
            "y": 180,
            "shift": 
            [
              1.234375,
              0.984375
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 138,
            "y": 132,
            "shift": 
            [
              1.234375,
              0.984375
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
            "x": 144,
            "y": 138,
            "shift": 
            [
              1.234375,
              0.984375
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
            "x": 144,
            "y": 138,
            "shift": 
            [
              1.234375,
              0.984375
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            1.359375,
            1.203125
          ],
          "red_green_led_light_offset": 
          [
            1.390625,
            1.109375
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              1.484375,
              0.890625
            ],
            "green": 
            [
              1.546875,
              1.078125
            ]
          },
          "shadow": 
          {
            "red": 
            [
              2.03125,
              1.265625
            ],
            "green": 
            [
              1.90625,
              1.328125
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
            "x": 156,
            "y": 150,
            "shift": 
            [
              1.234375,
              1.015625
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 186,
            "y": 174,
            "shift": 
            [
              1.234375,
              1.015625
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
            "x": 180,
            "y": 180,
            "shift": 
            [
              1.234375,
              0.984375
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 138,
            "y": 132,
            "shift": 
            [
              1.234375,
              0.984375
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
            "x": 144,
            "y": 138,
            "shift": 
            [
              1.234375,
              0.984375
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
            "x": 144,
            "y": 138,
            "shift": 
            [
              1.234375,
              0.984375
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            1.359375,
            1.203125
          ],
          "red_green_led_light_offset": 
          [
            1.390625,
            1.109375
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              1.484375,
              0.890625
            ],
            "green": 
            [
              1.546875,
              1.078125
            ]
          },
          "shadow": 
          {
            "red": 
            [
              2.03125,
              1.265625
            ],
            "green": 
            [
              1.90625,
              1.328125
            ]
          }
        }
      }
    ],
    "resistances": 
    [
      
      {
        "type": "fire",
        "percent": 70
      }
    ],
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
    "graphics_set": 
    {
      "always_draw_idle_animation": true,
      "idle_animation": 
      {
        "layers": 
        [
          
          {
            "filename": "__base__/graphics/entity/centrifuge/centrifuge-C.png",
            "priority": "high",
            "scale": 0.5,
            "line_length": 8,
            "width": 237,
            "height": 214,
            "frame_count": 64,
            "shift": 
            [
              -0.0078125,
              -0.828125
            ]
          },
          
          {
            "filename": "__base__/graphics/entity/centrifuge/centrifuge-C-shadow.png",
            "draw_as_shadow": true,
            "priority": "high",
            "scale": 0.5,
            "line_length": 8,
            "width": 279,
            "height": 152,
            "frame_count": 64,
            "shift": 
            [
              0.5234375,
              -0.3125
            ]
          },
          
          {
            "filename": "__base__/graphics/entity/centrifuge/centrifuge-B.png",
            "priority": "high",
            "scale": 0.5,
            "line_length": 8,
            "width": 156,
            "height": 234,
            "frame_count": 64,
            "shift": 
            [
              0.71875,
              0.203125
            ]
          },
          
          {
            "filename": "__base__/graphics/entity/centrifuge/centrifuge-B-shadow.png",
            "draw_as_shadow": true,
            "priority": "high",
            "scale": 0.5,
            "line_length": 8,
            "width": 251,
            "height": 149,
            "frame_count": 64,
            "shift": 
            [
              1.9765625,
              0.4765625
            ]
          },
          
          {
            "filename": "__base__/graphics/entity/centrifuge/centrifuge-A.png",
            "priority": "high",
            "scale": 0.5,
            "line_length": 8,
            "width": 139,
            "height": 246,
            "frame_count": 64,
            "shift": 
            [
              -0.8203125,
              0.109375
            ]
          },
          
          {
            "filename": "__base__/graphics/entity/centrifuge/centrifuge-A-shadow.png",
            "priority": "high",
            "draw_as_shadow": true,
            "scale": 0.5,
            "line_length": 8,
            "width": 230,
            "height": 124,
            "frame_count": 64,
            "shift": 
            [
              0.265625,
              0.734375
            ]
          }
        ]
      },
      "working_visualisations": 
      [
        
        {
          "effect": "uranium-glow",
          "fadeout": true,
          "light": 
          {
            "intensity": 0.2,
            "size": 9.9000000000000003552713678800500929355621337890625,
            "shift": 
            [
              0,
              0
            ],
            "color": 
            [
              0,
              1,
              0
            ]
          }
        },
        
        {
          "effect": "uranium-glow",
          "fadeout": true,
          "animation": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/centrifuge/centrifuge-C-light.png",
                "priority": "high",
                "scale": 0.5,
                "blend_mode": "additive",
                "line_length": 8,
                "width": 190,
                "height": 207,
                "frame_count": 64,
                "draw_as_glow": true,
                "shift": 
                [
                  0,
                  -0.8515625
                ]
              },
              
              {
                "filename": "__base__/graphics/entity/centrifuge/centrifuge-B-light.png",
                "priority": "high",
                "scale": 0.5,
                "blend_mode": "additive",
                "line_length": 8,
                "width": 131,
                "height": 206,
                "frame_count": 64,
                "draw_as_glow": true,
                "shift": 
                [
                  0.5234375,
                  0.015625
                ]
              },
              
              {
                "filename": "__base__/graphics/entity/centrifuge/centrifuge-A-light.png",
                "priority": "high",
                "scale": 0.5,
                "blend_mode": "additive",
                "line_length": 8,
                "width": 108,
                "height": 197,
                "frame_count": 64,
                "draw_as_glow": true,
                "shift": 
                [
                  -0.734375,
                  -0.0546875
                ]
              }
            ]
          }
        }
      ],
      "reset_animation_when_frozen": true,
      "frozen_patch": 
      {
        "filename": "__space-age__/graphics/entity/frozen/centrifuge/centrifuge-frozen.png",
        "priority": "high",
        "width": 256,
        "height": 320,
        "shift": 
        [
          0,
          -0.5
        ],
        "scale": 0.5
      }
    },
    "open_sound": 
    {
      "filename": "__base__/sound/machine-open.ogg",
      "volume": 0.5
    },
    "close_sound": 
    {
      "filename": "__base__/sound/machine-close.ogg",
      "volume": 0.5
    },
    "impact_category": "metal-large",
    "working_sound": 
    {
      "sound": 
      [
        
        {
          "filename": "__base__/sound/centrifuge-1.ogg",
          "volume": 0.3,
          "modifiers": 
          {
            "type": "main-menu",
            "volume_multiplier": 1.5
          }
        },
        
        {
          "filename": "__base__/sound/centrifuge-2.ogg",
          "volume": 0.3,
          "modifiers": 
          {
            "type": "main-menu",
            "volume_multiplier": 1.5
          }
        },
        
        {
          "filename": "__base__/sound/centrifuge-3.ogg",
          "volume": 0.3,
          "modifiers": 
          {
            "type": "main-menu",
            "volume_multiplier": 1.5
          }
        }
      ],
      "fade_in_ticks": 4,
      "fade_out_ticks": 20
    },
    "crafting_speed": 1,
    "crafting_categories": 
    [
      "centrifuging"
    ],
    "energy_source": 
    {
      "type": "electric",
      "usage_priority": "secondary-input",
      "emissions_per_minute": 
      {
        "pollution": 4
      }
    },
    "energy_usage": "350kW",
    "module_slots": 2,
    "allowed_effects": 
    [
      "consumption",
      "speed",
      "productivity",
      "pollution",
      "quality"
    ],
    "water_reflection": 
    {
      "pictures": 
      {
        "filename": "__base__/graphics/entity/centrifuge/centrifuge-reflection.png",
        "priority": "extra-high",
        "width": 28,
        "height": 32,
        "shift": 
        [
          0,
          2.03125
        ],
        "variation_count": 1,
        "scale": 5
      },
      "rotate": false,
      "orientation_to_variation": false
    },
    "heating_energy": "100kW"
  },
  "biochamber": 
  {
    "type": "assembling-machine",
    "name": "biochamber",
    "icon": "__space-age__/graphics/icons/biochamber.png",
    "flags": 
    [
      "placeable-neutral",
      "placeable-player",
      "player-creation"
    ],
    "minable": 
    {
      "mining_time": 0.1,
      "result": "biochamber"
    },
    "fast_replaceable_group": "biochamber",
    "max_health": 300,
    "corpse": "biochamber-remnants",
    "dying_explosion": "biochamber-explosion",
    "icon_draw_specification": 
    {
      "shift": 
      [
        0,
        -0.3
      ]
    },
    "circuit_wire_max_distance": 9,
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
            "y": 100,
            "shift": 
            [
              -1.15625,
              0.78125
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
            "y": 116,
            "shift": 
            [
              -1.15625,
              0.78125
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
            "y": 120,
            "shift": 
            [
              -1.15625,
              0.75
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
            "y": 88,
            "shift": 
            [
              -1.15625,
              0.75
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
            "y": 92,
            "shift": 
            [
              -1.15625,
              0.75
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
            "y": 92,
            "shift": 
            [
              -1.15625,
              0.75
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            -1.3125,
            0.96875
          ],
          "red_green_led_light_offset": 
          [
            -1.28125,
            0.8125
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              -1,
              0.90625
            ],
            "green": 
            [
              -1.125,
              1.09375
            ]
          },
          "shadow": 
          {
            "red": 
            [
              -0.4375,
              1.28125
            ],
            "green": 
            [
              -0.75,
              1.34375
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
            "y": 100,
            "shift": 
            [
              -1.15625,
              0.78125
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
            "y": 116,
            "shift": 
            [
              -1.15625,
              0.78125
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
            "y": 120,
            "shift": 
            [
              -1.15625,
              0.75
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
            "y": 88,
            "shift": 
            [
              -1.15625,
              0.75
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
            "y": 92,
            "shift": 
            [
              -1.15625,
              0.75
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
            "y": 92,
            "shift": 
            [
              -1.15625,
              0.75
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            -1.3125,
            0.96875
          ],
          "red_green_led_light_offset": 
          [
            -1.28125,
            0.8125
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              -1,
              0.90625
            ],
            "green": 
            [
              -1.125,
              1.09375
            ]
          },
          "shadow": 
          {
            "red": 
            [
              -0.4375,
              1.28125
            ],
            "green": 
            [
              -0.75,
              1.34375
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
            "y": 100,
            "shift": 
            [
              -1.15625,
              0.78125
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
            "y": 116,
            "shift": 
            [
              -1.15625,
              0.78125
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
            "y": 120,
            "shift": 
            [
              -1.15625,
              0.75
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
            "y": 88,
            "shift": 
            [
              -1.15625,
              0.75
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
            "y": 92,
            "shift": 
            [
              -1.15625,
              0.75
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
            "y": 92,
            "shift": 
            [
              -1.15625,
              0.75
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            -1.3125,
            0.96875
          ],
          "red_green_led_light_offset": 
          [
            -1.28125,
            0.8125
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              -1,
              0.90625
            ],
            "green": 
            [
              -1.125,
              1.09375
            ]
          },
          "shadow": 
          {
            "red": 
            [
              -0.4375,
              1.28125
            ],
            "green": 
            [
              -0.75,
              1.34375
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
            "y": 100,
            "shift": 
            [
              -1.15625,
              0.78125
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
            "y": 116,
            "shift": 
            [
              -1.15625,
              0.78125
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
            "y": 120,
            "shift": 
            [
              -1.15625,
              0.75
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
            "y": 88,
            "shift": 
            [
              -1.15625,
              0.75
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
            "y": 92,
            "shift": 
            [
              -1.15625,
              0.75
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
            "y": 92,
            "shift": 
            [
              -1.15625,
              0.75
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            -1.3125,
            0.96875
          ],
          "red_green_led_light_offset": 
          [
            -1.28125,
            0.8125
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              -1,
              0.90625
            ],
            "green": 
            [
              -1.125,
              1.09375
            ]
          },
          "shadow": 
          {
            "red": 
            [
              -0.4375,
              1.28125
            ],
            "green": 
            [
              -0.75,
              1.34375
            ]
          }
        }
      }
    ],
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
    "drawing_box_vertical_extension": 0.4,
    "module_slots": 4,
    "allowed_effects": 
    [
      "consumption",
      "speed",
      "productivity",
      "pollution",
      "quality"
    ],
    "effect_receiver": 
    {
      "base_effect": 
      {
        "productivity": 0.5
      }
    },
    "graphics_set": 
    {
      "animation": 
      {
        "layers": 
        [
          
          {
            "animation_speed": 0.75,
            "frame_count": 1,
            "repeat_count": 64,
            "scale": 0.5,
            "width": 238,
            "height": 268,
            "shift": 
            [
              -0.015625,
              -0.234375
            ],
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/biochamber/biochamber.png"
          },
          
          {
            "animation_speed": 0.75,
            "frame_count": 64,
            "scale": 0.5,
            "width": 92,
            "height": 144,
            "shift": 
            [
              0.734375,
              -0.296875
            ],
            "line_length": 8,
            "filename": "__space-age__/graphics/entity/biochamber/biochamber-animation.png"
          },
          
          {
            "draw_as_shadow": true,
            "animation_speed": 0.75,
            "frame_count": 1,
            "repeat_count": 64,
            "scale": 0.5,
            "width": 268,
            "height": 190,
            "shift": 
            [
              0.5625,
              0.046875
            ],
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/biochamber/biochamber-shadow.png"
          }
        ]
      },
      "frozen_patch": 
      {
        "scale": 0.5,
        "width": 238,
        "height": 268,
        "shift": 
        [
          -0.015625,
          -0.234375
        ],
        "line_length": 1,
        "filename": "__space-age__/graphics/entity/biochamber/biochamber-frozen.png"
      },
      "working_visualisations": 
      [
        
        {
          "fadeout": true,
          "animation": 
          {
            "animation_speed": 0.75,
            "frame_count": 64,
            "scale": 0.5,
            "width": 92,
            "height": 148,
            "shift": 
            [
              -0.484375,
              -0.4375
            ],
            "line_length": 8,
            "filename": "__space-age__/graphics/entity/biochamber/biochamber-animation-dome.png"
          }
        },
        
        {
          "animation": 
          {
            "priority": "extra-high",
            "frame_count": 1,
            "repeat_count": 64,
            "animation_speed": 0.75,
            "blend_mode": "additive",
            "draw_as_glow": true,
            "scale": 0.5,
            "width": 198,
            "height": 222,
            "shift": 
            [
              0,
              -0.25
            ],
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/biochamber/biochamber-status-lamp.png"
          }
        },
        
        {
          "fadeout": true,
          "apply_recipe_tint": "primary",
          "effect": "flicker",
          "animation": 
          {
            "priority": "extra-high",
            "frame_count": 64,
            "animation_speed": 0.75,
            "blend_mode": "additive",
            "draw_as_glow": true,
            "scale": 0.5,
            "width": 112,
            "height": 180,
            "shift": 
            [
              -0.59375,
              -0.578125
            ],
            "line_length": 8,
            "filename": "__space-age__/graphics/entity/biochamber/biochamber-glow.png"
          }
        },
        
        {
          "fadeout": true,
          "apply_recipe_tint": "secondary",
          "effect": "flicker",
          "animation": 
          {
            "priority": "extra-high",
            "frame_count": 64,
            "animation_speed": 0.75,
            "blend_mode": "additive",
            "draw_as_glow": true,
            "scale": 0.5,
            "width": 20,
            "height": 40,
            "shift": 
            [
              1.1875,
              -0.0625
            ],
            "line_length": 8,
            "filename": "__space-age__/graphics/entity/biochamber/biochamber-glow-2.png"
          }
        },
        
        {
          "effect": "flicker",
          "fadeout": true,
          "apply_recipe_tint": "primary",
          "light": 
          {
            "intensity": 0.5,
            "size": 17,
            "shift": 
            [
              -0.5,
              0
            ],
            "color": 
            {
              "r": 1,
              "g": 1,
              "b": 1
            }
          }
        }
      ]
    },
    "impact_category": "metal-large",
    "open_sound": 
    {
      "filename": "__base__/sound/open-close/fluid-open.ogg",
      "volume": 0.55
    },
    "close_sound": 
    {
      "filename": "__base__/sound/open-close/fluid-close.ogg",
      "volume": 0.54000000000000003552713678800500929355621337890625
    },
    "working_sound": 
    {
      "sound": 
      {
        "filename": "__space-age__/sound/entity/biochamber/biochamber-loop.ogg",
        "volume": 0.7
      },
      "max_sounds_per_type": 3,
      "fade_in_ticks": 4,
      "fade_out_ticks": 20
    },
    "crafting_speed": 2,
    "energy_source": 
    {
      "type": "burner",
      "fuel_categories": 
      [
        "nutrients"
      ],
      "effectivity": 1,
      "burner_usage": "nutrients",
      "fuel_inventory_size": 1,
      "emissions_per_minute": 
      {
        "pollution": -1
      },
      "light_flicker": 
      {
        "minimum_intensity": 0,
        "maximum_intensity": 0,
        "derivation_change_frequency": 0,
        "derivation_change_deviation": 0,
        "border_fix_speed": 0,
        "minimum_light_size": 0,
        "light_intensity_to_size_coefficient": 0,
        "color": 
        [
          0,
          0,
          0,
          1
        ]
      }
    },
    "energy_usage": "500kW",
    "heating_energy": "100kW",
    "crafting_categories": 
    [
      "organic",
      "organic-or-hand-crafting",
      "organic-or-assembling",
      "organic-or-chemistry"
    ],
    "fluid_boxes_off_when_no_fluid_recipe": true,
    "fluid_boxes": 
    [
      
      {
        "production_type": "input",
        "pipe_picture": 
        {
          "north": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "shift": 
                [
                  0,
                  0.40625
                ],
                "width": 52,
                "height": 34,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-north-1.png"
              },
              
              {
                "draw_as_shadow": true,
                "scale": 0.5,
                "shift": 
                [
                  1.234375,
                  0.734375
                ],
                "width": 200,
                "height": 62,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-north-shadow.png"
              }
            ]
          },
          "east": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "shift": 
                [
                  -1.140625,
                  0.015625
                ],
                "width": 88,
                "height": 56,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-east-1.png"
              },
              
              {
                "draw_as_shadow": true,
                "scale": 0.5,
                "shift": 
                [
                  -0.28125,
                  1.25
                ],
                "width": 50,
                "height": 168,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-east-shadow.png"
              }
            ]
          },
          "south": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "shift": 
                [
                  0,
                  -0.671875
                ],
                "width": 52,
                "height": 64,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-south-1.png"
              },
              
              {
                "draw_as_shadow": true,
                "scale": 0.5,
                "shift": 
                [
                  -0.8125,
                  -0.71875
                ],
                "width": 206,
                "height": 62,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-south-shadow.png"
              }
            ]
          },
          "west": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "shift": 
                [
                  0.828125,
                  -0.09375
                ],
                "width": 44,
                "height": 64,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-west-1.png"
              }
            ]
          }
        },
        "pipe_picture_frozen": 
        {
          "north": 
          {
            "scale": 0.5,
            "shift": 
            [
              0,
              0.40625
            ],
            "width": 52,
            "height": 34,
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-north-1-frozen.png"
          },
          "east": 
          {
            "scale": 0.5,
            "shift": 
            [
              -1.140625,
              0.015625
            ],
            "width": 88,
            "height": 56,
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-east-1-frozen.png"
          },
          "south": 
          {
            "scale": 0.5,
            "shift": 
            [
              0,
              -0.671875
            ],
            "width": 52,
            "height": 64,
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-south-1-frozen.png"
          },
          "west": 
          {
            "scale": 0.5,
            "shift": 
            [
              0.828125,
              -0.09375
            ],
            "width": 44,
            "height": 64,
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-west-1-frozen.png"
          }
        },
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
        "volume": 1000,
        "pipe_connections": 
        [
          
          {
            "flow_direction": "input",
            "direction": 0,
            "position": 
            [
              -1,
              -1
            ]
          }
        ]
      },
      
      {
        "production_type": "input",
        "pipe_picture": 
        {
          "north": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "shift": 
                [
                  -0.203125,
                  0.78125
                ],
                "width": 80,
                "height": 82,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-north-2.png"
              }
            ]
          },
          "east": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "shift": 
                [
                  -0.546875,
                  -0.015625
                ],
                "width": 12,
                "height": 52,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-east-2.png"
              }
            ]
          },
          "south": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "shift": 
                [
                  -0.046875,
                  -0.859375
                ],
                "width": 58,
                "height": 90,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-south-2.png"
              }
            ]
          },
          "west": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "shift": 
                [
                  0.578125,
                  -0.015625
                ],
                "width": 12,
                "height": 52,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-west-2.png"
              }
            ]
          }
        },
        "pipe_picture_frozen": 
        {
          "north": 
          {
            "scale": 0.5,
            "shift": 
            [
              -0.203125,
              0.78125
            ],
            "width": 80,
            "height": 82,
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-north-2-frozen.png"
          },
          "east": 
          {
            "scale": 0.5,
            "shift": 
            [
              -0.546875,
              -0.015625
            ],
            "width": 12,
            "height": 52,
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-east-2-frozen.png"
          },
          "south": 
          {
            "scale": 0.5,
            "shift": 
            [
              -0.046875,
              -0.859375
            ],
            "width": 58,
            "height": 90,
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-south-2-frozen.png"
          },
          "west": 
          {
            "scale": 0.5,
            "shift": 
            [
              0.578125,
              -0.015625
            ],
            "width": 12,
            "height": 52,
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-west-2-frozen.png"
          }
        },
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
        "volume": 1000,
        "pipe_connections": 
        [
          
          {
            "flow_direction": "input",
            "direction": 0,
            "position": 
            [
              1,
              -1
            ]
          }
        ]
      },
      
      {
        "production_type": "output",
        "pipe_picture": 
        {
          "north": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "shift": 
                [
                  0,
                  0.40625
                ],
                "width": 52,
                "height": 34,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-north-1.png"
              },
              
              {
                "draw_as_shadow": true,
                "scale": 0.5,
                "shift": 
                [
                  1.234375,
                  0.734375
                ],
                "width": 200,
                "height": 62,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-north-shadow.png"
              }
            ]
          },
          "east": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "shift": 
                [
                  -1.140625,
                  0.015625
                ],
                "width": 88,
                "height": 56,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-east-1.png"
              },
              
              {
                "draw_as_shadow": true,
                "scale": 0.5,
                "shift": 
                [
                  -0.28125,
                  1.25
                ],
                "width": 50,
                "height": 168,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-east-shadow.png"
              }
            ]
          },
          "south": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "shift": 
                [
                  0,
                  -0.671875
                ],
                "width": 52,
                "height": 64,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-south-1.png"
              },
              
              {
                "draw_as_shadow": true,
                "scale": 0.5,
                "shift": 
                [
                  -0.8125,
                  -0.71875
                ],
                "width": 206,
                "height": 62,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-south-shadow.png"
              }
            ]
          },
          "west": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "shift": 
                [
                  0.828125,
                  -0.09375
                ],
                "width": 44,
                "height": 64,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-west-1.png"
              }
            ]
          }
        },
        "pipe_picture_frozen": 
        {
          "north": 
          {
            "scale": 0.5,
            "shift": 
            [
              0,
              0.40625
            ],
            "width": 52,
            "height": 34,
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-north-1-frozen.png"
          },
          "east": 
          {
            "scale": 0.5,
            "shift": 
            [
              -1.140625,
              0.015625
            ],
            "width": 88,
            "height": 56,
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-east-1-frozen.png"
          },
          "south": 
          {
            "scale": 0.5,
            "shift": 
            [
              0,
              -0.671875
            ],
            "width": 52,
            "height": 64,
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-south-1-frozen.png"
          },
          "west": 
          {
            "scale": 0.5,
            "shift": 
            [
              0.828125,
              -0.09375
            ],
            "width": 44,
            "height": 64,
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-west-1-frozen.png"
          }
        },
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
        "volume": 1000,
        "pipe_connections": 
        [
          
          {
            "flow_direction": "output",
            "direction": 8,
            "position": 
            [
              1,
              1
            ]
          }
        ]
      },
      
      {
        "production_type": "output",
        "pipe_picture": 
        {
          "north": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "shift": 
                [
                  -0.203125,
                  0.78125
                ],
                "width": 80,
                "height": 82,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-north-2.png"
              }
            ]
          },
          "east": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "shift": 
                [
                  -0.546875,
                  -0.015625
                ],
                "width": 12,
                "height": 52,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-east-2.png"
              }
            ]
          },
          "south": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "shift": 
                [
                  -0.046875,
                  -0.859375
                ],
                "width": 58,
                "height": 90,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-south-2.png"
              }
            ]
          },
          "west": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "shift": 
                [
                  0.578125,
                  -0.015625
                ],
                "width": 12,
                "height": 52,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-west-2.png"
              }
            ]
          }
        },
        "pipe_picture_frozen": 
        {
          "north": 
          {
            "scale": 0.5,
            "shift": 
            [
              -0.203125,
              0.78125
            ],
            "width": 80,
            "height": 82,
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-north-2-frozen.png"
          },
          "east": 
          {
            "scale": 0.5,
            "shift": 
            [
              -0.546875,
              -0.015625
            ],
            "width": 12,
            "height": 52,
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-east-2-frozen.png"
          },
          "south": 
          {
            "scale": 0.5,
            "shift": 
            [
              -0.046875,
              -0.859375
            ],
            "width": 58,
            "height": 90,
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-south-2-frozen.png"
          },
          "west": 
          {
            "scale": 0.5,
            "shift": 
            [
              0.578125,
              -0.015625
            ],
            "width": 12,
            "height": 52,
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/biochamber/biochamber-pipes-west-2-frozen.png"
          }
        },
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
        "volume": 1000,
        "pipe_connections": 
        [
          
          {
            "flow_direction": "output",
            "direction": 8,
            "position": 
            [
              -1,
              1
            ]
          }
        ]
      }
    ],
    "water_reflection": 
    {
      "pictures": 
      {
        "filename": "__base__/graphics/entity/chemical-plant/chemical-plant-reflection.png",
        "priority": "extra-high",
        "width": 28,
        "height": 36,
        "shift": 
        [
          0.15625,
          1.875
        ],
        "variation_count": 4,
        "scale": 5
      },
      "rotate": false,
      "orientation_to_variation": true
    }
  },
  "crusher": 
  {
    "type": "assembling-machine",
    "name": "crusher",
    "icon": "__space-age__/graphics/icons/crusher.png",
    "flags": 
    [
      "placeable-neutral",
      "placeable-player",
      "player-creation"
    ],
    "minable": 
    {
      "mining_time": 0.2,
      "result": "crusher"
    },
    "fast_replaceable_group": "crusher",
    "max_health": 350,
    "corpse": "electric-furnace-remnants",
    "dying_explosion": "electric-furnace-explosion",
    "circuit_wire_max_distance": 9,
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
            "x": 104,
            "y": 100,
            "shift": 
            [
              0.4375,
              0.75
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
            "x": 120,
            "y": 92,
            "shift": 
            [
              0.515625,
              0.953125
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 124,
            "y": 116,
            "shift": 
            [
              0.4375,
              0.75
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
            "x": 136,
            "y": 108,
            "shift": 
            [
              0.59375,
              0.984375
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
            "x": 120,
            "y": 120,
            "shift": 
            [
              0.4375,
              0.71875
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 92,
            "y": 88,
            "shift": 
            [
              0.4375,
              0.71875
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
            "x": 96,
            "y": 92,
            "shift": 
            [
              0.4375,
              0.71875
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
            "x": 96,
            "y": 92,
            "shift": 
            [
              0.4375,
              0.71875
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            0.4375,
            0.96875
          ],
          "red_green_led_light_offset": 
          [
            0.4375,
            0.8125
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              0.6875,
              0.75
            ],
            "green": 
            [
              0.75,
              0.96875
            ]
          },
          "shadow": 
          {
            "red": 
            [
              1.03125,
              1.15625
            ],
            "green": 
            [
              0.90625,
              1.21875
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
            "x": 0,
            "y": 100,
            "shift": 
            [
              -1.125,
              0.1875
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 0,
            "y": 116,
            "shift": 
            [
              -1.125,
              0.1875
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
            "x": 0,
            "y": 120,
            "shift": 
            [
              -1.125,
              0.15625
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 0,
            "y": 88,
            "shift": 
            [
              -1.125,
              0.15625
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
            "x": 0,
            "y": 92,
            "shift": 
            [
              -1.125,
              0.15625
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
            "x": 0,
            "y": 92,
            "shift": 
            [
              -1.125,
              0.15625
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            -1.375,
            0.21875
          ],
          "red_green_led_light_offset": 
          [
            -1.3125,
            0.15625
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              -1.21875,
              0.34375
            ],
            "green": 
            [
              -1.34375,
              0.4375
            ]
          },
          "shadow": 
          {
            "red": 
            [
              -0.84375,
              0.65625
            ],
            "green": 
            [
              -1.15625,
              0.625
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
            "x": 104,
            "y": 100,
            "shift": 
            [
              0.4375,
              0.75
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
            "x": 120,
            "y": 92,
            "shift": 
            [
              0.515625,
              0.953125
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 124,
            "y": 116,
            "shift": 
            [
              0.4375,
              0.75
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
            "x": 136,
            "y": 108,
            "shift": 
            [
              0.59375,
              0.984375
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
            "x": 120,
            "y": 120,
            "shift": 
            [
              0.4375,
              0.71875
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 92,
            "y": 88,
            "shift": 
            [
              0.4375,
              0.71875
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
            "x": 96,
            "y": 92,
            "shift": 
            [
              0.4375,
              0.71875
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
            "x": 96,
            "y": 92,
            "shift": 
            [
              0.4375,
              0.71875
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            0.4375,
            0.96875
          ],
          "red_green_led_light_offset": 
          [
            0.4375,
            0.8125
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              0.6875,
              0.75
            ],
            "green": 
            [
              0.75,
              0.96875
            ]
          },
          "shadow": 
          {
            "red": 
            [
              1.03125,
              1.15625
            ],
            "green": 
            [
              0.90625,
              1.21875
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
            "x": 0,
            "y": 100,
            "shift": 
            [
              -1.125,
              0.1875
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 0,
            "y": 116,
            "shift": 
            [
              -1.125,
              0.1875
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
            "x": 0,
            "y": 120,
            "shift": 
            [
              -1.125,
              0.15625
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 0,
            "y": 88,
            "shift": 
            [
              -1.125,
              0.15625
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
            "x": 0,
            "y": 92,
            "shift": 
            [
              -1.125,
              0.15625
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
            "x": 0,
            "y": 92,
            "shift": 
            [
              -1.125,
              0.15625
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            -1.375,
            0.21875
          ],
          "red_green_led_light_offset": 
          [
            -1.3125,
            0.15625
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              -1.21875,
              0.34375
            ],
            "green": 
            [
              -1.34375,
              0.4375
            ]
          },
          "shadow": 
          {
            "red": 
            [
              -0.84375,
              0.65625
            ],
            "green": 
            [
              -1.15625,
              0.625
            ]
          }
        }
      }
    ],
    "resistances": 
    [
      
      {
        "type": "fire",
        "percent": 80
      }
    ],
    "collision_box": 
    [
      
      [
        -0.7,
        -1.19999999999999996447286321199499070644378662109375
      ],
      
      [
        0.7,
        1.19999999999999996447286321199499070644378662109375
      ]
    ],
    "surface_conditions": 
    [
      
      {
        "property": "gravity",
        "min": 0,
        "max": 0
      }
    ],
    "selection_box": 
    [
      
      [
        -1,
        -1.5
      ],
      
      [
        1,
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
    "module_slots": 2,
    "icons_positioning": 
    [
      
      {
        "inventory_index": 4,
        "shift": 
        [
          0,
          0.3
        ]
      }
    ],
    "icon_draw_specification": 
    {
      "shift": 
      [
        0,
        -0.45
      ]
    },
    "allowed_effects": 
    [
      "consumption",
      "speed",
      "productivity",
      "pollution",
      "quality"
    ],
    "crafting_categories": 
    [
      "crushing"
    ],
    "crafting_speed": 1,
    "energy_usage": "540kW",
    "heating_energy": "200kW",
    "energy_source": 
    {
      "type": "electric",
      "usage_priority": "secondary-input",
      "emissions_per_minute": 
      {
        "pollution": 1
      }
    },
    "open_sound": 
    {
      "filename": "__base__/sound/open-close/electric-large-open.ogg",
      "volume": 0.6
    },
    "close_sound": 
    {
      "filename": "__base__/sound/open-close/electric-large-close.ogg",
      "volume": 0.6
    },
    "working_sound": 
    {
      "sound": 
      {
        "filename": "__space-age__/sound/entity/crusher/crusher-loop.ogg",
        "volume": 0.8
      },
      "audible_distance_modifier": 0.6,
      "fade_in_ticks": 4,
      "fade_out_ticks": 20,
      "max_sounds_per_type": 3
    },
    "graphics_set": 
    {
      "integration_patch_render_layer": "floor",
      "integration_patch": 
      {
        "north": 
        {
          "scale": 0.5,
          "shift": 
          [
            0.09375,
            -0.109375
          ],
          "width": 154,
          "height": 192,
          "line_length": 1,
          "filename": "__space-age__/graphics/entity/crusher/crusher-vertical-integration.png"
        },
        "east": 
        {
          "scale": 0.5,
          "shift": 
          [
            0,
            0.203125
          ],
          "width": 202,
          "height": 142,
          "line_length": 1,
          "filename": "__space-age__/graphics/entity/crusher/crusher-horizontal-integration.png"
        },
        "south": 
        {
          "scale": 0.5,
          "shift": 
          [
            0.09375,
            -0.109375
          ],
          "width": 154,
          "height": 192,
          "line_length": 1,
          "filename": "__space-age__/graphics/entity/crusher/crusher-vertical-integration.png"
        },
        "west": 
        {
          "scale": 0.5,
          "shift": 
          [
            0,
            0.203125
          ],
          "width": 202,
          "height": 142,
          "line_length": 1,
          "filename": "__space-age__/graphics/entity/crusher/crusher-horizontal-integration.png"
        }
      },
      "animation": 
      {
        "north": 
        {
          "layers": 
          [
            
            {
              "animation_speed": 0.5,
              "frame_count": 48,
              "scale": 0.5,
              "shift": 
              [
                0.0625,
                -0.234375
              ],
              "width": 140,
              "height": 194,
              "line_length": 8,
              "filename": "__space-age__/graphics/entity/crusher/crusher-vertical.png"
            },
            
            {
              "animation_speed": 0.5,
              "repeat_count": 48,
              "scale": 0.5,
              "draw_as_shadow": true,
              "shift": 
              [
                1.1875,
                -0.5625
              ],
              "width": 50,
              "height": 78,
              "line_length": 1,
              "filename": "__space-age__/graphics/entity/crusher/crusher-vertical-shadow.png"
            }
          ]
        },
        "east": 
        {
          "layers": 
          [
            
            {
              "animation_speed": 0.5,
              "frame_count": 48,
              "scale": 0.5,
              "shift": 
              [
                0.078125,
                -0.15625
              ],
              "width": 200,
              "height": 162,
              "line_length": 8,
              "filename": "__space-age__/graphics/entity/crusher/crusher-horizontal.png"
            },
            
            {
              "animation_speed": 0.5,
              "repeat_count": 48,
              "scale": 0.5,
              "draw_as_shadow": true,
              "shift": 
              [
                1.390625,
                0.125
              ],
              "width": 88,
              "height": 124,
              "line_length": 1,
              "filename": "__space-age__/graphics/entity/crusher/crusher-horizontal-shadow.png"
            }
          ]
        },
        "south": 
        {
          "layers": 
          [
            
            {
              "animation_speed": 0.5,
              "frame_count": 48,
              "scale": 0.5,
              "shift": 
              [
                0.0625,
                -0.234375
              ],
              "width": 140,
              "height": 194,
              "line_length": 8,
              "filename": "__space-age__/graphics/entity/crusher/crusher-vertical.png"
            },
            
            {
              "animation_speed": 0.5,
              "repeat_count": 48,
              "scale": 0.5,
              "draw_as_shadow": true,
              "shift": 
              [
                1.1875,
                -0.5625
              ],
              "width": 50,
              "height": 78,
              "line_length": 1,
              "filename": "__space-age__/graphics/entity/crusher/crusher-vertical-shadow.png"
            }
          ]
        },
        "west": 
        {
          "layers": 
          [
            
            {
              "animation_speed": 0.5,
              "frame_count": 48,
              "scale": 0.5,
              "shift": 
              [
                0.078125,
                -0.15625
              ],
              "width": 200,
              "height": 162,
              "line_length": 8,
              "filename": "__space-age__/graphics/entity/crusher/crusher-horizontal.png"
            },
            
            {
              "animation_speed": 0.5,
              "repeat_count": 48,
              "scale": 0.5,
              "draw_as_shadow": true,
              "shift": 
              [
                1.390625,
                0.125
              ],
              "width": 88,
              "height": 124,
              "line_length": 1,
              "filename": "__space-age__/graphics/entity/crusher/crusher-horizontal-shadow.png"
            }
          ]
        }
      },
      "working_visualisations": 
      {
        "layers": 
        {
          "fadeout": true,
          "north_animation": 
          {
            "animation_speed": 0.5,
            "repeat_count": 48,
            "scale": 0.5,
            "blend_mode": "additive",
            "draw_as_glow": true,
            "shift": 
            [
              0.796875,
              0.71875
            ],
            "width": 26,
            "height": 28,
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/crusher/crusher-vertical-light.png"
          },
          "east_animation": 
          {
            "animation_speed": 0.5,
            "repeat_count": 48,
            "scale": 0.5,
            "blend_mode": "additive",
            "draw_as_glow": true,
            "shift": 
            [
              0.84375,
              0.59375
            ],
            "width": 30,
            "height": 28,
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/crusher/crusher-horizontal-light.png"
          },
          "south_animation": 
          {
            "animation_speed": 0.5,
            "repeat_count": 48,
            "scale": 0.5,
            "blend_mode": "additive",
            "draw_as_glow": true,
            "shift": 
            [
              0.796875,
              0.71875
            ],
            "width": 26,
            "height": 28,
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/crusher/crusher-vertical-light.png"
          },
          "west_animation": 
          {
            "animation_speed": 0.5,
            "repeat_count": 48,
            "scale": 0.5,
            "blend_mode": "additive",
            "draw_as_glow": true,
            "shift": 
            [
              0.84375,
              0.59375
            ],
            "width": 30,
            "height": 28,
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/crusher/crusher-horizontal-light.png"
          }
        }
      }
    },
    "water_reflection": 
    {
      "pictures": 
      {
        "filename": "__space-age__/graphics/entity/crusher/crusher-reflection.png",
        "priority": "extra-high",
        "width": 24,
        "height": 24,
        "shift": 
        [
          0.15625,
          0.25
        ],
        "variation_count": 1,
        "scale": 5
      },
      "rotate": false,
      "orientation_to_variation": false
    }
  },
  "foundry": 
  {
    "type": "assembling-machine",
    "name": "foundry",
    "icon": "__space-age__/graphics/icons/foundry.png",
    "flags": 
    [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": 
    {
      "mining_time": 0.2,
      "result": "foundry"
    },
    "fast_replaceable_group": "foundry",
    "max_health": 350,
    "corpse": "foundry-remnants",
    "dying_explosion": "foundry-explosion",
    "circuit_wire_max_distance": 9,
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
            "x": 156,
            "y": 150,
            "shift": 
            [
              0.46875,
              -1.546875
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 186,
            "y": 174,
            "shift": 
            [
              0.46875,
              -1.546875
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
            "x": 180,
            "y": 180,
            "shift": 
            [
              0.46875,
              -1.578125
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 138,
            "y": 132,
            "shift": 
            [
              0.46875,
              -1.578125
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
            "x": 144,
            "y": 138,
            "shift": 
            [
              0.46875,
              -1.578125
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
            "x": 144,
            "y": 138,
            "shift": 
            [
              0.46875,
              -1.578125
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            0.59375,
            -1.359375
          ],
          "red_green_led_light_offset": 
          [
            0.625,
            -1.453125
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              0.71875,
              -1.671875
            ],
            "green": 
            [
              0.78125,
              -1.484375
            ]
          },
          "shadow": 
          {
            "red": 
            [
              4.1875,
              1.125
            ],
            "green": 
            [
              4.0625,
              1.1875
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
            "x": 156,
            "y": 150,
            "shift": 
            [
              0.46875,
              -1.546875
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 186,
            "y": 174,
            "shift": 
            [
              0.46875,
              -1.546875
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
            "x": 180,
            "y": 180,
            "shift": 
            [
              0.46875,
              -1.578125
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 138,
            "y": 132,
            "shift": 
            [
              0.46875,
              -1.578125
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
            "x": 144,
            "y": 138,
            "shift": 
            [
              0.46875,
              -1.578125
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
            "x": 144,
            "y": 138,
            "shift": 
            [
              0.46875,
              -1.578125
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            0.59375,
            -1.359375
          ],
          "red_green_led_light_offset": 
          [
            0.625,
            -1.453125
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              0.71875,
              -1.671875
            ],
            "green": 
            [
              0.78125,
              -1.484375
            ]
          },
          "shadow": 
          {
            "red": 
            [
              4.1875,
              1.125
            ],
            "green": 
            [
              4.0625,
              1.1875
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
            "x": 156,
            "y": 150,
            "shift": 
            [
              0.46875,
              -1.546875
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 186,
            "y": 174,
            "shift": 
            [
              0.46875,
              -1.546875
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
            "x": 180,
            "y": 180,
            "shift": 
            [
              0.46875,
              -1.578125
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 138,
            "y": 132,
            "shift": 
            [
              0.46875,
              -1.578125
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
            "x": 144,
            "y": 138,
            "shift": 
            [
              0.46875,
              -1.578125
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
            "x": 144,
            "y": 138,
            "shift": 
            [
              0.46875,
              -1.578125
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            0.59375,
            -1.359375
          ],
          "red_green_led_light_offset": 
          [
            0.625,
            -1.453125
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              0.71875,
              -1.671875
            ],
            "green": 
            [
              0.78125,
              -1.484375
            ]
          },
          "shadow": 
          {
            "red": 
            [
              4.1875,
              1.125
            ],
            "green": 
            [
              4.0625,
              1.1875
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
            "x": 156,
            "y": 150,
            "shift": 
            [
              0.46875,
              -1.546875
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 186,
            "y": 174,
            "shift": 
            [
              0.46875,
              -1.546875
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
            "x": 180,
            "y": 180,
            "shift": 
            [
              0.46875,
              -1.578125
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 138,
            "y": 132,
            "shift": 
            [
              0.46875,
              -1.578125
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
            "x": 144,
            "y": 138,
            "shift": 
            [
              0.46875,
              -1.578125
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
            "x": 144,
            "y": 138,
            "shift": 
            [
              0.46875,
              -1.578125
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            0.59375,
            -1.359375
          ],
          "red_green_led_light_offset": 
          [
            0.625,
            -1.453125
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              0.71875,
              -1.671875
            ],
            "green": 
            [
              0.78125,
              -1.484375
            ]
          },
          "shadow": 
          {
            "red": 
            [
              4.1875,
              1.125
            ],
            "green": 
            [
              4.0625,
              1.1875
            ]
          }
        }
      }
    ],
    "collision_box": 
    [
      
      [
        -2.20000000000000017763568394002504646778106689453125,
        -2.20000000000000017763568394002504646778106689453125
      ],
      
      [
        2.20000000000000017763568394002504646778106689453125,
        2.20000000000000017763568394002504646778106689453125
      ]
    ],
    "selection_box": 
    [
      
      [
        -2.5,
        -2.5
      ],
      
      [
        2.5,
        2.5
      ]
    ],
    "heating_energy": "300kW",
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
    "drawing_box_vertical_extension": 1.3000000000000000444089209850062616169452667236328125,
    "effect_receiver": 
    {
      "base_effect": 
      {
        "productivity": 0.5
      }
    },
    "module_slots": 4,
    "icon_draw_specification": 
    {
      "scale": 2,
      "shift": 
      [
        0,
        -0.3
      ]
    },
    "icons_positioning": 
    [
      
      {
        "inventory_index": 4,
        "shift": 
        [
          0,
          1.25
        ]
      }
    ],
    "allowed_effects": 
    [
      "consumption",
      "speed",
      "productivity",
      "pollution",
      "quality"
    ],
    "crafting_categories": 
    [
      "metallurgy",
      "pressing",
      "crafting-with-fluid-or-metallurgy",
      "metallurgy-or-assembling"
    ],
    "crafting_speed": 4,
    "energy_source": 
    {
      "type": "electric",
      "usage_priority": "secondary-input",
      "emissions_per_minute": 
      {
        "pollution": 6
      }
    },
    "energy_usage": "2500kW",
    "perceived_performance": 
    {
      "minimum": 0.25,
      "performance_to_activity_rate": 2,
      "maximum": 20
    },
    "graphics_set": 
    {
      "animation": 
      {
        "layers": 
        [
          
          {
            "animation_speed": 0.1600000000000000088817841970012523233890533447265625,
            "frame_count": 128,
            "scale": 0.5,
            "width": 376,
            "height": 398,
            "shift": 
            [
              0,
              -0.1875
            ],
            "line_length": 8,
            "filenames": 
            [
              "__space-age__/graphics/entity/foundry/foundry-main-1.png",
              "__space-age__/graphics/entity/foundry/foundry-main-2.png"
            ],
            "lines_per_file": 8
          },
          
          {
            "animation_speed": 0.1600000000000000088817841970012523233890533447265625,
            "frame_count": 128,
            "draw_as_shadow": true,
            "scale": 0.5,
            "width": 514,
            "height": 214,
            "shift": 
            [
              1.484375,
              0.90625
            ],
            "line_length": 6,
            "filenames": 
            [
              "__space-age__/graphics/entity/foundry/foundry-shadow-1.png",
              "__space-age__/graphics/entity/foundry/foundry-shadow-2.png"
            ],
            "lines_per_file": 11
          }
        ]
      },
      "working_visualisations": 
      [
        
        {
          "always_draw": true,
          "name": "output-pipe",
          "enabled_by_name": true,
          "north_animation": 
          {
            "repeat_count": 128,
            "scale": 0.5,
            "width": 176,
            "height": 50,
            "shift": 
            [
              0.03125,
              -2.421875
            ],
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/foundry/foundry-pipe-connections-north.png"
          },
          "north_secondary_draw_order": -10,
          "east_animation": 
          {
            "repeat_count": 128,
            "scale": 0.5,
            "width": 18,
            "height": 190,
            "shift": 
            [
              2.375,
              0.046875
            ],
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/foundry/foundry-pipe-connections-east.png"
          },
          "south_animation": 
          {
            "repeat_count": 128,
            "scale": 0.5,
            "width": 188,
            "height": 68,
            "shift": 
            [
              0.015625,
              2.328125
            ],
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/foundry/foundry-pipe-connections-south.png"
          },
          "west_animation": 
          {
            "animation_speed": 0.1600000000000000088817841970012523233890533447265625,
            "frame_count": 128,
            "scale": 0.5,
            "width": 44,
            "height": 190,
            "shift": 
            [
              -2.171875,
              0.046875
            ],
            "line_length": 32,
            "filename": "__space-age__/graphics/entity/foundry/foundry-pipe-connections-west.png"
          }
        },
        
        {
          "always_draw": true,
          "name": "input-pipe",
          "enabled_by_name": true,
          "north_animation": 
          {
            "repeat_count": 128,
            "scale": 0.5,
            "width": 188,
            "height": 68,
            "shift": 
            [
              0.015625,
              2.328125
            ],
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/foundry/foundry-pipe-connections-south.png"
          },
          "east_animation": 
          {
            "animation_speed": 0.1600000000000000088817841970012523233890533447265625,
            "frame_count": 128,
            "scale": 0.5,
            "width": 44,
            "height": 190,
            "shift": 
            [
              -2.171875,
              0.046875
            ],
            "line_length": 32,
            "filename": "__space-age__/graphics/entity/foundry/foundry-pipe-connections-west.png"
          },
          "south_animation": 
          {
            "repeat_count": 128,
            "scale": 0.5,
            "width": 176,
            "height": 50,
            "shift": 
            [
              0.03125,
              -2.421875
            ],
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/foundry/foundry-pipe-connections-north.png"
          },
          "south_secondary_draw_order": -10,
          "west_animation": 
          {
            "repeat_count": 128,
            "scale": 0.5,
            "width": 18,
            "height": 190,
            "shift": 
            [
              2.375,
              0.046875
            ],
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/foundry/foundry-pipe-connections-east.png"
          }
        },
        
        {
          "fadeout": true,
          "animation": 
          {
            "animation_speed": 0.1600000000000000088817841970012523233890533447265625,
            "frame_count": 128,
            "scale": 0.5,
            "width": 314,
            "height": 290,
            "shift": 
            [
              0.78125,
              -0.296875
            ],
            "line_length": 8,
            "filenames": 
            [
              "__space-age__/graphics/entity/foundry/foundry-working-1.png",
              "__space-age__/graphics/entity/foundry/foundry-working-2.png"
            ],
            "lines_per_file": 8
          }
        },
        
        {
          "effect": "flicker",
          "fadeout": true,
          "animation": 
          {
            "draw_as_glow": true,
            "animation_speed": 0.1600000000000000088817841970012523233890533447265625,
            "frame_count": 128,
            "blend_mode": "additive",
            "scale": 0.5,
            "width": 442,
            "height": 356,
            "shift": 
            [
              0.953125,
              -0.234375
            ],
            "line_length": 8,
            "filenames": 
            [
              "__space-age__/graphics/entity/foundry/foundry-lights-1.png",
              "__space-age__/graphics/entity/foundry/foundry-lights-2.png"
            ],
            "lines_per_file": 8
          }
        },
        
        {
          "animation": 
          {
            "draw_as_glow": true,
            "repeat_count": 128,
            "blend_mode": "additive",
            "scale": 0.5,
            "width": 122,
            "height": 142,
            "shift": 
            [
              0.828125,
              -1.328125
            ],
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/foundry/foundry-status-lamp.png"
          }
        },
        
        {
          "fadeout": true,
          "constant_speed": true,
          "render_layer": "wires",
          "animation": 
          {
            "filename": "__base__/graphics/entity/chemical-plant/chemical-plant-smoke-outer.png",
            "frame_count": 47,
            "line_length": 16,
            "width": 90,
            "height": 188,
            "animation_speed": 0.5,
            "shift": 
            [
              1.625,
              -4.09375
            ],
            "tint": 
            [
              0.4,
              0.4,
              0.4,
              1
            ],
            "scale": 0.5
          }
        }
      ],
      "frozen_patch": 
      {
        "scale": 0.5,
        "width": 376,
        "height": 398,
        "shift": 
        [
          0,
          -0.1875
        ],
        "line_length": 1,
        "filename": "__space-age__/graphics/entity/foundry/foundry-frozen.png"
      },
      "reset_animation_when_frozen": true
    },
    "open_sound": 
    {
      "filename": "__base__/sound/open-close/metal-large-open.ogg",
      "volume": 0.8
    },
    "close_sound": 
    {
      "filename": "__base__/sound/open-close/metal-large-close.ogg",
      "volume": 0.7
    },
    "working_sound": 
    {
      "sound": 
      {
        "filename": "__space-age__/sound/entity/foundry/foundry.ogg",
        "volume": 0.5
      },
      "fade_in_ticks": 4,
      "fade_out_ticks": 20,
      "sound_accents": 
      [
        
        {
          "sound": 
          {
            "filename": "__space-age__/sound/entity/foundry/foundry-pipe-out.ogg",
            "volume": 0.9
          },
          "frame": 2,
          "audible_distance_modifier": 0.4
        },
        
        {
          "sound": 
          {
            "filename": "__space-age__/sound/entity/foundry/foundry-slide-close.ogg",
            "volume": 0.65
          },
          "frame": 18,
          "audible_distance_modifier": 0.3
        },
        
        {
          "sound": 
          {
            "filename": "__space-age__/sound/entity/foundry/foundry-clamp.ogg",
            "volume": 0.45
          },
          "frame": 39,
          "audible_distance_modifier": 0.3
        },
        
        {
          "sound": 
          {
            "filename": "__space-age__/sound/entity/foundry/foundry-slide-stop.ogg",
            "volume": 0.7
          },
          "frame": 43,
          "audible_distance_modifier": 0.4
        },
        
        {
          "sound": 
          {
            "variations": 
            [
              
              {
                "filename": "__space-age__/sound/entity/foundry/foundry-fire-whoosh-1.ogg",
                "volume": 0.8
              },
              
              {
                "filename": "__space-age__/sound/entity/foundry/foundry-fire-whoosh-2.ogg",
                "volume": 0.8
              },
              
              {
                "filename": "__space-age__/sound/entity/foundry/foundry-fire-whoosh-3.ogg",
                "volume": 0.8
              }
            ]
          },
          "frame": 64,
          "audible_distance_modifier": 0.3
        },
        
        {
          "sound": 
          {
            "filename": "__space-age__/sound/entity/foundry/foundry-metal-clunk.ogg",
            "volume": 0.65
          },
          "frame": 64,
          "audible_distance_modifier": 0.4
        },
        
        {
          "sound": 
          {
            "filename": "__space-age__/sound/entity/foundry/foundry-slide-open.ogg",
            "volume": 0.65
          },
          "frame": 74,
          "audible_distance_modifier": 0.3
        },
        
        {
          "sound": 
          {
            "filename": "__space-age__/sound/entity/foundry/foundry-pipe-in.ogg",
            "volume": 0.75
          },
          "frame": 106,
          "audible_distance_modifier": 0.4
        },
        
        {
          "sound": 
          {
            "filename": "__space-age__/sound/entity/foundry/foundry-smoke-puff.ogg",
            "volume": 0.8
          },
          "frame": 106,
          "audible_distance_modifier": 0.3
        },
        
        {
          "sound": 
          {
            "variations": 
            [
              
              {
                "filename": "__space-age__/sound/entity/foundry/foundry-pour-1.ogg",
                "volume": 0.7
              },
              
              {
                "filename": "__space-age__/sound/entity/foundry/foundry-pour-2.ogg",
                "volume": 0.7
              }
            ]
          },
          "frame": 110
        },
        
        {
          "sound": 
          {
            "filename": "__space-age__/sound/entity/foundry/foundry-rocks.ogg",
            "volume": 0.65
          },
          "frame": 120,
          "audible_distance_modifier": 0.3
        },
        
        {
          "sound": 
          {
            "filename": "__space-age__/sound/entity/foundry/foundry-blade.ogg",
            "volume": 0.7
          },
          "frame": 126
        }
      ],
      "audible_distance_modifier": 0.6,
      "max_sounds_per_type": 2
    },
    "fluid_boxes": 
    [
      
      {
        "production_type": "input",
        "pipe_picture": 
        {
          "filename": "__core__/graphics/empty.png",
          "priority": "extra-high",
          "width": 1,
          "height": 1
        },
        "pipe_picture_frozen": 
        {
          "north": 
          {
            "scale": 0.5,
            "shift": 
            [
              -0.96875,
              0.578125
            ],
            "width": 176,
            "height": 50,
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/foundry/foundry-pipe-connections-north-frozen.png"
          },
          "east": 
          {
            "scale": 0.5,
            "shift": 
            [
              -0.625,
              -0.953125
            ],
            "width": 18,
            "height": 190,
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/foundry/foundry-pipe-connections-east-frozen.png"
          },
          "south": 
          {
            "scale": 0.5,
            "shift": 
            [
              1.015625,
              -0.671875
            ],
            "width": 188,
            "height": 68,
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/foundry/foundry-pipe-connections-south-frozen.png"
          },
          "west": 
          {
            "scale": 0.5,
            "shift": 
            [
              0.828125,
              1.046875
            ],
            "width": 44,
            "height": 190,
            "line_length": 32,
            "filename": "__space-age__/graphics/entity/foundry/foundry-pipe-connections-west-frozen.png"
          }
        },
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
        "always_draw_covers": false,
        "enable_working_visualisations": 
        [
          "input-pipe"
        ],
        "volume": 1000,
        "pipe_connections": 
        [
          
          {
            "flow_direction": "input",
            "direction": 8,
            "position": 
            [
              -1,
              2
            ]
          }
        ]
      },
      
      {
        "production_type": "input",
        "pipe_picture": 
        {
          "filename": "__core__/graphics/empty.png",
          "priority": "extra-high",
          "width": 1,
          "height": 1
        },
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
        "always_draw_covers": false,
        "enable_working_visualisations": 
        [
          "input-pipe"
        ],
        "volume": 1000,
        "pipe_connections": 
        [
          
          {
            "flow_direction": "input",
            "direction": 8,
            "position": 
            [
              1,
              2
            ]
          }
        ]
      },
      
      {
        "production_type": "output",
        "pipe_picture": 
        {
          "filename": "__core__/graphics/empty.png",
          "priority": "extra-high",
          "width": 1,
          "height": 1
        },
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
        "always_draw_covers": false,
        "enable_working_visualisations": 
        [
          "output-pipe"
        ],
        "volume": 100,
        "pipe_connections": 
        [
          
          {
            "flow_direction": "output",
            "direction": 0,
            "position": 
            [
              -1,
              -2
            ]
          }
        ]
      },
      
      {
        "production_type": "output",
        "pipe_picture": 
        {
          "filename": "__core__/graphics/empty.png",
          "priority": "extra-high",
          "width": 1,
          "height": 1
        },
        "pipe_picture_frozen": 
        {
          "north": 
          {
            "scale": 0.5,
            "shift": 
            [
              -0.96875,
              0.578125
            ],
            "width": 176,
            "height": 50,
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/foundry/foundry-pipe-connections-north-frozen.png"
          },
          "east": 
          {
            "scale": 0.5,
            "shift": 
            [
              -0.625,
              -0.953125
            ],
            "width": 18,
            "height": 190,
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/foundry/foundry-pipe-connections-east-frozen.png"
          },
          "south": 
          {
            "scale": 0.5,
            "shift": 
            [
              1.015625,
              -0.671875
            ],
            "width": 188,
            "height": 68,
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/foundry/foundry-pipe-connections-south-frozen.png"
          },
          "west": 
          {
            "scale": 0.5,
            "shift": 
            [
              0.828125,
              1.046875
            ],
            "width": 44,
            "height": 190,
            "line_length": 32,
            "filename": "__space-age__/graphics/entity/foundry/foundry-pipe-connections-west-frozen.png"
          }
        },
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
        "always_draw_covers": false,
        "enable_working_visualisations": 
        [
          "output-pipe"
        ],
        "volume": 100,
        "pipe_connections": 
        [
          
          {
            "flow_direction": "output",
            "direction": 0,
            "position": 
            [
              1,
              -2
            ]
          }
        ]
      }
    ],
    "fluid_boxes_off_when_no_fluid_recipe": true,
    "water_reflection": 
    {
      "pictures": 
      {
        "scale": 5,
        "shift": 
        [
          -0.015625,
          2.203125
        ],
        "width": 38,
        "height": 46,
        "line_length": 1,
        "filename": "__space-age__/graphics/entity/foundry/foundry-reflection.png"
      },
      "rotate": false
    }
  },
  "captive-biter-spawner": 
  {
    "type": "assembling-machine",
    "name": "captive-biter-spawner",
    "icon": "__space-age__/graphics/icons/captive-biter-spawner.png",
    "subgroup": "agriculture",
    "flags": 
    [
      "placeable-neutral",
      "placeable-player",
      "player-creation",
      "not-repairable",
      "not-deconstructable"
    ],
    "collision_box": 
    [
      
      [
        -2.20000000000000017763568394002504646778106689453125,
        -2.20000000000000017763568394002504646778106689453125
      ],
      
      [
        2.20000000000000017763568394002504646778106689453125,
        2.20000000000000017763568394002504646778106689453125
      ]
    ],
    "selection_box": 
    [
      
      [
        -2.5,
        -2.5
      ],
      
      [
        2.5,
        2.5
      ]
    ],
    "create_ghost_on_death": false,
    "max_health": 350,
    "show_recipe_icon": false,
    "impact_category": "organic",
    "production_health_effect": 
    {
      "not_producing": -0.01666666666666666518636930049979127943515777587890625,
      "producing": 0.01666666666666666518636930049979127943515777587890625
    },
    "ignore_output_full": true,
    "alert_icon_shift": 
    [
      0,
      -0.375
    ],
    "icon_draw_specification": 
    {
      "shift": 
      [
        0,
        -0.3
      ]
    },
    "created_effect": 
    {
      "type": "direct",
      "action_delivery": 
      {
        "type": "instant",
        "source_effects": 
        {
          "type": "create-explosion",
          "entity_name": "captive-spawner-explosion-1"
        }
      }
    },
    "dying_explosion": "captive-spawner-explosion-2",
    "dying_trigger_effect": 
    {
      "type": "create-entity",
      "entity_name": "biter-spawner",
      "as_enemy": true,
      "ignore_no_enemies_mode": true,
      "protected": true
    },
    "resistances": 
    [
      
      {
        "type": "fire",
        "percent": 70
      }
    ],
    "surface_conditions": 
    [
      
      {
        "property": "pressure",
        "min": 1000,
        "max": 1000
      }
    ],
    "fast_replaceable_group": "captive-biter-spawner",
    "graphics_set": 
    {
      "animation": 
      {
        "layers": 
        [
          
          {
            "frame_count": 32,
            "scale": 0.5,
            "animation_speed": 0.4,
            "width": 380,
            "height": 338,
            "shift": 
            [
              -0.078125,
              -0.046875
            ],
            "line_length": 8,
            "filename": "__space-age__/graphics/entity/captive-spawner/captive-anim.png"
          },
          
          {
            "frame_count": 32,
            "scale": 0.5,
            "animation_speed": 0.4,
            "draw_as_shadow": true,
            "width": 408,
            "height": 296,
            "shift": 
            [
              0.625,
              0.328125
            ],
            "line_length": 8,
            "filename": "__space-age__/graphics/entity/captive-spawner/captive-shadow.png"
          }
        ]
      },
      "working_visualisations": 
      [
        
        {
          "fadeout": true,
          "animation": 
          {
            "frame_count": 32,
            "scale": 0.5,
            "tint": 
            [
              0.25,
              0.44000000000000003552713678800500929355621337890625,
              0,
              1
            ],
            "animation_speed": 0.4,
            "width": 72,
            "height": 74,
            "shift": 
            [
              -0.875,
              1.78125
            ],
            "line_length": 8,
            "filename": "__space-age__/graphics/entity/captive-spawner/captive-fluids.png"
          }
        }
      ]
    },
    "open_sound": 
    {
      "filename": "__base__/sound/machine-open.ogg",
      "volume": 0.5
    },
    "close_sound": 
    {
      "filename": "__base__/sound/machine-close.ogg",
      "volume": 0.5
    },
    "working_sound": 
    {
      "sound": 
      {
        "filename": "__base__/sound/creatures/spawner.ogg",
        "volume": 0.6
      },
      "sound_accents": 
      [
        
        {
          "sound": 
          {
            "variations": 
            [
              
              {
                "filename": "__space-age__/sound/entity/spawner/spawner-respirator-push-1.ogg",
                "volume": 0.3
              },
              
              {
                "filename": "__space-age__/sound/entity/spawner/spawner-respirator-push-2.ogg",
                "volume": 0.3
              },
              
              {
                "filename": "__space-age__/sound/entity/spawner/spawner-respirator-push-3.ogg",
                "volume": 0.3
              }
            ]
          },
          "frame": 1,
          "audible_distance_modifier": 0.6
        },
        
        {
          "sound": 
          {
            "variations": 
            [
              
              {
                "filename": "__space-age__/sound/entity/spawner/spawner-respirator-pull-1.ogg",
                "volume": 0.3
              },
              
              {
                "filename": "__space-age__/sound/entity/spawner/spawner-respirator-pull-2.ogg",
                "volume": 0.3
              },
              
              {
                "filename": "__space-age__/sound/entity/spawner/spawner-respirator-pull-3.ogg",
                "volume": 0.3
              }
            ]
          },
          "frame": 17,
          "audible_distance_modifier": 0.6
        }
      ]
    },
    "crafting_categories": 
    [
      "captive-spawner-process"
    ],
    "fixed_recipe": "biter-egg",
    "crafting_speed": 1,
    "energy_source": 
    {
      "type": "burner",
      "fuel_categories": 
      [
        "food"
      ],
      "effectivity": 1,
      "fuel_inventory_size": 1,
      "emissions_per_minute": 
      {
        "pollution": -1
      },
      "burner_usage": "food",
      "light_flicker": 
      {
        "minimum_intensity": 0,
        "maximum_intensity": 0,
        "derivation_change_frequency": 0,
        "derivation_change_deviation": 0,
        "border_fix_speed": 0,
        "minimum_light_size": 0,
        "light_intensity_to_size_coefficient": 0,
        "color": 
        [
          0,
          0,
          0,
          1
        ]
      }
    },
    "energy_usage": "100kW",
    "module_slots": 0,
    "allowed_effects": 
    {},
    "enable_logistic_control_behavior": false
  },
  "electromagnetic-plant": 
  {
    "type": "assembling-machine",
    "name": "electromagnetic-plant",
    "icon": "__space-age__/graphics/icons/electromagnetic-plant.png",
    "flags": 
    [
      "placeable-neutral",
      "placeable-player",
      "player-creation"
    ],
    "minable": 
    {
      "mining_time": 0.1,
      "result": "electromagnetic-plant"
    },
    "fast_replaceable_group": "electromagnetic-plant",
    "max_health": 350,
    "corpse": "electromagnetic-plant-remnants",
    "dying_explosion": "electromagnetic-plant-explosion",
    "icon_draw_specification": 
    {
      "shift": 
      [
        0,
        -0.25
      ]
    },
    "circuit_wire_max_distance": 9,
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
            "x": 364,
            "y": 0,
            "shift": 
            [
              -0.84375,
              1.6875
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 434,
            "y": 0,
            "shift": 
            [
              -0.84375,
              1.6875
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
            "x": 420,
            "y": 0,
            "shift": 
            [
              -0.84375,
              1.65625
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 322,
            "y": 0,
            "shift": 
            [
              -0.84375,
              1.65625
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
            "x": 336,
            "y": 0,
            "shift": 
            [
              -0.84375,
              1.65625
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
            "x": 336,
            "y": 0,
            "shift": 
            [
              -0.84375,
              1.65625
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            -1,
            1.4375
          ],
          "red_green_led_light_offset": 
          [
            -0.90625,
            1.5
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              -1.0625,
              1.6875
            ],
            "green": 
            [
              -1.25,
              1.625
            ]
          },
          "shadow": 
          {
            "red": 
            [
              -0.6875,
              1.84375
            ],
            "green": 
            [
              -0.875,
              1.71875
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
            "x": 364,
            "y": 0,
            "shift": 
            [
              -0.84375,
              1.6875
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 434,
            "y": 0,
            "shift": 
            [
              -0.84375,
              1.6875
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
            "x": 420,
            "y": 0,
            "shift": 
            [
              -0.84375,
              1.65625
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 322,
            "y": 0,
            "shift": 
            [
              -0.84375,
              1.65625
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
            "x": 336,
            "y": 0,
            "shift": 
            [
              -0.84375,
              1.65625
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
            "x": 336,
            "y": 0,
            "shift": 
            [
              -0.84375,
              1.65625
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            -1,
            1.4375
          ],
          "red_green_led_light_offset": 
          [
            -0.90625,
            1.5
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              -1.0625,
              1.6875
            ],
            "green": 
            [
              -1.25,
              1.625
            ]
          },
          "shadow": 
          {
            "red": 
            [
              -0.6875,
              1.84375
            ],
            "green": 
            [
              -0.875,
              1.71875
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
            "x": 364,
            "y": 0,
            "shift": 
            [
              -0.84375,
              1.6875
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 434,
            "y": 0,
            "shift": 
            [
              -0.84375,
              1.6875
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
            "x": 420,
            "y": 0,
            "shift": 
            [
              -0.84375,
              1.65625
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 322,
            "y": 0,
            "shift": 
            [
              -0.84375,
              1.65625
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
            "x": 336,
            "y": 0,
            "shift": 
            [
              -0.84375,
              1.65625
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
            "x": 336,
            "y": 0,
            "shift": 
            [
              -0.84375,
              1.65625
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            -1,
            1.4375
          ],
          "red_green_led_light_offset": 
          [
            -0.90625,
            1.5
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              -1.0625,
              1.6875
            ],
            "green": 
            [
              -1.25,
              1.625
            ]
          },
          "shadow": 
          {
            "red": 
            [
              -0.6875,
              1.84375
            ],
            "green": 
            [
              -0.875,
              1.71875
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
            "x": 364,
            "y": 0,
            "shift": 
            [
              -0.84375,
              1.6875
            ]
          },
          "wire_pins": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04c-wire-sequence.png",
            "priority": "low",
            "width": 62,
            "height": 58,
            "scale": 0.5,
            "x": 434,
            "y": 0,
            "shift": 
            [
              -0.84375,
              1.6875
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
            "x": 420,
            "y": 0,
            "shift": 
            [
              -0.84375,
              1.65625
            ]
          },
          "led_blue_off": 
          {
            "filename": "__base__/graphics/entity/circuit-connector/ccm-universal-04f-blue-LED-off-sequence.png",
            "priority": "low",
            "width": 46,
            "height": 44,
            "scale": 0.5,
            "x": 322,
            "y": 0,
            "shift": 
            [
              -0.84375,
              1.65625
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
            "x": 336,
            "y": 0,
            "shift": 
            [
              -0.84375,
              1.65625
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
            "x": 336,
            "y": 0,
            "shift": 
            [
              -0.84375,
              1.65625
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            -1,
            1.4375
          ],
          "red_green_led_light_offset": 
          [
            -0.90625,
            1.5
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              -1.0625,
              1.6875
            ],
            "green": 
            [
              -1.25,
              1.625
            ]
          },
          "shadow": 
          {
            "red": 
            [
              -0.6875,
              1.84375
            ],
            "green": 
            [
              -0.875,
              1.71875
            ]
          }
        }
      }
    ],
    "heating_energy": "100kW",
    "effect_receiver": 
    {
      "base_effect": 
      {
        "productivity": 0.5
      }
    },
    "resistances": 
    [
      
      {
        "type": "fire",
        "percent": 70
      }
    ],
    "collision_box": 
    [
      
      [
        -1.7,
        -1.7
      ],
      
      [
        1.7,
        1.7
      ]
    ],
    "selection_box": 
    [
      
      [
        -2,
        -2
      ],
      
      [
        2,
        2
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
    "fluid_boxes": 
    [
      
      {
        "production_type": "input",
        "pipe_picture": 
        {
          "north": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "width": 60,
                "height": 74,
                "shift": 
                [
                  -0.03125,
                  0.703125
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-north.png"
              },
              
              {
                "scale": 0.5,
                "draw_as_shadow": true,
                "width": 70,
                "height": 68,
                "shift": 
                [
                  0.25,
                  1.265625
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-shadow-north.png"
              }
            ]
          },
          "east": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "width": 32,
                "height": 56,
                "shift": 
                [
                  -0.640625,
                  0.015625
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-east.png"
              },
              
              {
                "scale": 0.5,
                "draw_as_shadow": true,
                "width": 68,
                "height": 32,
                "shift": 
                [
                  -0.34375,
                  1.28125
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-shadow-east.png"
              }
            ]
          },
          "south": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "width": 54,
                "height": 58,
                "shift": 
                [
                  0.015625,
                  -0.5625
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-south.png"
              },
              
              {
                "scale": 0.5,
                "draw_as_shadow": true,
                "width": 66,
                "height": 38,
                "shift": 
                [
                  0.1875,
                  -0.484375
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-shadow-south.png"
              }
            ]
          },
          "west": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "width": 38,
                "height": 62,
                "shift": 
                [
                  0.703125,
                  0.0625
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-west.png"
              },
              
              {
                "scale": 0.5,
                "draw_as_shadow": true,
                "width": 68,
                "height": 36,
                "shift": 
                [
                  1.03125,
                  0.265625
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-shadow-west.png"
              }
            ]
          }
        },
        "pipe_picture_frozen": 
        {
          "north": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "width": 60,
                "height": 74,
                "shift": 
                [
                  -0.03125,
                  0.703125
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-north-frozen.png"
              }
            ]
          },
          "east": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "width": 32,
                "height": 56,
                "shift": 
                [
                  -0.640625,
                  0.015625
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-east-frozen.png"
              }
            ]
          },
          "south": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "width": 54,
                "height": 58,
                "shift": 
                [
                  0.015625,
                  -0.5625
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-south-frozen.png"
              }
            ]
          },
          "west": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "width": 38,
                "height": 62,
                "shift": 
                [
                  0.703125,
                  0.0625
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-west-frozen.png"
              }
            ]
          }
        },
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
        "volume": 200,
        "secondary_draw_orders": 
        {
          "north": -1
        },
        "pipe_connections": 
        [
          
          {
            "flow_direction": "input-output",
            "direction": 12,
            "position": 
            [
              -1.5,
              0.5
            ]
          }
        ]
      },
      
      {
        "production_type": "input",
        "pipe_picture": 
        {
          "north": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "width": 60,
                "height": 74,
                "shift": 
                [
                  -0.03125,
                  0.703125
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-north.png"
              },
              
              {
                "scale": 0.5,
                "draw_as_shadow": true,
                "width": 70,
                "height": 68,
                "shift": 
                [
                  0.25,
                  1.265625
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-shadow-north.png"
              }
            ]
          },
          "east": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "width": 32,
                "height": 56,
                "shift": 
                [
                  -0.640625,
                  0.015625
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-east.png"
              },
              
              {
                "scale": 0.5,
                "draw_as_shadow": true,
                "width": 68,
                "height": 32,
                "shift": 
                [
                  -0.34375,
                  1.28125
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-shadow-east.png"
              }
            ]
          },
          "south": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "width": 54,
                "height": 58,
                "shift": 
                [
                  0.015625,
                  -0.5625
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-south.png"
              },
              
              {
                "scale": 0.5,
                "draw_as_shadow": true,
                "width": 66,
                "height": 38,
                "shift": 
                [
                  0.1875,
                  -0.484375
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-shadow-south.png"
              }
            ]
          },
          "west": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "width": 38,
                "height": 62,
                "shift": 
                [
                  0.703125,
                  0.0625
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-west.png"
              },
              
              {
                "scale": 0.5,
                "draw_as_shadow": true,
                "width": 68,
                "height": 36,
                "shift": 
                [
                  1.03125,
                  0.265625
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-shadow-west.png"
              }
            ]
          }
        },
        "pipe_picture_frozen": 
        {
          "north": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "width": 60,
                "height": 74,
                "shift": 
                [
                  -0.03125,
                  0.703125
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-north-frozen.png"
              }
            ]
          },
          "east": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "width": 32,
                "height": 56,
                "shift": 
                [
                  -0.640625,
                  0.015625
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-east-frozen.png"
              }
            ]
          },
          "south": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "width": 54,
                "height": 58,
                "shift": 
                [
                  0.015625,
                  -0.5625
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-south-frozen.png"
              }
            ]
          },
          "west": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "width": 38,
                "height": 62,
                "shift": 
                [
                  0.703125,
                  0.0625
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-west-frozen.png"
              }
            ]
          }
        },
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
        "volume": 200,
        "secondary_draw_orders": 
        {
          "north": -1
        },
        "pipe_connections": 
        [
          
          {
            "flow_direction": "input-output",
            "direction": 4,
            "position": 
            [
              1.5,
              -0.5
            ]
          }
        ]
      },
      
      {
        "production_type": "output",
        "pipe_picture": 
        {
          "north": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "width": 60,
                "height": 74,
                "shift": 
                [
                  -0.03125,
                  0.703125
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-north.png"
              },
              
              {
                "scale": 0.5,
                "draw_as_shadow": true,
                "width": 70,
                "height": 68,
                "shift": 
                [
                  0.25,
                  1.265625
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-shadow-north.png"
              }
            ]
          },
          "east": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "width": 32,
                "height": 56,
                "shift": 
                [
                  -0.640625,
                  0.015625
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-east.png"
              },
              
              {
                "scale": 0.5,
                "draw_as_shadow": true,
                "width": 68,
                "height": 32,
                "shift": 
                [
                  -0.34375,
                  1.28125
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-shadow-east.png"
              }
            ]
          },
          "south": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "width": 54,
                "height": 58,
                "shift": 
                [
                  0.015625,
                  -0.5625
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-south.png"
              },
              
              {
                "scale": 0.5,
                "draw_as_shadow": true,
                "width": 66,
                "height": 38,
                "shift": 
                [
                  0.1875,
                  -0.484375
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-shadow-south.png"
              }
            ]
          },
          "west": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "width": 38,
                "height": 62,
                "shift": 
                [
                  0.703125,
                  0.0625
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-west.png"
              },
              
              {
                "scale": 0.5,
                "draw_as_shadow": true,
                "width": 68,
                "height": 36,
                "shift": 
                [
                  1.03125,
                  0.265625
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-shadow-west.png"
              }
            ]
          }
        },
        "pipe_picture_frozen": 
        {
          "north": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "width": 60,
                "height": 74,
                "shift": 
                [
                  -0.03125,
                  0.703125
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-north-frozen.png"
              }
            ]
          },
          "east": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "width": 32,
                "height": 56,
                "shift": 
                [
                  -0.640625,
                  0.015625
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-east-frozen.png"
              }
            ]
          },
          "south": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "width": 54,
                "height": 58,
                "shift": 
                [
                  0.015625,
                  -0.5625
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-south-frozen.png"
              }
            ]
          },
          "west": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "width": 38,
                "height": 62,
                "shift": 
                [
                  0.703125,
                  0.0625
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-west-frozen.png"
              }
            ]
          }
        },
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
        "volume": 100,
        "secondary_draw_orders": 
        {
          "north": -1
        },
        "pipe_connections": 
        [
          
          {
            "flow_direction": "input-output",
            "direction": 8,
            "position": 
            [
              0.5,
              1.5
            ]
          }
        ]
      },
      
      {
        "production_type": "output",
        "pipe_picture": 
        {
          "north": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "width": 60,
                "height": 74,
                "shift": 
                [
                  -0.03125,
                  0.703125
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-north.png"
              },
              
              {
                "scale": 0.5,
                "draw_as_shadow": true,
                "width": 70,
                "height": 68,
                "shift": 
                [
                  0.25,
                  1.265625
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-shadow-north.png"
              }
            ]
          },
          "east": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "width": 32,
                "height": 56,
                "shift": 
                [
                  -0.640625,
                  0.015625
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-east.png"
              },
              
              {
                "scale": 0.5,
                "draw_as_shadow": true,
                "width": 68,
                "height": 32,
                "shift": 
                [
                  -0.34375,
                  1.28125
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-shadow-east.png"
              }
            ]
          },
          "south": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "width": 54,
                "height": 58,
                "shift": 
                [
                  0.015625,
                  -0.5625
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-south.png"
              },
              
              {
                "scale": 0.5,
                "draw_as_shadow": true,
                "width": 66,
                "height": 38,
                "shift": 
                [
                  0.1875,
                  -0.484375
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-shadow-south.png"
              }
            ]
          },
          "west": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "width": 38,
                "height": 62,
                "shift": 
                [
                  0.703125,
                  0.0625
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-west.png"
              },
              
              {
                "scale": 0.5,
                "draw_as_shadow": true,
                "width": 68,
                "height": 36,
                "shift": 
                [
                  1.03125,
                  0.265625
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-shadow-west.png"
              }
            ]
          }
        },
        "pipe_picture_frozen": 
        {
          "north": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "width": 60,
                "height": 74,
                "shift": 
                [
                  -0.03125,
                  0.703125
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-north-frozen.png"
              }
            ]
          },
          "east": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "width": 32,
                "height": 56,
                "shift": 
                [
                  -0.640625,
                  0.015625
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-east-frozen.png"
              }
            ]
          },
          "south": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "width": 54,
                "height": 58,
                "shift": 
                [
                  0.015625,
                  -0.5625
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-south-frozen.png"
              }
            ]
          },
          "west": 
          {
            "layers": 
            [
              
              {
                "scale": 0.5,
                "width": 38,
                "height": 62,
                "shift": 
                [
                  0.703125,
                  0.0625
                ],
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/pipe-connections/electromagnetic-plant-pipe-west-frozen.png"
              }
            ]
          }
        },
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
        "volume": 100,
        "secondary_draw_orders": 
        {
          "north": -1
        },
        "pipe_connections": 
        [
          
          {
            "flow_direction": "input-output",
            "direction": 0,
            "position": 
            [
              -0.5,
              -1.5
            ]
          }
        ]
      }
    ],
    "fluid_boxes_off_when_no_fluid_recipe": true,
    "forced_symmetry": "horizontal",
    "perceived_performance": 
    {
      "minimum": 0.25,
      "performance_to_activity_rate": 2,
      "maximum": 10
    },
    "graphics_set": 
    {
      "animation_progress": 0.25,
      "always_draw_idle_animation": true,
      "states": 
      [
        
        {
          "name": "idle",
          "duration": 1,
          "next_active": "warm-up",
          "next_inactive": "idle"
        },
        
        {
          "name": "warm-up",
          "duration": 32,
          "next_active": "working-1",
          "next_inactive": "working-1"
        },
        
        {
          "name": "working-1",
          "duration": 111,
          "next_active": "working-1-continue",
          "next_inactive": "cool-down"
        },
        
        {
          "name": "working-1-continue",
          "duration": 17,
          "next_active": "working-2",
          "next_inactive": "working-2"
        },
        
        {
          "name": "working-2",
          "duration": 111,
          "next_active": "working-2-continue",
          "next_inactive": "cool-down"
        },
        
        {
          "name": "working-2-continue",
          "duration": 17,
          "next_active": "working-3",
          "next_inactive": "working-3"
        },
        
        {
          "name": "working-3",
          "duration": 111,
          "next_active": "cool-down",
          "next_inactive": "cool-down"
        },
        
        {
          "name": "cool-down",
          "duration": 32,
          "next_active": "warm-up",
          "next_inactive": "idle"
        }
      ],
      "idle_animation": 
      {
        "layers": 
        [
          
          {
            "animation_speed": 0.4,
            "frame_count": 1,
            "scale": 0.5,
            "width": 238,
            "height": 252,
            "shift": 
            [
              0.078125,
              0.1875
            ],
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/electromagnetic-plant/electromagnetic-plant-base.png"
          },
          
          {
            "animation_speed": 0.4,
            "draw_as_shadow": true,
            "frame_count": 1,
            "scale": 0.5,
            "width": 262,
            "height": 242,
            "shift": 
            [
              0.171875,
              0.203125
            ],
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/electromagnetic-plant/electromagnetic-plant-base-shadow.png"
          }
        ]
      },
      "working_visualisations": 
      [
        
        {
          "always_draw": true,
          "draw_in_states": 
          [
            "idle"
          ],
          "animation": 
          {
            "layers": 
            [
              
              {
                "animation_speed": 0.4,
                "frame_count": 1,
                "scale": 0.5,
                "width": 218,
                "height": 302,
                "shift": 
                [
                  0.046875,
                  -0.375
                ],
                "line_length": 8,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/electromagnetic-plant-main-warm-up.png"
              },
              
              {
                "draw_as_shadow": true,
                "animation_speed": 0.4,
                "frame_count": 1,
                "scale": 0.5,
                "width": 362,
                "height": 158,
                "shift": 
                [
                  1.375,
                  0.8125
                ],
                "line_length": 6,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/electromagnetic-plant-shadow-warm-up.png"
              }
            ]
          }
        },
        
        {
          "always_draw": true,
          "draw_in_states": 
          [
            "warm-up"
          ],
          "animation": 
          {
            "layers": 
            [
              
              {
                "animation_speed": 0.4,
                "frame_count": 32,
                "scale": 0.5,
                "width": 218,
                "height": 302,
                "shift": 
                [
                  0.046875,
                  -0.375
                ],
                "line_length": 8,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/electromagnetic-plant-main-warm-up.png"
              },
              
              {
                "draw_as_shadow": true,
                "animation_speed": 0.4,
                "frame_count": 32,
                "scale": 0.5,
                "width": 362,
                "height": 158,
                "shift": 
                [
                  1.375,
                  0.8125
                ],
                "line_length": 6,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/electromagnetic-plant-shadow-warm-up.png"
              }
            ]
          },
          "name": "warm-up"
        },
        
        {
          "always_draw": true,
          "draw_in_states": 
          [
            "working-1",
            "working-2",
            "working-3"
          ],
          "animation": 
          {
            "layers": 
            [
              
              {
                "animation_speed": 0.4,
                "frame_count": 111,
                "scale": 0.5,
                "width": 226,
                "height": 312,
                "shift": 
                [
                  0,
                  -0.453125
                ],
                "line_length": 8,
                "filenames": 
                [
                  "__space-age__/graphics/entity/electromagnetic-plant/electromagnetic-plant-main-rotate-1.png",
                  "__space-age__/graphics/entity/electromagnetic-plant/electromagnetic-plant-main-rotate-2.png"
                ],
                "lines_per_file": 7
              },
              
              {
                "draw_as_shadow": true,
                "animation_speed": 0.4,
                "frame_count": 111,
                "scale": 0.5,
                "width": 402,
                "height": 162,
                "shift": 
                [
                  1.6875,
                  0.84375
                ],
                "line_length": 6,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/electromagnetic-plant-shadow-rotate.png"
              }
            ]
          },
          "name": "rotation"
        },
        
        {
          "always_draw": true,
          "draw_in_states": 
          [
            "working-1-continue",
            "working-2-continue"
          ],
          "animation": 
          {
            "layers": 
            [
              
              {
                "animation_speed": 0.4,
                "frame_count": 17,
                "scale": 0.5,
                "width": 220,
                "height": 302,
                "shift": 
                [
                  0.0625,
                  -0.375
                ],
                "line_length": 8,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/electromagnetic-plant-main-rotate-continue.png"
              },
              
              {
                "draw_as_shadow": true,
                "animation_speed": 0.4,
                "frame_count": 17,
                "scale": 0.5,
                "width": 372,
                "height": 156,
                "shift": 
                [
                  1.453125,
                  0.796875
                ],
                "line_length": 6,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/electromagnetic-plant-shadow-rotate-continue.png"
              }
            ]
          },
          "name": "rotation-continue"
        },
        
        {
          "always_draw": true,
          "draw_in_states": 
          [
            "cool-down"
          ],
          "animation": 
          {
            "layers": 
            [
              
              {
                "animation_speed": 0.4,
                "frame_count": 32,
                "scale": 0.5,
                "width": 220,
                "height": 294,
                "shift": 
                [
                  0.0625,
                  -0.3125
                ],
                "line_length": 8,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/electromagnetic-plant-main-cool-down.png"
              },
              
              {
                "draw_as_shadow": true,
                "animation_speed": 0.4,
                "frame_count": 32,
                "scale": 0.5,
                "width": 374,
                "height": 158,
                "shift": 
                [
                  1.46875,
                  0.8125
                ],
                "line_length": 6,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/electromagnetic-plant-shadow-cool-down.png"
              }
            ]
          },
          "name": "cool-down"
        },
        
        {
          "draw_in_states": 
          [
            "warm-up"
          ],
          "animation": 
          {
            "layers": 
            [
              
              {
                "draw_as_glow": true,
                "blend_mode": "additive",
                "animation_speed": 0.4,
                "frame_count": 32,
                "scale": 0.5,
                "width": 204,
                "height": 300,
                "shift": 
                [
                  0.125,
                  -0.375
                ],
                "line_length": 8,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/electromagnetic-plant-lights-warm-up.png"
              }
            ]
          },
          "name": "warm-up-lights"
        },
        
        {
          "draw_in_states": 
          [
            "working-1",
            "working-2",
            "working-3"
          ],
          "animation": 
          {
            "layers": 
            [
              
              {
                "draw_as_glow": true,
                "blend_mode": "additive",
                "animation_speed": 0.4,
                "frame_count": 111,
                "scale": 0.5,
                "width": 204,
                "height": 300,
                "shift": 
                [
                  0.125,
                  -0.375
                ],
                "line_length": 8,
                "filenames": 
                [
                  "__space-age__/graphics/entity/electromagnetic-plant/electromagnetic-plant-lights-rotate-1.png",
                  "__space-age__/graphics/entity/electromagnetic-plant/electromagnetic-plant-lights-rotate-2.png"
                ],
                "lines_per_file": 7
              }
            ]
          },
          "name": "rotation-lights"
        },
        
        {
          "draw_in_states": 
          [
            "working-1-continue",
            "working-2-continue"
          ],
          "animation": 
          {
            "layers": 
            [
              
              {
                "draw_as_glow": true,
                "blend_mode": "additive",
                "animation_speed": 0.4,
                "frame_count": 17,
                "scale": 0.5,
                "width": 204,
                "height": 300,
                "shift": 
                [
                  0.125,
                  -0.375
                ],
                "line_length": 8,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/electromagnetic-plant-lights-rotate-continue.png"
              }
            ]
          },
          "name": "rotation-continue-lights"
        },
        
        {
          "draw_in_states": 
          [
            "cool-down"
          ],
          "animation": 
          {
            "layers": 
            [
              
              {
                "draw_as_glow": true,
                "blend_mode": "additive",
                "animation_speed": 0.4,
                "frame_count": 32,
                "scale": 0.5,
                "width": 204,
                "height": 294,
                "shift": 
                [
                  0.125,
                  -0.3125
                ],
                "line_length": 8,
                "filename": "__space-age__/graphics/entity/electromagnetic-plant/electromagnetic-plant-lights-cool-down.png"
              }
            ]
          },
          "name": "cool-down-lights"
        },
        
        {
          "effect": "flicker",
          "fadeout": true,
          "light": 
          {
            "intensity": 0.35,
            "size": 20,
            "color": 
            {
              "r": 0.2,
              "g": 0.25,
              "b": 1
            }
          }
        }
      ],
      "frozen_patch": 
      {
        "scale": 0.5,
        "width": 238,
        "height": 316,
        "shift": 
        [
          0.078125,
          -0.3125
        ],
        "line_length": 1,
        "filename": "__space-age__/graphics/entity/electromagnetic-plant/electromagnetic-plant-frozen.png"
      },
      "reset_animation_when_frozen": true
    },
    "open_sound": 
    {
      "filename": "__base__/sound/machine-open.ogg",
      "volume": 0.5
    },
    "close_sound": 
    {
      "filename": "__base__/sound/machine-close.ogg",
      "volume": 0.5
    },
    "working_sound": 
    {
      "main_sounds": 
      [
        
        {
          "sound": 
          {
            "filename": "__space-age__/sound/entity/electromagnetic-plant/electromagnetic-plant-warmup.ogg",
            "volume": 0.6
          },
          "play_for_working_visualisations": 
          [
            "warm-up"
          ]
        },
        
        {
          "sound": 
          {
            "filename": "__space-age__/sound/entity/electromagnetic-plant/electromagnetic-plant-loop.ogg",
            "volume": 0.6
          },
          "play_for_working_visualisations": 
          [
            "rotation",
            "rotation-continue"
          ],
          "fade_in_ticks": 4,
          "fade_out_ticks": 20
        },
        
        {
          "sound": 
          {
            "filename": "__space-age__/sound/entity/electromagnetic-plant/electromagnetic-plant-cooldown.ogg",
            "volume": 0.8
          },
          "play_for_working_visualisations": 
          [
            "cool-down"
          ]
        }
      ],
      "sound_accents": 
      [
        
        {
          "sound": 
          {
            "filename": "__space-age__/sound/entity/electromagnetic-plant/emp-arm-retract.ogg",
            "volume": 0.35
          },
          "play_for_working_visualisation": "warm-up",
          "frame": 11,
          "audible_distance_modifier": 0.4
        },
        
        {
          "sound": 
          [
            
            {
              "filename": "__space-age__/sound/entity/electromagnetic-plant/emp-coil-1.ogg",
              "volume": 0.6
            },
            
            {
              "filename": "__space-age__/sound/entity/electromagnetic-plant/emp-coil-2.ogg",
              "volume": 0.6
            }
          ],
          "play_for_working_visualisation": "rotation",
          "frame": 1,
          "audible_distance_modifier": 0.4
        },
        
        {
          "sound": 
          [
            
            {
              "filename": "__space-age__/sound/entity/electromagnetic-plant/emp-coil-1.ogg",
              "volume": 0.6
            },
            
            {
              "filename": "__space-age__/sound/entity/electromagnetic-plant/emp-coil-2.ogg",
              "volume": 0.6
            }
          ],
          "play_for_working_visualisation": "rotation",
          "frame": 40,
          "audible_distance_modifier": 0.4
        },
        
        {
          "sound": 
          [
            
            {
              "filename": "__space-age__/sound/entity/electromagnetic-plant/emp-coil-1.ogg",
              "volume": 0.4
            },
            
            {
              "filename": "__space-age__/sound/entity/electromagnetic-plant/emp-coil-2.ogg",
              "volume": 0.4
            }
          ],
          "play_for_working_visualisation": "rotation",
          "frame": 102,
          "audible_distance_modifier": 0.4
        },
        
        {
          "sound": 
          [
            
            {
              "filename": "__space-age__/sound/entity/electromagnetic-plant/emp-riser-stop-1.ogg",
              "volume": 0.6
            },
            
            {
              "filename": "__space-age__/sound/entity/electromagnetic-plant/emp-riser-stop-2.ogg",
              "volume": 0.6
            }
          ],
          "play_for_working_visualisation": "rotation",
          "frame": 93,
          "audible_distance_modifier": 0.4
        },
        
        {
          "sound": 
          {
            "filename": "__space-age__/sound/entity/electromagnetic-plant/emp-bridge-close.ogg",
            "volume": 0.4
          },
          "play_for_working_visualisation": "rotation",
          "frame": 33,
          "audible_distance_modifier": 0.4
        },
        
        {
          "sound": 
          {
            "filename": "__space-age__/sound/entity/electromagnetic-plant/emp-bridge-open.ogg",
            "volume": 0.4
          },
          "play_for_working_visualisation": "rotation",
          "frame": 50,
          "audible_distance_modifier": 0.4
        },
        
        {
          "sound": 
          [
            
            {
              "filename": "__space-age__/sound/entity/electromagnetic-plant/emp-electric-1.ogg",
              "volume": 0.4
            },
            
            {
              "filename": "__space-age__/sound/entity/electromagnetic-plant/emp-electric-2.ogg",
              "volume": 0.4
            },
            
            {
              "filename": "__space-age__/sound/entity/electromagnetic-plant/emp-electric-3.ogg",
              "volume": 0.4
            },
            
            {
              "filename": "__space-age__/sound/entity/electromagnetic-plant/emp-electric-4.ogg",
              "volume": 0.4
            },
            
            {
              "filename": "__space-age__/sound/entity/electromagnetic-plant/emp-electric-5.ogg",
              "volume": 0.4
            }
          ],
          "play_for_working_visualisation": "rotation",
          "frame": 35,
          "audible_distance_modifier": 0.4
        },
        
        {
          "sound": 
          [
            
            {
              "filename": "__space-age__/sound/entity/electromagnetic-plant/emp-electric-1.ogg",
              "volume": 0.5
            },
            
            {
              "filename": "__space-age__/sound/entity/electromagnetic-plant/emp-electric-2.ogg",
              "volume": 0.5
            },
            
            {
              "filename": "__space-age__/sound/entity/electromagnetic-plant/emp-electric-3.ogg",
              "volume": 0.5
            },
            
            {
              "filename": "__space-age__/sound/entity/electromagnetic-plant/emp-electric-4.ogg",
              "volume": 0.5
            },
            
            {
              "filename": "__space-age__/sound/entity/electromagnetic-plant/emp-electric-5.ogg",
              "volume": 0.5
            }
          ],
          "play_for_working_visualisation": "rotation",
          "frame": 58,
          "audible_distance_modifier": 0.5
        },
        
        {
          "sound": 
          [
            
            {
              "filename": "__space-age__/sound/entity/electromagnetic-plant/emp-slide-stop-1.ogg",
              "volume": 0.4
            },
            
            {
              "filename": "__space-age__/sound/entity/electromagnetic-plant/emp-slide-stop-2.ogg",
              "volume": 0.4
            }
          ],
          "play_for_working_visualisation": "rotation",
          "frame": 102,
          "audible_distance_modifier": 0.4
        },
        
        {
          "sound": 
          [
            
            {
              "filename": "__space-age__/sound/entity/electromagnetic-plant/emp-riser-stop-1.ogg",
              "volume": 0.4
            },
            
            {
              "filename": "__space-age__/sound/entity/electromagnetic-plant/emp-riser-stop-2.ogg",
              "volume": 0.4
            }
          ],
          "play_for_working_visualisation": "rotation-continue",
          "frame": 14,
          "audible_distance_modifier": 0.4
        },
        
        {
          "sound": 
          [
            
            {
              "filename": "__space-age__/sound/entity/electromagnetic-plant/emp-slide-stop-1.ogg",
              "volume": 0.4
            },
            
            {
              "filename": "__space-age__/sound/entity/electromagnetic-plant/emp-slide-stop-2.ogg",
              "volume": 0.4
            }
          ],
          "play_for_working_visualisation": "rotation-continue",
          "frame": 3,
          "audible_distance_modifier": 0.4
        },
        
        {
          "sound": 
          [
            
            {
              "filename": "__space-age__/sound/entity/electromagnetic-plant/emp-riser-stop-1.ogg",
              "volume": 0.2
            },
            
            {
              "filename": "__space-age__/sound/entity/electromagnetic-plant/emp-riser-stop-2.ogg",
              "volume": 0.2
            }
          ],
          "play_for_working_visualisation": "cool-down",
          "frame": 31,
          "audible_distance_modifier": 0.4
        },
        
        {
          "sound": 
          {
            "filename": "__space-age__/sound/entity/electromagnetic-plant/emp-arm-stop.ogg",
            "volume": 0.45
          },
          "play_for_working_visualisation": "cool-down",
          "frame": 12,
          "audible_distance_modifier": 0.4
        },
        
        {
          "sound": 
          {
            "filename": "__space-age__/sound/entity/electromagnetic-plant/emp-arm-extend.ogg",
            "volume": 0.5
          },
          "play_for_working_visualisation": "cool-down",
          "frame": 1,
          "audible_distance_modifier": 0.4
        },
        
        {
          "sound": 
          {
            "filename": "__space-age__/sound/entity/electromagnetic-plant/emp-arm-weld.ogg",
            "volume": 0.9
          },
          "play_for_working_visualisation": "cool-down-lights",
          "frame": 12,
          "audible_distance_modifier": 0.4
        }
      ],
      "audible_distance_modifier": 0.6,
      "max_sounds_per_type": 2
    },
    "crafting_speed": 2,
    "crafting_categories": 
    [
      "electromagnetics",
      "electronics",
      "electronics-with-fluid",
      "electronics-or-assembling"
    ],
    "energy_source": 
    {
      "type": "electric",
      "usage_priority": "secondary-input",
      "emissions_per_minute": 
      {
        "pollution": 4
      }
    },
    "energy_usage": "2000kW",
    "module_slots": 5,
    "icons_positioning": 
    [
      
      {
        "inventory_index": 4,
        "shift": 
        [
          0,
          1
        ]
      }
    ],
    "allowed_effects": 
    [
      "consumption",
      "speed",
      "productivity",
      "pollution",
      "quality"
    ],
    "water_reflection": 
    {
      "pictures": 
      {
        "filename": "__space-age__/graphics/entity/electromagnetic-plant/electromagnetic-plant-water-reflection.png",
        "width": 26,
        "height": 34,
        "shift": 
        [
          0.15625,
          2.25
        ],
        "priority": "extra-high",
        "variation_count": 1,
        "scale": 5
      },
      "rotate": false,
      "orientation_to_variation": false
    }
  },
  "cryogenic-plant": 
  {
    "type": "assembling-machine",
    "name": "cryogenic-plant",
    "icon": "__space-age__/graphics/icons/cryogenic-plant.png",
    "flags": 
    [
      "placeable-neutral",
      "player-creation"
    ],
    "minable": 
    {
      "mining_time": 0.2,
      "result": "cryogenic-plant"
    },
    "fast_replaceable_group": "cryogenic-plant",
    "max_health": 350,
    "corpse": "cryogenic-plant-remnants",
    "dying_explosion": "cryogenic-plant-explosion",
    "circuit_wire_max_distance": 9,
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
            "y": 200,
            "shift": 
            [
              0.625,
              0.1875
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
            "y": 232,
            "shift": 
            [
              0.625,
              0.1875
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
            "y": 240,
            "shift": 
            [
              0.625,
              0.15625
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
            "y": 176,
            "shift": 
            [
              0.625,
              0.15625
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
            "y": 184,
            "shift": 
            [
              0.625,
              0.15625
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
            "y": 184,
            "shift": 
            [
              0.625,
              0.15625
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            0.4375,
            0.09375
          ],
          "red_green_led_light_offset": 
          [
            0.59375,
            0.0625
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              0.6875,
              0.28125
            ],
            "green": 
            [
              0.5,
              0.34375
            ]
          },
          "shadow": 
          {
            "red": 
            [
              2.25,
              1.625
            ],
            "green": 
            [
              2.03125,
              1.6875
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
            "y": 200,
            "shift": 
            [
              0.625,
              0.1875
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
            "y": 232,
            "shift": 
            [
              0.625,
              0.1875
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
            "y": 240,
            "shift": 
            [
              0.625,
              0.15625
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
            "y": 176,
            "shift": 
            [
              0.625,
              0.15625
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
            "y": 184,
            "shift": 
            [
              0.625,
              0.15625
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
            "y": 184,
            "shift": 
            [
              0.625,
              0.15625
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            0.4375,
            0.09375
          ],
          "red_green_led_light_offset": 
          [
            0.59375,
            0.0625
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              0.6875,
              0.28125
            ],
            "green": 
            [
              0.5,
              0.34375
            ]
          },
          "shadow": 
          {
            "red": 
            [
              2.25,
              1.625
            ],
            "green": 
            [
              2.03125,
              1.6875
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
            "y": 200,
            "shift": 
            [
              0.625,
              0.1875
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
            "y": 232,
            "shift": 
            [
              0.625,
              0.1875
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
            "y": 240,
            "shift": 
            [
              0.625,
              0.15625
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
            "y": 176,
            "shift": 
            [
              0.625,
              0.15625
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
            "y": 184,
            "shift": 
            [
              0.625,
              0.15625
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
            "y": 184,
            "shift": 
            [
              0.625,
              0.15625
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            0.4375,
            0.09375
          ],
          "red_green_led_light_offset": 
          [
            0.59375,
            0.0625
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              0.6875,
              0.28125
            ],
            "green": 
            [
              0.5,
              0.34375
            ]
          },
          "shadow": 
          {
            "red": 
            [
              2.25,
              1.625
            ],
            "green": 
            [
              2.03125,
              1.6875
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
            "y": 200,
            "shift": 
            [
              0.625,
              0.1875
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
            "y": 232,
            "shift": 
            [
              0.625,
              0.1875
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
            "y": 240,
            "shift": 
            [
              0.625,
              0.15625
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
            "y": 176,
            "shift": 
            [
              0.625,
              0.15625
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
            "y": 184,
            "shift": 
            [
              0.625,
              0.15625
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
            "y": 184,
            "shift": 
            [
              0.625,
              0.15625
            ]
          },
          "led_light": 
          {
            "intensity": 0,
            "size": 0.9
          },
          "blue_led_light_offset": 
          [
            0.4375,
            0.09375
          ],
          "red_green_led_light_offset": 
          [
            0.59375,
            0.0625
          ]
        },
        "points": 
        {
          "wire": 
          {
            "red": 
            [
              0.6875,
              0.28125
            ],
            "green": 
            [
              0.5,
              0.34375
            ]
          },
          "shadow": 
          {
            "red": 
            [
              2.25,
              1.625
            ],
            "green": 
            [
              2.03125,
              1.6875
            ]
          }
        }
      }
    ],
    "collision_box": 
    [
      
      [
        -2.29999999999999982236431605997495353221893310546875,
        -2.29999999999999982236431605997495353221893310546875
      ],
      
      [
        2.29999999999999982236431605997495353221893310546875,
        2.29999999999999982236431605997495353221893310546875
      ]
    ],
    "heating_energy": "100kW",
    "selection_box": 
    [
      
      [
        -2.5,
        -2.5
      ],
      
      [
        2.5,
        2.5
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
    "drawing_box_vertical_extension": 0.4,
    "module_slots": 8,
    "icons_positioning": 
    [
      
      {
        "inventory_index": 4,
        "shift": 
        [
          0,
          0.95
        ],
        "max_icons_per_row": 4
      }
    ],
    "icon_draw_specification": 
    {
      "scale": 2,
      "shift": 
      [
        0,
        -0.3
      ]
    },
    "allowed_effects": 
    [
      "consumption",
      "speed",
      "productivity",
      "pollution",
      "quality"
    ],
    "crafting_categories": 
    [
      "cryogenics",
      "chemistry-or-cryogenics",
      "cryogenics-or-assembling"
    ],
    "crafting_speed": 2,
    "energy_source": 
    {
      "type": "electric",
      "usage_priority": "secondary-input",
      "emissions_per_minute": 
      {
        "pollution": 6
      }
    },
    "energy_usage": "1500kW",
    "graphics_set": 
    {
      "animation": 
      {
        "layers": 
        [
          
          {
            "animation_speed": 0.5,
            "frame_count": 1,
            "repeat_count": 192,
            "scale": 0.5,
            "width": 380,
            "height": 396,
            "shift": 
            [
              0.09375,
              -0.109375
            ],
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-main.png"
          },
          
          {
            "draw_as_shadow": true,
            "animation_speed": 0.5,
            "frame_count": 1,
            "repeat_count": 192,
            "scale": 0.5,
            "width": 462,
            "height": 310,
            "shift": 
            [
              1.109375,
              0.21875
            ],
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-shadow.png"
          },
          
          {
            "animation_speed": 0.5,
            "frame_count": 64,
            "repeat_count": 3,
            "scale": 0.5,
            "width": 122,
            "height": 94,
            "shift": 
            [
              -0.25,
              -1.359375
            ],
            "line_length": 8,
            "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-anim1-base.png"
          },
          
          {
            "animation_speed": 0.5,
            "frame_count": 24,
            "repeat_count": 8,
            "scale": 0.5,
            "width": 106,
            "height": 186,
            "shift": 
            [
              -1.125,
              0.96875
            ],
            "line_length": 8,
            "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-anim2-base.png"
          },
          
          {
            "animation_speed": 0.5,
            "frame_count": 48,
            "repeat_count": 4,
            "scale": 0.5,
            "width": 72,
            "height": 118,
            "shift": 
            [
              1.109375,
              0.09375
            ],
            "line_length": 8,
            "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-anim4-base.png"
          },
          
          {
            "frame_sequence": 
            [
              1,
              1,
              1,
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              20,
              21,
              22,
              23,
              24,
              25,
              26,
              27,
              28,
              29,
              30,
              31,
              32,
              33,
              34,
              35,
              36,
              37,
              38,
              39,
              40,
              41,
              42,
              43,
              44,
              45,
              46,
              47,
              48,
              49,
              50,
              51,
              52,
              53,
              54,
              55,
              56,
              57,
              58,
              59,
              60,
              61,
              62,
              63,
              64,
              65,
              66,
              67,
              68,
              69,
              70,
              71,
              72,
              73,
              74,
              75,
              76,
              77,
              78,
              79,
              80,
              81,
              82,
              83,
              84,
              85,
              86,
              87,
              88,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              20,
              21,
              22,
              23,
              24,
              25,
              26,
              27,
              28,
              29,
              30,
              31,
              32,
              33,
              34,
              35,
              36,
              37,
              38,
              39,
              40,
              41,
              42,
              43,
              44,
              45,
              46,
              47,
              48,
              49,
              50,
              51,
              52,
              53,
              54,
              55,
              56,
              57,
              58,
              59,
              60,
              61,
              62,
              63,
              64,
              65,
              66,
              67,
              68,
              69,
              70,
              71,
              72,
              73,
              74,
              75,
              76,
              77,
              78,
              79,
              80,
              81,
              82,
              83,
              84,
              85,
              86,
              87,
              88
            ],
            "animation_speed": 0.5,
            "frame_count": 192,
            "repeat_count": 1,
            "scale": 0.5,
            "width": 68,
            "height": 132,
            "shift": 
            [
              -1.703125,
              -0.703125
            ],
            "line_length": 8,
            "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-anim5-base.png"
          },
          
          {
            "frame_sequence": 
            [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              20,
              21,
              22,
              23,
              24,
              25,
              26,
              27,
              28,
              29,
              30,
              31,
              32,
              33,
              34,
              35,
              36,
              37,
              38,
              39,
              40,
              41,
              42,
              43,
              44,
              45,
              46,
              47,
              48,
              49,
              50,
              51,
              52,
              53,
              54,
              55,
              56,
              57,
              58,
              59,
              60,
              61,
              62,
              63,
              64,
              65,
              66,
              67,
              68,
              69,
              70,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              70,
              69,
              68,
              67,
              65,
              64,
              63,
              62,
              61,
              60,
              59,
              58,
              57,
              56,
              55,
              54,
              53,
              52,
              51,
              50,
              49,
              48,
              47,
              46,
              45,
              44,
              43,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1
            ],
            "animation_speed": 0.5,
            "frame_count": 192,
            "repeat_count": 1,
            "scale": 0.5,
            "width": 74,
            "height": 102,
            "shift": 
            [
              0.953125,
              1.53125
            ],
            "line_length": 8,
            "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-anim6-base.png"
          }
        ]
      },
      "working_visualisations": 
      [
        
        {
          "fadeout": true,
          "animation": 
          {
            "animation_speed": 0.5,
            "frame_count": 64,
            "repeat_count": 3,
            "scale": 0.5,
            "width": 106,
            "height": 64,
            "shift": 
            [
              -0.21875,
              -1.1875
            ],
            "line_length": 8,
            "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-anim1-working.png"
          }
        },
        
        {
          "fadeout": true,
          "apply_recipe_tint": "primary",
          "animation": 
          {
            "animation_speed": 0.5,
            "frame_count": 64,
            "repeat_count": 3,
            "scale": 0.5,
            "width": 104,
            "height": 62,
            "shift": 
            [
              -0.21875,
              -1.1875
            ],
            "line_length": 8,
            "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-anim1-mask1.png"
          }
        },
        
        {
          "fadeout": true,
          "apply_recipe_tint": "secondary",
          "animation": 
          {
            "animation_speed": 0.5,
            "frame_count": 64,
            "repeat_count": 3,
            "scale": 0.5,
            "width": 104,
            "height": 60,
            "shift": 
            [
              -0.21875,
              -1.171875
            ],
            "line_length": 8,
            "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-anim1-mask2.png"
          }
        },
        
        {
          "always_draw": true,
          "apply_recipe_tint": "primary",
          "animation": 
          {
            "animation_speed": 0.5,
            "frame_count": 24,
            "repeat_count": 8,
            "scale": 0.5,
            "width": 56,
            "height": 58,
            "shift": 
            [
              -1.421875,
              1
            ],
            "line_length": 8,
            "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-anim2-mask1.png"
          }
        },
        
        {
          "always_draw": true,
          "apply_recipe_tint": "secondary",
          "animation": 
          {
            "animation_speed": 0.5,
            "frame_count": 24,
            "repeat_count": 8,
            "scale": 0.5,
            "width": 54,
            "height": 58,
            "shift": 
            [
              -1.40625,
              1
            ],
            "line_length": 8,
            "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-anim2-mask2.png"
          }
        },
        
        {
          "fadeout": true,
          "animation": 
          {
            "animation_speed": 0.5,
            "frame_count": 96,
            "repeat_count": 2,
            "scale": 0.5,
            "width": 20,
            "height": 106,
            "shift": 
            [
              2.046875,
              -0.265625
            ],
            "line_length": 16,
            "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-anim3-working.png"
          }
        },
        
        {
          "fadeout": true,
          "apply_recipe_tint": "primary",
          "animation": 
          {
            "animation_speed": 0.5,
            "frame_count": 96,
            "repeat_count": 2,
            "scale": 0.5,
            "width": 18,
            "height": 104,
            "shift": 
            [
              2.03125,
              -0.265625
            ],
            "line_length": 16,
            "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-anim3-mask1.png"
          }
        },
        
        {
          "fadeout": true,
          "apply_recipe_tint": "secondary",
          "animation": 
          {
            "animation_speed": 0.5,
            "frame_count": 96,
            "repeat_count": 2,
            "scale": 0.5,
            "width": 18,
            "height": 104,
            "shift": 
            [
              2.046875,
              -0.265625
            ],
            "line_length": 16,
            "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-anim3-mask2.png"
          }
        },
        
        {
          "always_draw": true,
          "apply_recipe_tint": "primary",
          "animation": 
          {
            "animation_speed": 0.5,
            "frame_count": 48,
            "repeat_count": 4,
            "scale": 0.5,
            "width": 28,
            "height": 26,
            "shift": 
            [
              1.21875,
              -0.125
            ],
            "line_length": 8,
            "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-anim4-mask1.png"
          }
        },
        
        {
          "always_draw": true,
          "apply_recipe_tint": "secondary",
          "animation": 
          {
            "animation_speed": 0.5,
            "frame_count": 48,
            "repeat_count": 4,
            "scale": 0.5,
            "width": 30,
            "height": 28,
            "shift": 
            [
              1.234375,
              -0.125
            ],
            "line_length": 8,
            "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-anim4-mask2.png"
          }
        },
        
        {
          "always_draw": true,
          "apply_recipe_tint": "primary",
          "animation": 
          {
            "frame_sequence": 
            [
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              20,
              21,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22,
              22
            ],
            "animation_speed": 0.5,
            "frame_count": 192,
            "repeat_count": 1,
            "scale": 0.5,
            "width": 36,
            "height": 34,
            "shift": 
            [
              0.90625,
              1.546875
            ],
            "line_length": 8,
            "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-anim6-mask1.png"
          }
        },
        
        {
          "effect": "flicker",
          "fadeout": true,
          "animation": 
          {
            "blend_mode": "additive",
            "draw_as_glow": true,
            "frame_sequence": 
            [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              20,
              21,
              22,
              23,
              24,
              25,
              26,
              27,
              28,
              29,
              30,
              31,
              32,
              33,
              34,
              35,
              36,
              37,
              38,
              39,
              40,
              41,
              42,
              43,
              44,
              45,
              46,
              47,
              48,
              49,
              50,
              51,
              52,
              53,
              54,
              55,
              56,
              57,
              58,
              59,
              60,
              61,
              62,
              63,
              64,
              65,
              66,
              67,
              68,
              69,
              70,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              71,
              70,
              69,
              68,
              67,
              65,
              64,
              63,
              62,
              61,
              60,
              59,
              58,
              57,
              56,
              55,
              54,
              53,
              52,
              51,
              50,
              49,
              48,
              47,
              46,
              45,
              44,
              43,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              1
            ],
            "animation_speed": 0.5,
            "frame_count": 192,
            "repeat_count": 1,
            "scale": 0.5,
            "width": 74,
            "height": 102,
            "shift": 
            [
              0.953125,
              1.53125
            ],
            "line_length": 8,
            "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-anim6-working-light.png"
          }
        },
        
        {
          "fadeout": true,
          "constant_speed": true,
          "apply_recipe_tint": "tertiary",
          "animation": 
          {
            "animation_speed": 0.5,
            "frame_count": 64,
            "repeat_count": 3,
            "scale": 0.5,
            "width": 96,
            "height": 140,
            "shift": 
            [
              1.953125,
              -3.390625
            ],
            "line_length": 8,
            "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-smoke-mask-1.png"
          }
        },
        
        {
          "fadeout": true,
          "constant_speed": true,
          "apply_recipe_tint": "quaternary",
          "animation": 
          {
            "animation_speed": 0.5,
            "frame_count": 64,
            "repeat_count": 3,
            "scale": 0.5,
            "width": 94,
            "height": 138,
            "shift": 
            [
              1.9375,
              -3.390625
            ],
            "line_length": 8,
            "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-smoke-mask-2.png"
          }
        },
        
        {
          "always_draw": true,
          "animation": 
          {
            "animation_speed": 0.5,
            "frame_count": 1,
            "repeat_count": 192,
            "scale": 0.5,
            "width": 274,
            "height": 228,
            "shift": 
            [
              0.125,
              -0.234375
            ],
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-glass.png"
          }
        },
        
        {
          "effect": "flicker",
          "fadeout": true,
          "animation": 
          {
            "blend_mode": "additive",
            "draw_as_glow": true,
            "animation_speed": 0.5,
            "frame_count": 64,
            "repeat_count": 3,
            "scale": 0.5,
            "width": 110,
            "height": 162,
            "shift": 
            [
              1.28125,
              -1.59375
            ],
            "line_length": 8,
            "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-working-lights.png"
          }
        },
        
        {
          "animation": 
          {
            "blend_mode": "additive",
            "draw_as_glow": true,
            "animation_speed": 0.5,
            "frame_count": 1,
            "repeat_count": 192,
            "scale": 0.5,
            "width": 60,
            "height": 56,
            "shift": 
            [
              0.78125,
              0.4375
            ],
            "line_length": 1,
            "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-status-lamp.png"
          }
        }
      ],
      "frozen_patch": 
      {
        "scale": 0.5,
        "width": 380,
        "height": 396,
        "shift": 
        [
          0.09375,
          -0.109375
        ],
        "line_length": 1,
        "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-frozen.png"
      },
      "reset_animation_when_frozen": true
    },
    "open_sound": 
    {
      "filename": "__base__/sound/open-close/metal-large-open.ogg",
      "volume": 0.8
    },
    "close_sound": 
    {
      "filename": "__base__/sound/open-close/metal-large-close.ogg",
      "volume": 0.7
    },
    "working_sound": 
    {
      "sound": 
      {
        "filename": "__space-age__/sound/entity/cryogenic-plant/cryogenic-plant.ogg",
        "volume": 0.8
      },
      "fade_in_ticks": 4,
      "fade_out_ticks": 30,
      "sound_accents": 
      [
        
        {
          "sound": 
          {
            "variations": 
            [
              
              {
                "filename": "__space-age__/sound/entity/cryogenic-plant/cp-smoke-mask-puff-1.ogg",
                "volume": 0.35
              },
              
              {
                "filename": "__space-age__/sound/entity/cryogenic-plant/cp-smoke-mask-puff-2.ogg",
                "volume": 0.35
              }
            ]
          },
          "frame": 11,
          "audible_distance_modifier": 0.8
        },
        
        {
          "sound": 
          {
            "variations": 
            [
              
              {
                "filename": "__space-age__/sound/entity/cryogenic-plant/cp-smoke-mask-puff-1.ogg",
                "volume": 0.3
              },
              
              {
                "filename": "__space-age__/sound/entity/cryogenic-plant/cp-smoke-mask-puff-2.ogg",
                "volume": 0.3
              }
            ]
          },
          "frame": 130,
          "audible_distance_modifier": 0.8
        },
        
        {
          "sound": 
          {
            "filename": "__space-age__/sound/entity/cryogenic-plant/cp-anim3-bubbles-rise.ogg",
            "volume": 0.9
          },
          "frame": 14,
          "audible_distance_modifier": 0.3
        },
        
        {
          "sound": 
          {
            "filename": "__space-age__/sound/entity/cryogenic-plant/cp-anim3-bubbles-fall.ogg",
            "volume": 0.7
          },
          "frame": 62,
          "audible_distance_modifier": 0.3
        },
        
        {
          "sound": 
          {
            "filename": "__space-age__/sound/entity/cryogenic-plant/cp-anim3-bubbles-rise.ogg",
            "volume": 0.9
          },
          "frame": 110,
          "audible_distance_modifier": 0.3
        },
        
        {
          "sound": 
          {
            "filename": "__space-age__/sound/entity/cryogenic-plant/cp-anim3-bubbles-fall.ogg",
            "volume": 0.7
          },
          "frame": 158,
          "audible_distance_modifier": 0.3
        },
        
        {
          "sound": 
          {
            "filename": "__space-age__/sound/entity/cryogenic-plant/cp-anim5-gears.ogg",
            "volume": 0.25
          },
          "frame": 51,
          "audible_distance_modifier": 0.4
        },
        
        {
          "sound": 
          {
            "filename": "__space-age__/sound/entity/cryogenic-plant/cp-anim5-gears.ogg",
            "volume": 0.2
          },
          "frame": 151,
          "audible_distance_modifier": 0.4
        },
        
        {
          "sound": 
          {
            "variations": 
            [
              
              {
                "filename": "__space-age__/sound/entity/cryogenic-plant/cp-anim6-open-1.ogg",
                "volume": 0.6
              },
              
              {
                "filename": "__space-age__/sound/entity/cryogenic-plant/cp-anim6-open-2.ogg",
                "volume": 0.6
              }
            ]
          },
          "frame": 3,
          "audible_distance_modifier": 0.4
        },
        
        {
          "sound": 
          {
            "filename": "__space-age__/sound/entity/cryogenic-plant/cp-anim6-close.ogg",
            "volume": 0.7
          },
          "frame": 33,
          "audible_distance_modifier": 0.4
        },
        
        {
          "sound": 
          {
            "filename": "__space-age__/sound/entity/cryogenic-plant/cp-anim6-slide-down.ogg",
            "volume": 0.55
          },
          "frame": 42,
          "audible_distance_modifier": 0.4
        },
        
        {
          "sound": 
          {
            "filename": "__space-age__/sound/entity/cryogenic-plant/cp-anim6-slide-up.ogg",
            "volume": 0.6
          },
          "frame": 126,
          "audible_distance_modifier": 0.4
        },
        
        {
          "sound": 
          {
            "filename": "__space-age__/sound/entity/cryogenic-plant/cp-anim6-slide-stop.ogg",
            "volume": 0.4
          },
          "frame": 146,
          "audible_distance_modifier": 0.4
        }
      ],
      "max_sounds_per_type": 2
    },
    "fluid_boxes": 
    [
      
      {
        "production_type": "input",
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
        "volume": 1000,
        "pipe_connections": 
        [
          
          {
            "flow_direction": "input",
            "direction": 8,
            "position": 
            [
              -2,
              2
            ]
          }
        ]
      },
      
      {
        "production_type": "input",
        "pipe_picture": 
        {
          "north": 
          {
            "layers": 
            [
              
              {
                "priority": "extra-high",
                "scale": 0.5,
                "shift": 
                [
                  0.109375,
                  3
                ],
                "width": 340,
                "height": 360,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-pipe-connections-v.png"
              },
              
              {
                "priority": "extra-high",
                "draw_as_shadow": true,
                "scale": 0.5,
                "shift": 
                [
                  0.171875,
                  3.046875
                ],
                "width": 318,
                "height": 350,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-shadow-v.png"
              }
            ]
          },
          "east": 
          {
            "layers": 
            [
              
              {
                "priority": "extra-high",
                "scale": 0.5,
                "shift": 
                [
                  -3,
                  -0.015625
                ],
                "width": 322,
                "height": 312,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-pipe-connections-h.png"
              },
              
              {
                "priority": "extra-high",
                "draw_as_shadow": true,
                "scale": 0.5,
                "shift": 
                [
                  -2.65625,
                  0.265625
                ],
                "width": 364,
                "height": 296,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-shadow-h.png"
              }
            ]
          },
          "south": 
          {
            "layers": 
            [
              
              {
                "priority": "extra-high",
                "scale": 0.5,
                "shift": 
                [
                  0.109375,
                  -3
                ],
                "width": 340,
                "height": 360,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-pipe-connections-v.png"
              },
              
              {
                "priority": "extra-high",
                "draw_as_shadow": true,
                "scale": 0.5,
                "shift": 
                [
                  0.171875,
                  -2.953125
                ],
                "width": 318,
                "height": 350,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-shadow-v.png"
              }
            ]
          },
          "west": 
          {
            "layers": 
            [
              
              {
                "priority": "extra-high",
                "scale": 0.5,
                "shift": 
                [
                  3,
                  -0.015625
                ],
                "width": 322,
                "height": 312,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-pipe-connections-h.png"
              },
              
              {
                "priority": "extra-high",
                "draw_as_shadow": true,
                "scale": 0.5,
                "shift": 
                [
                  3.34375,
                  0.265625
                ],
                "width": 364,
                "height": 296,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-shadow-h.png"
              }
            ]
          }
        },
        "pipe_picture_frozen": 
        {
          "north": 
          {
            "layers": 
            [
              
              {
                "priority": "extra-high",
                "scale": 0.5,
                "shift": 
                [
                  0.109375,
                  3
                ],
                "width": 340,
                "height": 360,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-pipe-connections-v-frozen.png"
              }
            ]
          },
          "east": 
          {
            "layers": 
            [
              
              {
                "priority": "extra-high",
                "scale": 0.5,
                "shift": 
                [
                  -3,
                  -0.015625
                ],
                "width": 322,
                "height": 312,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-pipe-connections-h-frozen.png"
              }
            ]
          },
          "south": 
          {
            "layers": 
            [
              
              {
                "priority": "extra-high",
                "scale": 0.5,
                "shift": 
                [
                  0.109375,
                  -3
                ],
                "width": 340,
                "height": 360,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-pipe-connections-v-frozen.png"
              }
            ]
          },
          "west": 
          {
            "layers": 
            [
              
              {
                "priority": "extra-high",
                "scale": 0.5,
                "shift": 
                [
                  3,
                  -0.015625
                ],
                "width": 322,
                "height": 312,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-pipe-connections-h-frozen.png"
              }
            ]
          }
        },
        "always_draw_covers": true,
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
        "volume": 1000,
        "pipe_connections": 
        [
          
          {
            "flow_direction": "input",
            "direction": 8,
            "position": 
            [
              0,
              2
            ]
          }
        ]
      },
      
      {
        "production_type": "input",
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
        "volume": 1000,
        "pipe_connections": 
        [
          
          {
            "flow_direction": "input",
            "direction": 8,
            "position": 
            [
              2,
              2
            ]
          }
        ]
      },
      
      {
        "production_type": "output",
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
        "volume": 100,
        "pipe_connections": 
        [
          
          {
            "flow_direction": "output",
            "direction": 0,
            "position": 
            [
              -2,
              -2
            ]
          }
        ]
      },
      
      {
        "production_type": "output",
        "pipe_picture": 
        {
          "north": 
          {
            "layers": 
            [
              
              {
                "priority": "extra-high",
                "scale": 0.5,
                "shift": 
                [
                  0.109375,
                  3
                ],
                "width": 340,
                "height": 360,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-pipe-connections-v.png"
              },
              
              {
                "priority": "extra-high",
                "draw_as_shadow": true,
                "scale": 0.5,
                "shift": 
                [
                  0.171875,
                  3.046875
                ],
                "width": 318,
                "height": 350,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-shadow-v.png"
              }
            ]
          },
          "east": 
          {
            "layers": 
            [
              
              {
                "priority": "extra-high",
                "scale": 0.5,
                "shift": 
                [
                  -3,
                  -0.015625
                ],
                "width": 322,
                "height": 312,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-pipe-connections-h.png"
              },
              
              {
                "priority": "extra-high",
                "draw_as_shadow": true,
                "scale": 0.5,
                "shift": 
                [
                  -2.65625,
                  0.265625
                ],
                "width": 364,
                "height": 296,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-shadow-h.png"
              }
            ]
          },
          "south": 
          {
            "layers": 
            [
              
              {
                "priority": "extra-high",
                "scale": 0.5,
                "shift": 
                [
                  0.109375,
                  -3
                ],
                "width": 340,
                "height": 360,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-pipe-connections-v.png"
              },
              
              {
                "priority": "extra-high",
                "draw_as_shadow": true,
                "scale": 0.5,
                "shift": 
                [
                  0.171875,
                  -2.953125
                ],
                "width": 318,
                "height": 350,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-shadow-v.png"
              }
            ]
          },
          "west": 
          {
            "layers": 
            [
              
              {
                "priority": "extra-high",
                "scale": 0.5,
                "shift": 
                [
                  3,
                  -0.015625
                ],
                "width": 322,
                "height": 312,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-pipe-connections-h.png"
              },
              
              {
                "priority": "extra-high",
                "draw_as_shadow": true,
                "scale": 0.5,
                "shift": 
                [
                  3.34375,
                  0.265625
                ],
                "width": 364,
                "height": 296,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-shadow-h.png"
              }
            ]
          }
        },
        "pipe_picture_frozen": 
        {
          "north": 
          {
            "layers": 
            [
              
              {
                "priority": "extra-high",
                "scale": 0.5,
                "shift": 
                [
                  0.109375,
                  3
                ],
                "width": 340,
                "height": 360,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-pipe-connections-v-frozen.png"
              }
            ]
          },
          "east": 
          {
            "layers": 
            [
              
              {
                "priority": "extra-high",
                "scale": 0.5,
                "shift": 
                [
                  -3,
                  -0.015625
                ],
                "width": 322,
                "height": 312,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-pipe-connections-h-frozen.png"
              }
            ]
          },
          "south": 
          {
            "layers": 
            [
              
              {
                "priority": "extra-high",
                "scale": 0.5,
                "shift": 
                [
                  0.109375,
                  -3
                ],
                "width": 340,
                "height": 360,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-pipe-connections-v-frozen.png"
              }
            ]
          },
          "west": 
          {
            "layers": 
            [
              
              {
                "priority": "extra-high",
                "scale": 0.5,
                "shift": 
                [
                  3,
                  -0.015625
                ],
                "width": 322,
                "height": 312,
                "line_length": 1,
                "filename": "__space-age__/graphics/entity/cryogenic-plant/cryogenic-plant-pipe-connections-h-frozen.png"
              }
            ]
          }
        },
        "always_draw_covers": true,
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
        "volume": 100,
        "pipe_connections": 
        [
          
          {
            "flow_direction": "output",
            "direction": 0,
            "position": 
            [
              0,
              -2
            ]
          }
        ]
      },
      
      {
        "production_type": "output",
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
        "volume": 100,
        "pipe_connections": 
        [
          
          {
            "flow_direction": "output",
            "direction": 0,
            "position": 
            [
              2,
              -2
            ]
          }
        ]
      }
    ],
    "fluid_boxes_off_when_no_fluid_recipe": true,
    "water_reflection": 
    {
      "pictures": 
      {
        "scale": 5,
        "shift": 
        [
          -0.015625,
          2.203125
        ],
        "width": 38,
        "height": 46,
        "line_length": 1,
        "filename": "__space-age__/graphics/entity/foundry/foundry-reflection.png"
      },
      "rotate": false
    },
    "map_generator_bounding_box": 
    [
      
      [
        -2.399999999999999911182158029987476766109466552734375,
        -2.399999999999999911182158029987476766109466552734375
      ],
      
      [
        2.399999999999999911182158029987476766109466552734375,
        2.399999999999999911182158029987476766109466552734375
      ]
    ]
  }
};