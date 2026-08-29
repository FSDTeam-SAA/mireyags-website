"use client";

import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { useCart } from "@/components/context/cart-context";

export default function PaymentSuccessContainer() {
  const router = useRouter();
  const { clearOrderData } = useCart();
  const hasClearedRef = useRef(false);

  useEffect(() => {
    if (hasClearedRef.current) return;
    hasClearedRef.current = true;

    try {
      localStorage.removeItem("product_cart");
      localStorage.removeItem("product_delivery_info");

      // context reset একবারই হবে
      clearOrderData?.();
    } catch (error) {
      console.error("Failed to clear checkout data:", error);
    }
  }, [clearOrderData]);

  const handleContinueBrowsing = () => {
    router.push("/");
  };

  const handleGoProducts = () => {
    router.push("/products");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md rounded-[10px] border border-white/20 bg-black p-8 text-center text-white shadow-none">
        <div className="flex justify-center">
          <CheckCircle className="text-white" size={70} />
        </div>

        <h1 className="mt-4 text-2xl font-bold text-white md:text-3xl">
          Payment Successful!
        </h1>

        <p className="mt-2 text-sm leading-[150%] text-white/65">
          Thank you! Your payment has been processed successfully.
        </p>

        <div className="mt-6 rounded-[10px] border border-white/15 bg-white/5 p-4 text-left">
          <h3 className="text-sm font-medium text-white">
            Payment Details
          </h3>

          <div className="mt-2 space-y-1 text-[13px] text-white/65">
            <p>
              <span className="font-medium">Status :</span>{" "}
              <span className="font-semibold text-white">Completed</span>
            </p>
            <p>
              <span className="font-medium">Payment Method :</span> Stripe
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <Button
            onClick={handleContinueBrowsing}
            className="h-[48px] w-full rounded-[10px] bg-white text-sm font-semibold text-black hover:bg-white/80"
          >
            Continue Browsing
          </Button>

          <Button
            variant="outline"
            onClick={handleGoProducts}
            className="h-[48px] w-full rounded-[10px] border-white text-sm font-semibold text-white hover:bg-white/10"
          >
            View Products
          </Button>
        </div>
      </div>
    </div>
  );
}


















// "use client";

// import { CheckCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import { useCart } from "@/components/context/cart-context";

// export default function PaymentSuccessContainer() {
//   const router = useRouter();
//     const { clearOrderData } = useCart();

//   useEffect(() => {
//     localStorage.removeItem("product_cart");
//     localStorage.removeItem("product_delivery_info");

//     // toast.success("Payment completed successfully");

//       clearOrderData();

//     const timer = setTimeout(() => {
//       router.replace("/products");
//     }, 1500);

//     return () => clearTimeout(timer);
//   }, [router, clearOrderData]);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4">
//       <div className="max-w-md w-full bg-white shadow-md rounded-xl p-8 text-center">
//         {/* Icon */}
//         <div className="flex justify-center">
//           <CheckCircle className="text-primary" size={70} />
//         </div>

//         {/* Title */}
//         <h1 className="text-2xl md:text-3xl font-bold mt-4 text-[#1E293B]">
//           Payment Successful!
//         </h1>

//         {/* Subtitle */}
//         <p className="text-sm text-[#64748B] mt-2 leading-[150%]">
//           Thank you! Your payment has been processed successfully.
//           {/* A confirmation email has been sent to your inbox. */}
//         </p>

//         {/* Card */}
//         <div className="mt-6 bg-[#F1F5F9] rounded-lg p-4 text-left">
//           <h3 className="font-medium text-[#0F172A] text-sm">
//             Payment Details
//           </h3>
//           <div className="mt-2 space-y-1 text-[13px] text-[#475569]">
//             <p>
//               <span className="font-medium">Status :</span>{" "}
//               <span className="text-green-600 font-semibold">Completed</span>
//             </p>
//             <p>
//               <span className="font-medium">Payment Method :</span> Stripe
//             </p>
//             {/* <p>
//               <span className="font-medium">Transaction ID :</span> #TRX2025001
//             </p> */}
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="mt-8 space-y-3">

//           <div>
//             <Link href="/">
//               <Button
//                 // variant="outline"
//                 className="w-full h-[48px] text-sm text-white font-semibold rounded-[12px]"
//               >
//                 Continue Browsing
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
