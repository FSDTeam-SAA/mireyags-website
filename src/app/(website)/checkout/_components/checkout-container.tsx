"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useCart } from "@/components/context/cart-context";
import { DeliveryInfo } from "@/components/types/cart";
import { ArrowLeft } from "lucide-react";
import { useSession } from "next-auth/react";
import PageSkeleton from "@/components/shared/PageSkeleton";

export default function CheckoutContainer() {
  const router = useRouter();
  const { status } = useSession();
  const { cartItems, saveDeliveryInfo, deliveryInfo } = useCart();
  const hasRedirectedToLogin = useRef(false);

  const [form, setForm] = useState<DeliveryInfo>(
    deliveryInfo ?? {
      type: "home",
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      city: "",
      area: "",
      address: "",
    }
  );

  useEffect(() => {
    if (status === "unauthenticated" && !hasRedirectedToLogin.current) {
      hasRedirectedToLogin.current = true;
      toast.info("Please log in to continue with payment.");
      router.replace(`/login?callbackUrl=${encodeURIComponent("/checkout")}`);
      return;
    }
    if (status === "loading") return;
    if (cartItems.length === 0) {
      router.replace("/cart");
    }
  }, [cartItems, router, status]);

  const handleChange = (key: keyof DeliveryInfo, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleProceed = () => {
    if (
      !form.firstName.trim() ||
      !form.lastName.trim() ||
      !form.phone.trim() ||
      !form.email.trim() ||
      !form.city.trim() ||
      !form.area.trim() ||
      !form.address.trim()
    ) {
      toast.error("Please fill all delivery information");
      return;
    }

    saveDeliveryInfo(form);
    router.push("/payment");
  };

  if (status === "loading" || status === "unauthenticated" || cartItems.length === 0) return <PageSkeleton />;

  const inputClassName = "h-12 rounded-[10px] border border-black/20 bg-white text-black placeholder:text-black/45 focus-visible:border-black focus-visible:ring-2 focus-visible:ring-black/15";

  return (
    <main className="min-h-screen bg-black py-10 text-white md:py-14">
      <div className="container mx-auto px-4">
        <Button
          type="button"
          onClick={() => router.push("/cart")}
          className="mb-4 gap-2 bg-white text-black hover:bg-white/80"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Cart
        </Button>
        <div className="rounded-[10px] border border-white/15 bg-white p-5 text-black shadow-none md:p-7">
          <h2 className="text-lg font-semibold text-black">Delivery Information</h2>

          <div className="mt-5 flex items-center gap-5 text-sm text-black/75">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                className="accent-black"
                type="radio"
                checked={form.type === "home"}
                onChange={() => handleChange("type", "home")}
              />
              Home
            </label>

            <label className="flex cursor-pointer items-center gap-2">
              <input
                className="accent-black"
                type="radio"
                checked={form.type === "office"}
                onChange={() => handleChange("type", "office")}
              />
              Office
            </label>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Input
              className={inputClassName}
              placeholder="First Name"
              value={form.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
            />

            <Input
              className={inputClassName}
              placeholder="Last Name"
              value={form.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
            />

            <Input
              className={inputClassName}
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />

            <Input
              className={inputClassName}
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />

            <Input
              className={inputClassName}
              placeholder="City"
              value={form.city}
              onChange={(e) => handleChange("city", e.target.value)}
            />

            <Input
              className={inputClassName}
              placeholder="Area"
              value={form.area}
              onChange={(e) => handleChange("area", e.target.value)}
            />
          </div>

          <div className="mt-4">
            <Input
              className={inputClassName}
              placeholder="Address"
              value={form.address}
              onChange={(e) => handleChange("address", e.target.value)}
            />
          </div>

          <div className="mt-6 flex justify-end">
            <Button
              className="h-10 min-w-[140px] bg-black text-white hover:bg-black/80"
              onClick={handleProceed}
            >
              Proceed
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
