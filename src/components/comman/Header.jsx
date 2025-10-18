"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Heart,
  ShoppingBag,
  Search,
  Menu,
  X,
  ChevronDown,
  LogOut,
  Settings,
  User as UserIcon,
  Package,
  MapPin,
  ChevronsRight, // Added for menu items
} from "lucide-react";

// SHADCN COMPONENTS
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "@/redux/features/auth";
import { useRouter } from "next/navigation";

// --- Navigation Data Structure (Centralized and Nested) ---
const navigationData = [
  { name: "Home", href: "/", hasChildren: false },
  {
    name: "Shop By Category",
    href: "#",
    hasChildren: true,
    megaMenu: [
      {
        title: "Necklaces",
        href: "/category/necklaces",
        subGroups: [
          {
            name: "By Type",
            items: ["Gold", "Diamond", "Silver", "Pearl", "Choker", "Pendant"],
          },
          {
            name: "By Occasion",
            items: ["Wedding", "Party", "Daily Wear", "Festive"],
          },
        ],
      },
      {
        title: "Earrings",
        href: "/category/earrings",
        subGroups: [
          {
            name: "By Style",
            items: ["Stud", "Hoops", "Jhumka", "Drop", "Danglers"],
          },
          {
            name: "By Material",
            items: ["Gold", "Silver", "Diamond", "Pearl"],
          },
        ],
      },
      {
        title: "Rings",
        href: "/category/rings",
        subGroups: [
          {
            name: "Collections",
            items: [
              "Gold Rings",
              "Silver Rings",
              "Diamond Rings",
              "Engagement",
            ],
          },
          {
            name: "By Occasion",
            items: ["Wedding", "Promise", "Casual", "Festive"],
          },
        ],
      },
      {
        title: "Bracelets",
        href: "/category/bracelets",
        subGroups: [
          {
            name: "Types",
            items: ["Bangles", "Kada", "Chain", "Cuff"],
          },
          {
            name: "Materials",
            items: ["Gold", "Silver", "Diamond", "Mixed Metals"],
          },
        ],
      },
      {
        title: "Bridal",
        href: "/category/bridal",
        subGroups: [
          {
            name: "Collections",
            items: ["Sets", "Maang Tikka", "Nath", "Payal"],
          },
          {
            name: "Complete Bridal",
            items: ["Bridal Sets", "Designer Bridal", "Traditional", "Modern"],
          },
        ],
      },
    ],
  },
  {
    name: "New Arrivals",
    href: "/category/new-arrivals",
    hasChildren: false,
  },
  {
    name: "Gift Items",
    href: "/category/gift-items",
    hasChildren: false,
  },
  {
    name: "Personalised Jewellery",
    href: "/category/personalized",
    hasChildren: false,
  },
  {
    name: "Track Your Order",
    href: "order-track",
    hasChildren: false,
  },
  { name: "Contact Us", href: "/contact", hasChildren: false },
];

const userMenuItems = [
  { label: "My Profile", icon: UserIcon, href: "/profile?tab=account" },
  { label: "My Orders", icon: Package, href: "/profile?tab=orders" },
  { label: "Account Settings", icon: Settings, href: "/profile?tab=settings" },
  {
    label: "Addresses",
    icon: MapPin,
    href: "/profile?tab=addresses&to=address",
  },
];

