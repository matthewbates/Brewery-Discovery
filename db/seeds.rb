puts '🌱 Seeding data...'

puts '🗑 Destroying old data...'
Brewery.destroy_all
Beer.destroy_all
User.destroy_all

# create a couple test users as seed data
User.create(username: 'test', password: 'test')

puts '🏭 Creating breweries...'
# MATTHEW'S BREWERIES
b1 =
  Brewery.create!(
    brewery_name: 'Goat Patch Brewing Co.',
    brewery_logo:
      'http://static1.squarespace.com/static/597908c415d5dbbbd8e7eecb/5c36a6f7032be43d787d3a31/61a836254233ba62c09541c6/1638414019064/Ocean-and-Sea_Goat-Patch_Patch.png?format=1500w',
    flagship_beers: 13,
    brewery_website: 'https://www.goatpatchbrewing.com/',
    brewery_address:
      '2727 North. Cascade Avenue #123, Colorado Springs, CO 80907',
    is_favorite: 0,
    brewery_phone_number: '(719) 471-4628',
    brewery_state: 'CO',
  )
b2 =
  Brewery.create!(
    brewery_name: 'Paradox Brewing Co.',
    brewery_logo: 'http://paradoxbeercompany.com/main_htm_files/98.jpg',
    flagship_beers: 20,
    brewery_website: 'http://paradoxbeercompany.com/index.php',
    brewery_address: '10 Buffalo Court, Divide, CO 80814',
    is_favorite: 0,
    brewery_phone_number: '(719) 686-8081',
    brewery_state: 'CO',
  )
b3 =
  Brewery.create!(
    brewery_name: 'Manitou Brewing Co.',
    brewery_logo:
      'https://images.squarespace-cdn.com/content/v1/555cd8b8e4b0c647a26e43c9/1549308151527-WCT01B0ZTA5LYAQXG49C/manitou+logo.jpg?format=1000w',
    flagship_beers: 17,
    brewery_website: 'https://www.manitoubrewing.com/',
    brewery_address: '725 Manitou Avenue, Manitou Springs, CO 80829',
    is_favorite: 0,
    brewery_phone_number: '(719) 282-7709',
    brewery_state: 'CO',
  )
b4 =
  Brewery.create!(
    brewery_name: 'Crooked Stave Artesian Beer Project',
    brewery_logo:
      'https://pbs.twimg.com/profile_images/1225469298438619137/Fkv8c45b_400x400.jpg',
    flagship_beers: 6,
    brewery_website: 'https://www.crookedstave.com/',
    brewery_address: '1441 W 46th Avenue Unit 19, Denver, CO 80211',
    is_favorite: 0,
    brewery_phone_number: '(720) 508-3292',
    brewery_state: 'CO',
  )
b5 =
  Brewery.create!(
    brewery_name: 'Cerberus Brewing Co.',
    brewery_logo:
      'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.18169-9/26195867_2046249662261752_917211701343023163_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=iodHLbdrE6MAX85btr4&_nc_ht=scontent.fapa1-2.fna&oh=00_AT_VPa_F3CiBDeXiV7QUNAQMExZSoaF1ryF9Kdtw6H_L7g&oe=6248B35A',
    flagship_beers: 20,
    brewery_website: 'https://www.cerberusbrewingco.com/',
    brewery_address: '702 W Colorado Avenue, Colorado Springs, CO 80905',
    is_favorite: 0,
    brewery_phone_number: '(719) 636-2337',
    brewery_state: 'CO',
  )
b6 =
  Brewery.create!(
    brewery_name: 'Red Leg Brewing Co.',
    brewery_logo:
      'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.18169-9/25353997_1249876345111856_5902534745385702768_n.png?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=jppM6AXCI1cAX9LIKmR&_nc_oc=AQmJYGdEkqNTlEYD_UInp4j7dQ73R-LfeNZ37dT5vKicKxxy87AdT-NVj5ewQlvTTreBvnTvLRQze0cSreYJMAAP&_nc_ht=scontent.fapa1-2.fna&oh=00_AT-iWK0SMf7CTd179bkKX7kN-TowcUffhXihZTDOinH4yQ&oe=6248A585',
    flagship_beers: 6,
    brewery_website: 'https://redlegbrewing.com/',
    brewery_address: '2323 Garden of the Gods Road, Colorado Springs, CO 80907',
    is_favorite: 0,
    brewery_phone_number: '(719) 598-3776',
    brewery_state: 'CO',
  )
