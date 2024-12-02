"use client";
import { InvoiceType } from "@/types/invoices";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

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
    { label: "TYPE" },
    { label: "PRICE" },
  ];

  return (
    <div className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.filters}>
            {filters.map((el, index) => {
              return (
                <button
                  value={el.label}
                  onClick={(e) => {
                    setStatusFilter(e.currentTarget.value);
                  }}
                  key={`f_${index}`}
                >
                  <p>{el.label}</p>
                  {el.label === statusFilter && <div></div>}
                </button>
              );
            })}
          </div>

          <div className={styles.utils}>
            <input
              type="text"
              onChange={(e) => {
                setFilter(e.currentTarget.value);
              }}
              placeholder="Search"
            />
            <Link href="/auth/invoices/create">Create invoice</Link>
          </div>
        </div>
        <div className={styles.categories}>
          {categories.map((category, index) => {
            return <p key={`c_${index}`}>{category.label}</p>;
          })}
        </div>
        <div className={styles.projectsWrapper}>
          {filteredInvoices.map((invoice, index: number) => {
            return (
              <Link href={`/auth/invoices/${invoice.id}`} key={`p_${index}`}>
                <div className={styles.status}>
                  <span
                    style={{
                      backgroundColor:
                        invoice.status === "Completed"
                          ? "#688B58"
                          : invoice.status === "In progress"
                          ? "#4DA2E7"
                          : invoice.status === "Rejected"
                          ? "#C11730"
                          : "#2d2d2d",
                    }}
                  ></span>
                  <p>{invoice.status}</p>
                </div>
                <p>{invoice.title}</p>
                <p>{invoice.type}</p>
                <p>{invoice.price}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
