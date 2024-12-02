import { OrderType } from "@/types/orders";

export default function Orders({ orders }: { orders: OrderType[] }) {
  return (
    <div className="w-full h-[50%] border-[1px] rounded-[10px] p-[20px] flex flex-col">
      <span className="text-[23px] font-[600]">Last Orders</span>
      <div className="w-full h-[50px] flex items-center justify-between text-[15px] font-[400] border-y-[1px] mt-[30px]">
        <span className="w-[200px]">STATUS</span>
        <span className="w-[200px]">TITLE</span>
        <span className="w-[200px]">PRICE</span>
      </div>
      <div className="w-full h-[70%] overflow-y-scroll">
        {orders.map((order, index: number) => {
          return (
            <div
              className="flex justify-between h-[50px] w-full border-b-[1px] items-center"
              key={index}
            >
              <span className="w-[200px] overflow-hidden text-nowrap text-ellipsis">
                {order.status}
              </span>
              <span className="w-[200px] overflow-hidden text-nowrap text-ellipsis">
                {order.title}
              </span>
              <span className="w-[200px] overflow-hidden text-nowrap text-ellipsis">
                {order.price}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
