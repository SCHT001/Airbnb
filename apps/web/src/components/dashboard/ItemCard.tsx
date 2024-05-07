import { host } from "@/lib/axios";
import { Star } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import CardCarousel from "./CardCarousel";
const ItemCard = () => {
  const [listings, setListings] = useState<
    {
      id: number;
      title: string;
      rating: number;
      price: number;
      distance: number;
      images: any[];
    }[]
  >([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await host.get("/listings");
        setListings(data.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching listings:", error);
        return setLoading(false);
      }
    })();
  }, []);

  if (!loading) {
    return (
      <Card className="px-5 md:px-24 lg:px-32 pt-10 border-none shadow-none grid grid-cols-2  lg:grid-cols-4 xl:grid-cols-6 gap-10 w-full">
        {listings.map((item, index) => {
          return (
            <div
              key={index}
              className="text-sm w-full  rounded-2xl border flex flex-col   shadow-sm z-10 cursor-pointer "
            >
              {/* Images carousel for each item */}

              {/* Name and rating */}
              <CardCarousel images={item.images} roomId={item.id} />
              <Link href={`/rooms/${item.id}`} className="px-2 pb-2 ">
                <div className="font-semibold  pt-5 flex justify-between">
                  <div>{item.title}</div>
                  <div className="rating flex items-center">
                    <Star size={15}></Star> {item.rating}
                  </div>
                </div>

                {/* Distance */}
                <div className="text-slate-500">
                  {/* {item.distance} kilometers away */}
                </div>

                {/* Cost */}
                <div className="text-slate-500 flex gap-2">
                  <span className="text-slate-600 font-semibold">
                    {item.price}$
                  </span>
                  per night
                </div>
              </Link>
            </div>
          );
        })}
      </Card>
    );
  } else
    return (
      <Card className="px-32 pt-10 border-none shadow-none grid grid-cols-6 gap-10">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, index) => {
          return (
            <Skeleton className="h-[300px] w-[250px]" key={index}></Skeleton>
          );
        })}
      </Card>
    );
};
export default ItemCard;
