import { ModuleNode } from "./ModulesType";

export const Modules: Record<string, ModuleNode> =
  {
    "speed-module": 
    {
      "type": "module",
      "name": "speed-module",
      "localised_description": 
      [
        "item-description.speed-module"
      ],
      "icon": "__base__/graphics/icons/speed-module.png",
      "subgroup": "module",
      "color_hint": 
      {
        "text": "S"
      },
      "category": "speed",
      "tier": 1,
      "order": "a[speed]-a[speed-module-1]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "weight": 20000,
      "effect": 
      {
        "speed": 0.2,
        "consumption": 0.5,
        "quality": -0.1
      },
      "beacon_tint": 
      {
        "primary": 
        [
          0.4410000000000000142108547152020037174224853515625,
          0.713999999999999968025576890795491635799407958984375,
          1,
          1
        ],
        "secondary": 
        [
          0.387999999999999989341858963598497211933135986328125,
          0.97599999999999997868371792719699442386627197265625,
          1,
          1
        ]
      },
      "art_style": "vanilla",
      "requires_beacon_alt_mode": false
    },
    "speed-module-2": 
    {
      "type": "module",
      "name": "speed-module-2",
      "localised_description": 
      [
        "item-description.speed-module"
      ],
      "icon": "__base__/graphics/icons/speed-module-2.png",
      "subgroup": "module",
      "category": "speed",
      "color_hint": 
      {
        "text": "S"
      },
      "tier": 2,
      "order": "a[speed]-b[speed-module-2]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "weight": 20000,
      "effect": 
      {
        "speed": 0.3,
        "consumption": 0.6,
        "quality": -0.15
      },
      "beacon_tint": 
      {
        "primary": 
        [
          0.4410000000000000142108547152020037174224853515625,
          0.713999999999999968025576890795491635799407958984375,
          1,
          1
        ],
        "secondary": 
        [
          0.387999999999999989341858963598497211933135986328125,
          0.97599999999999997868371792719699442386627197265625,
          1,
          1
        ]
      },
      "art_style": "vanilla",
      "requires_beacon_alt_mode": false
    },
    "speed-module-3": 
    {
      "type": "module",
      "name": "speed-module-3",
      "localised_description": 
      [
        "item-description.speed-module"
      ],
      "icon": "__base__/graphics/icons/speed-module-3.png",
      "subgroup": "module",
      "color_hint": 
      {
        "text": "S"
      },
      "category": "speed",
      "tier": 3,
      "order": "a[speed]-c[speed-module-3]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "weight": 20000,
      "effect": 
      {
        "speed": 0.5,
        "consumption": 0.7,
        "quality": -0.25
      },
      "beacon_tint": 
      {
        "primary": 
        [
          0.4410000000000000142108547152020037174224853515625,
          0.713999999999999968025576890795491635799407958984375,
          1,
          1
        ],
        "secondary": 
        [
          0.387999999999999989341858963598497211933135986328125,
          0.97599999999999997868371792719699442386627197265625,
          1,
          1
        ]
      },
      "art_style": "vanilla",
      "requires_beacon_alt_mode": false
    },
    "efficiency-module": 
    {
      "type": "module",
      "name": "efficiency-module",
      "localised_description": 
      [
        "item-description.efficiency-module"
      ],
      "icon": "__base__/graphics/icons/efficiency-module.png",
      "subgroup": "module",
      "color_hint": 
      {
        "text": "E"
      },
      "category": "efficiency",
      "tier": 1,
      "order": "c[efficiency]-a[efficiency-module-1]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "weight": 20000,
      "effect": 
      {
        "consumption": -0.3
      },
      "beacon_tint": 
      {
        "primary": 
        [
          0,
          1,
          0
        ],
        "secondary": 
        [
          0.370000000000000017763568394002504646778106689453125,
          1,
          0.370000000000000017763568394002504646778106689453125,
          1
        ]
      },
      "art_style": "vanilla",
      "requires_beacon_alt_mode": false
    },
    "efficiency-module-2": 
    {
      "type": "module",
      "name": "efficiency-module-2",
      "localised_description": 
      [
        "item-description.efficiency-module"
      ],
      "icon": "__base__/graphics/icons/efficiency-module-2.png",
      "subgroup": "module",
      "color_hint": 
      {
        "text": "E"
      },
      "category": "efficiency",
      "tier": 2,
      "order": "c[efficiency]-b[efficiency-module-2]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "weight": 20000,
      "effect": 
      {
        "consumption": -0.4
      },
      "beacon_tint": 
      {
        "primary": 
        [
          0,
          1,
          0
        ],
        "secondary": 
        [
          0.370000000000000017763568394002504646778106689453125,
          1,
          0.370000000000000017763568394002504646778106689453125,
          1
        ]
      },
      "art_style": "vanilla",
      "requires_beacon_alt_mode": false
    },
    "efficiency-module-3": 
    {
      "type": "module",
      "name": "efficiency-module-3",
      "localised_description": 
      [
        "item-description.efficiency-module"
      ],
      "icon": "__base__/graphics/icons/efficiency-module-3.png",
      "subgroup": "module",
      "color_hint": 
      {
        "text": "E"
      },
      "category": "efficiency",
      "tier": 3,
      "order": "c[efficiency]-c[efficiency-module-3]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "weight": 20000,
      "effect": 
      {
        "consumption": -0.5
      },
      "beacon_tint": 
      {
        "primary": 
        [
          0,
          1,
          0
        ],
        "secondary": 
        [
          0.370000000000000017763568394002504646778106689453125,
          1,
          0.370000000000000017763568394002504646778106689453125,
          1
        ]
      },
      "art_style": "vanilla",
      "requires_beacon_alt_mode": false
    },
    "productivity-module": 
    {
      "type": "module",
      "name": "productivity-module",
      "localised_description": 
      [
        "item-description.productivity-module"
      ],
      "icon": "__base__/graphics/icons/productivity-module.png",
      "subgroup": "module",
      "color_hint": 
      {
        "text": "P"
      },
      "category": "productivity",
      "tier": 1,
      "order": "c[productivity]-a[productivity-module-1]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "weight": 20000,
      "effect": 
      {
        "productivity": 0.04,
        "consumption": 0.4,
        "pollution": 0.05,
        "speed": -0.05
      }
    },
    "productivity-module-2": 
    {
      "type": "module",
      "name": "productivity-module-2",
      "localised_description": 
      [
        "item-description.productivity-module"
      ],
      "icon": "__base__/graphics/icons/productivity-module-2.png",
      "subgroup": "module",
      "color_hint": 
      {
        "text": "P"
      },
      "category": "productivity",
      "tier": 2,
      "order": "c[productivity]-b[productivity-module-2]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "weight": 20000,
      "effect": 
      {
        "productivity": 0.06,
        "consumption": 0.6,
        "pollution": 0.0700000000000000088817841970012523233890533447265625,
        "speed": -0.1
      }
    },
    "productivity-module-3": 
    {
      "type": "module",
      "name": "productivity-module-3",
      "localised_description": 
      [
        "item-description.productivity-module"
      ],
      "icon": "__base__/graphics/icons/productivity-module-3.png",
      "subgroup": "module",
      "color_hint": 
      {
        "text": "P"
      },
      "category": "productivity",
      "tier": 3,
      "order": "c[productivity]-c[productivity-module-3]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "weight": 20000,
      "effect": 
      {
        "productivity": 0.1,
        "consumption": 0.8,
        "pollution": 0.1,
        "speed": -0.15
      }
    },
    "quality-module": 
    {
      "type": "module",
      "name": "quality-module",
      "localised_description": 
      [
        "item-description.quality-module"
      ],
      "icon": "__quality__/graphics/icons/quality-module.png",
      "subgroup": "module",
      "color_hint": 
      {
        "text": "Q"
      },
      "category": "quality",
      "tier": 1,
      "order": "d[quality]-a[quality-module-1]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "weight": 20000,
      "effect": 
      {
        "quality": 0.1,
        "speed": -0.05
      }
    },
    "quality-module-2": 
    {
      "type": "module",
      "name": "quality-module-2",
      "localised_description": 
      [
        "item-description.quality-module"
      ],
      "icon": "__quality__/graphics/icons/quality-module-2.png",
      "subgroup": "module",
      "color_hint": 
      {
        "text": "Q"
      },
      "category": "quality",
      "tier": 2,
      "order": "d[quality]-b[quality-module-2]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "weight": 20000,
      "effect": 
      {
        "quality": 0.2,
        "speed": -0.05
      }
    },
    "quality-module-3": 
    {
      "type": "module",
      "name": "quality-module-3",
      "localised_description": 
      [
        "item-description.quality-module"
      ],
      "icon": "__quality__/graphics/icons/quality-module-3.png",
      "subgroup": "module",
      "color_hint": 
      {
        "text": "Q"
      },
      "category": "quality",
      "tier": 3,
      "order": "d[quality]-c[quality-module-3]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/module-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "weight": 20000,
      "effect": 
      {
        "quality": 0.25,
        "speed": -0.05
      }
    }
  };