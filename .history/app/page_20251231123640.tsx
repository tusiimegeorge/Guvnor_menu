import { MenuSection } from "@/components/menu-section"
import { QRCodeSection } from "@/components/qr-code-section"

export default function MenuPage() {
  // DRINKS MENU DATA - Keep all your data exactly as you had it
  const softDrinks = [
    { name: "Sodas/Mineral Water", price: "UGX 5,000" },
    { name: "Novida", price: "UGX 5,000" },
    { name: "Energy Drinks", price: "UGX 15,000" },
    { name: "Black Tea/Coffee", price: "UGX 8,000" },
    { name: "African Tea/Coffee", price: "UGX 10,000" },
  ]

  const beers = [
    { name: "Local Beers", price: "UGX 10,000" },
    { name: "Imported Beers", price: "UGX 15,000" },
  ]

  const vodka = [
    { name: "Ketel One", bottlePrice: "UGX 250,000", totPrice: "UGX 9,000" },
    { name: "Smirnoff Vodka Red Label", bottlePrice: "UGX 120,000", totPrice: "UGX 4,000" },
    { name: "Smirnoff Vodka Blue Label", bottlePrice: "UGX 240,000", totPrice: "UGX 7,000" },
    { name: "Smirnoff Vodka Black Label", bottlePrice: "UGX 240,000", totPrice: "UGX 7,000" },
    { name: "Absolute Vodka", bottlePrice: "UGX 240,000", totPrice: "UGX 6,000" },
    { name: "Stolichnaya (Russian Vodka)", bottlePrice: "UGX 250,000", totPrice: "UGX 7,000" },
    { name: "Ciroc Vodka", bottlePrice: "UGX 500,000" },
    { name: "Ciroc Apple", bottlePrice: "UGX 500,000" },
    { name: "Ciroc Coconut", bottlePrice: "UGX 500,000" },
    { name: "Ciroc Pineapple", bottlePrice: "UGX 500,000" },
    { name: "Ciroc French Vanilla", bottlePrice: "UGX 500,000" },
    { name: "Grey Goose Vodka", bottlePrice: "UGX 300,000", totPrice: "UGX 8,000" },
  ]

  const sherries = [
    { name: "V&A", bottlePrice: "UGX 110,000", totPrice: "UGX 4,000" },
    { name: "Bristol Cream", bottlePrice: "UGX 200,000", totPrice: "UGX 6,000" },
  ]

  const vermouths = [
    { name: "Martin Bianco/Rosso", bottlePrice: "UGX 200,000", totPrice: "UGX 7,000" },
    { name: "Cinzano Bianco/Rosso", bottlePrice: "UGX 200,000", totPrice: "UGX 7,000" },
    { name: "Dry Martin", bottlePrice: "UGX 200,000", totPrice: "UGX 7,000" },
  ]

  const rums = [
    { name: "Captain Morgan White", bottlePrice: "UGX 250,000", totPrice: "UGX 7,000" },
    { name: "Captain Morgan Gold Spiced", bottlePrice: "UGX 200,000", totPrice: "UGX 8,000" },
    { name: "Bacardi White", bottlePrice: "UGX 250,000", totPrice: "UGX 7,000" },
    { name: "Bacardi Black", bottlePrice: "UGX 250,000", totPrice: "UGX 7,000" },
    { name: "Malibu", bottlePrice: "UGX 240,000", totPrice: "UGX 7,000" },
    { name: "Bumbu XO", bottlePrice: "UGX 450,000" },
    { name: "Bumbu", bottlePrice: "UGX 400,000" },
  ]

  const bittersMixers = [
    { name: "Lime", totPrice: "UGX 2,000" },
    { name: "Campari", bottlePrice: "UGX 240,000", totPrice: "UGX 7,000" },
  ]

  const liqueurs = [
    { name: "Grand Marnier", bottlePrice: "UGX 500,000", totPrice: "UGX 13,000" },
    { name: "Sambuca (Blue/Black)", bottlePrice: "UGX 250,000", totPrice: "UGX 8,000" },
    { name: "Amarula", bottlePrice: "UGX 250,000", totPrice: "UGX 8,000" },
    { name: "Apple Sour", bottlePrice: "UGX 170,000", totPrice: "UGX 6,000" },
    { name: "Kahlua", bottlePrice: "UGX 200,000", totPrice: "UGX 6,000" },
    { name: "Cointreau", bottlePrice: "UGX 400,000", totPrice: "UGX 10,000" },
    { name: "Southern Comfort", bottlePrice: "UGX 250,000", totPrice: "UGX 6,000" },
    { name: "Balentines", bottlePrice: "UGX 200,000", totPrice: "UGX 6,000" },
    { name: "Dissarrono", bottlePrice: "UGX 450,000", totPrice: "UGX 12,000" },
    { name: "Archers", bottlePrice: "UGX 200,000", totPrice: "UGX 7,000" },
    { name: "Jagar Meister", bottlePrice: "UGX 280,000", totPrice: "UGX 8,000" },
    { name: "Tequila Gold/Silver", bottlePrice: "UGX 260,000", totPrice: "UGX 8,000" },
    { name: "Tequila Chocolate", bottlePrice: "UGX 230,000", totPrice: "UGX 8,000" },
    { name: "Tequila Herradura", bottlePrice: "UGX 400,000" },
    { name: "Baileys", bottlePrice: "UGX 280,000", totPrice: "UGX 8,000" },
    { name: "Tia Maria", bottlePrice: "UGX 260,000", totPrice: "UGX 7,000" },
    { name: "Don Julio Blanco", bottlePrice: "UGX 500,000" },
    { name: "Don Julio Resposado", bottlePrice: "UGX 500,000" },
    { name: "Don Julio Anejo", bottlePrice: "UGX 500,000" },
    { name: "Don Julio 1942", bottlePrice: "UGX 1,900,000" },
    { name: "Patron Coffee", bottlePrice: "UGX 550,000" },
    { name: "Patron Silver", bottlePrice: "UGX 600,000" },
    { name: "Drambua", bottlePrice: "UGX 400,000", totPrice: "UGX 10,000" },
    { name: "Azul", bottlePrice: "UGX 2,500,000" },
    { name: "El Jimado (Blanco/Resposado)", bottlePrice: "UGX 250,000" },
  ]

  const gin = [
    { name: "Uganda Waragi", bottlePrice: "UGX 120,000", totPrice: "UGX 4,000" },
    { name: "Tanqueray 10", bottlePrice: "UGX 600,000", totPrice: "UGX 17,000" },
    { name: "Tanqueray", bottlePrice: "UGX 420,000", totPrice: "UGX 12,000" },
    { name: "Gordon's", bottlePrice: "UGX 240,000", totPrice: "UGX 8,000" },
    { name: "Gordon's Pink", bottlePrice: "UGX 220,000", totPrice: "UGX 8,000" },
    { name: "Beefeater's Pink", bottlePrice: "UGX 160,000", totPrice: "UGX 6,000" },
    { name: "Beefeater Gin", bottlePrice: "UGX 200,000", totPrice: "UGX 6,000" },
    { name: "Bombay Sapphire", bottlePrice: "UGX 250,000", totPrice: "UGX 7,000" },
    { name: "Hendrick's", bottlePrice: "UGX 450,000" },
  ]

  const brandy = [
    { name: "Viceroy", bottlePrice: "UGX 180,000", totPrice: "UGX 5,000" },
    { name: "Courvoisier V.S.O.P", bottlePrice: "UGX 600,000" },
    { name: "Remy Martin V.S.O.P", bottlePrice: "UGX 850,000" },
    { name: "Martel V.S.O.P", bottlePrice: "UGX 750,000" },
    { name: "Hennessy V.S.O.P", bottlePrice: "UGX 800,000" },
    { name: "Hennessy Vs", bottlePrice: "UGX 800,000" },
    { name: "Martel Blue Swift", bottlePrice: "UGX 650,000" },
    { name: "Courvoisier Vs", bottlePrice: "UGX 650,000" },
  ]

  const whiskiesScotch = [
    { name: "Jameson Barrel", bottlePrice: "UGX 350,000" },
    { name: "Grants", bottlePrice: "UGX 200,000", totPrice: "UGX 6,000" },
    { name: "J&B", bottlePrice: "UGX 200,000", totPrice: "UGX 7,000" },
    { name: "Bush Mill", bottlePrice: "UGX 200,000", totPrice: "UGX 6,000" },
    { name: "Famous Grouse", bottlePrice: "UGX 240,000", totPrice: "UGX 7,000" },
    { name: "Jameson", bottlePrice: "UGX 260,000", totPrice: "UGX 7,000" },
    { name: "Chivas Regal 12yrs", bottlePrice: "UGX 540,000", totPrice: "UGX 14,000" },
    { name: "Chivas Regal 15yrs", bottlePrice: "UGX 840,000" },
    { name: "Chivas Regal 18yrs", bottlePrice: "UGX 1,400,000" },
    { name: "Jim Beam", bottlePrice: "UGX 260,000", totPrice: "UGX 7,000" },
  ]

  const bourbons = [
    { name: "Jack Daniels", bottlePrice: "UGX 350,000", totPrice: "UGX 10,000" },
    { name: "Jack Daniel Honey", bottlePrice: "UGX 450,000" },
  ]

  const johnnieWalker = [
    { name: "Red Label", bottlePrice: "UGX 240,000", totPrice: "UGX 7,000" },
    { name: "Black Label", bottlePrice: "UGX 350,000", totPrice: "UGX 10,000" },
    { name: "Blue Label", bottlePrice: "UGX 1,800,000", totPrice: "UGX 70,000" },
    { name: "Green Label", bottlePrice: "UGX 850,000", totPrice: "UGX 30,000" },
    { name: "Gold Label", bottlePrice: "UGX 750,000" },
    { name: "Double Black", bottlePrice: "UGX 480,000", totPrice: "UGX 13,000" },
    { name: "Gold Label Reserve", bottlePrice: "UGX 550,000", totPrice: "UGX 25,000" },
    { name: "Platinum", bottlePrice: "UGX 1,100,000", totPrice: "UGX 40,000" },
    { name: "King George", bottlePrice: "UGX 6,000,000" },
  ]

  const singleMalts = [
    { name: "Singleton 12yrs", bottlePrice: "UGX 400,000", totPrice: "UGX 15,000" },
    { name: "Singleton 15yrs", bottlePrice: "UGX 500,000" },
    { name: "Singleton 18yrs", bottlePrice: "UGX 850,000" },
    { name: "Glenfiddich 12yrs", bottlePrice: "UGX 500,000", totPrice: "UGX 15,000" },
    { name: "Glenfiddich 15yrs", bottlePrice: "UGX 900,000" },
    { name: "Glenfiddich 18yrs", bottlePrice: "UGX 1,500,000" },
    { name: "Macallan 12yrs", bottlePrice: "UGX 500,000" },
    { name: "Macallan 15yrs", bottlePrice: "UGX 1,000,000" },
    { name: "Macallan 18yrs", bottlePrice: "UGX 1,600,000" },
    { name: "Glenlivet 12yrs", bottlePrice: "UGX 600,000" },
    { name: "Glenlivet Founders", bottlePrice: "UGX 500,000" },
    { name: "Talisker", bottlePrice: "UGX 650,000", totPrice: "UGX 20,000" },
    { name: "Craganmore", bottlePrice: "UGX 650,000", totPrice: "UGX 20,000" },
    { name: "Clynelish", bottlePrice: "UGX 600,000" },
    { name: "Glenkichie", bottlePrice: "UGX 650,000", totPrice: "UGX 25,000" },
    { name: "Coalila", bottlePrice: "UGX 600,000" },
    { name: "Lagavulin", bottlePrice: "UGX 1,300,000", totPrice: "UGX 50,000" },
  ]

  // WINE MENU DATA
  const nonAlcoholic = [
    { name: "Pure Heaven", bottlePrice: "UGX 120,000" },
    { name: "Papillon", bottlePrice: "UGX 150,000" },
  ]

  const redWines = [
    { name: "Cabernet Sauvignon", bottlePrice: "UGX 140,000" },
    { name: "Shiraz", bottlePrice: "UGX 140,000" },
    { name: "Merlot", bottlePrice: "UGX 140,000" },
  ]

  const portWine = [
    { name: "Sandeman", bottlePrice: "UGX 240,000", glassPrice: "UGX 6,000" },
    { name: "Cockburns", bottlePrice: "UGX 300,000", glassPrice: "UGX 6,000" },
  ]

  const whiteWines = [
    { name: "Chardonnay", bottlePrice: "UGX 140,000" },
    { name: "Sauvignon Blanc", bottlePrice: "UGX 140,000" },
  ]

  const sweetWines = [
    { name: "Four Cousins 750ml", bottlePrice: "UGX 120,000" },
    { name: "Four Cousins 1.5 ltrs", bottlePrice: "UGX 180,000" },
    { name: "Fourth Street 750ml", bottlePrice: "UGX 120,000" },
    { name: "Robertson 1.5ltrs", bottlePrice: "UGX 180,000" },
  ]

  const sparklingBubbly = [
    { name: "Belaire Phantom", bottlePrice: "UGX 500,000" },
    { name: "Belaire Regular", bottlePrice: "UGX 500,000" },
    { name: "Jece Roloux", bottlePrice: "UGX 150,000" },
    { name: "Frangolino", bottlePrice: "UGX 160,000" },
    { name: "JP Chenet", bottlePrice: "UGX 180,000" },
    { name: "JP Chenet Chardonnay", bottlePrice: "UGX 250,000" },
    { name: "Martineliz", bottlePrice: "UGX 200,000" },
    { name: "Freixenet", bottlePrice: "UGX 220,000" },
    { name: "Aviva", bottlePrice: "UGX 300,000" },
    { name: "Prosecco Extra Dry", bottlePrice: "UGX 180,000" },
    { name: "Prosecco Villa", bottlePrice: "UGX 180,000" },
  ]

  const champagne = [
    { name: "Moët Rosé", bottlePrice: "UGX 800,000" },
    { name: "Moët Nectar", bottlePrice: "UGX 700,000" },
    { name: "Moët & Chandon", bottlePrice: "UGX 600,000" },
    { name: "Veuve Clicquot Brut", bottlePrice: "UGX 800,000" },
    { name: "Veuve Clicquot Rich", bottlePrice: "UGX 850,000" },
    { name: "Ace of Spades", bottlePrice: "UGX 2,800,000" },
    { name: "Dom Pérignon", bottlePrice: "UGX 2,000,000" },
    { name: "House Champagne", bottlePrice: "UGX 400,000" },
    { name: "Mumm", bottlePrice: "UGX 500,000" },
  ]

  // COCKTAILS MENU DATA
  const classicCocktails = [
    { name: "Whisky Sour", description: "Perfect classic cocktail made with Johnnie Walker", price: "UGX 30,000" },
    {
      name: "Mojito",
      description: "A sweet sophisticated drink that goes down smooth perfect for Rum lover",
      price: "UGX 30,000",
    },
    {
      name: "Margarita",
      description: "Mixture of tequila, triple sec, and lime juice with a little saltiness",
      price: "UGX 30,000",
    },
    {
      name: "Piña Colada",
      description: "Sweet but balanced with crisp rum and tart fruit complementing the rich coconut",
      price: "UGX 30,000",
    },
    {
      name: "Sex On The Beach",
      description: "Sweet, refreshing and a touch of rebellious",
      price: "UGX 30,000",
    },
    {
      name: "Tequila Sunrise",
      description: "The bright striations of color, evokes a summer sunrise",
      price: "UGX 30,000",
    },
    {
      name: "Blue Lagoon",
      description: "Visually stunning and deliciously tangy cocktail that's perfect for the summer",
      price: "UGX 30,000",
    },
    { name: "Old Fashioned", description: "A perfect balance of sweet, bitter and strong", price: "UGX 30,000" },
    {
      name: "Negroni",
      description:
        "A strong, bitter, herbal flavour that's beautifully balanced with a taste of liquorice root, and sweet and fruity notes",
      price: "UGX 30,000",
    },
    {
      name: "Martini",
      description:
        "Delivers a clean, crisp, and predominantly dry flavor profile with botanical notes from gin, subtle herbal complexity from vermouth, and a hint of bitterness from optional garnishes like olives or lemon twist",
      price: "UGX 30,000",
    },
  ]

  const tropicalCocktails = [
    {
      name: "Long Island",
      description: "Tastes and looks remarkably like a light sweet tea!",
      price: "UGX 35,000",
    },
    {
      name: "Liquid Marijuana",
      description:
        "A vibrantly colored cocktail that offers a tropical and exotic taste experience, often enjoyed for its sweet and fruity flavors",
      price: "UGX 40,000",
    },
    {
      name: "Sangria",
      description:
        "A wine punch, also known as an aromatized wine. It combines wine with fruit, fruit juices, and other aromatic ingredients like herbs and spices",
      price: "UGX 35,000",
    },
    {
      name: "Bullfrog",
      description: "A potent and energizing drink that is perfect for a night out with friends",
      price: "UGX 40,000",
    },
    {
      name: "Bahama Ma'am",
      description:
        "A pretty run-of-the-mill, tropical-fruit-and-rum, tiki cocktail, except for the inclusion of a drop of coffee liqueur which provides extra warmth, depth and richness and an almost chocolatey sweetness",
      price: "UGX 40,000",
    },
    {
      name: "AMF",
      description: "Sweet and sour mix adds tangy sweetness, while soda adds effervescence",
      price: "UGX 35,000",
    },
    {
      name: "Double Dawa",
      description:
        "The iconic Dawa cocktail a Carnivore classic that's equal parts refreshing and legendary. Infused with honey, lime, and just the right kick",
      price: "UGX 40,000",
    },
    {
      name: "Swimming Pool",
      description:
        "The creamy coconut and sweet pineapple seduce the palate, resembling a sumptuous pina colada, but with a more complex and potent twist",
      price: "UGX 40,000",
    },
    {
      name: "White Russian",
      description:
        "The coffee liqueur, half and half, and vodka mixture makes a White Russian taste like a creamy, boozy, adult chocolate mocha",
      price: "UGX 35,000",
    },
    {
      name: "Pink Pussy",
      description:
        "Very tasty, very fruit sweet-tart. Crisp apple, tangy grenadine, and sour lemon all playing nicely with a bit of herbal gin backdrop",
      price: "UGX 40,000",
    },
  ]

  const mocktails = [
    {
      name: "Virgin Majito",
      description: "Refreshingly minty, fizzy, and full of tangy lime flavor",
      price: "UGX 20,000",
    },
    { name: "Sunrise", description: "The tart citrus is offset with the sweetness of grenadine.", price: "UGX 20,000" },
    {
      name: "Blue Lagoon",
      description: "It has a wonderful citrus flavor that tastes like you're drinking a blue cup of orange juice",
      price: "UGX 20,000",
    },
    { name: "Purple Party", description: "Fruity and bubbly", price: "UGX 20,000" },
    {
      name: "Lemonade",
      description: "It has all the basic elements of cocktails: the sour, the sweet and the dilution.",
      price: "UGX 20,000",
    },
    {
      name: "Pinacolada",
      description:
        "Smooth, sweet and creamy. It has a refreshing and citrusy taste with the rich creaminess of coconut, tangy sweetness of fresh pineapple and Malibu Original white rum with coconut flavor for a burst of tropical taste.",
      price: "UGX 20,000",
    },
  ]

  const shooters = [
    { name: "B-52", description: "A deliciously sweet and