# HALEEM'S BREWERIES
b7 =
  Brewery.create!(
    brewery_name: 'Common Space Brewery',
    brewery_logo:
      'https://images.squarespace-cdn.com/content/v1/5ce849fdc95df000011ea5e7/1576102004169-0SF0QD6X32OG6NH4BX8N/common+space+private+event+terms?format=1000w',
    flagship_beers: 17,
    brewery_website: 'https://www.commonspace.la/',
    brewery_address: '3411 W El Segundo Boulevard, Hawthorne, CA 90250',
    is_favorite: 0,
    brewery_phone_number: '(424) 456-4355',
    brewery_state: 'CA',
  )
b8 =
  Brewery.create!(
    brewery_name: 'L.A. Ale Works',
    brewery_logo:
      'https://pbs.twimg.com/profile_images/743131585399054337/BJ83X5xs_400x400.jpg',
    flagship_beers: 27,
    brewery_website: 'https://www.laaleworks.com/',
    brewery_address: '12918 Cerise Avenue, Hawthorne, CA 90250',
    is_favorite: 0,
    brewery_phone_number: '(424) 456-4191',
    brewery_state: 'CA',
  )
b9 =
  Brewery.create!(
    brewery_name: 'Monkish Brewing',
    brewery_logo:
      'https://beerstreetjournal.com/wp-content/uploads/Monkish-Brewing-Co.-Logo.png',
    flagship_beers: 13,
    brewery_website: 'https://www.monkishbrewing.com/',
    brewery_address: '20311 S Western Avenue, Torrance, CA 90501',
    is_favorite: 0,
    brewery_phone_number: '(310) 295-2157',
    brewery_state: 'CA',
  )
b10 =
  Brewery.create!(
    brewery_name: 'Congregation Ale House',
    brewery_logo:
      'https://congregationalehouse.com/wp-content/uploads/2021/05/cahlogo-1.png',
    flagship_beers: 13,
    brewery_website: 'https://congregationalehouse.com/',
    brewery_address: '619 N Azusa Avenue, Azusa, CA 91702',
    is_favorite: 0,
    brewery_phone_number: '(626) 334-2337',
    brewery_state: 'CA',
  )
b11 =
  Brewery.create!(
    brewery_name: 'Angel City Brewery',
    brewery_logo:
      'https://pbs.twimg.com/profile_images/1125405564354404352/AwByWtOK_400x400.png',
    flagship_beers: 3,
    brewery_website: 'https://angelcitybrewery.com/',
    brewery_address: '216 S Alameda Street, Los Angeles, CA 90012',
    is_favorite: 0,
    brewery_phone_number: '(213) 537-5550',
    brewery_state: 'CA',
  )
b12 =
  Brewery.create!(
    brewery_name: 'Homebound Brewhaus',
    brewery_logo:
      'https://static.wixstatic.com/media/4c91e0_6a2a9662fc1f46508b78c5dd02ed990f~mv2.png/v1/fill/w_220,h_184,al_c,q_85,usm_0.66_1.00_0.01/homebound-logo-house-07.webp',
    flagship_beers: 14,
    brewery_website: 'https://www.goatpatchbrewing.com/',
    brewery_address: '800 N Alameda Street, Los Angeles, CA 90012',
    is_favorite: 0,
    brewery_phone_number: '(306) 850-8288',
    brewery_state: 'CA',
  )
