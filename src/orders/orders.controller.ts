import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';
import { ORDERS_SERVICE } from 'src/config';
import { CreateOrderDto } from './dto';

@Controller('orders')
export class OrdersController {
  constructor(@Inject(ORDERS_SERVICE) private readonly ordersClient: ClientProxy) { }

  @Post()
  createOrder(@Body() createOrder: CreateOrderDto) {
    console.log(createOrder)
    return this.ordersClient.send('createOrder', createOrder);
  }

  @Get()
  findAllOrders() {
    return this.ordersClient.send('findAllOrders', {});
  }

  @Get(':id')
  async findOneOrder(@Param('id') id: string) {
    return this.ordersClient.send('findOneOrder', { id: id })
      .pipe(catchError(error => { throw new RpcException(error) }));
  }
}
