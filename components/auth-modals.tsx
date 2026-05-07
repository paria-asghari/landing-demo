"use client";

import { Modal, ModalBackdrop, ModalContainer, ModalDialog, ModalHeader, ModalBody } from "@heroui/react";
import { Button } from "@heroui/react";
import { useOverlayState } from "@heroui/react";

function LoginModal() {
  const state = useOverlayState();

  return (
    <>
      <Button
        onPress={state.open}
        className="bg-slate-800 text-white border-2 border-blue-400 hover:bg-slate-700 font-semibold rounded-full"
      >
        Login
      </Button>
      <Modal isOpen={state.isOpen} onOpenChange={state.setOpen}>
        <ModalBackdrop>
          <ModalContainer>
            <ModalDialog>
              <ModalHeader className="text-black text-center">Login</ModalHeader>
              <ModalBody>
                <form className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-blue-400 text-sm">Email</label>
                    <input
                      type="email"
                      className="bg-transparent border border-slate-600 rounded-lg px-3 py-2 text-white outline-none focus:border-blue-500 placeholder:text-slate-400"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-blue-400 text-sm">Password</label>
                    <input
                      type="password"
                      className="bg-transparent border border-slate-600 rounded-lg px-3 py-2 text-white outline-none focus:border-blue-500 placeholder:text-slate-400"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="bg-blue-600 text-white hover:bg-blue-500"
                  >
                    Login
                  </Button>
                </form>
              </ModalBody>
            </ModalDialog>
          </ModalContainer>
        </ModalBackdrop>
      </Modal>
    </>
  );
}

export { LoginModal };
