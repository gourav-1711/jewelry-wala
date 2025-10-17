"use client";
import { useState, useRef, useEffect } from "react";
import {
  User,
  Heart,
  History,
  Settings,
  LogOut,
  Camera,
  Mail,
  Phone,
  MapPin,
  Upload,
  X,
  Lock,
  CheckCircle,
  Shield,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SettingsSection from "./SettingsSection";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "next/navigation";

export default function AccountPage({ data }) {
  const [avatar, setAvatar] = useState(
    data?.avatar ||
      "https://api.dicebear.com/7.x/avataaars/svg?seed=" +
        (data?.name || "User")
  );
  const [activeTab, setActiveTab] = useState("account");
  const [formData, setFormData] = useState({
    name: data?.name || "",
    email: data?.email || "",
    phone: data?.phone || "",
    address: data?.address || "",
    city: data?.city || "",
    state: data?.state || "",
    pincode: data?.pincode || "",
    instructions: data?.instructions || "",
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef(null);
  const imageUploadRef = useRef(null);

  const params = useSearchParams();

  useEffect(() => {
    const tab = params.get("tab");
    if (tab) {
      setActiveTab(tab);
    }
  }, [params]);


  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  const scrollToImageUpload = () => {
    if (activeTab !== "account") {
      setActiveTab("account");
      setTimeout(() => {
        imageUploadRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    } else {
      imageUploadRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removePreviewImage = () => {
    setPreviewImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const saveAvatar = () => {
    if (previewImage) {
      setAvatar(previewImage);
      setPreviewImage(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        {/* Profile Header Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden mb-6 border border-amber-100">
          <div className="px-4 md:px-8 py-8">
            {/* Avatar Section */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between">
              <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-6">
                <div className="relative group">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100 transform transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={avatar}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    onClick={scrollToImageUpload}
                    className="absolute bottom-2 right-2 bg-amber-600 hover:bg-amber-700 text-white p-2 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 active:scale-95"
                  >
                    <Camera size={16} />
                  </button>
                </div>

                <div className="mb-2 md:mb-4 animate-fade-in">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                    {data?.name || "User"}
                  </h1>
                  <p className="text-sm text-gray-500 flex items-center gap-2">
                    <Mail size={14} /> {data?.email || "No email provided"}
                    {!data?.isEmailVerified && (
                      <span className="ml-2 px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full">
                        Unverified
                      </span>
                    )}
                  </p>
                  {data?.mobile && (
                    <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                      <Phone size={14} /> {data.mobile}
                    </p>
                  )}
                  <p className="text-xs text-gray-400 mt-1">
                    Member since{" "}
                    {new Date(data?.createdAt).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <button
                onClick={scrollToImageUpload}
                className="mt-4 md:mt-0 md:mb-4 px-6 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 justify-center md:justify-start"
              >
                <Settings size={16} />
                Edit Profile
              </button>
            </div>

            {/* Tabs */}
            <div className="mt-6">
              <Tabs
                value={activeTab}
                onValueChange={handleTabChange}
                className="w-full"
              >
                <TabsList className="w-full md:w-auto grid grid-cols-2 md:flex h-auto md:h-10 bg-amber-50/50 p-1 rounded-xl">
                  <TabsTrigger
                    value="account"
                    className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg px-4 py-2.5 md:py-2 text-sm transition-all duration-300"
                  >
                    <User size={16} />
                    <span className="hidden sm:inline">Account</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="orders"
                    className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg px-4 py-2.5 md:py-2 text-sm transition-all duration-300"
                  >
                    <History size={16} />
                    <span className="hidden sm:inline">Orders</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="wishlist"
                    className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg px-4 py-2.5 md:py-2 text-sm transition-all duration-300"
                  >
                    <Heart size={16} />
                    <span className="hidden sm:inline">Wishlist</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="settings"
                    className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg px-4 py-2.5 md:py-2 text-sm transition-all duration-300"
                  >
                    <Settings size={16} />
                    <span className="hidden sm:inline">Settings</span>
                  </TabsTrigger>
                </TabsList>

                {/* Account Tab */}
                <TabsContent value="account" className="mt-6 animate-fade-in">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Image Upload Section */}
                    <div
                      ref={imageUploadRef}
                      className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-amber-100/50 animate-slide-up"
                    >
                      <h2 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
                        <Camera size={18} className="text-amber-600" />
                        Profile Picture
                      </h2>

                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="w-32 h-32 rounded-xl overflow-hidden border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center">
                          {previewImage ? (
                            <div className="relative w-full h-full group">
                              <img
                                src={previewImage}
                                alt="Preview"
                                className="w-full h-full object-cover"
                              />
                              <button
                                onClick={removePreviewImage}
                                className="absolute top-1 right-1 bg-red-500 hover:bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                              >
                                <X size={14} />
                              </button>
                            </div>
                          ) : (
                            <Upload size={32} className="text-gray-400" />
                          )}
                        </div>

                        <div className="flex-1">
                          <Input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                            id="avatar-upload"
                          />
                          <Label
                            htmlFor="avatar-upload"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg cursor-pointer transition-all duration-300 text-sm font-medium"
                          >
                            <Upload size={16} />
                            Choose Image
                          </Label>
                          <p className="text-xs text-gray-500 mt-2">
                            JPG, PNG or GIF. Max size 5MB.
                          </p>

                          {previewImage && (
                            <div className="flex gap-2 mt-4 animate-fade-in">
                              <button
                                onClick={saveAvatar}
                                className="px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg text-sm font-medium shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95"
                              >
                                Save Avatar
                              </button>
                              <button
                                onClick={removePreviewImage}
                                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-all duration-300"
                              >
                                Cancel
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Personal Information */}
                    <div
                      className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-amber-100/50 animate-slide-up"
                      style={{ animationDelay: "0.1s" }}
                    >
                      <h2 className="text-lg font-semibold mb-6 text-gray-800">
                        Personal Information
                      </h2>

                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="block text-sm font-medium text-gray-700">
                              Full Name
                            </Label>
                            <Input
                              type="text"
                              defaultValue={data?.name || ""}
                              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/80"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="block text-sm font-medium text-gray-700">
                              Gender
                            </Label>
                            <Select
                              defaultValue={data?.gender || ""}
                              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/80"
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue
                                  placeholder="Select Gender"
                                  className="w-full"
                                />
                              </SelectTrigger>
                              <SelectContent className="w-full">
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="block text-sm font-medium text-gray-700">
                              Email Address
                            </Label>
                            <p>{data?.email}</p>
                          </div>
                          <div className="space-y-2">
                            <Label className="block text-sm font-medium text-gray-700">
                              Phone Number
                            </Label>
                            <Input
                              type="text"
                              defaultValue={data?.mobile || ""}
                              placeholder="Enter phone number"
                              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/80"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Shipping Address */}
                    <div
                      className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-amber-100/50 animate-slide-up"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
                        <MapPin size={18} className="text-amber-600" />
                        Shipping Address
                      </h3>

                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="block text-sm font-medium text-gray-700">
                              Street Address
                            </Label>
                            <Input
                              type="text"
                              defaultValue={data?.address?.street || ""}
                              placeholder="Enter street address"
                              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/80"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="block text-sm font-medium text-gray-700">
                              Area
                            </Label>
                            <Input
                              type="text"
                              defaultValue={data?.address?.area || ""}
                              placeholder="Enter area/locality"
                              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/80"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="block text-sm font-medium text-gray-700">
                              City
                            </Label>
                            <Input
                              type="text"
                              defaultValue={data?.address?.city || ""}
                              placeholder="Enter city"
                              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/80"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="block text-sm font-medium text-gray-700">
                              State
                            </Label>
                            <Input
                              type="text"
                              defaultValue={data?.address?.state || ""}
                              placeholder="Enter state"
                              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/80"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="block text-sm font-medium text-gray-700">
                              Pincode
                            </Label>
                            <Input
                              type="text"
                              defaultValue={data?.address?.pincode || ""}
                              placeholder="Enter pincode"
                              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/80"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label className="block text-sm font-medium text-gray-700">
                            Delivery Instructions (Optional)
                          </Label>
                          <Textarea
                            defaultValue={data?.address?.instructions || ""}
                            placeholder="Add any special delivery instructions"
                            rows={3}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/80 resize-none"
                          />
                        </div>
                      </div>

                      <div className="pt-6 flex gap-3">
                        <Button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 active:scale-95">
                          Save Changes
                        </Button>
                        <Button className="bg-gray-200 text-gray-700 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-300 transition-all duration-300">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </form>
                </TabsContent>

                {/* Orders Tab */}
                <TabsContent value="orders" className="mt-6 animate-fade-in">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-amber-100/50">
                    <h2 className="text-xl font-semibold mb-6 text-gray-800">
                      Order History
                    </h2>

                    <div className="space-y-4">
                      {[1, 2, 3].map((order) => (
                        <div
                          key={order}
                          className="bg-white/80 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-all duration-300 hover:border-amber-300"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <p className="font-medium text-gray-800">
                                Order #{1000 + order}
                              </p>
                              <p className="text-sm text-gray-500">
                                Placed on Oct {order}, 2025
                              </p>
                            </div>
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                              Delivered
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            Gold Necklace • Diamond Ring
                          </p>
                          <p className="font-semibold text-amber-700">
                            $2,{450 + order * 50}.00
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Wishlist Tab */}
                <TabsContent value="wishlist" className="mt-6 animate-fade-in">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-amber-100/50">
                    <h2 className="text-xl font-semibold mb-6 text-gray-800">
                      My Wishlist
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[1, 2, 3].map((item) => (
                        <div
                          key={item}
                          className="bg-white/80 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-amber-300 group"
                        >
                          <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          <div className="p-4">
                            <h3 className="font-medium text-gray-800 mb-1">
                              Elegant Ring {item}
                            </h3>
                            <p className="text-amber-700 font-semibold">
                              $1,{200 + item * 100}.00
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Settings Tab */}
                <TabsContent value="settings" className="mt-6 animate-fade-in">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-amber-100/50">
                    <h2 className="text-xl font-semibold mb-6 text-gray-800">
                      Account Settings
                    </h2>

                    <div className="space-y-6">
                      <SettingsSection data={data} />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
