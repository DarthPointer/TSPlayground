import { RecipeNode } from "./RecipesType";

export const Recipes: Record<string, RecipeNode> = {
  "recipe-unknown": {
    type: "recipe",
    name: "recipe-unknown",
    icon: "__core__/graphics/icons/unknown.png",
    icon_size: 64,
    hidden: true,
    ingredients: {},
    results: {},
  },
  "parameter-0": {
    type: "recipe",
    name: "parameter-0",
    icon: "__base__/graphics/icons/parameter/parameter-0.png",
    localised_name: ["parameter-x", "0"],
    subgroup: "parameters",
    category: "parameters",
    order: "a",
    parameter: true,
    allow_productivity: true,
  },
  "parameter-1": {
    type: "recipe",
    name: "parameter-1",
    icon: "__base__/graphics/icons/parameter/parameter-1.png",
    localised_name: ["parameter-x", "1"],
    subgroup: "parameters",
    category: "parameters",
    order: "a",
    parameter: true,
    allow_productivity: true,
  },
  "parameter-2": {
    type: "recipe",
    name: "parameter-2",
    icon: "__base__/graphics/icons/parameter/parameter-2.png",
    localised_name: ["parameter-x", "2"],
    subgroup: "parameters",
    category: "parameters",
    order: "a",
    parameter: true,
    allow_productivity: true,
  },
  "parameter-3": {
    type: "recipe",
    name: "parameter-3",
    icon: "__base__/graphics/icons/parameter/parameter-3.png",
    localised_name: ["parameter-x", "3"],
    subgroup: "parameters",
    category: "parameters",
    order: "a",
    parameter: true,
    allow_productivity: true,
  },
  "parameter-4": {
    type: "recipe",
    name: "parameter-4",
    icon: "__base__/graphics/icons/parameter/parameter-4.png",
    localised_name: ["parameter-x", "4"],
    subgroup: "parameters",
    category: "parameters",
    order: "a",
    parameter: true,
    allow_productivity: true,
  },
  "parameter-5": {
    type: "recipe",
    name: "parameter-5",
    icon: "__base__/graphics/icons/parameter/parameter-5.png",
    localised_name: ["parameter-x", "5"],
    subgroup: "parameters",
    category: "parameters",
    order: "a",
    parameter: true,
    allow_productivity: true,
  },
  "parameter-6": {
    type: "recipe",
    name: "parameter-6",
    icon: "__base__/graphics/icons/parameter/parameter-6.png",
    localised_name: ["parameter-x", "6"],
    subgroup: "parameters",
    category: "parameters",
    order: "a",
    parameter: true,
    allow_productivity: true,
  },
  "parameter-7": {
    type: "recipe",
    name: "parameter-7",
    icon: "__base__/graphics/icons/parameter/parameter-7.png",
    localised_name: ["parameter-x", "7"],
    subgroup: "parameters",
    category: "parameters",
    order: "a",
    parameter: true,
    allow_productivity: true,
  },
  "parameter-8": {
    type: "recipe",
    name: "parameter-8",
    icon: "__base__/graphics/icons/parameter/parameter-8.png",
    localised_name: ["parameter-x", "8"],
    subgroup: "parameters",
    category: "parameters",
    order: "a",
    parameter: true,
    allow_productivity: true,
  },
  "parameter-9": {
    type: "recipe",
    name: "parameter-9",
    icon: "__base__/graphics/icons/parameter/parameter-9.png",
    localised_name: ["parameter-x", "9"],
    subgroup: "parameters",
    category: "parameters",
    order: "a",
    parameter: true,
    allow_productivity: true,
  },
  "speed-module": {
    type: "recipe",
    name: "speed-module",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "advanced-circuit",
        amount: 5,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 5,
      },
    ],
    energy_required: 15,
    results: [
      {
        type: "item",
        name: "speed-module",
        amount: 1,
      },
    ],
    category: "electronics",
  },
  "speed-module-2": {
    type: "recipe",
    name: "speed-module-2",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "speed-module",
        amount: 4,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 5,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 5,
      },
    ],
    energy_required: 30,
    results: [
      {
        type: "item",
        name: "speed-module-2",
        amount: 1,
      },
    ],
    category: "electronics",
  },
  "speed-module-3": {
    type: "recipe",
    name: "speed-module-3",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "speed-module-2",
        amount: 4,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 5,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 5,
      },

      {
        type: "item",
        name: "tungsten-carbide",
        amount: 1,
      },
    ],
    energy_required: 60,
    results: [
      {
        type: "item",
        name: "speed-module-3",
        amount: 1,
      },
    ],
    category: "electronics",
  },
  "productivity-module": {
    type: "recipe",
    name: "productivity-module",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "advanced-circuit",
        amount: 5,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 5,
      },
    ],
    energy_required: 15,
    results: [
      {
        type: "item",
        name: "productivity-module",
        amount: 1,
      },
    ],
    category: "electronics",
  },
  "productivity-module-2": {
    type: "recipe",
    name: "productivity-module-2",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "productivity-module",
        amount: 4,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 5,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 5,
      },
    ],
    energy_required: 30,
    results: [
      {
        type: "item",
        name: "productivity-module-2",
        amount: 1,
      },
    ],
    category: "electronics",
  },
  "productivity-module-3": {
    type: "recipe",
    name: "productivity-module-3",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "productivity-module-2",
        amount: 4,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 5,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 5,
      },

      {
        type: "item",
        name: "biter-egg",
        amount: 1,
      },
    ],
    energy_required: 60,
    results: [
      {
        type: "item",
        name: "productivity-module-3",
        amount: 1,
      },
    ],
    category: "electronics",
  },
  "efficiency-module": {
    type: "recipe",
    name: "efficiency-module",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "advanced-circuit",
        amount: 5,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 5,
      },
    ],
    energy_required: 15,
    results: [
      {
        type: "item",
        name: "efficiency-module",
        amount: 1,
      },
    ],
    category: "electronics",
  },
  "efficiency-module-2": {
    type: "recipe",
    name: "efficiency-module-2",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "efficiency-module",
        amount: 4,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 5,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 5,
      },
    ],
    energy_required: 30,
    results: [
      {
        type: "item",
        name: "efficiency-module-2",
        amount: 1,
      },
    ],
    category: "electronics",
  },
  "efficiency-module-3": {
    type: "recipe",
    name: "efficiency-module-3",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "efficiency-module-2",
        amount: 4,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 5,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 5,
      },

      {
        type: "item",
        name: "spoilage",
        amount: 5,
      },
    ],
    energy_required: 60,
    results: [
      {
        type: "item",
        name: "efficiency-module-3",
        amount: 1,
      },
    ],
    category: "electronics",
  },
  "bulk-inserter": {
    type: "recipe",
    name: "bulk-inserter",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 15,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 15,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 1,
      },

      {
        type: "item",
        name: "fast-inserter",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "bulk-inserter",
        amount: 1,
      },
    ],
  },
  "basic-oil-processing": {
    type: "recipe",
    name: "basic-oil-processing",
    category: "oil-processing",
    enabled: false,
    energy_required: 5,
    ingredients: [
      {
        type: "fluid",
        name: "crude-oil",
        amount: 100,
        fluidbox_index: 2,
      },
    ],
    results: [
      {
        type: "fluid",
        name: "petroleum-gas",
        amount: 45,
        fluidbox_index: 3,
      },
    ],
    allow_productivity: true,
    icon: "__base__/graphics/icons/fluid/basic-oil-processing.png",
    subgroup: "fluid-recipes",
    order: "a[oil-processing]-a[basic-oil-processing]",
    main_product: "",
    allow_quality: false,
  },
  "advanced-oil-processing": {
    type: "recipe",
    name: "advanced-oil-processing",
    category: "oil-processing",
    enabled: false,
    energy_required: 5,
    ingredients: [
      {
        type: "fluid",
        name: "water",
        amount: 50,
      },

      {
        type: "fluid",
        name: "crude-oil",
        amount: 100,
      },
    ],
    results: [
      {
        type: "fluid",
        name: "heavy-oil",
        amount: 25,
      },

      {
        type: "fluid",
        name: "light-oil",
        amount: 45,
      },

      {
        type: "fluid",
        name: "petroleum-gas",
        amount: 55,
      },
    ],
    allow_productivity: true,
    icon: "__base__/graphics/icons/fluid/advanced-oil-processing.png",
    subgroup: "fluid-recipes",
    order: "a[oil-processing]-b[advanced-oil-processing]",
    allow_quality: false,
  },
  "coal-liquefaction": {
    type: "recipe",
    name: "coal-liquefaction",
    category: "oil-processing",
    enabled: false,
    energy_required: 5,
    ingredients: [
      {
        type: "item",
        name: "coal",
        amount: 10,
      },

      {
        type: "fluid",
        name: "heavy-oil",
        amount: 25,
        ignored_by_stats: 25,
      },

      {
        type: "fluid",
        name: "steam",
        amount: 50,
      },
    ],
    results: [
      {
        type: "fluid",
        name: "heavy-oil",
        amount: 90,
        ignored_by_stats: 25,
        ignored_by_productivity: 25,
      },

      {
        type: "fluid",
        name: "light-oil",
        amount: 20,
      },

      {
        type: "fluid",
        name: "petroleum-gas",
        amount: 10,
      },
    ],
    allow_productivity: true,
    icon: "__base__/graphics/icons/fluid/coal-liquefaction.png",
    subgroup: "fluid-recipes",
    order: "a[oil-processing]-d[coal-liquefaction]",
    allow_decomposition: false,
  },
  "heavy-oil-cracking": {
    type: "recipe",
    name: "heavy-oil-cracking",
    category: "organic-or-chemistry",
    enabled: false,
    energy_required: 2,
    ingredients: [
      {
        type: "fluid",
        name: "water",
        amount: 30,
      },

      {
        type: "fluid",
        name: "heavy-oil",
        amount: 40,
      },
    ],
    results: [
      {
        type: "fluid",
        name: "light-oil",
        amount: 30,
      },
    ],
    allow_productivity: true,
    main_product: "",
    icon: "__base__/graphics/icons/fluid/heavy-oil-cracking.png",
    subgroup: "fluid-recipes",
    order: "b[fluid-chemistry]-a[heavy-oil-cracking]",
    crafting_machine_tint: {
      primary: {
        r: 1,
        g: 0.64199999999999999289457264239899814128875732421875,
        b: 0.261000000000000031974423109204508364200592041015625,
        a: 1,
      },
      secondary: {
        r: 1,
        g: 0.721999999999999975131004248396493494510650634765625,
        b: 0.37599999999999997868371792719699442386627197265625,
        a: 1,
      },
      tertiary: {
        r: 0.853999999999999914734871708787977695465087890625,
        g: 0.6589999999999999857891452847979962825775146484375,
        b: 0.57599999999999997868371792719699442386627197265625,
        a: 1,
      },
      quaternary: {
        r: 1,
        g: 0.49399999999999995026200849679298698902130126953125,
        b: 0.270999999999999996447286321199499070644378662109375,
        a: 1,
      },
    },
    allow_quality: false,
  },
  "light-oil-cracking": {
    type: "recipe",
    name: "light-oil-cracking",
    category: "organic-or-chemistry",
    enabled: false,
    energy_required: 2,
    ingredients: [
      {
        type: "fluid",
        name: "water",
        amount: 30,
      },

      {
        type: "fluid",
        name: "light-oil",
        amount: 30,
      },
    ],
    results: [
      {
        type: "fluid",
        name: "petroleum-gas",
        amount: 20,
      },
    ],
    allow_productivity: true,
    main_product: "",
    icon: "__base__/graphics/icons/fluid/light-oil-cracking.png",
    subgroup: "fluid-recipes",
    order: "b[fluid-chemistry]-b[light-oil-cracking]",
    crafting_machine_tint: {
      primary: {
        r: 0.76400000000000005684341886080801486968994140625,
        g: 0.595999999999999996447286321199499070644378662109375,
        b: 0.7800000000000000710542735760100185871124267578125,
        a: 1,
      },
      secondary: {
        r: 0.762000000000000010658141036401502788066864013671875,
        g: 0.551000000000000067501559897209517657756805419921875,
        b: 0.84399999999999995026200849679298698902130126953125,
        a: 1,
      },
      tertiary: {
        r: 0.8949999999999999289457264239899814128875732421875,
        g: 0.7730000000000000426325641456060111522674560546875,
        b: 0.595999999999999996447286321199499070644378662109375,
        a: 1,
      },
      quaternary: {
        r: 1,
        g: 0.7339999999999999857891452847979962825775146484375,
        b: 0.29,
        a: 1,
      },
    },
    allow_quality: false,
  },
  "sulfuric-acid": {
    type: "recipe",
    name: "sulfuric-acid",
    category: "chemistry-or-cryogenics",
    subgroup: "fluid-recipes",
    order: "c[oil-products]-b[sulfuric-acid]",
    energy_required: 1,
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "sulfur",
        amount: 5,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 1,
      },

      {
        type: "fluid",
        name: "water",
        amount: 100,
      },
    ],
    results: [
      {
        type: "fluid",
        name: "sulfuric-acid",
        amount: 50,
      },
    ],
    allow_productivity: true,
    crafting_machine_tint: {
      primary: {
        r: 1,
        g: 0.95800000000000000710542735760100185871124267578125,
        b: 0,
        a: 1,
      },
      secondary: {
        r: 1,
        g: 0.8519999999999999573674358543939888477325439453125,
        b: 0.171999999999999975131004248396493494510650634765625,
        a: 1,
      },
      tertiary: {
        r: 0.87599999999999997868371792719699442386627197265625,
        g: 0.86899999999999995026200849679298698902130126953125,
        b: 0.596999999999999975131004248396493494510650634765625,
        a: 1,
      },
      quaternary: {
        r: 0.96899999999999995026200849679298698902130126953125,
        g: 1,
        b: 0.019,
        a: 1,
      },
    },
  },
  "plastic-bar": {
    type: "recipe",
    name: "plastic-bar",
    category: "chemistry-or-cryogenics",
    energy_required: 1,
    enabled: false,
    ingredients: [
      {
        type: "fluid",
        name: "petroleum-gas",
        amount: 20,
      },

      {
        type: "item",
        name: "coal",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "plastic-bar",
        amount: 2,
      },
    ],
    allow_productivity: true,
    crafting_machine_tint: {
      primary: {
        r: 1,
        g: 1,
        b: 1,
        a: 1,
      },
      secondary: {
        r: 0.770999999999999996447286321199499070644378662109375,
        g: 0.770999999999999996447286321199499070644378662109375,
        b: 0.770999999999999996447286321199499070644378662109375,
        a: 1,
      },
      tertiary: {
        r: 0.767999999999999971578290569595992565155029296875,
        g: 0.66500000000000003552713678800500929355621337890625,
        b: 0.762000000000000010658141036401502788066864013671875,
        a: 1,
      },
      quaternary: {
        r: 0,
        g: 0,
        b: 0,
        a: 1,
      },
    },
  },
  "solid-fuel-from-light-oil": {
    type: "recipe",
    name: "solid-fuel-from-light-oil",
    category: "chemistry",
    energy_required: 1,
    ingredients: [
      {
        type: "fluid",
        name: "light-oil",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "solid-fuel",
        amount: 1,
      },
    ],
    allow_productivity: true,
    icon: "__base__/graphics/icons/solid-fuel-from-light-oil.png",
    subgroup: "fluid-recipes",
    enabled: false,
    order: "b[fluid-chemistry]-d[solid-fuel-from-light-oil]",
    crafting_machine_tint: {
      primary: {
        r: 0.70999999999999996447286321199499070644378662109375,
        g: 0.63300000000000000710542735760100185871124267578125,
        b: 0.482000000000000028421709430404007434844970703125,
        a: 1,
      },
      secondary: {
        r: 0.745000000000000017763568394002504646778106689453125,
        g: 0.67200000000000006394884621840901672840118408203125,
        b: 0.527000000000000046185277824406512081623077392578125,
        a: 1,
      },
      tertiary: {
        r: 0.89399999999999995026200849679298698902130126953125,
        g: 0.7730000000000000426325641456060111522674560546875,
        b: 0.595999999999999996447286321199499070644378662109375,
        a: 1,
      },
      quaternary: {
        r: 0.8120000000000000994759830064140260219573974609375,
        g: 0.58300000000000000710542735760100185871124267578125,
        b: 0.2020000000000000017763568394002504646778106689453125,
        a: 1,
      },
    },
  },
  "solid-fuel-from-petroleum-gas": {
    type: "recipe",
    name: "solid-fuel-from-petroleum-gas",
    category: "chemistry",
    energy_required: 1,
    ingredients: [
      {
        type: "fluid",
        name: "petroleum-gas",
        amount: 20,
      },
    ],
    results: [
      {
        type: "item",
        name: "solid-fuel",
        amount: 1,
      },
    ],
    allow_productivity: true,
    icon: "__base__/graphics/icons/solid-fuel-from-petroleum-gas.png",
    subgroup: "fluid-recipes",
    enabled: false,
    order: "b[fluid-chemistry]-c[solid-fuel-from-petroleum-gas]",
    crafting_machine_tint: {
      primary: {
        r: 0.767999999999999971578290569595992565155029296875,
        g: 0.63100000000000004973799150320701301097869873046875,
        b: 0.767999999999999971578290569595992565155029296875,
        a: 1,
      },
      secondary: {
        r: 0.6589999999999999857891452847979962825775146484375,
        g: 0.59199999999999999289457264239899814128875732421875,
        b: 0.678000000000000024868995751603506505489349365234375,
        a: 1,
      },
      tertiary: {
        r: 0.77400000000000002131628207280300557613372802734375,
        g: 0.63100000000000004973799150320701301097869873046875,
        b: 0.7660000000000000142108547152020037174224853515625,
        a: 1,
      },
      quaternary: {
        r: 0.563999999999999968025576890795491635799407958984375,
        g: 0.363999999999999968025576890795491635799407958984375,
        b: 0.563999999999999968025576890795491635799407958984375,
        a: 1,
      },
    },
  },
  "solid-fuel-from-heavy-oil": {
    type: "recipe",
    name: "solid-fuel-from-heavy-oil",
    category: "chemistry",
    energy_required: 1,
    ingredients: [
      {
        type: "fluid",
        name: "heavy-oil",
        amount: 20,
      },
    ],
    results: [
      {
        type: "item",
        name: "solid-fuel",
        amount: 1,
      },
    ],
    allow_productivity: true,
    icon: "__base__/graphics/icons/solid-fuel-from-heavy-oil.png",
    subgroup: "fluid-recipes",
    enabled: false,
    order: "b[fluid-chemistry]-e[solid-fuel-from-heavy-oil]",
    crafting_machine_tint: {
      primary: {
        r: 0.88900000000000005684341886080801486968994140625,
        g: 0.628000000000000024868995751603506505489349365234375,
        b: 0.565999999999999925393012745189480483531951904296875,
        a: 1,
      },
      secondary: {
        r: 0.8030000000000001136868377216160297393798828125,
        g: 0.668000000000000060396132539608515799045562744140625,
        b: 0.644000000000000039079850466805510222911834716796875,
        a: 1,
      },
      tertiary: {
        r: 0.853999999999999914734871708787977695465087890625,
        g: 0.6589999999999999857891452847979962825775146484375,
        b: 0.57599999999999997868371792719699442386627197265625,
        a: 1,
      },
      quaternary: {
        r: 1,
        g: 0.395000000000000017763568394002504646778106689453125,
        b: 0.1270000000000000017763568394002504646778106689453125,
        a: 1,
      },
    },
  },
  sulfur: {
    type: "recipe",
    name: "sulfur",
    category: "chemistry-or-cryogenics",
    energy_required: 1,
    enabled: false,
    ingredients: [
      {
        type: "fluid",
        name: "water",
        amount: 30,
      },

      {
        type: "fluid",
        name: "petroleum-gas",
        amount: 30,
      },
    ],
    results: [
      {
        type: "item",
        name: "sulfur",
        amount: 2,
      },
    ],
    allow_productivity: true,
    crafting_machine_tint: {
      primary: {
        r: 1,
        g: 0.9949999999999999289457264239899814128875732421875,
        b: 0.0889999999999999857891452847979962825775146484375,
        a: 1,
      },
      secondary: {
        r: 1,
        g: 0.97400000000000002131628207280300557613372802734375,
        b: 0.690999999999999925393012745189480483531951904296875,
        a: 1,
      },
      tertiary: {
        r: 0.722999999999999953814722175593487918376922607421875,
        g: 0.637999999999999989341858963598497211933135986328125,
        b: 0.713999999999999968025576890795491635799407958984375,
        a: 1,
      },
      quaternary: {
        r: 0.953999999999999914734871708787977695465087890625,
        g: 1,
        b: 0.35,
        a: 1,
      },
    },
  },
  lubricant: {
    type: "recipe",
    name: "lubricant",
    category: "chemistry",
    enabled: false,
    energy_required: 1,
    ingredients: [
      {
        type: "fluid",
        name: "heavy-oil",
        amount: 10,
      },
    ],
    results: [
      {
        type: "fluid",
        name: "lubricant",
        amount: 10,
      },
    ],
    allow_productivity: true,
    subgroup: "fluid-recipes",
    order: "c[oil-products]-a[lubricant]",
    crafting_machine_tint: {
      primary: {
        r: 0.2680000000000000159872115546022541821002960205078125,
        g: 0.722999999999999953814722175593487918376922607421875,
        b: 0.2229999999999999982236431605997495353221893310546875,
        a: 1,
      },
      secondary: {
        r: 0.432000000000000028421709430404007434844970703125,
        g: 0.793000000000000060396132539608515799045562744140625,
        b: 0.386000000000000031974423109204508364200592041015625,
        a: 1,
      },
      tertiary: {
        r: 0.64700000000000006394884621840901672840118408203125,
        g: 0.470999999999999996447286321199499070644378662109375,
        b: 0.395999999999999996447286321199499070644378662109375,
        a: 1,
      },
      quaternary: {
        r: 1,
        g: 0.395000000000000017763568394002504646778106689453125,
        b: 0.1270000000000000017763568394002504646778106689453125,
        a: 1,
      },
    },
    allow_quality: false,
  },
  barrel: {
    type: "recipe",
    name: "barrel",
    category: "crafting",
    energy_required: 1,
    subgroup: "intermediate-product",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "steel-plate",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "barrel",
        amount: 1,
      },
    ],
    allow_productivity: true,
  },
  "night-vision-equipment": {
    type: "recipe",
    name: "night-vision-equipment",
    enabled: false,
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "advanced-circuit",
        amount: 5,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "night-vision-equipment",
        amount: 1,
      },
    ],
  },
  "belt-immunity-equipment": {
    type: "recipe",
    name: "belt-immunity-equipment",
    enabled: false,
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "advanced-circuit",
        amount: 5,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "belt-immunity-equipment",
        amount: 1,
      },
    ],
  },
  "energy-shield-equipment": {
    type: "recipe",
    name: "energy-shield-equipment",
    enabled: false,
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "advanced-circuit",
        amount: 5,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "energy-shield-equipment",
        amount: 1,
      },
    ],
  },
  "energy-shield-mk2-equipment": {
    type: "recipe",
    name: "energy-shield-mk2-equipment",
    enabled: false,
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "energy-shield-equipment",
        amount: 10,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 5,
      },

      {
        type: "item",
        name: "low-density-structure",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "energy-shield-mk2-equipment",
        amount: 1,
      },
    ],
  },
  "battery-equipment": {
    type: "recipe",
    name: "battery-equipment",
    enabled: false,
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "battery",
        amount: 5,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "battery-equipment",
        amount: 1,
      },
    ],
  },
  "battery-mk2-equipment": {
    type: "recipe",
    name: "battery-mk2-equipment",
    enabled: false,
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "battery-equipment",
        amount: 10,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 15,
      },

      {
        type: "item",
        name: "low-density-structure",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "battery-mk2-equipment",
        amount: 1,
      },
    ],
  },
  "solar-panel-equipment": {
    type: "recipe",
    name: "solar-panel-equipment",
    enabled: false,
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "solar-panel",
        amount: 1,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 2,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "solar-panel-equipment",
        amount: 1,
      },
    ],
  },
  "fission-reactor-equipment": {
    type: "recipe",
    name: "fission-reactor-equipment",
    enabled: false,
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "processing-unit",
        amount: 200,
      },

      {
        type: "item",
        name: "low-density-structure",
        amount: 50,
      },

      {
        type: "item",
        name: "uranium-fuel-cell",
        amount: 4,
      },
    ],
    results: [
      {
        type: "item",
        name: "fission-reactor-equipment",
        amount: 1,
      },
    ],
  },
  "personal-laser-defense-equipment": {
    type: "recipe",
    name: "personal-laser-defense-equipment",
    enabled: false,
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "processing-unit",
        amount: 20,
      },

      {
        type: "item",
        name: "low-density-structure",
        amount: 5,
      },

      {
        type: "item",
        name: "laser-turret",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "personal-laser-defense-equipment",
        amount: 1,
      },
    ],
  },
  "discharge-defense-equipment": {
    type: "recipe",
    name: "discharge-defense-equipment",
    enabled: false,
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "processing-unit",
        amount: 5,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 20,
      },

      {
        type: "item",
        name: "laser-turret",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "discharge-defense-equipment",
        amount: 1,
      },
    ],
    category: "electronics",
  },
  "exoskeleton-equipment": {
    type: "recipe",
    name: "exoskeleton-equipment",
    enabled: false,
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "processing-unit",
        amount: 10,
      },

      {
        type: "item",
        name: "electric-engine-unit",
        amount: 30,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 20,
      },
    ],
    results: [
      {
        type: "item",
        name: "exoskeleton-equipment",
        amount: 1,
      },
    ],
  },
  "personal-roboport-equipment": {
    type: "recipe",
    name: "personal-roboport-equipment",
    enabled: false,
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "advanced-circuit",
        amount: 10,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 40,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 20,
      },

      {
        type: "item",
        name: "battery",
        amount: 45,
      },
    ],
    results: [
      {
        type: "item",
        name: "personal-roboport-equipment",
        amount: 1,
      },
    ],
  },
  "personal-roboport-mk2-equipment": {
    type: "recipe",
    name: "personal-roboport-mk2-equipment",
    enabled: false,
    energy_required: 20,
    ingredients: [
      {
        type: "item",
        name: "personal-roboport-equipment",
        amount: 5,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 50,
      },

      {
        type: "item",
        name: "superconductor",
        amount: 50,
      },
    ],
    results: [
      {
        type: "item",
        name: "personal-roboport-mk2-equipment",
        amount: 1,
      },
    ],
  },
  "laser-turret": {
    type: "recipe",
    name: "laser-turret",
    enabled: false,
    energy_required: 20,
    ingredients: [
      {
        type: "item",
        name: "steel-plate",
        amount: 20,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 20,
      },

      {
        type: "item",
        name: "battery",
        amount: 12,
      },
    ],
    results: [
      {
        type: "item",
        name: "laser-turret",
        amount: 1,
      },
    ],
  },
  "flamethrower-turret": {
    type: "recipe",
    name: "flamethrower-turret",
    enabled: false,
    energy_required: 20,
    ingredients: [
      {
        type: "item",
        name: "steel-plate",
        amount: 30,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 15,
      },

      {
        type: "item",
        name: "pipe",
        amount: 10,
      },

      {
        type: "item",
        name: "engine-unit",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "flamethrower-turret",
        amount: 1,
      },
    ],
  },
  "artillery-turret": {
    type: "recipe",
    name: "artillery-turret",
    enabled: false,
    energy_required: 40,
    ingredients: [
      {
        type: "item",
        name: "tungsten-plate",
        amount: 60,
      },

      {
        type: "item",
        name: "refined-concrete",
        amount: 60,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 40,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "artillery-turret",
        amount: 1,
      },
    ],
  },
  "gun-turret": {
    type: "recipe",
    name: "gun-turret",
    enabled: false,
    energy_required: 8,
    ingredients: [
      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 10,
      },

      {
        type: "item",
        name: "copper-plate",
        amount: 10,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 20,
      },
    ],
    results: [
      {
        type: "item",
        name: "gun-turret",
        amount: 1,
      },
    ],
  },
  "wooden-chest": {
    type: "recipe",
    name: "wooden-chest",
    ingredients: [
      {
        type: "item",
        name: "wood",
        amount: 2,
      },
    ],
    results: [
      {
        type: "item",
        name: "wooden-chest",
        amount: 1,
      },
    ],
  },
  "display-panel": {
    type: "recipe",
    name: "display-panel",
    ingredients: [
      {
        type: "item",
        name: "iron-plate",
        amount: 1,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "display-panel",
        amount: 1,
      },
    ],
    enabled: false,
  },
  "iron-stick": {
    type: "recipe",
    name: "iron-stick",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "iron-plate",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "iron-stick",
        amount: 2,
      },
    ],
    allow_productivity: true,
  },
  "stone-furnace": {
    type: "recipe",
    name: "stone-furnace",
    ingredients: [
      {
        type: "item",
        name: "stone",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "stone-furnace",
        amount: 1,
      },
    ],
  },
  boiler: {
    type: "recipe",
    name: "boiler",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "stone-furnace",
        amount: 1,
      },

      {
        type: "item",
        name: "pipe",
        amount: 4,
      },
    ],
    results: [
      {
        type: "item",
        name: "boiler",
        amount: 1,
      },
    ],
  },
  "steam-engine": {
    type: "recipe",
    name: "steam-engine",
    ingredients: [
      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 8,
      },

      {
        type: "item",
        name: "pipe",
        amount: 5,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "steam-engine",
        amount: 1,
      },
    ],
    enabled: false,
  },
  "iron-gear-wheel": {
    type: "recipe",
    name: "iron-gear-wheel",
    ingredients: [
      {
        type: "item",
        name: "iron-plate",
        amount: 2,
      },
    ],
    results: [
      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 1,
      },
    ],
    allow_productivity: true,
  },
  "electronic-circuit": {
    type: "recipe",
    name: "electronic-circuit",
    ingredients: [
      {
        type: "item",
        name: "iron-plate",
        amount: 1,
      },

      {
        type: "item",
        name: "copper-cable",
        amount: 3,
      },
    ],
    results: [
      {
        type: "item",
        name: "electronic-circuit",
        amount: 1,
      },
    ],
    enabled: false,
    allow_productivity: true,
    category: "electronics",
  },
  "transport-belt": {
    type: "recipe",
    name: "transport-belt",
    ingredients: [
      {
        type: "item",
        name: "iron-plate",
        amount: 1,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "transport-belt",
        amount: 2,
      },
    ],
    category: "pressing",
  },
  "electric-mining-drill": {
    type: "recipe",
    name: "electric-mining-drill",
    energy_required: 2,
    ingredients: [
      {
        type: "item",
        name: "electronic-circuit",
        amount: 3,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 5,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "electric-mining-drill",
        amount: 1,
      },
    ],
    enabled: false,
  },
  "burner-mining-drill": {
    type: "recipe",
    name: "burner-mining-drill",
    energy_required: 2,
    ingredients: [
      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 3,
      },

      {
        type: "item",
        name: "stone-furnace",
        amount: 1,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 3,
      },
    ],
    results: [
      {
        type: "item",
        name: "burner-mining-drill",
        amount: 1,
      },
    ],
  },
  inserter: {
    type: "recipe",
    name: "inserter",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "electronic-circuit",
        amount: 1,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 1,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "inserter",
        amount: 1,
      },
    ],
  },
  "fast-inserter": {
    type: "recipe",
    name: "fast-inserter",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "electronic-circuit",
        amount: 2,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 2,
      },

      {
        type: "item",
        name: "inserter",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "fast-inserter",
        amount: 1,
      },
    ],
  },
  "long-handed-inserter": {
    type: "recipe",
    name: "long-handed-inserter",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 1,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 1,
      },

      {
        type: "item",
        name: "inserter",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "long-handed-inserter",
        amount: 1,
      },
    ],
  },
  "burner-inserter": {
    type: "recipe",
    name: "burner-inserter",
    ingredients: [
      {
        type: "item",
        name: "iron-plate",
        amount: 1,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "burner-inserter",
        amount: 1,
      },
    ],
  },
  pipe: {
    type: "recipe",
    name: "pipe",
    ingredients: [
      {
        type: "item",
        name: "iron-plate",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "pipe",
        amount: 1,
      },
    ],
    enabled: false,
  },
  "offshore-pump": {
    type: "recipe",
    name: "offshore-pump",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "pipe",
        amount: 3,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 2,
      },
    ],
    results: [
      {
        type: "item",
        name: "offshore-pump",
        amount: 1,
      },
    ],
  },
  "copper-cable": {
    type: "recipe",
    name: "copper-cable",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "copper-plate",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "copper-cable",
        amount: 2,
      },
    ],
    allow_productivity: true,
    category: "electronics",
  },
  "small-electric-pole": {
    type: "recipe",
    name: "small-electric-pole",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "wood",
        amount: 1,
      },

      {
        type: "item",
        name: "copper-cable",
        amount: 2,
      },
    ],
    results: [
      {
        type: "item",
        name: "small-electric-pole",
        amount: 2,
      },
    ],
    category: "electronics",
  },
  pistol: {
    type: "recipe",
    name: "pistol",
    enabled: false,
    hidden: true,
    energy_required: 5,
    ingredients: [
      {
        type: "item",
        name: "copper-plate",
        amount: 5,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "pistol",
        amount: 1,
      },
    ],
  },
  "submachine-gun": {
    type: "recipe",
    name: "submachine-gun",
    enabled: false,
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 10,
      },

      {
        type: "item",
        name: "copper-plate",
        amount: 5,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "submachine-gun",
        amount: 1,
      },
    ],
  },
  "firearm-magazine": {
    type: "recipe",
    name: "firearm-magazine",
    energy_required: 1,
    ingredients: [
      {
        type: "item",
        name: "iron-plate",
        amount: 4,
      },
    ],
    results: [
      {
        type: "item",
        name: "firearm-magazine",
        amount: 1,
      },
    ],
  },
  "light-armor": {
    type: "recipe",
    name: "light-armor",
    enabled: true,
    energy_required: 3,
    ingredients: [
      {
        type: "item",
        name: "iron-plate",
        amount: 40,
      },
    ],
    results: [
      {
        type: "item",
        name: "light-armor",
        amount: 1,
      },
    ],
  },
  radar: {
    type: "recipe",
    name: "radar",
    ingredients: [
      {
        type: "item",
        name: "electronic-circuit",
        amount: 5,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 5,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "radar",
        amount: 1,
      },
    ],
    enabled: false,
  },
  "small-lamp": {
    type: "recipe",
    name: "small-lamp",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "electronic-circuit",
        amount: 1,
      },

      {
        type: "item",
        name: "copper-cable",
        amount: 3,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "small-lamp",
        amount: 1,
      },
    ],
  },
  "pipe-to-ground": {
    type: "recipe",
    name: "pipe-to-ground",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "pipe",
        amount: 10,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "pipe-to-ground",
        amount: 2,
      },
    ],
  },
  "assembling-machine-1": {
    type: "recipe",
    name: "assembling-machine-1",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "electronic-circuit",
        amount: 3,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 5,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 9,
      },
    ],
    results: [
      {
        type: "item",
        name: "assembling-machine-1",
        amount: 1,
      },
    ],
  },
  "repair-pack": {
    type: "recipe",
    name: "repair-pack",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "electronic-circuit",
        amount: 2,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 2,
      },
    ],
    results: [
      {
        type: "item",
        name: "repair-pack",
        amount: 1,
      },
    ],
  },
  "automation-science-pack": {
    type: "recipe",
    name: "automation-science-pack",
    enabled: false,
    energy_required: 5,
    ingredients: [
      {
        type: "item",
        name: "copper-plate",
        amount: 1,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "automation-science-pack",
        amount: 1,
      },
    ],
    crafting_machine_tint: {
      primary: {
        r: 1,
        g: 0,
        b: 0,
        a: 1,
      },
      secondary: {
        r: 1,
        g: 0,
        b: 0,
        a: 1,
      },
    },
    allow_productivity: true,
  },
  "logistic-science-pack": {
    type: "recipe",
    name: "logistic-science-pack",
    enabled: false,
    energy_required: 6,
    ingredients: [
      {
        type: "item",
        name: "inserter",
        amount: 1,
      },

      {
        type: "item",
        name: "transport-belt",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "logistic-science-pack",
        amount: 1,
      },
    ],
    crafting_machine_tint: {
      primary: {
        r: 0,
        g: 1,
        b: 0,
        a: 1,
      },
      secondary: {
        r: 0,
        g: 1,
        b: 0,
        a: 1,
      },
    },
    allow_productivity: true,
  },
  lab: {
    type: "recipe",
    name: "lab",
    energy_required: 2,
    ingredients: [
      {
        type: "item",
        name: "electronic-circuit",
        amount: 10,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 10,
      },

      {
        type: "item",
        name: "transport-belt",
        amount: 4,
      },
    ],
    results: [
      {
        type: "item",
        name: "lab",
        amount: 1,
      },
    ],
    enabled: false,
  },
  "stone-wall": {
    type: "recipe",
    name: "stone-wall",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "stone-brick",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "stone-wall",
        amount: 1,
      },
    ],
  },
  "assembling-machine-2": {
    type: "recipe",
    name: "assembling-machine-2",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "steel-plate",
        amount: 2,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 3,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 5,
      },

      {
        type: "item",
        name: "assembling-machine-1",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "assembling-machine-2",
        amount: 1,
      },
    ],
  },
  splitter: {
    type: "recipe",
    name: "splitter",
    enabled: false,
    energy_required: 1,
    ingredients: [
      {
        type: "item",
        name: "electronic-circuit",
        amount: 5,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 5,
      },

      {
        type: "item",
        name: "transport-belt",
        amount: 4,
      },
    ],
    results: [
      {
        type: "item",
        name: "splitter",
        amount: 1,
      },
    ],
    category: "pressing",
  },
  "underground-belt": {
    type: "recipe",
    name: "underground-belt",
    enabled: false,
    energy_required: 1,
    ingredients: [
      {
        type: "item",
        name: "iron-plate",
        amount: 10,
      },

      {
        type: "item",
        name: "transport-belt",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "underground-belt",
        amount: 2,
      },
    ],
    category: "pressing",
  },
  loader: {
    type: "recipe",
    name: "loader",
    enabled: false,
    hidden: true,
    energy_required: 1,
    ingredients: [
      {
        type: "item",
        name: "inserter",
        amount: 5,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 5,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 5,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 5,
      },

      {
        type: "item",
        name: "transport-belt",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "loader",
        amount: 1,
      },
    ],
  },
  car: {
    type: "recipe",
    name: "car",
    enabled: false,
    energy_required: 2,
    ingredients: [
      {
        type: "item",
        name: "engine-unit",
        amount: 8,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 20,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "car",
        amount: 1,
      },
    ],
  },
  "engine-unit": {
    type: "recipe",
    name: "engine-unit",
    energy_required: 10,
    category: "advanced-crafting",
    ingredients: [
      {
        type: "item",
        name: "steel-plate",
        amount: 1,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 1,
      },

      {
        type: "item",
        name: "pipe",
        amount: 2,
      },
    ],
    results: [
      {
        type: "item",
        name: "engine-unit",
        amount: 1,
      },
    ],
    enabled: false,
    allow_productivity: true,
  },
  "iron-chest": {
    type: "recipe",
    name: "iron-chest",
    enabled: true,
    ingredients: [
      {
        type: "item",
        name: "iron-plate",
        amount: 8,
      },
    ],
    results: [
      {
        type: "item",
        name: "iron-chest",
        amount: 1,
      },
    ],
  },
  "big-electric-pole": {
    type: "recipe",
    name: "big-electric-pole",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "iron-stick",
        amount: 8,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 5,
      },

      {
        type: "item",
        name: "copper-cable",
        amount: 4,
      },
    ],
    results: [
      {
        type: "item",
        name: "big-electric-pole",
        amount: 1,
      },
    ],
    category: "electronics",
  },
  "medium-electric-pole": {
    type: "recipe",
    name: "medium-electric-pole",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "iron-stick",
        amount: 4,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 2,
      },

      {
        type: "item",
        name: "copper-cable",
        amount: 2,
      },
    ],
    results: [
      {
        type: "item",
        name: "medium-electric-pole",
        amount: 1,
      },
    ],
    category: "electronics",
  },
  shotgun: {
    type: "recipe",
    name: "shotgun",
    enabled: false,
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "iron-plate",
        amount: 15,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 5,
      },

      {
        type: "item",
        name: "copper-plate",
        amount: 10,
      },

      {
        type: "item",
        name: "wood",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "shotgun",
        amount: 1,
      },
    ],
  },
  "shotgun-shell": {
    type: "recipe",
    name: "shotgun-shell",
    enabled: false,
    energy_required: 3,
    ingredients: [
      {
        type: "item",
        name: "copper-plate",
        amount: 2,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 2,
      },
    ],
    results: [
      {
        type: "item",
        name: "shotgun-shell",
        amount: 1,
      },
    ],
  },
  "piercing-rounds-magazine": {
    type: "recipe",
    name: "piercing-rounds-magazine",
    enabled: false,
    energy_required: 3,
    ingredients: [
      {
        type: "item",
        name: "firearm-magazine",
        amount: 1,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 1,
      },

      {
        type: "item",
        name: "copper-plate",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "piercing-rounds-magazine",
        amount: 1,
      },
    ],
  },
  grenade: {
    type: "recipe",
    name: "grenade",
    enabled: false,
    energy_required: 8,
    ingredients: [
      {
        type: "item",
        name: "iron-plate",
        amount: 5,
      },

      {
        type: "item",
        name: "coal",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "grenade",
        amount: 1,
      },
    ],
  },
  "steel-furnace": {
    type: "recipe",
    name: "steel-furnace",
    ingredients: [
      {
        type: "item",
        name: "steel-plate",
        amount: 6,
      },

      {
        type: "item",
        name: "stone-brick",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "steel-furnace",
        amount: 1,
      },
    ],
    energy_required: 3,
    enabled: false,
  },
  gate: {
    type: "recipe",
    name: "gate",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "stone-wall",
        amount: 1,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 2,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 2,
      },
    ],
    results: [
      {
        type: "item",
        name: "gate",
        amount: 1,
      },
    ],
  },
  "heavy-armor": {
    type: "recipe",
    name: "heavy-armor",
    enabled: false,
    energy_required: 8,
    ingredients: [
      {
        type: "item",
        name: "copper-plate",
        amount: 100,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 50,
      },
    ],
    results: [
      {
        type: "item",
        name: "heavy-armor",
        amount: 1,
      },
    ],
  },
  "steel-chest": {
    type: "recipe",
    name: "steel-chest",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "steel-plate",
        amount: 8,
      },
    ],
    results: [
      {
        type: "item",
        name: "steel-chest",
        amount: 1,
      },
    ],
  },
  "fast-underground-belt": {
    type: "recipe",
    name: "fast-underground-belt",
    energy_required: 2,
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 40,
      },

      {
        type: "item",
        name: "underground-belt",
        amount: 2,
      },
    ],
    results: [
      {
        type: "item",
        name: "fast-underground-belt",
        amount: 2,
      },
    ],
    category: "pressing",
  },
  "fast-splitter": {
    type: "recipe",
    name: "fast-splitter",
    enabled: false,
    energy_required: 2,
    ingredients: [
      {
        type: "item",
        name: "splitter",
        amount: 1,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 10,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "fast-splitter",
        amount: 1,
      },
    ],
    category: "pressing",
  },
  concrete: {
    type: "recipe",
    name: "concrete",
    energy_required: 10,
    enabled: false,
    category: "crafting-with-fluid",
    ingredients: [
      {
        type: "item",
        name: "stone-brick",
        amount: 5,
      },

      {
        type: "item",
        name: "iron-ore",
        amount: 1,
      },

      {
        type: "fluid",
        name: "water",
        amount: 100,
      },
    ],
    results: [
      {
        type: "item",
        name: "concrete",
        amount: 10,
      },
    ],
  },
  "hazard-concrete": {
    type: "recipe",
    name: "hazard-concrete",
    energy_required: 0.25,
    enabled: false,
    category: "crafting",
    ingredients: [
      {
        type: "item",
        name: "concrete",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "hazard-concrete",
        amount: 10,
      },
    ],
  },
  "refined-concrete": {
    type: "recipe",
    name: "refined-concrete",
    energy_required: 15,
    enabled: false,
    category: "crafting-with-fluid",
    ingredients: [
      {
        type: "item",
        name: "concrete",
        amount: 20,
      },

      {
        type: "item",
        name: "iron-stick",
        amount: 8,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 1,
      },

      {
        type: "fluid",
        name: "water",
        amount: 100,
      },
    ],
    results: [
      {
        type: "item",
        name: "refined-concrete",
        amount: 10,
      },
    ],
  },
  "refined-hazard-concrete": {
    type: "recipe",
    name: "refined-hazard-concrete",
    energy_required: 0.25,
    enabled: false,
    category: "crafting",
    ingredients: [
      {
        type: "item",
        name: "refined-concrete",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "refined-hazard-concrete",
        amount: 10,
      },
    ],
  },
  landfill: {
    type: "recipe",
    name: "landfill",
    energy_required: 0.5,
    enabled: false,
    category: "crafting",
    ingredients: [
      {
        type: "item",
        name: "stone",
        amount: 50,
      },
    ],
    results: [
      {
        type: "item",
        name: "landfill",
        amount: 1,
      },
    ],
  },
  "fast-transport-belt": {
    type: "recipe",
    name: "fast-transport-belt",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 5,
      },

      {
        type: "item",
        name: "transport-belt",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "fast-transport-belt",
        amount: 1,
      },
    ],
    category: "pressing",
  },
  "solar-panel": {
    type: "recipe",
    name: "solar-panel",
    energy_required: 10,
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "steel-plate",
        amount: 5,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 15,
      },

      {
        type: "item",
        name: "copper-plate",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "solar-panel",
        amount: 1,
      },
    ],
    category: "electronics",
  },
  rail: {
    type: "recipe",
    name: "rail",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "stone",
        amount: 1,
      },

      {
        type: "item",
        name: "iron-stick",
        amount: 1,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "rail",
        amount: 2,
      },
    ],
  },
  locomotive: {
    type: "recipe",
    name: "locomotive",
    energy_required: 4,
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "engine-unit",
        amount: 20,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 10,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 30,
      },
    ],
    results: [
      {
        type: "item",
        name: "locomotive",
        amount: 1,
      },
    ],
  },
  "cargo-wagon": {
    type: "recipe",
    name: "cargo-wagon",
    energy_required: 1,
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 10,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 20,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 20,
      },
    ],
    results: [
      {
        type: "item",
        name: "cargo-wagon",
        amount: 1,
      },
    ],
  },
  "rail-signal": {
    type: "recipe",
    name: "rail-signal",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "electronic-circuit",
        amount: 1,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "rail-signal",
        amount: 1,
      },
    ],
  },
  "rail-chain-signal": {
    type: "recipe",
    name: "rail-chain-signal",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "electronic-circuit",
        amount: 1,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "rail-chain-signal",
        amount: 1,
      },
    ],
  },
  "train-stop": {
    type: "recipe",
    name: "train-stop",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "electronic-circuit",
        amount: 5,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 6,
      },

      {
        type: "item",
        name: "iron-stick",
        amount: 6,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 3,
      },
    ],
    results: [
      {
        type: "item",
        name: "train-stop",
        amount: 1,
      },
    ],
  },
  "copper-plate": {
    type: "recipe",
    name: "copper-plate",
    category: "smelting",
    energy_required: 3.20000000000000017763568394002504646778106689453125,
    ingredients: [
      {
        type: "item",
        name: "copper-ore",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "copper-plate",
        amount: 1,
      },
    ],
    allow_productivity: true,
  },
  "iron-plate": {
    type: "recipe",
    name: "iron-plate",
    category: "smelting",
    energy_required: 3.20000000000000017763568394002504646778106689453125,
    ingredients: [
      {
        type: "item",
        name: "iron-ore",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "iron-plate",
        amount: 1,
      },
    ],
    allow_productivity: true,
  },
  "stone-brick": {
    type: "recipe",
    name: "stone-brick",
    category: "smelting",
    energy_required: 3.20000000000000017763568394002504646778106689453125,
    enabled: true,
    ingredients: [
      {
        type: "item",
        name: "stone",
        amount: 2,
      },
    ],
    results: [
      {
        type: "item",
        name: "stone-brick",
        amount: 1,
      },
    ],
    allow_productivity: true,
  },
  "steel-plate": {
    type: "recipe",
    name: "steel-plate",
    category: "smelting",
    enabled: false,
    energy_required: 16,
    ingredients: [
      {
        type: "item",
        name: "iron-plate",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "steel-plate",
        amount: 1,
      },
    ],
    allow_productivity: true,
  },
  "arithmetic-combinator": {
    type: "recipe",
    name: "arithmetic-combinator",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "copper-cable",
        amount: 5,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "arithmetic-combinator",
        amount: 1,
      },
    ],
  },
  "decider-combinator": {
    type: "recipe",
    name: "decider-combinator",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "copper-cable",
        amount: 5,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "decider-combinator",
        amount: 1,
      },
    ],
  },
  "constant-combinator": {
    type: "recipe",
    name: "constant-combinator",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "copper-cable",
        amount: 5,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 2,
      },
    ],
    results: [
      {
        type: "item",
        name: "constant-combinator",
        amount: 1,
      },
    ],
  },
  "selector-combinator": {
    type: "recipe",
    name: "selector-combinator",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "advanced-circuit",
        amount: 2,
      },

      {
        type: "item",
        name: "decider-combinator",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "selector-combinator",
        amount: 1,
      },
    ],
  },
  "power-switch": {
    type: "recipe",
    name: "power-switch",
    enabled: false,
    energy_required: 2,
    ingredients: [
      {
        type: "item",
        name: "iron-plate",
        amount: 5,
      },

      {
        type: "item",
        name: "copper-cable",
        amount: 5,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 2,
      },
    ],
    results: [
      {
        type: "item",
        name: "power-switch",
        amount: 1,
      },
    ],
  },
  "programmable-speaker": {
    type: "recipe",
    name: "programmable-speaker",
    enabled: false,
    energy_required: 2,
    ingredients: [
      {
        type: "item",
        name: "iron-plate",
        amount: 3,
      },

      {
        type: "item",
        name: "iron-stick",
        amount: 4,
      },

      {
        type: "item",
        name: "copper-cable",
        amount: 5,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 4,
      },
    ],
    results: [
      {
        type: "item",
        name: "programmable-speaker",
        amount: 1,
      },
    ],
  },
  "poison-capsule": {
    type: "recipe",
    name: "poison-capsule",
    enabled: false,
    energy_required: 8,
    ingredients: [
      {
        type: "item",
        name: "steel-plate",
        amount: 3,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 3,
      },

      {
        type: "item",
        name: "coal",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "poison-capsule",
        amount: 1,
      },
    ],
  },
  "slowdown-capsule": {
    type: "recipe",
    name: "slowdown-capsule",
    enabled: false,
    energy_required: 8,
    ingredients: [
      {
        type: "item",
        name: "steel-plate",
        amount: 2,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 2,
      },

      {
        type: "item",
        name: "coal",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "slowdown-capsule",
        amount: 1,
      },
    ],
  },
  "cluster-grenade": {
    type: "recipe",
    name: "cluster-grenade",
    enabled: false,
    energy_required: 8,
    ingredients: [
      {
        type: "item",
        name: "grenade",
        amount: 7,
      },

      {
        type: "item",
        name: "explosives",
        amount: 5,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "cluster-grenade",
        amount: 1,
      },
    ],
  },
  "defender-capsule": {
    type: "recipe",
    name: "defender-capsule",
    enabled: false,
    energy_required: 8,
    ingredients: [
      {
        type: "item",
        name: "piercing-rounds-magazine",
        amount: 3,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 3,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 3,
      },
    ],
    results: [
      {
        type: "item",
        name: "defender-capsule",
        amount: 1,
      },
    ],
  },
  "distractor-capsule": {
    type: "recipe",
    name: "distractor-capsule",
    enabled: false,
    energy_required: 15,
    ingredients: [
      {
        type: "item",
        name: "defender-capsule",
        amount: 4,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 3,
      },
    ],
    results: [
      {
        type: "item",
        name: "distractor-capsule",
        amount: 1,
      },
    ],
  },
  "destroyer-capsule": {
    type: "recipe",
    name: "destroyer-capsule",
    enabled: false,
    energy_required: 15,
    ingredients: [
      {
        type: "item",
        name: "distractor-capsule",
        amount: 4,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 4,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "destroyer-capsule",
        amount: 1,
      },
    ],
  },
  "cliff-explosives": {
    type: "recipe",
    name: "cliff-explosives",
    enabled: false,
    energy_required: 8,
    ingredients: [
      {
        type: "item",
        name: "explosives",
        amount: 10,
      },

      {
        type: "item",
        name: "calcite",
        amount: 10,
      },

      {
        type: "item",
        name: "grenade",
        amount: 1,
      },

      {
        type: "item",
        name: "barrel",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "cliff-explosives",
        amount: 1,
      },
    ],
  },
  "uranium-rounds-magazine": {
    type: "recipe",
    name: "uranium-rounds-magazine",
    enabled: false,
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "piercing-rounds-magazine",
        amount: 1,
      },

      {
        type: "item",
        name: "uranium-238",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "uranium-rounds-magazine",
        amount: 1,
      },
    ],
  },
  rocket: {
    type: "recipe",
    name: "rocket",
    enabled: false,
    energy_required: 4,
    ingredients: [
      {
        type: "item",
        name: "explosives",
        amount: 1,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 2,
      },
    ],
    results: [
      {
        type: "item",
        name: "rocket",
        amount: 1,
      },
    ],
  },
  "explosive-rocket": {
    type: "recipe",
    name: "explosive-rocket",
    enabled: false,
    energy_required: 8,
    ingredients: [
      {
        type: "item",
        name: "rocket",
        amount: 1,
      },

      {
        type: "item",
        name: "explosives",
        amount: 2,
      },
    ],
    results: [
      {
        type: "item",
        name: "explosive-rocket",
        amount: 1,
      },
    ],
  },
  "atomic-bomb": {
    type: "recipe",
    name: "atomic-bomb",
    enabled: false,
    energy_required: 50,
    ingredients: [
      {
        type: "item",
        name: "processing-unit",
        amount: 10,
      },

      {
        type: "item",
        name: "explosives",
        amount: 10,
      },

      {
        type: "item",
        name: "uranium-235",
        amount: 100,
      },
    ],
    results: [
      {
        type: "item",
        name: "atomic-bomb",
        amount: 1,
      },
    ],
  },
  "piercing-shotgun-shell": {
    type: "recipe",
    name: "piercing-shotgun-shell",
    enabled: false,
    energy_required: 8,
    ingredients: [
      {
        type: "item",
        name: "shotgun-shell",
        amount: 2,
      },

      {
        type: "item",
        name: "copper-plate",
        amount: 5,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 2,
      },
    ],
    results: [
      {
        type: "item",
        name: "piercing-shotgun-shell",
        amount: 1,
      },
    ],
  },
  "cannon-shell": {
    type: "recipe",
    name: "cannon-shell",
    enabled: false,
    energy_required: 8,
    ingredients: [
      {
        type: "item",
        name: "steel-plate",
        amount: 2,
      },

      {
        type: "item",
        name: "plastic-bar",
        amount: 2,
      },

      {
        type: "item",
        name: "explosives",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "cannon-shell",
        amount: 1,
      },
    ],
  },
  "explosive-cannon-shell": {
    type: "recipe",
    name: "explosive-cannon-shell",
    enabled: false,
    energy_required: 8,
    ingredients: [
      {
        type: "item",
        name: "steel-plate",
        amount: 2,
      },

      {
        type: "item",
        name: "plastic-bar",
        amount: 2,
      },

      {
        type: "item",
        name: "explosives",
        amount: 2,
      },
    ],
    results: [
      {
        type: "item",
        name: "explosive-cannon-shell",
        amount: 1,
      },
    ],
  },
  "uranium-cannon-shell": {
    type: "recipe",
    name: "uranium-cannon-shell",
    enabled: false,
    energy_required: 12,
    ingredients: [
      {
        type: "item",
        name: "cannon-shell",
        amount: 1,
      },

      {
        type: "item",
        name: "uranium-238",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "uranium-cannon-shell",
        amount: 1,
      },
    ],
  },
  "explosive-uranium-cannon-shell": {
    type: "recipe",
    name: "explosive-uranium-cannon-shell",
    enabled: false,
    energy_required: 12,
    ingredients: [
      {
        type: "item",
        name: "explosive-cannon-shell",
        amount: 1,
      },

      {
        type: "item",
        name: "uranium-238",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "explosive-uranium-cannon-shell",
        amount: 1,
      },
    ],
  },
  "artillery-shell": {
    type: "recipe",
    name: "artillery-shell",
    enabled: false,
    energy_required: 15,
    ingredients: [
      {
        type: "item",
        name: "radar",
        amount: 1,
      },

      {
        type: "item",
        name: "calcite",
        amount: 1,
      },

      {
        type: "item",
        name: "tungsten-plate",
        amount: 4,
      },

      {
        type: "item",
        name: "explosives",
        amount: 8,
      },
    ],
    results: [
      {
        type: "item",
        name: "artillery-shell",
        amount: 1,
      },
    ],
  },
  "flamethrower-ammo": {
    type: "recipe",
    name: "flamethrower-ammo",
    category: "chemistry",
    enabled: false,
    energy_required: 6,
    ingredients: [
      {
        type: "item",
        name: "steel-plate",
        amount: 5,
      },

      {
        type: "fluid",
        name: "crude-oil",
        amount: 100,
      },
    ],
    results: [
      {
        type: "item",
        name: "flamethrower-ammo",
        amount: 1,
      },
    ],
    crafting_machine_tint: {
      primary: {
        r: 1,
        g: 0.73499999999999996447286321199499070644378662109375,
        b: 0.642999999999999971578290569595992565155029296875,
        a: 1,
      },
      secondary: {
        r: 0.74900000000000002131628207280300557613372802734375,
        g: 0.557000000000000028421709430404007434844970703125,
        b: 0.49000000000000003552713678800500929355621337890625,
        a: 1,
      },
      tertiary: {
        r: 0.637000000000000010658141036401502788066864013671875,
        g: 0.637000000000000010658141036401502788066864013671875,
        b: 0.637000000000000010658141036401502788066864013671875,
        a: 1,
      },
      quaternary: {
        r: 0.282999999999999971578290569595992565155029296875,
        g: 0.282999999999999971578290569595992565155029296875,
        b: 0.282999999999999971578290569595992565155029296875,
        a: 1,
      },
    },
  },
  "express-transport-belt": {
    type: "recipe",
    name: "express-transport-belt",
    category: "crafting-with-fluid-or-metallurgy",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 10,
      },

      {
        type: "item",
        name: "fast-transport-belt",
        amount: 1,
      },

      {
        type: "fluid",
        name: "lubricant",
        amount: 20,
      },
    ],
    results: [
      {
        type: "item",
        name: "express-transport-belt",
        amount: 1,
      },
    ],
  },
  "assembling-machine-3": {
    type: "recipe",
    name: "assembling-machine-3",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "assembling-machine-2",
        amount: 2,
      },

      {
        type: "item",
        name: "speed-module",
        amount: 4,
      },
    ],
    results: [
      {
        type: "item",
        name: "assembling-machine-3",
        amount: 1,
      },
    ],
  },
  tank: {
    type: "recipe",
    name: "tank",
    enabled: false,
    energy_required: 5,
    ingredients: [
      {
        type: "item",
        name: "engine-unit",
        amount: 32,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 50,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 15,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "tank",
        amount: 1,
      },
    ],
  },
  spidertron: {
    type: "recipe",
    name: "spidertron",
    enabled: false,
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "exoskeleton-equipment",
        amount: 4,
      },

      {
        type: "item",
        name: "fission-reactor-equipment",
        amount: 2,
      },

      {
        type: "item",
        name: "rocket-turret",
        amount: 1,
      },

      {
        type: "item",
        name: "radar",
        amount: 2,
      },

      {
        type: "item",
        name: "raw-fish",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "spidertron",
        amount: 1,
      },
    ],
  },
  "fluid-wagon": {
    type: "recipe",
    name: "fluid-wagon",
    enabled: false,
    energy_required: 1.5,
    ingredients: [
      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 10,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 16,
      },

      {
        type: "item",
        name: "pipe",
        amount: 8,
      },

      {
        type: "item",
        name: "storage-tank",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "fluid-wagon",
        amount: 1,
      },
    ],
  },
  "artillery-wagon": {
    type: "recipe",
    name: "artillery-wagon",
    energy_required: 4,
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "engine-unit",
        amount: 60,
      },

      {
        type: "item",
        name: "tungsten-plate",
        amount: 60,
      },

      {
        type: "item",
        name: "refined-concrete",
        amount: 60,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 40,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "artillery-wagon",
        amount: 1,
      },
    ],
  },
  "modular-armor": {
    type: "recipe",
    name: "modular-armor",
    enabled: false,
    energy_required: 15,
    ingredients: [
      {
        type: "item",
        name: "advanced-circuit",
        amount: 30,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 50,
      },
    ],
    results: [
      {
        type: "item",
        name: "modular-armor",
        amount: 1,
      },
    ],
  },
  "power-armor": {
    type: "recipe",
    name: "power-armor",
    enabled: false,
    energy_required: 20,
    ingredients: [
      {
        type: "item",
        name: "processing-unit",
        amount: 40,
      },

      {
        type: "item",
        name: "electric-engine-unit",
        amount: 20,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 40,
      },
    ],
    results: [
      {
        type: "item",
        name: "power-armor",
        amount: 1,
      },
    ],
    requester_paste_multiplier: 1,
  },
  "power-armor-mk2": {
    type: "recipe",
    name: "power-armor-mk2",
    enabled: false,
    energy_required: 25,
    ingredients: [
      {
        type: "item",
        name: "efficiency-module",
        amount: 100,
      },

      {
        type: "item",
        name: "speed-module",
        amount: 100,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 60,
      },

      {
        type: "item",
        name: "electric-engine-unit",
        amount: 40,
      },

      {
        type: "item",
        name: "low-density-structure",
        amount: 30,
      },
    ],
    results: [
      {
        type: "item",
        name: "power-armor-mk2",
        amount: 1,
      },
    ],
    requester_paste_multiplier: 1,
  },
  flamethrower: {
    type: "recipe",
    name: "flamethrower",
    enabled: false,
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "steel-plate",
        amount: 5,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "flamethrower",
        amount: 1,
      },
    ],
  },
  "land-mine": {
    type: "recipe",
    name: "land-mine",
    enabled: false,
    energy_required: 5,
    ingredients: [
      {
        type: "item",
        name: "steel-plate",
        amount: 1,
      },

      {
        type: "item",
        name: "explosives",
        amount: 2,
      },
    ],
    results: [
      {
        type: "item",
        name: "land-mine",
        amount: 4,
      },
    ],
  },
  "rocket-launcher": {
    type: "recipe",
    name: "rocket-launcher",
    enabled: false,
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "iron-plate",
        amount: 5,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 5,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "rocket-launcher",
        amount: 1,
      },
    ],
  },
  "combat-shotgun": {
    type: "recipe",
    name: "combat-shotgun",
    enabled: false,
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "steel-plate",
        amount: 15,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 5,
      },

      {
        type: "item",
        name: "copper-plate",
        amount: 10,
      },

      {
        type: "item",
        name: "wood",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "combat-shotgun",
        amount: 1,
      },
    ],
  },
  "chemical-science-pack": {
    type: "recipe",
    name: "chemical-science-pack",
    enabled: false,
    energy_required: 24,
    ingredients: [
      {
        type: "item",
        name: "engine-unit",
        amount: 2,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 3,
      },

      {
        type: "item",
        name: "sulfur",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "chemical-science-pack",
        amount: 2,
      },
    ],
    crafting_machine_tint: {
      primary: {
        r: 0,
        g: 0.8,
        b: 1,
        a: 1,
      },
      secondary: {
        r: 0,
        g: 0.8,
        b: 1,
        a: 1,
      },
    },
    allow_productivity: true,
  },
  "military-science-pack": {
    type: "recipe",
    name: "military-science-pack",
    enabled: false,
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "piercing-rounds-magazine",
        amount: 1,
      },

      {
        type: "item",
        name: "grenade",
        amount: 1,
      },

      {
        type: "item",
        name: "stone-wall",
        amount: 2,
      },
    ],
    results: [
      {
        type: "item",
        name: "military-science-pack",
        amount: 2,
      },
    ],
    crafting_machine_tint: {
      primary: {
        r: 0.3,
        g: 0.3,
        b: 0.3,
        a: 1,
      },
      secondary: {
        r: 0.3,
        g: 0.3,
        b: 0.3,
        a: 1,
      },
    },
    allow_productivity: true,
  },
  "production-science-pack": {
    type: "recipe",
    name: "production-science-pack",
    enabled: false,
    energy_required: 21,
    ingredients: [
      {
        type: "item",
        name: "electric-furnace",
        amount: 1,
      },

      {
        type: "item",
        name: "productivity-module",
        amount: 1,
      },

      {
        type: "item",
        name: "rail",
        amount: 30,
      },
    ],
    results: [
      {
        type: "item",
        name: "production-science-pack",
        amount: 3,
      },
    ],
    crafting_machine_tint: {
      primary: {
        r: 0.8,
        g: 0,
        b: 1,
        a: 1,
      },
      secondary: {
        r: 0.8,
        g: 0,
        b: 1,
        a: 1,
      },
    },
    allow_productivity: true,
  },
  "utility-science-pack": {
    type: "recipe",
    name: "utility-science-pack",
    enabled: false,
    energy_required: 21,
    ingredients: [
      {
        type: "item",
        name: "low-density-structure",
        amount: 3,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 2,
      },

      {
        type: "item",
        name: "flying-robot-frame",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "utility-science-pack",
        amount: 3,
      },
    ],
    crafting_machine_tint: {
      primary: {
        r: 1,
        g: 0.8,
        b: 0,
        a: 1,
      },
      secondary: {
        r: 1,
        g: 0.8,
        b: 0,
        a: 1,
      },
    },
    allow_productivity: true,
  },
  "express-underground-belt": {
    type: "recipe",
    name: "express-underground-belt",
    energy_required: 2,
    category: "crafting-with-fluid-or-metallurgy",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 80,
      },

      {
        type: "item",
        name: "fast-underground-belt",
        amount: 2,
      },

      {
        type: "fluid",
        name: "lubricant",
        amount: 40,
      },
    ],
    results: [
      {
        type: "item",
        name: "express-underground-belt",
        amount: 2,
      },
    ],
  },
  "fast-loader": {
    type: "recipe",
    name: "fast-loader",
    enabled: false,
    hidden: true,
    energy_required: 3,
    ingredients: [
      {
        type: "item",
        name: "fast-transport-belt",
        amount: 5,
      },

      {
        type: "item",
        name: "loader",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "fast-loader",
        amount: 1,
      },
    ],
  },
  "express-loader": {
    type: "recipe",
    name: "express-loader",
    enabled: false,
    hidden: true,
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "express-transport-belt",
        amount: 5,
      },

      {
        type: "item",
        name: "fast-loader",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "express-loader",
        amount: 1,
      },
    ],
  },
  "express-splitter": {
    type: "recipe",
    name: "express-splitter",
    category: "crafting-with-fluid-or-metallurgy",
    enabled: false,
    energy_required: 2,
    ingredients: [
      {
        type: "item",
        name: "fast-splitter",
        amount: 1,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 10,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 10,
      },

      {
        type: "fluid",
        name: "lubricant",
        amount: 80,
      },
    ],
    results: [
      {
        type: "item",
        name: "express-splitter",
        amount: 1,
      },
    ],
  },
  "advanced-circuit": {
    type: "recipe",
    name: "advanced-circuit",
    enabled: false,
    energy_required: 6,
    ingredients: [
      {
        type: "item",
        name: "electronic-circuit",
        amount: 2,
      },

      {
        type: "item",
        name: "plastic-bar",
        amount: 2,
      },

      {
        type: "item",
        name: "copper-cable",
        amount: 4,
      },
    ],
    results: [
      {
        type: "item",
        name: "advanced-circuit",
        amount: 1,
      },
    ],
    allow_productivity: true,
    category: "electronics",
  },
  "processing-unit": {
    type: "recipe",
    name: "processing-unit",
    category: "electronics-with-fluid",
    enabled: false,
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "electronic-circuit",
        amount: 20,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 2,
      },

      {
        type: "fluid",
        name: "sulfuric-acid",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "processing-unit",
        amount: 1,
      },
    ],
    allow_productivity: true,
  },
  "logistic-robot": {
    type: "recipe",
    name: "logistic-robot",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "flying-robot-frame",
        amount: 1,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 2,
      },
    ],
    results: [
      {
        type: "item",
        name: "logistic-robot",
        amount: 1,
      },
    ],
  },
  "construction-robot": {
    type: "recipe",
    name: "construction-robot",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "flying-robot-frame",
        amount: 1,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 2,
      },
    ],
    results: [
      {
        type: "item",
        name: "construction-robot",
        amount: 1,
      },
    ],
  },
  "passive-provider-chest": {
    type: "recipe",
    name: "passive-provider-chest",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "steel-chest",
        amount: 1,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 3,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "passive-provider-chest",
        amount: 1,
      },
    ],
  },
  "active-provider-chest": {
    type: "recipe",
    name: "active-provider-chest",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "steel-chest",
        amount: 1,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 3,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "active-provider-chest",
        amount: 1,
      },
    ],
  },
  "storage-chest": {
    type: "recipe",
    name: "storage-chest",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "steel-chest",
        amount: 1,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 3,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "storage-chest",
        amount: 1,
      },
    ],
  },
  "buffer-chest": {
    type: "recipe",
    name: "buffer-chest",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "steel-chest",
        amount: 1,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 3,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "buffer-chest",
        amount: 1,
      },
    ],
  },
  "requester-chest": {
    type: "recipe",
    name: "requester-chest",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "steel-chest",
        amount: 1,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 3,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "requester-chest",
        amount: 1,
      },
    ],
  },
  "rocket-silo": {
    type: "recipe",
    name: "rocket-silo",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "steel-plate",
        amount: 1000,
      },

      {
        type: "item",
        name: "concrete",
        amount: 1000,
      },

      {
        type: "item",
        name: "pipe",
        amount: 100,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 200,
      },

      {
        type: "item",
        name: "electric-engine-unit",
        amount: 200,
      },
    ],
    energy_required: 30,
    results: [
      {
        type: "item",
        name: "rocket-silo",
        amount: 1,
      },
    ],
    requester_paste_multiplier: 1,
  },
  "cargo-landing-pad": {
    type: "recipe",
    name: "cargo-landing-pad",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "concrete",
        amount: 200,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 25,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 10,
      },
    ],
    energy_required: 30,
    results: [
      {
        type: "item",
        name: "cargo-landing-pad",
        amount: 1,
      },
    ],
  },
  roboport: {
    type: "recipe",
    name: "roboport",
    enabled: false,
    energy_required: 5,
    ingredients: [
      {
        type: "item",
        name: "steel-plate",
        amount: 45,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 45,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 45,
      },
    ],
    results: [
      {
        type: "item",
        name: "roboport",
        amount: 1,
      },
    ],
  },
  substation: {
    type: "recipe",
    name: "substation",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "steel-plate",
        amount: 10,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 5,
      },

      {
        type: "item",
        name: "copper-cable",
        amount: 6,
      },
    ],
    results: [
      {
        type: "item",
        name: "substation",
        amount: 1,
      },
    ],
    category: "electronics",
  },
  accumulator: {
    type: "recipe",
    name: "accumulator",
    energy_required: 10,
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "iron-plate",
        amount: 2,
      },

      {
        type: "item",
        name: "battery",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "accumulator",
        amount: 1,
      },
    ],
    category: "electronics",
  },
  "electric-furnace": {
    type: "recipe",
    name: "electric-furnace",
    ingredients: [
      {
        type: "item",
        name: "steel-plate",
        amount: 10,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 5,
      },

      {
        type: "item",
        name: "stone-brick",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "electric-furnace",
        amount: 1,
      },
    ],
    energy_required: 5,
    enabled: false,
  },
  beacon: {
    type: "recipe",
    name: "beacon",
    enabled: false,
    energy_required: 15,
    ingredients: [
      {
        type: "item",
        name: "electronic-circuit",
        amount: 20,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 20,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 10,
      },

      {
        type: "item",
        name: "copper-cable",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "beacon",
        amount: 1,
      },
    ],
    category: "electronics",
  },
  pumpjack: {
    type: "recipe",
    name: "pumpjack",
    energy_required: 5,
    ingredients: [
      {
        type: "item",
        name: "steel-plate",
        amount: 5,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 10,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 5,
      },

      {
        type: "item",
        name: "pipe",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "pumpjack",
        amount: 1,
      },
    ],
    enabled: false,
  },
  "oil-refinery": {
    type: "recipe",
    name: "oil-refinery",
    energy_required: 8,
    ingredients: [
      {
        type: "item",
        name: "steel-plate",
        amount: 15,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 10,
      },

      {
        type: "item",
        name: "stone-brick",
        amount: 10,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 10,
      },

      {
        type: "item",
        name: "pipe",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "oil-refinery",
        amount: 1,
      },
    ],
    enabled: false,
  },
  "electric-engine-unit": {
    type: "recipe",
    name: "electric-engine-unit",
    category: "crafting-with-fluid",
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "engine-unit",
        amount: 1,
      },

      {
        type: "fluid",
        name: "lubricant",
        amount: 15,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 2,
      },
    ],
    results: [
      {
        type: "item",
        name: "electric-engine-unit",
        amount: 1,
      },
    ],
    enabled: false,
    allow_productivity: true,
  },
  "flying-robot-frame": {
    type: "recipe",
    name: "flying-robot-frame",
    energy_required: 20,
    ingredients: [
      {
        type: "item",
        name: "electric-engine-unit",
        amount: 1,
      },

      {
        type: "item",
        name: "battery",
        amount: 2,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 1,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 3,
      },
    ],
    results: [
      {
        type: "item",
        name: "flying-robot-frame",
        amount: 1,
      },
    ],
    enabled: false,
    allow_productivity: true,
  },
  explosives: {
    type: "recipe",
    name: "explosives",
    category: "chemistry-or-cryogenics",
    crafting_machine_tint: {
      primary: {
        r: 0.967999999999999971578290569595992565155029296875,
        g: 0.3810000000000000142108547152020037174224853515625,
        b: 0.2589999999999999857891452847979962825775146484375,
        a: 1,
      },
      secondary: {
        r: 0.89199999999999999289457264239899814128875732421875,
        g: 0.66400000000000005684341886080801486968994140625,
        b: 0.5339999999999999857891452847979962825775146484375,
        a: 1,
      },
      tertiary: {
        r: 1,
        g: 0.97799999999999993605115378159098327159881591796875,
        b: 0.512999999999999989341858963598497211933135986328125,
        a: 1,
      },
      quaternary: {
        r: 0.2100000000000000088817841970012523233890533447265625,
        g: 0.170000000000000017763568394002504646778106689453125,
        b: 0.013000000000000000444089209850062616169452667236328125,
        a: 1,
      },
    },
    energy_required: 4,
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "sulfur",
        amount: 1,
      },

      {
        type: "item",
        name: "coal",
        amount: 1,
      },

      {
        type: "fluid",
        name: "water",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "explosives",
        amount: 2,
      },
    ],
    allow_productivity: true,
  },
  battery: {
    type: "recipe",
    name: "battery",
    category: "chemistry-or-cryogenics",
    energy_required: 4,
    enabled: false,
    ingredients: [
      {
        type: "fluid",
        name: "sulfuric-acid",
        amount: 20,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 1,
      },

      {
        type: "item",
        name: "copper-plate",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "battery",
        amount: 1,
      },
    ],
    crafting_machine_tint: {
      primary: {
        r: 0.96500000000000003552713678800500929355621337890625,
        g: 0.482000000000000028421709430404007434844970703125,
        b: 0.3380000000000000337507799486047588288784027099609375,
        a: 1,
      },
      secondary: {
        r: 0.8309999999999998721023075631819665431976318359375,
        g: 0.560000000000000053290705182007513940334320068359375,
        b: 0.2220000000000000195399252334027551114559173583984375,
        a: 1,
      },
      tertiary: {
        r: 0.72799999999999993605115378159098327159881591796875,
        g: 0.817999999999999971578290569595992565155029296875,
        b: 0.442999999999999971578290569595992565155029296875,
        a: 1,
      },
      quaternary: {
        r: 0.93899999999999987920773492078296840190887451171875,
        g: 0.762999999999999989341858963598497211933135986328125,
        b: 0.1910000000000000142108547152020037174224853515625,
        a: 1,
      },
    },
    allow_productivity: true,
  },
  "storage-tank": {
    type: "recipe",
    name: "storage-tank",
    energy_required: 3,
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "iron-plate",
        amount: 20,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "storage-tank",
        amount: 1,
      },
    ],
  },
  pump: {
    type: "recipe",
    name: "pump",
    energy_required: 2,
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "engine-unit",
        amount: 1,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 1,
      },

      {
        type: "item",
        name: "pipe",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "pump",
        amount: 1,
      },
    ],
  },
  "chemical-plant": {
    type: "recipe",
    name: "chemical-plant",
    energy_required: 5,
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "steel-plate",
        amount: 5,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 5,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 5,
      },

      {
        type: "item",
        name: "pipe",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "chemical-plant",
        amount: 1,
      },
    ],
  },
  "low-density-structure": {
    type: "recipe",
    name: "low-density-structure",
    category: "crafting",
    energy_required: 15,
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "steel-plate",
        amount: 2,
      },

      {
        type: "item",
        name: "copper-plate",
        amount: 20,
      },

      {
        type: "item",
        name: "plastic-bar",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "low-density-structure",
        amount: 1,
      },
    ],
    allow_productivity: true,
  },
  "rocket-fuel": {
    type: "recipe",
    name: "rocket-fuel",
    energy_required: 15,
    enabled: false,
    category: "organic-or-assembling",
    ingredients: [
      {
        type: "item",
        name: "solid-fuel",
        amount: 10,
      },

      {
        type: "fluid",
        name: "light-oil",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "rocket-fuel",
        amount: 1,
      },
    ],
    crafting_machine_tint: {
      primary: {
        r: 1,
        g: 0.7,
        b: 0,
        a: 1,
      },
      secondary: {
        r: 1,
        g: 0.7,
        b: 0,
        a: 1,
      },
    },
    allow_productivity: true,
  },
  "rocket-part": {
    type: "recipe",
    name: "rocket-part",
    energy_required: 3,
    enabled: false,
    hide_from_player_crafting: true,
    category: "rocket-building",
    ingredients: [
      {
        type: "item",
        name: "processing-unit",
        amount: 1,
      },

      {
        type: "item",
        name: "low-density-structure",
        amount: 1,
      },

      {
        type: "item",
        name: "rocket-fuel",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "rocket-part",
        amount: 1,
      },
    ],
    allow_productivity: true,
  },
  "nuclear-reactor": {
    type: "recipe",
    name: "nuclear-reactor",
    energy_required: 8,
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "concrete",
        amount: 500,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 500,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 500,
      },

      {
        type: "item",
        name: "copper-plate",
        amount: 500,
      },
    ],
    results: [
      {
        type: "item",
        name: "nuclear-reactor",
        amount: 1,
      },
    ],
    requester_paste_multiplier: 1,
  },
  centrifuge: {
    type: "recipe",
    name: "centrifuge",
    energy_required: 4,
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "concrete",
        amount: 100,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 50,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 100,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 100,
      },
    ],
    results: [
      {
        type: "item",
        name: "centrifuge",
        amount: 1,
      },
    ],
    requester_paste_multiplier: 10,
  },
  "uranium-processing": {
    type: "recipe",
    name: "uranium-processing",
    energy_required: 12,
    enabled: false,
    category: "centrifuging",
    ingredients: [
      {
        type: "item",
        name: "uranium-ore",
        amount: 10,
      },
    ],
    icon: "__base__/graphics/icons/uranium-processing.png",
    subgroup: "uranium-processing",
    order: "a[uranium-processing]-a[uranium-processing]",
    results: [
      {
        type: "item",
        name: "uranium-235",
        probability: 0.00700000000000000088817841970012523233890533447265625,
        amount: 1,
      },

      {
        type: "item",
        name: "uranium-238",
        probability: 0.992999999999999971578290569595992565155029296875,
        amount: 1,
      },
    ],
    allow_productivity: true,
  },
  "kovarex-enrichment-process": {
    type: "recipe",
    name: "kovarex-enrichment-process",
    energy_required: 60,
    enabled: false,
    category: "centrifuging",
    icon: "__base__/graphics/icons/kovarex-enrichment-process.png",
    subgroup: "uranium-processing",
    order: "b[uranium-products]-c[kovarex-enrichment-process]",
    ingredients: [
      {
        type: "item",
        name: "uranium-235",
        amount: 40,
        ignored_by_stats: 40,
      },

      {
        type: "item",
        name: "uranium-238",
        amount: 5,
        ignored_by_stats: 2,
      },
    ],
    results: [
      {
        type: "item",
        name: "uranium-235",
        amount: 41,
        ignored_by_stats: 40,
        ignored_by_productivity: 40,
      },

      {
        type: "item",
        name: "uranium-238",
        amount: 2,
        ignored_by_stats: 2,
        ignored_by_productivity: 2,
      },
    ],
    main_product: "",
    allow_decomposition: false,
    allow_productivity: true,
    allow_quality: false,
  },
  "nuclear-fuel": {
    type: "recipe",
    name: "nuclear-fuel",
    energy_required: 90,
    enabled: false,
    category: "centrifuging",
    subgroup: "uranium-processing",
    order: "b[uranium-products]-d[nuclear-fuel]",
    ingredients: [
      {
        type: "item",
        name: "uranium-235",
        amount: 1,
      },

      {
        type: "item",
        name: "rocket-fuel",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "nuclear-fuel",
        amount: 1,
      },
    ],
    allow_productivity: true,
  },
  "nuclear-fuel-reprocessing": {
    type: "recipe",
    name: "nuclear-fuel-reprocessing",
    energy_required: 60,
    enabled: false,
    category: "centrifuging",
    ingredients: [
      {
        type: "item",
        name: "depleted-uranium-fuel-cell",
        amount: 5,
      },
    ],
    icon: "__base__/graphics/icons/nuclear-fuel-reprocessing.png",
    subgroup: "uranium-processing",
    order: "b[uranium-products]-b[nuclear-fuel-reprocessing]",
    main_product: "",
    results: [
      {
        type: "item",
        name: "uranium-238",
        amount: 3,
      },
    ],
    allow_decomposition: false,
    allow_productivity: true,
  },
  "uranium-fuel-cell": {
    type: "recipe",
    name: "uranium-fuel-cell",
    energy_required: 10,
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "iron-plate",
        amount: 10,
      },

      {
        type: "item",
        name: "uranium-235",
        amount: 1,
      },

      {
        type: "item",
        name: "uranium-238",
        amount: 19,
      },
    ],
    results: [
      {
        type: "item",
        name: "uranium-fuel-cell",
        amount: 10,
      },
    ],
    subgroup: "uranium-processing",
    allow_productivity: true,
  },
  "heat-exchanger": {
    type: "recipe",
    name: "heat-exchanger",
    energy_required: 3,
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "steel-plate",
        amount: 10,
      },

      {
        type: "item",
        name: "copper-plate",
        amount: 100,
      },

      {
        type: "item",
        name: "pipe",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "heat-exchanger",
        amount: 1,
      },
    ],
  },
  "heat-pipe": {
    type: "recipe",
    name: "heat-pipe",
    energy_required: 1,
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "steel-plate",
        amount: 10,
      },

      {
        type: "item",
        name: "copper-plate",
        amount: 20,
      },
    ],
    results: [
      {
        type: "item",
        name: "heat-pipe",
        amount: 1,
      },
    ],
  },
  "steam-turbine": {
    type: "recipe",
    name: "steam-turbine",
    enabled: false,
    energy_required: 3,
    ingredients: [
      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 50,
      },

      {
        type: "item",
        name: "copper-plate",
        amount: 50,
      },

      {
        type: "item",
        name: "pipe",
        amount: 20,
      },
    ],
    results: [
      {
        type: "item",
        name: "steam-turbine",
        amount: 1,
      },
    ],
  },
  "rail-support": {
    type: "recipe",
    name: "rail-support",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "refined-concrete",
        amount: 20,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "rail-support",
        amount: 1,
      },
    ],
  },
  "rail-ramp": {
    type: "recipe",
    name: "rail-ramp",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "refined-concrete",
        amount: 100,
      },

      {
        type: "item",
        name: "rail",
        amount: 8,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "rail-ramp",
        amount: 1,
      },
    ],
  },
  "quality-module": {
    type: "recipe",
    name: "quality-module",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "electronic-circuit",
        amount: 5,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 5,
      },
    ],
    energy_required: 15,
    results: [
      {
        type: "item",
        name: "quality-module",
        amount: 1,
      },
    ],
    category: "electronics",
  },
  "quality-module-2": {
    type: "recipe",
    name: "quality-module-2",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "quality-module",
        amount: 4,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 5,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 5,
      },
    ],
    energy_required: 30,
    results: [
      {
        type: "item",
        name: "quality-module-2",
        amount: 1,
      },
    ],
    category: "electronics",
  },
  "quality-module-3": {
    type: "recipe",
    name: "quality-module-3",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "quality-module-2",
        amount: 4,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 5,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 5,
      },

      {
        type: "item",
        name: "superconductor",
        amount: 1,
      },
    ],
    energy_required: 60,
    results: [
      {
        type: "item",
        name: "quality-module-3",
        amount: 1,
      },
    ],
    category: "electronics",
  },
  recycler: {
    type: "recipe",
    name: "recycler",
    ingredients: [
      {
        type: "item",
        name: "processing-unit",
        amount: 6,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 20,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 40,
      },

      {
        type: "item",
        name: "concrete",
        amount: 20,
      },
    ],
    results: [
      {
        type: "item",
        name: "recycler",
        amount: 1,
      },
    ],
    energy_required: 3,
    enabled: false,
    surface_conditions: [
      {
        property: "magnetic-field",
        min: 99,
        max: 99,
      },
    ],
  },
  "simple-coal-liquefaction": {
    type: "recipe",
    name: "simple-coal-liquefaction",
    category: "oil-processing",
    enabled: false,
    energy_required: 5,
    ingredients: [
      {
        type: "item",
        name: "coal",
        amount: 10,
      },

      {
        type: "item",
        name: "calcite",
        amount: 2,
      },

      {
        type: "fluid",
        name: "sulfuric-acid",
        amount: 25,
      },
    ],
    results: [
      {
        type: "fluid",
        name: "heavy-oil",
        amount: 50,
      },
    ],
    allow_productivity: true,
    icon: "__space-age__/graphics/icons/fluid/simple-coal-liquefaction.png",
    subgroup: "fluid-recipes",
    order: "a[oil-processing]-c[coal-liquefaction]",
    allow_decomposition: false,
    show_amount_in_title: false,
  },
  "yumako-processing": {
    type: "recipe",
    name: "yumako-processing",
    icon: "__space-age__/graphics/icons/yumako-processing.png",
    category: "organic-or-hand-crafting",
    subgroup: "agriculture-processes",
    order: "a[seeds]-a[yumako-processing]",
    enabled: false,
    allow_productivity: true,
    energy_required: 1,
    ingredients: [
      {
        type: "item",
        name: "yumako",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "yumako-seed",
        amount: 1,
        probability: 0.02,
      },

      {
        type: "item",
        name: "yumako-mash",
        amount: 2,
      },
    ],
    crafting_machine_tint: {
      primary: {
        r: 0.97599999999999997868371792719699442386627197265625,
        g: 0.006,
        b: 0.3100000000000000088817841970012523233890533447265625,
        a: 1,
      },
      secondary: {
        r: 0.8050000000000000710542735760100185871124267578125,
        g: 0.70099999999999997868371792719699442386627197265625,
        b: 0.292999999999999971578290569595992565155029296875,
        a: 1,
      },
    },
  },
  "jellynut-processing": {
    type: "recipe",
    name: "jellynut-processing",
    icon: "__space-age__/graphics/icons/jellynut-processing.png",
    category: "organic-or-hand-crafting",
    subgroup: "agriculture-processes",
    order: "a[seeds]-b[jellynut-processing]",
    enabled: false,
    allow_productivity: true,
    energy_required: 1,
    ingredients: [
      {
        type: "item",
        name: "jellynut",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "jellynut-seed",
        amount: 1,
        probability: 0.02,
      },

      {
        type: "item",
        name: "jelly",
        amount: 4,
      },
    ],
    crafting_machine_tint: {
      primary: {
        r: 0.4050000000000000710542735760100185871124267578125,
        g: 0.70099999999999997868371792719699442386627197265625,
        b: 0.692999999999999971578290569595992565155029296875,
        a: 1,
      },
      secondary: {
        r: 0.87599999999999997868371792719699442386627197265625,
        g: 0.40600000000000004973799150320701301097869873046875,
        b: 0.70999999999999996447286321199499070644378662109375,
        a: 1,
      },
    },
  },
  "copper-bacteria": {
    type: "recipe",
    name: "copper-bacteria",
    icon: "__space-age__/graphics/icons/copper-bacteria.png",
    category: "organic-or-hand-crafting",
    surface_conditions: [
      {
        property: "pressure",
        min: 2000,
        max: 2000,
      },
    ],
    subgroup: "agriculture-processes",
    order: "e[bacteria]-a[bacteria]-b[copper]",
    enabled: false,
    allow_productivity: true,
    energy_required: 1,
    ingredients: [
      {
        type: "item",
        name: "yumako-mash",
        amount: 3,
      },
    ],
    results: [
      {
        type: "item",
        name: "copper-bacteria",
        amount: 1,
        probability: 0.1,
      },

      {
        type: "item",
        name: "spoilage",
        amount: 1,
      },
    ],
    crafting_machine_tint: {
      primary: {
        r: 1,
        g: 0.457000000000000028421709430404007434844970703125,
        b: 0,
        a: 1,
      },
      secondary: {
        r: 1,
        g: 0.195999999999999996447286321199499070644378662109375,
        b: 0,
        a: 1,
      },
    },
  },
  "copper-bacteria-cultivation": {
    type: "recipe",
    name: "copper-bacteria-cultivation",
    icon: "__space-age__/graphics/icons/copper-bacteria-cultivation.png",
    category: "organic",
    surface_conditions: [
      {
        property: "pressure",
        min: 2000,
        max: 2000,
      },
    ],
    subgroup: "agriculture-processes",
    order: "e[bacteria]-b[cultivation]-b[copper]",
    enabled: false,
    allow_productivity: true,
    result_is_always_fresh: true,
    energy_required: 4,
    ingredients: [
      {
        type: "item",
        name: "copper-bacteria",
        amount: 1,
      },

      {
        type: "item",
        name: "bioflux",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "copper-bacteria",
        amount: 4,
      },
    ],
    crafting_machine_tint: {
      primary: {
        r: 1,
        g: 0.457000000000000028421709430404007434844970703125,
        b: 0,
        a: 1,
      },
      secondary: {
        r: 1,
        g: 0.195999999999999996447286321199499070644378662109375,
        b: 0,
        a: 1,
      },
    },
    show_amount_in_title: false,
  },
  "iron-bacteria": {
    type: "recipe",
    name: "iron-bacteria",
    icon: "__space-age__/graphics/icons/iron-bacteria.png",
    category: "organic-or-hand-crafting",
    surface_conditions: [
      {
        property: "pressure",
        min: 2000,
        max: 2000,
      },
    ],
    subgroup: "agriculture-processes",
    order: "e[bacteria]-a[bacteria]-a[iron]",
    enabled: false,
    allow_productivity: true,
    energy_required: 1,
    ingredients: [
      {
        type: "item",
        name: "jelly",
        amount: 6,
      },
    ],
    results: [
      {
        type: "item",
        name: "iron-bacteria",
        amount: 1,
        probability: 0.1,
      },

      {
        type: "item",
        name: "spoilage",
        amount: 4,
      },
    ],
    crafting_machine_tint: {
      primary: {
        r: 0,
        g: 0.5,
        b: 1,
        a: 1,
      },
      secondary: {
        r: 0.095,
        g: 0.412000000000000010658141036401502788066864013671875,
        b: 0.8219999999999998863131622783839702606201171875,
        a: 1,
      },
    },
  },
  "iron-bacteria-cultivation": {
    type: "recipe",
    name: "iron-bacteria-cultivation",
    icon: "__space-age__/graphics/icons/iron-bacteria-cultivation.png",
    category: "organic",
    surface_conditions: [
      {
        property: "pressure",
        min: 2000,
        max: 2000,
      },
    ],
    subgroup: "agriculture-processes",
    order: "e[bacteria]-b[cultivation]-a[iron]",
    enabled: false,
    allow_productivity: true,
    result_is_always_fresh: true,
    energy_required: 4,
    ingredients: [
      {
        type: "item",
        name: "iron-bacteria",
        amount: 1,
      },

      {
        type: "item",
        name: "bioflux",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "iron-bacteria",
        amount: 4,
      },
    ],
    crafting_machine_tint: {
      primary: {
        r: 0,
        g: 0.5,
        b: 1,
        a: 1,
      },
      secondary: {
        r: 0.095,
        g: 0.412000000000000010658141036401502788066864013671875,
        b: 0.8219999999999998863131622783839702606201171875,
        a: 1,
      },
    },
    show_amount_in_title: false,
  },
  "artificial-yumako-soil": {
    type: "recipe",
    name: "artificial-yumako-soil",
    icon: "__space-age__/graphics/icons/artificial-yumako-soil.png",
    category: "crafting",
    surface_conditions: [
      {
        property: "pressure",
        min: 2000,
        max: 2000,
      },
    ],
    enabled: false,
    allow_productivity: true,
    energy_required: 2,
    ingredients: [
      {
        type: "item",
        name: "yumako-seed",
        amount: 2,
      },

      {
        type: "item",
        name: "nutrients",
        amount: 50,
      },

      {
        type: "item",
        name: "landfill",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "artificial-yumako-soil",
        amount: 10,
      },
    ],
  },
  "overgrowth-yumako-soil": {
    type: "recipe",
    name: "overgrowth-yumako-soil",
    icon: "__space-age__/graphics/icons/overgrowth-yumako-soil.png",
    category: "crafting-with-fluid",
    surface_conditions: [
      {
        property: "pressure",
        min: 2000,
        max: 2000,
      },
    ],
    enabled: false,
    allow_productivity: true,
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "artificial-yumako-soil",
        amount: 2,
      },

      {
        type: "item",
        name: "yumako-seed",
        amount: 5,
      },

      {
        type: "item",
        name: "biter-egg",
        amount: 10,
      },

      {
        type: "item",
        name: "spoilage",
        amount: 50,
      },

      {
        type: "fluid",
        name: "water",
        amount: 100,
      },
    ],
    results: [
      {
        type: "item",
        name: "overgrowth-yumako-soil",
        amount: 1,
      },
    ],
  },
  "artificial-jellynut-soil": {
    type: "recipe",
    name: "artificial-jellynut-soil",
    icon: "__space-age__/graphics/icons/artificial-jellynut-soil.png",
    category: "crafting",
    surface_conditions: [
      {
        property: "pressure",
        min: 2000,
        max: 2000,
      },
    ],
    enabled: false,
    allow_productivity: true,
    energy_required: 2,
    ingredients: [
      {
        type: "item",
        name: "jellynut-seed",
        amount: 2,
      },

      {
        type: "item",
        name: "nutrients",
        amount: 50,
      },

      {
        type: "item",
        name: "landfill",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "artificial-jellynut-soil",
        amount: 10,
      },
    ],
  },
  "overgrowth-jellynut-soil": {
    type: "recipe",
    name: "overgrowth-jellynut-soil",
    icon: "__space-age__/graphics/icons/overgrowth-jellynut-soil.png",
    category: "crafting-with-fluid",
    surface_conditions: [
      {
        property: "pressure",
        min: 2000,
        max: 2000,
      },
    ],
    enabled: false,
    allow_productivity: true,
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "artificial-jellynut-soil",
        amount: 2,
      },

      {
        type: "item",
        name: "jellynut-seed",
        amount: 5,
      },

      {
        type: "item",
        name: "biter-egg",
        amount: 10,
      },

      {
        type: "item",
        name: "spoilage",
        amount: 50,
      },

      {
        type: "fluid",
        name: "water",
        amount: 100,
      },
    ],
    results: [
      {
        type: "item",
        name: "overgrowth-jellynut-soil",
        amount: 1,
      },
    ],
  },
  "nutrients-from-spoilage": {
    type: "recipe",
    name: "nutrients-from-spoilage",
    icon: "__space-age__/graphics/icons/nutrients-from-spoilage.png",
    category: "organic-or-assembling",
    subgroup: "agriculture-processes",
    order: "c[nutrients]-a[nutrients-from-spoilage]",
    enabled: false,
    allow_productivity: true,
    energy_required: 2,
    ingredients: [
      {
        type: "item",
        name: "spoilage",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "nutrients",
        amount: 1,
        percent_spoiled: 0.5,
      },
    ],
    crafting_machine_tint: {
      primary: {
        r: 0.8,
        g: 0.9,
        b: 1,
        a: 1,
      },
      secondary: {
        r: 0.5,
        g: 0.5,
        b: 0.8,
        a: 1,
      },
    },
  },
  "nutrients-from-yumako-mash": {
    type: "recipe",
    name: "nutrients-from-yumako-mash",
    icon: "__space-age__/graphics/icons/nutrients-from-yumako-mash.png",
    category: "organic",
    subgroup: "agriculture-processes",
    enabled: false,
    allow_productivity: true,
    order: "c[nutrients]-b[nutrients-from-yumako-mash]",
    energy_required: 4,
    ingredients: [
      {
        type: "item",
        name: "yumako-mash",
        amount: 4,
      },
    ],
    results: [
      {
        type: "item",
        name: "nutrients",
        amount: 6,
      },
    ],
    crafting_machine_tint: {
      primary: {
        r: 0.8,
        g: 0.9,
        b: 1,
        a: 1,
      },
      secondary: {
        r: 0.8,
        g: 0.2,
        b: 0,
        a: 1,
      },
    },
  },
  "nutrients-from-bioflux": {
    type: "recipe",
    name: "nutrients-from-bioflux",
    icon: "__space-age__/graphics/icons/nutrients-from-bioflux.png",
    category: "organic",
    subgroup: "agriculture-processes",
    enabled: false,
    allow_productivity: true,
    order: "c[nutrients]-c[nutrients-from-bioflux]",
    energy_required: 2,
    ingredients: [
      {
        type: "item",
        name: "bioflux",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "nutrients",
        amount: 40,
      },
    ],
    crafting_machine_tint: {
      primary: {
        r: 0.8,
        g: 0.9,
        b: 1,
        a: 1,
      },
      secondary: {
        r: 0.9,
        g: 0.137000000000000010658141036401502788066864013671875,
        b: 0,
        a: 1,
      },
    },
  },
  "pentapod-egg": {
    type: "recipe",
    name: "pentapod-egg",
    icon: "__space-age__/graphics/icons/pentapod-egg-3.png",
    category: "organic",
    surface_conditions: [
      {
        property: "pressure",
        min: 2000,
        max: 2000,
      },
    ],
    subgroup: "agriculture-processes",
    order: "d[organic-processing]-a[pentapod-egg]",
    enabled: false,
    allow_productivity: true,
    result_is_always_fresh: true,
    hide_from_signal_gui: true,
    energy_required: 15,
    ingredients: [
      {
        type: "item",
        name: "pentapod-egg",
        amount: 1,
      },

      {
        type: "item",
        name: "nutrients",
        amount: 30,
      },

      {
        type: "fluid",
        name: "water",
        amount: 60,
      },
    ],
    results: [
      {
        type: "item",
        name: "pentapod-egg",
        amount: 2,
        ignored_by_stats: 1,
        ignored_by_productivity: 1,
      },
    ],
    crafting_machine_tint: {
      primary: {
        r: 0.5,
        g: 0.9,
        b: 0.5,
        a: 1,
      },
      secondary: {
        r: 0,
        g: 0.5,
        b: 0,
        a: 1,
      },
    },
  },
  "rocket-fuel-from-jelly": {
    type: "recipe",
    name: "rocket-fuel-from-jelly",
    icon: "__space-age__/graphics/icons/rocket-fuel-from-jelly.png",
    category: "organic",
    subgroup: "agriculture-products",
    order: "a[organic-products]-a[rocket-fuel-from-jelly]",
    enabled: false,
    allow_productivity: true,
    energy_required: 10,
    ingredients: [
      {
        type: "fluid",
        name: "water",
        amount: 30,
      },

      {
        type: "item",
        name: "jelly",
        amount: 30,
      },

      {
        type: "item",
        name: "bioflux",
        amount: 2,
      },
    ],
    results: [
      {
        type: "item",
        name: "rocket-fuel",
        amount: 1,
      },
    ],
    crafting_machine_tint: {
      primary: {
        r: 0.72799999999999993605115378159098327159881591796875,
        g: 0.1160000000000000142108547152020037174224853515625,
        b: 0.1160000000000000142108547152020037174224853515625,
        a: 1,
      },
      secondary: {
        r: 0.3,
        g: 0.9,
        b: 0.3,
        a: 1,
      },
    },
  },
  bioflux: {
    type: "recipe",
    name: "bioflux",
    icon: "__space-age__/graphics/icons/bioflux.png",
    category: "organic",
    subgroup: "agriculture-products",
    order: "a[organic-products]-g[bioflux]",
    enabled: false,
    allow_productivity: true,
    energy_required: 6,
    ingredients: [
      {
        type: "item",
        name: "yumako-mash",
        amount: 15,
      },

      {
        type: "item",
        name: "jelly",
        amount: 12,
      },
    ],
    results: [
      {
        type: "item",
        name: "bioflux",
        amount: 4,
      },
    ],
    crafting_machine_tint: {
      primary: {
        r: 0.3,
        g: 0.9,
        b: 0.8,
        a: 1,
      },
      secondary: {
        r: 0.8,
        g: 0.5,
        b: 0.3,
        a: 1,
      },
    },
  },
  bioplastic: {
    type: "recipe",
    name: "bioplastic",
    icon: "__space-age__/graphics/icons/bioplastic.png",
    category: "organic",
    subgroup: "agriculture-products",
    order: "a[organic-products]-c[bioplastic]",
    enabled: false,
    allow_productivity: true,
    energy_required: 2,
    ingredients: [
      {
        type: "item",
        name: "bioflux",
        amount: 1,
      },

      {
        type: "item",
        name: "yumako-mash",
        amount: 4,
      },
    ],
    results: [
      {
        type: "item",
        name: "plastic-bar",
        amount: 3,
      },
    ],
    crafting_machine_tint: {
      primary: {
        r: 0.721999999999999975131004248396493494510650634765625,
        g: 0.620999999999999996447286321199499070644378662109375,
        b: 0.6550000000000000710542735760100185871124267578125,
        a: 1,
      },
      secondary: {
        r: 0.692999999999999971578290569595992565155029296875,
        g: 0.44900000000000002131628207280300557613372802734375,
        b: 0.44900000000000002131628207280300557613372802734375,
        a: 1,
      },
    },
  },
  biosulfur: {
    type: "recipe",
    name: "biosulfur",
    icon: "__space-age__/graphics/icons/biosulfur.png",
    category: "organic",
    subgroup: "agriculture-products",
    order: "a[organic-products]-d[biosulfur]",
    enabled: false,
    allow_productivity: true,
    energy_required: 2,
    ingredients: [
      {
        type: "item",
        name: "spoilage",
        amount: 5,
      },

      {
        type: "item",
        name: "bioflux",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "sulfur",
        amount: 2,
      },
    ],
    crafting_machine_tint: {
      primary: {
        r: 1,
        g: 1,
        b: 0,
        a: 1,
      },
      secondary: {
        r: 0.692999999999999971578290569595992565155029296875,
        g: 0.44900000000000002131628207280300557613372802734375,
        b: 0,
        a: 1,
      },
    },
  },
  biolubricant: {
    type: "recipe",
    name: "biolubricant",
    icon: "__space-age__/graphics/icons/fluid/biolubricant.png",
    category: "organic",
    subgroup: "agriculture-products",
    order: "a[organic-products]-b[biolubricant]",
    energy_required: 3,
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "jelly",
        amount: 60,
      },
    ],
    results: [
      {
        type: "fluid",
        name: "lubricant",
        amount: 20,
      },
    ],
    allow_productivity: true,
    crafting_machine_tint: {
      primary: {
        r: 0,
        g: 1,
        b: 0,
        a: 1,
      },
      secondary: {
        r: 0.3,
        g: 1,
        b: 0.3,
        a: 1,
      },
    },
  },
  "carbon-fiber": {
    type: "recipe",
    name: "carbon-fiber",
    category: "organic",
    subgroup: "agriculture-products",
    order: "a[organic-products]-h[carbon-fiber]",
    energy_required: 5,
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "yumako-mash",
        amount: 10,
      },

      {
        type: "item",
        name: "carbon",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "carbon-fiber",
        amount: 1,
      },
    ],
    allow_productivity: true,
    crafting_machine_tint: {
      primary: {
        r: 0.3060000000000000053290705182007513940334320068359375,
        g: 0.642999999999999971578290569595992565155029296875,
        b: 0.684000000000000074606987254810519516468048095703125,
        a: 1,
      },
      secondary: {
        r: 0.684000000000000074606987254810519516468048095703125,
        g: 0.684000000000000074606987254810519516468048095703125,
        b: 0.684000000000000074606987254810519516468048095703125,
        a: 1,
      },
    },
  },
  "toolbelt-equipment": {
    type: "recipe",
    name: "toolbelt-equipment",
    enabled: false,
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "advanced-circuit",
        amount: 3,
      },

      {
        type: "item",
        name: "carbon-fiber",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "toolbelt-equipment",
        amount: 1,
      },
    ],
  },
  "battery-mk3-equipment": {
    type: "recipe",
    name: "battery-mk3-equipment",
    enabled: false,
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "battery-mk2-equipment",
        amount: 5,
      },

      {
        type: "item",
        name: "supercapacitor",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "battery-mk3-equipment",
        amount: 1,
      },
    ],
  },
  "space-platform-foundation": {
    type: "recipe",
    name: "space-platform-foundation",
    energy_required: 10,
    enabled: false,
    category: "crafting",
    ingredients: [
      {
        type: "item",
        name: "steel-plate",
        amount: 20,
      },

      {
        type: "item",
        name: "copper-cable",
        amount: 20,
      },
    ],
    results: [
      {
        type: "item",
        name: "space-platform-foundation",
        amount: 1,
      },
    ],
  },
  "stack-inserter": {
    type: "recipe",
    name: "stack-inserter",
    enabled: false,
    energy_required: 0.5,
    ingredients: [
      {
        type: "item",
        name: "bulk-inserter",
        amount: 1,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 1,
      },

      {
        type: "item",
        name: "carbon-fiber",
        amount: 2,
      },

      {
        type: "item",
        name: "jelly",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "stack-inserter",
        amount: 1,
      },
    ],
  },
  "rocket-turret": {
    type: "recipe",
    name: "rocket-turret",
    enabled: false,
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "rocket-launcher",
        amount: 4,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 4,
      },

      {
        type: "item",
        name: "carbon-fiber",
        amount: 20,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 20,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 20,
      },
    ],
    results: [
      {
        type: "item",
        name: "rocket-turret",
        amount: 1,
      },
    ],
  },
  "infinity-chest": {
    type: "recipe",
    name: "infinity-chest",
    energy_required: 0.5,
    enabled: false,
    hidden: true,
    ingredients: [
      {
        type: "item",
        name: "steel-chest",
        amount: 1,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "infinity-chest",
        amount: 1,
      },
    ],
  },
  "infinity-pipe": {
    type: "recipe",
    name: "infinity-pipe",
    energy_required: 0.5,
    hidden: true,
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "pipe",
        amount: 1,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "infinity-pipe",
        amount: 1,
      },
    ],
  },
  "heat-interface": {
    type: "recipe",
    name: "heat-interface",
    energy_required: 0.5,
    hidden: true,
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "heat-pipe",
        amount: 1,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "heat-interface",
        amount: 1,
      },
    ],
  },
  "space-platform-starter-pack": {
    type: "recipe",
    name: "space-platform-starter-pack",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "space-platform-foundation",
        amount: 60,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 20,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 20,
      },
    ],
    energy_required: 60,
    results: [
      {
        type: "item",
        name: "space-platform-starter-pack",
        amount: 1,
      },
    ],
  },
  "cargo-bay": {
    type: "recipe",
    name: "cargo-bay",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "steel-plate",
        amount: 20,
      },

      {
        type: "item",
        name: "low-density-structure",
        amount: 20,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 5,
      },
    ],
    energy_required: 10,
    results: [
      {
        type: "item",
        name: "cargo-bay",
        amount: 1,
      },
    ],
  },
  "asteroid-collector": {
    type: "recipe",
    name: "asteroid-collector",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "low-density-structure",
        amount: 20,
      },

      {
        type: "item",
        name: "electric-engine-unit",
        amount: 8,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 5,
      },
    ],
    energy_required: 10,
    results: [
      {
        type: "item",
        name: "asteroid-collector",
        amount: 1,
      },
    ],
  },
  crusher: {
    type: "recipe",
    name: "crusher",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "low-density-structure",
        amount: 20,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 10,
      },

      {
        type: "item",
        name: "electric-engine-unit",
        amount: 10,
      },
    ],
    energy_required: 10,
    results: [
      {
        type: "item",
        name: "crusher",
        amount: 1,
      },
    ],
  },
  thruster: {
    type: "recipe",
    name: "thruster",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "steel-plate",
        amount: 10,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 10,
      },

      {
        type: "item",
        name: "electric-engine-unit",
        amount: 5,
      },
    ],
    energy_required: 10,
    results: [
      {
        type: "item",
        name: "thruster",
        amount: 1,
      },
    ],
  },
  "space-science-pack": {
    type: "recipe",
    name: "space-science-pack",
    icon: "__base__/graphics/icons/space-science-pack.png",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "iron-plate",
        amount: 2,
      },

      {
        type: "item",
        name: "carbon",
        amount: 1,
      },

      {
        type: "item",
        name: "ice",
        amount: 1,
      },
    ],
    surface_conditions: [
      {
        property: "gravity",
        min: 0,
        max: 0,
      },
    ],
    energy_required: 15,
    results: [
      {
        type: "item",
        name: "space-science-pack",
        amount: 5,
      },
    ],
    allow_productivity: true,
    main_product: "space-science-pack",
  },
  "metallurgic-science-pack": {
    type: "recipe",
    name: "metallurgic-science-pack",
    category: "metallurgy",
    surface_conditions: [
      {
        property: "pressure",
        min: 4000,
        max: 4000,
      },
    ],
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "tungsten-carbide",
        amount: 3,
      },

      {
        type: "item",
        name: "tungsten-plate",
        amount: 2,
      },

      {
        type: "fluid",
        name: "molten-copper",
        amount: 200,
      },
    ],
    energy_required: 10,
    results: [
      {
        type: "item",
        name: "metallurgic-science-pack",
        amount: 1,
      },
    ],
    allow_productivity: true,
  },
  "agricultural-science-pack": {
    type: "recipe",
    name: "agricultural-science-pack",
    category: "organic",
    subgroup: "science-pack",
    surface_conditions: [
      {
        property: "pressure",
        min: 2000,
        max: 2000,
      },
    ],
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "bioflux",
        amount: 1,
      },

      {
        type: "item",
        name: "pentapod-egg",
        amount: 1,
      },
    ],
    energy_required: 4,
    results: [
      {
        type: "item",
        name: "agricultural-science-pack",
        amount: 1,
      },
    ],
    allow_productivity: true,
    crafting_machine_tint: {
      primary: [0.1, 0.2, 0, 1],
      secondary: [
        0.63900000000000005684341886080801486968994140625, 0.76400000000000005684341886080801486968994140625,
        1, 1,
      ],
    },
  },
  "electromagnetic-science-pack": {
    type: "recipe",
    name: "electromagnetic-science-pack",
    category: "electromagnetics",
    surface_conditions: [
      {
        property: "magnetic-field",
        min: 99,
        max: 99,
      },
    ],
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "supercapacitor",
        amount: 1,
      },

      {
        type: "item",
        name: "accumulator",
        amount: 1,
      },

      {
        type: "fluid",
        name: "electrolyte",
        amount: 25,
      },

      {
        type: "fluid",
        name: "holmium-solution",
        amount: 25,
      },
    ],
    energy_required: 10,
    results: [
      {
        type: "item",
        name: "electromagnetic-science-pack",
        amount: 1,
      },
    ],
    allow_productivity: true,
  },
  "cryogenic-science-pack": {
    type: "recipe",
    name: "cryogenic-science-pack",
    category: "cryogenics",
    surface_conditions: [
      {
        property: "pressure",
        min: 300,
        max: 300,
      },
    ],
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "ice",
        amount: 3,
      },

      {
        type: "item",
        name: "lithium-plate",
        amount: 1,
      },

      {
        type: "fluid",
        name: "fluoroketone-cold",
        amount: 6,
        ignored_by_stats: 6,
      },
    ],
    energy_required: 20,
    results: [
      {
        type: "item",
        name: "cryogenic-science-pack",
        amount: 1,
      },

      {
        type: "fluid",
        name: "fluoroketone-hot",
        amount: 3,
        ignored_by_stats: 3,
        ignored_by_productivity: 3,
      },
    ],
    main_product: "cryogenic-science-pack",
    allow_productivity: true,
    crafting_machine_tint: {
      primary: {
        r: 0.04,
        g: 0.18599999999999997868371792719699442386627197265625,
        b: 1,
        a: 1,
      },
      secondary: {
        r: 0.2,
        g: 0.4,
        b: 1,
        a: 1,
      },
      tertiary: {
        r: 0.6,
        g: 0.65099999999999997868371792719699442386627197265625,
        b: 1,
        a: 1,
      },
      quaternary: {
        r: 0.1,
        g: 0.3,
        b: 0.5,
        a: 1,
      },
    },
  },
  "metallic-asteroid-crushing": {
    type: "recipe",
    name: "metallic-asteroid-crushing",
    icon: "__space-age__/graphics/icons/metallic-asteroid-crushing.png",
    category: "crushing",
    subgroup: "space-crushing",
    order: "b-a-a",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "metallic-asteroid-chunk",
        amount: 1,
      },
    ],
    energy_required: 2,
    results: [
      {
        type: "item",
        name: "iron-ore",
        amount: 20,
      },

      {
        type: "item",
        name: "metallic-asteroid-chunk",
        amount: 1,
        probability: 0.2,
      },
    ],
    allow_productivity: true,
    allow_decomposition: false,
  },
  "carbonic-asteroid-crushing": {
    type: "recipe",
    name: "carbonic-asteroid-crushing",
    icon: "__space-age__/graphics/icons/carbonic-asteroid-crushing.png",
    category: "crushing",
    subgroup: "space-crushing",
    order: "b-a-b",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "carbonic-asteroid-chunk",
        amount: 1,
      },
    ],
    energy_required: 2,
    results: [
      {
        type: "item",
        name: "carbon",
        amount: 10,
      },

      {
        type: "item",
        name: "carbonic-asteroid-chunk",
        amount: 1,
        probability: 0.2,
      },
    ],
    allow_productivity: true,
    allow_decomposition: false,
  },
  "oxide-asteroid-crushing": {
    type: "recipe",
    name: "oxide-asteroid-crushing",
    icon: "__space-age__/graphics/icons/oxide-asteroid-crushing.png",
    category: "crushing",
    subgroup: "space-crushing",
    order: "b-a-c",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "oxide-asteroid-chunk",
        amount: 1,
      },
    ],
    energy_required: 2,
    results: [
      {
        type: "item",
        name: "ice",
        amount: 5,
      },

      {
        type: "item",
        name: "oxide-asteroid-chunk",
        amount: 1,
        probability: 0.2,
      },
    ],
    allow_productivity: true,
    allow_decomposition: false,
  },
  "advanced-metallic-asteroid-crushing": {
    type: "recipe",
    name: "advanced-metallic-asteroid-crushing",
    localised_name: ["recipe-name.advanced-metallic-asteroid-crushing"],
    icon: "__space-age__/graphics/icons/advanced-metallic-asteroid-crushing.png",
    category: "crushing",
    subgroup: "space-crushing",
    order: "c-a-b",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "metallic-asteroid-chunk",
        amount: 1,
      },
    ],
    energy_required: 5,
    results: [
      {
        type: "item",
        name: "iron-ore",
        amount: 10,
      },

      {
        type: "item",
        name: "copper-ore",
        amount: 4,
      },

      {
        type: "item",
        name: "metallic-asteroid-chunk",
        amount: 1,
        probability: 0.05,
      },
    ],
    allow_productivity: true,
    allow_decomposition: false,
  },
  "advanced-carbonic-asteroid-crushing": {
    type: "recipe",
    name: "advanced-carbonic-asteroid-crushing",
    localised_name: ["recipe-name.advanced-carbonic-asteroid-crushing"],
    icon: "__space-age__/graphics/icons/advanced-carbonic-asteroid-crushing.png",
    category: "crushing",
    subgroup: "space-crushing",
    order: "e[advanced-carbonic-asteroid-crushing]",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "carbonic-asteroid-chunk",
        amount: 1,
      },
    ],
    energy_required: 5,
    results: [
      {
        type: "item",
        name: "carbon",
        amount: 5,
      },

      {
        type: "item",
        name: "sulfur",
        amount: 2,
      },

      {
        type: "item",
        name: "carbonic-asteroid-chunk",
        amount: 1,
        probability: 0.05,
      },
    ],
    allow_productivity: true,
    allow_decomposition: false,
  },
  "advanced-oxide-asteroid-crushing": {
    type: "recipe",
    name: "advanced-oxide-asteroid-crushing",
    localised_name: ["recipe-name.advanced-oxide-asteroid-crushing"],
    icon: "__space-age__/graphics/icons/advanced-oxide-asteroid-crushing.png",
    category: "crushing",
    subgroup: "space-crushing",
    order: "f[advanced-oxide-asteroid-crushing]",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "oxide-asteroid-chunk",
        amount: 1,
      },
    ],
    energy_required: 5,
    results: [
      {
        type: "item",
        name: "ice",
        amount: 3,
      },

      {
        type: "item",
        name: "calcite",
        amount: 2,
      },

      {
        type: "item",
        name: "oxide-asteroid-chunk",
        amount: 1,
        probability: 0.05,
      },
    ],
    allow_productivity: true,
    allow_decomposition: false,
  },
  "metallic-asteroid-reprocessing": {
    type: "recipe",
    name: "metallic-asteroid-reprocessing",
    icon: "__space-age__/graphics/icons/metallic-asteroid-reprocessing.png",
    category: "crushing",
    subgroup: "space-crushing",
    order: "b-b-a",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "metallic-asteroid-chunk",
        amount: 1,
      },
    ],
    energy_required: 2,
    results: [
      {
        type: "item",
        name: "metallic-asteroid-chunk",
        amount: 1,
        probability: 0.4,
      },

      {
        type: "item",
        name: "carbonic-asteroid-chunk",
        amount: 1,
        probability: 0.2,
      },

      {
        type: "item",
        name: "oxide-asteroid-chunk",
        amount: 1,
        probability: 0.2,
      },
    ],
    allow_productivity: false,
    allow_decomposition: false,
  },
  "carbonic-asteroid-reprocessing": {
    type: "recipe",
    name: "carbonic-asteroid-reprocessing",
    icon: "__space-age__/graphics/icons/carbonic-asteroid-reprocessing.png",
    category: "crushing",
    subgroup: "space-crushing",
    order: "b-b-b",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "carbonic-asteroid-chunk",
        amount: 1,
      },
    ],
    energy_required: 2,
    results: [
      {
        type: "item",
        name: "carbonic-asteroid-chunk",
        amount: 1,
        probability: 0.4,
      },

      {
        type: "item",
        name: "metallic-asteroid-chunk",
        amount: 1,
        probability: 0.2,
      },

      {
        type: "item",
        name: "oxide-asteroid-chunk",
        amount: 1,
        probability: 0.2,
      },
    ],
    allow_productivity: false,
    allow_decomposition: false,
  },
  "oxide-asteroid-reprocessing": {
    type: "recipe",
    name: "oxide-asteroid-reprocessing",
    icon: "__space-age__/graphics/icons/oxide-asteroid-reprocessing.png",
    category: "crushing",
    subgroup: "space-crushing",
    order: "b-b-c",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "oxide-asteroid-chunk",
        amount: 1,
      },
    ],
    energy_required: 1,
    results: [
      {
        type: "item",
        name: "oxide-asteroid-chunk",
        amount: 1,
        probability: 0.4,
      },

      {
        type: "item",
        name: "metallic-asteroid-chunk",
        amount: 1,
        probability: 0.2,
      },

      {
        type: "item",
        name: "carbonic-asteroid-chunk",
        amount: 1,
        probability: 0.2,
      },
    ],
    allow_productivity: false,
    allow_decomposition: false,
  },
  "thruster-fuel": {
    type: "recipe",
    name: "thruster-fuel",
    category: "chemistry",
    subgroup: "space-processing",
    order: "a[thruster-fuel]",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "carbon",
        amount: 2,
      },

      {
        type: "fluid",
        name: "water",
        amount: 10,
      },
    ],
    surface_conditions: [
      {
        property: "gravity",
        min: 0,
        max: 0,
      },
    ],
    energy_required: 2,
    results: [
      {
        type: "fluid",
        name: "thruster-fuel",
        amount: 75,
      },
    ],
    allow_productivity: true,
    show_amount_in_title: false,
    always_show_products: true,
    crafting_machine_tint: {
      primary: {
        r: 0.88100000000000004973799150320701301097869873046875,
        g: 0.1,
        b: 0,
        a: 0.5019999999999999573674358543939888477325439453125,
      },
      secondary: {
        r: 0.9300000000000000710542735760100185871124267578125,
        g: 0.76699999999999999289457264239899814128875732421875,
        b: 0.604999999999999982236431605997495353221893310546875,
        a: 0.5019999999999999573674358543939888477325439453125,
      },
      tertiary: {
        r: 0.8730000000000000426325641456060111522674560546875,
        g: 0.64900000000000002131628207280300557613372802734375,
        b: 0.54199999999999999289457264239899814128875732421875,
        a: 0.5019999999999999573674358543939888477325439453125,
      },
      quaternary: {
        r: 0.629000000000000003552713678800500929355621337890625,
        g: 0.1739999999999999769073610877967439591884613037109375,
        b: 0,
        a: 0.5019999999999999573674358543939888477325439453125,
      },
    },
  },
  "thruster-oxidizer": {
    type: "recipe",
    name: "thruster-oxidizer",
    category: "chemistry",
    subgroup: "space-processing",
    order: "c[thruster-oxidizer]",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "iron-ore",
        amount: 2,
      },

      {
        type: "fluid",
        name: "water",
        amount: 10,
      },
    ],
    surface_conditions: [
      {
        property: "gravity",
        min: 0,
        max: 0,
      },
    ],
    energy_required: 2,
    results: [
      {
        type: "fluid",
        name: "thruster-oxidizer",
        amount: 75,
      },
    ],
    allow_productivity: true,
    show_amount_in_title: false,
    always_show_products: true,
    crafting_machine_tint: {
      primary: {
        r: 0.082000000000000010658141036401502788066864013671875,
        g: 0.395999999999999996447286321199499070644378662109375,
        b: 0.79199999999999999289457264239899814128875732421875,
        a: 0.5019999999999999573674358543939888477325439453125,
      },
      secondary: {
        r: 0.1610000000000000142108547152020037174224853515625,
        g: 0.553000000000000024868995751603506505489349365234375,
        b: 0.796000000000000085265128291212022304534912109375,
        a: 0.5019999999999999573674358543939888477325439453125,
      },
      tertiary: {
        r: 0.0589999999999999946709294817992486059665679931640625,
        g: 0.37599999999999997868371792719699442386627197265625,
        b: 0.545000000000000017763568394002504646778106689453125,
        a: 0.5019999999999999573674358543939888477325439453125,
      },
      quaternary: {
        r: 0.68300000000000000710542735760100185871124267578125,
        g: 0.91500000000000003552713678800500929355621337890625,
        b: 1,
        a: 0.5019999999999999573674358543939888477325439453125,
      },
    },
  },
  "ice-melting": {
    type: "recipe",
    name: "ice-melting",
    icon: "__space-age__/graphics/icons/fluid/ice-melting.png",
    category: "chemistry",
    subgroup: "fluid-recipes",
    order: "d[other-chemistry]-c[ice-melting]",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "ice",
        amount: 1,
      },
    ],
    energy_required: 1,
    results: [
      {
        type: "fluid",
        name: "water",
        amount: 20,
      },
    ],
    allow_productivity: true,
    allow_decomposition: false,
    crafting_machine_tint: {
      primary: {
        r: 0.43300000000000000710542735760100185871124267578125,
        g: 0.7730000000000000426325641456060111522674560546875,
        b: 1,
        a: 1,
      },
      secondary: {
        r: 0.5910000000000000142108547152020037174224853515625,
        g: 0.85600000000000004973799150320701301097869873046875,
        b: 1,
        a: 1,
      },
      tertiary: {
        r: 0.3810000000000000142108547152020037174224853515625,
        g: 0.428000000000000024868995751603506505489349365234375,
        b: 0.436000000000000031974423109204508364200592041015625,
        a: 0.5019999999999999573674358543939888477325439453125,
      },
      quaternary: {
        r: 0.49900000000000002131628207280300557613372802734375,
        g: 0.79700000000000006394884621840901672840118408203125,
        b: 0.793000000000000060396132539608515799045562744140625,
        a: 0.73300000000000000710542735760100185871124267578125,
      },
    },
    show_amount_in_title: false,
  },
  "advanced-thruster-fuel": {
    type: "recipe",
    name: "advanced-thruster-fuel",
    icon: "__space-age__/graphics/icons/advanced-thruster-fuel.png",
    localised_name: ["recipe-name.advanced-thruster-fuel"],
    category: "chemistry",
    subgroup: "space-processing",
    order: "b[advanced-thruster-fuel]",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "carbon",
        amount: 2,
      },

      {
        type: "item",
        name: "calcite",
        amount: 1,
      },

      {
        type: "fluid",
        name: "water",
        amount: 100,
      },
    ],
    surface_conditions: [
      {
        property: "gravity",
        min: 0,
        max: 0,
      },
    ],
    energy_required: 10,
    results: [
      {
        type: "fluid",
        name: "thruster-fuel",
        amount: 1500,
      },
    ],
    allow_productivity: true,
    always_show_products: true,
    show_amount_in_title: false,
    allow_decomposition: false,
    crafting_machine_tint: {
      primary: {
        r: 0.88100000000000004973799150320701301097869873046875,
        g: 0.1,
        b: 0,
        a: 0.5019999999999999573674358543939888477325439453125,
      },
      secondary: {
        r: 0.9300000000000000710542735760100185871124267578125,
        g: 0.76699999999999999289457264239899814128875732421875,
        b: 0.604999999999999982236431605997495353221893310546875,
        a: 0.5019999999999999573674358543939888477325439453125,
      },
      tertiary: {
        r: 0.8730000000000000426325641456060111522674560546875,
        g: 0.64900000000000002131628207280300557613372802734375,
        b: 0.54199999999999999289457264239899814128875732421875,
        a: 0.5019999999999999573674358543939888477325439453125,
      },
      quaternary: {
        r: 0.629000000000000003552713678800500929355621337890625,
        g: 0.1739999999999999769073610877967439591884613037109375,
        b: 0,
        a: 0.5019999999999999573674358543939888477325439453125,
      },
    },
  },
  "advanced-thruster-oxidizer": {
    type: "recipe",
    name: "advanced-thruster-oxidizer",
    icon: "__space-age__/graphics/icons/advanced-thruster-oxidizer.png",
    localised_name: ["recipe-name.advanced-thruster-oxidizer"],
    category: "chemistry",
    subgroup: "space-processing",
    order: "d[advanced-thruster-oxydizer]",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "iron-ore",
        amount: 2,
      },

      {
        type: "item",
        name: "calcite",
        amount: 1,
      },

      {
        type: "fluid",
        name: "water",
        amount: 100,
      },
    ],
    surface_conditions: [
      {
        property: "gravity",
        min: 0,
        max: 0,
      },
    ],
    energy_required: 10,
    results: [
      {
        type: "fluid",
        name: "thruster-oxidizer",
        amount: 1500,
      },
    ],
    allow_productivity: true,
    always_show_products: true,
    show_amount_in_title: false,
    allow_decomposition: false,
    crafting_machine_tint: {
      primary: {
        r: 0.082000000000000010658141036401502788066864013671875,
        g: 0.395999999999999996447286321199499070644378662109375,
        b: 0.79199999999999999289457264239899814128875732421875,
        a: 0.5019999999999999573674358543939888477325439453125,
      },
      secondary: {
        r: 0.1610000000000000142108547152020037174224853515625,
        g: 0.553000000000000024868995751603506505489349365234375,
        b: 0.796000000000000085265128291212022304534912109375,
        a: 0.5019999999999999573674358543939888477325439453125,
      },
      tertiary: {
        r: 0.0589999999999999946709294817992486059665679931640625,
        g: 0.37599999999999997868371792719699442386627197265625,
        b: 0.545000000000000017763568394002504646778106689453125,
        a: 0.5019999999999999573674358543939888477325439453125,
      },
      quaternary: {
        r: 0.68300000000000000710542735760100185871124267578125,
        g: 0.91500000000000003552713678800500929355621337890625,
        b: 1,
        a: 0.5019999999999999573674358543939888477325439453125,
      },
    },
  },
  "acid-neutralisation": {
    type: "recipe",
    name: "acid-neutralisation",
    icon: "__space-age__/graphics/icons/fluid/acid-neutralisation.png",
    category: "chemistry-or-cryogenics",
    subgroup: "fluid-recipes",
    order: "d[other-chemistry]-a[acid-neutralisation]",
    enabled: false,
    surface_conditions: [
      {
        property: "pressure",
        min: 4000,
        max: 4000,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "calcite",
        amount: 1,
      },

      {
        type: "fluid",
        name: "sulfuric-acid",
        amount: 1000,
      },
    ],
    energy_required: 5,
    results: [
      {
        type: "fluid",
        name: "steam",
        amount: 10000,
        temperature: 500,
      },
    ],
    allow_productivity: false,
    always_show_products: true,
    show_amount_in_title: false,
    allow_decomposition: false,
    crafting_machine_tint: {
      primary: {
        r: 1,
        g: 0.9120000000000000994759830064140260219573974609375,
        b: 0.035999999999999996447286321199499070644378662109375,
        a: 1,
      },
      secondary: {
        r: 0.706999999999999939603867460391484200954437255859375,
        g: 0.79700000000000006394884621840901672840118408203125,
        b: 0.3350000000000000088817841970012523233890533447265625,
        a: 1,
      },
      tertiary: {
        r: 0.68100000000000004973799150320701301097869873046875,
        g: 0.63499999999999996447286321199499070644378662109375,
        b: 0.48599999999999994315658113919198513031005859375,
        a: 1,
      },
      quaternary: {
        r: 1,
        g: 0.80400000000000009237055564881302416324615478515625,
        b: 0,
        a: 1,
      },
    },
  },
  "steam-condensation": {
    type: "recipe",
    name: "steam-condensation",
    icon: "__space-age__/graphics/icons/fluid/steam-condensation.png",
    localised_name: ["recipe-name.steam-condensation"],
    category: "chemistry-or-cryogenics",
    subgroup: "fluid-recipes",
    order: "d[other-chemistry]-b[steam-condensation]",
    enabled: false,
    ingredients: [
      {
        type: "fluid",
        name: "steam",
        amount: 1000,
      },
    ],
    energy_required: 1,
    results: [
      {
        type: "fluid",
        name: "water",
        amount: 90,
      },
    ],
    always_show_products: true,
    show_amount_in_title: false,
    allow_decomposition: false,
    allow_quality: false,
    crafting_machine_tint: {
      primary: {
        r: 0.4089999999999999857891452847979962825775146484375,
        g: 0.69399999999999995026200849679298698902130126953125,
        b: 0.8949999999999999289457264239899814128875732421875,
        a: 1,
      },
      secondary: {
        r: 1,
        g: 1,
        b: 1,
        a: 1,
      },
      tertiary: {
        r: 0.54000000000000003552713678800500929355621337890625,
        g: 0.520000000000000017763568394002504646778106689453125,
        b: 0.520000000000000017763568394002504646778106689453125,
        a: 1,
      },
      quaternary: {
        r: 0.75,
        g: 0.75,
        b: 0.75,
        a: 1,
      },
    },
  },
  carbon: {
    type: "recipe",
    name: "carbon",
    icon: "__space-age__/graphics/icons/carbon.png",
    category: "chemistry-or-cryogenics",
    subgroup: "raw-material",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "coal",
        amount: 2,
      },

      {
        type: "fluid",
        name: "sulfuric-acid",
        amount: 20,
      },
    ],
    energy_required: 1,
    results: [
      {
        type: "item",
        name: "carbon",
        amount: 1,
      },
    ],
    allow_productivity: true,
    allow_decomposition: false,
    crafting_machine_tint: {
      primary: {
        r: 0,
        g: 0,
        b: 0,
        a: 1,
      },
      secondary: {
        r: 0.292999999999999971578290569595992565155029296875,
        g: 0.292999999999999971578290569595992565155029296875,
        b: 0.292999999999999971578290569595992565155029296875,
        a: 1,
      },
      tertiary: {
        r: 0.19900000000000002131628207280300557613372802734375,
        g: 0.179000000000000003552713678800500929355621337890625,
        b: 0.0700000000000000088817841970012523233890533447265625,
        a: 1,
      },
      quaternary: {
        r: 0.292999999999999971578290569595992565155029296875,
        g: 0.292999999999999971578290569595992565155029296875,
        b: 0.292999999999999971578290569595992565155029296875,
        a: 1,
      },
    },
  },
  "tungsten-carbide": {
    type: "recipe",
    name: "tungsten-carbide",
    category: "crafting-with-fluid",
    subgroup: "vulcanus-processes",
    order: "c[tungsten]-b[tungsten-carbide]",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "tungsten-ore",
        amount: 2,
      },

      {
        type: "fluid",
        name: "sulfuric-acid",
        amount: 10,
      },

      {
        type: "item",
        name: "carbon",
        amount: 1,
      },
    ],
    energy_required: 1,
    results: [
      {
        type: "item",
        name: "tungsten-carbide",
        amount: 1,
      },
    ],
    allow_productivity: true,
  },
  foundry: {
    type: "recipe",
    name: "foundry",
    category: "metallurgy-or-assembling",
    surface_conditions: [
      {
        property: "pressure",
        min: 4000,
        max: 4000,
      },
    ],
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "tungsten-carbide",
        amount: 50,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 50,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 30,
      },

      {
        type: "item",
        name: "refined-concrete",
        amount: 20,
      },

      {
        type: "fluid",
        name: "lubricant",
        amount: 20,
      },
    ],
    energy_required: 10,
    results: [
      {
        type: "item",
        name: "foundry",
        amount: 1,
      },
    ],
  },
  "molten-iron-from-lava": {
    type: "recipe",
    name: "molten-iron-from-lava",
    icon: "__space-age__/graphics/icons/fluid/molten-iron-from-lava.png",
    category: "metallurgy",
    subgroup: "vulcanus-processes",
    order: "a[melting]-a[lava-a]",
    enabled: false,
    ingredients: [
      {
        type: "fluid",
        name: "lava",
        amount: 500,
      },

      {
        type: "item",
        name: "calcite",
        amount: 1,
      },
    ],
    energy_required: 16,
    results: [
      {
        type: "fluid",
        name: "molten-iron",
        amount: 250,
      },

      {
        type: "item",
        name: "stone",
        amount: 10,
      },
    ],
    allow_productivity: true,
  },
  "molten-copper-from-lava": {
    type: "recipe",
    name: "molten-copper-from-lava",
    icon: "__space-age__/graphics/icons/fluid/molten-copper-from-lava.png",
    category: "metallurgy",
    subgroup: "vulcanus-processes",
    order: "a[melting]-a[lava-b]",
    enabled: false,
    ingredients: [
      {
        type: "fluid",
        name: "lava",
        amount: 500,
      },

      {
        type: "item",
        name: "calcite",
        amount: 1,
      },
    ],
    energy_required: 16,
    results: [
      {
        type: "fluid",
        name: "molten-copper",
        amount: 250,
      },

      {
        type: "item",
        name: "stone",
        amount: 15,
      },
    ],
    allow_productivity: true,
  },
  "molten-iron": {
    type: "recipe",
    name: "molten-iron",
    category: "metallurgy",
    subgroup: "vulcanus-processes",
    order: "a[melting]-b[molten-iron]",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "iron-ore",
        amount: 50,
      },

      {
        type: "item",
        name: "calcite",
        amount: 1,
      },
    ],
    energy_required: 32,
    results: [
      {
        type: "fluid",
        name: "molten-iron",
        amount: 500,
      },
    ],
    allow_productivity: true,
    hide_from_signal_gui: false,
    main_product: "molten-iron",
  },
  "molten-copper": {
    type: "recipe",
    name: "molten-copper",
    category: "metallurgy",
    subgroup: "vulcanus-processes",
    order: "a[melting]-c[molten-copper]",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "copper-ore",
        amount: 50,
      },

      {
        type: "item",
        name: "calcite",
        amount: 1,
      },
    ],
    energy_required: 32,
    results: [
      {
        type: "fluid",
        name: "molten-copper",
        amount: 500,
      },
    ],
    hide_from_signal_gui: false,
    allow_productivity: true,
    main_product: "molten-copper",
  },
  "casting-iron": {
    type: "recipe",
    name: "casting-iron",
    category: "metallurgy",
    subgroup: "vulcanus-processes",
    order: "b[casting]-a[casting-iron]",
    icon: "__space-age__/graphics/icons/casting-iron.png",
    enabled: false,
    ingredients: [
      {
        type: "fluid",
        name: "molten-iron",
        amount: 20,
        fluidbox_multiplier: 10,
      },
    ],
    energy_required: 3.20000000000000017763568394002504646778106689453125,
    allow_decomposition: false,
    results: [
      {
        type: "item",
        name: "iron-plate",
        amount: 2,
      },
    ],
    allow_productivity: true,
  },
  "casting-steel": {
    type: "recipe",
    name: "casting-steel",
    category: "metallurgy",
    subgroup: "vulcanus-processes",
    order: "b[casting]-c[casting-steel]",
    icon: "__space-age__/graphics/icons/casting-steel.png",
    enabled: false,
    ingredients: [
      {
        type: "fluid",
        name: "molten-iron",
        amount: 30,
        fluidbox_multiplier: 10,
      },
    ],
    energy_required: 3.20000000000000017763568394002504646778106689453125,
    allow_decomposition: false,
    results: [
      {
        type: "item",
        name: "steel-plate",
        amount: 1,
      },
    ],
    allow_productivity: true,
  },
  "casting-copper": {
    type: "recipe",
    name: "casting-copper",
    category: "metallurgy",
    subgroup: "vulcanus-processes",
    order: "b[casting]-b[casting-copper]",
    icon: "__space-age__/graphics/icons/casting-copper.png",
    enabled: false,
    ingredients: [
      {
        type: "fluid",
        name: "molten-copper",
        amount: 20,
        fluidbox_multiplier: 10,
      },
    ],
    energy_required: 3.20000000000000017763568394002504646778106689453125,
    allow_decomposition: false,
    results: [
      {
        type: "item",
        name: "copper-plate",
        amount: 2,
      },
    ],
    allow_productivity: true,
  },
  "casting-iron-gear-wheel": {
    type: "recipe",
    name: "casting-iron-gear-wheel",
    category: "metallurgy",
    subgroup: "vulcanus-processes",
    order: "b[casting]-d[casting-iron-gear-wheel]",
    icon: "__space-age__/graphics/icons/casting-iron-gear-wheel.png",
    enabled: false,
    ingredients: [
      {
        type: "fluid",
        name: "molten-iron",
        amount: 10,
        fluidbox_multiplier: 10,
      },
    ],
    energy_required: 1,
    allow_decomposition: false,
    results: [
      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 1,
      },
    ],
    allow_productivity: true,
  },
  "casting-iron-stick": {
    type: "recipe",
    name: "casting-iron-stick",
    category: "metallurgy",
    subgroup: "vulcanus-processes",
    order: "b[casting]-e[casting-iron-stick]",
    icon: "__space-age__/graphics/icons/casting-iron-stick.png",
    enabled: false,
    ingredients: [
      {
        type: "fluid",
        name: "molten-iron",
        amount: 20,
        fluidbox_multiplier: 10,
      },
    ],
    energy_required: 1,
    allow_decomposition: false,
    results: [
      {
        type: "item",
        name: "iron-stick",
        amount: 4,
      },
    ],
    allow_productivity: true,
  },
  "casting-pipe": {
    type: "recipe",
    name: "casting-pipe",
    category: "metallurgy",
    subgroup: "energy-pipe-distribution",
    order: "b[casting]-f[casting-pipe]",
    icon: "__space-age__/graphics/icons/casting-pipe.png",
    enabled: false,
    ingredients: [
      {
        type: "fluid",
        name: "molten-iron",
        amount: 10,
        fluidbox_multiplier: 10,
      },
    ],
    energy_required: 1,
    allow_decomposition: false,
    results: [
      {
        type: "item",
        name: "pipe",
        amount: 1,
      },
    ],
    allow_productivity: false,
  },
  "casting-pipe-to-ground": {
    type: "recipe",
    name: "casting-pipe-to-ground",
    category: "metallurgy",
    subgroup: "energy-pipe-distribution",
    order: "b[casting]-g[casting-pipe-to-ground]",
    icon: "__space-age__/graphics/icons/casting-pipe-to-ground.png",
    enabled: false,
    ingredients: [
      {
        type: "fluid",
        name: "molten-iron",
        amount: 50,
        fluidbox_multiplier: 10,
      },

      {
        type: "item",
        name: "pipe",
        amount: 10,
      },
    ],
    energy_required: 1,
    allow_decomposition: false,
    results: [
      {
        type: "item",
        name: "pipe-to-ground",
        amount: 2,
      },
    ],
    allow_productivity: false,
  },
  "casting-low-density-structure": {
    type: "recipe",
    name: "casting-low-density-structure",
    category: "metallurgy",
    subgroup: "vulcanus-processes",
    order: "b[casting]-f[low-density-structure]",
    icon: "__space-age__/graphics/icons/casting-low-density-structure.png",
    enabled: false,
    ingredients: [
      {
        type: "fluid",
        name: "molten-iron",
        amount: 80,
      },

      {
        type: "fluid",
        name: "molten-copper",
        amount: 250,
      },

      {
        type: "item",
        name: "plastic-bar",
        amount: 5,
      },
    ],
    energy_required: 15,
    allow_decomposition: false,
    results: [
      {
        type: "item",
        name: "low-density-structure",
        amount: 1,
      },
    ],
    allow_productivity: true,
  },
  "concrete-from-molten-iron": {
    type: "recipe",
    name: "concrete-from-molten-iron",
    category: "metallurgy",
    subgroup: "vulcanus-processes",
    order: "b[casting]-g[concrete]",
    icon: "__space-age__/graphics/icons/concrete-from-molten-iron.png",
    enabled: false,
    ingredients: [
      {
        type: "fluid",
        name: "molten-iron",
        amount: 20,
      },

      {
        type: "fluid",
        name: "water",
        amount: 100,
      },

      {
        type: "item",
        name: "stone-brick",
        amount: 5,
      },
    ],
    energy_required: 10,
    allow_decomposition: false,
    results: [
      {
        type: "item",
        name: "concrete",
        amount: 10,
      },
    ],
    allow_productivity: true,
  },
  "casting-copper-cable": {
    type: "recipe",
    name: "casting-copper-cable",
    category: "metallurgy",
    subgroup: "vulcanus-processes",
    order: "b[casting]-h[casting-copper-cable]",
    icon: "__space-age__/graphics/icons/casting-copper-cable.png",
    enabled: false,
    ingredients: [
      {
        type: "fluid",
        name: "molten-copper",
        amount: 5,
        fluidbox_multiplier: 5,
      },
    ],
    energy_required: 1,
    allow_decomposition: false,
    results: [
      {
        type: "item",
        name: "copper-cable",
        amount: 2,
      },
    ],
    allow_productivity: true,
  },
  "tungsten-plate": {
    type: "recipe",
    name: "tungsten-plate",
    category: "metallurgy",
    subgroup: "vulcanus-processes",
    order: "c[tungsten]-c[tungsten-plate]",
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "tungsten-ore",
        amount: 4,
      },

      {
        type: "fluid",
        name: "molten-iron",
        amount: 10,
      },
    ],
    energy_required: 10,
    results: [
      {
        type: "item",
        name: "tungsten-plate",
        amount: 1,
      },
    ],
    allow_productivity: true,
  },
  "turbo-transport-belt": {
    type: "recipe",
    name: "turbo-transport-belt",
    category: "metallurgy",
    surface_conditions: [
      {
        property: "pressure",
        min: 4000,
        max: 4000,
      },
    ],
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "tungsten-plate",
        amount: 5,
      },

      {
        type: "item",
        name: "express-transport-belt",
        amount: 1,
      },

      {
        type: "fluid",
        name: "lubricant",
        amount: 20,
      },
    ],
    results: [
      {
        type: "item",
        name: "turbo-transport-belt",
        amount: 1,
      },
    ],
  },
  "turbo-underground-belt": {
    type: "recipe",
    name: "turbo-underground-belt",
    energy_required: 2,
    category: "metallurgy",
    surface_conditions: [
      {
        property: "pressure",
        min: 4000,
        max: 4000,
      },
    ],
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "tungsten-plate",
        amount: 40,
      },

      {
        type: "item",
        name: "express-underground-belt",
        amount: 2,
      },

      {
        type: "fluid",
        name: "lubricant",
        amount: 40,
      },
    ],
    results: [
      {
        type: "item",
        name: "turbo-underground-belt",
        amount: 2,
      },
    ],
  },
  "turbo-splitter": {
    type: "recipe",
    name: "turbo-splitter",
    category: "metallurgy",
    surface_conditions: [
      {
        property: "pressure",
        min: 4000,
        max: 4000,
      },
    ],
    enabled: false,
    energy_required: 2,
    ingredients: [
      {
        type: "item",
        name: "express-splitter",
        amount: 1,
      },

      {
        type: "item",
        name: "tungsten-plate",
        amount: 15,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 2,
      },

      {
        type: "fluid",
        name: "lubricant",
        amount: 80,
      },
    ],
    results: [
      {
        type: "item",
        name: "turbo-splitter",
        amount: 1,
      },
    ],
  },
  "turbo-loader": {
    type: "recipe",
    name: "turbo-loader",
    enabled: false,
    hidden: true,
    energy_required: 20,
    ingredients: [
      {
        type: "item",
        name: "turbo-transport-belt",
        amount: 5,
      },

      {
        type: "item",
        name: "express-loader",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "turbo-loader",
        amount: 1,
      },
    ],
  },
  "big-mining-drill": {
    type: "recipe",
    name: "big-mining-drill",
    category: "metallurgy",
    surface_conditions: [
      {
        property: "pressure",
        min: 4000,
        max: 4000,
      },
    ],
    enabled: false,
    energy_required: 30,
    ingredients: [
      {
        type: "item",
        name: "electric-mining-drill",
        amount: 1,
      },

      {
        type: "fluid",
        name: "molten-iron",
        amount: 200,
      },

      {
        type: "item",
        name: "tungsten-carbide",
        amount: 20,
      },

      {
        type: "item",
        name: "electric-engine-unit",
        amount: 10,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "big-mining-drill",
        amount: 1,
      },
    ],
  },
  "mech-armor": {
    type: "recipe",
    name: "mech-armor",
    enabled: false,
    energy_required: 60,
    ingredients: [
      {
        type: "item",
        name: "power-armor-mk2",
        amount: 1,
      },

      {
        type: "item",
        name: "holmium-plate",
        amount: 200,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 100,
      },

      {
        type: "item",
        name: "superconductor",
        amount: 50,
      },

      {
        type: "item",
        name: "supercapacitor",
        amount: 50,
      },
    ],
    results: [
      {
        type: "item",
        name: "mech-armor",
        amount: 1,
      },
    ],
  },
  railgun: {
    type: "recipe",
    name: "railgun",
    category: "cryogenics",
    enabled: false,
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "tungsten-plate",
        amount: 10,
      },

      {
        type: "item",
        name: "superconductor",
        amount: 10,
      },

      {
        type: "item",
        name: "quantum-processor",
        amount: 20,
      },

      {
        type: "fluid",
        name: "fluoroketone-cold",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "railgun",
        amount: 1,
      },
    ],
    crafting_machine_tint: {
      primary: {
        r: 0.504000000000000003552713678800500929355621337890625,
        g: 0.4480000000000000426325641456060111522674560546875,
        b: 0.320999999999999996447286321199499070644378662109375,
        a: 1,
      },
      secondary: {
        r: 0.312000000000000010658141036401502788066864013671875,
        g: 0.519000000000000039079850466805510222911834716796875,
        b: 0.60099999999999997868371792719699442386627197265625,
        a: 1,
      },
      tertiary: {
        r: 0.402000000000000046185277824406512081623077392578125,
        g: 0.55800000000000000710542735760100185871124267578125,
        b: 0.8800000000000000710542735760100185871124267578125,
        a: 1,
      },
      quaternary: {
        r: 0.245999999999999996447286321199499070644378662109375,
        g: 0.245999999999999996447286321199499070644378662109375,
        b: 0.245999999999999996447286321199499070644378662109375,
        a: 1,
      },
    },
  },
  "railgun-turret": {
    type: "recipe",
    name: "railgun-turret",
    category: "cryogenics",
    enabled: false,
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "quantum-processor",
        amount: 100,
      },

      {
        type: "item",
        name: "tungsten-plate",
        amount: 30,
      },

      {
        type: "item",
        name: "superconductor",
        amount: 50,
      },

      {
        type: "item",
        name: "carbon-fiber",
        amount: 20,
      },

      {
        type: "fluid",
        name: "fluoroketone-cold",
        amount: 100,
      },
    ],
    results: [
      {
        type: "item",
        name: "railgun-turret",
        amount: 1,
      },
    ],
    crafting_machine_tint: {
      primary: {
        r: 0.504000000000000003552713678800500929355621337890625,
        g: 0.4480000000000000426325641456060111522674560546875,
        b: 0.320999999999999996447286321199499070644378662109375,
        a: 1,
      },
      secondary: {
        r: 0.312000000000000010658141036401502788066864013671875,
        g: 0.519000000000000039079850466805510222911834716796875,
        b: 0.60099999999999997868371792719699442386627197265625,
        a: 1,
      },
      tertiary: {
        r: 0.402000000000000046185277824406512081623077392578125,
        g: 0.55800000000000000710542735760100185871124267578125,
        b: 0.8800000000000000710542735760100185871124267578125,
        a: 1,
      },
      quaternary: {
        r: 0.245999999999999996447286321199499070644378662109375,
        g: 0.245999999999999996447286321199499070644378662109375,
        b: 0.245999999999999996447286321199499070644378662109375,
        a: 1,
      },
    },
  },
  "railgun-ammo": {
    type: "recipe",
    name: "railgun-ammo",
    enabled: false,
    energy_required: 25,
    ingredients: [
      {
        type: "item",
        name: "steel-plate",
        amount: 5,
      },

      {
        type: "item",
        name: "copper-cable",
        amount: 10,
      },

      {
        type: "item",
        name: "explosives",
        amount: 2,
      },
    ],
    results: [
      {
        type: "item",
        name: "railgun-ammo",
        amount: 1,
      },
    ],
  },
  "agricultural-tower": {
    type: "recipe",
    name: "agricultural-tower",
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "steel-plate",
        amount: 10,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 3,
      },

      {
        type: "item",
        name: "spoilage",
        amount: 20,
      },

      {
        type: "item",
        name: "landfill",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "agricultural-tower",
        amount: 1,
      },
    ],
    enabled: false,
  },
  biochamber: {
    type: "recipe",
    name: "biochamber",
    category: "organic-or-assembling",
    surface_conditions: [
      {
        property: "pressure",
        min: 2000,
        max: 2000,
      },
    ],
    energy_required: 20,
    ingredients: [
      {
        type: "item",
        name: "nutrients",
        amount: 5,
      },

      {
        type: "item",
        name: "pentapod-egg",
        amount: 1,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 20,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 5,
      },

      {
        type: "item",
        name: "landfill",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "biochamber",
        amount: 1,
      },
    ],
    enabled: false,
  },
  "burnt-spoilage": {
    type: "recipe",
    name: "burnt-spoilage",
    icon: "__space-age__/graphics/icons/burnt-spoilage.png",
    category: "organic",
    subgroup: "agriculture-products",
    order: "a[organic-products]-h[burnt-spoilage]",
    energy_required: 12,
    ingredients: [
      {
        type: "item",
        name: "spoilage",
        amount: 6,
      },
    ],
    results: [
      {
        type: "item",
        name: "carbon",
        amount: 1,
      },
    ],
    allow_productivity: true,
    enabled: false,
    crafting_machine_tint: {
      primary: {
        r: 0.13400000000000000799360577730112709105014801025390625,
        g: 0.009,
        b: 0.009,
        a: 1,
      },
      secondary: {
        r: 0.3770000000000000017763568394002504646778106689453125,
        g: 0.254999999999999982236431605997495353221893310546875,
        b: 0.254999999999999982236431605997495353221893310546875,
        a: 1,
      },
    },
  },
  "coal-synthesis": {
    type: "recipe",
    name: "coal-synthesis",
    category: "chemistry",
    energy_required: 2,
    ingredients: [
      {
        type: "item",
        name: "carbon",
        amount: 5,
      },

      {
        type: "item",
        name: "sulfur",
        amount: 1,
      },

      {
        type: "fluid",
        name: "water",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "coal",
        amount: 1,
      },
    ],
    allow_productivity: true,
    enabled: false,
    icon: "__space-age__/graphics/icons/coal-synthesis.png",
    subgroup: "raw-material",
    order: "m",
    allow_decomposition: false,
    crafting_machine_tint: {
      primary: {
        r: 0.2069999999999999840127884453977458178997039794921875,
        g: 0.1770000000000000017763568394002504646778106689453125,
        b: 0.1770000000000000017763568394002504646778106689453125,
        a: 1,
      },
      secondary: {
        r: 0.30099999999999997868371792719699442386627197265625,
        g: 0.2760000000000000230926389122032560408115386962890625,
        b: 0.195999999999999996447286321199499070644378662109375,
        a: 1,
      },
      tertiary: {
        r: 0.79000000000000003552713678800500929355621337890625,
        g: 0.721999999999999975131004248396493494510650634765625,
        b: 0.47799999999999993605115378159098327159881591796875,
        a: 1,
      },
      quaternary: {
        r: 0.55400000000000009237055564881302416324615478515625,
        g: 0.54000000000000003552713678800500929355621337890625,
        b: 0.54000000000000003552713678800500929355621337890625,
        a: 1,
      },
    },
  },
  "capture-robot-rocket": {
    type: "recipe",
    name: "capture-robot-rocket",
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "flying-robot-frame",
        amount: 1,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 2,
      },

      {
        type: "item",
        name: "bioflux",
        amount: 20,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 2,
      },
    ],
    results: [
      {
        type: "item",
        name: "capture-robot-rocket",
        amount: 1,
      },
    ],
    enabled: false,
  },
  biolab: {
    type: "recipe",
    name: "biolab",
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "lab",
        amount: 1,
      },

      {
        type: "item",
        name: "biter-egg",
        amount: 10,
      },

      {
        type: "item",
        name: "refined-concrete",
        amount: 25,
      },

      {
        type: "item",
        name: "capture-robot-rocket",
        amount: 2,
      },

      {
        type: "item",
        name: "uranium-235",
        amount: 3,
      },
    ],
    results: [
      {
        type: "item",
        name: "biolab",
        amount: 1,
      },
    ],
    enabled: false,
  },
  "captive-biter-spawner": {
    type: "recipe",
    name: "captive-biter-spawner",
    category: "cryogenics",
    energy_required: 10,
    enabled: false,
    result_is_always_fresh: true,
    ingredients: [
      {
        type: "item",
        name: "biter-egg",
        amount: 10,
      },

      {
        type: "item",
        name: "capture-robot-rocket",
        amount: 1,
      },

      {
        type: "item",
        name: "uranium-235",
        amount: 15,
      },

      {
        type: "fluid",
        name: "fluoroketone-cold",
        amount: 100,
      },
    ],
    results: [
      {
        type: "item",
        name: "captive-biter-spawner",
        amount: 1,
      },
    ],
  },
  "biter-egg": {
    type: "recipe",
    name: "biter-egg",
    icon: "__space-age__/graphics/icons/biter-egg.png",
    category: "captive-spawner-process",
    order: "c[eggs]-a[biter-egg]",
    hide_from_player_crafting: true,
    preserve_products_in_machine_output: true,
    energy_required: 10,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "biter-egg",
        amount: 5,
      },
    ],
    enabled: false,
  },
  "fish-breeding": {
    type: "recipe",
    name: "fish-breeding",
    icon: "__space-age__/graphics/icons/fish-breeding.png",
    category: "organic-or-chemistry",
    subgroup: "nauvis-agriculture",
    order: "b[nauvis-agriculture]-b[fish-breeding]",
    result_is_always_fresh: true,
    energy_required: 6,
    enabled: false,
    surface_conditions: [
      {
        property: "pressure",
        min: 1000,
        max: 1000,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "raw-fish",
        amount: 2,
        ignored_by_stats: 2,
      },

      {
        type: "item",
        name: "nutrients",
        amount: 100,
      },

      {
        type: "fluid",
        name: "water",
        amount: 100,
      },
    ],
    results: [
      {
        type: "item",
        name: "raw-fish",
        amount: 3,
        ignored_by_stats: 2,
      },
    ],
    allow_productivity: false,
    allow_quality: false,
    crafting_machine_tint: {
      primary: [0, 0, 1, 1],
      secondary: [0, 0, 1, 1],
    },
    show_amount_in_title: false,
  },
  "nutrients-from-fish": {
    type: "recipe",
    name: "nutrients-from-fish",
    icon: "__space-age__/graphics/icons/nutrients-from-fish.png",
    category: "organic-or-assembling",
    subgroup: "nauvis-agriculture",
    order: "b[nauvis-agriculture]-c[nutrients-from-fish]",
    enabled: false,
    energy_required: 2,
    ingredients: [
      {
        type: "item",
        name: "raw-fish",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "nutrients",
        amount: 20,
      },
    ],
    allow_productivity: false,
    allow_quality: false,
    crafting_machine_tint: {
      primary: [1, 0, 0, 1],
      secondary: [1, 0, 0, 1],
    },
  },
  "nutrients-from-biter-egg": {
    type: "recipe",
    name: "nutrients-from-biter-egg",
    icon: "__space-age__/graphics/icons/nutrients-from-biter-egg.png",
    category: "organic-or-assembling",
    subgroup: "nauvis-agriculture",
    order: "b[nauvis-agriculture]-d[nutrients-from-biter-egg]",
    enabled: false,
    energy_required: 2,
    ingredients: [
      {
        type: "item",
        name: "biter-egg",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "nutrients",
        amount: 20,
      },
    ],
    allow_productivity: true,
    allow_quality: false,
    crafting_machine_tint: {
      primary: {
        r: 1,
        g: 0,
        b: 0.25,
        a: 1,
      },
      secondary: {
        r: 1,
        g: 0,
        b: 0.25,
        a: 1,
      },
    },
  },
  "scrap-recycling": {
    type: "recipe",
    name: "scrap-recycling",
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/scrap.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    category: "recycling-or-hand-crafting",
    subgroup: "fulgora-processes",
    order: "a[trash]-a[trash-recycling]",
    enabled: false,
    energy_required: 0.2,
    ingredients: [
      {
        type: "item",
        name: "scrap",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "processing-unit",
        amount: 1,
        probability: 0.02,
        show_details_in_recipe_tooltip: false,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 1,
        probability: 0.03,
        show_details_in_recipe_tooltip: false,
      },

      {
        type: "item",
        name: "low-density-structure",
        amount: 1,
        probability: 0.01,
        show_details_in_recipe_tooltip: false,
      },

      {
        type: "item",
        name: "solid-fuel",
        amount: 1,
        probability: 0.0700000000000000088817841970012523233890533447265625,
        show_details_in_recipe_tooltip: false,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 1,
        probability: 0.04,
        show_details_in_recipe_tooltip: false,
      },

      {
        type: "item",
        name: "concrete",
        amount: 1,
        probability: 0.06,
        show_details_in_recipe_tooltip: false,
      },

      {
        type: "item",
        name: "battery",
        amount: 1,
        probability: 0.04,
        show_details_in_recipe_tooltip: false,
      },

      {
        type: "item",
        name: "ice",
        amount: 1,
        probability: 0.05,
        show_details_in_recipe_tooltip: false,
      },

      {
        type: "item",
        name: "stone",
        amount: 1,
        probability: 0.04,
        show_details_in_recipe_tooltip: false,
      },

      {
        type: "item",
        name: "holmium-ore",
        amount: 1,
        probability: 0.01,
        show_details_in_recipe_tooltip: false,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 1,
        probability: 0.2,
        show_details_in_recipe_tooltip: false,
      },

      {
        type: "item",
        name: "copper-cable",
        amount: 1,
        probability: 0.03,
        show_details_in_recipe_tooltip: false,
      },
    ],
  },
  "lightning-rod": {
    type: "recipe",
    name: "lightning-rod",
    category: "electronics",
    surface_conditions: [
      {
        property: "magnetic-field",
        min: 99,
        max: 99,
      },
    ],
    energy_required: 5,
    ingredients: [
      {
        type: "item",
        name: "copper-cable",
        amount: 12,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 8,
      },

      {
        type: "item",
        name: "stone-brick",
        amount: 4,
      },
    ],
    results: [
      {
        type: "item",
        name: "lightning-rod",
        amount: 1,
      },
    ],
    enabled: false,
  },
  "holmium-solution": {
    type: "recipe",
    name: "holmium-solution",
    category: "chemistry",
    subgroup: "fulgora-processes",
    order: "b[holmium]-b[holmium-solution]",
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "holmium-ore",
        amount: 2,
      },

      {
        type: "item",
        name: "stone",
        amount: 1,
      },

      {
        type: "fluid",
        name: "water",
        amount: 10,
      },
    ],
    results: [
      {
        type: "fluid",
        name: "holmium-solution",
        amount: 100,
      },
    ],
    allow_productivity: true,
    main_product: "holmium-solution",
    enabled: false,
    crafting_machine_tint: {
      primary: {
        r: 0.597999999999999953814722175593487918376922607421875,
        g: 0.27400000000000002131628207280300557613372802734375,
        b: 0.50099999999999997868371792719699442386627197265625,
        a: 0.5019999999999999573674358543939888477325439453125,
      },
      secondary: {
        r: 0.52400000000000002131628207280300557613372802734375,
        g: 0.49900000000000002131628207280300557613372802734375,
        b: 0.520999999999999996447286321199499070644378662109375,
        a: 0.5019999999999999573674358543939888477325439453125,
      },
      tertiary: {
        r: 0.7160000000000000142108547152020037174224853515625,
        g: 0.7160000000000000142108547152020037174224853515625,
        b: 0.7160000000000000142108547152020037174224853515625,
        a: 0.5019999999999999573674358543939888477325439453125,
      },
      quaternary: {
        r: 0.767999999999999971578290569595992565155029296875,
        g: 0.487000000000000010658141036401502788066864013671875,
        b: 0.684000000000000074606987254810519516468048095703125,
        a: 0.5019999999999999573674358543939888477325439453125,
      },
    },
  },
  "holmium-plate": {
    type: "recipe",
    name: "holmium-plate",
    category: "crafting-with-fluid-or-metallurgy",
    subgroup: "fulgora-processes",
    enabled: false,
    ingredients: [
      {
        type: "fluid",
        name: "holmium-solution",
        amount: 20,
        fluidbox_multiplier: 10,
      },
    ],
    energy_required: 1,
    results: [
      {
        type: "item",
        name: "holmium-plate",
        amount: 1,
      },
    ],
    allow_productivity: true,
  },
  "electromagnetic-plant": {
    type: "recipe",
    name: "electromagnetic-plant",
    category: "electronics-or-assembling",
    surface_conditions: [
      {
        property: "magnetic-field",
        min: 99,
      },
    ],
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "holmium-plate",
        amount: 150,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 50,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 50,
      },

      {
        type: "item",
        name: "refined-concrete",
        amount: 50,
      },
    ],
    results: [
      {
        type: "item",
        name: "electromagnetic-plant",
        amount: 1,
      },
    ],
    enabled: false,
  },
  superconductor: {
    type: "recipe",
    name: "superconductor",
    category: "electromagnetics",
    subgroup: "fulgora-processes",
    order: "b[holmium]-d[superconductor]",
    energy_required: 5,
    ingredients: [
      {
        type: "item",
        name: "holmium-plate",
        amount: 1,
      },

      {
        type: "item",
        name: "copper-plate",
        amount: 1,
      },

      {
        type: "item",
        name: "plastic-bar",
        amount: 1,
      },

      {
        type: "fluid",
        name: "light-oil",
        amount: 5,
      },
    ],
    results: [
      {
        type: "item",
        name: "superconductor",
        amount: 2,
      },
    ],
    allow_productivity: true,
    enabled: false,
  },
  supercapacitor: {
    type: "recipe",
    name: "supercapacitor",
    category: "electromagnetics",
    subgroup: "fulgora-processes",
    order: "b[holmium]-f[supercapacitor]",
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "holmium-plate",
        amount: 2,
      },

      {
        type: "item",
        name: "superconductor",
        amount: 2,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 4,
      },

      {
        type: "item",
        name: "battery",
        amount: 1,
      },

      {
        type: "fluid",
        name: "electrolyte",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "supercapacitor",
        amount: 1,
      },
    ],
    allow_productivity: true,
    enabled: false,
  },
  electrolyte: {
    type: "recipe",
    name: "electrolyte",
    category: "electromagnetics",
    subgroup: "fulgora-processes",
    order: "b[holmium]-e[electrolyte]",
    energy_required: 5,
    ingredients: [
      {
        type: "item",
        name: "stone",
        amount: 1,
      },

      {
        type: "fluid",
        name: "heavy-oil",
        amount: 10,
      },

      {
        type: "fluid",
        name: "holmium-solution",
        amount: 10,
      },
    ],
    results: [
      {
        type: "fluid",
        name: "electrolyte",
        amount: 10,
      },
    ],
    allow_productivity: true,
    enabled: false,
  },
  "lightning-collector": {
    type: "recipe",
    name: "lightning-collector",
    category: "electromagnetics",
    surface_conditions: [
      {
        property: "magnetic-field",
        min: 99,
        max: 99,
      },
    ],
    energy_required: 5,
    ingredients: [
      {
        type: "item",
        name: "lightning-rod",
        amount: 1,
      },

      {
        type: "item",
        name: "supercapacitor",
        amount: 8,
      },

      {
        type: "item",
        name: "accumulator",
        amount: 1,
      },

      {
        type: "fluid",
        name: "electrolyte",
        amount: 80,
      },
    ],
    results: [
      {
        type: "item",
        name: "lightning-collector",
        amount: 1,
      },
    ],
    enabled: false,
  },
  teslagun: {
    type: "recipe",
    name: "teslagun",
    category: "electromagnetics",
    energy_required: 30,
    ingredients: [
      {
        type: "item",
        name: "holmium-plate",
        amount: 10,
      },

      {
        type: "item",
        name: "superconductor",
        amount: 10,
      },

      {
        type: "item",
        name: "plastic-bar",
        amount: 30,
      },

      {
        type: "fluid",
        name: "electrolyte",
        amount: 100,
      },
    ],
    results: [
      {
        type: "item",
        name: "teslagun",
        amount: 1,
      },
    ],
    enabled: false,
  },
  "tesla-turret": {
    type: "recipe",
    name: "tesla-turret",
    category: "electromagnetics",
    energy_required: 30,
    ingredients: [
      {
        type: "item",
        name: "teslagun",
        amount: 1,
      },

      {
        type: "item",
        name: "supercapacitor",
        amount: 10,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 10,
      },

      {
        type: "item",
        name: "superconductor",
        amount: 50,
      },

      {
        type: "fluid",
        name: "electrolyte",
        amount: 500,
      },
    ],
    results: [
      {
        type: "item",
        name: "tesla-turret",
        amount: 1,
      },
    ],
    enabled: false,
  },
  "tesla-ammo": {
    type: "recipe",
    name: "tesla-ammo",
    category: "electromagnetics",
    energy_required: 30,
    ingredients: [
      {
        type: "item",
        name: "supercapacitor",
        amount: 1,
      },

      {
        type: "item",
        name: "plastic-bar",
        amount: 1,
      },

      {
        type: "fluid",
        name: "electrolyte",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "tesla-ammo",
        amount: 1,
      },
    ],
    enabled: false,
  },
  "heating-tower": {
    type: "recipe",
    name: "heating-tower",
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "boiler",
        amount: 2,
      },

      {
        type: "item",
        name: "heat-pipe",
        amount: 5,
      },

      {
        type: "item",
        name: "concrete",
        amount: 20,
      },
    ],
    results: [
      {
        type: "item",
        name: "heating-tower",
        amount: 1,
      },
    ],
    enabled: false,
  },
  lithium: {
    type: "recipe",
    name: "lithium",
    category: "chemistry-or-cryogenics",
    subgroup: "aquilo-processes",
    order: "c[lithium]-a[lithium]",
    energy_required: 20,
    ingredients: [
      {
        type: "item",
        name: "holmium-plate",
        amount: 1,
      },

      {
        type: "fluid",
        name: "lithium-brine",
        amount: 50,
      },

      {
        type: "fluid",
        name: "ammonia",
        amount: 50,
      },
    ],
    results: [
      {
        type: "item",
        name: "lithium",
        amount: 5,
      },
    ],
    allow_productivity: true,
    enabled: false,
    crafting_machine_tint: {
      primary: {
        r: 0.454999999999999982236431605997495353221893310546875,
        g: 0.83699999999999992184029906638897955417633056640625,
        b: 0.5629999999999999005240169935859739780426025390625,
        a: 1,
      },
      secondary: {
        r: 0.642999999999999971578290569595992565155029296875,
        g: 0.668000000000000060396132539608515799045562744140625,
        b: 0.738999999999999968025576890795491635799407958984375,
        a: 1,
      },
      tertiary: {
        r: 0.5910000000000000142108547152020037174224853515625,
        g: 0.55600000000000004973799150320701301097869873046875,
        b: 0.55600000000000004973799150320701301097869873046875,
        a: 1,
      },
      quaternary: {
        r: 1,
        g: 1,
        b: 1,
        a: 1,
      },
    },
  },
  "lithium-plate": {
    type: "recipe",
    name: "lithium-plate",
    category: "smelting",
    subgroup: "aquilo-processes",
    order: "c[lithium]-b[lithium-plate]",
    energy_required: 6.4000000000000003552713678800500929355621337890625,
    ingredients: [
      {
        type: "item",
        name: "lithium",
        amount: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "lithium-plate",
        amount: 1,
      },
    ],
    allow_productivity: true,
    enabled: false,
  },
  fluoroketone: {
    type: "recipe",
    name: "fluoroketone",
    category: "cryogenics",
    subgroup: "aquilo-processes",
    order: "b[fluoroketone]-a[fluoroketone]",
    energy_required: 10,
    ingredients: [
      {
        type: "fluid",
        name: "fluorine",
        amount: 50,
      },

      {
        type: "fluid",
        name: "ammonia",
        amount: 50,
      },

      {
        type: "item",
        name: "solid-fuel",
        amount: 1,
      },

      {
        type: "item",
        name: "lithium",
        amount: 1,
      },
    ],
    results: [
      {
        type: "fluid",
        name: "fluoroketone-hot",
        amount: 50,
        temperature: 180,
      },
    ],
    allow_productivity: true,
    enabled: false,
    crafting_machine_tint: {
      primary: {
        r: 0.3649999999999999911182158029987476766109466552734375,
        g: 0.814999999999999857891452847979962825775146484375,
        b: 0.3340000000000000301980662698042578995227813720703125,
        a: 1,
      },
      secondary: {
        r: 0.77200000000000006394884621840901672840118408203125,
        g: 0.394000000000000039079850466805510222911834716796875,
        b: 0.394000000000000039079850466805510222911834716796875,
        a: 1,
      },
      tertiary: {
        r: 0.1160000000000000142108547152020037174224853515625,
        g: 0.1160000000000000142108547152020037174224853515625,
        b: 0.11100000000000000976996261670137755572795867919921875,
        a: 1,
      },
      quaternary: {
        r: 0.395000000000000017763568394002504646778106689453125,
        g: 0.71699999999999999289457264239899814128875732421875,
        b: 0.5629999999999999005240169935859739780426025390625,
        a: 1,
      },
    },
  },
  "fluoroketone-cooling": {
    type: "recipe",
    name: "fluoroketone-cooling",
    icon: "__space-age__/graphics/icons/fluid/fluoroketone-cooling.png",
    localised_name: ["recipe-name.fluoroketone-cooling"],
    category: "cryogenics",
    subgroup: "aquilo-processes",
    order: "b[fluoroketone]-b[fluoroketone-cooling]",
    energy_required: 5,
    ingredients: [
      {
        type: "fluid",
        name: "fluoroketone-hot",
        amount: 10,
        ignored_by_stats: 10,
      },
    ],
    results: [
      {
        type: "fluid",
        name: "fluoroketone-cold",
        amount: 10,
        temperature: -150,
        ignored_by_stats: 10,
      },
    ],
    show_amount_in_title: false,
    always_show_products: true,
    allow_productivity: false,
    enabled: false,
    crafting_machine_tint: {
      primary: {
        r: 0.454999999999999982236431605997495353221893310546875,
        g: 0.83699999999999992184029906638897955417633056640625,
        b: 0.5629999999999999005240169935859739780426025390625,
        a: 1,
      },
      secondary: {
        r: 0.3980000000000000426325641456060111522674560546875,
        g: 0.732000000000000028421709430404007434844970703125,
        b: 0.68100000000000004973799150320701301097869873046875,
        a: 1,
      },
      tertiary: {
        r: 0.337000000000000010658141036401502788066864013671875,
        g: 0.3060000000000000053290705182007513940334320068359375,
        b: 0.3060000000000000053290705182007513940334320068359375,
        a: 1,
      },
      quaternary: {
        r: 0.436000000000000031974423109204508364200592041015625,
        g: 0.742999999999999971578290569595992565155029296875,
        b: 0.71099999999999994315658113919198513031005859375,
        a: 1,
      },
    },
  },
  "cryogenic-plant": {
    type: "recipe",
    name: "cryogenic-plant",
    category: "cryogenics-or-assembling",
    surface_conditions: [
      {
        property: "pressure",
        min: 100,
        max: 600,
      },
    ],
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "refined-concrete",
        amount: 40,
      },

      {
        type: "item",
        name: "superconductor",
        amount: 20,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 20,
      },

      {
        type: "item",
        name: "lithium-plate",
        amount: 20,
      },
    ],
    results: [
      {
        type: "item",
        name: "cryogenic-plant",
        amount: 1,
      },
    ],
    enabled: false,
    crafting_machine_tint: {
      primary: {
        r: 0.2939999999999999857891452847979962825775146484375,
        g: 0.367999999999999971578290569595992565155029296875,
        b: 0.86199999999999992184029906638897955417633056640625,
        a: 1,
      },
      secondary: {
        r: 0.420000000000000017763568394002504646778106689453125,
        g: 0.85099999999999997868371792719699442386627197265625,
        b: 0.76699999999999999289457264239899814128875732421875,
        a: 1,
      },
      tertiary: {
        r: 0.2600000000000000088817841970012523233890533447265625,
        g: 0.245000000000000017763568394002504646778106689453125,
        b: 0.30099999999999997868371792719699442386627197265625,
        a: 1,
      },
      quaternary: {
        r: 0.565999999999999925393012745189480483531951904296875,
        g: 0.8410000000000000142108547152020037174224853515625,
        b: 0.769000000000000039079850466805510222911834716796875,
        a: 1,
      },
    },
  },
  "quantum-processor": {
    type: "recipe",
    name: "quantum-processor",
    category: "electromagnetics",
    subgroup: "aquilo-processes",
    surface_conditions: [
      {
        property: "pressure",
        max: 600,
      },
    ],
    order: "c[lithium]-c[quantum-processor]",
    energy_required: 30,
    ingredients: [
      {
        type: "item",
        name: "tungsten-carbide",
        amount: 1,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 1,
      },

      {
        type: "item",
        name: "superconductor",
        amount: 1,
      },

      {
        type: "item",
        name: "carbon-fiber",
        amount: 1,
      },

      {
        type: "item",
        name: "lithium-plate",
        amount: 2,
      },

      {
        type: "fluid",
        name: "fluoroketone-cold",
        amount: 10,
        ignored_by_stats: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "quantum-processor",
        amount: 1,
      },

      {
        type: "fluid",
        name: "fluoroketone-hot",
        amount: 5,
        temperature: 180,
        ignored_by_stats: 5,
        ignored_by_productivity: 5,
      },
    ],
    allow_productivity: true,
    main_product: "quantum-processor",
    enabled: false,
    crafting_machine_tint: {
      primary: {
        r: 0.460000000000000053290705182007513940334320068359375,
        g: 0.187999999999999989341858963598497211933135986328125,
        b: 0.64900000000000002131628207280300557613372802734375,
        a: 1,
      },
      secondary: {
        r: 0.488999999999999968025576890795491635799407958984375,
        g: 0.4839999999999999857891452847979962825775146484375,
        b: 0.3810000000000000142108547152020037174224853515625,
        a: 1,
      },
      tertiary: {
        r: 0.195999999999999996447286321199499070644378662109375,
        g: 0.10100000000000000088817841970012523233890533447265625,
        b: 0.10100000000000000088817841970012523233890533447265625,
        a: 1,
      },
      quaternary: {
        r: 0.517999999999999971578290569595992565155029296875,
        g: 0.53900000000000005684341886080801486968994140625,
        b: 0.992999999999999971578290569595992565155029296875,
        a: 1,
      },
    },
  },
  "ammoniacal-solution-separation": {
    type: "recipe",
    name: "ammoniacal-solution-separation",
    icon: "__space-age__/graphics/icons/fluid/ammoniacal-solution-separation.png",
    category: "chemistry-or-cryogenics",
    subgroup: "aquilo-processes",
    order: "a[ammonia]-a[ammoniacal-solution-separation]",
    energy_required: 1,
    ingredients: [
      {
        type: "fluid",
        name: "ammoniacal-solution",
        amount: 50,
      },
    ],
    results: [
      {
        type: "item",
        name: "ice",
        amount: 5,
      },

      {
        type: "fluid",
        name: "ammonia",
        amount: 50,
      },
    ],
    allow_productivity: true,
    enabled: false,
    always_show_made_in: true,
    always_show_products: true,
    allow_decomposition: false,
    crafting_machine_tint: {
      primary: {
        r: 0.595999999999999996447286321199499070644378662109375,
        g: 0.76400000000000005684341886080801486968994140625,
        b: 0.7800000000000000710542735760100185871124267578125,
        a: 1,
      },
      secondary: {
        r: 0.551000000000000067501559897209517657756805419921875,
        g: 0.762000000000000010658141036401502788066864013671875,
        b: 0.84399999999999995026200849679298698902130126953125,
        a: 1,
      },
      tertiary: {
        r: 0.595999999999999996447286321199499070644378662109375,
        g: 0.7730000000000000426325641456060111522674560546875,
        b: 0.8949999999999999289457264239899814128875732421875,
        a: 1,
      },
      quaternary: {
        r: 0.29,
        g: 0.7339999999999999857891452847979962825775146484375,
        b: 1,
        a: 1,
      },
    },
  },
  "fusion-reactor-equipment": {
    type: "recipe",
    name: "fusion-reactor-equipment",
    enabled: false,
    energy_required: 30,
    ingredients: [
      {
        type: "item",
        name: "fission-reactor-equipment",
        amount: 1,
      },

      {
        type: "item",
        name: "fusion-power-cell",
        amount: 10,
      },

      {
        type: "item",
        name: "tungsten-plate",
        amount: 250,
      },

      {
        type: "item",
        name: "carbon-fiber",
        amount: 100,
      },

      {
        type: "item",
        name: "supercapacitor",
        amount: 25,
      },

      {
        type: "item",
        name: "quantum-processor",
        amount: 250,
      },
    ],
    results: [
      {
        type: "item",
        name: "fusion-reactor-equipment",
        amount: 1,
      },
    ],
    crafting_machine_tint: {
      primary: {
        r: 0.29800000000000000710542735760100185871124267578125,
        g: 0.44199999999999999289457264239899814128875732421875,
        b: 0.517999999999999971578290569595992565155029296875,
        a: 1,
      },
      secondary: {
        r: 0.86400000000000005684341886080801486968994140625,
        g: 0.705999999999999960920149533194489777088165283203125,
        b: 0.9019999999999999573674358543939888477325439453125,
        a: 1,
      },
      tertiary: {
        r: 0.159000000000000003552713678800500929355621337890625,
        g: 0.13600000000000000976996261670137755572795867919921875,
        b: 0.2069999999999999840127884453977458178997039794921875,
        a: 1,
      },
      quaternary: {
        r: 0.9449999999999999289457264239899814128875732421875,
        g: 0.370000000000000017763568394002504646778106689453125,
        b: 1,
        a: 1,
      },
    },
  },
  "fusion-power-cell": {
    type: "recipe",
    name: "fusion-power-cell",
    category: "cryogenics",
    subgroup: "aquilo-processes",
    order: "c[lithium]-d[fusion-power-cell]",
    energy_required: 10,
    ingredients: [
      {
        type: "item",
        name: "lithium-plate",
        amount: 5,
      },

      {
        type: "item",
        name: "holmium-plate",
        amount: 1,
      },

      {
        type: "fluid",
        name: "ammonia",
        amount: 100,
      },
    ],
    results: [
      {
        type: "item",
        name: "fusion-power-cell",
        amount: 1,
      },
    ],
    allow_productivity: true,
    enabled: false,
    crafting_machine_tint: {
      primary: {
        r: 0.054000000000000003552713678800500929355621337890625,
        g: 0.89700000000000006394884621840901672840118408203125,
        b: 1,
        a: 1,
      },
      secondary: {
        r: 1,
        g: 0.779000000000000003552713678800500929355621337890625,
        b: 0.97400000000000002131628207280300557613372802734375,
        a: 1,
      },
      tertiary: {
        r: 0.496999999999999975131004248396493494510650634765625,
        g: 0.6550000000000000710542735760100185871124267578125,
        b: 0.757000000000000028421709430404007434844970703125,
        a: 1,
      },
      quaternary: {
        r: 0.761000000000000031974423109204508364200592041015625,
        g: 0.312000000000000010658141036401502788066864013671875,
        b: 1,
        a: 1,
      },
    },
  },
  "fusion-reactor": {
    type: "recipe",
    name: "fusion-reactor",
    category: "cryogenics",
    surface_conditions: [
      {
        property: "pressure",
        min: 100,
        max: 600,
      },
    ],
    energy_required: 60,
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "tungsten-plate",
        amount: 200,
      },

      {
        type: "item",
        name: "superconductor",
        amount: 200,
      },

      {
        type: "item",
        name: "quantum-processor",
        amount: 250,
      },
    ],
    results: [
      {
        type: "item",
        name: "fusion-reactor",
        amount: 1,
      },
    ],
    requester_paste_multiplier: 1,
    crafting_machine_tint: {
      primary: {
        r: 0.29800000000000000710542735760100185871124267578125,
        g: 0.44199999999999999289457264239899814128875732421875,
        b: 0.517999999999999971578290569595992565155029296875,
        a: 1,
      },
      secondary: {
        r: 0.86400000000000005684341886080801486968994140625,
        g: 0.705999999999999960920149533194489777088165283203125,
        b: 0.9019999999999999573674358543939888477325439453125,
        a: 1,
      },
      tertiary: {
        r: 0.159000000000000003552713678800500929355621337890625,
        g: 0.13600000000000000976996261670137755572795867919921875,
        b: 0.2069999999999999840127884453977458178997039794921875,
        a: 1,
      },
      quaternary: {
        r: 0.9449999999999999289457264239899814128875732421875,
        g: 0.370000000000000017763568394002504646778106689453125,
        b: 1,
        a: 1,
      },
    },
  },
  "fusion-generator": {
    type: "recipe",
    name: "fusion-generator",
    category: "cryogenics",
    surface_conditions: [
      {
        property: "pressure",
        min: 100,
        max: 600,
      },
    ],
    energy_required: 30,
    enabled: false,
    ingredients: [
      {
        type: "item",
        name: "tungsten-plate",
        amount: 100,
      },

      {
        type: "item",
        name: "superconductor",
        amount: 100,
      },

      {
        type: "item",
        name: "quantum-processor",
        amount: 50,
      },
    ],
    results: [
      {
        type: "item",
        name: "fusion-generator",
        amount: 1,
      },
    ],
    requester_paste_multiplier: 1,
    crafting_machine_tint: {
      primary: {
        r: 0.29800000000000000710542735760100185871124267578125,
        g: 0.44199999999999999289457264239899814128875732421875,
        b: 0.517999999999999971578290569595992565155029296875,
        a: 1,
      },
      secondary: {
        r: 0.86400000000000005684341886080801486968994140625,
        g: 0.705999999999999960920149533194489777088165283203125,
        b: 0.9019999999999999573674358543939888477325439453125,
        a: 1,
      },
      tertiary: {
        r: 0.159000000000000003552713678800500929355621337890625,
        g: 0.13600000000000000976996261670137755572795867919921875,
        b: 0.2069999999999999840127884453977458178997039794921875,
        a: 1,
      },
      quaternary: {
        r: 0.9449999999999999289457264239899814128875732421875,
        g: 0.370000000000000017763568394002504646778106689453125,
        b: 1,
        a: 1,
      },
    },
  },
  "ice-platform": {
    type: "recipe",
    name: "ice-platform",
    always_show_made_in: true,
    category: "crafting-with-fluid",
    energy_required: 30,
    ingredients: [
      {
        type: "fluid",
        name: "ammonia",
        amount: 400,
      },

      {
        type: "item",
        name: "ice",
        amount: 50,
      },
    ],
    results: [
      {
        type: "item",
        name: "ice-platform",
        amount: 1,
      },
    ],
    enabled: false,
  },
  "solid-fuel-from-ammonia": {
    type: "recipe",
    name: "solid-fuel-from-ammonia",
    icon: "__space-age__/graphics/icons/solid-fuel-from-ammonia.png",
    energy_required: 1,
    enabled: false,
    category: "chemistry-or-cryogenics",
    subgroup: "aquilo-processes",
    order: "a[ammonia]-b[solid-fuel-from-ammonia]",
    ingredients: [
      {
        type: "fluid",
        name: "ammonia",
        amount: 50,
      },

      {
        type: "fluid",
        name: "crude-oil",
        amount: 20,
      },
    ],
    results: [
      {
        type: "item",
        name: "solid-fuel",
        amount: 1,
      },
    ],
    allow_productivity: true,
    crafting_machine_tint: {
      primary: {
        r: 0.2220000000000000195399252334027551114559173583984375,
        g: 0.187999999999999989341858963598497211933135986328125,
        b: 0.34399999999999995026200849679298698902130126953125,
        a: 1,
      },
      secondary: {
        r: 0.394000000000000039079850466805510222911834716796875,
        g: 0.480999999999999960920149533194489777088165283203125,
        b: 0.59399999999999995026200849679298698902130126953125,
        a: 1,
      },
      tertiary: {
        r: 0.370000000000000017763568394002504646778106689453125,
        g: 0.362000000000000010658141036401502788066864013671875,
        b: 0.362000000000000010658141036401502788066864013671875,
        a: 1,
      },
      quaternary: {
        r: 0.19199999999999999289457264239899814128875732421875,
        g: 0.2100000000000000088817841970012523233890533447265625,
        b: 0.30800000000000000710542735760100185871124267578125,
        a: 1,
      },
    },
  },
  "ammonia-rocket-fuel": {
    type: "recipe",
    name: "ammonia-rocket-fuel",
    localised_name: ["recipe-name.ammonia-rocket-fuel"],
    icon: "__space-age__/graphics/icons/ammonia-rocket-fuel.png",
    energy_required: 10,
    enabled: false,
    category: "chemistry-or-cryogenics",
    subgroup: "aquilo-processes",
    order: "a[ammonia]-c[ammonia-rocket-fuel]",
    ingredients: [
      {
        type: "item",
        name: "solid-fuel",
        amount: 3,
      },

      {
        type: "fluid",
        name: "water",
        amount: 50,
      },

      {
        type: "fluid",
        name: "ammonia",
        amount: 500,
      },
    ],
    results: [
      {
        type: "item",
        name: "rocket-fuel",
        amount: 1,
      },
    ],
    allow_productivity: true,
    crafting_machine_tint: {
      primary: {
        r: 0.996000000000000085265128291212022304534912109375,
        g: 0.74199999999999999289457264239899814128875732421875,
        b: 0.40800000000000000710542735760100185871124267578125,
        a: 1,
      },
      secondary: {
        r: 0.445999999999999996447286321199499070644378662109375,
        g: 0.39199999999999999289457264239899814128875732421875,
        b: 0.1680000000000000159872115546022541821002960205078125,
        a: 1,
      },
      tertiary: {
        r: 0.346999999999999975131004248396493494510650634765625,
        g: 0.387999999999999989341858963598497211933135986328125,
        b: 0.387000000000000010658141036401502788066864013671875,
        a: 1,
      },
      quaternary: {
        r: 0.65600000000000004973799150320701301097869873046875,
        g: 0.5620000000000000994759830064140260219573974609375,
        b: 0.2640000000000000124344978758017532527446746826171875,
        a: 1,
      },
    },
  },
  foundation: {
    type: "recipe",
    name: "foundation",
    energy_required: 30,
    enabled: false,
    category: "crafting-with-fluid",
    ingredients: [
      {
        type: "item",
        name: "tungsten-plate",
        amount: 4,
      },

      {
        type: "item",
        name: "lithium-plate",
        amount: 4,
      },

      {
        type: "item",
        name: "carbon-fiber",
        amount: 4,
      },

      {
        type: "item",
        name: "stone",
        amount: 20,
      },

      {
        type: "fluid",
        name: "fluoroketone-cold",
        amount: 20,
      },
    ],
    results: [
      {
        type: "item",
        name: "foundation",
        amount: 1,
      },
    ],
  },
  "promethium-science-pack": {
    type: "recipe",
    name: "promethium-science-pack",
    energy_required: 5,
    surface_conditions: [
      {
        property: "gravity",
        min: 0,
        max: 0,
      },
    ],
    enabled: false,
    allow_productivity: true,
    category: "cryogenics",
    ingredients: [
      {
        type: "item",
        name: "promethium-asteroid-chunk",
        amount: 25,
      },

      {
        type: "item",
        name: "quantum-processor",
        amount: 1,
      },

      {
        type: "item",
        name: "biter-egg",
        amount: 10,
      },
    ],
    results: [
      {
        type: "item",
        name: "promethium-science-pack",
        amount: 10,
      },
    ],
    crafting_machine_tint: {
      primary: {
        r: 0,
        g: 0,
        b: 0.1,
        a: 1,
      },
      secondary: {
        r: 0,
        g: 0,
        b: 0.4,
        a: 1,
      },
      tertiary: {
        r: 0.1,
        g: 0.1,
        b: 0.4,
        a: 1,
      },
      quaternary: {
        r: 0,
        g: 0,
        b: 0.1,
        a: 1,
      },
    },
  },
  "wood-processing": {
    type: "recipe",
    name: "wood-processing",
    icon: "__base__/graphics/icons/tree-08.png",
    category: "organic-or-assembling",
    subgroup: "nauvis-agriculture",
    order: "b[nauvis-agriculture]-a[wood-processing]",
    enabled: false,
    allow_productivity: true,
    energy_required: 2,
    ingredients: [
      {
        type: "item",
        name: "wood",
        amount: 2,
      },
    ],
    surface_conditions: [
      {
        property: "pressure",
        min: 1000,
        max: 1000,
      },
    ],
    results: [
      {
        type: "item",
        name: "tree-seed",
        amount: 1,
      },
    ],
    crafting_machine_tint: {
      primary: {
        r: 0.44199999999999999289457264239899814128875732421875,
        g: 0.204999999999999982236431605997495353221893310546875,
        b: 0.09,
        a: 1,
      },
      secondary: {
        r: 1,
        g: 0.5,
        b: 0,
        a: 1,
      },
    },
  },
  "water-barrel": {
    type: "recipe",
    name: "water-barrel",
    localised_name: ["recipe-name.fill-barrel", ["fluid-name.water"]],
    category: "crafting-with-fluid",
    energy_required: 0.2,
    subgroup: "fill-barrel",
    order: "a[fluid]-a[water]-a[water]",
    enabled: false,
    icons: [
      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-fill.png",
        icon_size: 64,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-fill-side-mask.png",
        icon_size: 64,
        tint: {
          r: 0,
          g: 0.34000000000000003552713678800500929355621337890625,
          b: 0.6,
          a: 0.75,
        },
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-fill-top-mask.png",
        icon_size: 64,
        tint: {
          r: 0.7,
          g: 0.7,
          b: 0.7,
          a: 0.75,
        },
      },

      {
        icon: "__base__/graphics/icons/fluid/water.png",
        icon_size: 64,
        scale: 0.25,
        shift: [-8, -8],
      },
    ],
    ingredients: [
      {
        type: "fluid",
        name: "water",
        amount: 50,
        ignored_by_stats: 50,
      },

      {
        type: "item",
        name: "barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "water-barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    allow_quality: false,
    allow_decomposition: false,
    hide_from_player_crafting: true,
    factoriopedia_alternative: "barrel",
    hide_from_signal_gui: false,
  },
  "empty-water-barrel": {
    type: "recipe",
    name: "empty-water-barrel",
    localised_name: ["recipe-name.empty-filled-barrel", ["fluid-name.water"]],
    category: "crafting-with-fluid",
    energy_required: 0.2,
    subgroup: "empty-barrel",
    order: "a[fluid]-a[water]-a[water]",
    enabled: false,
    icons: [
      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-empty.png",
        icon_size: 64,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-empty-side-mask.png",
        icon_size: 64,
        tint: {
          r: 0,
          g: 0.34000000000000003552713678800500929355621337890625,
          b: 0.6,
          a: 0.75,
        },
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-empty-top-mask.png",
        icon_size: 64,
        tint: {
          r: 0.7,
          g: 0.7,
          b: 0.7,
          a: 0.75,
        },
      },

      {
        icon: "__base__/graphics/icons/fluid/water.png",
        icon_size: 64,
        scale: 0.25,
        shift: [7, 8],
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "water-barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "fluid",
        name: "water",
        amount: 50,
        ignored_by_stats: 50,
      },

      {
        type: "item",
        name: "barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    allow_quality: false,
    allow_decomposition: false,
    hide_from_player_crafting: true,
    factoriopedia_alternative: "barrel",
    hide_from_signal_gui: false,
  },
  "sulfuric-acid-barrel": {
    type: "recipe",
    name: "sulfuric-acid-barrel",
    localised_name: ["recipe-name.fill-barrel", ["fluid-name.sulfuric-acid"]],
    category: "crafting-with-fluid",
    energy_required: 0.2,
    subgroup: "fill-barrel",
    order: "a[fluid]-b[oil]-f[sulfuric-acid]",
    enabled: false,
    icons: [
      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-fill.png",
        icon_size: 64,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-fill-side-mask.png",
        icon_size: 64,
        tint: {
          r: 0.75,
          g: 0.65,
          b: 0.1,
          a: 0.75,
        },
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-fill-top-mask.png",
        icon_size: 64,
        tint: {
          r: 0.7,
          g: 1,
          b: 0.1,
          a: 0.75,
        },
      },

      {
        icon: "__base__/graphics/icons/fluid/sulfuric-acid.png",
        icon_size: 64,
        scale: 0.25,
        shift: [-8, -8],
      },
    ],
    ingredients: [
      {
        type: "fluid",
        name: "sulfuric-acid",
        amount: 50,
        ignored_by_stats: 50,
      },

      {
        type: "item",
        name: "barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "sulfuric-acid-barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    allow_quality: false,
    allow_decomposition: false,
    hide_from_player_crafting: true,
    factoriopedia_alternative: "barrel",
    hide_from_signal_gui: false,
  },
  "empty-sulfuric-acid-barrel": {
    type: "recipe",
    name: "empty-sulfuric-acid-barrel",
    localised_name: ["recipe-name.empty-filled-barrel", ["fluid-name.sulfuric-acid"]],
    category: "crafting-with-fluid",
    energy_required: 0.2,
    subgroup: "empty-barrel",
    order: "a[fluid]-b[oil]-f[sulfuric-acid]",
    enabled: false,
    icons: [
      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-empty.png",
        icon_size: 64,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-empty-side-mask.png",
        icon_size: 64,
        tint: {
          r: 0.75,
          g: 0.65,
          b: 0.1,
          a: 0.75,
        },
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-empty-top-mask.png",
        icon_size: 64,
        tint: {
          r: 0.7,
          g: 1,
          b: 0.1,
          a: 0.75,
        },
      },

      {
        icon: "__base__/graphics/icons/fluid/sulfuric-acid.png",
        icon_size: 64,
        scale: 0.25,
        shift: [7, 8],
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "sulfuric-acid-barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "fluid",
        name: "sulfuric-acid",
        amount: 50,
        ignored_by_stats: 50,
      },

      {
        type: "item",
        name: "barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    allow_quality: false,
    allow_decomposition: false,
    hide_from_player_crafting: true,
    factoriopedia_alternative: "barrel",
    hide_from_signal_gui: false,
  },
  "crude-oil-barrel": {
    type: "recipe",
    name: "crude-oil-barrel",
    localised_name: ["recipe-name.fill-barrel", ["fluid-name.crude-oil"]],
    category: "crafting-with-fluid",
    energy_required: 0.2,
    subgroup: "fill-barrel",
    order: "a[fluid]-b[oil]-a[crude-oil]",
    enabled: false,
    icons: [
      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-fill.png",
        icon_size: 64,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-fill-side-mask.png",
        icon_size: 64,
        tint: {
          r: 0,
          g: 0,
          b: 0,
          a: 0.75,
        },
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-fill-top-mask.png",
        icon_size: 64,
        tint: {
          r: 0.5,
          g: 0.5,
          b: 0.5,
          a: 0.75,
        },
      },

      {
        icon: "__base__/graphics/icons/fluid/crude-oil.png",
        icon_size: 64,
        scale: 0.25,
        shift: [-8, -8],
      },
    ],
    ingredients: [
      {
        type: "fluid",
        name: "crude-oil",
        amount: 50,
        ignored_by_stats: 50,
      },

      {
        type: "item",
        name: "barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "crude-oil-barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    allow_quality: false,
    allow_decomposition: false,
    hide_from_player_crafting: true,
    factoriopedia_alternative: "barrel",
    hide_from_signal_gui: false,
  },
  "empty-crude-oil-barrel": {
    type: "recipe",
    name: "empty-crude-oil-barrel",
    localised_name: ["recipe-name.empty-filled-barrel", ["fluid-name.crude-oil"]],
    category: "crafting-with-fluid",
    energy_required: 0.2,
    subgroup: "empty-barrel",
    order: "a[fluid]-b[oil]-a[crude-oil]",
    enabled: false,
    icons: [
      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-empty.png",
        icon_size: 64,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-empty-side-mask.png",
        icon_size: 64,
        tint: {
          r: 0,
          g: 0,
          b: 0,
          a: 0.75,
        },
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-empty-top-mask.png",
        icon_size: 64,
        tint: {
          r: 0.5,
          g: 0.5,
          b: 0.5,
          a: 0.75,
        },
      },

      {
        icon: "__base__/graphics/icons/fluid/crude-oil.png",
        icon_size: 64,
        scale: 0.25,
        shift: [7, 8],
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "crude-oil-barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "fluid",
        name: "crude-oil",
        amount: 50,
        ignored_by_stats: 50,
      },

      {
        type: "item",
        name: "barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    allow_quality: false,
    allow_decomposition: false,
    hide_from_player_crafting: true,
    factoriopedia_alternative: "barrel",
    hide_from_signal_gui: false,
  },
  "heavy-oil-barrel": {
    type: "recipe",
    name: "heavy-oil-barrel",
    localised_name: ["recipe-name.fill-barrel", ["fluid-name.heavy-oil"]],
    category: "crafting-with-fluid",
    energy_required: 0.2,
    subgroup: "fill-barrel",
    order: "a[fluid]-b[oil]-d[heavy-oil]",
    enabled: false,
    icons: [
      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-fill.png",
        icon_size: 64,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-fill-side-mask.png",
        icon_size: 64,
        tint: {
          r: 0.5,
          g: 0.13000000000000000444089209850062616169452667236328125,
          b: 0,
          a: 0.75,
        },
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-fill-top-mask.png",
        icon_size: 64,
        tint: {
          r: 0.85,
          g: 0.6,
          b: 0.3,
          a: 0.75,
        },
      },

      {
        icon: "__base__/graphics/icons/fluid/heavy-oil.png",
        icon_size: 64,
        scale: 0.25,
        shift: [-8, -8],
      },
    ],
    ingredients: [
      {
        type: "fluid",
        name: "heavy-oil",
        amount: 50,
        ignored_by_stats: 50,
      },

      {
        type: "item",
        name: "barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "heavy-oil-barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    allow_quality: false,
    allow_decomposition: false,
    hide_from_player_crafting: true,
    factoriopedia_alternative: "barrel",
    hide_from_signal_gui: false,
  },
  "empty-heavy-oil-barrel": {
    type: "recipe",
    name: "empty-heavy-oil-barrel",
    localised_name: ["recipe-name.empty-filled-barrel", ["fluid-name.heavy-oil"]],
    category: "crafting-with-fluid",
    energy_required: 0.2,
    subgroup: "empty-barrel",
    order: "a[fluid]-b[oil]-d[heavy-oil]",
    enabled: false,
    icons: [
      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-empty.png",
        icon_size: 64,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-empty-side-mask.png",
        icon_size: 64,
        tint: {
          r: 0.5,
          g: 0.13000000000000000444089209850062616169452667236328125,
          b: 0,
          a: 0.75,
        },
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-empty-top-mask.png",
        icon_size: 64,
        tint: {
          r: 0.85,
          g: 0.6,
          b: 0.3,
          a: 0.75,
        },
      },

      {
        icon: "__base__/graphics/icons/fluid/heavy-oil.png",
        icon_size: 64,
        scale: 0.25,
        shift: [7, 8],
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "heavy-oil-barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "fluid",
        name: "heavy-oil",
        amount: 50,
        ignored_by_stats: 50,
      },

      {
        type: "item",
        name: "barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    allow_quality: false,
    allow_decomposition: false,
    hide_from_player_crafting: true,
    factoriopedia_alternative: "barrel",
    hide_from_signal_gui: false,
  },
  "light-oil-barrel": {
    type: "recipe",
    name: "light-oil-barrel",
    localised_name: ["recipe-name.fill-barrel", ["fluid-name.light-oil"]],
    category: "crafting-with-fluid",
    energy_required: 0.2,
    subgroup: "fill-barrel",
    order: "a[fluid]-b[oil]-c[light-oil]",
    enabled: false,
    icons: [
      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-fill.png",
        icon_size: 64,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-fill-side-mask.png",
        icon_size: 64,
        tint: {
          r: 0.5699999999999999289457264239899814128875732421875,
          g: 0.3300000000000000266453525910037569701671600341796875,
          b: 0,
          a: 0.75,
        },
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-fill-top-mask.png",
        icon_size: 64,
        tint: {
          r: 1,
          g: 0.729999999999999982236431605997495353221893310546875,
          b: 0.0700000000000000088817841970012523233890533447265625,
          a: 0.75,
        },
      },

      {
        icon: "__base__/graphics/icons/fluid/light-oil.png",
        icon_size: 64,
        scale: 0.25,
        shift: [-8, -8],
      },
    ],
    ingredients: [
      {
        type: "fluid",
        name: "light-oil",
        amount: 50,
        ignored_by_stats: 50,
      },

      {
        type: "item",
        name: "barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "light-oil-barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    allow_quality: false,
    allow_decomposition: false,
    hide_from_player_crafting: true,
    factoriopedia_alternative: "barrel",
    hide_from_signal_gui: false,
  },
  "empty-light-oil-barrel": {
    type: "recipe",
    name: "empty-light-oil-barrel",
    localised_name: ["recipe-name.empty-filled-barrel", ["fluid-name.light-oil"]],
    category: "crafting-with-fluid",
    energy_required: 0.2,
    subgroup: "empty-barrel",
    order: "a[fluid]-b[oil]-c[light-oil]",
    enabled: false,
    icons: [
      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-empty.png",
        icon_size: 64,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-empty-side-mask.png",
        icon_size: 64,
        tint: {
          r: 0.5699999999999999289457264239899814128875732421875,
          g: 0.3300000000000000266453525910037569701671600341796875,
          b: 0,
          a: 0.75,
        },
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-empty-top-mask.png",
        icon_size: 64,
        tint: {
          r: 1,
          g: 0.729999999999999982236431605997495353221893310546875,
          b: 0.0700000000000000088817841970012523233890533447265625,
          a: 0.75,
        },
      },

      {
        icon: "__base__/graphics/icons/fluid/light-oil.png",
        icon_size: 64,
        scale: 0.25,
        shift: [7, 8],
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "light-oil-barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "fluid",
        name: "light-oil",
        amount: 50,
        ignored_by_stats: 50,
      },

      {
        type: "item",
        name: "barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    allow_quality: false,
    allow_decomposition: false,
    hide_from_player_crafting: true,
    factoriopedia_alternative: "barrel",
    hide_from_signal_gui: false,
  },
  "petroleum-gas-barrel": {
    type: "recipe",
    name: "petroleum-gas-barrel",
    localised_name: ["recipe-name.fill-barrel", ["fluid-name.petroleum-gas"]],
    category: "crafting-with-fluid",
    energy_required: 0.2,
    subgroup: "fill-barrel",
    order: "a[fluid]-b[oil]-b[petroleum-gas]",
    enabled: false,
    icons: [
      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-fill.png",
        icon_size: 64,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-fill-side-mask.png",
        icon_size: 64,
        tint: {
          r: 0.3,
          g: 0.1,
          b: 0.3,
          a: 0.75,
        },
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-fill-top-mask.png",
        icon_size: 64,
        tint: {
          r: 0.8,
          g: 0.8,
          b: 0.8,
          a: 0.75,
        },
      },

      {
        icon: "__base__/graphics/icons/fluid/petroleum-gas.png",
        icon_size: 64,
        scale: 0.25,
        shift: [-8, -8],
      },
    ],
    ingredients: [
      {
        type: "fluid",
        name: "petroleum-gas",
        amount: 50,
        ignored_by_stats: 50,
      },

      {
        type: "item",
        name: "barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "petroleum-gas-barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    allow_quality: false,
    allow_decomposition: false,
    hide_from_player_crafting: true,
    factoriopedia_alternative: "barrel",
    hide_from_signal_gui: false,
  },
  "empty-petroleum-gas-barrel": {
    type: "recipe",
    name: "empty-petroleum-gas-barrel",
    localised_name: ["recipe-name.empty-filled-barrel", ["fluid-name.petroleum-gas"]],
    category: "crafting-with-fluid",
    energy_required: 0.2,
    subgroup: "empty-barrel",
    order: "a[fluid]-b[oil]-b[petroleum-gas]",
    enabled: false,
    icons: [
      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-empty.png",
        icon_size: 64,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-empty-side-mask.png",
        icon_size: 64,
        tint: {
          r: 0.3,
          g: 0.1,
          b: 0.3,
          a: 0.75,
        },
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-empty-top-mask.png",
        icon_size: 64,
        tint: {
          r: 0.8,
          g: 0.8,
          b: 0.8,
          a: 0.75,
        },
      },

      {
        icon: "__base__/graphics/icons/fluid/petroleum-gas.png",
        icon_size: 64,
        scale: 0.25,
        shift: [7, 8],
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "petroleum-gas-barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "fluid",
        name: "petroleum-gas",
        amount: 50,
        ignored_by_stats: 50,
      },

      {
        type: "item",
        name: "barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    allow_quality: false,
    allow_decomposition: false,
    hide_from_player_crafting: true,
    factoriopedia_alternative: "barrel",
    hide_from_signal_gui: false,
  },
  "lubricant-barrel": {
    type: "recipe",
    name: "lubricant-barrel",
    localised_name: ["recipe-name.fill-barrel", ["fluid-name.lubricant"]],
    category: "crafting-with-fluid",
    energy_required: 0.2,
    subgroup: "fill-barrel",
    order: "a[fluid]-b[oil]-e[lubricant]",
    enabled: false,
    icons: [
      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-fill.png",
        icon_size: 64,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-fill-side-mask.png",
        icon_size: 64,
        tint: {
          r: 0.15,
          g: 0.320000000000000017763568394002504646778106689453125,
          b: 0.03,
          a: 0.75,
        },
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-fill-top-mask.png",
        icon_size: 64,
        tint: {
          r: 0.429999999999999982236431605997495353221893310546875,
          g: 0.75,
          b: 0.3100000000000000088817841970012523233890533447265625,
          a: 0.75,
        },
      },

      {
        icon: "__base__/graphics/icons/fluid/lubricant.png",
        icon_size: 64,
        scale: 0.25,
        shift: [-8, -8],
      },
    ],
    ingredients: [
      {
        type: "fluid",
        name: "lubricant",
        amount: 50,
        ignored_by_stats: 50,
      },

      {
        type: "item",
        name: "barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "lubricant-barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    allow_quality: false,
    allow_decomposition: false,
    hide_from_player_crafting: true,
    factoriopedia_alternative: "barrel",
    hide_from_signal_gui: false,
  },
  "empty-lubricant-barrel": {
    type: "recipe",
    name: "empty-lubricant-barrel",
    localised_name: ["recipe-name.empty-filled-barrel", ["fluid-name.lubricant"]],
    category: "crafting-with-fluid",
    energy_required: 0.2,
    subgroup: "empty-barrel",
    order: "a[fluid]-b[oil]-e[lubricant]",
    enabled: false,
    icons: [
      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-empty.png",
        icon_size: 64,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-empty-side-mask.png",
        icon_size: 64,
        tint: {
          r: 0.15,
          g: 0.320000000000000017763568394002504646778106689453125,
          b: 0.03,
          a: 0.75,
        },
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-empty-top-mask.png",
        icon_size: 64,
        tint: {
          r: 0.429999999999999982236431605997495353221893310546875,
          g: 0.75,
          b: 0.3100000000000000088817841970012523233890533447265625,
          a: 0.75,
        },
      },

      {
        icon: "__base__/graphics/icons/fluid/lubricant.png",
        icon_size: 64,
        scale: 0.25,
        shift: [7, 8],
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "lubricant-barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "fluid",
        name: "lubricant",
        amount: 50,
        ignored_by_stats: 50,
      },

      {
        type: "item",
        name: "barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    allow_quality: false,
    allow_decomposition: false,
    hide_from_player_crafting: true,
    factoriopedia_alternative: "barrel",
    hide_from_signal_gui: false,
  },
  "fluoroketone-cold-barrel": {
    type: "recipe",
    name: "fluoroketone-cold-barrel",
    localised_name: ["recipe-name.fill-barrel", ["fluid-name.fluoroketone-cold"]],
    category: "crafting-with-fluid",
    energy_required: 0.2,
    subgroup: "fill-barrel",
    order: "b[new-fluid]-e[aquilo]-e[fluoroketone-cold]",
    enabled: false,
    icons: [
      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-fill.png",
        icon_size: 64,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-fill-side-mask.png",
        icon_size: 64,
        tint: {
          r: 0,
          g: 0.3,
          b: 0.15,
          a: 0.75,
        },
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-fill-top-mask.png",
        icon_size: 64,
        tint: {
          r: 0.1,
          g: 0.7,
          b: 0.4,
          a: 0.75,
        },
      },

      {
        icon: "__space-age__/graphics/icons/fluid/fluoroketone-cold.png",
        icon_size: 64,
        scale: 0.25,
        shift: [-8, -8],
      },
    ],
    ingredients: [
      {
        type: "fluid",
        name: "fluoroketone-cold",
        amount: 50,
        ignored_by_stats: 50,
      },

      {
        type: "item",
        name: "barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "fluoroketone-cold-barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    allow_quality: false,
    allow_decomposition: false,
    hide_from_player_crafting: true,
    factoriopedia_alternative: "barrel",
    hide_from_signal_gui: false,
  },
  "empty-fluoroketone-cold-barrel": {
    type: "recipe",
    name: "empty-fluoroketone-cold-barrel",
    localised_name: ["recipe-name.empty-filled-barrel", ["fluid-name.fluoroketone-cold"]],
    category: "crafting-with-fluid",
    energy_required: 0.2,
    subgroup: "empty-barrel",
    order: "b[new-fluid]-e[aquilo]-e[fluoroketone-cold]",
    enabled: false,
    icons: [
      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-empty.png",
        icon_size: 64,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-empty-side-mask.png",
        icon_size: 64,
        tint: {
          r: 0,
          g: 0.3,
          b: 0.15,
          a: 0.75,
        },
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-empty-top-mask.png",
        icon_size: 64,
        tint: {
          r: 0.1,
          g: 0.7,
          b: 0.4,
          a: 0.75,
        },
      },

      {
        icon: "__space-age__/graphics/icons/fluid/fluoroketone-cold.png",
        icon_size: 64,
        scale: 0.25,
        shift: [7, 8],
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "fluoroketone-cold-barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "fluid",
        name: "fluoroketone-cold",
        amount: 50,
        ignored_by_stats: 50,
      },

      {
        type: "item",
        name: "barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    allow_quality: false,
    allow_decomposition: false,
    hide_from_player_crafting: true,
    factoriopedia_alternative: "barrel",
    hide_from_signal_gui: false,
  },
  "fluoroketone-hot-barrel": {
    type: "recipe",
    name: "fluoroketone-hot-barrel",
    localised_name: ["recipe-name.fill-barrel", ["fluid-name.fluoroketone-hot"]],
    category: "crafting-with-fluid",
    energy_required: 0.2,
    subgroup: "fill-barrel",
    order: "b[new-fluid]-e[aquilo]-d[fluoroketone-hot]",
    enabled: false,
    icons: [
      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-fill.png",
        icon_size: 64,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-fill-side-mask.png",
        icon_size: 64,
        tint: {
          r: 0.3,
          g: 0.3,
          b: 0.1,
          a: 0.75,
        },
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-fill-top-mask.png",
        icon_size: 64,
        tint: {
          r: 0.4,
          g: 0.7,
          b: 0.35,
          a: 0.75,
        },
      },

      {
        icon: "__space-age__/graphics/icons/fluid/fluoroketone-hot.png",
        icon_size: 64,
        scale: 0.25,
        shift: [-8, -8],
      },
    ],
    ingredients: [
      {
        type: "fluid",
        name: "fluoroketone-hot",
        amount: 50,
        ignored_by_stats: 50,
      },

      {
        type: "item",
        name: "barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "fluoroketone-hot-barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    allow_quality: false,
    allow_decomposition: false,
    hide_from_player_crafting: true,
    factoriopedia_alternative: "barrel",
    hide_from_signal_gui: false,
  },
  "empty-fluoroketone-hot-barrel": {
    type: "recipe",
    name: "empty-fluoroketone-hot-barrel",
    localised_name: ["recipe-name.empty-filled-barrel", ["fluid-name.fluoroketone-hot"]],
    category: "crafting-with-fluid",
    energy_required: 0.2,
    subgroup: "empty-barrel",
    order: "b[new-fluid]-e[aquilo]-d[fluoroketone-hot]",
    enabled: false,
    icons: [
      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-empty.png",
        icon_size: 64,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-empty-side-mask.png",
        icon_size: 64,
        tint: {
          r: 0.3,
          g: 0.3,
          b: 0.1,
          a: 0.75,
        },
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-empty-top-mask.png",
        icon_size: 64,
        tint: {
          r: 0.4,
          g: 0.7,
          b: 0.35,
          a: 0.75,
        },
      },

      {
        icon: "__space-age__/graphics/icons/fluid/fluoroketone-hot.png",
        icon_size: 64,
        scale: 0.25,
        shift: [7, 8],
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "fluoroketone-hot-barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "fluid",
        name: "fluoroketone-hot",
        amount: 50,
        ignored_by_stats: 50,
      },

      {
        type: "item",
        name: "barrel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    allow_quality: false,
    allow_decomposition: false,
    hide_from_player_crafting: true,
    factoriopedia_alternative: "barrel",
    hide_from_signal_gui: false,
  },
  "bpsb-loader": {
    type: "recipe",
    name: "bpsb-loader",
    localised_name: ["entity-name.loader"],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "loader",
        amount: 1,
      },
    ],
    hide_from_signal_gui: true,
  },
  "bpsb-fast-loader": {
    type: "recipe",
    name: "bpsb-fast-loader",
    localised_name: ["entity-name.fast-loader"],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "fast-loader",
        amount: 1,
      },
    ],
    hide_from_signal_gui: true,
  },
  "bpsb-express-loader": {
    type: "recipe",
    name: "bpsb-express-loader",
    localised_name: ["entity-name.express-loader"],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "express-loader",
        amount: 1,
      },
    ],
    hide_from_signal_gui: true,
  },
  "bpsb-electric-energy-interface": {
    type: "recipe",
    name: "bpsb-electric-energy-interface",
    localised_name: ["entity-name.electric-energy-interface"],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "electric-energy-interface",
        amount: 1,
      },
    ],
    hide_from_signal_gui: true,
  },
  "bpsb-infinity-chest": {
    type: "recipe",
    name: "bpsb-infinity-chest",
    localised_name: ["entity-name.infinity-chest"],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "infinity-chest",
        amount: 1,
      },
    ],
    hide_from_signal_gui: true,
  },
  "bpsb-infinity-pipe": {
    type: "recipe",
    name: "bpsb-infinity-pipe",
    localised_name: ["entity-name.infinity-pipe"],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "infinity-pipe",
        amount: 1,
      },
    ],
    hide_from_signal_gui: true,
  },
  "speed-module-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "advanced-circuit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "speed-module",
        amount: 1,
      },
    ],
    energy_required: 0.9375,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "speed-module-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.speed-module"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/speed-module.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "speed-module-2-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "speed-module",
        amount: 1,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "speed-module-2",
        amount: 1,
      },
    ],
    energy_required: 1.875,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "speed-module-2-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.speed-module-2"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/speed-module-2.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "speed-module-3-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "speed-module-2",
        amount: 1,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "tungsten-carbide",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "speed-module-3",
        amount: 1,
      },
    ],
    energy_required: 3.75,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "speed-module-3-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.speed-module-3"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/speed-module-3.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "productivity-module-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "advanced-circuit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "productivity-module",
        amount: 1,
      },
    ],
    energy_required: 0.9375,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "productivity-module-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.productivity-module"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/productivity-module.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "productivity-module-2-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "productivity-module",
        amount: 1,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "productivity-module-2",
        amount: 1,
      },
    ],
    energy_required: 1.875,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "productivity-module-2-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.productivity-module-2"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/productivity-module-2.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "productivity-module-3-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "productivity-module-2",
        amount: 1,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "biter-egg",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "productivity-module-3",
        amount: 1,
      },
    ],
    energy_required: 3.75,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "productivity-module-3-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.productivity-module-3"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/productivity-module-3.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "efficiency-module-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "advanced-circuit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "efficiency-module",
        amount: 1,
      },
    ],
    energy_required: 0.9375,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "efficiency-module-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.efficiency-module"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/efficiency-module.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "efficiency-module-2-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "efficiency-module",
        amount: 1,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "efficiency-module-2",
        amount: 1,
      },
    ],
    energy_required: 1.875,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "efficiency-module-2-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.efficiency-module-2"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/efficiency-module-2.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "efficiency-module-3-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "efficiency-module-2",
        amount: 1,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "spoilage",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "efficiency-module-3",
        amount: 1,
      },
    ],
    energy_required: 3.75,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "efficiency-module-3-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.efficiency-module-3"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/efficiency-module-3.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "bulk-inserter-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 3.75,
        extra_count_fraction: 0.75,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 3.75,
        extra_count_fraction: 0.75,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "fast-inserter",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "bulk-inserter",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "bulk-inserter-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.bulk-inserter"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/bulk-inserter.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "barrel-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-plate",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "barrel",
        amount: 1,
      },
    ],
    energy_required: 0.0625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "barrel-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.barrel"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/empty-barrel.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "night-vision-equipment-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "advanced-circuit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "night-vision-equipment",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "night-vision-equipment-recycling",
    localised_name: ["recipe-name.recycling", ["equipment-name.night-vision-equipment"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/night-vision-equipment.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "belt-immunity-equipment-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "advanced-circuit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "belt-immunity-equipment",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "belt-immunity-equipment-recycling",
    localised_name: ["recipe-name.recycling", ["equipment-name.belt-immunity-equipment"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/belt-immunity-equipment.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "energy-shield-equipment-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "advanced-circuit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "energy-shield-equipment",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "energy-shield-equipment-recycling",
    localised_name: ["recipe-name.recycling", ["equipment-name.energy-shield-equipment"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/energy-shield-equipment.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "energy-shield-mk2-equipment-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "energy-shield-equipment",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "low-density-structure",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "energy-shield-mk2-equipment",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "energy-shield-mk2-equipment-recycling",
    localised_name: ["recipe-name.recycling", ["equipment-name.energy-shield-mk2-equipment"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/energy-shield-mk2-equipment.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "battery-equipment-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "battery",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "battery-equipment",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "battery-equipment-recycling",
    localised_name: ["recipe-name.recycling", ["equipment-name.battery-equipment"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/battery-equipment.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "battery-mk2-equipment-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "battery-equipment",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 3.75,
        extra_count_fraction: 0.75,
      },

      {
        type: "item",
        name: "low-density-structure",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "battery-mk2-equipment",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "battery-mk2-equipment-recycling",
    localised_name: ["recipe-name.recycling", ["equipment-name.battery-mk2-equipment"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/battery-mk2-equipment.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "solar-panel-equipment-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "solar-panel",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "solar-panel-equipment",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "solar-panel-equipment-recycling",
    localised_name: ["recipe-name.recycling", ["equipment-name.solar-panel-equipment"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/solar-panel-equipment.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "fission-reactor-equipment-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "processing-unit",
        amount: 50,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "low-density-structure",
        amount: 12.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "uranium-fuel-cell",
        amount: 1,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "fission-reactor-equipment",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "fission-reactor-equipment-recycling",
    localised_name: ["recipe-name.recycling", ["equipment-name.fission-reactor-equipment"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/fission-reactor-equipment.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "personal-laser-defense-equipment-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "processing-unit",
        amount: 5,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "low-density-structure",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "laser-turret",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "personal-laser-defense-equipment",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "personal-laser-defense-equipment-recycling",
    localised_name: ["recipe-name.recycling", ["equipment-name.personal-laser-defense-equipment"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/personal-laser-defense-equipment.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "discharge-defense-equipment-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "processing-unit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 5,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "laser-turret",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "discharge-defense-equipment",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "discharge-defense-equipment-recycling",
    localised_name: ["recipe-name.recycling", ["equipment-name.discharge-defense-equipment"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/discharge-defense-equipment.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "exoskeleton-equipment-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "processing-unit",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "electric-engine-unit",
        amount: 7.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 5,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "exoskeleton-equipment",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "exoskeleton-equipment-recycling",
    localised_name: ["recipe-name.recycling", ["equipment-name.exoskeleton-equipment"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/exoskeleton-equipment.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "personal-roboport-equipment-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "advanced-circuit",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 10,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 5,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "battery",
        amount: 11.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "personal-roboport-equipment",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "personal-roboport-equipment-recycling",
    localised_name: ["recipe-name.recycling", ["equipment-name.personal-roboport-equipment"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/personal-roboport-equipment.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "personal-roboport-mk2-equipment-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "personal-roboport-equipment",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 12.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "superconductor",
        amount: 12.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "personal-roboport-mk2-equipment",
        amount: 1,
      },
    ],
    energy_required: 1.25,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "personal-roboport-mk2-equipment-recycling",
    localised_name: ["recipe-name.recycling", ["equipment-name.personal-roboport-mk2-equipment"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/personal-roboport-mk2-equipment.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "laser-turret-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-plate",
        amount: 5,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 5,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "battery",
        amount: 3,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "laser-turret",
        amount: 1,
      },
    ],
    energy_required: 1.25,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "laser-turret-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.laser-turret"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/laser-turret.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "flamethrower-turret-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-plate",
        amount: 7.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 3.75,
        extra_count_fraction: 0.75,
      },

      {
        type: "item",
        name: "pipe",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "engine-unit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "flamethrower-turret",
        amount: 1,
      },
    ],
    energy_required: 1.25,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "flamethrower-turret-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.flamethrower-turret"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/flamethrower-turret.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "artillery-turret-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "tungsten-plate",
        amount: 15,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "refined-concrete",
        amount: 15,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 10,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "artillery-turret",
        amount: 1,
      },
    ],
    energy_required: 2.5,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "artillery-turret-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.artillery-turret"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/artillery-turret.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "gun-turret-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "copper-plate",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 5,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "gun-turret",
        amount: 1,
      },
    ],
    energy_required: 0.5,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "gun-turret-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.gun-turret"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/gun-turret.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "wooden-chest-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "wood",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "wooden-chest",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "wooden-chest-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.wooden-chest"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/wooden-chest.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "display-panel-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "iron-plate",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "display-panel",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "display-panel-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.display-panel"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/display-panel.png",
        icon_size: 64,
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "iron-stick-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "iron-plate",
        amount: 0.125,
        extra_count_fraction: 0.125,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "iron-stick",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "iron-stick-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.iron-stick"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/iron-stick.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "stone-furnace-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "stone",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "stone-furnace",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "stone-furnace-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.stone-furnace"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/stone-furnace.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "boiler-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "stone-furnace",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "pipe",
        amount: 1,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "boiler",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "boiler-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.boiler"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/boiler.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "steam-engine-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 2,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "pipe",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "steam-engine",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "steam-engine-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.steam-engine"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/steam-engine.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "iron-gear-wheel-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "iron-plate",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "iron-gear-wheel-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.iron-gear-wheel"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/iron-gear-wheel.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "electronic-circuit-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "iron-plate",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "copper-cable",
        amount: 0.75,
        extra_count_fraction: 0.75,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "electronic-circuit",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "electronic-circuit-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.electronic-circuit"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/electronic-circuit.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "transport-belt-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "iron-plate",
        amount: 0.125,
        extra_count_fraction: 0.125,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 0.125,
        extra_count_fraction: 0.125,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "transport-belt",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "transport-belt-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.transport-belt"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/transport-belt.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "electric-mining-drill-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "electronic-circuit",
        amount: 0.75,
        extra_count_fraction: 0.75,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "electric-mining-drill",
        amount: 1,
      },
    ],
    energy_required: 0.125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "electric-mining-drill-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.electric-mining-drill"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/electric-mining-drill.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "burner-mining-drill-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 0.75,
        extra_count_fraction: 0.75,
      },

      {
        type: "item",
        name: "stone-furnace",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 0.75,
        extra_count_fraction: 0.75,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "burner-mining-drill",
        amount: 1,
      },
    ],
    energy_required: 0.125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "burner-mining-drill-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.burner-mining-drill"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/burner-mining-drill.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "inserter-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "electronic-circuit",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "inserter",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "inserter-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.inserter"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/inserter.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "fast-inserter-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "electronic-circuit",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "inserter",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "fast-inserter",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "fast-inserter-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.fast-inserter"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/fast-inserter.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "long-handed-inserter-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "inserter",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "long-handed-inserter",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "long-handed-inserter-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.long-handed-inserter"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/long-handed-inserter.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "burner-inserter-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "iron-plate",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "burner-inserter",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "burner-inserter-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.burner-inserter"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/burner-inserter.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "pipe-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "iron-plate",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "pipe",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "pipe-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.pipe"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/pipe.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "offshore-pump-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "pipe",
        amount: 0.75,
        extra_count_fraction: 0.75,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "offshore-pump",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "offshore-pump-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.offshore-pump"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/offshore-pump.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "copper-cable-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "copper-plate",
        amount: 0.125,
        extra_count_fraction: 0.125,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "copper-cable",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "copper-cable-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.copper-cable"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/copper-cable.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "small-electric-pole-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "wood",
        amount: 0.125,
        extra_count_fraction: 0.125,
      },

      {
        type: "item",
        name: "copper-cable",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "small-electric-pole",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "small-electric-pole-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.small-electric-pole"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/small-electric-pole.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "pistol-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "copper-plate",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "pistol",
        amount: 1,
      },
    ],
    energy_required: 0.3125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "pistol-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.pistol"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/pistol.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "submachine-gun-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "copper-plate",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "submachine-gun",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "submachine-gun-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.submachine-gun"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/submachine-gun.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "firearm-magazine-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "iron-plate",
        amount: 1,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "firearm-magazine",
        amount: 1,
      },
    ],
    energy_required: 0.0625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "firearm-magazine-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.firearm-magazine"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/firearm-magazine.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "light-armor-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "iron-plate",
        amount: 10,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "light-armor",
        amount: 1,
      },
    ],
    energy_required: 0.1875,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "light-armor-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.light-armor"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/light-armor.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "radar-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "electronic-circuit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "radar",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "radar-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.radar"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/radar.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "small-lamp-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "electronic-circuit",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "copper-cable",
        amount: 0.75,
        extra_count_fraction: 0.75,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "small-lamp",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "small-lamp-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.small-lamp"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/small-lamp.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "pipe-to-ground-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "pipe",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 0.625,
        extra_count_fraction: 0.625,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "pipe-to-ground",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "pipe-to-ground-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.pipe-to-ground"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/pipe-to-ground.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "assembling-machine-1-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "electronic-circuit",
        amount: 0.75,
        extra_count_fraction: 0.75,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 2.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "assembling-machine-1",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "assembling-machine-1-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.assembling-machine-1"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/assembling-machine-1.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "repair-pack-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "electronic-circuit",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "repair-pack",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "repair-pack-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.repair-pack"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/repair-pack.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "lab-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "electronic-circuit",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "transport-belt",
        amount: 1,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "lab",
        amount: 1,
      },
    ],
    energy_required: 0.125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "lab-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.lab"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/lab.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "stone-wall-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "stone-brick",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "stone-wall",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "stone-wall-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.stone-wall"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/wall.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "assembling-machine-2-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-plate",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 0.75,
        extra_count_fraction: 0.75,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "assembling-machine-1",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "assembling-machine-2",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "assembling-machine-2-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.assembling-machine-2"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/assembling-machine-2.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "splitter-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "electronic-circuit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "transport-belt",
        amount: 1,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "splitter",
        amount: 1,
      },
    ],
    energy_required: 0.0625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "splitter-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.splitter"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/splitter.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "underground-belt-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "iron-plate",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "transport-belt",
        amount: 0.625,
        extra_count_fraction: 0.625,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "underground-belt",
        amount: 1,
      },
    ],
    energy_required: 0.0625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "underground-belt-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.underground-belt"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/underground-belt.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "loader-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "inserter",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "transport-belt",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "loader",
        amount: 1,
      },
    ],
    energy_required: 0.0625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "loader-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.loader"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/loader.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "car-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "engine-unit",
        amount: 2,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 5,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "car",
        amount: 1,
      },
    ],
    energy_required: 0.125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "car-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.car"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/car.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "engine-unit-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-plate",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "pipe",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "engine-unit",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "engine-unit-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.engine-unit"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/engine-unit.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "iron-chest-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "iron-plate",
        amount: 2,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "iron-chest",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "iron-chest-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.iron-chest"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/iron-chest.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "big-electric-pole-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "iron-stick",
        amount: 2,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "copper-cable",
        amount: 1,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "big-electric-pole",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "big-electric-pole-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.big-electric-pole"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/big-electric-pole.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "medium-electric-pole-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "iron-stick",
        amount: 1,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "copper-cable",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "medium-electric-pole",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "medium-electric-pole-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.medium-electric-pole"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/medium-electric-pole.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "shotgun-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "iron-plate",
        amount: 3.75,
        extra_count_fraction: 0.75,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "copper-plate",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "wood",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "shotgun",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "shotgun-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.shotgun"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/shotgun.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "shotgun-shell-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "copper-plate",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "shotgun-shell",
        amount: 1,
      },
    ],
    energy_required: 0.1875,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "shotgun-shell-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.shotgun-shell"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/shotgun-shell.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "piercing-rounds-magazine-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "firearm-magazine",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "copper-plate",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "piercing-rounds-magazine",
        amount: 1,
      },
    ],
    energy_required: 0.1875,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "piercing-rounds-magazine-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.piercing-rounds-magazine"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/piercing-rounds-magazine.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "grenade-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "iron-plate",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "coal",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "grenade",
        amount: 1,
      },
    ],
    energy_required: 0.5,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "grenade-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.grenade"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/grenade.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "steel-furnace-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-plate",
        amount: 1.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "stone-brick",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "steel-furnace",
        amount: 1,
      },
    ],
    energy_required: 0.1875,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "steel-furnace-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.steel-furnace"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/steel-furnace.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "gate-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "stone-wall",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "gate",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "gate-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.gate"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/gate.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "heavy-armor-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "copper-plate",
        amount: 25,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 12.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "heavy-armor",
        amount: 1,
      },
    ],
    energy_required: 0.5,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "heavy-armor-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.heavy-armor"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/heavy-armor.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "steel-chest-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-plate",
        amount: 2,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "steel-chest",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "steel-chest-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.steel-chest"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/steel-chest.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "fast-underground-belt-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 5,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "underground-belt",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "fast-underground-belt",
        amount: 1,
      },
    ],
    energy_required: 0.125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "fast-underground-belt-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.fast-underground-belt"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/fast-underground-belt.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "fast-splitter-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "splitter",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "fast-splitter",
        amount: 1,
      },
    ],
    energy_required: 0.125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "fast-splitter-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.fast-splitter"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/fast-splitter.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "concrete-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "stone-brick",
        amount: 0.125,
        extra_count_fraction: 0.125,
      },

      {
        type: "item",
        name: "iron-ore",
        amount: 0.025,
        extra_count_fraction: 0.025,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "concrete",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "concrete-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.concrete"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/concrete.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.85, 0.85, 0.85],
      quaternary: [0, 0.34000000000000003552713678800500929355621337890625, 0.6],
    },
  },
  "hazard-concrete-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "concrete",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "hazard-concrete",
        amount: 1,
      },
    ],
    energy_required: 0.015625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "hazard-concrete-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.hazard-concrete"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/hazard-concrete.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "refined-concrete-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "concrete",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "iron-stick",
        amount: 0.2,
        extra_count_fraction: 0.2,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 0.025,
        extra_count_fraction: 0.025,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "refined-concrete",
        amount: 1,
      },
    ],
    energy_required: 0.9375,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "refined-concrete-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.refined-concrete"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/refined-concrete.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.85, 0.85, 0.85],
      quaternary: [0, 0.34000000000000003552713678800500929355621337890625, 0.6],
    },
  },
  "refined-hazard-concrete-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "refined-concrete",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "refined-hazard-concrete",
        amount: 1,
      },
    ],
    energy_required: 0.015625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "refined-hazard-concrete-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.refined-hazard-concrete"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/refined-hazard-concrete.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "fast-transport-belt-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "transport-belt",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "fast-transport-belt",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "fast-transport-belt-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.fast-transport-belt"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/fast-transport-belt.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "solar-panel-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-plate",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 3.75,
        extra_count_fraction: 0.75,
      },

      {
        type: "item",
        name: "copper-plate",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "solar-panel",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "solar-panel-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.solar-panel"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/solar-panel.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "rail-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "stone",
        amount: 0.125,
        extra_count_fraction: 0.125,
      },

      {
        type: "item",
        name: "iron-stick",
        amount: 0.125,
        extra_count_fraction: 0.125,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 0.125,
        extra_count_fraction: 0.125,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "rail",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "rail-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.rail"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/rail.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "locomotive-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "engine-unit",
        amount: 5,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 7.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "locomotive",
        amount: 1,
      },
    ],
    energy_required: 0.25,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "locomotive-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.locomotive"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/locomotive.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "cargo-wagon-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 5,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 5,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "cargo-wagon",
        amount: 1,
      },
    ],
    energy_required: 0.0625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "cargo-wagon-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.cargo-wagon"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/cargo-wagon.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "rail-signal-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "electronic-circuit",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "rail-signal",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "rail-signal-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.rail-signal"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/rail-signal.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "rail-chain-signal-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "electronic-circuit",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "rail-chain-signal",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "rail-chain-signal-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.rail-chain-signal"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/rail-chain-signal.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "train-stop-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "electronic-circuit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 1.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "iron-stick",
        amount: 1.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 0.75,
        extra_count_fraction: 0.75,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "train-stop",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "train-stop-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.train-stop"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/train-stop.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "arithmetic-combinator-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "copper-cable",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "arithmetic-combinator",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "arithmetic-combinator-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.arithmetic-combinator"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/arithmetic-combinator.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "decider-combinator-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "copper-cable",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "decider-combinator",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "decider-combinator-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.decider-combinator"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/decider-combinator.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "constant-combinator-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "copper-cable",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "constant-combinator",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "constant-combinator-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.constant-combinator"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/constant-combinator.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "selector-combinator-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "advanced-circuit",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "decider-combinator",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "selector-combinator",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "selector-combinator-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.selector-combinator"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/selector-combinator.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "power-switch-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "iron-plate",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "copper-cable",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "power-switch",
        amount: 1,
      },
    ],
    energy_required: 0.125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "power-switch-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.power-switch"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/power-switch.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "programmable-speaker-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "iron-plate",
        amount: 0.75,
        extra_count_fraction: 0.75,
      },

      {
        type: "item",
        name: "iron-stick",
        amount: 1,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "copper-cable",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 1,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "programmable-speaker",
        amount: 1,
      },
    ],
    energy_required: 0.125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "programmable-speaker-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.programmable-speaker"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/programmable-speaker.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "poison-capsule-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-plate",
        amount: 0.75,
        extra_count_fraction: 0.75,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 0.75,
        extra_count_fraction: 0.75,
      },

      {
        type: "item",
        name: "coal",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "poison-capsule",
        amount: 1,
      },
    ],
    energy_required: 0.5,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "poison-capsule-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.poison-capsule"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/poison-capsule.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "slowdown-capsule-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-plate",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "coal",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "slowdown-capsule",
        amount: 1,
      },
    ],
    energy_required: 0.5,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "slowdown-capsule-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.slowdown-capsule"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/slowdown-capsule.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "cluster-grenade-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "grenade",
        amount: 1.75,
        extra_count_fraction: 0.75,
      },

      {
        type: "item",
        name: "explosives",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "cluster-grenade",
        amount: 1,
      },
    ],
    energy_required: 0.5,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "cluster-grenade-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.cluster-grenade"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/cluster-grenade.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "defender-capsule-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "piercing-rounds-magazine",
        amount: 0.75,
        extra_count_fraction: 0.75,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 0.75,
        extra_count_fraction: 0.75,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 0.75,
        extra_count_fraction: 0.75,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "defender-capsule",
        amount: 1,
      },
    ],
    energy_required: 0.5,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "defender-capsule-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.defender-capsule"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/defender.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "distractor-capsule-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "defender-capsule",
        amount: 1,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 0.75,
        extra_count_fraction: 0.75,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "distractor-capsule",
        amount: 1,
      },
    ],
    energy_required: 0.9375,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "distractor-capsule-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.distractor-capsule"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/distractor.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "destroyer-capsule-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "distractor-capsule",
        amount: 1,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 1,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "destroyer-capsule",
        amount: 1,
      },
    ],
    energy_required: 0.9375,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "destroyer-capsule-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.destroyer-capsule"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/destroyer.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "cliff-explosives-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "explosives",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "calcite",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "grenade",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "barrel",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "cliff-explosives",
        amount: 1,
      },
    ],
    energy_required: 0.5,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "cliff-explosives-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.cliff-explosives"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/cliff-explosives.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "uranium-rounds-magazine-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "piercing-rounds-magazine",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "uranium-238",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "uranium-rounds-magazine",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "uranium-rounds-magazine-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.uranium-rounds-magazine"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/uranium-rounds-magazine.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "rocket-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "explosives",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "rocket",
        amount: 1,
      },
    ],
    energy_required: 0.25,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "rocket-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.rocket"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/rocket.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "explosive-rocket-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "rocket",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "explosives",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "explosive-rocket",
        amount: 1,
      },
    ],
    energy_required: 0.5,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "explosive-rocket-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.explosive-rocket"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/explosive-rocket.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "atomic-bomb-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "processing-unit",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "explosives",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "uranium-235",
        amount: 25,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "atomic-bomb",
        amount: 1,
      },
    ],
    energy_required: 3.125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "atomic-bomb-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.atomic-bomb"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/atomic-bomb.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "piercing-shotgun-shell-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "shotgun-shell",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "copper-plate",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "piercing-shotgun-shell",
        amount: 1,
      },
    ],
    energy_required: 0.5,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "piercing-shotgun-shell-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.piercing-shotgun-shell"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/piercing-shotgun-shell.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "cannon-shell-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-plate",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "plastic-bar",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "explosives",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "cannon-shell",
        amount: 1,
      },
    ],
    energy_required: 0.5,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "cannon-shell-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.cannon-shell"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/cannon-shell.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "explosive-cannon-shell-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-plate",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "plastic-bar",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "explosives",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "explosive-cannon-shell",
        amount: 1,
      },
    ],
    energy_required: 0.5,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "explosive-cannon-shell-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.explosive-cannon-shell"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/explosive-cannon-shell.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "uranium-cannon-shell-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "cannon-shell",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "uranium-238",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "uranium-cannon-shell",
        amount: 1,
      },
    ],
    energy_required: 0.75,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "uranium-cannon-shell-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.uranium-cannon-shell"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/uranium-cannon-shell.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "explosive-uranium-cannon-shell-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "explosive-cannon-shell",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "uranium-238",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "explosive-uranium-cannon-shell",
        amount: 1,
      },
    ],
    energy_required: 0.75,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "explosive-uranium-cannon-shell-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.explosive-uranium-cannon-shell"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/explosive-uranium-cannon-shell.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "artillery-shell-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "radar",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "calcite",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "tungsten-plate",
        amount: 1,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "explosives",
        amount: 2,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "artillery-shell",
        amount: 1,
      },
    ],
    energy_required: 0.9375,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "artillery-shell-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.artillery-shell"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/artillery-shell.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "express-transport-belt-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "fast-transport-belt",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "express-transport-belt",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "express-transport-belt-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.express-transport-belt"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/express-transport-belt.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [
        0.71500000000000003552713678800500929355621337890625, 0.875,
        0.6550000000000000710542735760100185871124267578125,
      ],
      quaternary: [0.15, 0.320000000000000017763568394002504646778106689453125, 0.03],
    },
  },
  "assembling-machine-3-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "assembling-machine-2",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "speed-module",
        amount: 1,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "assembling-machine-3",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "assembling-machine-3-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.assembling-machine-3"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/assembling-machine-3.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "tank-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "engine-unit",
        amount: 8,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 12.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 3.75,
        extra_count_fraction: 0.75,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "tank",
        amount: 1,
      },
    ],
    energy_required: 0.3125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "tank-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.tank"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/tank.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "spidertron-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "exoskeleton-equipment",
        amount: 1,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "fission-reactor-equipment",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "rocket-turret",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "radar",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "raw-fish",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "spidertron",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "spidertron-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.spidertron"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/spidertron.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "fluid-wagon-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 4,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "pipe",
        amount: 2,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "storage-tank",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "fluid-wagon",
        amount: 1,
      },
    ],
    energy_required: 0.09375,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "fluid-wagon-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.fluid-wagon"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/fluid-wagon.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "artillery-wagon-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "engine-unit",
        amount: 15,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "tungsten-plate",
        amount: 15,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "refined-concrete",
        amount: 15,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 10,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "artillery-wagon",
        amount: 1,
      },
    ],
    energy_required: 0.25,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "artillery-wagon-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.artillery-wagon"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/artillery-wagon.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "modular-armor-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "advanced-circuit",
        amount: 7.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 12.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "modular-armor",
        amount: 1,
      },
    ],
    energy_required: 0.9375,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "modular-armor-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.modular-armor"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/modular-armor.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "power-armor-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "processing-unit",
        amount: 10,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "electric-engine-unit",
        amount: 5,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 10,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "power-armor",
        amount: 1,
      },
    ],
    energy_required: 1.25,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "power-armor-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.power-armor"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/power-armor.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "power-armor-mk2-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "efficiency-module",
        amount: 25,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "speed-module",
        amount: 25,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 15,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "electric-engine-unit",
        amount: 10,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "low-density-structure",
        amount: 7.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "power-armor-mk2",
        amount: 1,
      },
    ],
    energy_required: 1.5625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "power-armor-mk2-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.power-armor-mk2"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/power-armor-mk2.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "flamethrower-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-plate",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "flamethrower",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "flamethrower-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.flamethrower"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/flamethrower.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "land-mine-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-plate",
        amount: 0.0625,
        extra_count_fraction: 0.0625,
      },

      {
        type: "item",
        name: "explosives",
        amount: 0.125,
        extra_count_fraction: 0.125,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "land-mine",
        amount: 1,
      },
    ],
    energy_required: 0.3125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "land-mine-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.land-mine"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/land-mine.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "rocket-launcher-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "iron-plate",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "rocket-launcher",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "rocket-launcher-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.rocket-launcher"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/rocket-launcher.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "combat-shotgun-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-plate",
        amount: 3.75,
        extra_count_fraction: 0.75,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "copper-plate",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "wood",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "combat-shotgun",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "combat-shotgun-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.combat-shotgun"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/combat-shotgun.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "express-underground-belt-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 10,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "fast-underground-belt",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "express-underground-belt",
        amount: 1,
      },
    ],
    energy_required: 0.125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "express-underground-belt-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.express-underground-belt"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/express-underground-belt.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [
        0.71500000000000003552713678800500929355621337890625, 0.875,
        0.6550000000000000710542735760100185871124267578125,
      ],
      quaternary: [0.15, 0.320000000000000017763568394002504646778106689453125, 0.03],
    },
  },
  "fast-loader-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "fast-transport-belt",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "loader",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "fast-loader",
        amount: 1,
      },
    ],
    energy_required: 0.1875,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "fast-loader-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.fast-loader"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/fast-loader.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "express-loader-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "express-transport-belt",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "fast-loader",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "express-loader",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "express-loader-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.express-loader"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/express-loader.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "express-splitter-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "fast-splitter",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "express-splitter",
        amount: 1,
      },
    ],
    energy_required: 0.125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "express-splitter-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.express-splitter"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/express-splitter.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [
        0.71500000000000003552713678800500929355621337890625, 0.875,
        0.6550000000000000710542735760100185871124267578125,
      ],
      quaternary: [0.15, 0.320000000000000017763568394002504646778106689453125, 0.03],
    },
  },
  "advanced-circuit-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "electronic-circuit",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "plastic-bar",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "copper-cable",
        amount: 1,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "advanced-circuit",
        amount: 1,
      },
    ],
    energy_required: 0.375,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "advanced-circuit-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.advanced-circuit"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/advanced-circuit.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "processing-unit-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "electronic-circuit",
        amount: 5,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "processing-unit",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "processing-unit-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.processing-unit"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/processing-unit.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.85, 1, 0.55],
      quaternary: [0.75, 0.65, 0.1],
    },
  },
  "logistic-robot-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "flying-robot-frame",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "logistic-robot",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "logistic-robot-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.logistic-robot"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/logistic-robot.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "construction-robot-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "flying-robot-frame",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "construction-robot",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "construction-robot-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.construction-robot"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/construction-robot.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "passive-provider-chest-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-chest",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 0.75,
        extra_count_fraction: 0.75,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "passive-provider-chest",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "passive-provider-chest-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.passive-provider-chest"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/passive-provider-chest.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "active-provider-chest-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-chest",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 0.75,
        extra_count_fraction: 0.75,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "active-provider-chest",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "active-provider-chest-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.active-provider-chest"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/active-provider-chest.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "storage-chest-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-chest",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 0.75,
        extra_count_fraction: 0.75,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "storage-chest",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "storage-chest-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.storage-chest"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/storage-chest.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "buffer-chest-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-chest",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 0.75,
        extra_count_fraction: 0.75,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "buffer-chest",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "buffer-chest-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.buffer-chest"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/buffer-chest.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "requester-chest-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-chest",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 0.75,
        extra_count_fraction: 0.75,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "requester-chest",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "requester-chest-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.requester-chest"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/requester-chest.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "rocket-silo-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-plate",
        amount: 250,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "concrete",
        amount: 250,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "pipe",
        amount: 25,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 50,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "electric-engine-unit",
        amount: 50,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "rocket-silo",
        amount: 1,
      },
    ],
    energy_required: 1.875,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "rocket-silo-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.rocket-silo"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/rocket-silo.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "cargo-landing-pad-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "concrete",
        amount: 50,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 6.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "cargo-landing-pad",
        amount: 1,
      },
    ],
    energy_required: 1.875,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "cargo-landing-pad-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.cargo-landing-pad"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/cargo-landing-pad.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "roboport-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-plate",
        amount: 11.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 11.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 11.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "roboport",
        amount: 1,
      },
    ],
    energy_required: 0.3125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "roboport-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.roboport"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/roboport.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "substation-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-plate",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "copper-cable",
        amount: 1.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "substation",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "substation-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.substation"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/substation.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "accumulator-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "iron-plate",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "battery",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "accumulator",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "accumulator-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.accumulator"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/accumulator.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "electric-furnace-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-plate",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "stone-brick",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "electric-furnace",
        amount: 1,
      },
    ],
    energy_required: 0.3125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "electric-furnace-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.electric-furnace"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/electric-furnace.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "beacon-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "electronic-circuit",
        amount: 5,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 5,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "copper-cable",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "beacon",
        amount: 1,
      },
    ],
    energy_required: 0.9375,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "beacon-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.beacon"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/beacon.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "pumpjack-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-plate",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "pipe",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "pumpjack",
        amount: 1,
      },
    ],
    energy_required: 0.3125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "pumpjack-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.pumpjack"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/pumpjack.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "oil-refinery-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-plate",
        amount: 3.75,
        extra_count_fraction: 0.75,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "stone-brick",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "pipe",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "oil-refinery",
        amount: 1,
      },
    ],
    energy_required: 0.5,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "oil-refinery-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.oil-refinery"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/oil-refinery.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "electric-engine-unit-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "engine-unit",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "electric-engine-unit",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "electric-engine-unit-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.electric-engine-unit"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/electric-engine-unit.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [
        0.71500000000000003552713678800500929355621337890625, 0.875,
        0.6550000000000000710542735760100185871124267578125,
      ],
      quaternary: [0.15, 0.320000000000000017763568394002504646778106689453125, 0.03],
    },
  },
  "flying-robot-frame-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "electric-engine-unit",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "battery",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 0.75,
        extra_count_fraction: 0.75,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "flying-robot-frame",
        amount: 1,
      },
    ],
    energy_required: 1.25,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "flying-robot-frame-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.flying-robot-frame"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/flying-robot-frame.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "battery-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "iron-plate",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "copper-plate",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "battery",
        amount: 1,
      },
    ],
    energy_required: 0.25,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "battery-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.battery"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/battery.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.85, 1, 0.55],
      quaternary: [0.75, 0.65, 0.1],
    },
  },
  "storage-tank-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "iron-plate",
        amount: 5,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "storage-tank",
        amount: 1,
      },
    ],
    energy_required: 0.1875,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "storage-tank-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.storage-tank"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/storage-tank.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "pump-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "engine-unit",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "pipe",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "pump",
        amount: 1,
      },
    ],
    energy_required: 0.125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "pump-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.pump"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/pump.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "chemical-plant-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-plate",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "pipe",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "chemical-plant",
        amount: 1,
      },
    ],
    energy_required: 0.3125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "chemical-plant-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.chemical-plant"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/chemical-plant.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "low-density-structure-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-plate",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "copper-plate",
        amount: 5,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "plastic-bar",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "low-density-structure",
        amount: 1,
      },
    ],
    energy_required: 0.9375,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "low-density-structure-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.low-density-structure"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/low-density-structure.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "rocket-fuel-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "solid-fuel",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "rocket-fuel",
        amount: 1,
      },
    ],
    energy_required: 0.9375,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "rocket-fuel-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.rocket-fuel"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/rocket-fuel.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [
        1, 0.86500000000000003552713678800500929355621337890625,
        0.53499999999999996447286321199499070644378662109375,
      ],
      quaternary: [
        0.5699999999999999289457264239899814128875732421875,
        0.3300000000000000266453525910037569701671600341796875, 0,
      ],
    },
  },
  "rocket-part-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "processing-unit",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "low-density-structure",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "rocket-fuel",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "rocket-part",
        amount: 1,
      },
    ],
    energy_required: 0.1875,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "rocket-part-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.rocket-part"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/rocket-part.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "nuclear-reactor-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "concrete",
        amount: 125,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 125,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 125,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "copper-plate",
        amount: 125,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "nuclear-reactor",
        amount: 1,
      },
    ],
    energy_required: 0.5,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "nuclear-reactor-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.nuclear-reactor"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/nuclear-reactor.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "centrifuge-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "concrete",
        amount: 25,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 12.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 25,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 25,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "centrifuge",
        amount: 1,
      },
    ],
    energy_required: 0.25,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "centrifuge-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.centrifuge"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/centrifuge.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "nuclear-fuel-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "uranium-235",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "rocket-fuel",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "nuclear-fuel",
        amount: 1,
      },
    ],
    energy_required: 5.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "nuclear-fuel-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.nuclear-fuel"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/nuclear-fuel.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "heat-exchanger-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-plate",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "copper-plate",
        amount: 25,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "pipe",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "heat-exchanger",
        amount: 1,
      },
    ],
    energy_required: 0.1875,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "heat-exchanger-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.heat-exchanger"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/heat-boiler.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "heat-pipe-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-plate",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "copper-plate",
        amount: 5,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "heat-pipe",
        amount: 1,
      },
    ],
    energy_required: 0.0625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "heat-pipe-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.heat-pipe"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/heat-pipe.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "steam-turbine-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 12.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "copper-plate",
        amount: 12.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "pipe",
        amount: 5,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "steam-turbine",
        amount: 1,
      },
    ],
    energy_required: 0.1875,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "steam-turbine-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.steam-turbine"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/steam-turbine.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "rail-support-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "refined-concrete",
        amount: 5,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "rail-support",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "rail-support-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.rail-support"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__elevated-rails__/graphics/icons/rail-support.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "rail-ramp-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "refined-concrete",
        amount: 25,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "rail",
        amount: 2,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "rail-ramp",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "rail-ramp-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.rail-ramp"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__elevated-rails__/graphics/icons/rail-ramp.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "quality-module-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "electronic-circuit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "quality-module",
        amount: 1,
      },
    ],
    energy_required: 0.9375,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "quality-module-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.quality-module"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__quality__/graphics/icons/quality-module.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "quality-module-2-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "quality-module",
        amount: 1,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "quality-module-2",
        amount: 1,
      },
    ],
    energy_required: 1.875,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "quality-module-2-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.quality-module-2"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__quality__/graphics/icons/quality-module-2.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "quality-module-3-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "quality-module-2",
        amount: 1,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "superconductor",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "quality-module-3",
        amount: 1,
      },
    ],
    energy_required: 3.75,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "quality-module-3-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.quality-module-3"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__quality__/graphics/icons/quality-module-3.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "recycler-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "processing-unit",
        amount: 1.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 5,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 10,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "concrete",
        amount: 5,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "recycler",
        amount: 1,
      },
    ],
    energy_required: 0.1875,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "recycler-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.recycler"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__quality__/graphics/icons/recycler.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "artificial-yumako-soil-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "yumako-seed",
        amount: 0.05,
        extra_count_fraction: 0.05,
      },

      {
        type: "item",
        name: "nutrients",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "landfill",
        amount: 0.125,
        extra_count_fraction: 0.125,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "artificial-yumako-soil",
        amount: 1,
      },
    ],
    energy_required: 0.125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "artificial-yumako-soil-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.artificial-yumako-soil"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/artificial-yumako-soil.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "overgrowth-yumako-soil-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "artificial-yumako-soil",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "yumako-seed",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "biter-egg",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "spoilage",
        amount: 12.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "overgrowth-yumako-soil",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "overgrowth-yumako-soil-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.overgrowth-yumako-soil"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/overgrowth-yumako-soil.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.85, 0.85, 0.85],
      quaternary: [0, 0.34000000000000003552713678800500929355621337890625, 0.6],
    },
  },
  "artificial-jellynut-soil-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "jellynut-seed",
        amount: 0.05,
        extra_count_fraction: 0.05,
      },

      {
        type: "item",
        name: "nutrients",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "landfill",
        amount: 0.125,
        extra_count_fraction: 0.125,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "artificial-jellynut-soil",
        amount: 1,
      },
    ],
    energy_required: 0.125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "artificial-jellynut-soil-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.artificial-jellynut-soil"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/artificial-jellynut-soil.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "overgrowth-jellynut-soil-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "artificial-jellynut-soil",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "jellynut-seed",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "biter-egg",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "spoilage",
        amount: 12.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "overgrowth-jellynut-soil",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "overgrowth-jellynut-soil-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.overgrowth-jellynut-soil"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/overgrowth-jellynut-soil.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.85, 0.85, 0.85],
      quaternary: [0, 0.34000000000000003552713678800500929355621337890625, 0.6],
    },
  },
  "nutrients-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "spoilage",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "nutrients",
        amount: 1,
      },
    ],
    energy_required: 0.125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "nutrients-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.nutrients"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/nutrients.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "toolbelt-equipment-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "advanced-circuit",
        amount: 0.75,
        extra_count_fraction: 0.75,
      },

      {
        type: "item",
        name: "carbon-fiber",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "toolbelt-equipment",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "toolbelt-equipment-recycling",
    localised_name: ["recipe-name.recycling", ["equipment-name.toolbelt-equipment"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/toolbelt-equipment.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "battery-mk3-equipment-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "battery-mk2-equipment",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "supercapacitor",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "battery-mk3-equipment",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "battery-mk3-equipment-recycling",
    localised_name: ["recipe-name.recycling", ["equipment-name.battery-mk3-equipment"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/battery-mk3-equipment.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "space-platform-foundation-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-plate",
        amount: 5,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "copper-cable",
        amount: 5,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "space-platform-foundation",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "space-platform-foundation-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.space-platform-foundation"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/space-platform-foundation.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "stack-inserter-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "bulk-inserter",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "carbon-fiber",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "jelly",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "stack-inserter",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "stack-inserter-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.stack-inserter"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/stack-inserter.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "rocket-turret-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "rocket-launcher",
        amount: 1,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 1,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "carbon-fiber",
        amount: 5,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 5,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "iron-gear-wheel",
        amount: 5,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "rocket-turret",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "rocket-turret-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.rocket-turret"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/rocket-turret.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "infinity-chest-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-chest",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "infinity-chest",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "infinity-chest-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.infinity-chest"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/infinity-chest.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "infinity-pipe-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "pipe",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "infinity-pipe",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "infinity-pipe-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.infinity-pipe"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/pipe.png",
        tint: {
          r: 0.5,
          g: 0.5,
          b: 1,
        },
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "heat-interface-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "heat-pipe",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "heat-interface",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "heat-interface-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.heat-interface"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/heat-interface.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "space-platform-starter-pack-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "space-platform-foundation",
        amount: 15,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 5,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 5,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "space-platform-starter-pack",
        amount: 1,
      },
    ],
    energy_required: 3.75,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "space-platform-starter-pack-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.space-platform-starter-pack"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/space-platform-hub.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "cargo-bay-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-plate",
        amount: 5,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "low-density-structure",
        amount: 5,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "cargo-bay",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "cargo-bay-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.cargo-bay"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/cargo-bay.png",
        icon_size: 64,
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "asteroid-collector-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "low-density-structure",
        amount: 5,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "electric-engine-unit",
        amount: 2,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "asteroid-collector",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "asteroid-collector-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.asteroid-collector"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/asteroid-collector.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "crusher-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "low-density-structure",
        amount: 5,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "electric-engine-unit",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "crusher",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "crusher-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.crusher"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/crusher.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "thruster-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-plate",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "electric-engine-unit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "thruster",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "thruster-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.thruster"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/thruster.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "foundry-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "tungsten-carbide",
        amount: 12.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 12.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 7.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "refined-concrete",
        amount: 5,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "foundry",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "foundry-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.foundry"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/foundry.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [
        0.71500000000000003552713678800500929355621337890625, 0.875,
        0.6550000000000000710542735760100185871124267578125,
      ],
      quaternary: [0.15, 0.320000000000000017763568394002504646778106689453125, 0.03],
    },
  },
  "turbo-transport-belt-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "tungsten-plate",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "express-transport-belt",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "turbo-transport-belt",
        amount: 1,
      },
    ],
    energy_required: 0.03125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "turbo-transport-belt-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.turbo-transport-belt"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/turbo-transport-belt.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [
        0.71500000000000003552713678800500929355621337890625, 0.875,
        0.6550000000000000710542735760100185871124267578125,
      ],
      quaternary: [0.15, 0.320000000000000017763568394002504646778106689453125, 0.03],
    },
  },
  "turbo-underground-belt-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "tungsten-plate",
        amount: 5,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "express-underground-belt",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "turbo-underground-belt",
        amount: 1,
      },
    ],
    energy_required: 0.125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "turbo-underground-belt-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.turbo-underground-belt"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/turbo-underground-belt.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [
        0.71500000000000003552713678800500929355621337890625, 0.875,
        0.6550000000000000710542735760100185871124267578125,
      ],
      quaternary: [0.15, 0.320000000000000017763568394002504646778106689453125, 0.03],
    },
  },
  "turbo-splitter-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "express-splitter",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "tungsten-plate",
        amount: 3.75,
        extra_count_fraction: 0.75,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "turbo-splitter",
        amount: 1,
      },
    ],
    energy_required: 0.125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "turbo-splitter-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.turbo-splitter"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/turbo-splitter.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [
        0.71500000000000003552713678800500929355621337890625, 0.875,
        0.6550000000000000710542735760100185871124267578125,
      ],
      quaternary: [0.15, 0.320000000000000017763568394002504646778106689453125, 0.03],
    },
  },
  "turbo-loader-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "turbo-transport-belt",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "express-loader",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "turbo-loader",
        amount: 1,
      },
    ],
    energy_required: 1.25,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "turbo-loader-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.turbo-loader"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/turbo-loader.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "big-mining-drill-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "electric-mining-drill",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "tungsten-carbide",
        amount: 5,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "electric-engine-unit",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "advanced-circuit",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "big-mining-drill",
        amount: 1,
      },
    ],
    energy_required: 1.875,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "big-mining-drill-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.big-mining-drill"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/big-mining-drill.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [
        0.600000000000000088817841970012523233890533447265625,
        0.84000000000000003552713678800500929355621337890625,
        0.96500000000000003552713678800500929355621337890625,
      ],
      quaternary: [0, 0.1, 0.5300000000000000710542735760100185871124267578125],
    },
  },
  "mech-armor-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "power-armor-mk2",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "holmium-plate",
        amount: 50,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 25,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "superconductor",
        amount: 12.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "supercapacitor",
        amount: 12.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "mech-armor",
        amount: 1,
      },
    ],
    energy_required: 3.75,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "mech-armor-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.mech-armor"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/mech-armor.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "railgun-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "tungsten-plate",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "superconductor",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "quantum-processor",
        amount: 5,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "railgun",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "railgun-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.railgun"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/railgun.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.55, 0.85, 0.7],
      quaternary: [0, 0.3, 0.15],
    },
  },
  "railgun-turret-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "quantum-processor",
        amount: 25,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "tungsten-plate",
        amount: 7.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "superconductor",
        amount: 12.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "carbon-fiber",
        amount: 5,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "railgun-turret",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "railgun-turret-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.railgun-turret"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/railgun-turret.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.55, 0.85, 0.7],
      quaternary: [0, 0.3, 0.15],
    },
  },
  "railgun-ammo-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-plate",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "copper-cable",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "explosives",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "railgun-ammo",
        amount: 1,
      },
    ],
    energy_required: 1.5625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "railgun-ammo-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.railgun-ammo"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/railgun-ammo.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "agricultural-tower-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "steel-plate",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 0.75,
        extra_count_fraction: 0.75,
      },

      {
        type: "item",
        name: "spoilage",
        amount: 5,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "landfill",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "agricultural-tower",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "agricultural-tower-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.agricultural-tower"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/agricultural-tower.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "biochamber-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "nutrients",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "pentapod-egg",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "iron-plate",
        amount: 5,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "landfill",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "biochamber",
        amount: 1,
      },
    ],
    energy_required: 1.25,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "biochamber-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.biochamber"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/biochamber.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "capture-robot-rocket-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "flying-robot-frame",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "bioflux",
        amount: 5,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "capture-robot-rocket",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "capture-robot-rocket-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.capture-robot-rocket"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/capture-bot.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "lightning-rod-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "copper-cable",
        amount: 3,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 2,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "stone-brick",
        amount: 1,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "lightning-rod",
        amount: 1,
      },
    ],
    energy_required: 0.3125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "lightning-rod-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.lightning-rod"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/lightning-rod.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "electromagnetic-plant-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "holmium-plate",
        amount: 37.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "steel-plate",
        amount: 12.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 12.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "refined-concrete",
        amount: 12.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "electromagnetic-plant",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "electromagnetic-plant-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.electromagnetic-plant"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/electromagnetic-plant.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "supercapacitor-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "holmium-plate",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "superconductor",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "electronic-circuit",
        amount: 1,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "battery",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "supercapacitor",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "supercapacitor-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.supercapacitor"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/supercapacitor.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [
        0.9949999999999999289457264239899814128875732421875,
        0.504999999999999982236431605997495353221893310546875,
        0.649999999999999911182158029987476766109466552734375,
      ],
      quaternary: [0.8, 0.01, 0.2],
    },
  },
  "lightning-collector-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "lightning-rod",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "supercapacitor",
        amount: 2,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "accumulator",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "lightning-collector",
        amount: 1,
      },
    ],
    energy_required: 0.3125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "lightning-collector-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.lightning-collector"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/lightning-collector.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [
        0.9949999999999999289457264239899814128875732421875,
        0.504999999999999982236431605997495353221893310546875,
        0.649999999999999911182158029987476766109466552734375,
      ],
      quaternary: [0.8, 0.01, 0.2],
    },
  },
  "teslagun-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "holmium-plate",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "superconductor",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "plastic-bar",
        amount: 7.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "teslagun",
        amount: 1,
      },
    ],
    energy_required: 1.875,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "teslagun-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.teslagun"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/teslagun.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [
        0.9949999999999999289457264239899814128875732421875,
        0.504999999999999982236431605997495353221893310546875,
        0.649999999999999911182158029987476766109466552734375,
      ],
      quaternary: [0.8, 0.01, 0.2],
    },
  },
  "tesla-turret-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "teslagun",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "supercapacitor",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "superconductor",
        amount: 12.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "tesla-turret",
        amount: 1,
      },
    ],
    energy_required: 1.875,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "tesla-turret-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.tesla-turret"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/tesla-turret.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [
        0.9949999999999999289457264239899814128875732421875,
        0.504999999999999982236431605997495353221893310546875,
        0.649999999999999911182158029987476766109466552734375,
      ],
      quaternary: [0.8, 0.01, 0.2],
    },
  },
  "tesla-ammo-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "supercapacitor",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "plastic-bar",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "tesla-ammo",
        amount: 1,
      },
    ],
    energy_required: 1.875,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "tesla-ammo-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.tesla-ammo"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/tesla-ammo.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [
        0.9949999999999999289457264239899814128875732421875,
        0.504999999999999982236431605997495353221893310546875,
        0.649999999999999911182158029987476766109466552734375,
      ],
      quaternary: [0.8, 0.01, 0.2],
    },
  },
  "heating-tower-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "boiler",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "heat-pipe",
        amount: 1.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "concrete",
        amount: 5,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "heating-tower",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "heating-tower-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.heating-tower"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/heating-tower.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "cryogenic-plant-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "refined-concrete",
        amount: 10,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "superconductor",
        amount: 5,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 5,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "lithium-plate",
        amount: 5,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "cryogenic-plant",
        amount: 1,
      },
    ],
    energy_required: 0.625,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "cryogenic-plant-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.cryogenic-plant"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/cryogenic-plant.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "quantum-processor-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "tungsten-carbide",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "processing-unit",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "superconductor",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "carbon-fiber",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "lithium-plate",
        amount: 0.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "quantum-processor",
        amount: 1,
      },
    ],
    energy_required: 1.875,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "quantum-processor-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.quantum-processor"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/quantum-processor.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.55, 0.85, 0.7],
      quaternary: [0, 0.3, 0.15],
    },
  },
  "fusion-reactor-equipment-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "fission-reactor-equipment",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "fusion-power-cell",
        amount: 2.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "tungsten-plate",
        amount: 62.5,
        extra_count_fraction: 0.5,
      },

      {
        type: "item",
        name: "carbon-fiber",
        amount: 25,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "supercapacitor",
        amount: 6.25,
        extra_count_fraction: 0.25,
      },

      {
        type: "item",
        name: "quantum-processor",
        amount: 62.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "fusion-reactor-equipment",
        amount: 1,
      },
    ],
    energy_required: 1.875,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "fusion-reactor-equipment-recycling",
    localised_name: ["recipe-name.recycling", ["equipment-name.fusion-reactor-equipment"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/fusion-reactor-equipment.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "fusion-reactor-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "tungsten-plate",
        amount: 50,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "superconductor",
        amount: 50,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "quantum-processor",
        amount: 62.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "fusion-reactor",
        amount: 1,
      },
    ],
    energy_required: 3.75,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "fusion-reactor-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.fusion-reactor"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/fusion-reactor.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "fusion-generator-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "tungsten-plate",
        amount: 25,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "superconductor",
        amount: 25,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "quantum-processor",
        amount: 12.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "fusion-generator",
        amount: 1,
      },
    ],
    energy_required: 1.875,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "fusion-generator-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.fusion-generator"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/fusion-generator.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "ice-platform-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "ice",
        amount: 12.5,
        extra_count_fraction: 0.5,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "ice-platform",
        amount: 1,
      },
    ],
    energy_required: 1.875,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "ice-platform-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.ice-platform"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/ice-platform.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.85],
      quaternary: [0, 0, 0.6],
    },
  },
  "foundation-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "tungsten-plate",
        amount: 1,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "lithium-plate",
        amount: 1,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "carbon-fiber",
        amount: 1,
        extra_count_fraction: 0,
      },

      {
        type: "item",
        name: "stone",
        amount: 5,
        extra_count_fraction: 0,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "foundation",
        amount: 1,
      },
    ],
    energy_required: 1.875,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "foundation-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.foundation"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/foundation.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.55, 0.85, 0.7],
      quaternary: [0, 0.3, 0.15],
    },
  },
  "water-barrel-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "barrel",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "water-barrel",
        amount: 1,
      },
    ],
    energy_required: 0.0125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "water-barrel-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.filled-barrel", ["fluid-name.water"]]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/empty-barrel.png",
        icon_size: 64,
        scale: 0.4,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-side-mask.png",
        icon_size: 64,
        tint: {
          r: 0,
          g: 0.34000000000000003552713678800500929355621337890625,
          b: 0.6,
          a: 0.75,
        },
        scale: 0.4,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-hoop-top-mask.png",
        icon_size: 64,
        tint: {
          r: 0.7,
          g: 0.7,
          b: 0.7,
          a: 0.75,
        },
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.85, 0.85, 0.85],
      quaternary: [0, 0.34000000000000003552713678800500929355621337890625, 0.6],
    },
  },
  "sulfuric-acid-barrel-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "barrel",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "sulfuric-acid-barrel",
        amount: 1,
      },
    ],
    energy_required: 0.0125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "sulfuric-acid-barrel-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.filled-barrel", ["fluid-name.sulfuric-acid"]]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/empty-barrel.png",
        icon_size: 64,
        scale: 0.4,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-side-mask.png",
        icon_size: 64,
        tint: {
          r: 0.75,
          g: 0.65,
          b: 0.1,
          a: 0.75,
        },
        scale: 0.4,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-hoop-top-mask.png",
        icon_size: 64,
        tint: {
          r: 0.7,
          g: 1,
          b: 0.1,
          a: 0.75,
        },
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.85, 1, 0.55],
      quaternary: [0.75, 0.65, 0.1],
    },
  },
  "crude-oil-barrel-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "barrel",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "crude-oil-barrel",
        amount: 1,
      },
    ],
    energy_required: 0.0125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "crude-oil-barrel-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.filled-barrel", ["fluid-name.crude-oil"]]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/empty-barrel.png",
        icon_size: 64,
        scale: 0.4,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-side-mask.png",
        icon_size: 64,
        tint: {
          r: 0,
          g: 0,
          b: 0,
          a: 0.75,
        },
        scale: 0.4,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-hoop-top-mask.png",
        icon_size: 64,
        tint: {
          r: 0.5,
          g: 0.5,
          b: 0.5,
          a: 0.75,
        },
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.75, 0.75, 0.75],
      quaternary: [0, 0, 0],
    },
  },
  "heavy-oil-barrel-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "barrel",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "heavy-oil-barrel",
        amount: 1,
      },
    ],
    energy_required: 0.0125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "heavy-oil-barrel-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.filled-barrel", ["fluid-name.heavy-oil"]]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/empty-barrel.png",
        icon_size: 64,
        scale: 0.4,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-side-mask.png",
        icon_size: 64,
        tint: {
          r: 0.5,
          g: 0.13000000000000000444089209850062616169452667236328125,
          b: 0,
          a: 0.75,
        },
        scale: 0.4,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-hoop-top-mask.png",
        icon_size: 64,
        tint: {
          r: 0.85,
          g: 0.6,
          b: 0.3,
          a: 0.75,
        },
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.925, 0.8, 0.649999999999999911182158029987476766109466552734375],
      quaternary: [0.5, 0.13000000000000000444089209850062616169452667236328125, 0],
    },
  },
  "light-oil-barrel-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "barrel",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "light-oil-barrel",
        amount: 1,
      },
    ],
    energy_required: 0.0125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "light-oil-barrel-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.filled-barrel", ["fluid-name.light-oil"]]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/empty-barrel.png",
        icon_size: 64,
        scale: 0.4,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-side-mask.png",
        icon_size: 64,
        tint: {
          r: 0.5699999999999999289457264239899814128875732421875,
          g: 0.3300000000000000266453525910037569701671600341796875,
          b: 0,
          a: 0.75,
        },
        scale: 0.4,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-hoop-top-mask.png",
        icon_size: 64,
        tint: {
          r: 1,
          g: 0.729999999999999982236431605997495353221893310546875,
          b: 0.0700000000000000088817841970012523233890533447265625,
          a: 0.75,
        },
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [
        1, 0.86500000000000003552713678800500929355621337890625,
        0.53499999999999996447286321199499070644378662109375,
      ],
      quaternary: [
        0.5699999999999999289457264239899814128875732421875,
        0.3300000000000000266453525910037569701671600341796875, 0,
      ],
    },
  },
  "petroleum-gas-barrel-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "barrel",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "petroleum-gas-barrel",
        amount: 1,
      },
    ],
    energy_required: 0.0125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "petroleum-gas-barrel-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.filled-barrel", ["fluid-name.petroleum-gas"]]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/empty-barrel.png",
        icon_size: 64,
        scale: 0.4,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-side-mask.png",
        icon_size: 64,
        tint: {
          r: 0.3,
          g: 0.1,
          b: 0.3,
          a: 0.75,
        },
        scale: 0.4,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-hoop-top-mask.png",
        icon_size: 64,
        tint: {
          r: 0.8,
          g: 0.8,
          b: 0.8,
          a: 0.75,
        },
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.9, 0.9, 0.9],
      quaternary: [0.3, 0.1, 0.3],
    },
  },
  "lubricant-barrel-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "barrel",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "lubricant-barrel",
        amount: 1,
      },
    ],
    energy_required: 0.0125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "lubricant-barrel-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.filled-barrel", ["fluid-name.lubricant"]]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/empty-barrel.png",
        icon_size: 64,
        scale: 0.4,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-side-mask.png",
        icon_size: 64,
        tint: {
          r: 0.15,
          g: 0.320000000000000017763568394002504646778106689453125,
          b: 0.03,
          a: 0.75,
        },
        scale: 0.4,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-hoop-top-mask.png",
        icon_size: 64,
        tint: {
          r: 0.429999999999999982236431605997495353221893310546875,
          g: 0.75,
          b: 0.3100000000000000088817841970012523233890533447265625,
          a: 0.75,
        },
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [
        0.71500000000000003552713678800500929355621337890625, 0.875,
        0.6550000000000000710542735760100185871124267578125,
      ],
      quaternary: [0.15, 0.320000000000000017763568394002504646778106689453125, 0.03],
    },
  },
  "fluoroketone-cold-barrel-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "barrel",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "fluoroketone-cold-barrel",
        amount: 1,
      },
    ],
    energy_required: 0.0125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "fluoroketone-cold-barrel-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.filled-barrel", ["fluid-name.fluoroketone-cold"]]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/empty-barrel.png",
        icon_size: 64,
        scale: 0.4,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-side-mask.png",
        icon_size: 64,
        tint: {
          r: 0,
          g: 0.3,
          b: 0.15,
          a: 0.75,
        },
        scale: 0.4,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-hoop-top-mask.png",
        icon_size: 64,
        tint: {
          r: 0.1,
          g: 0.7,
          b: 0.4,
          a: 0.75,
        },
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.55, 0.85, 0.7],
      quaternary: [0, 0.3, 0.15],
    },
  },
  "fluoroketone-hot-barrel-recycling": {
    type: "recipe",
    subgroup: "other",
    category: "recycling",
    results: [
      {
        type: "item",
        name: "barrel",
        amount: 0.25,
        extra_count_fraction: 0.25,
      },
    ],
    ingredients: [
      {
        type: "item",
        name: "fluoroketone-hot-barrel",
        amount: 1,
      },
    ],
    energy_required: 0.0125,
    hidden: true,
    allow_decomposition: false,
    unlock_results: false,
    name: "fluoroketone-hot-barrel-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.filled-barrel", ["fluid-name.fluoroketone-hot"]]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/empty-barrel.png",
        icon_size: 64,
        scale: 0.4,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-side-mask.png",
        icon_size: 64,
        tint: {
          r: 0.3,
          g: 0.3,
          b: 0.1,
          a: 0.75,
        },
        scale: 0.4,
      },

      {
        icon: "__base__/graphics/icons/fluid/barreling/barrel-hoop-top-mask.png",
        icon_size: 64,
        tint: {
          r: 0.4,
          g: 0.7,
          b: 0.35,
          a: 0.75,
        },
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.7, 0.85, 0.675],
      quaternary: [0.3, 0.3, 0.1],
    },
  },
  "flamethrower-ammo-recycling": {
    type: "recipe",
    name: "flamethrower-ammo-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.flamethrower-ammo"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/flamethrower-ammo.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "flamethrower-ammo",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "flamethrower-ammo",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.375,
    crafting_machine_tint: {
      primary: {
        r: 1,
        g: 0.73499999999999996447286321199499070644378662109375,
        b: 0.642999999999999971578290569595992565155029296875,
        a: 1,
      },
      secondary: {
        r: 0.74900000000000002131628207280300557613372802734375,
        g: 0.557000000000000028421709430404007434844970703125,
        b: 0.49000000000000003552713678800500929355621337890625,
        a: 1,
      },
      tertiary: {
        r: 0.637000000000000010658141036401502788066864013671875,
        g: 0.637000000000000010658141036401502788066864013671875,
        b: 0.637000000000000010658141036401502788066864013671875,
        a: 1,
      },
      quaternary: {
        r: 0.282999999999999971578290569595992565155029296875,
        g: 0.282999999999999971578290569595992565155029296875,
        b: 0.282999999999999971578290569595992565155029296875,
        a: 1,
      },
    },
  },
  "blueprint-recycling": {
    type: "recipe",
    name: "blueprint-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.blueprint"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/blueprint.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "blueprint",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "blueprint",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "blueprint-book-recycling": {
    type: "recipe",
    name: "blueprint-book-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.blueprint-book"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/blueprint-book.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "blueprint-book",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "blueprint-book",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "raw-fish-recycling": {
    type: "recipe",
    name: "raw-fish-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.raw-fish"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/fish.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "raw-fish",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "raw-fish",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "discharge-defense-remote-recycling": {
    type: "recipe",
    name: "discharge-defense-remote-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.discharge-defense-remote"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/discharge-defense-equipment-controller.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "discharge-defense-remote",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "discharge-defense-remote",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "artillery-targeting-remote-recycling": {
    type: "recipe",
    name: "artillery-targeting-remote-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.artillery-targeting-remote"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/artillery-targeting-remote.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "artillery-targeting-remote",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "artillery-targeting-remote",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "yumako-recycling": {
    type: "recipe",
    name: "yumako-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.yumako"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/yumako.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "yumako",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "yumako",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "jellynut-recycling": {
    type: "recipe",
    name: "jellynut-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.jellynut"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/jellynut.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "jellynut",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "jellynut",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "yumako-mash-recycling": {
    type: "recipe",
    name: "yumako-mash-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.yumako-mash"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/yumako-mash.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "yumako-mash",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "yumako-mash",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "jelly-recycling": {
    type: "recipe",
    name: "jelly-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.jelly"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/jelly.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "jelly",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "jelly",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "bioflux-recycling": {
    type: "recipe",
    name: "bioflux-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.bioflux"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/bioflux.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "bioflux",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "bioflux",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.375,
    crafting_machine_tint: {
      primary: {
        r: 0.3,
        g: 0.9,
        b: 0.8,
        a: 1,
      },
      secondary: {
        r: 0.8,
        g: 0.5,
        b: 0.3,
        a: 1,
      },
    },
  },
  "copy-paste-tool-recycling": {
    type: "recipe",
    name: "copy-paste-tool-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.copy-paste-tool"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/copy-paste-tool.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "copy-paste-tool",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "copy-paste-tool",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "cut-paste-tool-recycling": {
    type: "recipe",
    name: "cut-paste-tool-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.cut-paste-tool"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/cut-paste-tool.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "cut-paste-tool",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "cut-paste-tool",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "deconstruction-planner-recycling": {
    type: "recipe",
    name: "deconstruction-planner-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.deconstruction-planner"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/deconstruction-planner.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "deconstruction-planner",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "deconstruction-planner",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "tank-machine-gun-recycling": {
    type: "recipe",
    name: "tank-machine-gun-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.tank-machine-gun"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/submachine-gun.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "tank-machine-gun",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "tank-machine-gun",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "tank-flamethrower-recycling": {
    type: "recipe",
    name: "tank-flamethrower-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.tank-flamethrower"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/flamethrower.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "tank-flamethrower",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "tank-flamethrower",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "tank-cannon-recycling": {
    type: "recipe",
    name: "tank-cannon-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.tank-cannon"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/tank-cannon.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "tank-cannon",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "tank-cannon",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "artillery-wagon-cannon-recycling": {
    type: "recipe",
    name: "artillery-wagon-cannon-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.artillery-wagon-cannon"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/tank-cannon.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "artillery-wagon-cannon",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "artillery-wagon-cannon",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "spidertron-rocket-launcher-1-recycling": {
    type: "recipe",
    name: "spidertron-rocket-launcher-1-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.spidertron-rocket-launcher"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/rocket-launcher.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "spidertron-rocket-launcher-1",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "spidertron-rocket-launcher-1",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "spidertron-rocket-launcher-2-recycling": {
    type: "recipe",
    name: "spidertron-rocket-launcher-2-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.spidertron-rocket-launcher"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/rocket-launcher.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "spidertron-rocket-launcher-2",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "spidertron-rocket-launcher-2",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "spidertron-rocket-launcher-3-recycling": {
    type: "recipe",
    name: "spidertron-rocket-launcher-3-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.spidertron-rocket-launcher"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/rocket-launcher.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "spidertron-rocket-launcher-3",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "spidertron-rocket-launcher-3",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "spidertron-rocket-launcher-4-recycling": {
    type: "recipe",
    name: "spidertron-rocket-launcher-4-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.spidertron-rocket-launcher"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/rocket-launcher.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "spidertron-rocket-launcher-4",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "spidertron-rocket-launcher-4",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "vehicle-machine-gun-recycling": {
    type: "recipe",
    name: "vehicle-machine-gun-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.vehicle-machine-gun"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/submachine-gun.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "vehicle-machine-gun",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "vehicle-machine-gun",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "item-unknown-recycling": {
    type: "recipe",
    name: "item-unknown-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.item-unknown"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__core__/graphics/icons/unknown.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "item-unknown",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "item-unknown",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "parameter-0-recycling": {
    type: "recipe",
    name: "parameter-0-recycling",
    localised_name: ["recipe-name.recycling", ["parameter-x", "0"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/parameter/parameter-0.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "parameter-0",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "parameter-0",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "parameter-1-recycling": {
    type: "recipe",
    name: "parameter-1-recycling",
    localised_name: ["recipe-name.recycling", ["parameter-x", "1"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/parameter/parameter-1.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "parameter-1",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "parameter-1",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "parameter-2-recycling": {
    type: "recipe",
    name: "parameter-2-recycling",
    localised_name: ["recipe-name.recycling", ["parameter-x", "2"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/parameter/parameter-2.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "parameter-2",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "parameter-2",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "parameter-3-recycling": {
    type: "recipe",
    name: "parameter-3-recycling",
    localised_name: ["recipe-name.recycling", ["parameter-x", "3"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/parameter/parameter-3.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "parameter-3",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "parameter-3",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "parameter-4-recycling": {
    type: "recipe",
    name: "parameter-4-recycling",
    localised_name: ["recipe-name.recycling", ["parameter-x", "4"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/parameter/parameter-4.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "parameter-4",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "parameter-4",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "parameter-5-recycling": {
    type: "recipe",
    name: "parameter-5-recycling",
    localised_name: ["recipe-name.recycling", ["parameter-x", "5"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/parameter/parameter-5.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "parameter-5",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "parameter-5",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "parameter-6-recycling": {
    type: "recipe",
    name: "parameter-6-recycling",
    localised_name: ["recipe-name.recycling", ["parameter-x", "6"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/parameter/parameter-6.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "parameter-6",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "parameter-6",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "parameter-7-recycling": {
    type: "recipe",
    name: "parameter-7-recycling",
    localised_name: ["recipe-name.recycling", ["parameter-x", "7"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/parameter/parameter-7.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "parameter-7",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "parameter-7",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "parameter-8-recycling": {
    type: "recipe",
    name: "parameter-8-recycling",
    localised_name: ["recipe-name.recycling", ["parameter-x", "8"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/parameter/parameter-8.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "parameter-8",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "parameter-8",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "parameter-9-recycling": {
    type: "recipe",
    name: "parameter-9-recycling",
    localised_name: ["recipe-name.recycling", ["parameter-x", "9"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/parameter/parameter-9.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "parameter-9",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "parameter-9",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "stone-brick-recycling": {
    type: "recipe",
    name: "stone-brick-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.stone-brick"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/stone-brick.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "stone-brick",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "stone-brick",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.2,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "wood-recycling": {
    type: "recipe",
    name: "wood-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.wood"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/wood.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "wood",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "wood",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "coal-recycling": {
    type: "recipe",
    name: "coal-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.coal"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/coal.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "coal",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "coal",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "stone-recycling": {
    type: "recipe",
    name: "stone-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.stone"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/stone.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "stone",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "stone",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "iron-ore-recycling": {
    type: "recipe",
    name: "iron-ore-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.iron-ore"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/iron-ore.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "iron-ore",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "iron-ore",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "copper-ore-recycling": {
    type: "recipe",
    name: "copper-ore-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.copper-ore"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/copper-ore.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "copper-ore",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "copper-ore",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "iron-plate-recycling": {
    type: "recipe",
    name: "iron-plate-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.iron-plate"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/iron-plate.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "iron-plate",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "iron-plate",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.2,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "copper-plate-recycling": {
    type: "recipe",
    name: "copper-plate-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.copper-plate"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/copper-plate.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "copper-plate",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "copper-plate",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.2,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "red-wire-recycling": {
    type: "recipe",
    name: "red-wire-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.red-wire"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/red-wire.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "red-wire",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "red-wire",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "green-wire-recycling": {
    type: "recipe",
    name: "green-wire-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.green-wire"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/green-wire.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "green-wire",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "green-wire",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "copper-wire-recycling": {
    type: "recipe",
    name: "copper-wire-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.copper-wire"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/copper-wire.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "copper-wire",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "copper-wire",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "steel-plate-recycling": {
    type: "recipe",
    name: "steel-plate-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.steel-plate"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/steel-plate.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "steel-plate",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "steel-plate",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 1,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "solid-fuel-recycling": {
    type: "recipe",
    name: "solid-fuel-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.solid-fuel"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/solid-fuel.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "solid-fuel",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "solid-fuel",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "landfill-recycling": {
    type: "recipe",
    name: "landfill-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.landfill"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/landfill.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "landfill",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "landfill",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "uranium-ore-recycling": {
    type: "recipe",
    name: "uranium-ore-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.uranium-ore"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/uranium-ore.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "uranium-ore",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "uranium-ore",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "lane-splitter-recycling": {
    type: "recipe",
    name: "lane-splitter-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.lane-splitter"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/splitter.png",
        scale: 0.4,
      },

      {
        icon: "__base__/graphics/icons/signal/signal_1.png",
        scale: 0.2,
        shift: [
          6.4000000000000003552713678800500929355621337890625,
          -6.4000000000000003552713678800500929355621337890625,
        ],
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "lane-splitter",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "lane-splitter",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "coin-recycling": {
    type: "recipe",
    name: "coin-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.coin"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/coin.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "coin",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "coin",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "sulfur-recycling": {
    type: "recipe",
    name: "sulfur-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.sulfur"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/sulfur.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "sulfur",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "sulfur",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.0625,
    crafting_machine_tint: {
      primary: {
        r: 1,
        g: 0.9949999999999999289457264239899814128875732421875,
        b: 0.0889999999999999857891452847979962825775146484375,
        a: 1,
      },
      secondary: {
        r: 1,
        g: 0.97400000000000002131628207280300557613372802734375,
        b: 0.690999999999999925393012745189480483531951904296875,
        a: 1,
      },
      tertiary: {
        r: 0.722999999999999953814722175593487918376922607421875,
        g: 0.637999999999999989341858963598497211933135986328125,
        b: 0.713999999999999968025576890795491635799407958984375,
        a: 1,
      },
      quaternary: {
        r: 0.953999999999999914734871708787977695465087890625,
        g: 1,
        b: 0.35,
        a: 1,
      },
    },
  },
  "plastic-bar-recycling": {
    type: "recipe",
    name: "plastic-bar-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.plastic-bar"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/plastic-bar.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "plastic-bar",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "plastic-bar",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.0625,
    crafting_machine_tint: {
      primary: {
        r: 1,
        g: 1,
        b: 1,
        a: 1,
      },
      secondary: {
        r: 0.770999999999999996447286321199499070644378662109375,
        g: 0.770999999999999996447286321199499070644378662109375,
        b: 0.770999999999999996447286321199499070644378662109375,
        a: 1,
      },
      tertiary: {
        r: 0.767999999999999971578290569595992565155029296875,
        g: 0.66500000000000003552713678800500929355621337890625,
        b: 0.762000000000000010658141036401502788066864013671875,
        a: 1,
      },
      quaternary: {
        r: 0,
        g: 0,
        b: 0,
        a: 1,
      },
    },
  },
  "explosives-recycling": {
    type: "recipe",
    name: "explosives-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.explosives"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/explosives.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "explosives",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "explosives",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.25,
    crafting_machine_tint: {
      primary: {
        r: 0.967999999999999971578290569595992565155029296875,
        g: 0.3810000000000000142108547152020037174224853515625,
        b: 0.2589999999999999857891452847979962825775146484375,
        a: 1,
      },
      secondary: {
        r: 0.89199999999999999289457264239899814128875732421875,
        g: 0.66400000000000005684341886080801486968994140625,
        b: 0.5339999999999999857891452847979962825775146484375,
        a: 1,
      },
      tertiary: {
        r: 1,
        g: 0.97799999999999993605115378159098327159881591796875,
        b: 0.512999999999999989341858963598497211933135986328125,
        a: 1,
      },
      quaternary: {
        r: 0.2100000000000000088817841970012523233890533447265625,
        g: 0.170000000000000017763568394002504646778106689453125,
        b: 0.013000000000000000444089209850062616169452667236328125,
        a: 1,
      },
    },
  },
  "electric-energy-interface-recycling": {
    type: "recipe",
    name: "electric-energy-interface-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.electric-energy-interface"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/accumulator.png",
        tint: [1, 0.8, 1, 1],
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "electric-energy-interface",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "electric-energy-interface",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "uranium-235-recycling": {
    type: "recipe",
    name: "uranium-235-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.uranium-235"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/uranium-235.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "uranium-235",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "uranium-235",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "uranium-238-recycling": {
    type: "recipe",
    name: "uranium-238-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.uranium-238"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/uranium-238.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "uranium-238",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "uranium-238",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "uranium-fuel-cell-recycling": {
    type: "recipe",
    name: "uranium-fuel-cell-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.uranium-fuel-cell"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/uranium-fuel-cell.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "uranium-fuel-cell",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "uranium-fuel-cell",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.625,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "depleted-uranium-fuel-cell-recycling": {
    type: "recipe",
    name: "depleted-uranium-fuel-cell-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.depleted-uranium-fuel-cell"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/depleted-uranium-fuel-cell.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "depleted-uranium-fuel-cell",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "depleted-uranium-fuel-cell",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "simple-entity-with-force-recycling": {
    type: "recipe",
    name: "simple-entity-with-force-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.simple-entity-with-force"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/steel-chest.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "simple-entity-with-force",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "simple-entity-with-force",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "simple-entity-with-owner-recycling": {
    type: "recipe",
    name: "simple-entity-with-owner-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.simple-entity-with-owner"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/wooden-chest.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "simple-entity-with-owner",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "simple-entity-with-owner",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "burner-generator-recycling": {
    type: "recipe",
    name: "burner-generator-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.burner-generator"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/steam-engine.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "burner-generator",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "burner-generator",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "linked-chest-recycling": {
    type: "recipe",
    name: "linked-chest-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.linked-chest"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/linked-chest-icon.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "linked-chest",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "linked-chest",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "linked-belt-recycling": {
    type: "recipe",
    name: "linked-belt-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.linked-belt"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/linked-belt.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "linked-belt",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "linked-belt",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "empty-module-slot-recycling": {
    type: "recipe",
    name: "empty-module-slot-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.empty-module-slot"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__core__/graphics/icons/mip/empty-module-slot.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "empty-module-slot",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "empty-module-slot",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "science-recycling": {
    type: "recipe",
    name: "science-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.science"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/science.png",
        icon_size: 64,
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "science",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "science",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "metallic-asteroid-chunk-recycling": {
    type: "recipe",
    name: "metallic-asteroid-chunk-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.metallic-asteroid-chunk"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/metallic-asteroid-chunk.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "metallic-asteroid-chunk",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "metallic-asteroid-chunk",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "carbonic-asteroid-chunk-recycling": {
    type: "recipe",
    name: "carbonic-asteroid-chunk-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.carbonic-asteroid-chunk"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/carbonic-asteroid-chunk.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "carbonic-asteroid-chunk",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "carbonic-asteroid-chunk",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "oxide-asteroid-chunk-recycling": {
    type: "recipe",
    name: "oxide-asteroid-chunk-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.oxide-asteroid-chunk"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/oxide-asteroid-chunk.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "oxide-asteroid-chunk",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "oxide-asteroid-chunk",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "promethium-asteroid-chunk-recycling": {
    type: "recipe",
    name: "promethium-asteroid-chunk-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.promethium-asteroid-chunk"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/promethium-asteroid-chunk.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "promethium-asteroid-chunk",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "promethium-asteroid-chunk",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "ice-recycling": {
    type: "recipe",
    name: "ice-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.ice"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/ice.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "ice",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "ice",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "carbon-recycling": {
    type: "recipe",
    name: "carbon-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.carbon"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/carbon.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "carbon",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "carbon",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.0625,
    crafting_machine_tint: {
      primary: {
        r: 0,
        g: 0,
        b: 0,
        a: 1,
      },
      secondary: {
        r: 0.292999999999999971578290569595992565155029296875,
        g: 0.292999999999999971578290569595992565155029296875,
        b: 0.292999999999999971578290569595992565155029296875,
        a: 1,
      },
      tertiary: {
        r: 0.19900000000000002131628207280300557613372802734375,
        g: 0.179000000000000003552713678800500929355621337890625,
        b: 0.0700000000000000088817841970012523233890533447265625,
        a: 1,
      },
      quaternary: {
        r: 0.292999999999999971578290569595992565155029296875,
        g: 0.292999999999999971578290569595992565155029296875,
        b: 0.292999999999999971578290569595992565155029296875,
        a: 1,
      },
    },
  },
  "calcite-recycling": {
    type: "recipe",
    name: "calcite-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.calcite"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/calcite.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "calcite",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "calcite",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "tungsten-ore-recycling": {
    type: "recipe",
    name: "tungsten-ore-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.tungsten-ore"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/tungsten-ore.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "tungsten-ore",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "tungsten-ore",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "tungsten-plate-recycling": {
    type: "recipe",
    name: "tungsten-plate-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.tungsten-plate"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/tungsten-plate.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "tungsten-plate",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "tungsten-plate",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.625,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "tungsten-carbide-recycling": {
    type: "recipe",
    name: "tungsten-carbide-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.tungsten-carbide"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/tungsten-carbide.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "tungsten-carbide",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "tungsten-carbide",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.0625,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "copper-bacteria-recycling": {
    type: "recipe",
    name: "copper-bacteria-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.copper-bacteria"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/copper-bacteria.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "copper-bacteria",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "copper-bacteria",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.0625,
    crafting_machine_tint: {
      primary: {
        r: 1,
        g: 0.457000000000000028421709430404007434844970703125,
        b: 0,
        a: 1,
      },
      secondary: {
        r: 1,
        g: 0.195999999999999996447286321199499070644378662109375,
        b: 0,
        a: 1,
      },
    },
  },
  "iron-bacteria-recycling": {
    type: "recipe",
    name: "iron-bacteria-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.iron-bacteria"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/iron-bacteria.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "iron-bacteria",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "iron-bacteria",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.0625,
    crafting_machine_tint: {
      primary: {
        r: 0,
        g: 0.5,
        b: 1,
        a: 1,
      },
      secondary: {
        r: 0.095,
        g: 0.412000000000000010658141036401502788066864013671875,
        b: 0.8219999999999998863131622783839702606201171875,
        a: 1,
      },
    },
  },
  "yumako-seed-recycling": {
    type: "recipe",
    name: "yumako-seed-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.yumako-seed"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/yumako-seed.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "yumako-seed",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "yumako-seed",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "jellynut-seed-recycling": {
    type: "recipe",
    name: "jellynut-seed-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.jellynut-seed"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/jellynut-seed.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "jellynut-seed",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "jellynut-seed",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "biolab-recycling": {
    type: "recipe",
    name: "biolab-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.biolab"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/biolab.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "biolab",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "biolab",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.625,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "captive-biter-spawner-recycling": {
    type: "recipe",
    name: "captive-biter-spawner-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.captive-biter-spawner"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/captive-biter-spawner.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "captive-biter-spawner",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "captive-biter-spawner",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.625,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "biter-egg-recycling": {
    type: "recipe",
    name: "biter-egg-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.biter-egg"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/biter-egg.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "biter-egg",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "biter-egg",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.625,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "pentapod-egg-recycling": {
    type: "recipe",
    name: "pentapod-egg-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.pentapod-egg"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/pentapod-egg.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "pentapod-egg",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "pentapod-egg",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.9375,
    crafting_machine_tint: {
      primary: {
        r: 0.5,
        g: 0.9,
        b: 0.5,
        a: 1,
      },
      secondary: {
        r: 0,
        g: 0.5,
        b: 0,
        a: 1,
      },
    },
  },
  "carbon-fiber-recycling": {
    type: "recipe",
    name: "carbon-fiber-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.carbon-fiber"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/carbon-fiber.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "carbon-fiber",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "carbon-fiber",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.3125,
    crafting_machine_tint: {
      primary: {
        r: 0.3060000000000000053290705182007513940334320068359375,
        g: 0.642999999999999971578290569595992565155029296875,
        b: 0.684000000000000074606987254810519516468048095703125,
        a: 1,
      },
      secondary: {
        r: 0.684000000000000074606987254810519516468048095703125,
        g: 0.684000000000000074606987254810519516468048095703125,
        b: 0.684000000000000074606987254810519516468048095703125,
        a: 1,
      },
    },
  },
  "holmium-ore-recycling": {
    type: "recipe",
    name: "holmium-ore-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.holmium-ore"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/holmium-ore.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "holmium-ore",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "holmium-ore",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "holmium-plate-recycling": {
    type: "recipe",
    name: "holmium-plate-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.holmium-plate"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/holmium-plate.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "holmium-plate",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "holmium-plate",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.0625,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "lithium-recycling": {
    type: "recipe",
    name: "lithium-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.lithium"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/lithium.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "lithium",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "lithium",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 1.25,
    crafting_machine_tint: {
      primary: {
        r: 0.454999999999999982236431605997495353221893310546875,
        g: 0.83699999999999992184029906638897955417633056640625,
        b: 0.5629999999999999005240169935859739780426025390625,
        a: 1,
      },
      secondary: {
        r: 0.642999999999999971578290569595992565155029296875,
        g: 0.668000000000000060396132539608515799045562744140625,
        b: 0.738999999999999968025576890795491635799407958984375,
        a: 1,
      },
      tertiary: {
        r: 0.5910000000000000142108547152020037174224853515625,
        g: 0.55600000000000004973799150320701301097869873046875,
        b: 0.55600000000000004973799150320701301097869873046875,
        a: 1,
      },
      quaternary: {
        r: 1,
        g: 1,
        b: 1,
        a: 1,
      },
    },
  },
  "lithium-plate-recycling": {
    type: "recipe",
    name: "lithium-plate-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.lithium-plate"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/lithium-plate.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "lithium-plate",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "lithium-plate",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.4,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "superconductor-recycling": {
    type: "recipe",
    name: "superconductor-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.superconductor"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/superconductor.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "superconductor",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "superconductor",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.3125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "fusion-power-cell-recycling": {
    type: "recipe",
    name: "fusion-power-cell-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.fusion-power-cell"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/fusion-power-cell.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "fusion-power-cell",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "fusion-power-cell",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.625,
    crafting_machine_tint: {
      primary: {
        r: 0.054000000000000003552713678800500929355621337890625,
        g: 0.89700000000000006394884621840901672840118408203125,
        b: 1,
        a: 1,
      },
      secondary: {
        r: 1,
        g: 0.779000000000000003552713678800500929355621337890625,
        b: 0.97400000000000002131628207280300557613372802734375,
        a: 1,
      },
      tertiary: {
        r: 0.496999999999999975131004248396493494510650634765625,
        g: 0.6550000000000000710542735760100185871124267578125,
        b: 0.757000000000000028421709430404007434844970703125,
        a: 1,
      },
      quaternary: {
        r: 0.761000000000000031974423109204508364200592041015625,
        g: 0.312000000000000010658141036401502788066864013671875,
        b: 1,
        a: 1,
      },
    },
  },
  "spoilage-recycling": {
    type: "recipe",
    name: "spoilage-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.spoilage"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/spoilage.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "spoilage",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "spoilage",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "space-platform-hub-recycling": {
    type: "recipe",
    name: "space-platform-hub-recycling",
    localised_name: ["recipe-name.recycling", ["entity-name.space-platform-hub"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/space-platform-hub.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "space-platform-hub",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "space-platform-hub",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "tree-seed-recycling": {
    type: "recipe",
    name: "tree-seed-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.tree-seed"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/tree-seed.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "tree-seed",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "tree-seed",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "selection-tool-recycling": {
    type: "recipe",
    name: "selection-tool-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.selection-tool"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/blueprint.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "selection-tool",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "selection-tool",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "spidertron-remote-recycling": {
    type: "recipe",
    name: "spidertron-remote-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.spidertron-remote"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/spidertron-remote.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "spidertron-remote",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "spidertron-remote",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "automation-science-pack-recycling": {
    type: "recipe",
    name: "automation-science-pack-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.automation-science-pack"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/automation-science-pack.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "automation-science-pack",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "automation-science-pack",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.3125,
    crafting_machine_tint: {
      primary: {
        r: 1,
        g: 0,
        b: 0,
        a: 1,
      },
      secondary: {
        r: 1,
        g: 0,
        b: 0,
        a: 1,
      },
    },
  },
  "logistic-science-pack-recycling": {
    type: "recipe",
    name: "logistic-science-pack-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.logistic-science-pack"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/logistic-science-pack.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "logistic-science-pack",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "logistic-science-pack",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.375,
    crafting_machine_tint: {
      primary: {
        r: 0,
        g: 1,
        b: 0,
        a: 1,
      },
      secondary: {
        r: 0,
        g: 1,
        b: 0,
        a: 1,
      },
    },
  },
  "chemical-science-pack-recycling": {
    type: "recipe",
    name: "chemical-science-pack-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.chemical-science-pack"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/chemical-science-pack.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "chemical-science-pack",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "chemical-science-pack",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 1.5,
    crafting_machine_tint: {
      primary: {
        r: 0,
        g: 0.8,
        b: 1,
        a: 1,
      },
      secondary: {
        r: 0,
        g: 0.8,
        b: 1,
        a: 1,
      },
    },
  },
  "military-science-pack-recycling": {
    type: "recipe",
    name: "military-science-pack-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.military-science-pack"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/military-science-pack.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "military-science-pack",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "military-science-pack",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.625,
    crafting_machine_tint: {
      primary: {
        r: 0.3,
        g: 0.3,
        b: 0.3,
        a: 1,
      },
      secondary: {
        r: 0.3,
        g: 0.3,
        b: 0.3,
        a: 1,
      },
    },
  },
  "production-science-pack-recycling": {
    type: "recipe",
    name: "production-science-pack-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.production-science-pack"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/production-science-pack.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "production-science-pack",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "production-science-pack",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 1.3125,
    crafting_machine_tint: {
      primary: {
        r: 0.8,
        g: 0,
        b: 1,
        a: 1,
      },
      secondary: {
        r: 0.8,
        g: 0,
        b: 1,
        a: 1,
      },
    },
  },
  "utility-science-pack-recycling": {
    type: "recipe",
    name: "utility-science-pack-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.utility-science-pack"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/utility-science-pack.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "utility-science-pack",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "utility-science-pack",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 1.3125,
    crafting_machine_tint: {
      primary: {
        r: 1,
        g: 0.8,
        b: 0,
        a: 1,
      },
      secondary: {
        r: 1,
        g: 0.8,
        b: 0,
        a: 1,
      },
    },
  },
  "space-science-pack-recycling": {
    type: "recipe",
    name: "space-science-pack-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.space-science-pack"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/space-science-pack.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "space-science-pack",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "space-science-pack",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.9375,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "metallurgic-science-pack-recycling": {
    type: "recipe",
    name: "metallurgic-science-pack-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.metallurgic-science-pack"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/metallurgic-science-pack.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "metallurgic-science-pack",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "metallurgic-science-pack",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.625,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "electromagnetic-science-pack-recycling": {
    type: "recipe",
    name: "electromagnetic-science-pack-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.electromagnetic-science-pack"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/electromagnetic-science-pack.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "electromagnetic-science-pack",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "electromagnetic-science-pack",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.625,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "agricultural-science-pack-recycling": {
    type: "recipe",
    name: "agricultural-science-pack-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.agricultural-science-pack"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/agricultural-science-pack.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "agricultural-science-pack",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "agricultural-science-pack",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.25,
    crafting_machine_tint: {
      primary: [0.1, 0.2, 0, 1],
      secondary: [
        0.63900000000000005684341886080801486968994140625, 0.76400000000000005684341886080801486968994140625,
        1, 1,
      ],
    },
  },
  "cryogenic-science-pack-recycling": {
    type: "recipe",
    name: "cryogenic-science-pack-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.cryogenic-science-pack"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/cryogenic-science-pack.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "cryogenic-science-pack",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "cryogenic-science-pack",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 1.25,
    crafting_machine_tint: {
      primary: {
        r: 0.04,
        g: 0.18599999999999997868371792719699442386627197265625,
        b: 1,
        a: 1,
      },
      secondary: {
        r: 0.2,
        g: 0.4,
        b: 1,
        a: 1,
      },
      tertiary: {
        r: 0.6,
        g: 0.65099999999999997868371792719699442386627197265625,
        b: 1,
        a: 1,
      },
      quaternary: {
        r: 0.1,
        g: 0.3,
        b: 0.5,
        a: 1,
      },
    },
  },
  "promethium-science-pack-recycling": {
    type: "recipe",
    name: "promethium-science-pack-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.promethium-science-pack"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__space-age__/graphics/icons/promethium-science-pack.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "promethium-science-pack",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "promethium-science-pack",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.3125,
    crafting_machine_tint: {
      primary: {
        r: 0,
        g: 0,
        b: 0.1,
        a: 1,
      },
      secondary: {
        r: 0,
        g: 0,
        b: 0.4,
        a: 1,
      },
      tertiary: {
        r: 0.1,
        g: 0.1,
        b: 0.4,
        a: 1,
      },
      quaternary: {
        r: 0,
        g: 0,
        b: 0.1,
        a: 1,
      },
    },
  },
  "upgrade-planner-recycling": {
    type: "recipe",
    name: "upgrade-planner-recycling",
    localised_name: ["recipe-name.recycling", ["item-name.upgrade-planner"]],
    icons: [
      {
        icon: "__quality__/graphics/icons/recycling.png",
      },

      {
        icon: "__base__/graphics/icons/upgrade-planner.png",
        scale: 0.4,
      },

      {
        icon: "__quality__/graphics/icons/recycling-top.png",
      },
    ],
    subgroup: "other",
    category: "recycling",
    hidden: true,
    enabled: true,
    unlock_results: false,
    ingredients: [
      {
        type: "item",
        name: "upgrade-planner",
        amount: 1,
        ignored_by_stats: 1,
      },
    ],
    results: [
      {
        type: "item",
        name: "upgrade-planner",
        amount: 1,
        probability: 0.25,
        ignored_by_stats: 1,
      },
    ],
    energy_required: 0.03125,
    crafting_machine_tint: {
      primary: [0.5, 0.5, 0.5, 0.5],
      secondary: [0.5, 0.5, 0.5, 0.5],
      tertiary: [0.5, 0.5, 0.5, 0.5],
      quaternary: [0.5, 0.5, 0.5, 0.5],
    },
  },
  "bpsb-sbr-iron-ore": {
    type: "recipe",
    name: "bpsb-sbr-iron-ore",
    localised_name: ["item-name.iron-ore"],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbr-iron-ore",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbr-copper-ore": {
    type: "recipe",
    name: "bpsb-sbr-copper-ore",
    localised_name: ["item-name.copper-ore"],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbr-copper-ore",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbr-coal": {
    type: "recipe",
    name: "bpsb-sbr-coal",
    localised_name: ["item-name.coal"],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbr-coal",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbr-stone": {
    type: "recipe",
    name: "bpsb-sbr-stone",
    localised_name: ["item-name.stone"],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbr-stone",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbr-uranium-ore": {
    type: "recipe",
    name: "bpsb-sbr-uranium-ore",
    localised_name: ["item-name.uranium-ore"],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbr-uranium-ore",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbr-crude-oil": {
    type: "recipe",
    name: "bpsb-sbr-crude-oil",
    localised_name: ["fluid-name.crude-oil"],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbr-crude-oil",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbr-tungsten-ore": {
    type: "recipe",
    name: "bpsb-sbr-tungsten-ore",
    localised_name: ["item-name.tungsten-ore"],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbr-tungsten-ore",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbr-calcite": {
    type: "recipe",
    name: "bpsb-sbr-calcite",
    localised_name: ["item-name.calcite"],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbr-calcite",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbr-sulfuric-acid-geyser": {
    type: "recipe",
    name: "bpsb-sbr-sulfuric-acid-geyser",
    localised_name: ["fluid-name.sulfuric-acid"],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbr-sulfuric-acid-geyser",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbr-scrap": {
    type: "recipe",
    name: "bpsb-sbr-scrap",
    localised_name: ["item-name.scrap"],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbr-scrap",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbr-lithium-brine": {
    type: "recipe",
    name: "bpsb-sbr-lithium-brine",
    localised_name: ["fluid-name.lithium-brine"],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbr-lithium-brine",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbr-fluorine-vent": {
    type: "recipe",
    name: "bpsb-sbr-fluorine-vent",
    localised_name: ["fluid-name.fluorine"],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbr-fluorine-vent",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbt-deepwater": {
    type: "recipe",
    name: "bpsb-sbt-deepwater",
    localised_name: ["tile-name.deepwater"],
    icons: [
      {
        icon: "__blueprint-sandboxes__/graphics/icon-x64.png",
        icon_size: 64,
        tint: {
          r: 0.5,
          g: 0.5,
          b: 0.5,
          a: 1,
        },
      },

      {
        icon: "__base__/graphics/terrain/deepwater/deepwater1.png",
        icon_size: 64,
        scale: 0.25,
      },
    ],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbt-deepwater",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbt-deepwater-green": {
    type: "recipe",
    name: "bpsb-sbt-deepwater-green",
    localised_name: ["tile-name.deepwater-green"],
    icons: [
      {
        icon: "__blueprint-sandboxes__/graphics/icon-x64.png",
        icon_size: 64,
        tint: {
          r: 0.5,
          g: 0.5,
          b: 0.5,
          a: 1,
        },
      },

      {
        icon: "__base__/graphics/terrain/deepwater-green/deepwater-green1.png",
        icon_size: 64,
        scale: 0.25,
      },
    ],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbt-deepwater-green",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbt-water": {
    type: "recipe",
    name: "bpsb-sbt-water",
    localised_name: ["tile-name.water"],
    icons: [
      {
        icon: "__blueprint-sandboxes__/graphics/icon-x64.png",
        icon_size: 64,
        tint: {
          r: 0.5,
          g: 0.5,
          b: 0.5,
          a: 1,
        },
      },

      {
        icon: "__base__/graphics/terrain/water/water1.png",
        icon_size: 64,
        scale: 0.25,
      },
    ],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbt-water",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbt-water-green": {
    type: "recipe",
    name: "bpsb-sbt-water-green",
    localised_name: ["tile-name.water-green"],
    icons: [
      {
        icon: "__blueprint-sandboxes__/graphics/icon-x64.png",
        icon_size: 64,
        tint: {
          r: 0.5,
          g: 0.5,
          b: 0.5,
          a: 1,
        },
      },

      {
        icon: "__base__/graphics/terrain/water-green/water-green1.png",
        icon_size: 64,
        scale: 0.25,
      },
    ],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbt-water-green",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbt-water-shallow": {
    type: "recipe",
    name: "bpsb-sbt-water-shallow",
    localised_name: ["tile-name.water-shallow"],
    icons: [
      {
        icon: "__blueprint-sandboxes__/graphics/icon-x64.png",
        icon_size: 64,
        tint: {
          r: 0.5,
          g: 0.5,
          b: 0.5,
          a: 1,
        },
      },

      {
        icon: "__base__/graphics/terrain/water-shallow/water-shallow1.png",
        icon_size: 64,
        scale: 0.25,
      },
    ],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbt-water-shallow",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbt-water-mud": {
    type: "recipe",
    name: "bpsb-sbt-water-mud",
    localised_name: ["tile-name.water-mud"],
    icons: [
      {
        icon: "__blueprint-sandboxes__/graphics/icon-x64.png",
        icon_size: 64,
        tint: {
          r: 0.5,
          g: 0.5,
          b: 0.5,
          a: 1,
        },
      },

      {
        icon: "__base__/graphics/terrain/water-mud/water-mud1.png",
        icon_size: 64,
        scale: 0.25,
      },
    ],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbt-water-mud",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbt-lava": {
    type: "recipe",
    name: "bpsb-sbt-lava",
    localised_name: ["tile-name.lava"],
    icons: [
      {
        icon: "__blueprint-sandboxes__/graphics/icon-x64.png",
        icon_size: 64,
        tint: {
          r: 0.5,
          g: 0.5,
          b: 0.5,
          a: 1,
        },
      },

      {
        icon: "__space-age__/graphics/terrain/vulcanus/lava.png",
        icon_size: 64,
        scale: 0.25,
      },
    ],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbt-lava",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbt-lava-hot": {
    type: "recipe",
    name: "bpsb-sbt-lava-hot",
    localised_name: ["tile-name.lava-hot"],
    icons: [
      {
        icon: "__blueprint-sandboxes__/graphics/icon-x64.png",
        icon_size: 64,
        tint: {
          r: 0.5,
          g: 0.5,
          b: 0.5,
          a: 1,
        },
      },

      {
        icon: "__space-age__/graphics/terrain/vulcanus/lava-hot.png",
        icon_size: 64,
        scale: 0.25,
      },
    ],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbt-lava-hot",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbt-wetland-yumako": {
    type: "recipe",
    name: "bpsb-sbt-wetland-yumako",
    localised_name: ["tile-name.wetland-yumako"],
    icons: [
      {
        icon: "__blueprint-sandboxes__/graphics/icon-x64.png",
        icon_size: 64,
        tint: {
          r: 0.5,
          g: 0.5,
          b: 0.5,
          a: 1,
        },
      },

      {
        icon: "__space-age__/graphics/icons/wetland-yumako.png",
        icon_size: 64,
        scale: 0.5,
      },
    ],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbt-wetland-yumako",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbt-wetland-jellynut": {
    type: "recipe",
    name: "bpsb-sbt-wetland-jellynut",
    localised_name: ["tile-name.wetland-jellynut"],
    icons: [
      {
        icon: "__blueprint-sandboxes__/graphics/icon-x64.png",
        icon_size: 64,
        tint: {
          r: 0.5,
          g: 0.5,
          b: 0.5,
          a: 1,
        },
      },

      {
        icon: "__space-age__/graphics/icons/wetland-jellynut.png",
        icon_size: 64,
        scale: 0.5,
      },
    ],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbt-wetland-jellynut",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbt-wetland-dead-skin": {
    type: "recipe",
    name: "bpsb-sbt-wetland-dead-skin",
    localised_name: ["tile-name.wetland-dead-skin"],
    icons: [
      {
        icon: "__blueprint-sandboxes__/graphics/icon-x64.png",
        icon_size: 64,
        tint: {
          r: 0.5,
          g: 0.5,
          b: 0.5,
          a: 1,
        },
      },

      {
        icon: "__space-age__/graphics/terrain/gleba/wetland-dead-skin.png",
        icon_size: 64,
        scale: 0.25,
      },
    ],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbt-wetland-dead-skin",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbt-wetland-light-dead-skin": {
    type: "recipe",
    name: "bpsb-sbt-wetland-light-dead-skin",
    localised_name: ["tile-name.wetland-light-dead-skin"],
    icons: [
      {
        icon: "__blueprint-sandboxes__/graphics/icon-x64.png",
        icon_size: 64,
        tint: {
          r: 0.5,
          g: 0.5,
          b: 0.5,
          a: 1,
        },
      },

      {
        icon: "__space-age__/graphics/terrain/gleba/wetland-dead-skin.png",
        icon_size: 64,
        scale: 0.25,
      },
    ],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbt-wetland-light-dead-skin",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbt-wetland-green-slime": {
    type: "recipe",
    name: "bpsb-sbt-wetland-green-slime",
    localised_name: ["tile-name.wetland-green-slime"],
    icons: [
      {
        icon: "__blueprint-sandboxes__/graphics/icon-x64.png",
        icon_size: 64,
        tint: {
          r: 0.5,
          g: 0.5,
          b: 0.5,
          a: 1,
        },
      },

      {
        icon: "__space-age__/graphics/terrain/gleba/wetland-green-slime.png",
        icon_size: 64,
        scale: 0.25,
      },
    ],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbt-wetland-green-slime",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbt-wetland-light-green-slime": {
    type: "recipe",
    name: "bpsb-sbt-wetland-light-green-slime",
    localised_name: ["tile-name.wetland-light-green-slime"],
    icons: [
      {
        icon: "__blueprint-sandboxes__/graphics/icon-x64.png",
        icon_size: 64,
        tint: {
          r: 0.5,
          g: 0.5,
          b: 0.5,
          a: 1,
        },
      },

      {
        icon: "__space-age__/graphics/terrain/gleba/wetland-green-slime.png",
        icon_size: 64,
        scale: 0.25,
      },
    ],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbt-wetland-light-green-slime",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbt-wetland-red-tentacle": {
    type: "recipe",
    name: "bpsb-sbt-wetland-red-tentacle",
    localised_name: ["tile-name.wetland-red-tentacle"],
    icons: [
      {
        icon: "__blueprint-sandboxes__/graphics/icon-x64.png",
        icon_size: 64,
        tint: {
          r: 0.5,
          g: 0.5,
          b: 0.5,
          a: 1,
        },
      },

      {
        icon: "__space-age__/graphics/terrain/gleba/wetland-purple-tentacle.png",
        icon_size: 64,
        scale: 0.25,
      },
    ],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbt-wetland-red-tentacle",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbt-wetland-pink-tentacle": {
    type: "recipe",
    name: "bpsb-sbt-wetland-pink-tentacle",
    localised_name: ["tile-name.wetland-pink-tentacle"],
    icons: [
      {
        icon: "__blueprint-sandboxes__/graphics/icon-x64.png",
        icon_size: 64,
        tint: {
          r: 0.5,
          g: 0.5,
          b: 0.5,
          a: 1,
        },
      },

      {
        icon: "__space-age__/graphics/terrain/gleba/wetland-purple-tentacle.png",
        icon_size: 64,
        scale: 0.25,
      },
    ],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbt-wetland-pink-tentacle",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbt-wetland-blue-slime": {
    type: "recipe",
    name: "bpsb-sbt-wetland-blue-slime",
    localised_name: ["tile-name.wetland-blue-slime"],
    icons: [
      {
        icon: "__blueprint-sandboxes__/graphics/icon-x64.png",
        icon_size: 64,
        tint: {
          r: 0.5,
          g: 0.5,
          b: 0.5,
          a: 1,
        },
      },

      {
        icon: "__base__/graphics/terrain/water/water1.png",
        icon_size: 64,
        scale: 0.25,
      },
    ],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbt-wetland-blue-slime",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbt-gleba-deep-lake": {
    type: "recipe",
    name: "bpsb-sbt-gleba-deep-lake",
    localised_name: ["tile-name.gleba-deep-lake"],
    icons: [
      {
        icon: "__blueprint-sandboxes__/graphics/icon-x64.png",
        icon_size: 64,
        tint: {
          r: 0.5,
          g: 0.5,
          b: 0.5,
          a: 1,
        },
      },

      {
        icon: "__base__/graphics/terrain/deepwater/deepwater1.png",
        icon_size: 64,
        scale: 0.25,
      },
    ],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbt-gleba-deep-lake",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbt-oil-ocean-shallow": {
    type: "recipe",
    name: "bpsb-sbt-oil-ocean-shallow",
    localised_name: ["tile-name.oil-ocean-shallow"],
    icons: [
      {
        icon: "__blueprint-sandboxes__/graphics/icon-x64.png",
        icon_size: 64,
        tint: {
          r: 0.5,
          g: 0.5,
          b: 0.5,
          a: 1,
        },
      },

      {
        icon: "__space-age__/graphics/terrain/oil-sand-8x.png",
        icon_size: 64,
        scale: 0.25,
      },
    ],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbt-oil-ocean-shallow",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbt-oil-ocean-deep": {
    type: "recipe",
    name: "bpsb-sbt-oil-ocean-deep",
    localised_name: ["tile-name.oil-ocean-deep"],
    icons: [
      {
        icon: "__blueprint-sandboxes__/graphics/icon-x64.png",
        icon_size: 64,
        tint: {
          r: 0.5,
          g: 0.5,
          b: 0.5,
          a: 1,
        },
      },

      {
        icon: "__space-age__/graphics/terrain/oil-ocean-deep.png",
        icon_size: 64,
        scale: 0.25,
      },
    ],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbt-oil-ocean-deep",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbt-ammoniacal-ocean": {
    type: "recipe",
    name: "bpsb-sbt-ammoniacal-ocean",
    localised_name: ["tile-name.ammoniacal-ocean"],
    icons: [
      {
        icon: "__blueprint-sandboxes__/graphics/icon-x64.png",
        icon_size: 64,
        tint: {
          r: 0.5,
          g: 0.5,
          b: 0.5,
          a: 1,
        },
      },

      {
        icon: "__base__/graphics/terrain/water/water1.png",
        icon_size: 64,
        scale: 0.25,
      },
    ],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbt-ammoniacal-ocean",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbt-ammoniacal-ocean-2": {
    type: "recipe",
    name: "bpsb-sbt-ammoniacal-ocean-2",
    localised_name: ["tile-name.ammoniacal-ocean-2"],
    icons: [
      {
        icon: "__blueprint-sandboxes__/graphics/icon-x64.png",
        icon_size: 64,
        tint: {
          r: 0.5,
          g: 0.5,
          b: 0.5,
          a: 1,
        },
      },

      {
        icon: "__base__/graphics/terrain/water/water1.png",
        icon_size: 64,
        scale: 0.25,
      },
    ],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbt-ammoniacal-ocean-2",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbt-brash-ice": {
    type: "recipe",
    name: "bpsb-sbt-brash-ice",
    localised_name: ["tile-name.brash-ice"],
    icons: [
      {
        icon: "__blueprint-sandboxes__/graphics/icon-x64.png",
        icon_size: 64,
        tint: {
          r: 0.5,
          g: 0.5,
          b: 0.5,
          a: 1,
        },
      },

      {
        icon: "__base__/graphics/terrain/deepwater/deepwater1.png",
        icon_size: 64,
        scale: 0.25,
      },
    ],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbt-brash-ice",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbt-lab-tile-planner": {
    type: "recipe",
    name: "bpsb-sbt-lab-tile-planner",
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbt-lab-tile-planner",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
  "bpsb-sbt-empty-space": {
    type: "recipe",
    name: "bpsb-sbt-empty-space",
    localised_name: ["tile-name.empty-space"],
    icons: [
      {
        icon: "__blueprint-sandboxes__/graphics/icon-x64.png",
        icon_size: 64,
        tint: {
          r: 0.5,
          g: 0.5,
          b: 0.5,
          a: 1,
        },
      },

      {
        icon: "__space-age__/graphics/terrain/empty-space.png",
        icon_size: 32,
        scale: 1,
      },
    ],
    hidden_in_factoriopedia: true,
    energy_required: 1,
    enabled: false,
    ingredients: {},
    results: [
      {
        type: "item",
        name: "bpsb-sbt-empty-space",
        amount: 1,
      },
    ],
    hide_from_stats: true,
    hide_from_signal_gui: true,
  },
};
