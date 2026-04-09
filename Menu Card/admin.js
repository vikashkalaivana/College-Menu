// --- CONFIGURATION ---
const DEFAULT_MENU = [
    // BREAKFAST (1-25)
    { id: 1, name: "Masala Dosa", price: 60, category: "Breakfast", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=500", desc: "Crispy crepe with spiced potato masala." },
    { id: 2, name: "Plain Dosa", price: 50, category: "Breakfast", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=500", desc: "Golden-brown thin rice crepe." },
    { id: 3, name: "Ghee Roast Dosa", price: 80, category: "Breakfast", image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&q=80&w=500", desc: "Roasted with pure clarified butter." },
    { id: 4, name: "Onion Dosa", price: 70, category: "Breakfast", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=500", desc: "Topped with fresh shallots and spices." },
    { id: 5, name: "Podi Dosa", price: 75, category: "Breakfast", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=500", desc: "Sprinkled with spicy South Indian gunpowder." },
    { id: 6, name: "Egg Dosa", price: 85, category: "Breakfast", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=500", desc: "Crepe with a layer of spiced beaten eggs." },
    { id: 7, name: "Kal Dosa (2 pcs)", price: 60, category: "Breakfast", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=500", desc: "Soft and thick traditional spongy crepe." },
    { id: 8, name: "Set Dosa (3 pcs)", price: 70, category: "Breakfast", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=500", desc: "Spongy set of dosas served with vada curry." },
    { id: 9, name: "Paper Roast Dosa", price: 90, category: "Breakfast", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=500", desc: "Ultra-thin extra crispy large dosa." },
    { id: 10, name: "Rava Dosa", price: 75, category: "Breakfast", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=500", desc: "Lacy crepe made from semolina batter." },
    { id: 11, name: "Idli Sambar (2 pcs)", price: 40, category: "Breakfast", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=500", desc: "Classic steamed rice cakes with sambar." },
    { id: 12, name: "Mini Ghee Idli (14 pcs)", price: 65, category: "Breakfast", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=500", desc: "Small idlis drenched in ghee and sambar." },
    { id: 13, name: "Ven Pongal", price: 55, category: "Breakfast", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=500", desc: "Savory rice and lentil mash with peppercorns." },
    { id: 14, name: "Medu Vada (2 pcs)", price: 45, category: "Breakfast", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=500", desc: "Crispy lentil donuts with coconut chutney." },
    { id: 15, name: "Poori Masala (3 pcs)", price: 60, category: "Breakfast", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=500", desc: "Fluffy poories served with spiced potato curry." },
    { id: 16, name: "Appam with Milk (2 pcs)", price: 70, category: "Breakfast", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=500", desc: "Lacy rice pancakes with sweet coconut milk." },
    { id: 17, name: "Puttu with Kadala", price: 65, category: "Breakfast", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=500", desc: "Steamed rice logs with black chickpea curry." },
    { id: 18, name: "Rava Upma", price: 45, category: "Breakfast", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=500", desc: "Hearty semolina breakfast with veggies." },
    { id: 19, name: "Semiya Upma", price: 45, category: "Breakfast", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=500", desc: "Light vermicelli breakfast with tempering." },
    { id: 20, name: "Adai Avial", price: 80, category: "Breakfast", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=500", desc: "Lentil crepe served with mixed vegetable gravy." },
    { id: 21, name: "Onion Uthappam", price: 70, category: "Breakfast", image: "https://images.unsplash.com/photo-1644830159392-f018d098198f?auto=format&fit=crop&q=80&w=500", desc: "Thick savory pancake topped with diced onions." },
    { id: 22, name: "Egg Uthappam", price: 85, category: "Breakfast", image: "https://images.unsplash.com/photo-1644830159392-f018d098198f?auto=format&fit=crop&q=80&w=500", desc: "Traditional thick pancake with a layer of egg." },
    { id: 23, name: "Tomato Uthappam", price: 75, category: "Breakfast", image: "https://images.unsplash.com/photo-1644830159392-f018d098198f?auto=format&fit=crop&q=80&w=500", desc: "Savory thick crepe with juicy tomato slices." },
    { id: 24, name: "Kozhukattai (4 pcs)", price: 50, category: "Breakfast", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=500", desc: "Steamed rice dumplings with savory tempering." },
    { id: 25, name: "Idiyappam (3 pcs)", price: 55, category: "Breakfast", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=500", desc: "String hoppers served with coconut milk or kurma." },

    // LUNCH (26-60)
    { id: 26, name: "Tamil Nadu Mini Meals", price: 90, category: "Lunch", image: "https://images.unsplash.com/photo-1626777552726-4a6b547b4e5d?auto=format&fit=crop&q=80&w=500", desc: "Unlimited sambar, rasam, kootu, poriyal with rice." },
    { id: 27, name: "Full Banana Leaf Meal", price: 150, category: "Lunch", image: "https://images.unsplash.com/photo-1626777552726-4a6b547b4e5d?auto=format&fit=crop&q=80&w=500", desc: "Authentic lunch with 12+ South Indian items." },
    { id: 28, name: "Chicken Biryani (Basmati)", price: 160, category: "Lunch", image: "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&q=80&w=500", desc: "Fragrant basmati rice with tender spiced chicken." },
    { id: 29, name: "Seeraga Samba Chicken Biryani", price: 170, category: "Lunch", image: "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&q=80&w=500", desc: "Authentic Dindigul style small grain biryani." },
    { id: 30, name: "Mutton Biryani", price: 240, category: "Lunch", image: "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&q=80&w=500", desc: "Slow-cooked rice with succulent mutton pieces." },
    { id: 31, name: "Egg Biryani", price: 120, category: "Lunch", image: "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&q=80&w=500", desc: "Spiced biryani rice with two boiled eggs." },
    { id: 32, name: "Veg Biryani", price: 110, category: "Lunch", image: "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&q=80&w=500", desc: "Fragrant rice with assorted garden vegetables." },
    { id: 33, name: "Mushroom Biryani", price: 130, category: "Lunch", image: "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&q=80&w=500", desc: "Spiced rice with fresh button mushrooms." },
    { id: 34, name: "Lemon Rice", price: 60, category: "Lunch", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=500", desc: "Zesty lemon flavored rice with roasted peanuts." },
    { id: 35, name: "Tamarind Rice", price: 70, category: "Lunch", image: "https://images.unsplash.com/photo-1631515223380-c127435978ac?auto=format&fit=crop&q=80&w=500", desc: "Tangy Puliyodharai with spicy tempering." },
    { id: 36, name: "Tomato Rice", price: 65, category: "Lunch", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=500", desc: "Savory rice cooked with tomatoes and spices." },
    { id: 37, name: "Curd Rice", price: 55, category: "Lunch", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=500", desc: "Cooling yogurt rice with pomegranate seeds." },
    { id: 38, name: "Sambhar Rice", price: 80, category: "Lunch", image: "https://images.unsplash.com/photo-1626777552726-4a6b547b4e5d?auto=format&fit=crop&q=80&w=500", desc: "Delicious Bisibelebath style aromatic rice." },
    { id: 39, name: "Coconut Rice", price: 65, category: "Lunch", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=500", desc: "Fragrant rice with freshly grated coconut." },
    { id: 40, name: "Garlic Rice", price: 70, category: "Lunch", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=500", desc: "Roasted garlic infused spicy rice." },
    { id: 41, name: "Mint Rice", price: 75, category: "Lunch", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=500", desc: "Pudina rice with a cooling fresh aroma." },
    { id: 42, name: "Chettinad Fish Curry Rice", price: 180, category: "Lunch", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=500", desc: "Spiced fish curry served with steamed rice." },
    { id: 43, name: "Mutton Sukka Rice", price: 210, category: "Lunch", image: "https://images.unsplash.com/photo-1589187151053-5ec8818e661b?auto=format&fit=crop&q=80&w=500", desc: "Dry roasted mutton chunks with rice combo." },
    { id: 44, name: "Chicken 65 Rice", price: 160, category: "Lunch", image: "https://images.unsplash.com/photo-1589187151053-5ec8818e661b?auto=format&fit=crop&q=80&w=500", desc: "Crispy chicken 65 pieces with flavored rice." },
    { id: 45, name: "Egg Roast Rice", price: 100, category: "Lunch", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=500", desc: "Spicy egg masala served over steamed rice." },
    { id: 46, name: "Chettinad Chicken Gravy", price: 140, category: "Lunch", image: "https://images.unsplash.com/photo-1589187151053-5ec8818e661b?auto=format&fit=crop&q=80&w=500", desc: "Spicy and bold traditional chicken gravy." },
    { id: 47, name: "Fish Fry (King Fish)", price: 120, category: "Lunch", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=500", desc: "Crispy pan-fried fish steak with spices." },
    { id: 48, name: "Prawn Thokku Rice", price: 190, category: "Lunch", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=500", desc: "Succulent prawns in a thick spicy masala with rice." },
    { id: 49, name: "Kothu Parotta (Veg)", price: 90, category: "Lunch", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=500", desc: "Shredded parotta with veggies and spicy gravy." },
    { id: 50, name: "Kothu Parotta (Egg)", price: 110, category: "Lunch", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=500", desc: "Shredded parotta tossed with eggs and spices." },
    { id: 51, name: "Kothu Parotta (Chicken)", price: 140, category: "Lunch", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=500", desc: "Street-style shredded parotta with chicken pieces." },
    { id: 52, name: "Veg Kurma Rice", price: 85, category: "Lunch", image: "https://images.unsplash.com/photo-1626777552726-4a6b547b4e5d?auto=format&fit=crop&q=80&w=500", desc: "Coconut based vegetable gravy with rice." },
    { id: 53, name: "Ghee Rice with Dal", price: 95, category: "Lunch", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=500", desc: "Butter rice served with yellow lentil parippu." },
    { id: 54, name: "Vatha Kuzhambu Rice", price: 80, category: "Lunch", image: "https://images.unsplash.com/photo-1626777552726-4a6b547b4e5d?auto=format&fit=crop&q=80&w=500", desc: "Tangy and spicy sundried berry gravy and rice." },
    { id: 55, name: "Mushroom Masala Rice", price: 110, category: "Lunch", image: "https://images.unsplash.com/photo-1626777552726-4a6b547b4e5d?auto=format&fit=crop&q=80&w=500", desc: "Fresh button mushrooms in gravy with rice." },
    { id: 56, name: "Cauliflower 65 Rice", price: 100, category: "Lunch", image: "https://images.unsplash.com/photo-1626777552726-4a6b547b4e5d?auto=format&fit=crop&q=80&w=500", desc: "Crunchy fried gobi 65 with flavored rice." },
    { id: 57, name: "Paneer Butter Masala Rice", price: 130, category: "Lunch", image: "https://images.unsplash.com/photo-1626777552726-4a6b547b4e5d?auto=format&fit=crop&q=80&w=500", desc: "Soft paneer in rich tomato gravy and rice." },
    { id: 58, name: "Kadai Veg Rice", price: 115, category: "Lunch", image: "https://images.unsplash.com/photo-1626777552726-4a6b547b4e5d?auto=format&fit=crop&q=80&w=500", desc: "Assorted vegetables in kadai masala with rice." },
    { id: 59, name: "Chilli Chicken Rice", price: 150, category: "Lunch", image: "https://images.unsplash.com/photo-1589187151053-5ec8818e661b?auto=format&fit=crop&q=80&w=500", desc: "Indo-Chinese style chilli chicken with rice." },
    { id: 60, name: "Pepper Chicken Rice", price: 155, category: "Lunch", image: "https://images.unsplash.com/photo-1589187151053-5ec8818e661b?auto=format&fit=crop&q=80&w=500", desc: "Spicy pepper tossed chicken with steamed rice." },

    // SNACKS (61-85)
    { id: 61, name: "Masala Vada (3 pcs)", price: 30, category: "Snacks", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=500", desc: "Crunchy lentil fritters with fennel seeds." },
    { id: 62, name: "Onion Pakoda (100g)", price: 40, category: "Snacks", image: "https://images.unsplash.com/photo-1599307767316-776533bb941c?auto=format&fit=crop&q=80&w=500", desc: "Golden fried crispy onion shreds." },
    { id: 63, name: "Chilli Bajji (2 pcs)", price: 30, category: "Snacks", image: "https://images.unsplash.com/photo-1599307767316-776533bb941c?auto=format&fit=crop&q=80&w=500", desc: "Spiced batter-fried whole green chilies." },
    { id: 64, name: "Potato Bonda (2 pcs)", price: 35, category: "Snacks", image: "https://images.unsplash.com/photo-1599307767316-776533bb941c?auto=format&fit=crop&q=80&w=500", desc: "Gram-flour fried balls with potato filling." },
    { id: 65, name: "Kuzhi Paniyaram (6 pcs)", price: 50, category: "Snacks", image: "https://images.unsplash.com/photo-1601050638911-c3239920320c?auto=format&fit=crop&q=80&w=500", desc: "Savory bite-sized rice dumplings." },
    { id: 66, name: "Sweet Paniyaram (6 pcs)", price: 55, category: "Snacks", image: "https://images.unsplash.com/photo-1601050638911-c3239920320c?auto=format&fit=crop&q=80&w=500", desc: "Jaggery flavored sweet rice dumplings." },
    { id: 67, name: "Chickpea Sundal (Cup)", price: 25, category: "Snacks", image: "https://images.unsplash.com/photo-1515544832467-27943d0fef3a?auto=format&fit=crop&q=80&w=500", desc: "Healthy boiled black chickpeas with coconut." },
    { id: 68, name: "Potato Bajji (3 pcs)", price: 35, category: "Snacks", image: "https://images.unsplash.com/photo-1599307767316-776533bb941c?auto=format&fit=crop&q=80&w=500", desc: "Fried potato slices in crispy batter." },
    { id: 69, name: "Banana Bajji (2 pcs)", price: 30, category: "Snacks", image: "https://images.unsplash.com/photo-1599307767316-776533bb941c?auto=format&fit=crop&q=80&w=500", desc: "Batter fried thin banana slices." },
    { id: 70, name: "Egg Bajji (2 pcs)", price: 45, category: "Snacks", image: "https://images.unsplash.com/photo-1599307767316-776533bb941c?auto=format&fit=crop&q=80&w=500", desc: "Boiled egg halves fried in spiced batter." },
    { id: 71, name: "Mysore Bonda (3 pcs)", price: 40, category: "Snacks", image: "https://images.unsplash.com/photo-1599307767316-776533bb941c?auto=format&fit=crop&q=80&w=500", desc: "Soft and fluffy flour dumplings." },
    { id: 72, name: "Vazhaipoo Vada (3 pcs)", price: 45, category: "Snacks", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=500", desc: "Crispy banana flower lentil fritters." },
    { id: 73, name: "Keerai Vada (3 pcs)", price: 40, category: "Snacks", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=500", desc: "Lentil fritters mixed with fresh spinach." },
    { id: 74, name: "Samosa (2 pcs)", price: 30, category: "Snacks", image: "https://images.unsplash.com/photo-1601050638911-c3239920320c?auto=format&fit=crop&q=80&w=500", desc: "Classic pyramid pastry with potato filling." },
    { id: 75, name: "Vegetable Cutlet (2 pcs)", price: 50, category: "Snacks", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=500", desc: "Deep fried vegetable patties with breadcrumbs." },
    { id: 76, name: "Medhu Packoda", price: 35, category: "Snacks", image: "https://images.unsplash.com/photo-1599307767316-776533bb941c?auto=format&fit=crop&q=80&w=500", desc: "Soft textured spiced flour snack." },
    { id: 77, name: "Ribbon Pakoda (100g)", price: 40, category: "Snacks", image: "https://images.unsplash.com/photo-1599307767316-776533bb941c?auto=format&fit=crop&q=80&w=500", desc: "Thin ribbon-like crunchy savory snack." },
    { id: 78, name: "Murukku (2 pcs)", price: 20, category: "Snacks", image: "https://images.unsplash.com/photo-1599307767316-776533bb941c?auto=format&fit=crop&q=80&w=500", desc: "Traditional twisty crunchy rice snack." },
    { id: 79, name: "Butter Murukku (100g)", price: 45, category: "Snacks", image: "https://images.unsplash.com/photo-1599307767316-776533bb941c?auto=format&fit=crop&q=80&w=500", desc: "Melt-in-mouth creamy textured murukku." },
    { id: 80, name: "Seedai (100g)", price: 40, category: "Snacks", image: "https://images.unsplash.com/photo-1599307767316-776533bb941c?auto=format&fit=crop&q=80&w=500", desc: "Tiny crispy rice flour pearl balls." },
    { id: 81, name: "Athiri (2 pcs)", price: 35, category: "Snacks", image: "https://images.unsplash.com/photo-1599307767316-776533bb941c?auto=format&fit=crop&q=80&w=500", desc: "Deep fried sweet wheat snack." },
    { id: 82, name: "Thattai (2 pcs)", price: 25, category: "Snacks", image: "https://images.unsplash.com/photo-1599307767316-776533bb941c?auto=format&fit=crop&q=80&w=500", desc: "Traditional flat crispy rice cracker." },
    { id: 83, name: "Kara Bhoondi (100g)", price: 30, category: "Snacks", image: "https://images.unsplash.com/photo-1599307767316-776533bb941c?auto=format&fit=crop&q=80&w=500", desc: "Tiny spicy fried flour pearls." },
    { id: 84, name: "Aloo Chat", price: 60, category: "Snacks", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=500", desc: "Spicy and tangy street-style potato snack." },
    { id: 85, name: "Papdi Chat", price: 65, category: "Snacks", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=500", desc: "Crispy wafers topped with potatoes and yogurt." },

    // BEVERAGES & DRINKS (86-100)
    { id: 86, name: "South Indian Filter Coffee", price: 30, category: "Beverages & Drinks", image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&q=80&w=500", desc: "Traditional strong decoction coffee with milk." },
    { id: 87, name: "Masala Chai", price: 25, category: "Beverages & Drinks", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=500", desc: "Spiced tea with ginger and cardamom." },
    { id: 88, name: "Rose Milk", price: 40, category: "Beverages & Drinks", image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=80&w=500", desc: "Refreshing chilled milk with rose aroma." },
    { id: 89, name: "Madurai Jigarthanda", price: 55, category: "Beverages & Drinks", image: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&q=80&w=500", desc: "Authentic famous cold drink from Madurai." },
    { id: 90, name: "Nannari Sarbath", price: 35, category: "Beverages & Drinks", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=500", desc: "Classic root syrup drink with lemon." },
    { id: 91, name: "Buttermilk (Neer Mor)", price: 25, category: "Beverages & Drinks", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=500", desc: "Salted yogurt drink with curry leaves." },
    { id: 92, name: "Panakam", price: 30, category: "Beverages & Drinks", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=500", desc: "Traditional jaggery drink with ginger and lime." },
    { id: 93, name: "Badam Milk (Hot)", price: 50, category: "Beverages & Drinks", image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=80&w=500", desc: "Warm almond milk with saffron strands." },
    { id: 94, name: "Sukku Malli Coffee", price: 30, category: "Beverages & Drinks", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=500", desc: "Herbal coffee with ginger and coriander seeds." },
    { id: 95, name: "Fresh Lime Soda", price: 40, category: "Beverages & Drinks", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=500", desc: "Sweet and salty lemon refresher." },
    { id: 96, name: "Mango Juice", price: 60, category: "Beverages & Drinks", image: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&q=80&w=500", desc: "Fresh pulp of seasonal alphanso mangoes." },
    { id: 97, name: "Watermelon Juice", price: 50, category: "Beverages & Drinks", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=500", desc: "Chilled fresh watermelon juice with mint." },
    { id: 98, name: "Pineapple Juice", price: 55, category: "Beverages & Drinks", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=500", desc: "Tangy and sweet fresh pineapple juice." },
    { id: 99, name: "Cold Coffee with Ice Cream", price: 75, category: "Beverages & Drinks", image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=80&w=500", desc: "Rich iced coffee topped with vanilla scoop." },
    { id: 100, name: "Sweet Lassi", price: 60, category: "Beverages & Drinks", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=500", desc: "Traditional thick sweetened yogurt drink." }
];

let menuData = [];

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    checkLogin();
    loadAdminApp();
});

function checkLogin() {
    const loggedIn = sessionStorage.getItem("admin_logged_in");
    if (!loggedIn) {
        const pass = prompt("Enter Admin Password (default: admin):");
        if (pass === "admin") {
            sessionStorage.setItem("admin_logged_in", "true");
        } else {
            alert("Unauthorized! Returning to home.");
            window.location.href = "index.html";
        }
    }
}

function loadAdminApp() {
    loadData();
    renderAdminTable();
    updateStats();
    setupEventListeners();
}

function loadData() {
    const raw = localStorage.getItem("food_menu_data");
    menuData = raw ? JSON.parse(raw) : DEFAULT_MENU;
    if (!raw) localStorage.setItem("food_menu_data", JSON.stringify(DEFAULT_MENU));
}

function setupEventListeners() {
    const form = document.getElementById("menu-form");
    const imgInput = document.getElementById("item-image");
    const cancelBtn = document.getElementById("cancel-btn");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        saveItem();
    });

    imgInput.addEventListener("input", (e) => {
        const preview = document.getElementById("img-preview");
        const url = e.target.value;
        if (url) {
            preview.innerHTML = `<img src="${url}" onerror="this.parentElement.innerHTML='Invalid URL'">`;
        } else {
            preview.innerHTML = `<span style="color: #999; font-size: 0.8rem;">Image Preview</span>`;
        }
    });

    cancelBtn.addEventListener("click", () => {
        resetForm();
    });
}

// --- CRUD OPERATIONS ---
function renderAdminTable() {
    const tbody = document.getElementById("admin-table-body");
    tbody.innerHTML = "";

    // Sort by ID descending (newest first)
    const sortedMenu = [...menuData].sort((a, b) => b.id - a.id);

    sortedMenu.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>
                <div style="display: flex; align-items: center; gap: 15px;">
                    <img src="${item.image}" class="table-img" onerror="this.src='https://via.placeholder.com/50'">
                    <div>
                        <div style="font-weight: 800; color: var(--text-main);">${item.name}</div>
                        <div style="font-size: 0.75rem; color: var(--text-muted); max-width: 200px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.desc}</div>
                    </div>
                </div>
            </td>
            <td><span class="category-badge" style="background: #eee; color: #666;">${item.category}</span></td>
            <td style="font-weight: 700; color: var(--primary);">₹${item.price}</td>
            <td>
                <div style="display: flex; gap: 8px;">
                    <button class="btn-action btn-edit" onclick="editItem(${item.id})" title="Edit Item">
                        <i class="fa-solid fa-pen"></i>
                    </button>
                    <button class="btn-action btn-delete" onclick="deleteItem(${item.id})" title="Delete Item">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function saveItem() {
    const id = document.getElementById("edit-id").value;
    const item = {
        id: id ? parseInt(id) : Date.now(),
        name: document.getElementById("item-name").value,
        price: parseInt(document.getElementById("item-price").value),
        category: document.getElementById("item-category").value,
        image: document.getElementById("item-image").value,
        desc: document.getElementById("item-desc").value
    };

    if (id) {
        const index = menuData.findIndex(i => i.id === parseInt(id));
        menuData[index] = item;
    } else {
        menuData.push(item);
    }

    localStorage.setItem("food_menu_data", JSON.stringify(menuData));
    resetForm();
    renderAdminTable();
    updateStats();
    showToast(id ? "Item updated successfully!" : "New food added successfully!");
}

function deleteItem(id) {
    if (confirm("Are you sure you want to remove this item?")) {
        menuData = menuData.filter(i => i.id !== id);
        localStorage.setItem("food_menu_data", JSON.stringify(menuData));
        renderAdminTable();
        updateStats();
        showToast("Item deleted successfully!", "error");
    }
}

function editItem(id) {
    const item = menuData.find(i => i.id === id);
    if (!item) return;

    document.getElementById("edit-id").value = item.id;
    document.getElementById("item-name").value = item.name;
    document.getElementById("item-price").value = item.price;
    document.getElementById("item-category").value = item.category;
    document.getElementById("item-image").value = item.image;
    document.getElementById("item-desc").value = item.desc;

    document.getElementById("item-image").dispatchEvent(new Event('input'));

    document.getElementById("form-title").innerText = "Edit Item";
    document.getElementById("save-btn").innerText = "Update Item";
    document.getElementById("cancel-btn").style.display = "block";
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetForm() {
    document.getElementById("menu-form").reset();
    document.getElementById("edit-id").value = "";
    document.getElementById("form-title").innerText = "Add New Item";
    document.getElementById("save-btn").innerText = "Save Item";
    document.getElementById("cancel-btn").style.display = "none";
    document.getElementById("img-preview").innerHTML = `<span style="color: #999; font-size: 0.8rem;">Image Preview</span>`;
}

function updateStats() {
    document.getElementById("stat-total").innerText = menuData.length;
}

function resetMenu() {
    if (confirm("Reset menu to factory settings? This will delete all customized items.")) {
        localStorage.setItem("food_menu_data", JSON.stringify(DEFAULT_MENU));
        loadAdminApp();
        showToast("Menu reset to defaults!");
    }
}

function showToast(message, type = "success") {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="fa-solid ${type === 'success' ? 'fa-check-circle' : 'fa-trash-can'}"></i>
        <span>${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
        setTimeout(() => {
            toast.classList.remove("show");
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }, 100);
}
