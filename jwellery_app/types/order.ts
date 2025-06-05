// types/order.ts
export interface PreviousOrder {
  productId: string;
  quantity: number;
  price: number;
  orderDate: Date;
  status: "cancelled" | "delivered";
}

export interface Order {
  productId: string;
  quantity: number;
  price: number;
  orderDate: Date;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  previousOrders?: PreviousOrder[];
}
