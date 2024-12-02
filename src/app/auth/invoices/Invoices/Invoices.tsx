"use client";
import { InvoiceType } from "@/types/invoices";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Invoices({ invoices }: { invoices: InvoiceType[] }) {
  const [statusFilter, setStatusFilter] = useState("All");
  const [statusedInvoices, setStatusedInvoices] = useState<InvoiceType[]>([]);
  const [filter, setFilter] = useState("");
  const [filteredInvoices, setFilteredInvoices] = useState<InvoiceType[]>([]);

  useEffect(() => {
    if (statusFilter === "All") {
      setStatusedInvoices(invoices);
    } else {
      const statused = invoices.filter((invoice) => {
        return invoice.type
          .toLowerCase()
          .includes(statusFilter.toLowerCase().split(" ")[0]);
      });
      setStatusedInvoices(statused);
    }
  }, [statusFilter, invoices]);

  useEffect(() => {
    const filteredInvoices = statusedInvoices.filter((invoice: InvoiceType) => {
      return invoice.title.toLowerCase().includes(filter.toLowerCase());
    });
    setFilteredInvoices(filteredInvoices);
  }, [filter, statusedInvoices]);

  const filters = [
    { label: "All" },
    { label: "Sales Invoices" },
    { label: "Cost Invoices" },
  ];

  const categories = [
    { label: "STATUS" },
    { label: "TITLE" },
    { label: "DETAILS" },
    { label: "TYPE" },
    { label: "PRICE" },
  ];

  return (
    <div className="h-full w-full">
      <div className="w-full h-[90%] flex flex-col mt-[40px]">
        <div className="w-full border-b-[1px] px-[20px] flex justify-between">
          <div className="flex gap-[20px]">
            {filters.map((el, index) => {
              return (
                <button
                  value={el.label}
                  className="h-[50px] flex flex-col justify-between"
                  onClick={(e) => {
                    setStatusFilter(e.currentTarget.value);
                  }}
                  key={`f_${index}`}
                >
                  <p>{el.label}</p>
                  {el.label === statusFilter && (
                    <div className="h-[5px] w-full bg-[#2d2d2d] rounded-t-[3px]"></div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="gap-[20px] flex">
            <input
              className="text-[#9ca3af] pl-[15px] bg-[#f5f5f5] h-[40px] w-[200px] rounded-[6px] outline-none"
              type="text"
              onChange={(e) => {
                setFilter(e.currentTarget.value);
              }}
              placeholder="Search"
            />
            <Link
              href="/auth/invoices/create"
              className="text-white bg-[#2d2d2d] h-[40px] w-[200px] rounded-[6px] flex items-center justify-center"
            >
              Create invoice
            </Link>
          </div>
        </div>
        <div className="w-full h-[50px] px-[20px] flex items-center justify-between border-b-[1px]">
          {categories.map((category, index) => {
            return (
              <p
                key={`c_${index}`}
                className="w-[200px] text-[#2d2d2d] text-ellipsis text-nowrap overflow-hidden"
              >
                {category.label}
              </p>
            );
          })}
        </div>
        <div className="h-[80%] w-full overflow-y-scroll grow">
          {filteredInvoices.map((invoice: InvoiceType, index: number) => {
            return (
              <Link
                href={`/auth/invoices/${invoice.id}`}
                className="w-full h-[50px] border-b-[1px] flex justify-between px-[20px] items-center"
                key={`p_${index}`}
              >
                <div className="w-[200px] text-ellipsis text-nowrap overflow-hidden flex items-center gap-[10px]">
                  <span
                    style={{
                      backgroundColor:
                        invoice.status === "Completed"
                          ? "#91B57E"
                          : invoice.status === "In progress"
                          ? "#4DA2E7"
                          : invoice.status === "Rejected"
                          ? "#E22600"
                          : "#000000",
                    }}
                    className="h-[7px] w-[7px] rounded-[20px]"
                  ></span>
                  <p>{invoice.status}</p>
                </div>
                <p className="w-[200px] text-ellipsis text-nowrap overflow-hidden">
                  {invoice.title}
                </p>
                <p className="w-[200px] text-ellipsis text-nowrap overflow-hidden">
                  {invoice.details}
                </p>
                <p className="w-[200px] text-ellipsis text-nowrap overflow-hidden">
                  {invoice.type}
                </p>
                <p className="w-[200px] text-ellipsis text-nowrap overflow-hidden">
                  {invoice.price}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
