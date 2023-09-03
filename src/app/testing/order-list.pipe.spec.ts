import { OrderListPipe } from '../shared/pipe/order-list.pipe';

describe('OrderListPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderListPipe();
    expect(pipe).toBeTruthy();
  });
});
