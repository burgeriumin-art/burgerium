export interface MenuItem {
  name: string;
  price: number;
  description?: string;
}

export interface MenuBlock {
  title?: string;
  note?: string;
  items: MenuItem[];
}

export interface MenuSection {
  slug: string;
  title: string;
  label: string;
  blocks: MenuBlock[];
}

export const menuSections: MenuSection[] = [
  {
    slug: "classic-chicken-burgers",
    title: "Classic Chicken Burgers",
    label: "Non-Veg",
    blocks: [
      {
        items: [
          {
            name: "Sweet Fire Zing",
            price: 299,
            description: "Crispy fried supreme of chicken, fresh veggies, and honey base mayo topping.",
          },
          {
            name: "Sweet Fire Grill",
            price: 319,
            description: "Supreme of grilled chicken, cheese slice, fresh veggies, and honey base mayo topping.",
          },
          {
            name: "Fire Bird",
            price: 299,
            description: "Chilli flakes smeared supreme of grilled chicken, cheese slice, fresh veggies, and in-house peri peri toppings.",
          },
          {
            name: "Nashville Zing",
            price: 319,
            description: "Spicy and crispy fried supreme of chicken, fresh veggies, and in-house toppings.",
          },
          {
            name: "Flame Kebab",
            price: 299,
            description: "Green chilli smeared supreme of grilled chicken, cheese slice, fresh veggies, and in-house mint mayo topping.",
          },
          {
            name: "Zinger Blaze",
            price: 299,
            description: "Crispy fried supreme of chicken, fresh veggies, and in-house toppings.",
          },
          {
            name: "Smokey Chick",
            price: 299,
            description: "BBQ sauce smeared supreme of grilled chicken, cheese slice, fresh veggies, and special BBQ toppings.",
          },
          {
            name: "Smash Chick",
            price: 279,
            description: "Smashed chicken patty, fresh veggies, and in-house topping.",
          },
        ],
      },
    ],
  },
  {
    slug: "beef-burgers",
    title: "Beef Burgers",
    label: "Non-Veg",
    blocks: [
      {
        items: [
          {
            name: "Red Flame Buff",
            price: 359,
            description: "Chilli flakes smeared grilled beef, cheese slice, fresh veggies, and in-house peri peri mayo topping.",
          },
          {
            name: "BBQ Beast",
            price: 359,
            description: "Grilled supreme of beef, cheese slice, fresh veggies, in-house BBQ, and special toppings.",
          },
          {
            name: "Flame Grill Buff",
            price: 349,
            description: "Grilled supreme of beef, cheese slice, fresh veggies, and in-house special toppings.",
          },
          {
            name: "Texan Buff",
            price: 329,
            description: "Smashed beef patty, fried onion rings, fresh veggies, cheese slice, and in-house special toppings.",
          },
          {
            name: "Smash Buff",
            price: 299,
            description: "Smashed beef patty, fresh veggies, and in-house special toppings.",
          },
        ],
      },
    ],
  },
  {
    slug: "signature-burgers",
    title: "Signature Burgers",
    label: "Chef Special",
    blocks: [
      {
        title: "Our Chef's Special Creations",
        items: [
          {
            name: "Brooklyn Chick",
            price: 329,
            description: "Chicken patty, cheese slice, French fries, fresh veggies, caramelised veggies, and in-house cheesy cream mayo topping.",
          },
          {
            name: "Oklahoma Buff",
            price: 389,
            description: "Smashed double beef patty, fresh veggies, cheese slices, caramelised veggies, and in-house signature toppings.",
          },
          {
            name: "Juicy Lucy Buff",
            price: 349,
            description: "Beef patty, cheese slice, sauteed mushroom, fresh veggies, and in-house signature toppings.",
          },
          {
            name: "Lava Buff",
            price: 349,
            description: "Cheesy and juicy beef patty, fresh veggies, and in-house signature toppings.",
          },
          {
            name: "Lava Chick",
            price: 329,
            description: "Cheesy and juicy chicken patty, fresh veggies, and in-house signature toppings.",
          },
          {
            name: "Fifty Fifty",
            price: 349,
            description: "Chicken patty, beef patty, cheese slice, fresh veggies, and in-house signature toppings.",
          },
          {
            name: "Dynamite",
            price: 369,
            description: "Crispy fried supreme of chicken, beef patty, cheese slice, fresh veggies, and in-house signature toppings.",
          },
          {
            name: "The Shocker",
            price: 389,
            description: "Spicy and crispy fried supreme of chicken, chicken patty, omelette, cheese slice, fresh veggies, and in-house signature toppings.",
          },
          {
            name: "Thousand Island",
            price: 369,
            description: "Supreme of grilled chicken, spicy and crispy fried chicken, cheese slice, fresh veggies, thousand island, and in-house signature toppings.",
          },
        ],
      },
    ],
  },
  {
    slug: "subwiches",
    title: "Subwiches",
    label: "Non-Veg",
    blocks: [
      {
        title: "Non Veg Subwiches",
        items: [
          {
            name: "Crunchy Buff Sub",
            price: 329,
            description: "Spicy and crispy fried beef, fresh veggies, and in-house special toppings.",
          },
          {
            name: "Dragon Buff Sub",
            price: 359,
            description: "Spicy fried chilli beef, fresh veggies, and in-house special toppings.",
          },
          {
            name: "Cheesy Buff Keema Sub",
            price: 339,
            description: "Minced beef keema, mozzarella cheese, fresh veggies, and in-house special toppings.",
          },
          {
            name: "Dragon Chick Sub",
            price: 299,
            description: "Spicy fried chilli chicken, fresh veggies, and in-house special toppings.",
          },
          {
            name: "Crunchy Chick Sub",
            price: 289,
            description: "Spicy and crispy fried chilli chicken, fresh veggies, and in-house special toppings.",
          },
        ],
      },
    ],
  },
  {
    slug: "rolls-wraps",
    title: "Rolls & Wraps",
    label: "Non-Veg",
    blocks: [
      {
        title: "Non Veg Rolls & Wraps",
        items: [
          {
            name: "Red Flame Buff Wrap",
            price: 349,
            description: "Grilled beef, fresh veggies, French fries, and in-house peri peri seasoning and toppings.",
          },
          {
            name: "Smokey Buff Wrap",
            price: 349,
            description: "Grilled beef, fresh veggies, French fries, and in-house special toppings.",
          },
          {
            name: "Red Flame Chick Wrap",
            price: 299,
            description: "Chilli flakes smeared chilli chicken, fresh veggies, French fries, and in-house peri peri toppings.",
          },
          {
            name: "Flame Grill Chick Wrap",
            price: 299,
            description: "Grilled kebab chicken, fresh veggies, French fries, and in-house special toppings.",
          },
          {
            name: "Crunchy Chick Wrap",
            price: 289,
            description: "Crunchy chicken, fresh veggies, French fries, and in-house special toppings.",
          },
        ],
      },
    ],
  },
  {
    slug: "burger-bowls",
    title: "Burger Bowls",
    label: "Non-Veg",
    blocks: [
      {
        title: "Non Veg Burger Bowls",
        note: "Burger Bowl is a deconstructed burger served without a bun, where classic burger ingredients are layered or mixed in a bowl.",
        items: [
          {
            name: "Crunchy Buff Bowl",
            price: 389,
            description: "Spicy and crispy fried chilli beef, fresh veggies, feta cheese cubes, and in-house special toppings.",
          },
          {
            name: "Dragon Chick Bowl",
            price: 379,
            description: "Spicy fried chilli chicken, fresh veggies, feta cheese cubes, and in-house special schezwan hot chilli toppings.",
          },
          {
            name: "Crunchy Chick Bowl",
            price: 359,
            description: "Crispy fried chilli chicken, fresh veggies, feta cheese cubes, and in-house special toppings.",
          },
          {
            name: "Kababi Chick Bowl",
            price: 349,
            description: "Green chilli smeared supreme of grilled chicken, fresh veggies, feta cheese cubes, and in-house special toppings.",
          },
        ],
      },
    ],
  },
  {
    slug: "fries-starters",
    title: "Fries & Starters",
    label: "Sides",
    blocks: [
      {
        items: [
          {
            name: "Crunchy Buff Fries",
            price: 329,
            description: "Classic fries with spicy and crispy chilli beef, jalapenos, and in-house special toppings.",
          },
          {
            name: "Dragon Buff Fries",
            price: 339,
            description: "Classic fries with spicy fried chilli beef, jalapenos, and in-house special toppings.",
          },
          {
            name: "BBQ Chick Fries",
            price: 289,
            description: "Classic fries with crispy fried chicken, jalapenos, and in-house special BBQ toppings.",
          },
          {
            name: "Nashville Chick Fries",
            price: 289,
            description: "Classic fries with spicy and crispy fried chicken, jalapenos, Nashville seasoning, and in-house special toppings.",
          },
          {
            name: "Crispy Chick Fries",
            price: 279,
            description: "Classic fries with crispy fried chicken, jalapenos, and in-house special toppings.",
          },
          {
            name: "Loaded Keema Buff Fries",
            price: 309,
            description: "Classic fries with minced beef, fresh veggies, and in-house special toppings.",
          },
          {
            name: "Loaded Keema Chick Fries",
            price: 279,
            description: "Classic fries with minced chicken, fresh veggies, and in-house special toppings.",
          },
          {
            name: "Cheesy Fries",
            price: 229,
            description: "Classic fries with in-house special cheesy cream mayo toppings.",
          },
          {
            name: "Fiery Fries",
            price: 199,
            description: "Classic fries, fresh veggies, schezwan, and in-house special toppings.",
          },
          {
            name: "Peri Peri Fries",
            price: 169,
            description: "Classic fries with peri peri seasoning.",
          },
          {
            name: "Classic Fries",
            price: 159,
            description: "9mm normal French fries.",
          },
        ],
      },
    ],
  },
  {
    slug: "grilled-non-veg-salads",
    title: "Grilled & Non Veg Salads",
    label: "Grill & Salad",
    blocks: [
      {
        title: "Grilled & More",
        note: "Spicy peri peri, green chilli, Jamaican, or Cajun condiments smeared on grilled supreme of chicken and served with garlic bread, cheesy cream mayo, and veggies.",
        items: [
          { name: "Peri Peri Chicken", price: 349 },
          { name: "Grunus Chicken", price: 349 },
          { name: "Jamaican Chicken", price: 349 },
          { name: "Cajun Chicken", price: 349 },
        ],
      },
      {
        title: "Non Veg Salads",
        note: "Classic salad with lettuce, capsicum, olives or kalamata olives, other veggies, garlic bread, and various mayo dressings, served with grilled chicken or beef.",
        items: [
          { name: "Caesar Chicken Salad", price: 280 },
          { name: "Caesar Buff Salad", price: 310 },
          { name: "Peri-Peri Chicken Salad", price: 280 },
          { name: "Peri Peri Buff Salad", price: 310 },
          { name: "Greek Chicken Salad", price: 290 },
          { name: "Hawaiin Chicken Salad", price: 280 },
        ],
      },
    ],
  },
  {
    slug: "strips-tenders",
    title: "Strips & Tenders",
    label: "Sides",
    blocks: [
      {
        title: "Strips & More",
        note: "9 pieces of crispy fried chicken finger strips seasoned with special cheesy and spicy toppings.",
        items: [
          { name: "Cheesy Strips", price: 289 },
          { name: "Cajun Cheesy Strips", price: 299 },
          { name: "Peri Peri Cheesy Strips", price: 299 },
          { name: "Jamaican Cheesy Strips", price: 299 },
        ],
      },
      {
        title: "Tenders",
        note: "Crispy fried chicken with or without spicy seasoning, served with in-house mayo dips.",
        items: [
          { name: "Crunchy Chicken Tenders", price: 259 },
          { name: "Nashville Tenders", price: 269 },
          { name: "Sizzling Chick Tenders", price: 269 },
        ],
      },
    ],
  },
  {
    slug: "sliders-kids",
    title: "Sliders & Kids",
    label: "Kids",
    blocks: [
      {
        title: "Kids Burgers",
        note: "Small burgers with kid-friendly ingredients and toppings. Served only for kids.",
        items: [
          {
            name: "Classic Zing Junior",
            price: 189,
            description: "Crispy fried supreme of chicken, fresh veggies, and in-house kids special toppings.",
          },
          {
            name: "Smokey Chick Junior",
            price: 199,
            description: "Grilled supreme of chicken, cheese slice, fresh veggies, and in-house kids special toppings.",
          },
          {
            name: "Smokey Paneer Junior",
            price: 189,
            description: "Grilled paneer, cheese slice, fresh veggies, and in-house kids special toppings.",
          },
          {
            name: "Sweet Fire Paneer Junior",
            price: 189,
            description: "Grilled paneer, cheese slice, fresh veggies, and in-house kids special toppings.",
          },
        ],
      },
      {
        title: "Sliders",
        note: "Mini versions of regular burgers, usually served in sets of two.",
        items: [
          {
            name: "Slider 1",
            price: 369,
            description: "Zinger Mini and Nashville Mini burgers.",
          },
          {
            name: "Slider 2",
            price: 379,
            description: "Smokey Chick Mini and Red Chick Mini burgers.",
          },
          {
            name: "Slider 3",
            price: 359,
            description: "Paneer Delight Mini and Red Flame Paneer Mini burgers.",
          },
        ],
      },
    ],
  },
  {
    slug: "veg-burgers",
    title: "Veg Burgers",
    label: "Vegetarian",
    blocks: [
      {
        items: [
          {
            name: "Sweet Fire Paneer",
            price: 299,
            description: "Grilled paneer, cheese slice, fresh veggies, and in-house honey base mayo toppings.",
          },
          {
            name: "Juicy Lucy Paneer",
            price: 329,
            description: "Grilled paneer, cheese slice, sauteed mushrooms, fresh veggies, and in-house special toppings.",
          },
          {
            name: "Paneer Delight",
            price: 289,
            description: "Grilled paneer, cheese slice, fresh veggies, and in-house special topping.",
          },
          {
            name: "Kababi Paneer",
            price: 299,
            description: "Green chilli smeared grilled paneer, cheese slice, fresh veggies, and in-house mint mayo special topping.",
          },
          {
            name: "Red Flame Paneer",
            price: 299,
            description: "Chilli flakes smeared grilled paneer, cheese slice, fresh veggies, and in-house peri peri mayo topping.",
          },
          {
            name: "Smokey Paneer",
            price: 299,
            description: "BBQ sauce smeared grilled paneer, cheese slice, fresh veggies, and in-house BBQ special toppings.",
          },
          {
            name: "Shroom Stack",
            price: 279,
            description: "Sauteed mushrooms, fresh veggies, and in-house special toppings.",
          },
        ],
      },
    ],
  },
  {
    slug: "veg-subwiches-bowls-salads",
    title: "Veg Subwiches, Burger Bowls & Salads",
    label: "Vegetarian",
    blocks: [
      {
        title: "Veg Subwiches",
        items: [
          {
            name: "Fajita Paneer Sub",
            price: 289,
            description: "Grilled and scrambled paneer, fresh veggies, and in-house special toppings.",
          },
          {
            name: "Chilli Paneer Sub",
            price: 279,
            description: "Crispy fried chilli paneer cubes, fresh veggies, and in-house special toppings.",
          },
        ],
      },
      {
        title: "Veg Rolls & Wraps",
        items: [
          {
            name: "Red Flame Paneer Wrap",
            price: 289,
            description: "Grilled paneer, fresh veggies, French fries, and in-house peri peri toppings.",
          },
          {
            name: "Wild Shroom Wrap",
            price: 279,
            description: "Grilled mushrooms, fresh veggies, French fries, and in-house special toppings.",
          },
          {
            name: "Paneer Fire Wrap",
            price: 289,
            description: "Chilli paneer, fresh veggies, French fries, and in-house special toppings.",
          },
        ],
      },
      {
        title: "Veg Burger Bowls",
        note: "Burger Bowl is a deconstructed burger served without a bun, where classic burger ingredients are layered or mixed in a bowl.",
        items: [
          {
            name: "Fried Shroom Bowl",
            price: 299,
            description: "Pan fried mushrooms, fresh veggies, feta cheese cubes, and in-house special toppings.",
          },
          {
            name: "Chilli Paneer Bowl",
            price: 299,
            description: "Spicy fried chilli paneer cubes, fresh veggies, feta cheese cubes, and in-house special toppings.",
          },
        ],
      },
      {
        title: "Veg Salads",
        note: "Classic salad with lettuce, capsicum, olives, other veggies, garlic bread, and various mayo dressings, served with grilled paneer.",
        items: [
          {
            name: "Pineapple Punch Salad",
            price: 279,
            description: "With spicy grilled pineapple cubes.",
          },
          { name: "Sweet Corn Salad", price: 269 },
          { name: "Greek Veg Salad", price: 279 },
          { name: "Peri Peri Veg Salad", price: 289 },
          { name: "Caesar Veg Salad", price: 279 },
        ],
      },
    ],
  },
  {
    slug: "milkshakes",
    title: "Milkshakes",
    label: "Refreshers",
    blocks: [
      {
        note: "Milkshakes are delicious, sweet, and cold beverages typically made by blending milk, ice cream, and various flavourings or sweeteners.",
        items: [
          {
            name: "Biscoff Blitz",
            price: 279,
            description: "A creamy, indulgent summer iced drink with Lotus Biscoff milkshake.",
          },
          {
            name: "Nutella Knockout",
            price: 259,
            description: "Classic milkshake made with Nutella, milk, ice cream, and sugar.",
          },
          {
            name: "Choco-Loco",
            price: 249,
            description: "Creamy chocolate milkshake made with ice cream, milk, and chocolate.",
          },
          {
            name: "Midnight Peanut",
            price: 249,
            description: "Special milkshake with Oreo biscuits plus nutty and creamy peanut butter.",
          },
          {
            name: "Straw Burst",
            price: 199,
            description: "Refreshing strawberry milkshake made with thick milk and sugar.",
          },
          {
            name: "Caffeine Crush",
            price: 199,
            description: "Sweet and creamy classic cold coffee blended with milk and ice cream.",
          },
          {
            name: "Mango Tango",
            price: 189,
            description: "Sweet mango milkshake made with thick milk and sugar.",
          },
          {
            name: "Bananza",
            price: 189,
            description: "Refreshing banana milkshake blended with thick milk and sugar.",
          },
        ],
      },
    ],
  },
  {
    slug: "mojitos",
    title: "Mojitos",
    label: "Refreshers",
    blocks: [
      {
        note: "A refreshing blend of mint, lemon, and sugar expertly muddled together, topped with flavour and carbonated water.",
        items: [
          {
            name: "Watermelon Wave",
            price: 189,
            description: "Watermelon mojito that leaves you cool and rejuvenated.",
          },
          {
            name: "Virgin Mojito (Sweet & Spicy)",
            price: 189,
            description: "Virgin mojito with a sweet and spicy finish and green chillis.",
          },
          {
            name: "Passion Pop",
            price: 189,
            description: "Passion fruit mojito made to refresh and relax.",
          },
          {
            name: "Berry Blue",
            price: 189,
            description: "Blueberry mojito with a bright, rejuvenating finish.",
          },
          {
            name: "Green Grove",
            price: 179,
            description: "A balanced sweet-and-sour green apple mojito.",
          },
          {
            name: "Blue Frost",
            price: 179,
            description: "A cool tropical mojito with a frosty blue finish.",
          },
        ],
      },
    ],
  },
  {
    slug: "iced-treats-desserts",
    title: "Iced Treats & Desserts",
    label: "Desserts",
    blocks: [
      {
        title: "Sundaes",
        note: "Sundaes are ice cream desserts topped with sweet sauces and other extras.",
        items: [
          {
            name: "Brownie with Ice Cream",
            price: 249,
            description: "Warm fudgy brownie topped with vanilla ice cream and rich chocolate drizzle.",
          },
          {
            name: "Banoscotch",
            price: 239,
            description: "Butterscotch and vanilla ice cream with banana splits and a caramel drizzle.",
          },
          {
            name: "Dark Knight",
            price: 239,
            description: "Kit Kat sundae with rich chocolate ice cream and chocolate topping.",
          },
          {
            name: "Wonder Filled",
            price: 229,
            description: "Crushed Oreo biscuits folded into creamy vanilla ice cream with rich chocolate topping.",
          },
        ],
      },
      {
        title: "Faloodas",
        note: "Falooda made with fruits, nuts, vermicelli, dry fruits, and ice cream.",
        items: [
          { name: "Dry Fruits Falooda", price: 289 },
          { name: "Mixfruit Falooda", price: 249 },
          { name: "Butterscotch Falooda", price: 249 },
          { name: "Royal Falooda", price: 229 },
        ],
      },
      {
        title: "Iced Teas",
        note: "Freshly made iced tea with bright fruit-led flavours and a refreshing finish.",
        items: [
          {
            name: "Canary Chill",
            price: 179,
            description: "Tangy and sweet peach iced tea.",
          },
          {
            name: "Apple Crush",
            price: 179,
            description: "Green apple flavoured iced tea.",
          },
          {
            name: "Arctic Blue",
            price: 179,
            description: "A bright blue iced tea made for hot days.",
          },
          {
            name: "Mint Chill",
            price: 169,
            description: "Freshly made mint iced tea.",
          },
        ],
      },
    ],
  },
  {
    slug: "hot-coffee-tea",
    title: "Hot Coffee & Tea",
    label: "Coffee & Tea",
    blocks: [
      {
        title: "Hot Coffee",
        items: [
          {
            name: "Hot Chocolate",
            price: 180,
            description: "Premium chocolate powder blended with frothy hot milk.",
          },
          {
            name: "Vanilla Latte",
            price: 230,
            description: "Vanilla-infused latte crafted with a single shot of espresso and steamed milk.",
          },
          {
            name: "Spanish Latte",
            price: 200,
            description: "Espresso, silky condensed milk, and a perfectly frothed layer of hot milk.",
          },
          {
            name: "Mocha",
            price: 190,
            description: "A rich mix of espresso boldness and chocolate sweetness.",
          },
          {
            name: "Cappuccino",
            price: 180,
            description: "Espresso balanced with creamy steamed milk and a heavenly layer of foam.",
          },
          {
            name: "Cafe Latte",
            price: 180,
            description: "Single-shot espresso with steamed milk.",
          },
        ],
      },
      {
        title: "Black Tea - Infusions",
        note: "Without milk.",
        items: [
          { name: "Lemon Tea", price: 79 },
          { name: "Ginger Tea", price: 79 },
          { name: "Vanilla Tea", price: 89 },
          { name: "Masala Tea", price: 89 },
        ],
      },
    ],
  },
  {
    slug: "hot-coffee",
    title: "Hot Coffee",
    label: "Coffee",
    blocks: [
      {
        title: "Espresso Based Specialty Drinks",
        items: [
          {
            name: "Affogato",
            price: 230,
            description: "Vanilla or chocolate ice cream submerged in a bold espresso pour.",
          },
          {
            name: "Machiatto",
            price: 170,
            description: "Rich espresso topped with creamy milk.",
          },
          {
            name: "Flat White",
            price: 170,
            description: "Smooth and balanced blend of espresso and steamed milk.",
          },
          {
            name: "Americano",
            price: 160,
            description: "Espresso and hot water in a clean, bold cup.",
          },
          {
            name: "Espresso",
            price: 140,
            description: "A bold shot of energy and intensity.",
          },
          {
            name: "Oreo Latte",
            price: 220,
            description: "Espresso, velvety milk, and crushed Oreo bliss.",
          },
          {
            name: "Mochachino",
            price: 200,
            description: "Rich chocolate, smooth espresso, and velvety milk.",
          },
          {
            name: "Mocha Caramel",
            price: 210,
            description: "Smooth espresso with luxurious caramel and mocha richness.",
          },
        ],
      },
    ],
  },
  {
    slug: "iced-coffee",
    title: "Iced Coffee",
    label: "Iced Coffee",
    blocks: [
      {
        items: [
          {
            name: "Iced Vanilla Latte",
            price: 245,
            description: "Espresso, milk, and vanilla in a frosty refreshment.",
          },
          {
            name: "Iced Machiatto",
            price: 245,
            description: "Smooth espresso with a hint of creaminess and a refreshing chill.",
          },
          {
            name: "Iced Mochachino",
            price: 245,
            description: "Chocolaty goodness, smooth espresso, and creamy chilled milk.",
          },
          {
            name: "Iced Spanish Latte",
            price: 245,
            description: "Espresso with condensed milk sweetness in a chilled latte.",
          },
          {
            name: "Iced Americano",
            price: 190,
            description: "Bold espresso and a splash of cold water to keep you cool and focused.",
          },
          {
            name: "Iced Chocolate",
            price: 220,
            description: "Chilled symphony of creamy chocolate and frozen milk.",
          },
          {
            name: "Iced Mocha",
            price: 230,
            description: "Espresso, creamy chocolate, and a splash of cold milk.",
          },
          {
            name: "Iced Cappuccino",
            price: 220,
            description: "Espresso, frothed milk, and a hint of sweetness served cold.",
          },
          {
            name: "Iced Latte",
            price: 220,
            description: "Smooth espresso and frothy milk served chilled.",
          },
        ],
      },
    ],
  },
];

export const menuSectionCount = menuSections.length;

export const menuItemCount = menuSections.reduce(
  (sectionTotal, section) =>
    sectionTotal + section.blocks.reduce((blockTotal, block) => blockTotal + block.items.length, 0),
  0,
);
