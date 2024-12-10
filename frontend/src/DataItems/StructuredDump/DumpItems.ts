import { ItemNode } from "./ItemsType";


export const DumpItems: Record<string, ItemNode> = {
    "item-unknown": 
    {
      "type": "item",
      "name": "item-unknown",
      "icon": "__core__/graphics/icons/unknown.png",
      "hidden": true,
      "stack_size": 1
    },
    "parameter-0": 
    {
      "type": "item",
      "name": "parameter-0",
      "icon": "__base__/graphics/icons/parameter/parameter-0.png",
      "localised_name": 
      [
        "parameter-x",
        "0"
      ],
      "subgroup": "parameters",
      "order": "a",
      "parameter": true,
      "stack_size": 1
    },
    "parameter-1": 
    {
      "type": "item",
      "name": "parameter-1",
      "icon": "__base__/graphics/icons/parameter/parameter-1.png",
      "localised_name": 
      [
        "parameter-x",
        "1"
      ],
      "subgroup": "parameters",
      "order": "a",
      "parameter": true,
      "stack_size": 1
    },
    "parameter-2": 
    {
      "type": "item",
      "name": "parameter-2",
      "icon": "__base__/graphics/icons/parameter/parameter-2.png",
      "localised_name": 
      [
        "parameter-x",
        "2"
      ],
      "subgroup": "parameters",
      "order": "a",
      "parameter": true,
      "stack_size": 1
    },
    "parameter-3": 
    {
      "type": "item",
      "name": "parameter-3",
      "icon": "__base__/graphics/icons/parameter/parameter-3.png",
      "localised_name": 
      [
        "parameter-x",
        "3"
      ],
      "subgroup": "parameters",
      "order": "a",
      "parameter": true,
      "stack_size": 1
    },
    "parameter-4": 
    {
      "type": "item",
      "name": "parameter-4",
      "icon": "__base__/graphics/icons/parameter/parameter-4.png",
      "localised_name": 
      [
        "parameter-x",
        "4"
      ],
      "subgroup": "parameters",
      "order": "a",
      "parameter": true,
      "stack_size": 1
    },
    "parameter-5": 
    {
      "type": "item",
      "name": "parameter-5",
      "icon": "__base__/graphics/icons/parameter/parameter-5.png",
      "localised_name": 
      [
        "parameter-x",
        "5"
      ],
      "subgroup": "parameters",
      "order": "a",
      "parameter": true,
      "stack_size": 1
    },
    "parameter-6": 
    {
      "type": "item",
      "name": "parameter-6",
      "icon": "__base__/graphics/icons/parameter/parameter-6.png",
      "localised_name": 
      [
        "parameter-x",
        "6"
      ],
      "subgroup": "parameters",
      "order": "a",
      "parameter": true,
      "stack_size": 1
    },
    "parameter-7": 
    {
      "type": "item",
      "name": "parameter-7",
      "icon": "__base__/graphics/icons/parameter/parameter-7.png",
      "localised_name": 
      [
        "parameter-x",
        "7"
      ],
      "subgroup": "parameters",
      "order": "a",
      "parameter": true,
      "stack_size": 1
    },
    "parameter-8": 
    {
      "type": "item",
      "name": "parameter-8",
      "icon": "__base__/graphics/icons/parameter/parameter-8.png",
      "localised_name": 
      [
        "parameter-x",
        "8"
      ],
      "subgroup": "parameters",
      "order": "a",
      "parameter": true,
      "stack_size": 1
    },
    "parameter-9": 
    {
      "type": "item",
      "name": "parameter-9",
      "icon": "__base__/graphics/icons/parameter/parameter-9.png",
      "localised_name": 
      [
        "parameter-x",
        "9"
      ],
      "subgroup": "parameters",
      "order": "a",
      "parameter": true,
      "stack_size": 1
    },
    "stone-brick": 
    {
      "type": "item",
      "name": "stone-brick",
      "icon": "__base__/graphics/icons/stone-brick.png",
      "subgroup": "terrain",
      "order": "a[stone-brick]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/brick-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/brick-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/brick-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 100,
      "place_as_tile": 
      {
        "result": "stone-path",
        "condition_size": 1,
        "condition": 
        {
          "layers": 
          {
            "water_tile": true,
            "meltable": true
          }
        }
      }
    },
    "wood": 
    {
      "type": "item",
      "name": "wood",
      "icon": "__base__/graphics/icons/wood.png",
      "fuel_value": "2MJ",
      "fuel_category": "chemical",
      "subgroup": "raw-resource",
      "order": "a[wood]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/wood-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/wood-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/wood-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 100,
      "weight": 2000
    },
    "coal": 
    {
      "type": "item",
      "name": "coal",
      "icon": "__base__/graphics/icons/coal.png",
      "dark_background_icon": "__base__/graphics/icons/coal-dark-background.png",
      "pictures": 
      [
        
        {
          "size": 64,
          "filename": "__base__/graphics/icons/coal.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__base__/graphics/icons/coal-1.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__base__/graphics/icons/coal-2.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__base__/graphics/icons/coal-3.png",
          "scale": 0.5,
          "mipmap_count": 4
        }
      ],
      "fuel_category": "chemical",
      "fuel_value": "4MJ",
      "subgroup": "raw-resource",
      "order": "b[coal]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "weight": 2000,
      "random_tint_color": 
      [
        0.85,
        0.85,
        0.7,
        1
      ]
    },
    "stone": 
    {
      "type": "item",
      "name": "stone",
      "icon": "__base__/graphics/icons/stone.png",
      "pictures": 
      [
        
        {
          "size": 64,
          "filename": "__base__/graphics/icons/stone.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__base__/graphics/icons/stone-1.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__base__/graphics/icons/stone-2.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__base__/graphics/icons/stone-3.png",
          "scale": 0.5,
          "mipmap_count": 4
        }
      ],
      "subgroup": "raw-resource",
      "order": "d[stone]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "weight": 2000
    },
    "iron-ore": 
    {
      "type": "item",
      "name": "iron-ore",
      "icon": "__base__/graphics/icons/iron-ore.png",
      "pictures": 
      [
        
        {
          "size": 64,
          "filename": "__base__/graphics/icons/iron-ore.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__base__/graphics/icons/iron-ore-1.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__base__/graphics/icons/iron-ore-2.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__base__/graphics/icons/iron-ore-3.png",
          "scale": 0.5,
          "mipmap_count": 4
        }
      ],
      "subgroup": "raw-resource",
      "color_hint": 
      {
        "text": "I"
      },
      "order": "e[iron-ore]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "weight": 2000
    },
    "copper-ore": 
    {
      "type": "item",
      "name": "copper-ore",
      "icon": "__base__/graphics/icons/copper-ore.png",
      "pictures": 
      [
        
        {
          "size": 64,
          "filename": "__base__/graphics/icons/copper-ore.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__base__/graphics/icons/copper-ore-1.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__base__/graphics/icons/copper-ore-2.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__base__/graphics/icons/copper-ore-3.png",
          "scale": 0.5,
          "mipmap_count": 4
        }
      ],
      "subgroup": "raw-resource",
      "color_hint": 
      {
        "text": "C"
      },
      "order": "f[copper-ore]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "weight": 2000
    },
    "iron-plate": 
    {
      "type": "item",
      "name": "iron-plate",
      "icon": "__base__/graphics/icons/iron-plate.png",
      "subgroup": "raw-material",
      "color_hint": 
      {
        "text": "I"
      },
      "order": "a[smelting]-a[iron-plate]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 100,
      "random_tint_color": 
      [
        1,
        0.95,
        0.9,
        1
      ]
    },
    "copper-plate": 
    {
      "type": "item",
      "name": "copper-plate",
      "icon": "__base__/graphics/icons/copper-plate.png",
      "subgroup": "raw-material",
      "color_hint": 
      {
        "text": "C"
      },
      "order": "a[smelting]-b[copper-plate]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 100
    },
    "copper-cable": 
    {
      "type": "item",
      "name": "copper-cable",
      "icon": "__base__/graphics/icons/copper-cable.png",
      "subgroup": "intermediate-product",
      "order": "a[basic-intermediates]-c[copper-cable]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/wire-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/wire-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/wire-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 200,
      "weight": 250,
      "ingredient_to_weight_coefficient": 0.25
    },
    "iron-stick": 
    {
      "type": "item",
      "name": "iron-stick",
      "icon": "__base__/graphics/icons/iron-stick.png",
      "subgroup": "intermediate-product",
      "order": "a[basic-intermediates]-b[iron-stick]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 100,
      "weight": 500,
      "random_tint_color": 
      [
        1,
        0.95,
        0.9,
        1
      ]
    },
    "iron-gear-wheel": 
    {
      "type": "item",
      "name": "iron-gear-wheel",
      "icon": "__base__/graphics/icons/iron-gear-wheel.png",
      "subgroup": "intermediate-product",
      "order": "a[basic-intermediates]-a[iron-gear-wheel]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 100,
      "random_tint_color": 
      [
        1,
        0.95,
        0.9,
        1
      ]
    },
    "electronic-circuit": 
    {
      "type": "item",
      "name": "electronic-circuit",
      "icon": "__base__/graphics/icons/electronic-circuit.png",
      "subgroup": "intermediate-product",
      "color_hint": 
      {
        "text": "1"
      },
      "order": "b[circuits]-a[electronic-circuit]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 200,
      "ingredient_to_weight_coefficient": 0.28000000000000003552713678800500929355621337890625
    },
    "wooden-chest": 
    {
      "type": "item",
      "name": "wooden-chest",
      "icon": "__base__/graphics/icons/wooden-chest.png",
      "subgroup": "storage",
      "order": "a[items]-a[wooden-chest]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/wood-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/wood-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/wood-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "wooden-chest",
      "stack_size": 50
    },
    "stone-furnace": 
    {
      "type": "item",
      "name": "stone-furnace",
      "icon": "__base__/graphics/icons/stone-furnace.png",
      "subgroup": "smelting-machine",
      "order": "a[stone-furnace]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/brick-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/brick-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/brick-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "stone-furnace",
      "stack_size": 50
    },
    "burner-mining-drill": 
    {
      "type": "item",
      "name": "burner-mining-drill",
      "icon": "__base__/graphics/icons/burner-mining-drill.png",
      "subgroup": "extraction-machine",
      "order": "a[items]-a[burner-mining-drill]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/drill-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/drill-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/drill-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "burner-mining-drill",
      "stack_size": 50,
      "random_tint_color": 
      [
        1,
        0.95,
        0.9,
        1
      ]
    },
    "electric-mining-drill": 
    {
      "type": "item",
      "name": "electric-mining-drill",
      "icon": "__base__/graphics/icons/electric-mining-drill.png",
      "subgroup": "extraction-machine",
      "order": "a[items]-b[electric-mining-drill]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/drill-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/drill-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/drill-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "electric-mining-drill",
      "stack_size": 50
    },
    "burner-inserter": 
    {
      "type": "item",
      "name": "burner-inserter",
      "icon": "__base__/graphics/icons/burner-inserter.png",
      "subgroup": "inserter",
      "color_hint": 
      {
        "text": "B"
      },
      "order": "a[burner-inserter]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/inserter-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/inserter-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/inserter-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "burner-inserter",
      "stack_size": 50,
      "random_tint_color": 
      [
        1,
        0.95,
        0.9,
        1
      ]
    },
    "inserter": 
    {
      "type": "item",
      "name": "inserter",
      "icon": "__base__/graphics/icons/inserter.png",
      "subgroup": "inserter",
      "color_hint": 
      {
        "text": "Y"
      },
      "order": "b[inserter]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/inserter-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/inserter-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/inserter-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "inserter",
      "stack_size": 50
    },
    "fast-inserter": 
    {
      "type": "item",
      "name": "fast-inserter",
      "icon": "__base__/graphics/icons/fast-inserter.png",
      "subgroup": "inserter",
      "color_hint": 
      {
        "text": "F"
      },
      "order": "d[fast-inserter]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/inserter-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/inserter-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/inserter-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "fast-inserter",
      "stack_size": 50
    },
    "long-handed-inserter": 
    {
      "type": "item",
      "name": "long-handed-inserter",
      "icon": "__base__/graphics/icons/long-handed-inserter.png",
      "subgroup": "inserter",
      "color_hint": 
      {
        "text": "L"
      },
      "order": "c[long-handed-inserter]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/inserter-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/inserter-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/inserter-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "long-handed-inserter",
      "stack_size": 50
    },
    "offshore-pump": 
    {
      "type": "item",
      "name": "offshore-pump",
      "icon": "__base__/graphics/icons/offshore-pump.png",
      "subgroup": "extraction-machine",
      "order": "b[fluids]-a[offshore-pump]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/fluid-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/fluid-inventory-pickup.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/fluid-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "offshore-pump",
      "stack_size": 20
    },
    "pipe": 
    {
      "type": "item",
      "name": "pipe",
      "icon": "__base__/graphics/icons/pipe.png",
      "subgroup": "energy-pipe-distribution",
      "order": "a[pipe]-a[pipe]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "pipe",
      "stack_size": 100,
      "weight": 5000,
      "random_tint_color": 
      [
        1,
        0.95,
        0.9,
        1
      ]
    },
    "boiler": 
    {
      "type": "item",
      "name": "boiler",
      "icon": "__base__/graphics/icons/boiler.png",
      "subgroup": "energy",
      "order": "b[steam-power]-a[boiler]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/steam-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/steam-inventory-pickup.ogg",
        "volume": 0.4,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/steam-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "boiler",
      "stack_size": 50,
      "random_tint_color": 
      [
        1,
        0.95,
        0.9,
        1
      ]
    },
    "steam-engine": 
    {
      "type": "item",
      "name": "steam-engine",
      "icon": "__base__/graphics/icons/steam-engine.png",
      "subgroup": "energy",
      "order": "b[steam-power]-b[steam-engine]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/steam-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/steam-inventory-pickup.ogg",
        "volume": 0.4,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/steam-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "steam-engine",
      "stack_size": 10,
      "random_tint_color": 
      [
        1,
        0.95,
        0.9,
        1
      ]
    },
    "small-electric-pole": 
    {
      "type": "item",
      "name": "small-electric-pole",
      "icon": "__base__/graphics/icons/small-electric-pole.png",
      "subgroup": "energy-pipe-distribution",
      "order": "a[energy]-a[small-electric-pole]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "small-electric-pole",
      "stack_size": 50
    },
    "radar": 
    {
      "type": "item",
      "name": "radar",
      "icon": "__base__/graphics/icons/radar.png",
      "subgroup": "defensive-structure",
      "order": "d[radar]-a[radar]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-large-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "radar",
      "stack_size": 50,
      "random_tint_color": 
      [
        1,
        0.95,
        0.9,
        1
      ]
    },
    "small-lamp": 
    {
      "type": "item",
      "name": "small-lamp",
      "icon": "__base__/graphics/icons/small-lamp.png",
      "subgroup": "circuit-network",
      "order": "a[light]-a[small-lamp]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "small-lamp",
      "stack_size": 50
    },
    "pipe-to-ground": 
    {
      "type": "item",
      "name": "pipe-to-ground",
      "icon": "__base__/graphics/icons/pipe-to-ground.png",
      "subgroup": "energy-pipe-distribution",
      "order": "a[pipe]-b[pipe-to-ground]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "pipe-to-ground",
      "stack_size": 50,
      "random_tint_color": 
      [
        1,
        0.95,
        0.9,
        1
      ]
    },
    "assembling-machine-1": 
    {
      "type": "item",
      "name": "assembling-machine-1",
      "icon": "__base__/graphics/icons/assembling-machine-1.png",
      "subgroup": "production-machine",
      "color_hint": 
      {
        "text": "1"
      },
      "order": "a[assembling-machine-1]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "assembling-machine-1",
      "stack_size": 50,
      "random_tint_color": 
      [
        1,
        0.95,
        0.9,
        1
      ]
    },
    "assembling-machine-2": 
    {
      "type": "item",
      "name": "assembling-machine-2",
      "icon": "__base__/graphics/icons/assembling-machine-2.png",
      "subgroup": "production-machine",
      "color_hint": 
      {
        "text": "2"
      },
      "order": "b[assembling-machine-2]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "assembling-machine-2",
      "stack_size": 50
    },
    "red-wire": 
    {
      "type": "item",
      "name": "red-wire",
      "icon": "__base__/graphics/icons/red-wire.png",
      "flags": 
      [
        "only-in-cursor",
        "not-stackable",
        "spawnable"
      ],
      "subgroup": "spawnables",
      "color_hint": 
      {
        "text": "R"
      },
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/wire-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/wire-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/wire-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 1
    },
    "green-wire": 
    {
      "type": "item",
      "name": "green-wire",
      "icon": "__base__/graphics/icons/green-wire.png",
      "flags": 
      [
        "only-in-cursor",
        "not-stackable",
        "spawnable"
      ],
      "subgroup": "spawnables",
      "color_hint": 
      {
        "text": "G"
      },
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/wire-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/wire-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/wire-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 1
    },
    "copper-wire": 
    {
      "type": "item",
      "name": "copper-wire",
      "icon": "__base__/graphics/icons/copper-wire.png",
      "flags": 
      [
        "only-in-cursor",
        "not-stackable",
        "spawnable"
      ],
      "subgroup": "spawnables",
      "color_hint": 
      {
        "text": "C"
      },
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/wire-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/wire-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/wire-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 1
    },
    "stone-wall": 
    {
      "type": "item",
      "name": "stone-wall",
      "icon": "__base__/graphics/icons/wall.png",
      "subgroup": "defensive-structure",
      "order": "a[stone-wall]-a[stone-wall]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/concrete-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/concrete-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/concrete-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "stone-wall",
      "stack_size": 100
    },
    "lab": 
    {
      "type": "item",
      "name": "lab",
      "icon": "__base__/graphics/icons/lab.png",
      "subgroup": "production-machine",
      "order": "z[lab]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/lab-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/lab-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/lab-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "lab",
      "stack_size": 10
    },
    "steel-plate": 
    {
      "type": "item",
      "name": "steel-plate",
      "icon": "__base__/graphics/icons/steel-plate.png",
      "subgroup": "raw-material",
      "order": "a[smelting]-c[steel-plate]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 100,
      "random_tint_color": 
      [
        1,
        0.95,
        0.9,
        1
      ]
    },
    "engine-unit": 
    {
      "type": "item",
      "name": "engine-unit",
      "icon": "__base__/graphics/icons/engine-unit.png",
      "subgroup": "intermediate-product",
      "order": "c[advanced-intermediates]-a[engine-unit]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-large-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "weight": 2500
    },
    "electric-furnace": 
    {
      "type": "item",
      "name": "electric-furnace",
      "icon": "__base__/graphics/icons/electric-furnace.png",
      "subgroup": "smelting-machine",
      "order": "c[electric-furnace]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/electric-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/electric-large-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/electric-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "electric-furnace",
      "stack_size": 50,
      "weight": 20000
    },
    "solid-fuel": 
    {
      "type": "item",
      "name": "solid-fuel",
      "icon": "__base__/graphics/icons/solid-fuel.png",
      "fuel_category": "chemical",
      "fuel_value": "12MJ",
      "fuel_acceleration_multiplier": 1.19999999999999996447286321199499070644378662109375,
      "fuel_top_speed_multiplier": 1.0500000000000000444089209850062616169452667236328125,
      "subgroup": "raw-material",
      "order": "b[chemistry]-a[solid-fuel]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/solid-fuel-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/solid-fuel-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/solid-fuel-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "weight": 1000,
      "random_tint_color": 
      [
        0.85,
        0.85,
        0.7,
        1
      ]
    },
    "rocket-fuel": 
    {
      "type": "item",
      "name": "rocket-fuel",
      "icon": "__base__/graphics/icons/rocket-fuel.png",
      "fuel_category": "chemical",
      "fuel_value": "100MJ",
      "fuel_acceleration_multiplier": 1.8,
      "fuel_top_speed_multiplier": 1.149999999999999911182158029987476766109466552734375,
      "subgroup": "intermediate-product",
      "order": "d[rocket-parts]-b[rocket-fuel]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/fuel-cell-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/fuel-cell-inventory-pickup.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/fuel-cell-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 20,
      "weight": 10000
    },
    "iron-chest": 
    {
      "type": "item",
      "name": "iron-chest",
      "icon": "__base__/graphics/icons/iron-chest.png",
      "subgroup": "storage",
      "order": "a[items]-b[iron-chest]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-chest-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-chest-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-chest-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "iron-chest",
      "stack_size": 50,
      "random_tint_color": 
      [
        1,
        0.95,
        0.9,
        1
      ]
    },
    "big-electric-pole": 
    {
      "type": "item",
      "name": "big-electric-pole",
      "icon": "__base__/graphics/icons/big-electric-pole.png",
      "subgroup": "energy-pipe-distribution",
      "order": "a[energy]-c[big-electric-pole]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/electric-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/electric-large-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/electric-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "big-electric-pole",
      "stack_size": 50,
      "random_tint_color": 
      [
        1,
        0.95,
        0.9,
        1
      ]
    },
    "medium-electric-pole": 
    {
      "type": "item",
      "name": "medium-electric-pole",
      "icon": "__base__/graphics/icons/medium-electric-pole.png",
      "subgroup": "energy-pipe-distribution",
      "order": "a[energy]-b[medium-electric-pole]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/electric-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/electric-large-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/electric-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "medium-electric-pole",
      "stack_size": 50
    },
    "steel-furnace": 
    {
      "type": "item",
      "name": "steel-furnace",
      "icon": "__base__/graphics/icons/steel-furnace.png",
      "subgroup": "smelting-machine",
      "order": "b[steel-furnace]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-large-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "steel-furnace",
      "stack_size": 50
    },
    "gate": 
    {
      "type": "item",
      "name": "gate",
      "icon": "__base__/graphics/icons/gate.png",
      "subgroup": "defensive-structure",
      "order": "a[wall]-b[gate]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/concrete-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/concrete-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/concrete-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "gate",
      "stack_size": 50
    },
    "steel-chest": 
    {
      "type": "item",
      "name": "steel-chest",
      "icon": "__base__/graphics/icons/steel-chest.png",
      "subgroup": "storage",
      "order": "a[items]-c[steel-chest]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-chest-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-chest-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-chest-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "steel-chest",
      "stack_size": 50
    },
    "solar-panel": 
    {
      "type": "item",
      "name": "solar-panel",
      "icon": "__base__/graphics/icons/solar-panel.png",
      "subgroup": "energy",
      "order": "d[solar-panel]-a[solar-panel]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/electric-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/electric-large-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/electric-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "solar-panel",
      "stack_size": 50
    },
    "train-stop": 
    {
      "type": "item",
      "name": "train-stop",
      "icon": "__base__/graphics/icons/train-stop.png",
      "subgroup": "train-transport",
      "order": "b[train-automation]-a[train-stop]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/train-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/train-inventory-pickup.ogg",
        "volume": 0.4,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/train-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "train-stop",
      "stack_size": 10
    },
    "rail-signal": 
    {
      "type": "item",
      "name": "rail-signal",
      "icon": "__base__/graphics/icons/rail-signal.png",
      "subgroup": "train-transport",
      "order": "b[train-automation]-b[rail-signal]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/rail-signal-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/rail-signal-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/rail-signal-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "rail-signal",
      "stack_size": 50
    },
    "rail-chain-signal": 
    {
      "type": "item",
      "name": "rail-chain-signal",
      "icon": "__base__/graphics/icons/rail-chain-signal.png",
      "subgroup": "train-transport",
      "order": "b[train-automation]-c[rail-chain-signal]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/rail-signal-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/rail-signal-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/rail-signal-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "rail-chain-signal",
      "stack_size": 50
    },
    "concrete": 
    {
      "type": "item",
      "name": "concrete",
      "icon": "__base__/graphics/icons/concrete.png",
      "subgroup": "terrain",
      "order": "b[concrete]-a[plain]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/concrete-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/concrete-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/concrete-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 100,
      "weight": 10000,
      "place_as_tile": 
      {
        "result": "concrete",
        "condition_size": 1,
        "condition": 
        {
          "layers": 
          {
            "water_tile": true
          }
        }
      },
      "random_tint_color": 
      [
        0.92000000000000010658141036401502788066864013671875,
        0.92000000000000010658141036401502788066864013671875,
        0.9699999999999999289457264239899814128875732421875,
        1
      ]
    },
    "refined-concrete": 
    {
      "type": "item",
      "name": "refined-concrete",
      "icon": "__base__/graphics/icons/refined-concrete.png",
      "subgroup": "terrain",
      "order": "b[concrete]-c[refined]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/concrete-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/concrete-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/concrete-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 100,
      "weight": 10000,
      "place_as_tile": 
      {
        "result": "refined-concrete",
        "condition_size": 1,
        "condition": 
        {
          "layers": 
          {
            "water_tile": true
          }
        }
      },
      "random_tint_color": 
      [
        0.92000000000000010658141036401502788066864013671875,
        0.92000000000000010658141036401502788066864013671875,
        0.9699999999999999289457264239899814128875732421875,
        1
      ]
    },
    "hazard-concrete": 
    {
      "type": "item",
      "name": "hazard-concrete",
      "icon": "__base__/graphics/icons/hazard-concrete.png",
      "subgroup": "terrain",
      "order": "b[concrete]-b[hazard]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/concrete-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/concrete-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/concrete-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 100,
      "weight": 10000,
      "place_as_tile": 
      {
        "result": "hazard-concrete-left",
        "condition_size": 1,
        "condition": 
        {
          "layers": 
          {
            "water_tile": true
          }
        }
      },
      "random_tint_color": 
      [
        0.92000000000000010658141036401502788066864013671875,
        0.92000000000000010658141036401502788066864013671875,
        0.9699999999999999289457264239899814128875732421875,
        1
      ]
    },
    "refined-hazard-concrete": 
    {
      "type": "item",
      "name": "refined-hazard-concrete",
      "icon": "__base__/graphics/icons/refined-hazard-concrete.png",
      "subgroup": "terrain",
      "order": "b[concrete]-d[refined-hazard]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/concrete-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/concrete-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/concrete-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 100,
      "weight": 10000,
      "place_as_tile": 
      {
        "result": "refined-hazard-concrete-left",
        "condition_size": 1,
        "condition": 
        {
          "layers": 
          {
            "water_tile": true
          }
        }
      },
      "random_tint_color": 
      [
        0.92000000000000010658141036401502788066864013671875,
        0.92000000000000010658141036401502788066864013671875,
        0.9699999999999999289457264239899814128875732421875,
        1
      ]
    },
    "landfill": 
    {
      "type": "item",
      "name": "landfill",
      "icon": "__base__/graphics/icons/landfill.png",
      "subgroup": "terrain",
      "order": "c[landfill]-a[dirt]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/landfill-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/landfill-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/landfill-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 100,
      "place_as_tile": 
      {
        "result": "landfill",
        "condition_size": 1,
        "condition": 
        {
          "layers": 
          {
            "ground_tile": true
          }
        },
        "tile_condition": 
        [
          "water",
          "deepwater",
          "water-green",
          "deepwater-green",
          "water-mud",
          "water-shallow",
          "wetland-light-green-slime",
          "wetland-green-slime",
          "wetland-light-dead-skin",
          "wetland-dead-skin",
          "wetland-pink-tentacle",
          "wetland-red-tentacle",
          "wetland-yumako",
          "wetland-jellynut",
          "wetland-blue-slime",
          "gleba-deep-lake"
        ]
      },
      "random_tint_color": 
      [
        0.92000000000000010658141036401502788066864013671875,
        0.9699999999999999289457264239899814128875732421875,
        0.92000000000000010658141036401502788066864013671875,
        1
      ]
    },
    "accumulator": 
    {
      "type": "item",
      "name": "accumulator",
      "icon": "__base__/graphics/icons/accumulator.png",
      "subgroup": "energy",
      "order": "e[accumulator]-a[accumulator]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/electric-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/electric-large-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/electric-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "accumulator",
      "stack_size": 50
    },
    "uranium-ore": 
    {
      "type": "item",
      "name": "uranium-ore",
      "icon": "__base__/graphics/icons/uranium-ore.png",
      "pictures": 
      [
        
        {
          "layers": 
          [
            
            {
              "filename": "__base__/graphics/icons/uranium-ore.png",
              "size": 64,
              "scale": 0.5,
              "mipmap_count": 4
            },
            
            {
              "filename": "__base__/graphics/icons/uranium-ore.png",
              "blend_mode": "additive",
              "draw_as_light": true,
              "tint": 
              [
                0.3,
                0.3,
                0.3,
                0.3
              ],
              "size": 64,
              "scale": 0.5
            }
          ]
        },
        
        {
          "layers": 
          [
            
            {
              "filename": "__base__/graphics/icons/uranium-ore-1.png",
              "size": 64,
              "scale": 0.5,
              "mipmap_count": 4
            },
            
            {
              "filename": "__base__/graphics/icons/uranium-ore-1.png",
              "blend_mode": "additive",
              "draw_as_light": true,
              "tint": 
              [
                0.3,
                0.3,
                0.3,
                0.3
              ],
              "size": 64,
              "scale": 0.5
            }
          ]
        },
        
        {
          "layers": 
          [
            
            {
              "filename": "__base__/graphics/icons/uranium-ore-2.png",
              "size": 64,
              "scale": 0.5,
              "mipmap_count": 4
            },
            
            {
              "filename": "__base__/graphics/icons/uranium-ore-2.png",
              "blend_mode": "additive",
              "draw_as_light": true,
              "tint": 
              [
                0.3,
                0.3,
                0.3,
                0.3
              ],
              "size": 64,
              "scale": 0.5
            }
          ]
        },
        
        {
          "layers": 
          [
            
            {
              "filename": "__base__/graphics/icons/uranium-ore-3.png",
              "size": 64,
              "scale": 0.5,
              "mipmap_count": 4
            },
            
            {
              "filename": "__base__/graphics/icons/uranium-ore-3.png",
              "blend_mode": "additive",
              "draw_as_light": true,
              "tint": 
              [
                0.3,
                0.3,
                0.3,
                0.3
              ],
              "size": 64,
              "scale": 0.5
            }
          ]
        }
      ],
      "subgroup": "raw-resource",
      "order": "g[uranium-ore]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/nuclear-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/nuclear-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/nuclear-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "weight": 5000
    },
    "transport-belt": 
    {
      "type": "item",
      "name": "transport-belt",
      "icon": "__base__/graphics/icons/transport-belt.png",
      "subgroup": "belt",
      "color_hint": 
      {
        "text": "1"
      },
      "order": "a[transport-belt]-a[transport-belt]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/transport-belt-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/transport-belt-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/transport-belt-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "transport-belt",
      "stack_size": 100
    },
    "fast-transport-belt": 
    {
      "type": "item",
      "name": "fast-transport-belt",
      "icon": "__base__/graphics/icons/fast-transport-belt.png",
      "subgroup": "belt",
      "color_hint": 
      {
        "text": "2"
      },
      "order": "a[transport-belt]-b[fast-transport-belt]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/transport-belt-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/transport-belt-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/transport-belt-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "fast-transport-belt",
      "stack_size": 100
    },
    "express-transport-belt": 
    {
      "type": "item",
      "name": "express-transport-belt",
      "icon": "__base__/graphics/icons/express-transport-belt.png",
      "subgroup": "belt",
      "color_hint": 
      {
        "text": "3"
      },
      "order": "a[transport-belt]-c[express-transport-belt]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/transport-belt-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/transport-belt-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/transport-belt-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "express-transport-belt",
      "stack_size": 100,
      "weight": 10000
    },
    "bulk-inserter": 
    {
      "type": "item",
      "name": "bulk-inserter",
      "icon": "__base__/graphics/icons/bulk-inserter.png",
      "subgroup": "inserter",
      "color_hint": 
      {
        "text": "B"
      },
      "order": "f[bulk-inserter]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/inserter-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/inserter-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/inserter-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "bulk-inserter",
      "stack_size": 50,
      "weight": 20000
    },
    "assembling-machine-3": 
    {
      "type": "item",
      "name": "assembling-machine-3",
      "icon": "__base__/graphics/icons/assembling-machine-3.png",
      "subgroup": "production-machine",
      "order": "c[assembling-machine-3]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "assembling-machine-3",
      "stack_size": 50,
      "weight": 40000
    },
    "underground-belt": 
    {
      "type": "item",
      "name": "underground-belt",
      "icon": "__base__/graphics/icons/underground-belt.png",
      "subgroup": "belt",
      "color_hint": 
      {
        "text": "1"
      },
      "order": "b[underground-belt]-a[underground-belt]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "underground-belt",
      "stack_size": 50
    },
    "fast-underground-belt": 
    {
      "type": "item",
      "name": "fast-underground-belt",
      "icon": "__base__/graphics/icons/fast-underground-belt.png",
      "subgroup": "belt",
      "color_hint": 
      {
        "text": "2"
      },
      "order": "b[underground-belt]-b[fast-underground-belt]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "fast-underground-belt",
      "stack_size": 50
    },
    "express-underground-belt": 
    {
      "type": "item",
      "name": "express-underground-belt",
      "icon": "__base__/graphics/icons/express-underground-belt.png",
      "subgroup": "belt",
      "color_hint": 
      {
        "text": "3"
      },
      "order": "b[underground-belt]-c[express-underground-belt]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "express-underground-belt",
      "stack_size": 50,
      "weight": 20000
    },
    "splitter": 
    {
      "type": "item",
      "name": "splitter",
      "icon": "__base__/graphics/icons/splitter.png",
      "subgroup": "belt",
      "color_hint": 
      {
        "text": "1"
      },
      "order": "c[splitter]-a[splitter]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "splitter",
      "stack_size": 50,
      "weight": 20000
    },
    "lane-splitter": 
    {
      "type": "item",
      "name": "lane-splitter",
      "icons": 
      [
        
        {
          "icon": "__base__/graphics/icons/splitter.png"
        },
        
        {
          "icon": "__base__/graphics/icons/signal/signal_1.png",
          "scale": 0.25,
          "shift": 
          [
            8,
            -8
          ]
        }
      ],
      "hidden": true,
      "subgroup": "other",
      "order": "b[items]-b[lane-splitter]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "lane-splitter",
      "stack_size": 50,
      "weight": 10000
    },
    "fast-splitter": 
    {
      "type": "item",
      "name": "fast-splitter",
      "icon": "__base__/graphics/icons/fast-splitter.png",
      "subgroup": "belt",
      "color_hint": 
      {
        "text": "2"
      },
      "order": "c[splitter]-b[fast-splitter]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "fast-splitter",
      "stack_size": 50
    },
    "express-splitter": 
    {
      "type": "item",
      "name": "express-splitter",
      "icon": "__base__/graphics/icons/express-splitter.png",
      "subgroup": "belt",
      "color_hint": 
      {
        "text": "3"
      },
      "order": "c[splitter]-c[express-splitter]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "express-splitter",
      "stack_size": 50,
      "weight": 20000
    },
    "loader": 
    {
      "type": "item",
      "name": "loader",
      "icon": "__base__/graphics/icons/loader.png",
      "hidden": true,
      "subgroup": "bpsb-loaders",
      "color_hint": 
      {
        "text": "1"
      },
      "order": "a-a",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "loader",
      "stack_size": 50
    },
    "fast-loader": 
    {
      "type": "item",
      "name": "fast-loader",
      "icon": "__base__/graphics/icons/fast-loader.png",
      "hidden": true,
      "subgroup": "bpsb-loaders",
      "color_hint": 
      {
        "text": "2"
      },
      "order": "a-b",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "fast-loader",
      "stack_size": 50
    },
    "express-loader": 
    {
      "type": "item",
      "name": "express-loader",
      "icon": "__base__/graphics/icons/express-loader.png",
      "hidden": true,
      "subgroup": "bpsb-loaders",
      "color_hint": 
      {
        "text": "3"
      },
      "order": "a-c",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "express-loader",
      "stack_size": 50
    },
    "advanced-circuit": 
    {
      "type": "item",
      "name": "advanced-circuit",
      "icon": "__base__/graphics/icons/advanced-circuit.png",
      "subgroup": "intermediate-product",
      "color_hint": 
      {
        "text": "2"
      },
      "order": "b[circuits]-b[advanced-circuit]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 200,
      "ingredient_to_weight_coefficient": 0.28000000000000003552713678800500929355621337890625
    },
    "processing-unit": 
    {
      "type": "item",
      "name": "processing-unit",
      "icon": "__base__/graphics/icons/processing-unit.png",
      "subgroup": "intermediate-product",
      "color_hint": 
      {
        "text": "3"
      },
      "order": "b[circuits]-c[processing-unit]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 100,
      "ingredient_to_weight_coefficient": 0.25
    },
    "logistic-robot": 
    {
      "type": "item",
      "name": "logistic-robot",
      "icon": "__base__/graphics/icons/logistic-robot.png",
      "subgroup": "logistic-network",
      "order": "a[robot]-a[logistic-robot]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/robotic-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/robotic-inventory-pickup.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/robotic-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "logistic-robot",
      "stack_size": 50,
      "random_tint_color": 
      [
        1,
        0.95,
        0.9,
        1
      ]
    },
    "construction-robot": 
    {
      "type": "item",
      "name": "construction-robot",
      "icon": "__base__/graphics/icons/construction-robot.png",
      "subgroup": "logistic-network",
      "order": "a[robot]-b[construction-robot]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/robotic-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/robotic-inventory-pickup.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/robotic-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "construction-robot",
      "stack_size": 50,
      "random_tint_color": 
      [
        1,
        0.95,
        0.9,
        1
      ]
    },
    "passive-provider-chest": 
    {
      "type": "item",
      "name": "passive-provider-chest",
      "icon": "__base__/graphics/icons/passive-provider-chest.png",
      "subgroup": "logistic-network",
      "color_hint": 
      {
        "text": "P"
      },
      "order": "b[storage]-c[passive-provider-chest]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-chest-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-chest-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-chest-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "passive-provider-chest",
      "stack_size": 50
    },
    "active-provider-chest": 
    {
      "type": "item",
      "name": "active-provider-chest",
      "icon": "__base__/graphics/icons/active-provider-chest.png",
      "subgroup": "logistic-network",
      "color_hint": 
      {
        "text": "A"
      },
      "order": "b[storage]-c[active-provider-chest]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-chest-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-chest-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-chest-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "active-provider-chest",
      "stack_size": 50
    },
    "storage-chest": 
    {
      "type": "item",
      "name": "storage-chest",
      "icon": "__base__/graphics/icons/storage-chest.png",
      "subgroup": "logistic-network",
      "color_hint": 
      {
        "text": "S"
      },
      "order": "b[storage]-c[storage-chest]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-chest-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-chest-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-chest-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "storage-chest",
      "stack_size": 50
    },
    "buffer-chest": 
    {
      "type": "item",
      "name": "buffer-chest",
      "icon": "__base__/graphics/icons/buffer-chest.png",
      "subgroup": "logistic-network",
      "color_hint": 
      {
        "text": "B"
      },
      "order": "b[storage]-d[buffer-chest]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-chest-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-chest-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-chest-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "buffer-chest",
      "stack_size": 50
    },
    "requester-chest": 
    {
      "type": "item",
      "name": "requester-chest",
      "icon": "__base__/graphics/icons/requester-chest.png",
      "subgroup": "logistic-network",
      "color_hint": 
      {
        "text": "R"
      },
      "order": "b[storage]-e[requester-chest]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-chest-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-chest-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-chest-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "requester-chest",
      "stack_size": 50
    },
    "rocket-silo": 
    {
      "type": "item",
      "name": "rocket-silo",
      "icon": "__base__/graphics/icons/rocket-silo.png",
      "subgroup": "space-interactors",
      "order": "a[rocket-silo]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/mechanical-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/mechanical-large-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/mechanical-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "rocket-silo",
      "weight": 10000000,
      "stack_size": 1,
      "flags": 
      [
        "draw-logistic-overlay"
      ]
    },
    "cargo-landing-pad": 
    {
      "type": "item",
      "name": "cargo-landing-pad",
      "icon": "__base__/graphics/icons/cargo-landing-pad.png",
      "subgroup": "space-interactors",
      "order": "b[cargo-landing-pad]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/mechanical-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/mechanical-large-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/mechanical-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "cargo-landing-pad",
      "stack_size": 1,
      "weight": 1000000
    },
    "roboport": 
    {
      "type": "item",
      "name": "roboport",
      "icon": "__base__/graphics/icons/roboport.png",
      "subgroup": "logistic-network",
      "order": "c[signal]-a[roboport]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/roboport-inventory-move.ogg",
        "volume": 0.45,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/roboport-inventory-pickup.ogg",
        "volume": 0.35,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/roboport-inventory-move.ogg",
        "volume": 0.45,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "roboport",
      "stack_size": 10,
      "weight": 100000,
      "random_tint_color": 
      [
        1,
        0.95,
        0.9,
        1
      ]
    },
    "coin": 
    {
      "type": "item",
      "name": "coin",
      "icon": "__base__/graphics/icons/coin.png",
      "hidden": true,
      "subgroup": "science-pack",
      "order": "y",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/coin-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/coin-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/coin-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 100000
    },
    "substation": 
    {
      "type": "item",
      "name": "substation",
      "icon": "__base__/graphics/icons/substation.png",
      "subgroup": "energy-pipe-distribution",
      "order": "a[energy]-d[substation]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/electric-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/electric-large-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/electric-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "substation",
      "stack_size": 50,
      "random_tint_color": 
      [
        1,
        0.95,
        0.9,
        1
      ]
    },
    "beacon": 
    {
      "type": "item",
      "name": "beacon",
      "icon": "__base__/graphics/icons/beacon.png",
      "subgroup": "module",
      "order": "a[beacon]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "beacon",
      "stack_size": 20,
      "random_tint_color": 
      [
        1,
        0.95,
        0.9,
        1
      ]
    },
    "storage-tank": 
    {
      "type": "item",
      "name": "storage-tank",
      "icon": "__base__/graphics/icons/storage-tank.png",
      "subgroup": "storage",
      "order": "b[fluid]-a[storage-tank]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-large-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "storage-tank",
      "stack_size": 50
    },
    "pump": 
    {
      "type": "item",
      "name": "pump",
      "icon": "__base__/graphics/icons/pump.png",
      "subgroup": "energy-pipe-distribution",
      "order": "b[pipe]-c[pump]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/fluid-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/fluid-inventory-pickup.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/fluid-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "pump",
      "stack_size": 50,
      "random_tint_color": 
      [
        1,
        0.95,
        0.9,
        1
      ]
    },
    "pumpjack": 
    {
      "type": "item",
      "name": "pumpjack",
      "icon": "__base__/graphics/icons/pumpjack.png",
      "subgroup": "extraction-machine",
      "order": "b[fluids]-b[pumpjack]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/pumpjack-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/pumpjack-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/pumpjack-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "pumpjack",
      "stack_size": 20
    },
    "oil-refinery": 
    {
      "type": "item",
      "name": "oil-refinery",
      "icon": "__base__/graphics/icons/oil-refinery.png",
      "subgroup": "production-machine",
      "order": "d[refinery]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/fluid-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/fluid-inventory-pickup.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/fluid-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "oil-refinery",
      "stack_size": 10
    },
    "chemical-plant": 
    {
      "type": "item",
      "name": "chemical-plant",
      "icon": "__base__/graphics/icons/chemical-plant.png",
      "subgroup": "production-machine",
      "order": "e[chemical-plant]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/fluid-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/fluid-inventory-pickup.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/fluid-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "chemical-plant",
      "stack_size": 10
    },
    "sulfur": 
    {
      "type": "item",
      "name": "sulfur",
      "icon": "__base__/graphics/icons/sulfur.png",
      "subgroup": "raw-material",
      "order": "b[chemistry]-c[sulfur]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/sulfur-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/sulfur-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "weight": 1000
    },
    "barrel": 
    {
      "type": "item",
      "name": "barrel",
      "icon": "__base__/graphics/icons/fluid/barreling/empty-barrel.png",
      "subgroup": "intermediate-product",
      "order": "a[basic-intermediates]-d[empty-barrel]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-chest-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-chest-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-chest-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 10,
      "weight": 5000,
      "random_tint_color": 
      [
        1,
        0.95,
        0.9,
        1
      ]
    },
    "plastic-bar": 
    {
      "type": "item",
      "name": "plastic-bar",
      "icon": "__base__/graphics/icons/plastic-bar.png",
      "subgroup": "raw-material",
      "order": "b[chemistry]-b[plastic-bar]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/plastic-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/plastic-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/plastic-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 100,
      "weight": 500,
      "random_tint_color": 
      [
        0.92000000000000010658141036401502788066864013671875,
        0.92000000000000010658141036401502788066864013671875,
        0.9699999999999999289457264239899814128875732421875,
        1
      ]
    },
    "electric-engine-unit": 
    {
      "type": "item",
      "name": "electric-engine-unit",
      "icon": "__base__/graphics/icons/electric-engine-unit.png",
      "subgroup": "intermediate-product",
      "order": "c[advanced-intermediates]-b[electric-engine-unit]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/electric-large-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50
    },
    "explosives": 
    {
      "type": "item",
      "name": "explosives",
      "icon": "__base__/graphics/icons/explosives.png",
      "subgroup": "raw-material",
      "order": "b[chemistry]-e[explosives]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/explosive-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/explosive-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/explosive-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "weight": 2000
    },
    "battery": 
    {
      "type": "item",
      "name": "battery",
      "icon": "__base__/graphics/icons/battery.png",
      "subgroup": "raw-material",
      "order": "b[chemistry]-d[battery]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 200
    },
    "flying-robot-frame": 
    {
      "type": "item",
      "name": "flying-robot-frame",
      "icon": "__base__/graphics/icons/flying-robot-frame.png",
      "subgroup": "intermediate-product",
      "order": "c[advanced-intermediates]-c[flying-robot-frame]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "random_tint_color": 
      [
        1,
        0.95,
        0.9,
        1
      ]
    },
    "low-density-structure": 
    {
      "type": "item",
      "name": "low-density-structure",
      "icon": "__base__/graphics/icons/low-density-structure.png",
      "subgroup": "intermediate-product",
      "order": "d[rocket-parts]-a[low-density-structure]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/low-density-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/low-density-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/low-density-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "weight": 5000
    },
    "nuclear-fuel": 
    {
      "type": "item",
      "name": "nuclear-fuel",
      "icon": "__base__/graphics/icons/nuclear-fuel.png",
      "pictures": 
      {
        "layers": 
        [
          
          {
            "size": 64,
            "filename": "__base__/graphics/icons/nuclear-fuel.png",
            "scale": 0.5,
            "mipmap_count": 4
          },
          
          {
            "draw_as_light": true,
            "size": 64,
            "filename": "__base__/graphics/icons/nuclear-fuel-light.png",
            "scale": 0.5
          }
        ]
      },
      "fuel_category": "chemical",
      "fuel_value": "1.21GJ",
      "fuel_acceleration_multiplier": 2.5,
      "fuel_top_speed_multiplier": 1.149999999999999911182158029987476766109466552734375,
      "subgroup": "uranium-processing",
      "order": "r[uranium-processing]-e[nuclear-fuel]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/fuel-cell-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/fuel-cell-inventory-pickup.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/fuel-cell-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 1,
      "weight": 100000
    },
    "rocket-part": 
    {
      "type": "item",
      "name": "rocket-part",
      "icon": "__base__/graphics/icons/rocket-part.png",
      "hidden": true,
      "subgroup": "intermediate-product",
      "order": "d[rocket-parts]-d[rocket-part]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 5
    },
    "electric-energy-interface": 
    {
      "type": "item",
      "name": "electric-energy-interface",
      "icons": 
      [
        
        {
          "icon": "__base__/graphics/icons/accumulator.png",
          "tint": 
          [
            1,
            0.8,
            1,
            1
          ]
        }
      ],
      "hidden": true,
      "subgroup": "bpsb-infinity",
      "order": "a-a",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/electric-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/electric-large-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/electric-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "electric-energy-interface",
      "stack_size": 50
    },
    "heat-interface": 
    {
      "type": "item",
      "name": "heat-interface",
      "icon": "__base__/graphics/icons/heat-interface.png",
      "hidden": true,
      "subgroup": "other",
      "order": "b[heat-interface]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "heat-interface",
      "stack_size": 20
    },
    "nuclear-reactor": 
    {
      "type": "item",
      "name": "nuclear-reactor",
      "icon": "__base__/graphics/icons/nuclear-reactor.png",
      "subgroup": "energy",
      "order": "f[nuclear-energy]-a[reactor]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/reactor-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/reactor-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/reactor-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "nuclear-reactor",
      "weight": 1000000,
      "stack_size": 10
    },
    "uranium-235": 
    {
      "type": "item",
      "name": "uranium-235",
      "icon": "__base__/graphics/icons/uranium-235.png",
      "pictures": 
      {
        "layers": 
        [
          
          {
            "size": 64,
            "filename": "__base__/graphics/icons/uranium-235.png",
            "scale": 0.5,
            "mipmap_count": 4
          },
          
          {
            "draw_as_light": true,
            "blend_mode": "additive",
            "size": 64,
            "filename": "__base__/graphics/icons/uranium-235.png",
            "scale": 0.5,
            "tint": 
            [
              0.3,
              0.3,
              0.3,
              0.3
            ]
          }
        ]
      },
      "subgroup": "uranium-processing",
      "color_hint": 
      {
        "text": "+"
      },
      "order": "a[uranium-processing]-b[uranium-235]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/nuclear-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/nuclear-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/nuclear-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 100,
      "weight": 50000
    },
    "uranium-238": 
    {
      "type": "item",
      "name": "uranium-238",
      "icon": "__base__/graphics/icons/uranium-238.png",
      "subgroup": "uranium-processing",
      "order": "a[uranium-processing]-c[uranium-238]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/nuclear-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/nuclear-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/nuclear-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 100,
      "weight": 50000
    },
    "centrifuge": 
    {
      "type": "item",
      "name": "centrifuge",
      "icon": "__base__/graphics/icons/centrifuge.png",
      "subgroup": "production-machine",
      "order": "f[centrifuge]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "centrifuge",
      "stack_size": 50,
      "random_tint_color": 
      [
        1,
        0.95,
        0.9,
        1
      ]
    },
    "uranium-fuel-cell": 
    {
      "type": "item",
      "name": "uranium-fuel-cell",
      "icon": "__base__/graphics/icons/uranium-fuel-cell.png",
      "pictures": 
      {
        "layers": 
        [
          
          {
            "size": 64,
            "filename": "__base__/graphics/icons/uranium-fuel-cell.png",
            "scale": 0.5,
            "mipmap_count": 4
          },
          
          {
            "draw_as_light": true,
            "size": 64,
            "filename": "__base__/graphics/icons/uranium-fuel-cell-light.png",
            "scale": 0.5
          }
        ]
      },
      "subgroup": "uranium-processing",
      "order": "b[uranium-products]-a[uranium-fuel-cell]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/nuclear-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/nuclear-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/nuclear-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "fuel_category": "nuclear",
      "burnt_result": "depleted-uranium-fuel-cell",
      "fuel_value": "8GJ",
      "stack_size": 50,
      "weight": 100000
    },
    "depleted-uranium-fuel-cell": 
    {
      "type": "item",
      "name": "depleted-uranium-fuel-cell",
      "icon": "__base__/graphics/icons/depleted-uranium-fuel-cell.png",
      "subgroup": "uranium-processing",
      "order": "b[uranium-products]-b[depleted-uranium-fuel-cell]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/nuclear-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/nuclear-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/nuclear-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "weight": 100000
    },
    "heat-exchanger": 
    {
      "type": "item",
      "name": "heat-exchanger",
      "icon": "__base__/graphics/icons/heat-boiler.png",
      "subgroup": "energy",
      "order": "f[nuclear-energy]-c[heat-exchanger]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/steam-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/steam-inventory-pickup.ogg",
        "volume": 0.4,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/steam-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "heat-exchanger",
      "stack_size": 50,
      "weight": 40000,
      "random_tint_color": 
      [
        1,
        0.95,
        0.9,
        1
      ]
    },
    "steam-turbine": 
    {
      "type": "item",
      "name": "steam-turbine",
      "icon": "__base__/graphics/icons/steam-turbine.png",
      "subgroup": "energy",
      "order": "f[nuclear-energy]-d[steam-turbine]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/steam-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/steam-inventory-pickup.ogg",
        "volume": 0.4,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/steam-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "steam-turbine",
      "stack_size": 10,
      "random_tint_color": 
      [
        1,
        0.95,
        0.9,
        1
      ]
    },
    "heat-pipe": 
    {
      "type": "item",
      "name": "heat-pipe",
      "icon": "__base__/graphics/icons/heat-pipe.png",
      "subgroup": "energy",
      "order": "f[nuclear-energy]-b[heat-pipe]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "heat-pipe",
      "stack_size": 50,
      "weight": 20000
    },
    "simple-entity-with-force": 
    {
      "type": "item",
      "name": "simple-entity-with-force",
      "icon": "__base__/graphics/icons/steel-chest.png",
      "hidden": true,
      "subgroup": "other",
      "order": "s[simple-entity-with-force]-f[simple-entity-with-force]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "simple-entity-with-force",
      "stack_size": 50
    },
    "simple-entity-with-owner": 
    {
      "type": "item",
      "name": "simple-entity-with-owner",
      "icon": "__base__/graphics/icons/wooden-chest.png",
      "hidden": true,
      "subgroup": "other",
      "order": "s[simple-entity-with-owner]-o[simple-entity-with-owner]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/wood-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/wood-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/wood-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "simple-entity-with-owner",
      "stack_size": 50
    },
    "infinity-chest": 
    {
      "type": "item",
      "name": "infinity-chest",
      "icon": "__base__/graphics/icons/infinity-chest.png",
      "hidden": true,
      "subgroup": "bpsb-infinity",
      "order": "a-b",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-chest-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-chest-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-chest-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 10,
      "place_result": "infinity-chest"
    },
    "infinity-pipe": 
    {
      "type": "item",
      "name": "infinity-pipe",
      "icons": 
      [
        
        {
          "icon": "__base__/graphics/icons/pipe.png",
          "tint": 
          {
            "r": 0.5,
            "g": 0.5,
            "b": 1
          }
        }
      ],
      "hidden": true,
      "subgroup": "bpsb-infinity",
      "order": "a-c",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 10,
      "place_result": "infinity-pipe"
    },
    "burner-generator": 
    {
      "type": "item",
      "name": "burner-generator",
      "icon": "__base__/graphics/icons/steam-engine.png",
      "hidden": true,
      "subgroup": "other",
      "order": "t[item]-o[burner-generator]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 10,
      "place_result": "burner-generator",
      "random_tint_color": 
      [
        1,
        0.95,
        0.9,
        1
      ]
    },
    "linked-chest": 
    {
      "type": "item",
      "name": "linked-chest",
      "icon": "__base__/graphics/icons/linked-chest-icon.png",
      "hidden": true,
      "subgroup": "other",
      "order": "a[items]-a[linked-chest]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-chest-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-chest-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-chest-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "linked-chest",
      "stack_size": 10
    },
    "linked-belt": 
    {
      "type": "item",
      "name": "linked-belt",
      "icon": "__base__/graphics/icons/linked-belt.png",
      "hidden": true,
      "subgroup": "other",
      "order": "b[items]-b[linked-belt]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "linked-belt",
      "stack_size": 10
    },
    "empty-module-slot": 
    {
      "type": "item",
      "name": "empty-module-slot",
      "localised_description": 
      [
        "item-description.empty-module-slot"
      ],
      "icon": "__core__/graphics/icons/mip/empty-module-slot.png",
      "flags": 
      [
        "not-stackable"
      ],
      "hidden": true,
      "subgroup": "module",
      "order": "z[meta]-a[empty-module-slot]",
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
      "stack_size": 1
    },
    "land-mine": 
    {
      "type": "item",
      "name": "land-mine",
      "icon": "__base__/graphics/icons/land-mine.png",
      "subgroup": "defensive-structure",
      "order": "f[land-mine]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/explosive-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/explosive-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/explosive-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "land-mine",
      "stack_size": 100
    },
    "solar-panel-equipment": 
    {
      "type": "item",
      "name": "solar-panel-equipment",
      "icon": "__base__/graphics/icons/solar-panel-equipment.png",
      "place_as_equipment_result": "solar-panel-equipment",
      "subgroup": "equipment",
      "order": "a[energy-source]-a[solar-panel]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/electric-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/electric-large-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/electric-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 20
    },
    "fission-reactor-equipment": 
    {
      "type": "item",
      "name": "fission-reactor-equipment",
      "icon": "__base__/graphics/icons/fission-reactor-equipment.png",
      "place_as_equipment_result": "fission-reactor-equipment",
      "subgroup": "equipment",
      "order": "a[energy-source]-b[fission-reactor]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/reactor-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/reactor-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/reactor-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 20,
      "weight": 250000
    },
    "battery-equipment": 
    {
      "type": "item",
      "name": "battery-equipment",
      "icon": "__base__/graphics/icons/battery-equipment.png",
      "place_as_equipment_result": "battery-equipment",
      "subgroup": "equipment",
      "order": "b[battery]-a[battery-equipment]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 20
    },
    "battery-mk2-equipment": 
    {
      "type": "item",
      "name": "battery-mk2-equipment",
      "localised_description": 
      [
        "item-description.battery-equipment"
      ],
      "icon": "__base__/graphics/icons/battery-mk2-equipment.png",
      "place_as_equipment_result": "battery-mk2-equipment",
      "subgroup": "equipment",
      "order": "b[battery]-b[battery-equipment-mk2]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 20,
      "weight": 100000
    },
    "belt-immunity-equipment": 
    {
      "type": "item",
      "name": "belt-immunity-equipment",
      "icon": "__base__/graphics/icons/belt-immunity-equipment.png",
      "place_as_equipment_result": "belt-immunity-equipment",
      "subgroup": "utility-equipment",
      "order": "c[belt-immunity]-a[belt-immunity]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 20
    },
    "exoskeleton-equipment": 
    {
      "type": "item",
      "name": "exoskeleton-equipment",
      "icon": "__base__/graphics/icons/exoskeleton-equipment.png",
      "place_as_equipment_result": "exoskeleton-equipment",
      "subgroup": "utility-equipment",
      "order": "d[exoskeleton]-a[exoskeleton-equipment]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/exoskeleton-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/exoskeleton-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/exoskeleton-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 20
    },
    "personal-roboport-equipment": 
    {
      "type": "item",
      "name": "personal-roboport-equipment",
      "icon": "__base__/graphics/icons/personal-roboport-equipment.png",
      "place_as_equipment_result": "personal-roboport-equipment",
      "subgroup": "utility-equipment",
      "order": "e[robotics]-a[personal-roboport-equipment]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/roboport-inventory-move.ogg",
        "volume": 0.45,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/roboport-inventory-pickup.ogg",
        "volume": 0.35,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/roboport-inventory-move.ogg",
        "volume": 0.45,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 20
    },
    "personal-roboport-mk2-equipment": 
    {
      "type": "item",
      "name": "personal-roboport-mk2-equipment",
      "localised_description": 
      [
        "item-description.personal-roboport-equipment"
      ],
      "icon": "__base__/graphics/icons/personal-roboport-mk2-equipment.png",
      "place_as_equipment_result": "personal-roboport-mk2-equipment",
      "subgroup": "utility-equipment",
      "order": "e[robotics]-b[personal-roboport-mk2-equipment]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/roboport-inventory-move.ogg",
        "volume": 0.45,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/roboport-inventory-pickup.ogg",
        "volume": 0.35,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/roboport-inventory-move.ogg",
        "volume": 0.45,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 20
    },
    "night-vision-equipment": 
    {
      "type": "item",
      "name": "night-vision-equipment",
      "icon": "__base__/graphics/icons/night-vision-equipment.png",
      "place_as_equipment_result": "night-vision-equipment",
      "subgroup": "utility-equipment",
      "order": "f[night-vision]-a[night-vision-equipment]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 20
    },
    "energy-shield-equipment": 
    {
      "type": "item",
      "name": "energy-shield-equipment",
      "icon": "__base__/graphics/icons/energy-shield-equipment.png",
      "place_as_equipment_result": "energy-shield-equipment",
      "subgroup": "military-equipment",
      "order": "a[shield]-a[energy-shield-equipment]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/energy-shield-inventory-move.ogg",
        "volume": 0.4,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/energy-shield-inventory-pickup.ogg",
        "volume": 0.4,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/energy-shield-inventory-move.ogg",
        "volume": 0.4,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 20
    },
    "energy-shield-mk2-equipment": 
    {
      "type": "item",
      "name": "energy-shield-mk2-equipment",
      "localised_description": 
      [
        "item-description.energy-shield-equipment"
      ],
      "icon": "__base__/graphics/icons/energy-shield-mk2-equipment.png",
      "place_as_equipment_result": "energy-shield-mk2-equipment",
      "subgroup": "military-equipment",
      "order": "a[shield]-b[energy-shield-equipment-mk2]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/energy-shield-inventory-move.ogg",
        "volume": 0.4,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/energy-shield-inventory-pickup.ogg",
        "volume": 0.4,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/energy-shield-inventory-move.ogg",
        "volume": 0.4,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 20,
      "weight": 100000
    },
    "personal-laser-defense-equipment": 
    {
      "type": "item",
      "name": "personal-laser-defense-equipment",
      "icon": "__base__/graphics/icons/personal-laser-defense-equipment.png",
      "place_as_equipment_result": "personal-laser-defense-equipment",
      "subgroup": "military-equipment",
      "order": "b[active-defense]-a[personal-laser-defense-equipment]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/turret-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/turret-inventory-pickup.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/turret-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 20,
      "weight": 200000
    },
    "discharge-defense-equipment": 
    {
      "type": "item",
      "name": "discharge-defense-equipment",
      "icon": "__base__/graphics/icons/discharge-defense-equipment.png",
      "place_as_equipment_result": "discharge-defense-equipment",
      "subgroup": "military-equipment",
      "order": "b[active-defense]-b[discharge-defense-equipment]-a[equipment]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/electric-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/electric-large-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/electric-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 20
    },
    "gun-turret": 
    {
      "type": "item",
      "name": "gun-turret",
      "icon": "__base__/graphics/icons/gun-turret.png",
      "subgroup": "turret",
      "order": "b[turret]-a[gun-turret]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/turret-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/turret-inventory-pickup.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/turret-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "gun-turret",
      "stack_size": 50
    },
    "laser-turret": 
    {
      "type": "item",
      "name": "laser-turret",
      "icon": "__base__/graphics/icons/laser-turret.png",
      "subgroup": "turret",
      "order": "b[turret]-b[laser-turret]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/turret-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/turret-inventory-pickup.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/turret-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "laser-turret",
      "stack_size": 50,
      "weight": 40000
    },
    "flamethrower-turret": 
    {
      "type": "item",
      "name": "flamethrower-turret",
      "icon": "__base__/graphics/icons/flamethrower-turret.png",
      "subgroup": "turret",
      "order": "b[turret]-c[flamethrower-turret]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/turret-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/flamethrower-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/turret-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "flamethrower-turret",
      "stack_size": 50,
      "weight": 50000
    },
    "artillery-turret": 
    {
      "type": "item",
      "name": "artillery-turret",
      "icon": "__base__/graphics/icons/artillery-turret.png",
      "subgroup": "turret",
      "order": "b[turret]-d[artillery-turret]-a[turret]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/artillery-large-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/artillery-large-inventory-pickup.ogg",
        "volume": 0.4,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/artillery-large-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "artillery-turret",
      "stack_size": 10,
      "weight": 200000
    },
    "arithmetic-combinator": 
    {
      "type": "item",
      "name": "arithmetic-combinator",
      "icon": "__base__/graphics/icons/arithmetic-combinator.png",
      "subgroup": "circuit-network",
      "place_result": "arithmetic-combinator",
      "order": "c[combinators]-a[arithmetic-combinator]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/combinator-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/combinator-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/combinator-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50
    },
    "decider-combinator": 
    {
      "type": "item",
      "name": "decider-combinator",
      "icon": "__base__/graphics/icons/decider-combinator.png",
      "subgroup": "circuit-network",
      "place_result": "decider-combinator",
      "order": "c[combinators]-b[decider-combinator]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/combinator-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/combinator-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/combinator-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50
    },
    "constant-combinator": 
    {
      "type": "item",
      "name": "constant-combinator",
      "icon": "__base__/graphics/icons/constant-combinator.png",
      "subgroup": "circuit-network",
      "place_result": "constant-combinator",
      "order": "c[combinators]-d[constant-combinator]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/combinator-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/combinator-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/combinator-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50
    },
    "selector-combinator": 
    {
      "type": "item",
      "name": "selector-combinator",
      "icon": "__base__/graphics/icons/selector-combinator.png",
      "subgroup": "circuit-network",
      "place_result": "selector-combinator",
      "order": "c[combinators]-c[selector-combinator]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/combinator-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/combinator-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/combinator-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "weight": 20000
    },
    "power-switch": 
    {
      "type": "item",
      "name": "power-switch",
      "icon": "__base__/graphics/icons/power-switch.png",
      "subgroup": "circuit-network",
      "place_result": "power-switch",
      "order": "d[other]-a[power-switch]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 10
    },
    "programmable-speaker": 
    {
      "type": "item",
      "name": "programmable-speaker",
      "icon": "__base__/graphics/icons/programmable-speaker.png",
      "subgroup": "circuit-network",
      "order": "d[other]-b[programmable-speaker]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "programmable-speaker",
      "stack_size": 10,
      "random_tint_color": 
      [
        1,
        0.95,
        0.9,
        1
      ]
    },
    "display-panel": 
    {
      "type": "item",
      "name": "display-panel",
      "icon": "__base__/graphics/icons/display-panel.png",
      "icon_size": 64,
      "subgroup": "circuit-network",
      "order": "s[display-panel]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "display-panel",
      "stack_size": 10
    },
    "science": 
    {
      "type": "item",
      "name": "science",
      "icon": "__base__/graphics/icons/science.png",
      "icon_size": 64,
      "subgroup": "science-pack",
      "order": "zz[science]",
      "hidden": true,
      "stack_size": 1
    },
    "rail-support": 
    {
      "type": "item",
      "name": "rail-support",
      "icon": "__elevated-rails__/graphics/icons/rail-support.png",
      "subgroup": "train-transport",
      "order": "a[rail]-c[rail-support]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/train-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/train-inventory-pickup.ogg",
        "volume": 0.4,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/train-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "rail-support",
      "stack_size": 20,
      "weight": 200000
    },
    "recycler": 
    {
      "type": "item",
      "name": "recycler",
      "icon": "__quality__/graphics/icons/recycler.png",
      "subgroup": "smelting-machine",
      "order": "d[recycler]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-large-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "recycler",
      "stack_size": 20,
      "weight": 100000,
      "default_import_location": "fulgora"
    },
    "space-platform-foundation": 
    {
      "type": "item",
      "name": "space-platform-foundation",
      "icon": "__space-age__/graphics/icons/space-platform-foundation.png",
      "subgroup": "space-platform",
      "order": "a[space-platform-foundation]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-large-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 100,
      "weight": 20000,
      "place_as_tile": 
      {
        "result": "space-platform-foundation",
        "condition_size": 1,
        "condition": 
        {
          "layers": 
          {
            "empty_space": true
          }
        },
        "invert": true
      }
    },
    "turbo-transport-belt": 
    {
      "type": "item",
      "name": "turbo-transport-belt",
      "icon": "__space-age__/graphics/icons/turbo-transport-belt.png",
      "subgroup": "belt",
      "color_hint": 
      {
        "text": "4"
      },
      "order": "a[transport-belt]-d[turbo-transport-belt]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/transport-belt-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/transport-belt-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/transport-belt-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "turbo-transport-belt",
      "stack_size": 100,
      "default_import_location": "vulcanus",
      "weight": 20000
    },
    "turbo-underground-belt": 
    {
      "type": "item",
      "name": "turbo-underground-belt",
      "icon": "__space-age__/graphics/icons/turbo-underground-belt.png",
      "subgroup": "belt",
      "color_hint": 
      {
        "text": "4"
      },
      "order": "b[underground-belt]-d[turbo-underground-belt]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "turbo-underground-belt",
      "stack_size": 50,
      "default_import_location": "vulcanus",
      "weight": 40000
    },
    "turbo-splitter": 
    {
      "type": "item",
      "name": "turbo-splitter",
      "icon": "__space-age__/graphics/icons/turbo-splitter.png",
      "subgroup": "belt",
      "color_hint": 
      {
        "text": "4"
      },
      "order": "c[splitter]-d[turbo-splitter]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "turbo-splitter",
      "stack_size": 50,
      "default_import_location": "vulcanus",
      "weight": 40000
    },
    "turbo-loader": 
    {
      "type": "item",
      "name": "turbo-loader",
      "icon": "__space-age__/graphics/icons/turbo-loader.png",
      "hidden": true,
      "subgroup": "belt",
      "color_hint": 
      {
        "text": "4"
      },
      "order": "d[loader]-d[turbo-loader]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "turbo-loader",
      "stack_size": 50
    },
    "toolbelt-equipment": 
    {
      "type": "item",
      "name": "toolbelt-equipment",
      "icon": "__space-age__/graphics/icons/toolbelt-equipment.png",
      "place_as_equipment_result": "toolbelt-equipment",
      "subgroup": "utility-equipment",
      "order": "g[toolbelt]-a[night-vision-equipment]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/armor-small-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/armor-small-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/armor-small-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 20,
      "weight": 50000
    },
    "battery-mk3-equipment": 
    {
      "type": "item",
      "name": "battery-mk3-equipment",
      "localised_description": 
      [
        "item-description.battery-equipment"
      ],
      "icon": "__space-age__/graphics/icons/battery-mk3-equipment.png",
      "place_as_equipment_result": "battery-mk3-equipment",
      "subgroup": "equipment",
      "order": "b[battery]-c[battery-equipment-mk3]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 20,
      "weight": 200000
    },
    "cargo-bay": 
    {
      "type": "item",
      "name": "cargo-bay",
      "icon": "__space-age__/graphics/icons/cargo-bay.png",
      "icon_size": 64,
      "subgroup": "space-platform",
      "order": "c[cargo-bay]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/mechanical-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/mechanical-large-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/mechanical-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "cargo-bay",
      "stack_size": 10,
      "weight": 100000
    },
    "metallic-asteroid-chunk": 
    {
      "type": "item",
      "name": "metallic-asteroid-chunk",
      "icon": "__space-age__/graphics/icons/metallic-asteroid-chunk.png",
      "subgroup": "space-material",
      "order": "a[metallic]-e[chunk]",
      "inventory_move_sound": 
      {
        "filename": "__space-age__/sound/item/rock-inventory-move.ogg",
        "volume": 0.45,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__space-age__/sound/item/rock-inventory-pickup.ogg",
        "volume": 0.45,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__space-age__/sound/item/rock-inventory-move.ogg",
        "volume": 0.45,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 1,
      "weight": 100000,
      "random_tint_color": 
      [
        1,
        0.95,
        0.9,
        1
      ]
    },
    "carbonic-asteroid-chunk": 
    {
      "type": "item",
      "name": "carbonic-asteroid-chunk",
      "icon": "__space-age__/graphics/icons/carbonic-asteroid-chunk.png",
      "subgroup": "space-material",
      "order": "b[carbonic]-e[chunk]",
      "inventory_move_sound": 
      {
        "filename": "__space-age__/sound/item/rock-inventory-move.ogg",
        "volume": 0.45,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__space-age__/sound/item/rock-inventory-pickup.ogg",
        "volume": 0.45,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__space-age__/sound/item/rock-inventory-move.ogg",
        "volume": 0.45,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 1,
      "weight": 100000,
      "random_tint_color": 
      [
        0.85,
        0.85,
        0.7,
        1
      ]
    },
    "oxide-asteroid-chunk": 
    {
      "type": "item",
      "name": "oxide-asteroid-chunk",
      "icon": "__space-age__/graphics/icons/oxide-asteroid-chunk.png",
      "subgroup": "space-material",
      "order": "c[oxide]-e[chunk]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/sulfur-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/sulfur-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 1,
      "weight": 100000,
      "random_tint_color": 
      [
        0.9,
        1,
        1,
        1
      ]
    },
    "promethium-asteroid-chunk": 
    {
      "type": "item",
      "name": "promethium-asteroid-chunk",
      "icon": "__space-age__/graphics/icons/promethium-asteroid-chunk.png",
      "subgroup": "space-material",
      "order": "d[promethium]-e[chunk]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/sulfur-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/sulfur-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 1,
      "weight": 100000,
      "random_tint_color": 
      [
        0.9,
        1,
        1,
        1
      ]
    },
    "asteroid-collector": 
    {
      "type": "item",
      "name": "asteroid-collector",
      "icon": "__space-age__/graphics/icons/asteroid-collector.png",
      "subgroup": "space-platform",
      "order": "d[asteroid-collector]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "asteroid-collector",
      "stack_size": 10,
      "weight": 100000,
      "random_tint_color": 
      [
        1,
        0.95,
        0.9,
        1
      ]
    },
    "crusher": 
    {
      "type": "item",
      "name": "crusher",
      "icon": "__space-age__/graphics/icons/crusher.png",
      "subgroup": "space-platform",
      "order": "e[crusher]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/drill-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/drill-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/drill-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "crusher",
      "stack_size": 10,
      "weight": 100000
    },
    "thruster": 
    {
      "type": "item",
      "name": "thruster",
      "icon": "__space-age__/graphics/icons/thruster.png",
      "subgroup": "space-platform",
      "order": "f[thruster]",
      "inventory_move_sound": 
      {
        "filename": "__space-age__/sound/item/thruster-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__space-age__/sound/item/thruster-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__space-age__/sound/item/thruster-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "thruster",
      "stack_size": 10,
      "weight": 200000
    },
    "ice": 
    {
      "type": "item",
      "name": "ice",
      "icon": "__space-age__/graphics/icons/ice.png",
      "subgroup": "raw-resource",
      "order": "j[ice]",
      "inventory_move_sound": 
      {
        "filename": "__space-age__/sound/item/ice-inventory-move.ogg",
        "volume": 0.4,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__space-age__/sound/item/ice-inventory-pickup.ogg",
        "volume": 0.4,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__space-age__/sound/item/ice-inventory-move.ogg",
        "volume": 0.4,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "weight": 1000,
      "random_tint_color": 
      [
        0.9,
        1,
        1,
        1
      ]
    },
    "carbon": 
    {
      "type": "item",
      "name": "carbon",
      "icon": "__space-age__/graphics/icons/carbon.png",
      "fuel_value": "2MJ",
      "fuel_category": "chemical",
      "subgroup": "raw-material",
      "order": "b[chemistry]-f[carbon]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "weight": 1000,
      "random_tint_color": 
      [
        0.85,
        0.85,
        0.7,
        1
      ]
    },
    "calcite": 
    {
      "type": "item",
      "name": "calcite",
      "icon": "__space-age__/graphics/icons/calcite.png",
      "pictures": 
      [
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/calcite.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/calcite-1.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/calcite-2.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/calcite-3.png",
          "scale": 0.5,
          "mipmap_count": 4
        }
      ],
      "subgroup": "vulcanus-processes",
      "order": "a[melting]-a[calcite]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "default_import_location": "vulcanus",
      "weight": 2000
    },
    "tungsten-ore": 
    {
      "type": "item",
      "name": "tungsten-ore",
      "icon": "__space-age__/graphics/icons/tungsten-ore.png",
      "pictures": 
      [
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/tungsten-ore.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/tungsten-ore-1.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/tungsten-ore-2.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/tungsten-ore-3.png",
          "scale": 0.5,
          "mipmap_count": 4
        }
      ],
      "subgroup": "vulcanus-processes",
      "color_hint": 
      {
        "text": "T"
      },
      "order": "c[tungsten]-a[tungsten-ore]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "default_import_location": "vulcanus",
      "weight": 10000
    },
    "tungsten-plate": 
    {
      "type": "item",
      "name": "tungsten-plate",
      "icon": "__space-age__/graphics/icons/tungsten-plate.png",
      "subgroup": "vulcanus-processes",
      "order": "c[tungsten]-c[tungsten-plate]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "default_import_location": "vulcanus",
      "weight": 4000
    },
    "big-mining-drill": 
    {
      "type": "item",
      "name": "big-mining-drill",
      "icon": "__space-age__/graphics/icons/big-mining-drill.png",
      "subgroup": "extraction-machine",
      "order": "a[items]-c[big-mining-drill]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/drill-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/drill-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/drill-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "big-mining-drill",
      "stack_size": 20,
      "default_import_location": "vulcanus",
      "weight": 50000
    },
    "tungsten-carbide": 
    {
      "type": "item",
      "name": "tungsten-carbide",
      "icon": "__space-age__/graphics/icons/tungsten-carbide.png",
      "subgroup": "vulcanus-processes",
      "order": "c[tungsten]-b[tungsten-carbide]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/brick-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/brick-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/brick-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "default_import_location": "vulcanus",
      "weight": 2000
    },
    "foundry": 
    {
      "type": "item",
      "name": "foundry",
      "icon": "__space-age__/graphics/icons/foundry.png",
      "subgroup": "smelting-machine",
      "order": "d[foundry]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/steam-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/steam-inventory-pickup.ogg",
        "volume": 0.4,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/steam-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "foundry",
      "stack_size": 20,
      "default_import_location": "vulcanus",
      "weight": 200000
    },
    "railgun-turret": 
    {
      "type": "item",
      "name": "railgun-turret",
      "icon": "__space-age__/graphics/icons/railgun-turret.png",
      "subgroup": "turret",
      "order": "b[turret]-g[railgun-turret]-a[turret]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/turret-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/turret-inventory-pickup.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/turret-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "railgun-turret",
      "stack_size": 10,
      "default_import_location": "aquilo",
      "weight": 1000000
    },
    "copper-bacteria": 
    {
      "type": "item",
      "name": "copper-bacteria",
      "icon": "__space-age__/graphics/icons/copper-bacteria.png",
      "pictures": 
      [
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/copper-bacteria.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/copper-bacteria-1.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/copper-bacteria-2.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/copper-bacteria-3.png",
          "scale": 0.5,
          "mipmap_count": 4
        }
      ],
      "subgroup": "agriculture-processes",
      "order": "b[agriculture]-d[copper-bacteria]",
      "inventory_move_sound": 
      {
        "filename": "__space-age__/sound/item/agriculture-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__space-age__/sound/item/agriculture-inventory-pickup.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__space-age__/sound/item/agriculture-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "default_import_location": "gleba",
      "weight": 1000,
      "spoil_ticks": 3600,
      "spoil_result": "copper-ore"
    },
    "iron-bacteria": 
    {
      "type": "item",
      "name": "iron-bacteria",
      "icon": "__space-age__/graphics/icons/iron-bacteria.png",
      "pictures": 
      [
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/iron-bacteria.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/iron-bacteria-1.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/iron-bacteria-2.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/iron-bacteria-3.png",
          "scale": 0.5,
          "mipmap_count": 4
        }
      ],
      "subgroup": "agriculture-processes",
      "order": "b[agriculture]-c[iron-bacteria]",
      "inventory_move_sound": 
      {
        "filename": "__space-age__/sound/item/agriculture-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__space-age__/sound/item/agriculture-inventory-pickup.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__space-age__/sound/item/agriculture-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "default_import_location": "gleba",
      "weight": 1000,
      "spoil_ticks": 3600,
      "spoil_result": "iron-ore"
    },
    "yumako-seed": 
    {
      "type": "item",
      "name": "yumako-seed",
      "localised_name": 
      [
        "item-name.yumako-seed"
      ],
      "localised_description": 
      [
        "item-description.yumako-seed"
      ],
      "icon": "__space-age__/graphics/icons/yumako-seed.png",
      "pictures": 
      [
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/yumako-seed-1.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/yumako-seed-2.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/yumako-seed-3.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/yumako-seed-4.png",
          "scale": 0.5,
          "mipmap_count": 4
        }
      ],
      "subgroup": "agriculture-processes",
      "order": "a[seeds]-a[yumako-seed]",
      "plant_result": "yumako-tree",
      "place_result": "yumako-tree",
      "inventory_move_sound": 
      {
        "filename": "__space-age__/sound/item/agriculture-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__space-age__/sound/item/agriculture-inventory-pickup.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__space-age__/sound/item/agriculture-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 10,
      "default_import_location": "gleba",
      "weight": 10000,
      "fuel_category": "chemical",
      "fuel_value": "4MJ"
    },
    "jellynut-seed": 
    {
      "type": "item",
      "name": "jellynut-seed",
      "localised_name": 
      [
        "item-name.jellynut-seed"
      ],
      "localised_description": 
      [
        "item-description.jellynut-seed"
      ],
      "icon": "__space-age__/graphics/icons/jellynut-seed.png",
      "pictures": 
      [
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/jellynut-seed-1.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/jellynut-seed-2.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/jellynut-seed-3.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/jellynut-seed-4.png",
          "scale": 0.5,
          "mipmap_count": 4
        }
      ],
      "subgroup": "agriculture-processes",
      "order": "a[seeds]-b[jellynut-seed]",
      "plant_result": "jellystem",
      "place_result": "jellystem",
      "inventory_move_sound": 
      {
        "filename": "__space-age__/sound/item/agriculture-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__space-age__/sound/item/agriculture-inventory-pickup.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__space-age__/sound/item/agriculture-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 10,
      "default_import_location": "gleba",
      "weight": 10000,
      "fuel_category": "chemical",
      "fuel_value": "4MJ"
    },
    "nutrients": 
    {
      "type": "item",
      "name": "nutrients",
      "icon": "__space-age__/graphics/icons/nutrients.png",
      "subgroup": "agriculture-processes",
      "order": "c[nutrients]-b[nutrients]",
      "inventory_move_sound": 
      {
        "filename": "__space-age__/sound/item/agriculture-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__space-age__/sound/item/agriculture-inventory-pickup.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__space-age__/sound/item/agriculture-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "fuel_category": "nutrients",
      "fuel_value": "2MJ",
      "stack_size": 100,
      "default_import_location": "gleba",
      "spoil_ticks": 18000,
      "spoil_result": "spoilage",
      "weight": 500
    },
    "artificial-yumako-soil": 
    {
      "type": "item",
      "name": "artificial-yumako-soil",
      "icon": "__space-age__/graphics/icons/artificial-yumako-soil.png",
      "subgroup": "terrain",
      "order": "c[landfill]-b[artificial-yumako-soil]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/landfill-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/landfill-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/landfill-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 100,
      "default_import_location": "gleba",
      "place_as_tile": 
      {
        "result": "artificial-yumako-soil",
        "condition_size": 1,
        "condition": 
        {
          "layers": 
          {
            "ground_tile": true
          }
        },
        "tile_condition": 
        [
          "wetland-yumako"
        ]
      }
    },
    "overgrowth-yumako-soil": 
    {
      "type": "item",
      "name": "overgrowth-yumako-soil",
      "icon": "__space-age__/graphics/icons/overgrowth-yumako-soil.png",
      "subgroup": "terrain",
      "order": "c[landfill]-c[overgrowth-yumako-soil]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/landfill-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/landfill-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/landfill-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 100,
      "default_import_location": "gleba",
      "place_as_tile": 
      {
        "result": "overgrowth-yumako-soil",
        "condition_size": 1,
        "condition": 
        {
          "layers": 
          {}
        },
        "tile_condition": 
        [
          "wetland-light-green-slime",
          "wetland-green-slime",
          "wetland-yumako",
          "lowland-olive-blubber",
          "lowland-olive-blubber-2",
          "lowland-olive-blubber-3",
          "lowland-brown-blubber",
          "lowland-pale-green"
        ]
      }
    },
    "artificial-jellynut-soil": 
    {
      "type": "item",
      "name": "artificial-jellynut-soil",
      "icon": "__space-age__/graphics/icons/artificial-jellynut-soil.png",
      "subgroup": "terrain",
      "order": "c[landfill]-d[artificial-jellynut-soil]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/landfill-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/landfill-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/landfill-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 100,
      "default_import_location": "gleba",
      "place_as_tile": 
      {
        "result": "artificial-jellynut-soil",
        "condition_size": 1,
        "condition": 
        {
          "layers": 
          {
            "ground_tile": true
          }
        },
        "tile_condition": 
        [
          "wetland-jellynut"
        ]
      }
    },
    "overgrowth-jellynut-soil": 
    {
      "type": "item",
      "name": "overgrowth-jellynut-soil",
      "icon": "__space-age__/graphics/icons/overgrowth-jellynut-soil.png",
      "subgroup": "terrain",
      "order": "c[landfill]-e[overgrowth-jellynut-soil]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/landfill-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/landfill-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/landfill-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 100,
      "default_import_location": "gleba",
      "place_as_tile": 
      {
        "result": "overgrowth-jellynut-soil",
        "condition_size": 1,
        "condition": 
        {
          "layers": 
          {}
        },
        "tile_condition": 
        [
          "wetland-pink-tentacle",
          "wetland-red-tentacle",
          "wetland-jellynut",
          "lowland-red-vein",
          "lowland-red-vein-2",
          "lowland-red-vein-3",
          "lowland-red-vein-4",
          "lowland-red-vein-dead",
          "lowland-red-infection",
          "lowland-cream-red"
        ]
      }
    },
    "agricultural-tower": 
    {
      "type": "item",
      "name": "agricultural-tower",
      "icon": "__space-age__/graphics/icons/agricultural-tower.png",
      "subgroup": "agriculture",
      "order": "a[agricultural-tower]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/mechanical-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/mechanical-large-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/mechanical-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "agricultural-tower",
      "stack_size": 20,
      "default_import_location": "gleba"
    },
    "biochamber": 
    {
      "type": "item",
      "name": "biochamber",
      "icon": "__space-age__/graphics/icons/biochamber.png",
      "subgroup": "agriculture",
      "order": "b[biochamber]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/fluid-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/fluid-inventory-pickup.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/fluid-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "biochamber",
      "stack_size": 20,
      "default_import_location": "gleba"
    },
    "biolab": 
    {
      "type": "item",
      "name": "biolab",
      "icon": "__space-age__/graphics/icons/biolab.png",
      "subgroup": "production-machine",
      "order": "z[z-biolab]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "biolab",
      "stack_size": 5,
      "weight": 1000000
    },
    "captive-biter-spawner": 
    {
      "type": "item",
      "name": "captive-biter-spawner",
      "icon": "__space-age__/graphics/icons/captive-biter-spawner.png",
      "subgroup": "agriculture",
      "order": "z[biter-nest]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/mechanical-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "captive-biter-spawner",
      "stack_size": 1,
      "spoil_ticks": 108000,
      "spoil_to_trigger_result": 
      {
        "items_per_trigger": 1,
        "trigger": 
        {
          "type": "direct",
          "action_delivery": 
          {
            "type": "instant",
            "source_effects": 
            [
              
              {
                "type": "create-entity",
                "entity_name": "behemoth-biter",
                "affects_target": true,
                "show_in_tooltip": true,
                "as_enemy": true,
                "find_non_colliding_position": true,
                "offset_deviation": 
                [
                  
                  [
                    -1,
                    -1
                  ],
                  
                  [
                    1,
                    1
                  ]
                ],
                "non_colliding_fail_result": 
                {
                  "type": "direct",
                  "action_delivery": 
                  {
                    "type": "instant",
                    "source_effects": 
                    [
                      
                      {
                        "type": "create-entity",
                        "entity_name": "behemoth-biter",
                        "affects_target": true,
                        "show_in_tooltip": false,
                        "as_enemy": true,
                        "offset_deviation": 
                        [
                          
                          [
                            -1,
                            -1
                          ],
                          
                          [
                            1,
                            1
                          ]
                        ]
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      }
    },
    "biter-egg": 
    {
      "type": "item",
      "name": "biter-egg",
      "icon": "__space-age__/graphics/icons/biter-egg.png",
      "pictures": 
      [
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/biter-egg.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/biter-egg-1.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/biter-egg-2.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/biter-egg-3.png",
          "scale": 0.5,
          "mipmap_count": 4
        }
      ],
      "fuel_category": "chemical",
      "fuel_value": "6MJ",
      "subgroup": "agriculture-products",
      "order": "c[eggs]-a[biter-egg]",
      "inventory_move_sound": 
      {
        "filename": "__space-age__/sound/item/agriculture-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__space-age__/sound/item/agriculture-inventory-pickup.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__space-age__/sound/item/agriculture-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 100,
      "weight": 2000,
      "spoil_ticks": 108000,
      "spoil_to_trigger_result": 
      {
        "items_per_trigger": 5,
        "trigger": 
        {
          "type": "direct",
          "action_delivery": 
          {
            "type": "instant",
            "source_effects": 
            [
              
              {
                "type": "create-entity",
                "entity_name": "big-biter",
                "affects_target": true,
                "show_in_tooltip": true,
                "as_enemy": true,
                "find_non_colliding_position": true,
                "offset_deviation": 
                [
                  
                  [
                    -1,
                    -1
                  ],
                  
                  [
                    1,
                    1
                  ]
                ],
                "non_colliding_fail_result": 
                {
                  "type": "direct",
                  "action_delivery": 
                  {
                    "type": "instant",
                    "source_effects": 
                    [
                      
                      {
                        "type": "create-entity",
                        "entity_name": "big-biter",
                        "affects_target": true,
                        "show_in_tooltip": false,
                        "as_enemy": true,
                        "offset_deviation": 
                        [
                          
                          [
                            -1,
                            -1
                          ],
                          
                          [
                            1,
                            1
                          ]
                        ]
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      }
    },
    "pentapod-egg": 
    {
      "type": "item",
      "name": "pentapod-egg",
      "icon": "__space-age__/graphics/icons/pentapod-egg.png",
      "pictures": 
      [
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/pentapod-egg.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/pentapod-egg-1.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/pentapod-egg-2.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/pentapod-egg-3.png",
          "scale": 0.5,
          "mipmap_count": 4
        }
      ],
      "fuel_category": "chemical",
      "fuel_value": "5MJ",
      "subgroup": "agriculture-products",
      "order": "c[eggs]-b[pentapod-egg]",
      "inventory_move_sound": 
      {
        "filename": "__space-age__/sound/item/agriculture-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__space-age__/sound/item/agriculture-inventory-pickup.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__space-age__/sound/item/agriculture-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 20,
      "weight": 5000,
      "spoil_ticks": 54000,
      "spoil_to_trigger_result": 
      {
        "items_per_trigger": 1,
        "trigger": 
        {
          "type": "direct",
          "action_delivery": 
          {
            "type": "instant",
            "source_effects": 
            [
              
              {
                "type": "create-entity",
                "entity_name": "big-wriggler-pentapod-premature",
                "affects_target": true,
                "show_in_tooltip": true,
                "as_enemy": true,
                "find_non_colliding_position": true,
                "offset_deviation": 
                [
                  
                  [
                    -5,
                    -5
                  ],
                  
                  [
                    5,
                    5
                  ]
                ],
                "non_colliding_fail_result": 
                {
                  "type": "direct",
                  "action_delivery": 
                  {
                    "type": "instant",
                    "source_effects": 
                    [
                      
                      {
                        "type": "create-entity",
                        "entity_name": "big-wriggler-pentapod-premature",
                        "affects_target": true,
                        "show_in_tooltip": false,
                        "as_enemy": true,
                        "offset_deviation": 
                        [
                          
                          [
                            -1,
                            -1
                          ],
                          
                          [
                            1,
                            1
                          ]
                        ]
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      }
    },
    "carbon-fiber": 
    {
      "type": "item",
      "name": "carbon-fiber",
      "icon": "__space-age__/graphics/icons/carbon-fiber.png",
      "subgroup": "agriculture-products",
      "order": "a[organic-products]-e[carbon-fiber]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 100,
      "default_import_location": "gleba",
      "weight": 2000,
      "random_tint_color": 
      [
        0.92000000000000010658141036401502788066864013671875,
        0.92000000000000010658141036401502788066864013671875,
        0.9699999999999999289457264239899814128875732421875,
        1
      ]
    },
    "stack-inserter": 
    {
      "type": "item",
      "name": "stack-inserter",
      "icon": "__space-age__/graphics/icons/stack-inserter.png",
      "subgroup": "inserter",
      "color_hint": 
      {
        "text": "S"
      },
      "order": "h[stack-inserter]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/wire-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/wire-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/wire-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "stack-inserter",
      "stack_size": 50,
      "default_import_location": "gleba",
      "weight": 20000
    },
    "rocket-turret": 
    {
      "type": "item",
      "name": "rocket-turret",
      "icon": "__space-age__/graphics/icons/rocket-turret.png",
      "subgroup": "turret",
      "order": "b[turret]-e[rocket-turret]-a[turret]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/turret-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/turret-inventory-pickup.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/turret-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "rocket-turret",
      "stack_size": 10,
      "weight": 100000
    },
    "holmium-ore": 
    {
      "type": "item",
      "name": "holmium-ore",
      "icon": "__space-age__/graphics/icons/holmium-ore.png",
      "pictures": 
      [
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/holmium-ore.png",
          "scale": 0.5,
          "mipmap_count": 4
        }
      ],
      "subgroup": "fulgora-processes",
      "order": "b[holmium]-a[holmium-ore]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "default_import_location": "fulgora",
      "weight": 2000
    },
    "holmium-plate": 
    {
      "type": "item",
      "name": "holmium-plate",
      "icon": "__space-age__/graphics/icons/holmium-plate.png",
      "subgroup": "fulgora-processes",
      "order": "b[holmium]-c[holmium-plate]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 100,
      "default_import_location": "fulgora",
      "weight": 1000
    },
    "lithium": 
    {
      "type": "item",
      "name": "lithium",
      "icon": "__space-age__/graphics/icons/lithium.png",
      "subgroup": "aquilo-processes",
      "order": "c[lithium]-a[lithium]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "default_import_location": "aquilo",
      "weight": 4000
    },
    "lithium-plate": 
    {
      "type": "item",
      "name": "lithium-plate",
      "icon": "__space-age__/graphics/icons/lithium-plate.png",
      "subgroup": "aquilo-processes",
      "order": "c[lithium]-b[lithium-plate]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-small-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 100,
      "default_import_location": "aquilo",
      "weight": 2000
    },
    "scrap": 
    {
      "type": "item",
      "name": "scrap",
      "icon": "__space-age__/graphics/icons/scrap.png",
      "pictures": 
      [
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/scrap.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/scrap-1.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/scrap-2.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/scrap-3.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/scrap-4.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/scrap-5.png",
          "scale": 0.5,
          "mipmap_count": 4
        }
      ],
      "subgroup": "fulgora-processes",
      "order": "a[scrap]-a[scrap]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/resource-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "default_import_location": "fulgora",
      "weight": 2000
    },
    "lightning-rod": 
    {
      "type": "item",
      "name": "lightning-rod",
      "icon": "__space-age__/graphics/icons/lightning-rod.png",
      "subgroup": "environmental-protection",
      "order": "a[lightning-rod]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "lightning-rod",
      "stack_size": 50,
      "default_import_location": "fulgora",
      "random_tint_color": 
      [
        1,
        0.95,
        0.9,
        1
      ]
    },
    "lightning-collector": 
    {
      "type": "item",
      "name": "lightning-collector",
      "icon": "__space-age__/graphics/icons/lightning-collector.png",
      "subgroup": "environmental-protection",
      "order": "b[lightning-collector]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/electric-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/electric-large-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/electric-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "lightning-collector",
      "stack_size": 20,
      "default_import_location": "fulgora",
      "random_tint_color": 
      [
        1,
        0.95,
        0.9,
        1
      ]
    },
    "heating-tower": 
    {
      "type": "item",
      "name": "heating-tower",
      "icon": "__space-age__/graphics/icons/heating-tower.png",
      "subgroup": "environmental-protection",
      "order": "c[heating-tower]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/steam-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/steam-inventory-pickup.ogg",
        "volume": 0.4,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/steam-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "heating-tower",
      "stack_size": 20,
      "weight": 100000
    },
    "electromagnetic-plant": 
    {
      "type": "item",
      "name": "electromagnetic-plant",
      "icon": "__space-age__/graphics/icons/electromagnetic-plant.png",
      "subgroup": "production-machine",
      "order": "g[electromagnetic-plant]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/electric-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/electric-large-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/electric-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "electromagnetic-plant",
      "stack_size": 20,
      "default_import_location": "fulgora",
      "weight": 200000
    },
    "superconductor": 
    {
      "type": "item",
      "name": "superconductor",
      "icon": "__space-age__/graphics/icons/superconductor.png",
      "subgroup": "fulgora-processes",
      "order": "b[holmium]-d[superconductor]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/wire-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/wire-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/wire-inventory-move.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 200,
      "default_import_location": "fulgora",
      "ingredient_to_weight_coefficient": 0.6
    },
    "supercapacitor": 
    {
      "type": "item",
      "name": "supercapacitor",
      "icon": "__space-age__/graphics/icons/supercapacitor.png",
      "subgroup": "fulgora-processes",
      "order": "b[holmium]-f[supercapacitor]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "default_import_location": "fulgora",
      "stack_size": 100,
      "weight": 2000
    },
    "tesla-turret": 
    {
      "type": "item",
      "name": "tesla-turret",
      "icon": "__space-age__/graphics/icons/tesla-turret.png",
      "subgroup": "turret",
      "order": "b[turret]-f[tesla-turret]-a[turret]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/turret-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/turret-inventory-pickup.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/turret-inventory-move.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "tesla-turret",
      "stack_size": 10,
      "default_import_location": "fulgora",
      "weight": 100000
    },
    "quantum-processor": 
    {
      "type": "item",
      "name": "quantum-processor",
      "icon": "__space-age__/graphics/icons/quantum-processor.png",
      "subgroup": "aquilo-processes",
      "order": "c[lithium]-c[quantum-processor]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-pickup.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/electric-small-inventory-move.ogg",
        "volume": 1,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 100,
      "default_import_location": "aquilo",
      "weight": 5000
    },
    "fusion-reactor-equipment": 
    {
      "type": "item",
      "name": "fusion-reactor-equipment",
      "icon": "__space-age__/graphics/icons/fusion-reactor-equipment.png",
      "place_as_equipment_result": "fusion-reactor-equipment",
      "subgroup": "equipment",
      "order": "a[energy-source]-c[fusion-reactor]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/reactor-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/reactor-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/reactor-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 20,
      "weight": 1000000
    },
    "fusion-power-cell": 
    {
      "type": "item",
      "name": "fusion-power-cell",
      "icon": "__space-age__/graphics/icons/fusion-power-cell.png",
      "subgroup": "aquilo-processes",
      "order": "c[lithium]-d[fusion-power-cell]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/reactor-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/reactor-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/reactor-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "fuel_value": "40GJ",
      "fuel_category": "fusion",
      "stack_size": 50,
      "default_import_location": "aquilo",
      "weight": 20000
    },
    "fusion-reactor": 
    {
      "type": "item",
      "name": "fusion-reactor",
      "icon": "__space-age__/graphics/icons/fusion-reactor.png",
      "subgroup": "energy",
      "order": "g[fusion-energy]-a[reactor]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/reactor-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/reactor-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/reactor-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "fusion-reactor",
      "weight": 1000000,
      "stack_size": 1,
      "default_import_location": "aquilo"
    },
    "fusion-generator": 
    {
      "type": "item",
      "name": "fusion-generator",
      "icon": "__space-age__/graphics/icons/fusion-generator.png",
      "subgroup": "energy",
      "order": "g[fusion-energy]-b[generator]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/reactor-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/reactor-inventory-pickup.ogg",
        "volume": 0.6,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/reactor-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "fusion-generator",
      "weight": 200000,
      "stack_size": 5,
      "default_import_location": "aquilo"
    },
    "cryogenic-plant": 
    {
      "type": "item",
      "name": "cryogenic-plant",
      "icon": "__space-age__/graphics/icons/cryogenic-plant.png",
      "subgroup": "production-machine",
      "order": "h[cryogenic-plant]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/mechanical-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/mechanical-large-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/mechanical-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "place_result": "cryogenic-plant",
      "stack_size": 20,
      "default_import_location": "aquilo",
      "weight": 200000
    },
    "spoilage": 
    {
      "type": "item",
      "name": "spoilage",
      "icon": "__space-age__/graphics/icons/spoilage.png",
      "pictures": 
      [
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/spoilage.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/spoilage-1.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/spoilage-2.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/spoilage-3.png",
          "scale": 0.5,
          "mipmap_count": 4
        }
      ],
      "fuel_value": "250kJ",
      "fuel_category": "chemical",
      "fuel_acceleration_multiplier": 0.5,
      "fuel_top_speed_multiplier": 0.5,
      "subgroup": "agriculture-processes",
      "order": "c[nutrients]-a[spoilage]",
      "inventory_move_sound": 
      {
        "filename": "__space-age__/sound/item/agriculture-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__space-age__/sound/item/agriculture-inventory-pickup.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__space-age__/sound/item/agriculture-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 200,
      "weight": 500,
      "random_tint_color": 
      [
        0.92000000000000010658141036401502788066864013671875,
        0.9699999999999999289457264239899814128875732421875,
        0.92000000000000010658141036401502788066864013671875,
        1
      ],
      "spoil_level": 1
    },
    "ice-platform": 
    {
      "type": "item",
      "name": "ice-platform",
      "icon": "__space-age__/graphics/icons/ice-platform.png",
      "subgroup": "terrain",
      "order": "c[landfill]-f[ice-platform]",
      "inventory_move_sound": 
      {
        "filename": "__space-age__/sound/item/ice-inventory-move.ogg",
        "volume": 0.4,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__space-age__/sound/item/ice-inventory-pickup.ogg",
        "volume": 0.4,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__space-age__/sound/item/ice-inventory-move.ogg",
        "volume": 0.4,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 100,
      "default_import_location": "aquilo",
      "weight": 10000,
      "place_as_tile": 
      {
        "result": "ice-platform",
        "condition_size": 1,
        "condition": 
        {
          "layers": 
          {
            "ground_tile": true
          }
        },
        "tile_condition": 
        [
          "ammoniacal-ocean",
          "ammoniacal-ocean-2",
          "brash-ice"
        ]
      }
    },
    "foundation": 
    {
      "type": "item",
      "name": "foundation",
      "icon": "__space-age__/graphics/icons/foundation.png",
      "subgroup": "terrain",
      "order": "c[landfill]-g[foundation]",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-large-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-large-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 50,
      "default_import_location": "aquilo",
      "weight": 20000,
      "place_as_tile": 
      {
        "result": "foundation",
        "condition_size": 1,
        "condition": 
        {
          "layers": 
          {}
        },
        "tile_condition": 
        [
          "water",
          "deepwater",
          "water-green",
          "deepwater-green",
          "water-mud",
          "water-shallow",
          "wetland-light-green-slime",
          "wetland-green-slime",
          "wetland-light-dead-skin",
          "wetland-dead-skin",
          "wetland-pink-tentacle",
          "wetland-red-tentacle",
          "wetland-yumako",
          "wetland-jellynut",
          "oil-ocean-shallow",
          "oil-ocean-deep",
          "lava",
          "lava-hot"
        ]
      }
    },
    "space-platform-hub": 
    {
      "type": "item",
      "name": "space-platform-hub",
      "icon": "__space-age__/graphics/icons/space-platform-hub.png",
      "hidden": true,
      "subgroup": "space-related",
      "place_result": "space-platform-hub",
      "stack_size": 1,
      "weight": 1000000
    },
    "tree-seed": 
    {
      "type": "item",
      "name": "tree-seed",
      "localised_name": 
      [
        "item-name.tree-seed"
      ],
      "icon": "__space-age__/graphics/icons/tree-seed.png",
      "pictures": 
      [
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/tree-seed-1.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/tree-seed-2.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/tree-seed-3.png",
          "scale": 0.5,
          "mipmap_count": 4
        },
        
        {
          "size": 64,
          "filename": "__space-age__/graphics/icons/tree-seed-4.png",
          "scale": 0.5,
          "mipmap_count": 4
        }
      ],
      "subgroup": "agriculture-processes",
      "order": "a[seeds]-c[tree-seed]",
      "plant_result": "tree-plant",
      "place_result": "tree-plant",
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/wood-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/wood-inventory-pickup.ogg",
        "volume": 0.8,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/wood-inventory-move.ogg",
        "volume": 0.7,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 10,
      "weight": 10000,
      "fuel_category": "chemical",
      "fuel_value": "100kJ"
    },
    "water-barrel": 
    {
      "type": "item",
      "name": "water-barrel",
      "localised_name": 
      [
        "item-name.filled-barrel",
        
        [
          "fluid-name.water"
        ]
      ],
      "icons": 
      [
        
        {
          "icon": "__base__/graphics/icons/fluid/barreling/empty-barrel.png",
          "icon_size": 64
        },
        
        {
          "icon": "__base__/graphics/icons/fluid/barreling/barrel-side-mask.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0,
            "g": 0.34000000000000003552713678800500929355621337890625,
            "b": 0.6,
            "a": 0.75
          }
        },
        
        {
          "icon": "__base__/graphics/icons/fluid/barreling/barrel-hoop-top-mask.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.7,
            "g": 0.7,
            "b": 0.7,
            "a": 0.75
          }
        }
      ],
      "icon_size": 64,
      "subgroup": "barrel",
      "order": "a[fluid]-a[water]-a[water]",
      "weight": 10000,
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-barrel-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-barrel-inventory-pickup.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-barrel-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 10,
      "factoriopedia_alternative": "barrel"
    },
    "sulfuric-acid-barrel": 
    {
      "type": "item",
      "name": "sulfuric-acid-barrel",
      "localised_name": 
      [
        "item-name.filled-barrel",
        
        [
          "fluid-name.sulfuric-acid"
        ]
      ],
      "icons": 
      [
        
        {
          "icon": "__base__/graphics/icons/fluid/barreling/empty-barrel.png",
          "icon_size": 64
        },
        
        {
          "icon": "__base__/graphics/icons/fluid/barreling/barrel-side-mask.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.75,
            "g": 0.65,
            "b": 0.1,
            "a": 0.75
          }
        },
        
        {
          "icon": "__base__/graphics/icons/fluid/barreling/barrel-hoop-top-mask.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.7,
            "g": 1,
            "b": 0.1,
            "a": 0.75
          }
        }
      ],
      "icon_size": 64,
      "subgroup": "barrel",
      "order": "a[fluid]-b[oil]-f[sulfuric-acid]",
      "weight": 10000,
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-barrel-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-barrel-inventory-pickup.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-barrel-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 10,
      "factoriopedia_alternative": "barrel"
    },
    "crude-oil-barrel": 
    {
      "type": "item",
      "name": "crude-oil-barrel",
      "localised_name": 
      [
        "item-name.filled-barrel",
        
        [
          "fluid-name.crude-oil"
        ]
      ],
      "icons": 
      [
        
        {
          "icon": "__base__/graphics/icons/fluid/barreling/empty-barrel.png",
          "icon_size": 64
        },
        
        {
          "icon": "__base__/graphics/icons/fluid/barreling/barrel-side-mask.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0,
            "g": 0,
            "b": 0,
            "a": 0.75
          }
        },
        
        {
          "icon": "__base__/graphics/icons/fluid/barreling/barrel-hoop-top-mask.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.5,
            "g": 0.5,
            "b": 0.5,
            "a": 0.75
          }
        }
      ],
      "icon_size": 64,
      "subgroup": "barrel",
      "order": "a[fluid]-b[oil]-a[crude-oil]",
      "weight": 10000,
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-barrel-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-barrel-inventory-pickup.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-barrel-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 10,
      "factoriopedia_alternative": "barrel"
    },
    "heavy-oil-barrel": 
    {
      "type": "item",
      "name": "heavy-oil-barrel",
      "localised_name": 
      [
        "item-name.filled-barrel",
        
        [
          "fluid-name.heavy-oil"
        ]
      ],
      "icons": 
      [
        
        {
          "icon": "__base__/graphics/icons/fluid/barreling/empty-barrel.png",
          "icon_size": 64
        },
        
        {
          "icon": "__base__/graphics/icons/fluid/barreling/barrel-side-mask.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.5,
            "g": 0.13000000000000000444089209850062616169452667236328125,
            "b": 0,
            "a": 0.75
          }
        },
        
        {
          "icon": "__base__/graphics/icons/fluid/barreling/barrel-hoop-top-mask.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.85,
            "g": 0.6,
            "b": 0.3,
            "a": 0.75
          }
        }
      ],
      "icon_size": 64,
      "subgroup": "barrel",
      "order": "a[fluid]-b[oil]-d[heavy-oil]",
      "weight": 10000,
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-barrel-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-barrel-inventory-pickup.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-barrel-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 10,
      "factoriopedia_alternative": "barrel"
    },
    "light-oil-barrel": 
    {
      "type": "item",
      "name": "light-oil-barrel",
      "localised_name": 
      [
        "item-name.filled-barrel",
        
        [
          "fluid-name.light-oil"
        ]
      ],
      "icons": 
      [
        
        {
          "icon": "__base__/graphics/icons/fluid/barreling/empty-barrel.png",
          "icon_size": 64
        },
        
        {
          "icon": "__base__/graphics/icons/fluid/barreling/barrel-side-mask.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.5699999999999999289457264239899814128875732421875,
            "g": 0.3300000000000000266453525910037569701671600341796875,
            "b": 0,
            "a": 0.75
          }
        },
        
        {
          "icon": "__base__/graphics/icons/fluid/barreling/barrel-hoop-top-mask.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 1,
            "g": 0.729999999999999982236431605997495353221893310546875,
            "b": 0.0700000000000000088817841970012523233890533447265625,
            "a": 0.75
          }
        }
      ],
      "icon_size": 64,
      "subgroup": "barrel",
      "order": "a[fluid]-b[oil]-c[light-oil]",
      "weight": 10000,
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-barrel-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-barrel-inventory-pickup.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-barrel-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 10,
      "factoriopedia_alternative": "barrel"
    },
    "petroleum-gas-barrel": 
    {
      "type": "item",
      "name": "petroleum-gas-barrel",
      "localised_name": 
      [
        "item-name.filled-barrel",
        
        [
          "fluid-name.petroleum-gas"
        ]
      ],
      "icons": 
      [
        
        {
          "icon": "__base__/graphics/icons/fluid/barreling/empty-barrel.png",
          "icon_size": 64
        },
        
        {
          "icon": "__base__/graphics/icons/fluid/barreling/barrel-side-mask.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.3,
            "g": 0.1,
            "b": 0.3,
            "a": 0.75
          }
        },
        
        {
          "icon": "__base__/graphics/icons/fluid/barreling/barrel-hoop-top-mask.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.8,
            "g": 0.8,
            "b": 0.8,
            "a": 0.75
          }
        }
      ],
      "icon_size": 64,
      "subgroup": "barrel",
      "order": "a[fluid]-b[oil]-b[petroleum-gas]",
      "weight": 10000,
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-barrel-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-barrel-inventory-pickup.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-barrel-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 10,
      "factoriopedia_alternative": "barrel"
    },
    "lubricant-barrel": 
    {
      "type": "item",
      "name": "lubricant-barrel",
      "localised_name": 
      [
        "item-name.filled-barrel",
        
        [
          "fluid-name.lubricant"
        ]
      ],
      "icons": 
      [
        
        {
          "icon": "__base__/graphics/icons/fluid/barreling/empty-barrel.png",
          "icon_size": 64
        },
        
        {
          "icon": "__base__/graphics/icons/fluid/barreling/barrel-side-mask.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.15,
            "g": 0.320000000000000017763568394002504646778106689453125,
            "b": 0.03,
            "a": 0.75
          }
        },
        
        {
          "icon": "__base__/graphics/icons/fluid/barreling/barrel-hoop-top-mask.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.429999999999999982236431605997495353221893310546875,
            "g": 0.75,
            "b": 0.3100000000000000088817841970012523233890533447265625,
            "a": 0.75
          }
        }
      ],
      "icon_size": 64,
      "subgroup": "barrel",
      "order": "a[fluid]-b[oil]-e[lubricant]",
      "weight": 10000,
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-barrel-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-barrel-inventory-pickup.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-barrel-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 10,
      "factoriopedia_alternative": "barrel"
    },
    "fluoroketone-cold-barrel": 
    {
      "type": "item",
      "name": "fluoroketone-cold-barrel",
      "localised_name": 
      [
        "item-name.filled-barrel",
        
        [
          "fluid-name.fluoroketone-cold"
        ]
      ],
      "icons": 
      [
        
        {
          "icon": "__base__/graphics/icons/fluid/barreling/empty-barrel.png",
          "icon_size": 64
        },
        
        {
          "icon": "__base__/graphics/icons/fluid/barreling/barrel-side-mask.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0,
            "g": 0.3,
            "b": 0.15,
            "a": 0.75
          }
        },
        
        {
          "icon": "__base__/graphics/icons/fluid/barreling/barrel-hoop-top-mask.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.1,
            "g": 0.7,
            "b": 0.4,
            "a": 0.75
          }
        }
      ],
      "icon_size": 64,
      "subgroup": "barrel",
      "order": "b[new-fluid]-e[aquilo]-e[fluoroketone-cold]",
      "weight": 10000,
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-barrel-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-barrel-inventory-pickup.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-barrel-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 10,
      "factoriopedia_alternative": "barrel",
      "default_import_location": "aquilo"
    },
    "fluoroketone-hot-barrel": 
    {
      "type": "item",
      "name": "fluoroketone-hot-barrel",
      "localised_name": 
      [
        "item-name.filled-barrel",
        
        [
          "fluid-name.fluoroketone-hot"
        ]
      ],
      "icons": 
      [
        
        {
          "icon": "__base__/graphics/icons/fluid/barreling/empty-barrel.png",
          "icon_size": 64
        },
        
        {
          "icon": "__base__/graphics/icons/fluid/barreling/barrel-side-mask.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.3,
            "g": 0.3,
            "b": 0.1,
            "a": 0.75
          }
        },
        
        {
          "icon": "__base__/graphics/icons/fluid/barreling/barrel-hoop-top-mask.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.4,
            "g": 0.7,
            "b": 0.35,
            "a": 0.75
          }
        }
      ],
      "icon_size": 64,
      "subgroup": "barrel",
      "order": "b[new-fluid]-e[aquilo]-d[fluoroketone-hot]",
      "weight": 10000,
      "inventory_move_sound": 
      {
        "filename": "__base__/sound/item/metal-barrel-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "pick_sound": 
      {
        "filename": "__base__/sound/item/metal-barrel-inventory-pickup.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "drop_sound": 
      {
        "filename": "__base__/sound/item/metal-barrel-inventory-move.ogg",
        "volume": 0.5,
        "aggregation": 
        {
          "max_count": 1,
          "remove": true
        }
      },
      "stack_size": 10,
      "factoriopedia_alternative": "barrel"
    },
    "bpsb-sbt-deepwater": 
    {
      "type": "item",
      "name": "bpsb-sbt-deepwater",
      "localised_name": 
      [
        "tile-name.deepwater"
      ],
      "icons": 
      [
        
        {
          "icon": "__blueprint-sandboxes__/graphics/icon-x64.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.5,
            "g": 0.5,
            "b": 0.5,
            "a": 1
          }
        },
        
        {
          "icon": "__base__/graphics/terrain/deepwater/deepwater1.png",
          "icon_size": 64,
          "scale": 0.25
        }
      ],
      "subgroup": "bpsb-sandbox-tiles",
      "order": "a[water]-b[deep-water]",
      "hidden_in_factoriopedia": true,
      "stack_size": 1000,
      "place_as_tile": 
      {
        "result": "deepwater",
        "condition": 
        {
          "layers": 
          {}
        },
        "condition_size": 1
      }
    },
    "bpsb-sbt-deepwater-green": 
    {
      "type": "item",
      "name": "bpsb-sbt-deepwater-green",
      "localised_name": 
      [
        "tile-name.deepwater-green"
      ],
      "icons": 
      [
        
        {
          "icon": "__blueprint-sandboxes__/graphics/icon-x64.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.5,
            "g": 0.5,
            "b": 0.5,
            "a": 1
          }
        },
        
        {
          "icon": "__base__/graphics/terrain/deepwater-green/deepwater-green1.png",
          "icon_size": 64,
          "scale": 0.25
        }
      ],
      "subgroup": "bpsb-sandbox-tiles",
      "order": "a[water]-d[deepwater-green]",
      "hidden_in_factoriopedia": true,
      "stack_size": 1000,
      "place_as_tile": 
      {
        "result": "deepwater-green",
        "condition": 
        {
          "layers": 
          {}
        },
        "condition_size": 1
      }
    },
    "bpsb-sbt-water": 
    {
      "type": "item",
      "name": "bpsb-sbt-water",
      "localised_name": 
      [
        "tile-name.water"
      ],
      "icons": 
      [
        
        {
          "icon": "__blueprint-sandboxes__/graphics/icon-x64.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.5,
            "g": 0.5,
            "b": 0.5,
            "a": 1
          }
        },
        
        {
          "icon": "__base__/graphics/terrain/water/water1.png",
          "icon_size": 64,
          "scale": 0.25
        }
      ],
      "subgroup": "bpsb-sandbox-tiles",
      "order": "a[water]-a[water]",
      "hidden_in_factoriopedia": true,
      "stack_size": 1000,
      "place_as_tile": 
      {
        "result": "water",
        "condition": 
        {
          "layers": 
          {}
        },
        "condition_size": 1
      }
    },
    "bpsb-sbt-water-green": 
    {
      "type": "item",
      "name": "bpsb-sbt-water-green",
      "localised_name": 
      [
        "tile-name.water-green"
      ],
      "icons": 
      [
        
        {
          "icon": "__blueprint-sandboxes__/graphics/icon-x64.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.5,
            "g": 0.5,
            "b": 0.5,
            "a": 1
          }
        },
        
        {
          "icon": "__base__/graphics/terrain/water-green/water-green1.png",
          "icon_size": 64,
          "scale": 0.25
        }
      ],
      "subgroup": "bpsb-sandbox-tiles",
      "order": "a[water]-c[water-green]",
      "hidden_in_factoriopedia": true,
      "stack_size": 1000,
      "place_as_tile": 
      {
        "result": "water-green",
        "condition": 
        {
          "layers": 
          {}
        },
        "condition_size": 1
      }
    },
    "bpsb-sbt-water-shallow": 
    {
      "type": "item",
      "name": "bpsb-sbt-water-shallow",
      "localised_name": 
      [
        "tile-name.water-shallow"
      ],
      "icons": 
      [
        
        {
          "icon": "__blueprint-sandboxes__/graphics/icon-x64.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.5,
            "g": 0.5,
            "b": 0.5,
            "a": 1
          }
        },
        
        {
          "icon": "__base__/graphics/terrain/water-shallow/water-shallow1.png",
          "icon_size": 64,
          "scale": 0.25
        }
      ],
      "subgroup": "bpsb-sandbox-tiles",
      "order": "a[water]-e[water-shallow]",
      "hidden_in_factoriopedia": true,
      "stack_size": 1000,
      "place_as_tile": 
      {
        "result": "water-shallow",
        "condition": 
        {
          "layers": 
          {}
        },
        "condition_size": 1
      }
    },
    "bpsb-sbt-water-mud": 
    {
      "type": "item",
      "name": "bpsb-sbt-water-mud",
      "localised_name": 
      [
        "tile-name.water-mud"
      ],
      "icons": 
      [
        
        {
          "icon": "__blueprint-sandboxes__/graphics/icon-x64.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.5,
            "g": 0.5,
            "b": 0.5,
            "a": 1
          }
        },
        
        {
          "icon": "__base__/graphics/terrain/water-mud/water-mud1.png",
          "icon_size": 64,
          "scale": 0.25
        }
      ],
      "subgroup": "bpsb-sandbox-tiles",
      "order": "a[water]-g[water-mud]",
      "hidden_in_factoriopedia": true,
      "stack_size": 1000,
      "place_as_tile": 
      {
        "result": "water-mud",
        "condition": 
        {
          "layers": 
          {}
        },
        "condition_size": 1
      }
    },
    "bpsb-sbt-lava": 
    {
      "type": "item",
      "name": "bpsb-sbt-lava",
      "localised_name": 
      [
        "tile-name.lava"
      ],
      "icons": 
      [
        
        {
          "icon": "__blueprint-sandboxes__/graphics/icon-x64.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.5,
            "g": 0.5,
            "b": 0.5,
            "a": 1
          }
        },
        
        {
          "icon": "__space-age__/graphics/terrain/vulcanus/lava.png",
          "icon_size": 64,
          "scale": 0.25
        }
      ],
      "subgroup": "bpsb-sandbox-tiles",
      "order": "a-b",
      "hidden_in_factoriopedia": true,
      "stack_size": 1000,
      "place_as_tile": 
      {
        "result": "lava",
        "condition": 
        {
          "layers": 
          {}
        },
        "condition_size": 1
      }
    },
    "bpsb-sbt-lava-hot": 
    {
      "type": "item",
      "name": "bpsb-sbt-lava-hot",
      "localised_name": 
      [
        "tile-name.lava-hot"
      ],
      "icons": 
      [
        
        {
          "icon": "__blueprint-sandboxes__/graphics/icon-x64.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.5,
            "g": 0.5,
            "b": 0.5,
            "a": 1
          }
        },
        
        {
          "icon": "__space-age__/graphics/terrain/vulcanus/lava-hot.png",
          "icon_size": 64,
          "scale": 0.25
        }
      ],
      "subgroup": "bpsb-sandbox-tiles",
      "order": "a-a",
      "hidden_in_factoriopedia": true,
      "stack_size": 1000,
      "place_as_tile": 
      {
        "result": "lava-hot",
        "condition": 
        {
          "layers": 
          {}
        },
        "condition_size": 1
      }
    },
    "bpsb-sbt-wetland-yumako": 
    {
      "type": "item",
      "name": "bpsb-sbt-wetland-yumako",
      "localised_name": 
      [
        "tile-name.wetland-yumako"
      ],
      "icons": 
      [
        
        {
          "icon": "__blueprint-sandboxes__/graphics/icon-x64.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.5,
            "g": 0.5,
            "b": 0.5,
            "a": 1
          }
        },
        
        {
          "icon": "__space-age__/graphics/icons/wetland-yumako.png",
          "icon_size": 64,
          "scale": 0.5
        }
      ],
      "subgroup": "bpsb-sandbox-tiles",
      "order": "c[resource]-a[wetland-yumako]",
      "hidden_in_factoriopedia": true,
      "stack_size": 1000,
      "place_as_tile": 
      {
        "result": "wetland-yumako",
        "condition": 
        {
          "layers": 
          {}
        },
        "condition_size": 1
      }
    },
    "bpsb-sbt-wetland-jellynut": 
    {
      "type": "item",
      "name": "bpsb-sbt-wetland-jellynut",
      "localised_name": 
      [
        "tile-name.wetland-jellynut"
      ],
      "icons": 
      [
        
        {
          "icon": "__blueprint-sandboxes__/graphics/icon-x64.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.5,
            "g": 0.5,
            "b": 0.5,
            "a": 1
          }
        },
        
        {
          "icon": "__space-age__/graphics/icons/wetland-jellynut.png",
          "icon_size": 64,
          "scale": 0.5
        }
      ],
      "subgroup": "bpsb-sandbox-tiles",
      "order": "c[resource]-b[wetland-jellynut]",
      "hidden_in_factoriopedia": true,
      "stack_size": 1000,
      "place_as_tile": 
      {
        "result": "wetland-jellynut",
        "condition": 
        {
          "layers": 
          {}
        },
        "condition_size": 1
      }
    },
    "bpsb-sbt-wetland-dead-skin": 
    {
      "type": "item",
      "name": "bpsb-sbt-wetland-dead-skin",
      "localised_name": 
      [
        "tile-name.wetland-dead-skin"
      ],
      "icons": 
      [
        
        {
          "icon": "__blueprint-sandboxes__/graphics/icon-x64.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.5,
            "g": 0.5,
            "b": 0.5,
            "a": 1
          }
        },
        
        {
          "icon": "__space-age__/graphics/terrain/gleba/wetland-dead-skin.png",
          "icon_size": 64,
          "scale": 0.25
        }
      ],
      "subgroup": "bpsb-sandbox-tiles",
      "order": "b[wetland]-d[wetland-dead-skin]",
      "hidden_in_factoriopedia": true,
      "stack_size": 1000,
      "place_as_tile": 
      {
        "result": "wetland-dead-skin",
        "condition": 
        {
          "layers": 
          {}
        },
        "condition_size": 1
      }
    },
    "bpsb-sbt-wetland-light-dead-skin": 
    {
      "type": "item",
      "name": "bpsb-sbt-wetland-light-dead-skin",
      "localised_name": 
      [
        "tile-name.wetland-light-dead-skin"
      ],
      "icons": 
      [
        
        {
          "icon": "__blueprint-sandboxes__/graphics/icon-x64.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.5,
            "g": 0.5,
            "b": 0.5,
            "a": 1
          }
        },
        
        {
          "icon": "__space-age__/graphics/terrain/gleba/wetland-dead-skin.png",
          "icon_size": 64,
          "scale": 0.25
        }
      ],
      "subgroup": "bpsb-sandbox-tiles",
      "order": "b[wetland]-c[wetland-light-dead-skin]",
      "hidden_in_factoriopedia": true,
      "stack_size": 1000,
      "place_as_tile": 
      {
        "result": "wetland-light-dead-skin",
        "condition": 
        {
          "layers": 
          {}
        },
        "condition_size": 1
      }
    },
    "bpsb-sbt-wetland-green-slime": 
    {
      "type": "item",
      "name": "bpsb-sbt-wetland-green-slime",
      "localised_name": 
      [
        "tile-name.wetland-green-slime"
      ],
      "icons": 
      [
        
        {
          "icon": "__blueprint-sandboxes__/graphics/icon-x64.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.5,
            "g": 0.5,
            "b": 0.5,
            "a": 1
          }
        },
        
        {
          "icon": "__space-age__/graphics/terrain/gleba/wetland-green-slime.png",
          "icon_size": 64,
          "scale": 0.25
        }
      ],
      "subgroup": "bpsb-sandbox-tiles",
      "order": "b[wetland]-b[wetland-green-slime]",
      "hidden_in_factoriopedia": true,
      "stack_size": 1000,
      "place_as_tile": 
      {
        "result": "wetland-green-slime",
        "condition": 
        {
          "layers": 
          {}
        },
        "condition_size": 1
      }
    },
    "bpsb-sbt-wetland-light-green-slime": 
    {
      "type": "item",
      "name": "bpsb-sbt-wetland-light-green-slime",
      "localised_name": 
      [
        "tile-name.wetland-light-green-slime"
      ],
      "icons": 
      [
        
        {
          "icon": "__blueprint-sandboxes__/graphics/icon-x64.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.5,
            "g": 0.5,
            "b": 0.5,
            "a": 1
          }
        },
        
        {
          "icon": "__space-age__/graphics/terrain/gleba/wetland-green-slime.png",
          "icon_size": 64,
          "scale": 0.25
        }
      ],
      "subgroup": "bpsb-sandbox-tiles",
      "order": "b[wetland]-a[wetland-light-green-slime]",
      "hidden_in_factoriopedia": true,
      "stack_size": 1000,
      "place_as_tile": 
      {
        "result": "wetland-light-green-slime",
        "condition": 
        {
          "layers": 
          {}
        },
        "condition_size": 1
      }
    },
    "bpsb-sbt-wetland-red-tentacle": 
    {
      "type": "item",
      "name": "bpsb-sbt-wetland-red-tentacle",
      "localised_name": 
      [
        "tile-name.wetland-red-tentacle"
      ],
      "icons": 
      [
        
        {
          "icon": "__blueprint-sandboxes__/graphics/icon-x64.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.5,
            "g": 0.5,
            "b": 0.5,
            "a": 1
          }
        },
        
        {
          "icon": "__space-age__/graphics/terrain/gleba/wetland-purple-tentacle.png",
          "icon_size": 64,
          "scale": 0.25
        }
      ],
      "subgroup": "bpsb-sandbox-tiles",
      "order": "b[wetland]-f[wetland-red-tentacle]",
      "hidden_in_factoriopedia": true,
      "stack_size": 1000,
      "place_as_tile": 
      {
        "result": "wetland-red-tentacle",
        "condition": 
        {
          "layers": 
          {}
        },
        "condition_size": 1
      }
    },
    "bpsb-sbt-wetland-pink-tentacle": 
    {
      "type": "item",
      "name": "bpsb-sbt-wetland-pink-tentacle",
      "localised_name": 
      [
        "tile-name.wetland-pink-tentacle"
      ],
      "icons": 
      [
        
        {
          "icon": "__blueprint-sandboxes__/graphics/icon-x64.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.5,
            "g": 0.5,
            "b": 0.5,
            "a": 1
          }
        },
        
        {
          "icon": "__space-age__/graphics/terrain/gleba/wetland-purple-tentacle.png",
          "icon_size": 64,
          "scale": 0.25
        }
      ],
      "subgroup": "bpsb-sandbox-tiles",
      "order": "b[wetland]-e[wetland-pink-tentacle]",
      "hidden_in_factoriopedia": true,
      "stack_size": 1000,
      "place_as_tile": 
      {
        "result": "wetland-pink-tentacle",
        "condition": 
        {
          "layers": 
          {}
        },
        "condition_size": 1
      }
    },
    "bpsb-sbt-wetland-blue-slime": 
    {
      "type": "item",
      "name": "bpsb-sbt-wetland-blue-slime",
      "localised_name": 
      [
        "tile-name.wetland-blue-slime"
      ],
      "icons": 
      [
        
        {
          "icon": "__blueprint-sandboxes__/graphics/icon-x64.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.5,
            "g": 0.5,
            "b": 0.5,
            "a": 1
          }
        },
        
        {
          "icon": "__base__/graphics/terrain/water/water1.png",
          "icon_size": 64,
          "scale": 0.25
        }
      ],
      "subgroup": "bpsb-sandbox-tiles",
      "order": "b[wetland]-a[wetland-blue-slime]",
      "hidden_in_factoriopedia": true,
      "stack_size": 1000,
      "place_as_tile": 
      {
        "result": "wetland-blue-slime",
        "condition": 
        {
          "layers": 
          {}
        },
        "condition_size": 1
      }
    },
    "bpsb-sbt-gleba-deep-lake": 
    {
      "type": "item",
      "name": "bpsb-sbt-gleba-deep-lake",
      "localised_name": 
      [
        "tile-name.gleba-deep-lake"
      ],
      "icons": 
      [
        
        {
          "icon": "__blueprint-sandboxes__/graphics/icon-x64.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.5,
            "g": 0.5,
            "b": 0.5,
            "a": 1
          }
        },
        
        {
          "icon": "__base__/graphics/terrain/deepwater/deepwater1.png",
          "icon_size": 64,
          "scale": 0.25
        }
      ],
      "subgroup": "bpsb-sandbox-tiles",
      "order": "a[deep]",
      "hidden_in_factoriopedia": true,
      "stack_size": 1000,
      "place_as_tile": 
      {
        "result": "gleba-deep-lake",
        "condition": 
        {
          "layers": 
          {}
        },
        "condition_size": 1
      }
    },
    "bpsb-sbt-oil-ocean-shallow": 
    {
      "type": "item",
      "name": "bpsb-sbt-oil-ocean-shallow",
      "localised_name": 
      [
        "tile-name.oil-ocean-shallow"
      ],
      "icons": 
      [
        
        {
          "icon": "__blueprint-sandboxes__/graphics/icon-x64.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.5,
            "g": 0.5,
            "b": 0.5,
            "a": 1
          }
        },
        
        {
          "icon": "__space-age__/graphics/terrain/oil-sand-8x.png",
          "icon_size": 64,
          "scale": 0.25
        }
      ],
      "subgroup": "bpsb-sandbox-tiles",
      "order": "a[oil]-b[shallow]",
      "hidden_in_factoriopedia": true,
      "stack_size": 1000,
      "place_as_tile": 
      {
        "result": "oil-ocean-shallow",
        "condition": 
        {
          "layers": 
          {}
        },
        "condition_size": 1
      }
    },
    "bpsb-sbt-oil-ocean-deep": 
    {
      "type": "item",
      "name": "bpsb-sbt-oil-ocean-deep",
      "localised_name": 
      [
        "tile-name.oil-ocean-deep"
      ],
      "icons": 
      [
        
        {
          "icon": "__blueprint-sandboxes__/graphics/icon-x64.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.5,
            "g": 0.5,
            "b": 0.5,
            "a": 1
          }
        },
        
        {
          "icon": "__space-age__/graphics/terrain/oil-ocean-deep.png",
          "icon_size": 64,
          "scale": 0.25
        }
      ],
      "subgroup": "bpsb-sandbox-tiles",
      "order": "a[oil]-b[deep]",
      "hidden_in_factoriopedia": true,
      "stack_size": 1000,
      "place_as_tile": 
      {
        "result": "oil-ocean-deep",
        "condition": 
        {
          "layers": 
          {}
        },
        "condition_size": 1
      }
    },
    "bpsb-sbt-ammoniacal-ocean": 
    {
      "type": "item",
      "name": "bpsb-sbt-ammoniacal-ocean",
      "localised_name": 
      [
        "tile-name.ammoniacal-ocean"
      ],
      "icons": 
      [
        
        {
          "icon": "__blueprint-sandboxes__/graphics/icon-x64.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.5,
            "g": 0.5,
            "b": 0.5,
            "a": 1
          }
        },
        
        {
          "icon": "__base__/graphics/terrain/water/water1.png",
          "icon_size": 64,
          "scale": 0.25
        }
      ],
      "subgroup": "bpsb-sandbox-tiles",
      "order": "a[aquilo-water]-a[ammoniacal-ocean]",
      "hidden_in_factoriopedia": true,
      "stack_size": 1000,
      "place_as_tile": 
      {
        "result": "ammoniacal-ocean",
        "condition": 
        {
          "layers": 
          {}
        },
        "condition_size": 1
      }
    },
    "bpsb-sbt-ammoniacal-ocean-2": 
    {
      "type": "item",
      "name": "bpsb-sbt-ammoniacal-ocean-2",
      "localised_name": 
      [
        "tile-name.ammoniacal-ocean-2"
      ],
      "icons": 
      [
        
        {
          "icon": "__blueprint-sandboxes__/graphics/icon-x64.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.5,
            "g": 0.5,
            "b": 0.5,
            "a": 1
          }
        },
        
        {
          "icon": "__base__/graphics/terrain/water/water1.png",
          "icon_size": 64,
          "scale": 0.25
        }
      ],
      "subgroup": "bpsb-sandbox-tiles",
      "order": "a[aquilo-water]-b[ammoniacal-ocean-2]",
      "hidden_in_factoriopedia": true,
      "stack_size": 1000,
      "place_as_tile": 
      {
        "result": "ammoniacal-ocean-2",
        "condition": 
        {
          "layers": 
          {}
        },
        "condition_size": 1
      }
    },
    "bpsb-sbt-brash-ice": 
    {
      "type": "item",
      "name": "bpsb-sbt-brash-ice",
      "localised_name": 
      [
        "tile-name.brash-ice"
      ],
      "icons": 
      [
        
        {
          "icon": "__blueprint-sandboxes__/graphics/icon-x64.png",
          "icon_size": 64,
          "tint": 
          {
            "r": 0.5,
            "g": 0.5,
            "b": 0.5,
            "a": 1
          }
        },
        
        {
          "icon": "__base__/graphics/terrain/deepwater/deepwater1.png",
          "icon_size": 64,
          "scale": 0.25
        }
      ],
      "subgroup": "bpsb-sandbox-tiles",
      "order": "a[deep]",
      "hidden_in_factoriopedia": true,
      "stack_size": 1000,
      "place_as_tile": 
      {
        "result": "brash-ice",
        "condition": 
        {
          "layers": 
          {}
        },
        "condition_size": 1
      }
    }
  };