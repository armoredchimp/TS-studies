type Status = 'warehouse' | 'shipped' | 'delivered';

class Order {
  id: string;
  productName: string;
  quantity: number;
  customerName: string;
  status: Status;
  constructor(
    id: string,
    productName: string,
    quantity: number,
    customerName: string,
    status: Status
  ) {
    this.id = id;
    this.productName = productName;
    this.quantity = quantity;
    this.customerName = customerName;
    this.status = status;
  }

  updateOrder() {
    this.id = '123';
    this.status = 'shipped';
  }
}

const Ball = new Order('01', 'Basketball', 16, 'Bill Johnson', 'warehouse');
Ball.updateOrder();

class ArrayWrapper<T> {
  private arr: T[];
  constructor(arr: T[]) {
    this.arr = arr;
  }

  addItem(item: T): void {
    this.arr.push(item);
  }

  getItem(index: number): T | undefined {
    return this.arr[index];
  }
}
