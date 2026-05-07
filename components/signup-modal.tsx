"use client";

import { Modal, ModalBackdrop, ModalContainer, ModalDialog, ModalHeader, ModalBody } from "@heroui/react";
import { Button } from "@heroui/react";
import { useOverlayState } from "@heroui/react";
import FormModel from "./form-model";

function SignUpModal() {
  const state = useOverlayState();
  const fields = [
    { label: "First Name", type: "text", placeholder: "Enter your first name", required: true },
    { label: "Last Name", type: "text", placeholder: "Enter your last name", required: true },
    { label: "Email", type: "email", placeholder: "Enter your email", required: true },
    { label: "Password", type: "password", placeholder: "Enter your password", required: true },
  ];

  return (
    <>
      <Button
        onPress={state.open}
        className="bg-amber-500 text-slate-800 border-2 border-amber-500 hover:bg-amber-400 font-semibold rounded-full"
      >
        Sign Up
      </Button>
      <Modal isOpen={state.isOpen} onOpenChange={state.setOpen}>
        <ModalBackdrop>
          <ModalContainer>
            <ModalDialog>
              <ModalHeader className="text-black text-center">Sign Up</ModalHeader>
              <ModalBody>
                <form className="flex flex-col gap-4">
                  {fields.map((field) => (
                    <FormModel field={field} />
                  ))}
                  <Button
                    type="submit"
                    className="bg-amber-500 text-slate-800 hover:bg-amber-400"
                  >
                    Sign Up
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

export { SignUpModal };
