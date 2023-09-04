import { OrderListPipe } from '../shared/pipe/order-list.pipe';
import * as mockRaw from '../data/tracks.json'
import { TrackModel } from '@core/models/tracks.model';

describe('OrderListPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderListPipe();
    expect(pipe).toBeTruthy();
  });

  it('testing input and output values', () => {
    //Arrange
    const pipe = new OrderListPipe();
    const { data }: any = (mockRaw as any).default
    
    //Act
    const result: TrackModel[] = pipe.transform(data)
    
    //Assert
    expect(result).toEqual(data)


  })

  it('testing if sorted in ascending order', () => {
    //Arrange
    const pipe = new OrderListPipe();
    const { data }: any = (mockRaw as any).default
    const firstValue = data.find((id: any) => id._id === 4)
    const lastValue = data.find((id: any) => id._id === 9)

    //Act
    const result: TrackModel[] = pipe.transform(data, 'name', 'asc')
    const firstResult = result[0]
    const lastResult = result [result.length -1]

    //Assert
    expect(firstResult).toEqual(firstValue)
    expect (lastResult).toEqual(lastResult)
    
  })

   it('testing if sorted in descencing order', () => {
    //Arrange
    const pipe = new OrderListPipe();
    const { data }: any = (mockRaw as any).default
    const firstValue = data.find((id: any) => id._id === 4)
    const lastValue = data.find((id: any) => id._id === 9)

    //Act
    const result: TrackModel[] = pipe.transform(data, 'name', 'desc')
    const firstResult = result[0]
    const lastResult = result [result.length -1]

    //Assert
    expect(firstResult).toEqual(lastValue)
    expect (lastResult).toEqual(firstValue)
    
  })
});
