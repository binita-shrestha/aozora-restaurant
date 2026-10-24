import MenuItemCard from "@/components/MenuItemCard";
import  { menuItems } from "@/data/menuItems";


export default function MenuPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-6 text-aozora-dark sm:px-6 sm:py-10">
      <h1 className="mb-6 text-3xl font-bold">Our Menu</h1>

      {menuItems.map((item) => (
        <MenuItemCard key={item.id} item={item} />
      ))}
    </main>
  );
}
