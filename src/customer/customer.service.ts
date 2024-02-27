import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Customer } from './entities/customer.entity';
import { CreateCustomerInput } from './dto/create-customer.input';
import { Prisma } from '@prisma/client';
import { UpdateCustomerInput } from './dto/update-customer.input';

@Injectable()
export class CustomerService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCustomerInput: CreateCustomerInput) {
    const customer = await this.prisma.customer.create({
      data: {
        customerName: createCustomerInput.customerName,
        email: createCustomerInput.email,
        mobileNo: createCustomerInput.mobileNo,
        creditLimit: new Prisma.Decimal(createCustomerInput.creditLimit),
      },
    });

    return {
      customer,
    };
  }

  async update(updateCustomerInput: UpdateCustomerInput): Promise<Customer> {
    try {
      await this.prisma.customer.update({
        where: { id: updateCustomerInput.id },
        data: {
          customerName: updateCustomerInput.customerName,
          email: updateCustomerInput.email,
          isBlocked: updateCustomerInput.isBlocked,
          creditLimit: updateCustomerInput.creditLimit,
          mobileNo: updateCustomerInput.mobileNo,
        },
      });
      return this.findOne(updateCustomerInput.id);
    } catch (_) {
      throw new NotFoundException('Customer not found');
    }
  }

  async findAll(): Promise<Customer | any> {
    return await this.prisma.customer.findMany();
  }

  async findOne(id: number): Promise<any> {
    const customer = await this.prisma.customer.findUnique({ where: { id } });
    return customer;
  }

  async remove(id: number): Promise<string> {
    try {
      await this.prisma.customer.delete({ where: { id } });
      return 'Product deleted successfully';
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
