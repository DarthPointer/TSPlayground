import { FurnaceNode } from "./FurnacesType";

export const Furnace: Record<string, FurnaceNode> = 
{
  "stone-furnace": 
  {
    "type": "furnace",
    "name": "stone-furnace",
    "icon": "__base__/graphics/icons/stone-furnace.png",
    "flags": 
    [
      "placeable-neutral",
      "placeable-player",
      "player-creation"
    ],
    "minable": 
    {
      "mining_time": 0.2,
      "result": "stone-furnace"
    },
    "fast_replaceable_group": "furnace",
    "next_upgrade": "steel-furnace",
    "max_health": 200,
    "corpse": "stone-furnace-remnants",
    "dying_explosion": "stone-furnace-explosion",
    "repair_sound": 
    [
      
      {
        "filename": "__base__/sound/manual-repair-simple-1.ogg",
        "volume": 0.5
      },
      
      {
        "filename": "__base__/sound/manual-repair-simple-2.ogg",
        "volume": 0.5
      },
      
      {
        "filename": "__base__/sound/manual-repair-simple-3.ogg",
        "volume": 0.5
      },
      
      {
        "filename": "__base__/sound/manual-repair-simple-4.ogg",
        "volume": 0.5
      },
      
      {
        "filename": "__base__/sound/manual-repair-simple-5.ogg",
        "volume": 0.5
      }
    ],
    "mined_sound": 
    {
      "switch_vibration_data": 
      {
        "gain": 0.320000000000000017763568394002504646778106689453125,
        "filename": "__core__/sound/deconstruct-bricks.bnvib"
      },
      "variations": 
      [
        
        {
          "filename": "__base__/sound/deconstruct-bricks.ogg",
          "volume": 0.8
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
    "impact_category": "stone",
    "icon_draw_specification": 
    {
      "scale": 0.660000000000000053290705182007513940334320068359375,
      "shift": 
      [
        0,
        -0.1
      ]
    },
    "working_sound": 
    {
      "sound": 
      {
        "filename": "__base__/sound/furnace.ogg",
        "volume": 0.6,
        "modifiers": 
        [
          
          {
            "type": "main-menu",
            "volume_multiplier": 1.5
          },
          
          {
            "type": "tips-and-tricks",
            "volume_multiplier": 1.399999999999999911182158029987476766109466552734375
          }
        ]
      },
      "fade_in_ticks": 4,
      "fade_out_ticks": 20,
      "audible_distance_modifier": 0.4
    },
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
        -0.7,
        -0.7
      ],
      
      [
        0.7,
        0.7
      ]
    ],
    "selection_box": 
    [
      
      [
        -0.8,
        -1
      ],
      
      [
        0.8,
        1
      ]
    ],
    "damaged_trigger_effect": 
    {
      "type": "create-entity",
      "entity_name": "rock-damaged-explosion",
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
    "crafting_categories": 
    [
      "smelting"
    ],
    "result_inventory_size": 1,
    "energy_usage": "90kW",
    "crafting_speed": 1,
    "source_inventory_size": 1,
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
        "pollution": 2
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
          "deviation": 
          [
            0.1,
            0.1
          ],
          "frequency": 5,
          "position": 
          [
            0,
            -0.8
          ],
          "starting_vertical_speed": 0.08,
          "starting_frame_deviation": 60
        }
      ]
    },
    "graphics_set": 
    {
      "animation": 
      {
        "layers": 
        [
          
          {
            "filename": "__base__/graphics/entity/stone-furnace/stone-furnace.png",
            "priority": "extra-high",
            "width": 151,
            "height": 146,
            "shift": 
            [
              -0.0078125,
              0.1875
            ],
            "scale": 0.5
          },
          
          {
            "filename": "__base__/graphics/entity/stone-furnace/stone-furnace-shadow.png",
            "priority": "extra-high",
            "width": 164,
            "height": 74,
            "draw_as_shadow": true,
            "shift": 
            [
              0.453125,
              0.40625
            ],
            "scale": 0.5
          }
        ]
      },
      "working_visualisations": 
      [
        
        {
          "fadeout": true,
          "effect": "flicker",
          "animation": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/stone-furnace/stone-furnace-fire.png",
                "priority": "extra-high",
                "line_length": 8,
                "width": 41,
                "height": 100,
                "frame_count": 48,
                "draw_as_glow": true,
                "shift": 
                [
                  -0.0234375,
                  0.171875
                ],
                "scale": 0.5
              },
              
              {
                "filename": "__base__/graphics/entity/stone-furnace/stone-furnace-light.png",
                "blend_mode": "additive",
                "width": 106,
                "height": 144,
                "repeat_count": 48,
                "draw_as_glow": true,
                "shift": 
                [
                  0,
                  0.15625
                ],
                "scale": 0.5
              }
            ]
          }
        },
        
        {
          "fadeout": true,
          "effect": "flicker",
          "animation": 
          {
            "filename": "__base__/graphics/entity/stone-furnace/stone-furnace-ground-light.png",
            "blend_mode": "additive",
            "width": 116,
            "height": 110,
            "repeat_count": 48,
            "draw_as_light": true,
            "shift": 
            [
              -0.03125,
              1.375
            ],
            "scale": 0.5
          }
        }
      ],
      "water_reflection": 
      {
        "pictures": 
        {
          "filename": "__base__/graphics/entity/stone-furnace/stone-furnace-reflection.png",
          "priority": "extra-high",
          "width": 16,
          "height": 16,
          "shift": 
          [
            0,
            1.09375
          ],
          "variation_count": 1,
          "scale": 5
        },
        "rotate": false,
        "orientation_to_variation": false
      }
    },
    "surface_conditions": 
    [
      
      {
        "property": "pressure",
        "min": 10
      }
    ]
  },
  "electric-furnace": 
  {
    "type": "furnace",
    "name": "electric-furnace",
    "icon": "__base__/graphics/icons/electric-furnace.png",
    "flags": 
    [
      "placeable-neutral",
      "placeable-player",
      "player-creation"
    ],
    "minable": 
    {
      "mining_time": 0.2,
      "result": "electric-furnace"
    },
    "fast_replaceable_group": "furnace",
    "max_health": 350,
    "corpse": "electric-furnace-remnants",
    "dying_explosion": "electric-furnace-explosion",
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
    "module_slots": 2,
    "icon_draw_specification": 
    {
      "shift": 
      [
        0,
        -0.1
      ]
    },
    "icons_positioning": 
    [
      
      {
        "inventory_index": 4,
        "shift": 
        [
          0,
          0.8
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
      "smelting"
    ],
    "result_inventory_size": 1,
    "crafting_speed": 2,
    "energy_usage": "180kW",
    "source_inventory_size": 1,
    "energy_source": 
    {
      "type": "electric",
      "usage_priority": "secondary-input",
      "emissions_per_minute": 
      {
        "pollution": 1
      }
    },
    "impact_category": "metal",
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
        "filename": "__base__/sound/electric-furnace.ogg",
        "volume": 0.85,
        "modifiers": 
        {
          "type": "main-menu",
          "volume_multiplier": 4.20000000000000017763568394002504646778106689453125
        },
        "advanced_volume_control": 
        {
          "attenuation": "exponential"
        }
      },
      "max_sounds_per_type": 4,
      "audible_distance_modifier": 0.7,
      "fade_in_ticks": 4,
      "fade_out_ticks": 20
    },
    "graphics_set": 
    {
      "animation": 
      {
        "layers": 
        [
          
          {
            "filename": "__base__/graphics/entity/electric-furnace/electric-furnace.png",
            "priority": "high",
            "width": 239,
            "height": 219,
            "shift": 
            [
              0.0234375,
              0.1796875
            ],
            "scale": 0.5
          },
          
          {
            "filename": "__base__/graphics/entity/electric-furnace/electric-furnace-shadow.png",
            "priority": "high",
            "width": 227,
            "height": 171,
            "draw_as_shadow": true,
            "shift": 
            [
              0.3515625,
              0.2421875
            ],
            "scale": 0.5
          }
        ]
      },
      "working_visualisations": 
      [
        
        {
          "fadeout": true,
          "animation": 
          {
            "layers": 
            [
              
              {
                "filename": "__base__/graphics/entity/electric-furnace/electric-furnace-heater.png",
                "priority": "high",
                "width": 60,
                "height": 56,
                "frame_count": 12,
                "animation_speed": 0.5,
                "draw_as_glow": true,
                "shift": 
                [
                  0.0546875,
                  1.0234375
                ],
                "scale": 0.5
              },
              
              {
                "filename": "__base__/graphics/entity/electric-furnace/electric-furnace-light.png",
                "blend_mode": "additive",
                "width": 202,
                "height": 202,
                "repeat_count": 12,
                "draw_as_glow": true,
                "shift": 
                [
                  0.03125,
                  0
                ],
                "scale": 0.5
              }
            ]
          }
        },
        
        {
          "fadeout": true,
          "animation": 
          {
            "filename": "__base__/graphics/entity/electric-furnace/electric-furnace-ground-light.png",
            "blend_mode": "additive",
            "width": 166,
            "height": 124,
            "draw_as_light": true,
            "shift": 
            [
              0.09375,
              2.15625
            ],
            "scale": 0.5
          }
        },
        
        {
          "animation": 
          {
            "filename": "__base__/graphics/entity/electric-furnace/electric-furnace-propeller-1.png",
            "priority": "high",
            "width": 37,
            "height": 25,
            "frame_count": 4,
            "animation_speed": 0.5,
            "shift": 
            [
              -0.640625,
              -0.578125
            ],
            "scale": 0.5
          }
        },
        
        {
          "animation": 
          {
            "filename": "__base__/graphics/entity/electric-furnace/electric-furnace-propeller-2.png",
            "priority": "high",
            "width": 23,
            "height": 15,
            "frame_count": 4,
            "animation_speed": 0.5,
            "shift": 
            [
              0.109375,
              -1.1875
            ],
            "scale": 0.5
          }
        }
      ],
      "water_reflection": 
      {
        "pictures": 
        {
          "filename": "__base__/graphics/entity/electric-furnace/electric-furnace-reflection.png",
          "priority": "extra-high",
          "width": 24,
          "height": 24,
          "shift": 
          [
            0.15625,
            1.25
          ],
          "variation_count": 1,
          "scale": 5
        },
        "rotate": false,
        "orientation_to_variation": false
      },
      "frozen_patch": 
      {
        "filename": "__space-age__/graphics/entity/frozen/electric-furnace/electric-furnace.png",
        "width": 239,
        "height": 219,
        "shift": 
        [
          0.0234375,
          0.1796875
        ],
        "scale": 0.5
      }
    },
    "heating_energy": "100kW"
  },
  "steel-furnace": 
  {
    "type": "furnace",
    "name": "steel-furnace",
    "icon": "__base__/graphics/icons/steel-furnace.png",
    "flags": 
    [
      "placeable-neutral",
      "placeable-player",
      "player-creation"
    ],
    "minable": 
    {
      "mining_time": 0.2,
      "result": "steel-furnace"
    },
    "fast_replaceable_group": "furnace",
    "max_health": 300,
    "corpse": "steel-furnace-remnants",
    "dying_explosion": "steel-furnace-explosion",
    "impact_category": "metal",
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
    "icon_draw_specification": 
    {
      "scale": 0.660000000000000053290705182007513940334320068359375,
      "shift": 
      [
        0,
        -0.1
      ]
    },
    "working_sound": 
    {
      "sound": 
      {
        "filename": "__base__/sound/steel-furnace.ogg",
        "volume": 0.320000000000000017763568394002504646778106689453125,
        "advanced_volume_control": 
        {
          "attenuation": "exponential"
        }
      },
      "max_sounds_per_type": 4,
      "audible_distance_modifier": 0.5,
      "fade_in_ticks": 4,
      "fade_out_ticks": 20
    },
    "resistances": 
    [
      
      {
        "type": "fire",
        "percent": 100
      }
    ],
    "collision_box": 
    [
      
      [
        -0.7,
        -0.7
      ],
      
      [
        0.7,
        0.7
      ]
    ],
    "selection_box": 
    [
      
      [
        -0.8,
        -1
      ],
      
      [
        0.8,
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
    "crafting_categories": 
    [
      "smelting"
    ],
    "result_inventory_size": 1,
    "energy_usage": "90kW",
    "crafting_speed": 2,
    "source_inventory_size": 1,
    "energy_source": 
    {
      "type": "burner",
      "fuel_categories": 
      [
        "chemical"
      ],
      "effectivity": 1,
      "emissions_per_minute": 
      {
        "pollution": 4
      },
      "fuel_inventory_size": 1,
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
          "frequency": 10,
          "position": 
          [
            0.7,
            -1.19999999999999996447286321199499070644378662109375
          ],
          "starting_vertical_speed": 0.08,
          "starting_frame_deviation": 60
        }
      ]
    },
    "graphics_set": 
    {
      "animation": 
      {
        "layers": 
        [
          
          {
            "filename": "__base__/graphics/entity/steel-furnace/steel-furnace.png",
            "priority": "high",
            "width": 171,
            "height": 174,
            "shift": 
            [
              -0.0390625,
              0.0625
            ],
            "scale": 0.5
          },
          
          {
            "filename": "__base__/graphics/entity/steel-furnace/steel-furnace-shadow.png",
            "priority": "high",
            "width": 277,
            "height": 85,
            "draw_as_shadow": true,
            "shift": 
            [
              1.2265625,
              0.3515625
            ],
            "scale": 0.5
          }
        ]
      },
      "working_visualisations": 
      [
        
        {
          "fadeout": true,
          "effect": "flicker",
          "animation": 
          {
            "filename": "__base__/graphics/entity/steel-furnace/steel-furnace-fire.png",
            "priority": "high",
            "line_length": 8,
            "width": 57,
            "height": 81,
            "frame_count": 48,
            "draw_as_glow": true,
            "shift": 
            [
              -0.0234375,
              0.1796875
            ],
            "scale": 0.5
          }
        },
        
        {
          "fadeout": true,
          "effect": "flicker",
          "animation": 
          {
            "filename": "__base__/graphics/entity/steel-furnace/steel-furnace-glow.png",
            "priority": "high",
            "width": 60,
            "height": 43,
            "draw_as_glow": true,
            "shift": 
            [
              0.03125,
              0.640625
            ],
            "blend_mode": "additive"
          }
        },
        
        {
          "fadeout": true,
          "effect": "flicker",
          "animation": 
          {
            "filename": "__base__/graphics/entity/steel-furnace/steel-furnace-working.png",
            "priority": "high",
            "line_length": 1,
            "width": 128,
            "height": 150,
            "draw_as_glow": true,
            "shift": 
            [
              0,
              -0.15625
            ],
            "blend_mode": "additive",
            "scale": 0.5
          }
        },
        
        {
          "fadeout": true,
          "effect": "flicker",
          "animation": 
          {
            "filename": "__base__/graphics/entity/steel-furnace/steel-furnace-ground-light.png",
            "priority": "high",
            "line_length": 1,
            "width": 152,
            "height": 126,
            "draw_as_light": true,
            "shift": 
            [
              0.03125,
              1.5
            ],
            "blend_mode": "additive",
            "scale": 0.5
          }
        }
      ],
      "water_reflection": 
      {
        "pictures": 
        {
          "filename": "__base__/graphics/entity/steel-furnace/steel-furnace-reflection.png",
          "priority": "extra-high",
          "width": 20,
          "height": 24,
          "shift": 
          [
            0,
            1.40625
          ],
          "variation_count": 1,
          "scale": 5
        },
        "rotate": false,
        "orientation_to_variation": false
      }
    },
    "surface_conditions": 
    [
      
      {
        "property": "pressure",
        "min": 10
      }
    ]
  },
  "recycler": 
  {
    "type": "furnace",
    "name": "recycler",
    "icon": "__quality__/graphics/icons/recycler.png",
    "flags": 
    [
      "placeable-neutral",
      "placeable-player",
      "player-creation"
    ],
    "fast_transfer_modules_into_module_slots_only": true,
    "minable": 
    {
      "mining_time": 0.2,
      "result": "recycler"
    },
    "max_health": 300,
    "fast_replaceable_group": "recycler",
    "vector_to_place_result": 
    [
      -0.5,
      -2.29999999999999982236431605997495353221893310546875
    ],
    "corpse": "medium-remnants",
    "impact_category": "metal",
    "working_sound": 
    {
      "sound": 
      {
        "filename": "__quality__/sound/recycler/recycler-loop.ogg",
        "volume": 0.7
      },
      "sound_accents": 
      [
        
        {
          "sound": 
          {
            "variations": 
            [
              
              {
                "filename": "__quality__/sound/recycler/recycler-jaw-move-1.ogg",
                "volume": 0.45
              },
              
              {
                "filename": "__quality__/sound/recycler/recycler-jaw-move-2.ogg",
                "volume": 0.45
              },
              
              {
                "filename": "__quality__/sound/recycler/recycler-jaw-move-3.ogg",
                "volume": 0.45
              },
              
              {
                "filename": "__quality__/sound/recycler/recycler-jaw-move-4.ogg",
                "volume": 0.45
              },
              
              {
                "filename": "__quality__/sound/recycler/recycler-jaw-move-5.ogg",
                "volume": 0.45
              }
            ]
          },
          "frame": 14,
          "audible_distance_modifier": 0.2
        },
        
        {
          "sound": 
          {
            "variations": 
            [
              
              {
                "filename": "__quality__/sound/recycler/recycler-vox-1.ogg",
                "volume": 0.2
              },
              
              {
                "filename": "__quality__/sound/recycler/recycler-vox-2.ogg",
                "volume": 0.2
              },
              
              {
                "filename": "__quality__/sound/recycler/recycler-vox-3.ogg",
                "volume": 0.2
              },
              
              {
                "filename": "__quality__/sound/recycler/recycler-vox-4.ogg",
                "volume": 0.2
              },
              
              {
                "filename": "__quality__/sound/recycler/recycler-vox-5.ogg",
                "volume": 0.2
              }
            ]
          },
          "frame": 20,
          "audible_distance_modifier": 0.3
        },
        
        {
          "sound": 
          {
            "variations": 
            [
              
              {
                "filename": "__quality__/sound/recycler/recycler-mechanic-1.ogg",
                "volume": 0.3
              },
              
              {
                "filename": "__quality__/sound/recycler/recycler-mechanic-2.ogg",
                "volume": 0.3
              },
              
              {
                "filename": "__quality__/sound/recycler/recycler-mechanic-3.ogg",
                "volume": 0.3
              }
            ]
          },
          "frame": 45,
          "audible_distance_modifier": 0.3
        },
        
        {
          "sound": 
          {
            "variations": 
            [
              
              {
                "filename": "__quality__/sound/recycler/recycler-jaw-move-1.ogg",
                "volume": 0.45
              },
              
              {
                "filename": "__quality__/sound/recycler/recycler-jaw-move-2.ogg",
                "volume": 0.45
              },
              
              {
                "filename": "__quality__/sound/recycler/recycler-jaw-move-3.ogg",
                "volume": 0.45
              },
              
              {
                "filename": "__quality__/sound/recycler/recycler-jaw-move-4.ogg",
                "volume": 0.45
              },
              
              {
                "filename": "__quality__/sound/recycler/recycler-jaw-move-5.ogg",
                "volume": 0.45
              }
            ]
          },
          "frame": 60,
          "audible_distance_modifier": 0.2
        },
        
        {
          "sound": 
          {
            "variations": 
            [
              
              {
                "filename": "__quality__/sound/recycler/recycler-trash-1.ogg",
                "volume": 0.6
              },
              
              {
                "filename": "__quality__/sound/recycler/recycler-trash-2.ogg",
                "volume": 0.6
              },
              
              {
                "filename": "__quality__/sound/recycler/recycler-trash-3.ogg",
                "volume": 0.6
              },
              
              {
                "filename": "__quality__/sound/recycler/recycler-trash-4.ogg",
                "volume": 0.6
              },
              
              {
                "filename": "__quality__/sound/recycler/recycler-trash-5.ogg",
                "volume": 0.6
              }
            ]
          },
          "frame": 61,
          "audible_distance_modifier": 0.3
        },
        
        {
          "sound": 
          {
            "variations": 
            [
              
              {
                "filename": "__quality__/sound/recycler/recycler-jaw-shut-1.ogg",
                "volume": 0.3
              },
              
              {
                "filename": "__quality__/sound/recycler/recycler-jaw-shut-2.ogg",
                "volume": 0.3
              },
              
              {
                "filename": "__quality__/sound/recycler/recycler-jaw-shut-3.ogg",
                "volume": 0.3
              },
              
              {
                "filename": "__quality__/sound/recycler/recycler-jaw-shut-4.ogg",
                "volume": 0.3
              },
              
              {
                "filename": "__quality__/sound/recycler/recycler-jaw-shut-5.ogg",
                "volume": 0.3
              },
              
              {
                "filename": "__quality__/sound/recycler/recycler-jaw-shut-6.ogg",
                "volume": 0.3
              }
            ]
          },
          "frame": 63,
          "audible_distance_modifier": 0.6
        }
      ],
      "max_sounds_per_type": 2,
      "fade_in_ticks": 4,
      "fade_out_ticks": 20
    },
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
        -1.7
      ],
      
      [
        0.7,
        1.7
      ]
    ],
    "selection_box": 
    [
      
      [
        -0.9,
        -1.85
      ],
      
      [
        0.9,
        1.85
      ]
    ],
    "crafting_categories": 
    [
      "recycling",
      "recycling-or-hand-crafting"
    ],
    "result_inventory_size": 12,
    "energy_usage": "180kW",
    "crafting_speed": 0.5,
    "source_inventory_size": 1,
    "custom_input_slot_tooltip_key": "recycler-input-slot-tooltip",
    "energy_source": 
    {
      "type": "electric",
      "usage_priority": "secondary-input",
      "emissions_per_minute": 
      {
        "pollution": 2
      }
    },
    "module_slots": 4,
    "icon_draw_specification": 
    {
      "shift": 
      [
        0,
        -0.55
      ]
    },
    "icons_positioning": 
    [
      
      {
        "inventory_index": 4,
        "shift": 
        [
          0,
          0.2
        ]
      }
    ],
    "allowed_effects": 
    [
      "consumption",
      "speed",
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
              "priority": "high",
              "frame_count": 64,
              "animation_speed": 4,
              "scale": 0.5,
              "width": 142,
              "height": 308,
              "shift": 
              [
                0.015625,
                -0.359375
              ],
              "line_length": 8,
              "filename": "__quality__/graphics/entity/recycler/recycler-N.png"
            },
            
            {
              "draw_as_shadow": true,
              "priority": "high",
              "frame_count": 64,
              "animation_speed": 4,
              "scale": 0.5,
              "width": 240,
              "height": 252,
              "shift": 
              [
                0.90625,
                0.0625
              ],
              "line_length": 8,
              "filename": "__quality__/graphics/entity/recycler/recycler-N-shadow.png"
            }
          ]
        },
        "east": 
        {
          "layers": 
          [
            
            {
              "priority": "high",
              "frame_count": 64,
              "animation_speed": 4,
              "scale": 0.5,
              "width": 280,
              "height": 184,
              "shift": 
              [
                0.0625,
                -0.34375
              ],
              "line_length": 8,
              "filename": "__quality__/graphics/entity/recycler/recycler-E.png"
            },
            
            {
              "draw_as_shadow": true,
              "priority": "high",
              "frame_count": 64,
              "animation_speed": 4,
              "scale": 0.5,
              "width": 374,
              "height": 112,
              "shift": 
              [
                0.828125,
                0.25
              ],
              "line_length": 8,
              "filename": "__quality__/graphics/entity/recycler/recycler-E-shadow.png"
            }
          ]
        },
        "south": 
        {
          "layers": 
          [
            
            {
              "priority": "high",
              "frame_count": 64,
              "animation_speed": 4,
              "scale": 0.5,
              "width": 142,
              "height": 276,
              "shift": 
              [
                -0.015625,
                -0.09375
              ],
              "line_length": 8,
              "filename": "__quality__/graphics/entity/recycler/recycler-S.png"
            },
            
            {
              "draw_as_shadow": true,
              "priority": "high",
              "frame_count": 64,
              "animation_speed": 4,
              "scale": 0.5,
              "width": 246,
              "height": 252,
              "shift": 
              [
                0.828125,
                0.21875
              ],
              "line_length": 8,
              "filename": "__quality__/graphics/entity/recycler/recycler-S-shadow.png"
            }
          ]
        },
        "west": 
        {
          "layers": 
          [
            
            {
              "priority": "high",
              "frame_count": 64,
              "animation_speed": 4,
              "scale": 0.5,
              "width": 260,
              "height": 172,
              "shift": 
              [
                -0.03125,
                -0.25
              ],
              "line_length": 8,
              "filename": "__quality__/graphics/entity/recycler/recycler-W.png"
            },
            
            {
              "draw_as_shadow": true,
              "priority": "high",
              "frame_count": 64,
              "animation_speed": 4,
              "scale": 0.5,
              "width": 314,
              "height": 116,
              "shift": 
              [
                0.515625,
                0.28125
              ],
              "line_length": 8,
              "filename": "__quality__/graphics/entity/recycler/recycler-W-shadow.png"
            }
          ]
        }
      },
      "working_visualisations": 
      [
        
        {
          "north_animation": 
          {
            "draw_as_glow": true,
            "priority": "high",
            "frame_count": 64,
            "blend_mode": "additive",
            "animation_speed": 4,
            "scale": 0.5,
            "width": 120,
            "height": 288,
            "shift": 
            [
              0.078125,
              -0.484375
            ],
            "line_length": 8,
            "filename": "__quality__/graphics/entity/recycler/recycler-N-lights.png"
          },
          "east_animation": 
          {
            "draw_as_glow": true,
            "priority": "high",
            "frame_count": 64,
            "blend_mode": "additive",
            "animation_speed": 4,
            "scale": 0.5,
            "width": 250,
            "height": 128,
            "shift": 
            [
              0,
              -0.34375
            ],
            "line_length": 8,
            "filename": "__quality__/graphics/entity/recycler/recycler-E-lights.png"
          },
          "south_animation": 
          {
            "draw_as_glow": true,
            "priority": "high",
            "frame_count": 64,
            "blend_mode": "additive",
            "animation_speed": 4,
            "scale": 0.5,
            "width": 120,
            "height": 258,
            "shift": 
            [
              0.046875,
              -0.0625
            ],
            "line_length": 8,
            "filename": "__quality__/graphics/entity/recycler/recycler-S-lights.png"
          },
          "west_animation": 
          {
            "draw_as_glow": true,
            "priority": "high",
            "frame_count": 64,
            "blend_mode": "additive",
            "animation_speed": 4,
            "scale": 0.5,
            "width": 244,
            "height": 158,
            "shift": 
            [
              -0.03125,
              -0.328125
            ],
            "line_length": 8,
            "filename": "__quality__/graphics/entity/recycler/recycler-W-lights.png"
          }
        },
        
        {
          "apply_recipe_tint": "tertiary",
          "fadeout": true,
          "constant_speed": true,
          "north_position": 
          [
            0.546875,
            -2.75
          ],
          "east_position": 
          [
            1.515625,
            -0.828125
          ],
          "south_position": 
          [
            -0.5,
            0.171875
          ],
          "west_position": 
          [
            -1.34375,
            -1.59375
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
            0.546875,
            -2.75
          ],
          "east_position": 
          [
            1.515625,
            -0.828125
          ],
          "south_position": 
          [
            -0.5,
            0.171875
          ],
          "west_position": 
          [
            -1.34375,
            -1.59375
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
          "priority": "high",
          "scale": 0.5,
          "width": 142,
          "height": 308,
          "shift": 
          [
            0.015625,
            -0.359375
          ],
          "filename": "__quality__/graphics/entity/recycler/recycler-N-frozen.png"
        },
        "east": 
        {
          "priority": "high",
          "scale": 0.5,
          "width": 280,
          "height": 184,
          "shift": 
          [
            0.0625,
            -0.34375
          ],
          "filename": "__quality__/graphics/entity/recycler/recycler-E-frozen.png"
        },
        "south": 
        {
          "priority": "high",
          "scale": 0.5,
          "width": 142,
          "height": 276,
          "shift": 
          [
            -0.015625,
            -0.09375
          ],
          "line_length": 8,
          "filename": "__quality__/graphics/entity/recycler/recycler-S-frozen.png"
        },
        "west": 
        {
          "priority": "high",
          "scale": 0.5,
          "width": 260,
          "height": 172,
          "shift": 
          [
            -0.03125,
            -0.25
          ],
          "filename": "__quality__/graphics/entity/recycler/recycler-W-frozen.png"
        }
      }
    },
    "graphics_set_flipped": 
    {
      "animation": 
      {
        "north": 
        {
          "layers": 
          [
            
            {
              "priority": "high",
              "frame_count": 64,
              "animation_speed": 4,
              "scale": 0.5,
              "width": 142,
              "height": 308,
              "shift": 
              [
                -0.015625,
                -0.359375
              ],
              "line_length": 8,
              "filename": "__quality__/graphics/entity/recycler/recycler-flipped-N.png"
            },
            
            {
              "draw_as_shadow": true,
              "priority": "high",
              "frame_count": 64,
              "animation_speed": 4,
              "scale": 0.5,
              "width": 244,
              "height": 252,
              "shift": 
              [
                0.859375,
                0.0625
              ],
              "line_length": 8,
              "filename": "__quality__/graphics/entity/recycler/recycler-flipped-N-shadow.png"
            }
          ]
        },
        "east": 
        {
          "layers": 
          [
            
            {
              "priority": "high",
              "frame_count": 64,
              "animation_speed": 4,
              "scale": 0.5,
              "width": 260,
              "height": 172,
              "shift": 
              [
                0.3125,
                -0.25
              ],
              "line_length": 8,
              "filename": "__quality__/graphics/entity/recycler/recycler-flipped-E.png"
            },
            
            {
              "draw_as_shadow": true,
              "priority": "high",
              "frame_count": 64,
              "animation_speed": 4,
              "scale": 0.5,
              "width": 352,
              "height": 118,
              "shift": 
              [
                1.0625,
                0.296875
              ],
              "line_length": 8,
              "filename": "__quality__/graphics/entity/recycler/recycler-flipped-E-shadow.png"
            }
          ]
        },
        "south": 
        {
          "layers": 
          [
            
            {
              "priority": "high",
              "frame_count": 64,
              "animation_speed": 4,
              "scale": 0.5,
              "width": 140,
              "height": 276,
              "shift": 
              [
                0.015625,
                -0.09375
              ],
              "line_length": 8,
              "filename": "__quality__/graphics/entity/recycler/recycler-flipped-S.png"
            },
            
            {
              "draw_as_shadow": true,
              "priority": "high",
              "frame_count": 64,
              "animation_speed": 4,
              "scale": 0.5,
              "width": 232,
              "height": 252,
              "shift": 
              [
                0.890625,
                0.21875
              ],
              "line_length": 8,
              "filename": "__quality__/graphics/entity/recycler/recycler-flipped-S-shadow.png"
            }
          ]
        },
        "west": 
        {
          "layers": 
          [
            
            {
              "priority": "high",
              "frame_count": 64,
              "animation_speed": 4,
              "scale": 0.5,
              "width": 280,
              "height": 184,
              "shift": 
              [
                0.0625,
                -0.34375
              ],
              "line_length": 8,
              "filename": "__quality__/graphics/entity/recycler/recycler-flipped-W.png"
            },
            
            {
              "draw_as_shadow": true,
              "priority": "high",
              "frame_count": 64,
              "animation_speed": 4,
              "scale": 0.5,
              "width": 342,
              "height": 114,
              "shift": 
              [
                0.671875,
                0.25
              ],
              "line_length": 8,
              "filename": "__quality__/graphics/entity/recycler/recycler-flipped-W-shadow.png"
            }
          ]
        }
      },
      "working_visualisations": 
      [
        
        {
          "north_animation": 
          {
            "draw_as_glow": true,
            "priority": "high",
            "frame_count": 64,
            "blend_mode": "additive",
            "animation_speed": 4,
            "scale": 0.5,
            "width": 122,
            "height": 288,
            "shift": 
            [
              -0.078125,
              -0.46875
            ],
            "line_length": 8,
            "filename": "__quality__/graphics/entity/recycler/recycler-flipped-N-lights.png"
          },
          "east_animation": 
          {
            "draw_as_glow": true,
            "priority": "high",
            "frame_count": 64,
            "blend_mode": "additive",
            "animation_speed": 4,
            "scale": 0.5,
            "width": 244,
            "height": 160,
            "shift": 
            [
              0.296875,
              -0.3125
            ],
            "line_length": 8,
            "filename": "__quality__/graphics/entity/recycler/recycler-flipped-E-lights.png"
          },
          "south_animation": 
          {
            "draw_as_glow": true,
            "priority": "high",
            "frame_count": 64,
            "blend_mode": "additive",
            "animation_speed": 4,
            "scale": 0.5,
            "width": 120,
            "height": 244,
            "shift": 
            [
              -0.03125,
              -0.1875
            ],
            "line_length": 8,
            "filename": "__quality__/graphics/entity/recycler/recycler-flipped-S-lights.png"
          },
          "west_animation": 
          {
            "draw_as_glow": true,
            "priority": "high",
            "frame_count": 64,
            "blend_mode": "additive",
            "animation_speed": 4,
            "scale": 0.5,
            "width": 238,
            "height": 134,
            "shift": 
            [
              0.203125,
              -0.375
            ],
            "line_length": 8,
            "filename": "__quality__/graphics/entity/recycler/recycler-flipped-W-lights.png"
          }
        },
        
        {
          "apply_recipe_tint": "tertiary",
          "fadeout": true,
          "constant_speed": true,
          "north_position": 
          [
            -0.5625,
            -2.75
          ],
          "east_position": 
          [
            1.59375,
            -1.578125
          ],
          "south_position": 
          [
            0.484375,
            0.171875
          ],
          "west_position": 
          [
            -1.375,
            -0.859375
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
            -0.5625,
            -2.75
          ],
          "east_position": 
          [
            1.59375,
            -1.578125
          ],
          "south_position": 
          [
            0.484375,
            0.171875
          ],
          "west_position": 
          [
            -1.375,
            -0.859375
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
          "priority": "high",
          "scale": 0.5,
          "width": 142,
          "height": 308,
          "shift": 
          [
            -0.015625,
            -0.359375
          ],
          "filename": "__quality__/graphics/entity/recycler/recycler-flipped-N-frozen.png"
        },
        "east": 
        {
          "priority": "high",
          "scale": 0.5,
          "width": 260,
          "height": 172,
          "shift": 
          [
            0.3125,
            -0.25
          ],
          "filename": "__quality__/graphics/entity/recycler/recycler-flipped-E-frozen.png"
        },
        "south": 
        {
          "priority": "high",
          "scale": 0.5,
          "width": 140,
          "height": 276,
          "shift": 
          [
            0.015625,
            -0.09375
          ],
          "filename": "__quality__/graphics/entity/recycler/recycler-flipped-S-frozen.png"
        },
        "west": 
        {
          "priority": "high",
          "scale": 0.5,
          "width": 280,
          "height": 184,
          "shift": 
          [
            0.0625,
            -0.34375
          ],
          "filename": "__quality__/graphics/entity/recycler/recycler-flipped-W-frozen.png"
        }
      }
    },
    "cant_insert_at_source_message_key": "inventory-restriction.cant-be-recycled",
    "heating_energy": "100kW"
  }
};