# MYLES' BREWERIES
b13 =
  Brewery.create!(
    brewery_name: 'Ballast Point',
    brewery_logo:
      'https://m.media-amazon.com/images/I/61e6HbVBkPL._AC_SY450_.jpg',
    flagship_beers: 13,
    brewery_website: 'https://ballastpoint.com/',
    brewery_address: '9045 Carroll Way, San Diego, CA 92121',
    is_favorite: 0,
    brewery_phone_number: '(858) 790-6901',
    brewery_state: 'CA',
  )
b14 =
  Brewery.create!(
    brewery_name: 'Harland Brewing Co.',
    brewery_logo:
      'https://dr8h81twidjpw.cloudfront.net/uploads/popup_setting/popup_logo_img/Harland_Logo_Large_2007072336.png',
    flagship_beers: 4,
    brewery_website: 'https://harlandbeer.com/',
    brewery_address: '3718 Paseo Place Suite 1300, San Diego, CA 92130',
    is_favorite: 0,
    brewery_phone_number: '(858) 800-4566',
    brewery_state: 'CA',
  )
b15 =
  Brewery.create!(
    brewery_name: 'Mike Hess Brewing',
    brewery_logo:
      'https://cdn.craftbeer.com/wp-content/uploads/MHB_revised_primary_logo1.jpg',
    flagship_beers: 10,
    brewery_website: 'https://www.mikehessbrewing.com/',
    brewery_address: '4893 Voltaire Street, San Diego, CA 92107',
    is_favorite: 0,
    brewery_phone_number: '(619) 795-1095',
    brewery_state: 'CA',
  )
b16 =
  Brewery.create!(
    brewery_name: 'Stone Brewing',
    brewery_logo:
      'https://www.csbeverage.com/wp-content/uploads/2016/10/stone-brewing-company.jpg',
    flagship_beers: 10,
    brewery_website: 'https://www.stonebrewing.com/',
    brewery_address: '202 S Raymond Avenue, Pasadena, CA 91105',
    is_favorite: 0,
    brewery_phone_number: '(626) 440-7243',
    brewery_state: 'CA',
  )
b17 =
  Brewery.create!(
    brewery_name: 'Karl Strauss Brewing Co.',
    brewery_logo:
      'https://www.craftbrewingbusiness.com/wp-content/uploads/2013/12/karl-strauss-brewing-logo-001.jpg',
    flagship_beers: 11,
    brewery_website: 'https://www.karlstrauss.com/',
    brewery_address: ' 1157 Columbia Street, San Diego, CA 92101',
    is_favorite: 0,
    brewery_phone_number: '(619) 234-2739',
    brewery_state: 'CA',
  )
b18 =
  Brewery.create!(
    brewery_name: 'California Wild Ales',
    brewery_logo:
      'https://h8m9w9k7.rocketcdn.me/wp-content/uploads/2016/03/CWA-Logo-380px.png',
    flagship_beers: 42,
    brewery_website: 'https://californiawildales.com/',
    brewery_address: '4202 Sorrento Valley Boulevard, San Diego, CA 92121',
    is_favorite: 0,
    brewery_phone_number: '(855) 945-3253',
    brewery_state: 'CA',
  )

puts '🍺 Creating beers...'
# Goat Patch
a1 =
  Beer.create!(
    beer_name: 'Blonde Ale',
    beer_abv: 4.1,
    beer_type: 'Blonde Ale',
    brewery: b1,
  )
a2 =
  Beer.create!(
    beer_name: 'American Wheat',
    beer_abv: 6.6,
    beer_type: 'Wheat Beer - Other',
    brewery: b1,
  )
a3 =
  Beer.create!(
    beer_name: 'It Takes A Tribe Red Ale',
    beer_abv: 5.6,
    beer_type: 'Scottish Ale',
    brewery: b1,
  )
a4 =
  Beer.create!(
    beer_name: 'Hazy Unfiltered IPA',
    beer_abv: 6.4,
    beer_type: 'IPA - New England',
    brewery: b1,
  )
a5 =
  Beer.create!(
    beer_name: 'Goat Patch IPA',
    beer_abv: 6.6,
    beer_type: 'IPA - American',
    brewery: b1,
  )
