import { useEffect, useState } from "react";
import { Code, Mail } from "lucide-react";
import { AiFillApi } from "react-icons/ai";
import { GiDeer } from "react-icons/gi";
import { Link } from "wouter";
import { Button } from "./ui/button";
import { formatPriceToZAR } from "@/lib/utils/currencyFormatter";

interface Deal {
  dealID: string;
  title: string;
  salePrice: string;
  normalPrice: string;
  thumb: string;
  savings: string;
  steamAppID: string;
  steamRatingPercent: string | number;
}



export default function Deals() {
  const [deals, setDeals] = useState<Deal[]>([]);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const res = await fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15");
        const data = await res.json();

        let splitData = data.slice(0, 10);
        splitData.forEach((deal: any) => {
          deal.steamRatingPercent = JSON.parse(deal.steamRatingPercent);
        });


        splitData = splitData.sort((a: any, b: any) => b.steamRatingPercent - a.steamRatingPercent);

        const filteredData = splitData.sort((a: any, b: any) => b.steamRatingPercent - a.steamRatingPercent);


        setDeals(filteredData); // Top 10 deals
      } catch (err) {
        console.error("Failed to fetch deals:", err);
      }
    };

    fetchDeals();
  }, []);

  return (
    <section id="home" className="min-h-screen font-code flex items-center justify-center bg-[#000000] text-[#25de34] pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center">Top 10 Deals</h2>
          <div className="w-full flex justify-center items-center p-3 mb-12">
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deals.map((deal) => (
              <div key={deal.dealID} className="bg-[#2A2B2A] rounded-2xl shadow-md p-4 font-courier">
                <img src={deal.thumb} alt={deal.title} className="w-40 h-auto object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold">{deal.title}</h3>
                <p className="text-sm text-gray-600 line-through">{formatPriceToZAR(deal.normalPrice)}</p>
                <p className="text-lg font-bold text-green-600">{formatPriceToZAR(deal.salePrice)}</p>
                <p className="text-xs font-semibold text-red-500">{parseInt(deal.savings).toFixed(0)}% off</p>
                <p className="text-xs font-semibold">Click <a className="text-blue-500 underline" target="_blank" href={`https://store.steampowered.com/app/${deal.steamAppID}/`}>here</a> to go to the Steam page</p>
                <p className="mt-4 border border-[#25de34] rounded-full w-fit px-4 py-1 flex items-centertext-xs font-semibold text-[#25de34]">{deal.steamRatingPercent}% rating</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
