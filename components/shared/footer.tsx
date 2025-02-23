"use client";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black  text-white underline-link">
      <div className="w-full">
        <Button
          variant="ghost"
          className="bg-gray-800 w-full  rounded-none "
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ChevronUp className="mr-2 h-4 w-4" />
          Footer.Back to top
        </Button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
          <div>
            <h3 className="font-bold mb-2">Footer.Get to Know Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/page/careers">Footer.Careers</Link>
              </li>
              <li>
                <Link href="/page/blog">Footer.Blog</Link>
              </li>
              <li>
                <Link href="/page/about-us">About name</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Footer.Make Money with Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/page/sell">
                  Sell products 
                </Link>
              </li>
              <li>
                <Link href="/page/become-affiliate">
                  
                </Link>
              </li>
              <li>
                <Link href="/page/advertise">
                  Footer.Advertise Your Products
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Footer.Let Us Help You</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/page/shipping">
                  Footer.Shipping Rates & Policies
                </Link>
              </li>
              <li>
                <Link href="/page/returns-policy">
                  Footer.Returns & Replacements
                </Link>
              </li>
              <li>
                <Link href="/page/help">Footer.Help</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto py-8 px-4 flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-4 flex-wrap md:flex-nowrap"></div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-center  gap-3 text-sm">
          <Link href="/page/conditions-of-use">
            Footer.Conditions of Use
          </Link>
          <Link href="/page/privacy-policy">Footer.Privacy Notice</Link>
          <Link href="/page/help">Footer.Help</Link>
        </div>
        <div className="flex justify-center text-sm">
          <p> © copyright</p>
        </div>
        <div className="mt-8 flex justify-center text-sm text-gray-400">
          address | phone
        </div>
      </div>
    </footer>
  );
}