# Paradox
a6 =
  Beer.create!(
    beer_name: 'La Fiesta',
    beer_abv: 5.0,
    beer_type: 'Mexican Lager',
    brewery: b2,
  )
a7 =
  Beer.create!(
    beer_name: 'Dunk Your Face Munich Dunkel',
    beer_abv: 5.2,
    beer_type: 'Dark Lager - Munich Style Dunkel',
    brewery: b2,
  )
a8 =
  Beer.create!(
    beer_name: 'Logic Bomb',
    beer_abv: 6.5,
    beer_type: 'Unfiltered Sour IPA',
    brewery: b2,
  )
a9 =
  Beer.create!(
    beer_name: 'Future Knowledge',
    beer_abv: 6.6,
    beer_type: 'Aged Sour Farmhouse',
    brewery: b2,
  )
a10 =
  Beer.create!(
    beer_name: 'The Salty Peach',
    beer_abv: 6.0,
    beer_type: 'Mixed Culture Sour',
    brewery: b2,
  )
# Manitou Brewing
a11 =
  Beer.create!(
    beer_name: 'Manitou Lager',
    beer_abv: 5.0,
    beer_type: 'German Pilsner',
    brewery: b3,
  )
a12 =
  Beer.create!(
    beer_name: 'Westside Wheat',
    beer_abv: 5.6,
    beer_type: 'American Wheat',
    brewery: b3,
  )
a13 =
  Beer.create!(
    beer_name: 'High Ground IPA',
    beer_abv: 6.9,
    beer_type: 'IPA - American',
    brewery: b3,
  )
a14 =
  Beer.create!(
    beer_name: 'Barr Trail Pale Ale',
    beer_abv: 5.5,
    beer_type: 'Pale Ale',
    brewery: b3,
  )
a15 =
  Beer.create!(
    beer_name: 'Burro Barn Brown Ale',
    beer_abv: 5.5,
    beer_type: 'American Brown Ale',
    brewery: b3,
  )
# Crooked Stave
a16 =
  Beer.create!(
    beer_name: 'Sour Rosé',
    beer_abv: 4.0,
    beer_type: 'Sour Ale Aged With Raspberries & Blueberries',
    brewery: b4,
  )
a17 =
  Beer.create!(
    beer_name: 'Juicy East IPA',
    beer_abv: 6.0,
    beer_type: 'IPA - New England',
    brewery: b4,
  )
a18 =
  Beer.create!(
    beer_name: 'Juicy West IPA',
    beer_abv: 6.0,
    beer_type: 'IPA - West Coast',
    brewery: b4,
  )
a19 =
  Beer.create!(
    beer_name: 'Petite Sour Raspberry',
    beer_abv: 4.5,
    beer_type: 'Wile Ale Aged With Washington Raspberries',
    brewery: b4,
  )
a20 =
  Beer.create!(
    beer_name: 'Petite Sour Blueberry',
    beer_abv: 4.5,
    beer_type: 'Wile Ale Aged With Washington Blueberries',
    brewery: b4,
  )
# Cerberus
a21 =
  Beer.create!(
    beer_name: 'No Big Deal',
    beer_abv: 5.0,
    beer_type: 'German Style Kolsch',
    brewery: b5,
  )
a22 =
  Beer.create!(
    beer_name: 'Infinity ESB',
    beer_abv: 5.6,
    beer_type: 'American Lager',
    brewery: b5,
  )
a23 =
  Beer.create!(
    beer_name: 'Tiny Umbrella Party',
    beer_abv: 7.0,
    beer_type: 'IPA - West Coast',
    brewery: b5,
  )
a24 =
  Beer.create!(
    beer_name: 'Devil In A Red Dress',
    beer_abv: 7.5,
    beer_type: 'Cherry Cheesecake Kettle Sour',
    brewery: b5,
  )
a25 =
  Beer.create!(
    beer_name: 'Juicehead',
    beer_abv: 7.7,
    beer_type: 'Grapefruit IPA',
    brewery: b5,
  )
