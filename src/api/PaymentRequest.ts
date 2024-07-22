export class PaymentRequest {
  userName: string;
  pendingBillsAmount: number;
  totalAmount: number;

  constructor(userName: string, pendingBillsAmount: number, totalAmount: number) {
    this.userName = userName;
    this.pendingBillsAmount = pendingBillsAmount;
    this.totalAmount = totalAmount;
  }

  static blank() {
    return new PaymentRequest('', 0, 0);
  }
}
