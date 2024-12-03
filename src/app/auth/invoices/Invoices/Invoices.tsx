"use client";
import { InvoiceType } from "@/types/invoices";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import useWidth from "@/utils/useWidth";

export default function Invoices({ invoices }: { invoices: InvoiceType[] }) {
  const [statusFilter, setStatusFilter] = useState("All");
  const [statusedInvoices, setStatusedInvoices] = useState<InvoiceType[]>([]);
  const [filter, setFilter] = useState("");
  const [filteredInvoices, setFilteredInvoices] = useState<InvoiceType[]>([]);

  const width = useWidth();

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
          {width < 1024 && (
            <div className={styles.filter}>
              <button>Filter</button>
            </div>
          )}
          {width > 1024 && (
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
          )}

          <div className={styles.utils}>
            {width < 1024 && (
              <button className={styles.openSearch} type="button">
                &#x1F50D;
              </button>
            )}
            {width > 1024 && (
              <input
                type="text"
                onChange={(e) => {
                  setFilter(e.currentTarget.value);
                }}
                placeholder="Search"
              />
            )}

            <Link href="/auth/invoices/create">+</Link>
          </div>
        </div>
        <div className={styles.categories}>
          {width < 1024 && (
            <>
              <p>{categories[0].label}</p>
              <p>{categories[1].label}</p>
            </>
          )}

          {width >= 1024 &&
            categories.map((category, index) => {
              return <p key={index}>{category.label}</p>;
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

                {width > 1024 && (
                  <>
                    <p>{invoice.type}</p>
                    <p>{invoice.price}</p>
                  </>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