# Red Leg
a26 =
  Beer.create!(
    beer_name: 'Springs Lite Lager',
    beer_abv: 4.1,
    beer_type: 'Filtered Lager',
    brewery: b6,
  )
a27 =
  Beer.create!(
    beer_name: 'Howitzer',
    beer_abv: 5.3,
    beer_type: 'Amber Ale',
    brewery: b6,
  )
a28 =
  Beer.create!(
    beer_name: 'Hazy IPA',
    beer_abv: 6.0,
    beer_type: 'IPA - New England',
    brewery: b6,
  )
a29 =
  Beer.create!(
    beer_name: 'Hello Hefe',
    beer_abv: 7.5,
    beer_type: 'Hefeweizen',
    brewery: b6,
  )
a30 =
  Beer.create!(
    beer_name: "Prospector's Pick",
    beer_abv: 5.3,
    beer_type: 'Kolsch',
    brewery: b6,
  )
# Common Space
a31 =
  Beer.create!(
    beer_name: 'Stress Dissolver',
    beer_abv: 5.0,
    beer_type: 'Cherry Limeade Kettle Sour',
    brewery: b7,
  )
a32 =
  Beer.create!(
    beer_name: 'Strata Peak',
    beer_abv: 5.0,
    beer_type: 'Single Hopped Hazy Pale Ale',
    brewery: b7,
  )
a33 =
  Beer.create!(
    beer_name: 'Trippy Town',
    beer_abv: 8.5,
    beer_type: 'DIPA',
    brewery: b7,
  )
a34 =
  Beer.create!(
    beer_name: 'Food Fight',
    beer_abv: 6.5,
    beer_type: 'Hazy IPA',
    brewery: b7,
  )
a35 =
  Beer.create!(
    beer_name: 'Yay! Sayer',
    beer_abv: 6.7,
    beer_type: 'IPA - West Coast',
    brewery: b7,
  )
# L.A. Ale Works
a36 =
  Beer.create!(
    beer_name: 'Goldilocks',
    beer_abv: 5.0,
    beer_type: 'Blonde Kolsch',
    brewery: b8,
  )
a37 =
  Beer.create!(
    beer_name: 'Corazon',
    beer_abv: 5.5,
    beer_type: 'Pilsner',
    brewery: b8,
  )
a38 =
  Beer.create!(
    beer_name: 'Dead Cowboy',
    beer_abv: 5.5,
    beer_type: 'Red Lager',
    brewery: b8,
  )
a39 =
  Beer.create!(
    beer_name: '525 Pale Ale',
    beer_abv: 5.7,
    beer_type: 'American Pale Ale',
    brewery: b8,
  )
a40 =
  Beer.create!(
    beer_name: 'Lunar Kitten IPA',
    beer_abv: 7.5,
    beer_type: 'IPA - West Coast',
    brewery: b8,
  )
# Monkish
a41 =
  Beer.create!(
    beer_name: 'Dark & Mild',
    beer_abv: 3.5,
    beer_type: 'English Dark Mild',
    brewery: b9,
  )
a42 =
  Beer.create!(
    beer_name: 'Pew Bier',
    beer_abv: 4.9,
    beer_type: 'German Style Pilsner',
    brewery: b9,
  )
a43 =
  Beer.create!(
    beer_name: 'Wild Aquatic',
    beer_abv: 5.6,
    beer_type: 'Wile Ale Aged In Oak Puncheons',
    brewery: b9,
  )
a44 =
  Beer.create!(
    beer_name: 'Space Cookie',
    beer_abv: 8.3,
    beer_type: 'DIPA',
    brewery: b9,
  )
a45 =
  Beer.create!(
    beer_name: 'Pepperoni Bobby',
    beer_abv: 8.8,
    beer_type: 'Double Dry Hopped DIPA',
    brewery: b9,
  )
# Congregation
a46 =
  Beer.create!(
    beer_name: 'Cerveza De Mi Padre',
    beer_abv: 4.9,
    beer_type: 'Mexican Lager',
    brewery: b10,
  )
