
"use client";

import { useState } from "react";
import { menuCategories } from "@/data/menuCategories";
import type { MenuItem } from "@/types/menu";
import MenuItemCard from "./MenuItemCard";
import { drinkSubcategories } from "@/data/menuCategories";
import ScrollableTabs from "./ScrollableTabs";


export default function MenuBrowser({ items }: { items: MenuItem[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    menuCategories[0]
  );
  
  const [selectedDrinkSubcategory, setSelectedDrinkSubcategory] =
  useState<string>(drinkSubcategories[0]);

  const visibleItems = items.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <section>
      
        <ScrollableTabs
        label="Menu categories"
        className="sticky top-16 z-40 mb-6 border-b border-aozora-dark/10 bg-aozora-cream px-4 py-1"
        >
        {menuCategories.map((category) => (
            <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            aria-pressed={selectedCategory === category}
            className={`shrink-0 rounded-lg px-4 py-2 text-sm font-medium ${
                selectedCategory === category
                ? "bg-aozora-dark text-white"
                : "bg-aozora-cream text-aozora-dark"
            }`}
            >
            {category}
            </button>
        ))}
        </ScrollableTabs>


      <h2 className="mb-4 text-xl font-semibold">
        {selectedCategory}
      </h2>

      
        
        {selectedCategory === "Drinks" ? (
        <>
            
            <ScrollableTabs label="Drink subcategories" className="mb-6">
            {drinkSubcategories.map((subcategory) => (
                <button
                key={subcategory}
                type="button"
                onClick={() => setSelectedDrinkSubcategory(subcategory)}
                aria-pressed={selectedDrinkSubcategory === subcategory}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm ${
                    selectedDrinkSubcategory === subcategory
                    ? "border-aozora-red bg-aozora-red text-white"
                    : "border-aozora-dark/20 text-aozora-dark"
                }`}
                >
                {subcategory}
                </button>
            ))}
            </ScrollableTabs>


            <h3 className="mb-3 text-lg font-semibold">
            {selectedDrinkSubcategory}
            </h3>

            {visibleItems
            .filter((item) => item.subcategory === selectedDrinkSubcategory)
            .map((item) => (
                <MenuItemCard key={item.id} item={item} />
            ))}
        </>
        ) : (
        visibleItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
        ))
        )}


    </section>
  );
}
