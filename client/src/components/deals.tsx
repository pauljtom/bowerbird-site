import { useEffect, useState } from "react";
import { Code, Mail } from "lucide-react";
import { AiFillApi } from "react-icons/ai";
import { GiDeer } from "react-icons/gi";
import { Link } from "wouter";
import { Button } from "./ui/button";

interface Deal {
  dealID: string;
  title: string;
  salePrice: string;
  normalPrice: string;
  thumb: string;
  savings: string;
}

export default function Deals() {
  const [deals, setDeals] = useState<Deal[]>([]);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const res = await fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15");
        const data = await res.json();
        setDeals(data.slice(0, 10)); // Top 10 deals
      } catch (err) {
        console.error("Failed to fetch deals:", err);
      }
    };

    fetchDeals();
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#dddddd] pt-20">
      <div className="flex flex-col items-center gap-4">
                    <Link to="/">
                      <Button className="text-lg px-6 py-2">Go Home</Button>
                    </Link>
    </div>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Top 10 Deals</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deals.map((deal) => (
              <div key={deal.dealID} className="bg-white rounded-2xl shadow-md p-4">
                <img src={deal.thumb} alt={deal.title} className="w-fit h-40 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold">{deal.title}</h3>
                <p className="text-sm text-gray-600 line-through">${deal.normalPrice}</p>
                <p className="text-lg font-bold text-green-600">${deal.salePrice}</p>
                <p className="text-xs text-red-500">{parseFloat(deal.savings).toFixed(0)}% off</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
