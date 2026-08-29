import { TextAnimate } from "@/components/ui/text-animate";
import Image from "next/image";
import React from "react";

interface Props {
  message: string;
}

const NotFound = ({ message }: Props) => {
  return (
    <div className="">
      <div className="flex h-[360px] w-full flex-col items-center justify-center rounded-[20px] border border-white/15 bg-black text-white">
        {/* Image */}
        <Image
          src="/images/404.png"
          alt="404 Not Found Illustration"
          width={300}
          height={300}
          className="mb-4 w-[250px] h-[250px]"
        />

        {/* Text Animation applied to message string only */}
        <p className="text-center text-lg font-bold text-white">
          <TextAnimate animation="slideUp" by="word">
            {message}
          </TextAnimate>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
