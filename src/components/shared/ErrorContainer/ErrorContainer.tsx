import { TriangleAlert } from "lucide-react";

interface ErrorContainerProps {
  message: string;
}

const ErrorContainer = ({ message }: ErrorContainerProps) => {
  return (
    <div className="container mx-auto">
      <div className="flex h-[300px] w-full flex-col items-center justify-center rounded-[12px] border border-white/15 bg-black text-white">
        <TriangleAlert className="h-16 w-16 text-white" />
        <h3 className="mt-2 px-4 text-center font-semibold text-base leading-[150%] md:text-lg">{message}</h3>
      </div>
    </div>
  );
};

export default ErrorContainer;
