import Image from "next/image";
import type { MenuItem } from "@/types/menu";

// display function
export default function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <article className="flex items-start gap-4 border-b py-4">
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{item.name}</h3>

        {item.description && (
          <p className="mt-1 text-sm">{item.description}</p>
        )}
        {item.price !== undefined ? (
            <p className="mt-2 font-semibold">
            Rs. {item.price}
            </p>
        ) : (
            <p className="mt-2 font-semibold">
                Only: Rs. {item.only} | Set: Rs. {item.set}
            </p>
        )}
      </div>

      {item.image && (
        <Image
          src={item.image}
          alt={item.name}
          width={96}
          height={96}
          className="h-24 w-24 rounded-lg object-cover"
        />
      )}
    </article>
  );
}