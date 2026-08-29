"use client";

import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PaymentCancelPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md rounded-[10px] border border-white/20 bg-black p-8 text-center text-white shadow-none">
        {/* Icon */}
        <div className="flex justify-center">
          <XCircle className="text-white" size={70} />
        </div>

        {/* Title */}
        <h1 className="mt-4 text-2xl font-bold text-white md:text-3xl">
          Payment Cancelled
        </h1>

        {/* Message */}
        <p className="mt-2 text-sm leading-[150%] text-white/65">
          Your payment process was cancelled.  
          You can retry the payment at any time.
        </p>

        {/* Card */}
        <div className="mt-6 rounded-[10px] border border-white/15 bg-white/5 p-4 text-left">
          <h3 className="text-sm font-medium text-white">What Happened?</h3>
          <p className="mt-2 text-[13px] leading-[150%] text-white/65">
            It looks like you closed the payment window or chose not to
            complete the transaction. No money has been deducted.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 space-y-3">
          {/* <div>
            <Link href="/organizer">
            <Button className="w-full h-[48px] text-sm font-semibold rounded-lg">
              Back to Dashboard
            </Button>
          </Link>
          </div> */}

          <div>
            <Link href="/">
            <Button
              // variant="outline"
              className="h-[48px] w-full rounded-[10px] bg-white text-sm font-semibold text-black hover:bg-white/80"
            >
              Return Home
            </Button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
