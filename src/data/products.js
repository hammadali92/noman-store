export const categories = [
  {
    id: 'beauty-cosmetics',
    name: 'Beauty & Cosmetics',
    description: 'Premium skincare, makeup, and essentials designed to bring out your natural glow with clean, UK-compliant formulations.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'home-kitchen',
    name: 'Home & Kitchen Accessories',
    description: 'High-end culinary essentials and organizers that bring elegance, quality, and functionality to modern homes.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'health-personal-care',
    name: 'Health & Personal Care',
    description: 'Professional-grade food supplements, vitamins, and luxury personal care equipment engineered for holistic wellbeing.',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=600&auto=format&fit=crop'
  }
];

export const products = [
  // ==========================================
  // BEAUTY & COSMETICS (12 PRODUCTS)
  // ==========================================
  {
    id: 'lux-rose-glow-serum',
    name: 'Radiance Elixir Rose Glow Serum',
    category: 'beauty-cosmetics',
    subcategory: 'Skincare',
    price: 38.00,
    rating: 4.8,
    reviewsCount: 142,
    badge: 'Best Seller',
    images: [
      'https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'A luxurious face serum infused with pure Bulgarian Rose extracts, Niacinamide, and Hyaluronic Acid to deliver intense hydration and a brilliant dewy finish. Perfect for restoring natural luminescence.',
    benefits: [
      'Deeply hydrates skin for up to 24 hours',
      'Minimizes fine lines and helps even out skin tone',
      'Contains organic rosewater for natural soothing'
    ],
    usage: [
      'Cleanse skin thoroughly before application.',
      'Apply 3-4 drops onto your fingertips.',
      'Gently press and pat the serum into your face and neck.'
    ],
    specs: {
      'Volume': '30ml',
      'Skin Type': 'All skin types',
      'Origin': 'Made in the UK',
      'Key Ingredients': 'Bulgarian Rose Water, 5% Niacinamide'
    }
  },
  {
    id: 'velvet-matte-lipstick-set',
    name: 'Velvet Silk Matte Lipstick Trio',
    category: 'beauty-cosmetics',
    subcategory: 'Makeup',
    price: 45.00,
    rating: 4.9,
    reviewsCount: 88,
    badge: 'New Arrival',
    images: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Experience intense pigmentation with featherlight comfort. This lipstick set features three signature shades ranging from warm nudes to deep berries, crafted with moisturizing avocado oil.',
    benefits: [
      'Ultra-creamy matte finish that does not dry lips',
      'Smudge-proof, long-wear formula lasting up to 12 hours'
    ],
    usage: [
      'Exfoliate lips before applying for the smoothest application.',
      'Outline your lips using the precise applicator tip.'
    ],
    specs: {
      'Set Includes': '3 Shades (Nude Kiss, Dusty Rose, Crimson Velvet)',
      'Finish': 'Velvet Matte',
      'Safety': 'UK Regulation Compliant'
    }
  },
  {
    id: 'argan-gold-hair-mask',
    name: 'Argan & Keratin Intense Restoration Mask',
    category: 'beauty-cosmetics',
    subcategory: 'Haircare',
    price: 32.00,
    rating: 4.7,
    reviewsCount: 205,
    badge: 'Top Rated',
    images: [
      'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Transform dry, damaged hair into silk. Formulated with authentic Moroccan Argan Oil and micro-keratin proteins, this deep conditioner repairs hair structure, eliminates frizz, and seals split ends.',
    benefits: [
      'Reconstructs damaged hair fibers from root to tip',
      'Creates a brilliant natural shine and deep softness'
    ],
    usage: [
      'After shampooing, squeeze out excess water.',
      'Apply a generous amount of mask to mid-lengths and ends.'
    ],
    specs: {
      'Volume': '250ml',
      'Hair Type': 'Dry, damaged, or frizzy hair',
      'Key Ingredients': 'Moroccan Argan Oil, Hydrolyzed Keratin'
    }
  },
  {
    id: 'vit-c-eye-cream',
    name: 'Vitamin C Brightening Eye Cream',
    category: 'beauty-cosmetics',
    subcategory: 'Skincare',
    price: 24.00,
    rating: 4.6,
    reviewsCount: 64,
    badge: 'New Arrival',
    images: [
      'https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'An advanced eye-contour treatment formulated with stabilized Vitamin C and caffeine extracts to visibly depuff, brighten dark circles, and firm delicate skin lines.',
    benefits: [
      'Reduces appearance of dark circles and under-eye puffiness',
      'Boosts natural skin collagen synthesis around eyes'
    ],
    usage: [
      'Dispense a pea-sized amount onto your ring fingers.',
      'Gently dot around the orbital bone and under-eye area.'
    ],
    specs: {
      'Volume': '15ml',
      'Key Ingredients': '3% Active Vitamin C, Caffeine, Peptide Complex'
    }
  },
  {
    id: 'aloe-gel-cleanser',
    name: 'Hydrating Aloe Vera Gentle Gel Cleanser',
    category: 'beauty-cosmetics',
    subcategory: 'Skincare',
    price: 19.50,
    rating: 4.8,
    reviewsCount: 112,
    badge: 'Best Value',
    images: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Refresh your skin with our calming gel cleanser. Infused with pure organic aloe vera leaf juice and green tea extracts, it lifts away impurities and daily pollution without stripping natural moisture.',
    benefits: [
      'Deeply cleanses while preserving skin pH balance',
      'Soothes redness and irritation instantly with aloe juice'
    ],
    usage: [
      'Wet face with lukewarm water.',
      'Pump a small amount of gel onto wet palms and lather.'
    ],
    specs: {
      'Volume': '150ml',
      'Skin Type': 'Sensitive, dry, or combination skin',
      'Key Ingredients': 'Organic Aloe Vera, Green Tea Extract'
    }
  },
  {
    id: 'hydrating-toner',
    name: 'Hydra-Shield Barrier Balancing Toner',
    category: 'beauty-cosmetics',
    subcategory: 'Skincare',
    price: 22.00,
    rating: 4.7,
    reviewsCount: 43,
    badge: 'Trending',
    images: [
      'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1626806787426-5910811b6325?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'A soothing liquid toner packed with ceramides and probiotics. Designed to calm redness, repair damaged skin barriers, and balance pH levels after daily cleansing.',
    benefits: [
      'Instantly hydrates and resets skin barrier balance',
      'Contains 3 essential ceramides'
    ],
    usage: [
      'Pour a few drops onto a cotton pad or directly into clean hands.',
      'Press gently into facial skin until dry.'
    ],
    specs: {
      'Volume': '200ml',
      'Key Ingredients': 'Ceramides NP, AP, EOP, Lactobacillus Ferment'
    }
  },
  {
    id: 'nude-eyeshadow-palette',
    name: 'Nude Horizon 12-Shade Eyeshadow Palette',
    category: 'beauty-cosmetics',
    subcategory: 'Makeup',
    price: 49.00,
    rating: 4.8,
    reviewsCount: 76,
    badge: 'Luxury Edit',
    images: [
      'https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Dazzle with professional neutrals. A collection of twelve highly blendable matte and shimmer metallic eye shadows, offering endless day-to-night creativity.',
    benefits: [
      'High-impact color payoff that blends like butter',
      'Crease-free, crease-resistant formulation lasting all day'
    ],
    usage: [
      'Apply transition shades with a fluffy blending brush.',
      'Pat shimmers onto the center lid for maximum glow.'
    ],
    specs: {
      'Shades Count': '12 Matte & Shimmer shades',
      'Safety': 'Hypoallergenic, Ophthalmologist tested'
    }
  },
  {
    id: 'organic-face-oil',
    name: 'Marula & Squalane Restorative Face Oil',
    category: 'beauty-cosmetics',
    subcategory: 'Skincare',
    price: 34.00,
    rating: 4.9,
    reviewsCount: 91,
    badge: '100% Organic',
    images: [
      'https://images.unsplash.com/photo-1527633593822-74ab0e5f4b62?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590156221120-75a772fae73a?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Pure liquid gold. Cold-pressed Marula oil combined with plant-derived Squalane mimics natural skin lipids to lock in moisture, fight radical damage, and smooth texture.',
    benefits: [
      'Absorbs quickly without leaving a heavy greasy layer',
      'Locks in active serum moisture for overnight recovery'
    ],
    usage: [
      'Warm 2-3 drops between your palms.',
      'Press lightly onto clean, moisturized skin as the final step.'
    ],
    specs: {
      'Volume': '30ml',
      'Ingredients': '100% Organic Marula Oil, Olive Squalane'
    }
  },
  {
    id: 'luxury-perfume-mist',
    name: 'Jardin de Nuit Eau de Parfum Mist',
    category: 'beauty-cosmetics',
    subcategory: 'Fragrances',
    price: 85.00,
    rating: 4.8,
    reviewsCount: 154,
    badge: 'Premium Edition',
    images: [
      'https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'An enchanting scent profile blending dark jasmine, rich amber, and velvet patchouli. Sourced from Grasse, France and hand-poured under strict UK compliance regulations.',
    benefits: [
      'Highly concentrated formulation for maximum sillage',
      'Beautiful luxury heavy glass bottle presentation'
    ],
    usage: [
      'Spritz onto pulse points: wrists, inner elbows, and neck.',
      'Avoid rubbing wrists together to prevent bruising the scent.'
    ],
    specs: {
      'Volume': '50ml',
      'Scent Profile': 'Floral Amber Woody',
      'Concentration': 'Eau de Parfum (EDP)'
    }
  },
  {
    id: 'revitalizing-night-cream',
    name: 'Overnight Recovery Bakuchiol Sleep Cream',
    category: 'beauty-cosmetics',
    subcategory: 'Skincare',
    price: 42.00,
    rating: 4.9,
    reviewsCount: 132,
    badge: 'Anti-Aging',
    images: [
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'A natural alternative to retinol. Powered by 2% Bakuchiol, it works overnight to accelerate cellular turnover, soften fine lines, and firm saggy contours without drying skin.',
    benefits: [
      'Stimulates collagen without redness or peeling',
      'Enriched with soothing Shea Butter and Vitamin E'
    ],
    usage: [
      'Apply to face and neck as the last step in your evening routine.',
      'Massage in upward, sweeping motions.'
    ],
    specs: {
      'Volume': '50ml',
      'Key Active': '2% Pure Bakuchiol, Niacinamide'
    }
  },
  {
    id: 'scalp-renewal-shampoo',
    name: 'Scalp Detox Clarifying Tea Tree Shampoo',
    category: 'beauty-cosmetics',
    subcategory: 'Haircare',
    price: 18.00,
    rating: 4.7,
    reviewsCount: 93,
    badge: 'Clarifying',
    images: [
      'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Cleanse and calm your scalp. Formulated with organic Tea Tree Oil and Peppermint extracts, this clarifying shampoo lifts grease and product buildup while relieving itchiness.',
    benefits: [
      'Lifts dry flakes and oil buildup instantly',
      'Refreshing mint scent cools and invigorates'
    ],
    usage: [
      'Massage a generous amount into wet hair and scalp.',
      'Leave on for 2 minutes, then rinse thoroughly.'
    ],
    specs: {
      'Volume': '300ml',
      'Sulfate Free': 'Yes',
      'Key Ingredients': 'Tea Tree Oil, Peppermint Extract, Salicylic Acid'
    }
  },
  {
    id: 'mineral-sunscreen-spf50',
    name: 'Zinc Oxide Matte Mineral SPF 50 Shield',
    category: 'beauty-cosmetics',
    subcategory: 'Skincare',
    price: 28.00,
    rating: 4.8,
    reviewsCount: 167,
    badge: 'Sun Protection',
    images: [
      'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Ultra-lightweight physical sun protection. Using non-nano Zinc Oxide, this daily sunscreen filters UVA/UVB rays while leaving a dry, soft matte finish with zero white cast.',
    benefits: [
      'Broad-spectrum mineral SPF 50 filters',
      'Reef-safe, biodegradable, and non-nano zinc particles'
    ],
    usage: [
      'Apply generously to clean face and neck 15 minutes before sun exposure.',
      'Reapply every 2 hours or after swimming.'
    ],
    specs: {
      'Volume': '50ml',
      'SPF Rating': 'SPF 50 / PA++++',
      'Key Actives': '20% Non-Nano Zinc Oxide'
    }
  },

  // ==========================================
  // HOME & KITCHEN ACCESSORIES (12 PRODUCTS)
  // ==========================================
  {
    id: 'emerald-copper-cookware-set',
    name: 'Emerald & Copper Non-Stick Cookware Set',
    category: 'home-kitchen',
    subcategory: 'Cookware',
    price: 185.00,
    rating: 4.9,
    reviewsCount: 96,
    badge: 'Premium Edition',
    images: [
      'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Elevate your culinary aesthetics. This stunning 5-piece cookware set combines a modern forest emerald green exterior with pure copper-infused ceramic non-stick interior coating. Compatible with all stovetops.',
    benefits: [
      'Ultra-durable, scratch-resistant ceramic coating',
      '100% free of PFOA, PFAS, Lead, and Cadmium'
    ],
    usage: [
      'Use with wooden, silicone, or plastic utensils to protect the surface.',
      'Hand wash recommended with soft sponge.'
    ],
    specs: {
      'Set Pieces': '5-piece cookware set',
      'Material': 'Aluminum core, Copper-Ceramic Coating',
      'Stovetops': 'Induction, Gas, Electric'
    }
  },
  {
    id: 'minimalist-ceramic-tableware',
    name: 'Nordic Stone Handcrafted Dinnerware Set',
    category: 'home-kitchen',
    subcategory: 'Tableware',
    price: 110.00,
    rating: 4.8,
    reviewsCount: 74,
    badge: 'Limited Stock',
    images: [
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535401991746-da3d9055713e?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'An artful addition to any dinner party. Each piece features a unique speckled finish and raw, organic rims reminiscent of natural coastal stones. Made of thick, high-temperature stoneware.',
    benefits: [
      'Unique handcrafted texture—no two pieces are identical',
      'Dishwasher, microwave, and freezer safe'
    ],
    usage: [
      'Safe for daily microwave heating.',
      'Stack with care or use felt separators.'
    ],
    specs: {
      'Set Includes': '16 Pieces (4x Dinner Plates, 4x Side Plates, 4x Bowls, 4x Mugs)',
      'Material': 'Stoneware Ceramic'
    }
  },
  {
    id: 'eco-bamboo-organizer-set',
    name: 'Modular Bamboo Pantry Drawer Organizers',
    category: 'home-kitchen',
    subcategory: 'Organizers',
    price: 34.00,
    rating: 4.6,
    reviewsCount: 189,
    badge: 'Eco-Friendly',
    images: [
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Tidy up your drawers in style. This modular 5-piece organizer box set is made of premium, sustainably sourced Moso bamboo. Features stackable layouts.',
    benefits: [
      'Crafted from 100% natural, eco-friendly Moso bamboo',
      'Easy to clean and naturally water-resistant'
    ],
    usage: [
      'Wipe down with a damp cloth; do not submerge in water.',
      'Configure in drawers of depth 2.5 inches or more.'
    ],
    specs: {
      'Set Includes': '5 Compartment Boxes of varied dimensions',
      'Material': 'Natural Moso Bamboo'
    }
  },
  {
    id: 'steel-knife-set',
    name: 'Signature Stainless Steel Chef Knife Set',
    category: 'home-kitchen',
    subcategory: 'Cookware',
    price: 89.00,
    rating: 4.8,
    reviewsCount: 52,
    badge: 'Top Seller',
    images: [
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Cut with absolute precision. This professional knife set features high-carbon German stainless steel blades, tapered edges, and ergonomic balance handles.',
    benefits: [
      'Forged from single-piece high-carbon German steel',
      'Precision tapered ground blade edge staying sharp longer'
    ],
    usage: [
      'Hand wash immediately after use with warm soapy water.',
      'Dry with a clean towel immediately.'
    ],
    specs: {
      'Set Includes': '8" Chef, 8" Bread, 7" Santoku, 5" Utility, Paring, Block',
      'Blade Material': 'German High Carbon Steel'
    }
  },
  {
    id: 'bamboo-jars',
    name: 'Apothecary Glass Spice Jars with Bamboo Lids',
    category: 'home-kitchen',
    subcategory: 'Organizers',
    price: 28.00,
    rating: 4.7,
    reviewsCount: 144,
    badge: 'Organizers',
    images: [
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Keep your spices fresh and aesthetically stored. This 12-piece jar set is made of high-borosilicate glass with eco-friendly airtight bamboo lids containing silicone seals.',
    benefits: [
      'High borosilicate glass resistant to temperature variations',
      'Airtight silicone seal rings lock out moisture'
    ],
    usage: [
      'Glass jars are dishwasher safe (remove lids first).',
      'Ensure jars are completely dry before filling.'
    ],
    specs: {
      'Set Includes': '12 Jars, 12 Bamboo Lids, 24 Labels',
      'Capacity': '120ml per jar'
    }
  },
  {
    id: 'kitchen-counter-stools',
    name: 'Luxury Bouclé Cushion Gold Legs Bar Stool',
    category: 'home-kitchen',
    subcategory: 'Furniture',
    price: 145.00,
    rating: 4.8,
    reviewsCount: 39,
    badge: 'Trending',
    images: [
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517256064527-09c53b2d0c6b?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Introduce elegant gold finishes to your kitchen island. Upholstered in soft cream bouclé cushion and supported by electroplated titanium gold metal frames.',
    benefits: [
      'Ergonomically curved high back support cushion',
      'Anti-scratch nylon feet caps protecting floor surfaces'
    ],
    usage: [
      'Place at islands of height 36" to 40".',
      'Spot clean bouclé fabric with a damp clean cloth.'
    ],
    specs: {
      'Dimensions': 'Height: 65cm seat height',
      'Frame': 'Electroplated Gold Metal Frame',
      'Weight capacity': 'Up to 150kg'
    }
  },
  {
    id: 'marble-cutting-board',
    name: 'Signature White Carrara Marble Pastry Board',
    category: 'home-kitchen',
    subcategory: 'Tableware',
    price: 54.00,
    rating: 4.9,
    reviewsCount: 81,
    badge: 'Chef Choice',
    images: [
      'https://images.unsplash.com/photo-1565192647048-f997ded87958?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Keep pastry dough cool while rolling. Carved from authentic Italian Carrara white marble stone, with polished top surface and raw side details.',
    benefits: [
      'Cool surface prevents butter from melting in doughs',
      'Non-porous marble surface prevents bacterial growth'
    ],
    usage: [
      'Excellent for rolling pastry doughs, presenting cheese boards.',
      'Hand wash with mild dish liquid; do not place in dishwasher.'
    ],
    specs: {
      'Weight': '4.2kg',
      'Dimensions': '40cm x 30cm x 1.5cm thickness',
      'Material': 'Genuine Carrara Marble'
    }
  },
  {
    id: 'cast-iron-dutch-oven',
    name: 'Cast Iron Enameled Dutch Oven Round Pot',
    category: 'home-kitchen',
    subcategory: 'Cookware',
    price: 95.00,
    rating: 4.8,
    reviewsCount: 65,
    badge: 'Heavy Design',
    images: [
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'A kitchen staple for slow stews and baking sourdough bread. Thick cast iron body coated in scratch-resistant sand enamel interior and gloss red exterior coating.',
    benefits: [
      'Outstanding heat retention and moisture locking lid',
      'Highly resistant to staining, chipping, and rust'
    ],
    usage: [
      'Oven safe up to 260°C (500°F).',
      'Ideal for gas, electric, induction, and wood stoves.'
    ],
    specs: {
      'Capacity': '4.7 Liters (5 Quart)',
      'Material': 'Enameled Cast Iron',
      'Diameter': '24cm'
    }
  },
  {
    id: 'eco-bamboo-bread-box',
    name: 'Double Layer Wooden Bread Storage Box',
    category: 'home-kitchen',
    subcategory: 'Organizers',
    price: 45.00,
    rating: 4.7,
    reviewsCount: 110,
    badge: 'Eco Pick',
    images: [
      'https://images.unsplash.com/photo-1597348989645-46b190ce4918?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Preserve loaf freshness without using plastics. A double-layer bread keeper built from sustainable Moso bamboo, featuring roll-top doors and clear plexiglass viewing windows.',
    benefits: [
      'Maintains ideal moisture balance to prevent stale bread',
      'Two spacious compartments hold up to 3 large loaves'
    ],
    usage: [
      'Store bread, pastries, and rolls at room temperature.',
      'Wipe clean occasionally with wood oil to preserve shine.'
    ],
    specs: {
      'Material': '100% Organic Bamboo, Acrylic glass',
      'Dimensions': '38cm x 25cm x 35cm'
    }
  },
  {
    id: 'precision-espresso-maker',
    name: 'Signature Retro 15-Bar Espresso Machine',
    category: 'home-kitchen',
    subcategory: 'Appliances',
    price: 165.00,
    rating: 4.8,
    reviewsCount: 47,
    badge: 'Hot Product',
    images: [
      'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Brew cafe-standard espresso at home. Uses a professional 15-bar Italian pump pressure system and custom milk frother steam wand for velvet lattes.',
    benefits: [
      'Adjustable milk steam wand creates silky micro-foam',
      'Thermoblock heating system delivers coffee in 40 seconds'
    ],
    usage: [
      'Use fine espresso grounds in the portafilter.',
      'Always purge the steam wand before frothing milk.'
    ],
    specs: {
      'Pump Pressure': '15 Bar Italian Ulka Pump',
      'Power': '1350 Watts',
      'Water Tank': '1.2 Liters removable'
    }
  },
  {
    id: 'luxury-ceramic-mugs',
    name: 'Glazed Stoneware Ripple Mug Set',
    category: 'home-kitchen',
    subcategory: 'Tableware',
    price: 36.00,
    rating: 4.7,
    reviewsCount: 88,
    badge: 'Handmade',
    images: [
      'https://images.unsplash.com/photo-1591871937573-74dbba515c4c?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Make morning coffee ritualistic. Set of 4 handcrafted stoneware mugs finished in a unique textured ripple body and reactive blue glaze coating.',
    benefits: [
      'Thick stoneware retains heat for slower drinking',
      'Comfortable wide ear handle fits hands snugly'
    ],
    usage: [
      'Safe for standard dishwasher and microwave cycles.',
      'Avoid sudden extreme temperature changes.'
    ],
    specs: {
      'Quantity': '4 Mugs per set',
      'Capacity': '350ml (12 oz) each',
      'Material': 'Enameled Stoneware Ceramic'
    }
  },
  {
    id: 'gold-cutlery-set',
    name: 'Titanium Gold 24-Piece Flatware Set',
    category: 'home-kitchen',
    subcategory: 'Tableware',
    price: 68.00,
    rating: 4.8,
    reviewsCount: 59,
    badge: 'Luxury Edit',
    images: [
      'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Dine in luxury. A 24-piece dinnerware utensil set built from high-strength stainless steel plated with mirror-polished titanium gold coating.',
    benefits: [
      'Rust-proof, lead-free, cadmium-free daily dining safety',
      'Ergonomic weighted balance stems for comfortable hold'
    ],
    usage: [
      'Safe for hand washing or dishwasher on gentle heat cycles.',
      'Do not use abrasive steel sponges to scrub gold surfaces.'
    ],
    specs: {
      'Set Includes': '6x Knives, 6x Dinner Forks, 6x Spoons, 6x Teaspoons',
      'Material': '18/10 Stainless Steel, Titanium Gold Plated'
    }
  },

  // ==========================================
  // HEALTH & PERSONAL CARE (12 PRODUCTS)
  // ==========================================
  {
    id: 'opti-gold-multivitamin',
    name: 'Opti-Gold Premium Daily Multivitamin & Minerals',
    category: 'health-personal-care',
    subcategory: 'Supplements',
    price: 36.00,
    rating: 4.9,
    reviewsCount: 118,
    badge: 'Best Seller',
    images: [
      'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Maximize your daily vitality. Opti-Gold is a scientifically formulated dietary supplement providing 24 essential vitamins and minerals.',
    benefits: [
      'Complete high-potency formula with 24 active micro-nutrients',
      'Supports healthy immune system and daily metabolic energy'
    ],
    usage: [
      'Take 2 capsules daily, preferably with a main meal.',
      'Swallow with water or a cold drink; do not chew.'
    ],
    specs: {
      'Quantity': '120 Capsules (2-Month Supply)',
      'Origin': 'Made in the UK',
      'Key Ingredients': 'Vitamins A, C, D3, E, Zinc, Iron, Magnesium'
    }
  },
  {
    id: 'aura-sleep-stress-drops',
    name: 'Aura Relief Organic Sleep & Calming Drops',
    category: 'health-personal-care',
    subcategory: 'Wellness',
    price: 29.00,
    rating: 4.8,
    reviewsCount: 95,
    badge: 'Top Rated',
    images: [
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Find your peace and calm. Aura Relief blends organic herbal extracts including Chamomile, Ashwagandha, and Valerian Root.',
    benefits: [
      'Encourages relaxation without morning grogginess',
      'Formulated with 100% organic liquid herbal extracts'
    ],
    usage: [
      'Shake well before use.',
      'Take 1 full dropper (approx. 20 drops) under the tongue before bed.'
    ],
    specs: {
      'Volume': '50ml',
      'Dietary suitability': 'Vegan, Gluten-Free, Non-GMO'
    }
  },
  {
    id: 'pro-sonic-cleanser',
    name: 'Pro-Sonic Luxury Silicone Facial Cleansing Brush',
    category: 'health-personal-care',
    subcategory: 'Personal Care Devices',
    price: 78.00,
    rating: 4.7,
    reviewsCount: 134,
    badge: 'Premium Edition',
    images: [
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614859324967-bdf461fcf7ec?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Transform your daily skin cleansing routine. The Pro-Sonic uses ultra-hygienic silicone and T-Sonic pulsations to lift away 99.5% of dirt, oil, and sweat.',
    benefits: [
      '35x more hygienic than standard nylon brush bristles',
      '100% waterproof for convenient use in the bath or shower'
    ],
    usage: [
      'Apply your standard face cleanser and wet the Pro-Sonic brush.',
      'Glide in circular motions over your face for 1 minute.'
    ],
    specs: {
      'Material': 'Food-Grade Ultra-Hygienic Body Silicone',
      'Speed Levels': '8 Pulsation Strengths'
    }
  },
  {
    id: 'cerave-cleanser-huge',
    name: 'CeraVe Hydrating Cleanser for Normal to Dry Skin',
    category: 'health-personal-care',
    subcategory: 'Dermatological Skincare',
    price: 16.50,
    rating: 4.9,
    reviewsCount: 312,
    badge: 'Skin Health',
    images: [
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1626248801379-51a07b62f4bc?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Cleanse and hydrate without disrupting the skin barrier. Formulated with 3 essential ceramides and Hyaluronic Acid, CeraVe Hydrating Cleanser removes dirt and oil while increasing skin hydration.',
    benefits: [
      'MVE technology locks in moisture for 24-hour hydration',
      'Non-foaming lotion texture is gentle on sensitive skin boundaries'
    ],
    usage: [
      'Wet skin with lukewarm water.',
      'Massage CeraVe cleanser into skin in a gentle, circular motion. Rinse.'
    ],
    specs: {
      'Volume': '473ml (Big Family Size)',
      'Key Actives': 'Ceramides 1, 3, 6-II, Hyaluronic Acid',
      'Origin': 'Dermatologist Developed, UK Compliant'
    }
  },
  {
    id: 'laroche-double-repair',
    name: 'La Roche-Posay Toleriane Double Repair Face Moisturizer',
    category: 'health-personal-care',
    subcategory: 'Dermatological Skincare',
    price: 24.50,
    rating: 4.8,
    reviewsCount: 198,
    badge: 'Top Rated',
    images: [
      'https://images.unsplash.com/photo-1626248801379-51a07b62f4bc?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Rebuild your natural skin barrier after 1 hour. This oil-free facial moisturizer provides dual action: replenishes hydration for up to 48 hours and helps restore the skin protective barrier.',
    benefits: [
      'Formulated with Prebiotic Thermal Water, Ceramide-3, and Niacinamide',
      '100% oil-free, fragrance-free, paraben-free, non-comedogenic'
    ],
    usage: [
      'Apply to the face and neck morning and evening.',
      'Its lightweight texture quickly melts into skin.'
    ],
    specs: {
      'Volume': '75ml',
      'Origin': 'Made in France, UK Distributed',
      'Key Ingredients': 'Prebiotic Thermal Water, Ceramide-3, Niacinamide, Glycerin'
    }
  },
  {
    id: 'cetaphil-moisturizing-cream',
    name: 'Cetaphil Hydrating Moisturizing Cream',
    category: 'health-personal-care',
    subcategory: 'Dermatological Skincare',
    price: 18.00,
    rating: 4.8,
    reviewsCount: 220,
    badge: 'Best Value',
    images: [
      'https://images.unsplash.com/photo-1527751171053-6ac5ec50000b?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Intense 24-hour hydration for very dry, sensitive skin. Cetaphil Moisturizing Cream binds water to the skin, preventing moisture loss and providing immediate relief.',
    benefits: [
      'Proven to double skin moisture in 4 days',
      'Non-greasy, absorbs quickly, hypoallergenic formula'
    ],
    usage: [
      'Apply daily over body and face to hydrate skin.',
      'Reapply on extra dry patches (elbows, knees) as needed.'
    ],
    specs: {
      'Weight': '453g Tub',
      'Skin Type': 'Dry to very dry, sensitive skin',
      'Origin': 'Dermatologist Recommended Brand'
    }
  },
  {
    id: 'eucerin-roughness-relief',
    name: 'Eucerin Roughness Relief Spot Treatment',
    category: 'health-personal-care',
    subcategory: 'Dermatological Skincare',
    price: 14.00,
    rating: 4.7,
    reviewsCount: 89,
    badge: 'Skin Repair',
    images: [
      'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Target extremely dry, rough, or scaly patches. Eucerin Spot Treatment is enriched with Urea and Natural Moisturizing Factors (NMF) to gently exfoliate and intensively hydrate skin.',
    benefits: [
      'Concentrated formula with Urea for targeted skin smoothing',
      'Fragrance and dye free, safe for sensitive skin patches'
    ],
    usage: [
      'Apply to extremely dry or thick skin spots (elbows, heels).',
      'Do not apply on open wounds or bleeding skin.'
    ],
    specs: {
      'Volume': '71g Tube',
      'Key Active': 'Urea, Ceramide-3, Natural Moisturizing Factors (NMF)'
    }
  },
  {
    id: 'oral-b-electric-toothbrush',
    name: 'Oral-B Pro-Expert Rechargeable Toothbrush',
    category: 'health-personal-care',
    subcategory: 'Personal Care Devices',
    price: 65.00,
    rating: 4.8,
    reviewsCount: 172,
    badge: 'Hygiene',
    images: [
      'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550572017-edd951b55104?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Get clinic-clean teeth daily. Features 3D cross-action bristles that oscillate, rotate, and pulsate to remove up to 100% more plaque than a standard manual brush.',
    benefits: [
      'In-handle timer alerts you every 30 seconds to switch zones',
      'Visible pressure sensor stops pulsations to protect gums'
    ],
    usage: [
      'Apply toothpaste and guide the brush head slowly from tooth to tooth.',
      'Brush for the dentist-recommended 2 minutes twice daily.'
    ],
    specs: {
      'Speed': 'Up to 8,800 sweeps per minute',
      'Battery': 'Rechargeable Li-Ion battery'
    }
  },
  {
    id: 'professional-first-aid-kit',
    name: 'St. John Standard 90-Piece First Aid Kit',
    category: 'health-personal-care',
    subcategory: 'Health & Safety',
    price: 26.00,
    rating: 4.9,
    reviewsCount: 141,
    badge: 'Compliance',
    images: [
      'https://images.unsplash.com/photo-1550572017-edd951b55104?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Be prepared for any minor injury. A comprehensive, HSE-compliant 90-piece medical response kit packed in a durable, waterproof nylon carry bag.',
    benefits: [
      'Contains essential sterile bandages, dressings, and sanitizers',
      'HSE UK compliant for workplace and home safety regulations'
    ],
    usage: [
      'Store in an easily accessible location at home or in your car.',
      'Check expiry dates of sterile components annually.'
    ],
    specs: {
      'Pieces Count': '90 sterile medical items',
      'Material': 'Waterproof Oxford fabric bag'
    }
  },
  {
    id: 'wellness-epsom-salts',
    name: 'Pure Westlab Epsom Bath Salts Tub',
    category: 'health-personal-care',
    subcategory: 'Wellness',
    price: 14.50,
    rating: 4.8,
    reviewsCount: 204,
    badge: 'Natural Wellness',
    images: [
      'https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614859324967-bdf461fcf7ec?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Soothe tired, aching muscles. 100% pure Magnesium Sulfate crystals dissolve easily in bathwater to help detoxify muscles and encourage relaxation.',
    benefits: [
      'High magnesium absorption relaxes stiff muscles',
      'Softens skin texture and encourages deep sleep recovery'
    ],
    usage: [
      'Add 2-3 cups of Epsom salts to a warm bath.',
      'Soak for 20 minutes to absorb magnesium benefits.'
    ],
    specs: {
      'Weight': '5kg bag',
      'Material': '100% Pure Magnesium Sulfate'
    }
  },
  {
    id: 'preservative-free-eye-drops',
    name: 'HydraMed Preservative-Free Lubricating Eye Drops',
    category: 'health-personal-care',
    subcategory: 'Wellness',
    price: 15.00,
    rating: 4.8,
    reviewsCount: 116,
    badge: 'Eye Health',
    images: [
      'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Instant relief for dry, irritated eyes. Dual-action formula containing Sodium Hyaluronate and Tamarind Seed Polysaccharide to replicate natural tears.',
    benefits: [
      '100% preservative-free, safe for daily contact lens wearers',
      'Patented multidose bottle keeps drops sterile for 6 months'
    ],
    usage: [
      'Tilt head back and squeeze 1 drop into each eye.',
      'Blink several times to distribute liquid.'
    ],
    specs: {
      'Volume': '10ml',
      'Preservatives': '0% Preservatives'
    }
  },
  {
    id: 'detox-herbal-tea-pack',
    name: 'Pukka Organic Cleanse Herbal Tea Pack',
    category: 'health-personal-care',
    subcategory: 'Wellness',
    price: 12.00,
    rating: 4.7,
    reviewsCount: 149,
    badge: 'Organic',
    images: [
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop'
    ],
    description: 'Refresh from the inside out. A calming blend of organic nettle leaf, fennel seed, and peppermint extracts to assist natural body detoxification.',
    benefits: [
      'Made from 100% organically grown herbal leaves',
      'Naturally caffeine-free, perfect for evening routines'
    ],
    usage: [
      'Infuse one tea bag in boiling water for 5-10 minutes.',
      'Sip slowly and enjoy warm.'
    ],
    specs: {
      'Bags count': '40 enveloped tea bags',
      'Origin': 'Sourced in the UK, Organic Certified'
    }
  }
];
