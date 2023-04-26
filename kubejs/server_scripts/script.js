// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	event.remove({ output: 'mekanism:metallurgic_infuser' })
	event.remove({ output: 'mekanism:mekasuit_helmet' })
	event.remove({ output: 'mekanism:mekasuit_bodyarmor' })
	event.remove({ output: 'mekanism:mekasuit_pants' })
	event.remove({ output: 'mekanism:mekasuit_boots' })
	event.remove({ output: 'draconicevolution:wyvern_chestpiece' })
	event.remove({ output: 'angelring:itemdiamondring' })
	event.remove({ output: 'botania:flight_tiara' })
	event.shaped(
		Item.of('mekanism:metallurgic_infuser', 1), 
		[ 
		  'ABA', 
		  'CDC', 
		  'ABA'  
		],
		{
		  A: 'minecraft:iron_ingot', 
		  B: 'thermal:machine_furnace',  
		  C: 'minecraft:redstone',
		  D: '#forge:ingots/osmium'   
		}
	  )
	  event.shaped(
		Item.of('mekanism:mekasuit_helmet', 1), 
		[ 
		  'ABA', 
		  'ADA', 
		  'CEC'  
		],
		{
		  A: 'mekanism:hdpe_sheet', 
		  B: 'mekanism:ultimate_control_circuit',  
		  C: 'mekanism:pellet_polonium',
		  D: 'dreadsteel:dreadsteel_helmet',
		  E: 'mekanism:basic_induction_cell'   
		}
	  )
	  event.shaped(
		Item.of('mekanism:mekasuit_bodyarmor', 1), 
		[ 
		  'ABA', 
		  'ADA', 
		  'CEC'  
		],
		{
		  A: 'mekanism:hdpe_sheet', 
		  B: 'mekanism:ultimate_control_circuit',  
		  C: 'mekanism:pellet_polonium',
		  D: 'dreadsteel:dreadsteel_chestplate',
		  E: 'mekanism:basic_induction_cell'   
		}
	  )
	  event.shaped(
		Item.of('mekanism:mekasuit_pants', 1), 
		[ 
		  'ABA', 
		  'ADA', 
		  'CEC'  
		],
		{
		  A: 'mekanism:hdpe_sheet', 
		  B: 'mekanism:ultimate_control_circuit',  
		  C: 'mekanism:pellet_polonium',
		  D: 'dreadsteel:dreadsteel_leggings',
		  E: 'mekanism:basic_induction_cell'   
		}
	  )
	  event.shaped(
		Item.of('mekanism:mekasuit_boots', 1), 
		[ 
		  'ABA', 
		  'ADA', 
		  'CEC'  
		],
		{
		  A: 'mekanism:hdpe_sheet', 
		  B: 'mekanism:ultimate_control_circuit',  
		  C: 'mekanism:pellet_polonium',
		  D: 'dreadsteel:dreadsteel_boots',
		  E: 'mekanism:basic_induction_cell'   
		}
	  )
	  event.shaped(
		Item.of('mekanism:meka_tool', 1), 
		[ 
		  'BFB', 
		  'ADA', 
		  'CEC'  
		],
		{
		  A: 'mekanism:hdpe_sheet', 
		  B: 'mekanism:ultimate_control_circuit',  
		  C: 'mekanism:pellet_polonium',
		  D: 'mekanism:atomic_disassembler',
		  E: 'mekanism:basic_induction_cell',
		  F: 'dreadsteel:dreadsteel_scythe'   
		}
	  )
	  event.shaped(
		Item.of('angelring:itemdiamondring', 1), 
		[ 
		  'ABA', 
		  'CDF', 
		  'AEA'  
		],
		{
		  A: 'enigmaticlegacy:astral_dust', 
		  B: 'bloodmagic:teleposer',  
		  C: 'silentgear:tyrian_steel_block',
		  D: 'minecraft:elytra',
		  E: 'botanicpledge:yggdralium_block',
		  F: 'powah:nitro_crystal_block'   
		}
	  )
	  event.shaped(
		Item.of('botania:flight_tiara', 1), 
		[ 
		  'AAA', 
		  'CAC', 
		  'DBD'  
		],
		{
		  A: 'botania:life_essence', 
		  B: 'botania:ender_air_bottle',  
		  C: 'botania:terrasteel_ingot',
		  D: 'mythicbotany:asgard_rune'   
		}
	  )

	  // WYVERN CHEST PIECE
	  event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "draconicevolution:wyvern_chestpiece",
        },
        catalyst: {
            item: "mekanism:mekasuit_bodyarmor",
        },
        total_energy: 10000000,
        tier: "WYVERN",
        ingredients: [
            {
                item: "draconicevolution:draconium_core",
            },
            {
                item: "draconicevolution:draconium_ingot",
            },
            {
                item: "draconicevolution:wyvern_energy_core",
            },
            {
                item: "draconicevolution:draconium_ingot",
            },
            {
                item: "draconicevolution:basic_relay_crystal",
            },
            {
                item: "draconicevolution:basic_relay_crystal",
            }
        ]
    });
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})