// --- Component ---
export default function Header({ data, cart, wishlist }) {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const cartCount = cart?._data?.items?.length || 0;
  const wishlistCount = wishlist?._data?.items?.length || 0;

  const router = useRouter();

  const isLoggedIn = useSelector((state) => state.auth.isLogin);
  const user = useSelector((state) => state.auth.details);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setProfile(data._data));
    }
  }, [data]);

  const handleLogout = () => {
    router.push("/profile?tab=settings&logout=true");
  };

  // SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper function to create slug from string
  const createSlug = (str) => str.toLowerCase().replace(/\s+/g, "-");

  // --- RENDER FUNCTIONS ---

  // Renders a single link for the mobile sheet, ensuring the sheet closes on click
  const MobileLink = ({ name, href }) => (
    <SheetClose asChild>
      <Link href={href}>
        <Button
          variant="ghost"
          className="w-full justify-start py-3 px-4 text-gray-900 hover:bg-amber-50 rounded-lg font-medium h-auto"
        >
          {name}
        </Button>
      </Link>
    </SheetClose>
  );

  const MobileSubAccordion = ({ subcat, subIdx }) => {
    // Check if this subcategory has items (i.e., is a leaf node)
    const hasItems = subcat.items && subcat.items.length > 0;

    // NOTE: If your data structure allowed subcat to have its own 'subGroups' (recursion),
    // you would check for that here and recursively call MobileSubAccordion.
    // For now, we'll nest based on the existing subcat structure.

    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={`sub-item-${subIdx}`} className="border-none">
          <AccordionTrigger className="py-2.5 px-3 text-xs font-medium text-gray-500 uppercase hover:bg-gray-100 rounded-md">
            {subcat.name}
          </AccordionTrigger>

          {/* The AccordionContent will contain the sub-items */}
          <AccordionContent className="p-0 pt-1">
            {hasItems && (
              <ul className="space-y-1 text-sm text-gray-700 pl-4">
                {subcat.items.map((sub, itemIdx) => (
                  <li key={itemIdx}>
                    <SheetClose asChild>
                      <Link
                        href={`/category/${createSlug(sub)}`}
                        className="flex items-center gap-1.5 py-0.5 hover:text-amber-600 cursor-pointer transition-colors duration-200"
                      >
                        <ChevronsRight size={14} className="text-amber-400" />{" "}
                        {sub}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  };

  // Renders the full mobile menu content
  const renderMobileNav = () => (
    <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-80px)]">
      {navigationData.map((cat, idx) => (
        <div key={idx}>
          {!cat.hasChildren ? (
            <MobileLink name={cat.name} href={cat.href} />
          ) : (
            <Accordion
              type="single"
              collapsible
              className="w-full border rounded-lg bg-white shadow-sm"
            >
              <AccordionItem value="item-1" className="border-b-0">
                <AccordionTrigger className="py-3 px-4 text-gray-900 hover:bg-gray-50 rounded-lg font-medium">
                  {cat.name}
                </AccordionTrigger>
                <AccordionContent className="p-0 border-t bg-gray-50">
                  {cat.megaMenu.map((menu, menuIdx) => (
                    <div key={menuIdx} className="p-3">
                      {/* Menu Title (Link) */}
                      <SheetClose asChild>
                        <Link href={menu.href}>
                          <h5 className="font-bold text-amber-600 mb-2.5 text-sm hover:underline cursor-pointer">
                            {menu.title}
                          </h5>
                        </Link>
                      </SheetClose>

                      {/* Sub-Groups (Now using nested Accordions) */}
                      <div className="space-y-1">
                        {menu.subGroups.map((subcat, subIdx) => (
                          <div key={subIdx}>
                            <MobileSubAccordion
                              subcat={subcat}
                              subIdx={subIdx}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}
        </div>
      ))}
    </nav>
  );

  return (
    <>
      <header className="w-full bg-white/90 backdrop-blur-xl z-[100] sticky top-0 left-0 border-b border-amber-200 shadow-sm">
        {/* Top Bar */}
        <div
          className={`w-full  text-center bg-gradient-to-r from-amber-600 to-amber-500 text-white text-sm py-2 transition-all duration-300 `}
        >
          <span>Free Shipping above ₹2000 | Welcome to Jewellery Wala</span>
        </div>

        {/* Main Header Bar */}
        <div
          className={`w-full border-b  bg-white border-amber-200 transition-all duration-300 ${
            isScrolled ? "py-2  left-0" : "py-4 " // Visual shrinking effect
          }`}
        >
          <div className="flex items-center justify-between px-4 md:px-6 w-full">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-amber-50 hover:text-amber-600 shrink-0"
              aria-label="Open navigation menu"
              onClick={() => setIsOffcanvasOpen(true)}
            >
              <Menu size={24} />
            </Button>

            {/* Logo (Center-Left) */}
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Jewellery Wala"
                width={100}
                height={100}
                className={`w-40 cursor-pointer h-12 object-fill  ${
                  isScrolled ? "h-8" : ""
                }`}
              />
            </Link>

            {/* Desktop Search (Center) */}
            <div className="hidden lg:block flex-1 px-6">
              <SearchBar className="w-full max-w-xl mx-auto group" />
            </div>

            {/* Icons (Right) */}
            <div className="flex items-center space-x-2 md:space-x-4 shrink-0">
              {/* Wishlist Icon */}
              <Link href="/wishlist" className="hidden md:flex">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative hover:bg-amber-50 hover:text-amber-600"
                  aria-label="View wishlist"
                >
                  <Heart
                    fill={wishlistCount > 0 ? "#f5a22f" : "#FFF"}
                    size={20}
                  />
                  {wishlistCount > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-amber-600 hover:bg-amber-700 text-[10px] shadow-sm">
                      {wishlistCount}
                    </Badge>
                  )}
                </Button>
              </Link>

              {/* Cart Icon */}
              <Link href="/cart" className="hidden md:flex">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative hover:bg-amber-50 hover:text-amber-600"
                  aria-label="View shopping bag"
                >
                  <ShoppingBag
                    fill={cartCount > 0 ? "#f5a22f" : "#FFF"}
                    size={20}
                  />
                  {cartCount > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-amber-600 hover:bg-amber-700 text-[10px] shadow-sm">
                      {cartCount}
                    </Badge>
                  )}
                </Button>
              </Link>

              {/* Mobile Search Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden hover:bg-amber-50 hover:text-amber-600"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-expanded={isSearchOpen}
                aria-controls="mobile-search-bar"
                aria-label="Toggle search bar"
              >
                <Search size={20} />
              </Button>

              {/* User Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative hover:bg-amber-50 hover:text-amber-600"
                    aria-label="User account menu"
                  >
                    {user?.avatar ? (
                      <Image
                        src={user.avatar}
                        alt="User Avatar"
                        width={20}
                        height={20}
                        className="rounded-full"
                      />
                    ) : (
                      <UserIcon size={20} />
                    )}
                    {isLoggedIn && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse" />
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-64 bg-white/95 backdrop-blur-xl border-2 border-amber-200 shadow-xl"
                  align="end"
                >
                  {/* ... (User Dropdown Content is fine, keeping it concise) ... */}
                  {isLoggedIn ? (
                    <>
                      <DropdownMenuLabel className="bg-gradient-to-r from-amber-50 to-orange-50 py-3">
                        <p className="text-sm font-semibold text-gray-800">
                          Welcome back! {user?.name}
                        </p>
                        <p className="text-xs text-amber-600 mt-1 font-normal">
                          {user?.email}
                        </p>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator className="bg-amber-200" />
                      {userMenuItems.map((item, idx) => (
                        <DropdownMenuItem
                          key={idx}
                          asChild
                          className="cursor-pointer hover:bg-amber-50 hover:text-amber-600 py-3"
                        >
                          <Link href={item.href} className="flex items-center">
                            <item.icon className="mr-3" size={18} />
                            <span className="font-medium">{item.label}</span>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                      <DropdownMenuSeparator className="bg-amber-200" />
                      <DropdownMenuItem className="cursor-pointer text-red-600 hover:bg-red-50 hover:text-red-700 py-3">
                        <LogOut
                          onClick={handleLogout}
                          className="mr-3"
                          size={18}
                        />
                        <span className="font-medium">Logout</span>
                      </DropdownMenuItem>
                    </>
                  ) : (
                    <div className="px-2 py-4">
                      <p className="text-sm text-gray-600 mb-4 font-medium text-center">
                        Sign in to your account
                      </p>
                      <div className="space-y-2 flex flex-col gap-1">
                        <Link href="/login" className="cursor-pointer">
                          <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 shadow-md">
                            Sign In
                          </Button>
                        </Link>
                        <Link className="cursor-pointer" href="/signup">
                          <Button
                            variant="outline"
                            className="w-full border-2 border-amber-600 text-amber-600 hover:bg-amber-50"
                          >
                            Register
                          </Button>
                        </Link>
                      </div>
                    </div>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Mobile Search Bar (Conditionally Visible) */}
          <div
            id="mobile-search-bar"
            className={` lg:hidden overflow-hidden transition-all duration-300 ${
              isSearchOpen
                ? "max-h-20 opacity-100 px-4 py-1 mt-3"
                : "max-h-0 opacity-0"
            }`}
          >
            <SearchBar className="relative" />
          </div>
        </div>

        <nav
          className={`hidden md:flex flex-wrap justify-center font-medium space-x-8 text-sm py-3 border-b border-amber-100/50 bg-white/95 backdrop-blur-sm  `}
        >
          {navigationData.map((cat, idx) => (
            <div key={idx}>
              {/* Nav Link / Mega Menu Trigger */}
              {!cat.hasChildren ? (
                <Link
                  href={cat.href}
                  className="relative hover:text-amber-700 transition-colors text-[15px] font-serif whitespace-nowrap pb-1.5 text-gray-700 group"
                >
                  {cat.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ) : (
                <div className="relative group">
                  <button
                    onClick={() => router.push("/category/new")}
                    className="relative hover:text-amber-700 transition-colors text-[15px] font-serif whitespace-nowrap pb-1.5 text-gray-700 flex items-center gap-1"
                    aria-haspopup="menu"
                  >
                    {cat.name}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                  {/* Backdrop when mega menu open - using peer/group pattern */}
                  <div className="hidden group-hover:block fixed top-0 left-0 right-0 bottom-0 bg-white/10 max-w-[100%] w-screen h-screen backdrop-blur-md z-[998] pointer-events-none" />

                  {/* Mega Menu Content - Shows on group hover */}
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 fixed left-1/2 -translate-x-1/2 top-full pt-2 z-[999] hover:visible hover:opacity-100">
                    <Card className="w-[1100px] max-w-[90vw] bg-white/95 backdrop-blur-xl shadow-2xl rounded-xl p-8 border-2 border-amber-200 hover:border-amber-400">
                      <div className="grid grid-cols-5 gap-8">
                        {navigationData
                          .find((c) => c.name === "Shop By Category")
                          ?.megaMenu.map((menu, i) => (
                            <div key={i}>
                              <Link href={menu.href}>
                                <h4 className="font-bold text-gray-800 mb-4 border-b-2 border-amber-400/50 pb-2 text-lg hover:text-amber-600 transition-colors">
                                  {menu.title}
                                </h4>
                              </Link>
                              <div className="space-y-5">
                                {menu.subGroups.map((subcat, j) => (
                                  <div key={j}>
                                    <Badge
                                      variant="outline"
                                      className="text-xs font-bold text-amber-600 border-amber-400 mb-2.5 bg-amber-50"
                                    >
                                      {subcat.name}
                                    </Badge>
                                    <ul className="space-y-2 text-gray-600 text-sm">
                                      {subcat.items.map((item, k) => (
                                        <li key={k}>
                                          <Link
                                            href={`/category/${createSlug(
                                              item
                                            )}`}
                                            className="block hover:text-amber-600 cursor-pointer transition-all duration-200 hover:translate-x-0.5"
                                          >
                                            {item}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                      </div>
                    </Card>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </header>

      {/* Mobile Menu Button (Left) */}
      <Sheet open={isOffcanvasOpen} onOpenChange={setIsOffcanvasOpen}>
        {/* Mobile Sheet Menu Content */}
        <SheetContent
          side="left"
          className="w-[80vw] sm:w-80 bg-white p-0 z-[999]"
        >
          <SheetHeader className="border-b p-4">
            <SheetTitle className="text-lg font-semibold text-gray-900">
              Jewellery Wala Menu
            </SheetTitle>
          </SheetHeader>
          {renderMobileNav()}
        </SheetContent>
      </Sheet>
    </>
  );
}

const SearchBar = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      <PlaceholdersAndVanishInput
        placeholders={[
          "Search for Women's Jewellery",
          "Buy Personalized Jewellery",
          "Search for earrings",
          "Find Gift Items",
        ]}
        onChange={(e) => console.log(e.target.value)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-600 pointer-events-none"
        size={18}
      />
      <Search
        size={20}
        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 text-amber-600 pointer-events-none"
      />
    </div>
  );
};
