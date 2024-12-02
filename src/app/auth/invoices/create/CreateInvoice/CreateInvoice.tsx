"use client";
import { createInvoice } from "@/app/actions/invoices";
import Link from "next/link";
import { useActionState, useState } from "react";

export default function CreateInvoice() {
  const [invoiceContent, setInvoiceContent] = useState({
    title: "",
    deadline: "",
    details: "",
    status: "",
    type: "",
    netPrice: "",
    tax: "",
    price: "",
  });

  const initialState = {
    errors: {
      title: [],
      deadline: [],
      details: [],
      status: [],
      type: [],
      netPrice: [],
      tax: [],
      price: [],
    },
  };

  const [state, createInvoiceAction, isPending] = useActionState(
    createInvoice,
    initialState
  );

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setInvoiceContent({
          ...invoiceContent,
          title: value,
        });
        break;
      case "deadline":
        setInvoiceContent({
          ...invoiceContent,
          deadline: value,
        });
        break;
      case "details":
        setInvoiceContent({
          ...invoiceContent,
          details: value,
        });
        break;
      case "status":
        setInvoiceContent({
          ...invoiceContent,
          status: value,
        });
        break;
      case "type":
        setInvoiceContent({
          ...invoiceContent,
          type: value,
        });
        break;
      case "netPrice":
        setInvoiceContent({
          ...invoiceContent,
          netPrice: value,
        });
        break;
      case "tax":
        setInvoiceContent({
          ...invoiceContent,
          tax: value,
        });
        break;
      case "price":
        setInvoiceContent({
          ...invoiceContent,
          price: value,
        });
        break;
    }
  }

  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex">
        <div className="h-full w-[50%] flex justify-center items-center">
          <div className="w-[80%] h-[90%] p-[0px] flex flex-col gap-[30px]">
            <span className="text-[25px]">Invoice Details</span>
            <form
              action={createInvoiceAction}
              id="createInvoiceForm"
              className="w-full h-full flex flex-col gap-[20px]"
            >
              <div className="w-full h-[80px] flex gap-[20px]">
                <div className="flex flex-col gap-[10px] w-[50%] items-start">
                  <span>Title</span>
                  <input
                    onChange={handleChange}
                    className="w-full h-[50px] border-[1px] rounded-[10px] outline-none pl-[10px]"
                    type="text"
                    name="title"
                  />
                  {state?.errors?.title && <p>{state.errors.title}</p>}
                </div>
                <div className="flex flex-col gap-[10px] w-[50%] items-start">
                  <span>Deadline</span>
                  <input
                    onChange={handleChange}
                    className="w-full h-[50px] border-[1px] rounded-[10px] outline-none pl-[10px]"
                    type="text"
                    name="deadline"
                  />
                  {state?.errors?.deadline && <p>{state.errors.deadline}</p>}
                </div>
              </div>
              <div className="w-full h-[80px] flex flex-col gap-[10px]">
                <span>Details</span>
                <input
                  onChange={handleChange}
                  type="text"
                  name="details"
                  className="h-full border-[1px] rounded-[10px] outline-none pl-[10px]"
                />
                {state?.errors?.details && <p>{state.errors.details}</p>}
              </div>
              <div className="w-full h-[80px] flex gap-[20px]">
                <div className="flex flex-col gap-[10px] w-[50%] items-start">
                  <span>Status</span>
                  <select
                    name="status"
                    defaultValue="Unpaid"
                    onChange={handleChange}
                    className="w-full outline-none border-[1px] rounded-[10px] h-full"
                  >
                    <option value="Unpaid">Unpaid</option>
                    <option value="Paid">Paid</option>
                    <option value="Pending">Pending</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>
                <div className="flex flex-col gap-[10px] w-[50%] items-start">
                  <span>Type</span>
                  <select
                    name="type"
                    defaultValue="salesInvoice"
                    onChange={handleChange}
                    className="w-full outline-none border-[1px] rounded-[10px] h-full"
                  >
                    <option value="Sales Invoice">Sales invoice</option>
                    <option value="Cost Invoice">Cost Invoice</option>
                  </select>
                </div>
              </div>
              <div className="w-full h-[80px] flex flex-col gap-[10px]">
                <span>Net price</span>
                <input
                  onChange={handleChange}
                  type="text"
                  name="netPrice"
                  className="h-full border-[1px] rounded-[10px] outline-none pl-[10px]"
                />
                {state?.errors?.netPrice && <p>{state.errors.netPrice}</p>}
              </div>
              <div className="w-full h-[80px] flex flex-col gap-[10px]">
                <span>Tax</span>
                <input
                  onChange={handleChange}
                  type="text"
                  name="tax"
                  className="h-full border-[1px] rounded-[10px] outline-none pl-[10px]"
                />
                {state?.errors?.tax && <p>{state.errors.tax}</p>}
              </div>
              <div className="w-full h-[80px] flex flex-col gap-[10px]">
                <span>Price</span>
                <input
                  onChange={handleChange}
                  type="text"
                  name="price"
                  className="h-full border-[1px] rounded-[10px] outline-none pl-[10px]"
                />
                {state?.errors?.price && <p>{state.errors.price}</p>}
              </div>
              <div className="w-full h-[50px] flex gap-[20px] mt-[20px]">
                <button
                  type="submit"
                  form="createInvoiceForm"
                  disabled={isPending}
                  className="bg-[#2d2d2d] text-white w-[50%] rounded-[10px]"
                >
                  Create invoice
                </button>
                <Link
                  href="/auth/invoices"
                  className="h-full w-[50%] flex items-center justify-center"
                >
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="h-full w-[50%] bg-[#fbfbfb] flex items-center justify-center">
          <div className="h-[90%] w-[75%] bg-white rounded-[10px] shadow-xl p-[30px] flex flex-col gap-[30px]">
            <span className="text-[25px] font-[600]">Invoice</span>
            <div className="w-full flex flex-col gap-[20px]">
              <div className="w-full h-[80px] flex gap-[20px]">
                <div className="w-[50%] h-full flex flex-col gap-[10px]">
                  <span>Title</span>
                  <div className="w-full h-full flex items-center border-[1px] rounded-[10px]">
                    <p className="pl-[10px]">{invoiceContent.title}</p>
                  </div>
                </div>
                <div className="w-[50%] h-full flex flex-col gap-[10px]">
                  <span>Deadline</span>
                  <div className="w-full h-full flex items-center border-[1px] rounded-[10px]">
                    <p className="pl-[10px]">{invoiceContent.deadline}</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-[80px] flex flex-col gap-[10px]">
                <span>Details</span>
                <div className="w-full h-full flex items-center border-[1px] rounded-[10px]">
                  <p className="pl-[10px]">{invoiceContent.details}</p>
                </div>
              </div>
              <div className="w-full h-[80px] flex gap-[20px]">
                <div className="w-[50%] h-full flex flex-col gap-[10px]">
                  <span>Status</span>
                  <div className="w-full h-full flex items-center border-[1px] rounded-[10px]">
                    <p className="pl-[10px]">{invoiceContent.status}</p>
                  </div>
                </div>
                <div className="w-[50%] h-full flex flex-col gap-[10px]">
                  <span>Type</span>
                  <div className="w-full h-full flex items-center border-[1px] rounded-[10px]">
                    <p className="pl-[10px]">{invoiceContent.type}</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-[80px] flex flex-col gap-[10px]">
                <span>Net Price</span>
                <div className="w-full h-full flex items-center border-[1px] rounded-[10px]">
                  <p className="pl-[10px]">{invoiceContent.netPrice}</p>
                </div>
              </div>
              <div className="w-full h-[80px] flex flex-col gap-[10px]">
                <span>Tax</span>
                <div className="w-full h-full flex items-center border-[1px] rounded-[10px]">
                  <p className="pl-[10px]">{invoiceContent.tax}</p>
                </div>
              </div>
              <div className="w-full h-[80px] flex flex-col gap-[10px]">
                <span>Price</span>
                <div className="w-full h-full flex items-center border-[1px] rounded-[10px]">
                  <p className="pl-[10px]">{invoiceContent.price}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isPending && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-white flex items-center justify-center font-[500] text-[20px]">
          <p>Creating invoice...</p>
        </div>
      )}
    </div>
  );
}
