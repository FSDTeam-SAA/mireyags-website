"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Minus, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/context/cart-context";
import { EmptyState } from "@/components/shared/AsyncStates";

export default function CartContainer() {
  const {
    cartItems,
    subtotal,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
  } = useCart();

  const router = useRouter();

  return (
    <main className="min-h-screen bg-black py-10 text-white md:py-14">
      <div className="container mx-auto px-4">
        <Button
          type="button"
          onClick={() => router.push("/products")}
          className="mb-4 gap-2 bg-white text-black hover:bg-white/80"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Button>
        {cartItems.length === 0 ? (
          <div className="rounded-[10px] border border-white/15 bg-white/5 p-6 shadow-none sm:p-10">
            <EmptyState title="Your cart is empty" description="Add a product to your cart and it will appear here when you're ready to checkout." />
            {/* <Button
              className="mx-auto mt-6 flex bg-white text-black hover:bg-white/80"
              onClick={() => router.push("/products")}
            >
              Go to Products
            </Button> */}
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[1fr_290px]">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="group grid gap-5 rounded-[10px] border border-white/20 bg-black p-3 shadow-none md:grid-cols-[180px_1fr]"
                >
                  <div className="relative h-[140px] w-full overflow-hidden rounded-[10px] bg-white/10 sm:h-[160px] md:h-[160px]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-white">{item.name}</h2>
                      <p className="mt-2 text-sm text-white/60">
                        {item.description}
                      </p>

                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-lg font-bold text-white">
                          ${item?.offerPrice?.toFixed(2)}
                        </span>
                        <span className="text-xs text-white/40 line-through">
                          ${(item?.price + 20).toFixed(0)}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
                      <div className="flex h-9 w-[110px] items-center justify-between rounded-[10px] border border-white/40 px-3 text-white">
                        <button
                          type="button"
                          onClick={() => decrementQuantity(item.id)}
                          className="transition hover:opacity-70"
                        >
                          <Minus className="h-4 w-4" />
                        </button>

                        <span className="text-sm font-medium">{item.quantity}</span>

                        <button
                          type="button"
                          onClick={() => incrementQuantity(item.id)}
                          className="transition hover:opacity-70"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <Button
                        variant="secondary"
                        className="h-9 min-w-[140px] bg-[#a7a7a7] text-white hover:bg-[#929292]"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-fit rounded-[10px] border border-white/20 bg-black p-5 shadow-none">
              <h3 className="text-lg font-semibold text-white">Order Summary</h3>

              <div className="mt-6 space-y-3 text-sm text-white/70">
                <div className="flex justify-between">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping Cost</span>
                  <span>$0</span>
                </div>

                <div className="border-t border-white/20 pt-3 font-semibold text-white">
                  <div className="flex justify-between">
                    <span>Total</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Button
                className="mt-6 h-11 w-full bg-white text-black hover:bg-white/80"
                onClick={() => router.push("/checkout")}
              >
                Checkout
              </Button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