a47 =
  Beer.create!(
    beer_name: 'Consummatum',
    beer_abv: 8.8,
    beer_type: 'Imperial IPA',
    brewery: b10,
  )
a48 =
  Beer.create!(
    beer_name: 'Dark Of The Covenant',
    beer_abv: 8.8,
    beer_type: 'Strong Ale',
    brewery: b10,
  )
a49 =
  Beer.create!(
    beer_name: 'Just Like Honey',
    beer_abv: 5.8,
    beer_type: 'Honey Amber Ale',
    brewery: b10,
  )
a50 =
  Beer.create!(
    beer_name: 'Forbidden Fruits',
    beer_abv: 3.5,
    beer_type: 'Berliner Weisse With Tart Cherry',
    brewery: b10,
  )
# Angel City
a51 =
  Beer.create!(
    beer_name: 'L.A. Blonde',
    beer_abv: 5.0,
    beer_type: 'Blonde Ale',
    brewery: b11,
  )
a52 =
  Beer.create!(
    beer_name: 'Angel City IPA',
    beer_abv: 6.1,
    beer_type: 'IPA - West Coast',
    brewery: b11,
  )
a53 =
  Beer.create!(
    beer_name: 'Sunbather',
    beer_abv: 4.2,
    beer_type: 'Session Sour Ale',
    brewery: b11,
  )
# Homebound
a54 =
  Beer.create!(
    beer_name: 'Before Times',
    beer_abv: 4.7,
    beer_type: 'Aged Lager',
    brewery: b12,
  )
a55 =
  Beer.create!(
    beer_name: 'High Five',
    beer_abv: 5.0,
    beer_type: 'Rye Pale Ale',
    brewery: b12,
  )
a56 =
  Beer.create!(
    beer_name: 'Loge',
    beer_abv: 5.1,
    beer_type: 'Light Lager',
    brewery: b12,
  )
a57 =
  Beer.create!(
    beer_name: 'Rain Check',
    beer_abv: 5.5,
    beer_type: 'Pilsner',
    brewery: b12,
  )
a58 =
  Beer.create!(
    beer_name: 'Carpe Diem',
    beer_abv: 3.4,
    beer_type: 'Petite Saison',
    brewery: b12,
  )
# Ballast Point
a59 =
  Beer.create!(
    beer_name: 'Sculpin',
    beer_abv: 7.0,
    beer_type: 'IPA - West Coast',
    brewery: b13,
  )
a60 =
  Beer.create!(
    beer_name: 'Wee Gus',
    beer_abv: 4.2,
    beer_type: 'Lager',
    brewery: b13,
  )
a61 =
  Beer.create!(
    beer_name: 'Grapefruit Sculpin',
    beer_abv: 7.0,
    beer_type: 'IPA - West Coast',
    brewery: b13,
  )
a62 =
  Beer.create!(
    beer_name: 'Longfin',
    beer_abv: 4.5,
    beer_type: 'Lager',
    brewery: b13,
  )
a63 =
  Beer.create!(
    beer_name: 'Aloha Sculpin',
    beer_abv: 7.0,
    beer_type: 'Hazy IPA',
    brewery: b13,
  )
# Harland
a64 =
  Beer.create!(
    beer_name: 'Hazy IPA',
    beer_abv: 6.5,
    beer_type: 'IPA - West Coast',
    brewery: b14,
  )
a65 =
  Beer.create!(
    beer_name: 'Sunken Isles',
    beer_abv: 7.0,
    beer_type: 'IPA - West Coast',
    brewery: b14,
  )
a66 =
  Beer.create!(
    beer_name: 'Japanese Lager',
    beer_abv: 5.0,
    beer_type: 'Lager',
    brewery: b14,
  )
a67 =
  Beer.create!(
    beer_name: 'India Pale Whale',
    beer_abv: 6.5,
    beer_type: 'IPA - West Coast',
    brewery: b14,
  )
