import React from "react";
import { LogOut } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type logoutModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const LogoutModal = ({ isOpen, onClose, onConfirm }: logoutModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90%] !rounded-[10px] border-black/10 bg-white text-black md:max-w-[420px]">
        <DialogHeader className="items-center text-center sm:items-start sm:text-left">
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-black/10">
            <LogOut className="h-6 w-6 text-black" />
          </div>
          <DialogTitle className="pt-1 text-lg font-bold text-black md:text-xl">Are you sure you want to log out?</DialogTitle>
          <DialogDescription className="pt-1 text-center text-sm leading-6 text-black/65 sm:text-left md:text-base">
            You are about to log out of your account. You will need to log in
            again to continue using the services.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-4 w-full flex-row items-center justify-end gap-3 sm:mt-6">
          <button
            type="button"
            className="order-2 min-w-[72px] bg-black px-4 py-2 text-sm font-semibold leading-[120%] text-white hover:bg-black/80 focus-visible:ring-2 focus-visible:ring-black/30 sm:order-1"
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            type="button"
            className="order-1 min-w-[64px] border border-black/20 bg-white px-4 py-2 text-sm font-semibold leading-[120%] text-black shadow-none hover:bg-black/10 focus-visible:ring-2 focus-visible:ring-black/20 sm:order-2"
            onClick={onClose}
          >
            No
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LogoutModal;
