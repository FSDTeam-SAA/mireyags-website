"use client"

import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast !bg-white !text-black group-[.toaster]:border-black/15 group-[.toaster]:shadow-xl",
          title: "!text-black font-semibold",
          description: "!text-black/65",
          success: "!border-black/20",
          error: "!border-black/20",
          actionButton:
            "!bg-black !text-white hover:!bg-black/80",
          cancelButton:
            "!bg-black/10 !text-black hover:!bg-black/20",
          closeButton: "!border-black/20 !bg-white !text-black hover:!bg-black/10",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