# Mike Hess
a68 =
  Beer.create!(
    beer_name: 'Steel Beach',
    beer_abv: 4.5,
    beer_type: 'American Light Lager',
    brewery: b15,
  )
a69 =
  Beer.create!(
    beer_name: 'Mandatory Fun',
    beer_abv: 8.5,
    beer_type: 'IPA - Imperial',
    brewery: b15,
  )
a70 =
  Beer.create!(
    beer_name: 'Grapefruit Solis',
    beer_abv: 7.5,
    beer_type: 'IPA - American',
    brewery: b15,
  )
a71 =
  Beer.create!(
    beer_name: 'Solis West Coast IPA',
    beer_abv: 7.5,
    beer_type: 'IPA - West Coast',
    brewery: b15,
  )
a72 =
  Beer.create!(
    beer_name: 'Into The Sunset Blood Orange IPA',
    beer_abv: 6.5,
    beer_type: 'IPA - West Coast',
    brewery: b15,
  )
# Stone Brewing
a73 =
  Beer.create!(
    beer_name: 'Stone IPA',
    beer_abv: 6.9,
    beer_type: 'IPA - West Coast',
    brewery: b16,
  )
a74 =
  Beer.create!(
    beer_name: 'Stone Buenaveza',
    beer_abv: 4.7,
    beer_type: 'Salt & Lime Lager',
    brewery: b16,
  )
a75 =
  Beer.create!(
    beer_name: 'Stone Delicious IPA',
    beer_abv: 7.7,
    beer_type: 'IPA - West Coast',
    brewery: b16,
  )
a76 =
  Beer.create!(
    beer_name: 'Stone Hazy IPA',
    beer_abv: 6.7,
    beer_type: 'Hazy IPA',
    brewery: b16,
  )
a77 =
  Beer.create!(
    beer_name: 'Stone Dayfall Belgian White',
    beer_abv: 5.5,
    beer_type: 'Belgian White',
    brewery: b16,
  )
# Karl Strauss
a78 =
  Beer.create!(
    beer_name: 'Tangible',
    beer_abv: 7.0,
    beer_type: 'IPA - West Coast',
    brewery: b17,
  )
a79 =
  Beer.create!(
    beer_name: 'Follow The Sun',
    beer_abv: 4.7,
    beer_type: 'Blonde Ale',
    brewery: b17,
  )
a80 =
  Beer.create!(
    beer_name: 'Frank The Dank',
    beer_abv: 8.5,
    beer_type: 'DIPA',
    brewery: b17,
  )
a81 =
  Beer.create!(
    beer_name: 'Mosaic',
    beer_abv: 5.5,
    beer_type: 'IPA - West Coast',
    brewery: b17,
  )
a82 =
  Beer.create!(
    beer_name: 'Wreck Alley',
    beer_abv: 9.0,
    beer_type: 'Imperial Stout',
    brewery: b17,
  )
# California Wild Ales
a83 =
  Beer.create!(
    beer_name: 'Blue On Blue',
    beer_abv: 5.0,
    beer_type: 'BlueBerry Sour Ale',
    brewery: b18,
  )
a84 =
  Beer.create!(
    beer_name: 'C3POrange',
    beer_abv: 4.7,
    beer_type: 'Golden Sour',
    brewery: b18,
  )
a85 =
  Beer.create!(
    beer_name: 'Mexican Candy',
    beer_abv: 5.0,
    beer_type: 'Wild Ale',
    brewery: b18,
  )
a86 =
  Beer.create!(
    beer_name: 'Ocean Beach Passion Fruit',
    beer_abv: 5.8,
    beer_type: 'Barrel-Aged Golden Sour',
    brewery: b18,
  )
a87 =
  Beer.create!(
    beer_name: 'RJB',
    beer_abv: 6.5,
    beer_type: 'Golden Sour With Blueberries',
    brewery: b18,
  )

u1 = User.create!(username: 'test', password_digest: 'test')
puts '🤖 Beep boop beep, erasing data...beep boop...'
sleep 2
puts 'Just joking!'
puts '✅ Seeding done!'
