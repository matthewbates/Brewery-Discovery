puts '🌱 Seeding data...'

puts '🗑 Destroying old data...'
Brewery.destroy_all
Beer.destroy_all

puts '🏭 Creating breweries...'
# MATTHEW'S BREWERIES
Brewery.create!(
  brewery_name: 'Goat Patch Brewing Co.',
  brewery_logo:
    'http://static1.squarespace.com/static/597908c415d5dbbbd8e7eecb/5c36a6f7032be43d787d3a31/61a836254233ba62c09541c6/1638414019064/Ocean-and-Sea_Goat-Patch_Patch.png?format=1500w',
  flagship_beers: 13,
  brewery_website: 'https://www.goatpatchbrewing.com/',
)
Brewery.create!(
  brewery_name: 'Paradox Brewing Co.',
  brewery_logo: 'http://paradoxbeercompany.com/main_htm_files/98.jpg',
  flagship_beers: 20,
  brewery_website: 'http://paradoxbeercompany.com/index.php',
)
Brewery.create!(
  brewery_name: 'Manitou Brewing Co.',
  brewery_logo:
    'https://images.squarespace-cdn.com/content/v1/555cd8b8e4b0c647a26e43c9/1549308151527-WCT01B0ZTA5LYAQXG49C/manitou+logo.jpg?format=1000w',
  flagship_beers: 17,
  brewery_website: 'https://www.manitoubrewing.com/',
)
Brewery.create!(
  brewery_name: 'Crooked Stave Artesian Beer Project',
  brewery_logo:
    'https://pbs.twimg.com/profile_images/1225469298438619137/Fkv8c45b_400x400.jpg',
  flagship_beers: 6,
  brewery_website: 'https://www.crookedstave.com/',
)
Brewery.create!(
  brewery_name: 'Cerberus Brewing Co.',
  brewery_logo:
    'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.18169-9/26195867_2046249662261752_917211701343023163_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=iodHLbdrE6MAX85btr4&_nc_ht=scontent.fapa1-2.fna&oh=00_AT_VPa_F3CiBDeXiV7QUNAQMExZSoaF1ryF9Kdtw6H_L7g&oe=6248B35A',
  flagship_beers: 20,
  brewery_website: 'https://www.cerberusbrewingco.com/',
)
Brewery.create!(
  brewery_name: 'Red Leg Brewing Co.',
  brewery_logo:
    'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.18169-9/25353997_1249876345111856_5902534745385702768_n.png?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=jppM6AXCI1cAX9LIKmR&_nc_oc=AQmJYGdEkqNTlEYD_UInp4j7dQ73R-LfeNZ37dT5vKicKxxy87AdT-NVj5ewQlvTTreBvnTvLRQze0cSreYJMAAP&_nc_ht=scontent.fapa1-2.fna&oh=00_AT-iWK0SMf7CTd179bkKX7kN-TowcUffhXihZTDOinH4yQ&oe=6248A585',
  flagship_beers: 6,
  brewery_website: 'https://redlegbrewing.com/',
)
# HALEEM'S BREWERIES
Brewery.create!(
  brewery_name: 'Common Space Brewery',
  brewery_logo:
    'https://images.squarespace-cdn.com/content/v1/5ce849fdc95df000011ea5e7/1576102004169-0SF0QD6X32OG6NH4BX8N/common+space+private+event+terms?format=1000w',
  flagship_beers: 17,
  brewery_website: 'https://www.commonspace.la/',
)
Brewery.create!(
  brewery_name: 'L.A. Ale Works',
  brewery_logo:
    'https://pbs.twimg.com/profile_images/743131585399054337/BJ83X5xs_400x400.jpg',
  flagship_beers: 27,
  brewery_website: 'https://www.laaleworks.com/',
)
Brewery.create!(
  brewery_name: 'Monkish Brewing',
  brewery_logo:
    'https://beerstreetjournal.com/wp-content/uploads/Monkish-Brewing-Co.-Logo.png',
  flagship_beers: 13,
  brewery_website: 'https://www.monkishbrewing.com/',
)
Brewery.create!(
  brewery_name: 'Goat Patch Brewing Co.',
  brewery_logo:
    'http://static1.squarespace.com/static/597908c415d5dbbbd8e7eecb/5c36a6f7032be43d787d3a31/61a836254233ba62c09541c6/1638414019064/Ocean-and-Sea_Goat-Patch_Patch.png?format=1500w',
  flagship_beers: 13,
  brewery_website: 'https://www.goatpatchbrewing.com/',
)
Brewery.create!(
  brewery_name: 'Goat Patch Brewing Co.',
  brewery_logo:
    'http://static1.squarespace.com/static/597908c415d5dbbbd8e7eecb/5c36a6f7032be43d787d3a31/61a836254233ba62c09541c6/1638414019064/Ocean-and-Sea_Goat-Patch_Patch.png?format=1500w',
  flagship_beers: 13,
  brewery_website: 'https://www.goatpatchbrewing.com/',
)
Brewery.create!(
  brewery_name: 'Goat Patch Brewing Co.',
  brewery_logo:
    'http://static1.squarespace.com/static/597908c415d5dbbbd8e7eecb/5c36a6f7032be43d787d3a31/61a836254233ba62c09541c6/1638414019064/Ocean-and-Sea_Goat-Patch_Patch.png?format=1500w',
  flagship_beers: 13,
  brewery_website: 'https://www.goatpatchbrewing.com/',
)
puts '🍺 Creating beers...'

puts '✅ Seeding done!'
