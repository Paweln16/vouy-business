"use client";
import { OrderType } from "@/types/orders";
import useWidth from "@/utils/useWidth";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export default function Orders({ orders }: { orders: OrderType[] }) {
  const [statusFilter, setStatusFilter] = useState("All");
  const [statusedOrders, setStatusedOrders] = useState(orders);
  const [filter, setFilter] = useState("");
  const [filteredOrders, setFilteredOrders] = useState(orders);

  const width = useWidth();

  useEffect(() => {
    if (statusFilter === "All") {
      setStatusedOrders(orders);
    } else {
      const statused = orders.filter((order) => {
        return order.status.toLowerCase().includes(statusFilter.toLowerCase());
      });
      setStatusedOrders(statused);
    }
  }, [statusFilter, orders]);

  useEffect(() => {
    const filtered = statusedOrders.filter((order) => {
      return order.title.toLowerCase().includes(filter.toLowerCase());
    });
    setFilteredOrders(filtered);
  }, [filter, statusedOrders]);

  const filters = [
    { label: "All" },
    { label: "In progress" },
    { label: "Completed" },
    { label: "Pending" },
    { label: "Rejected" },
  ];

  const categories = [
    { label: "STATUS" },
    { label: "TITLE" },
    { label: "DETAILS" },
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

            <Link href="/auth/orders/create">+</Link>
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
          {filteredOrders.map((order, index: number) => {
            return (
              <Link href={`/auth/orders/${order.id}`} key={`p_${index}`}>
                <div className={styles.status}>
                  <span
                    style={{
                      backgroundColor:
                        order.status === "Completed"
                          ? "#688B58"
                          : order.status === "In progress"
                          ? "#4DA2E7"
                          : order.status === "Rejected"
                          ? "#C11730"
                          : "#2d2d2d",
                    }}
                  ></span>
                  <p>{order.status}</p>
                </div>
                <p>{order.title}</p>

                {width > 1024 && (
                  <>
                    <p>{order.details}</p>
                    <p>{order.price}</p>
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
