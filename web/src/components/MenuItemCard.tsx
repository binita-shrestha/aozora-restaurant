import Image from "next/image";
import type { MenuItem } from "@/types/menu";
//display function
export default function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <article className="mb-3 flex items-start gap-4 rounded-xl border border-aozora-dark/10 bg-white p-4 shadow-sm">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          
          {item.vegetarian && (
            <span className="rounded border border-green-700 px-2 py-0.5 text-xs font-semibold text-green-700">
              V
            </span>
          )}
        </div>

        {item.description && (
          <p className="mt-1 text-sm">{item.description}</p>
        )}

        {item.price !== undefined ? (
          <p className="mt-2 font-semibold">
            Rs. {item.price}
          </p>
        ) : item.only !== undefined ? (
          <div className="mt-2 flex flex-wrap gap-4 font-semibold">
            <span>Only: Rs. {item.only}</span>
            <span>Set: Rs. {item.set}</span>
          </div>
        ) : (
          <div className="mt-2 flex flex-wrap gap-4 font-semibold">
            <span>60ml: Rs. {item.price60ml}</span>
            <span>180ml: Rs. {item.price180ml}</span>
          </div>
        )}
      </div>

      {item.image && (
        <Image
          src={item.image}
          alt={item.name}
          width={96}
          height={96}
          className="h-24 w-24 shrink-0 rounded-lg object-cover"
        />
      )}
    </article>
  );
}
