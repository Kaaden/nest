import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company, Employee } from '../entities';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}
  root(): string {
    return 'Hello World!';
  }
  async create(): Promise<string> {
    let employee = new Employee();
    let company = new Company();
    company.name = 'asc';
    employee.title = 'novak';
    // employee.age = 20;
    // employee.address = 'shanghai';
    employee.company = company;

    return this.employeeRepository
      .save(employee)
      .then(res => {
        return 'create employee ...done';
      })
      .catch(err => {
        return err;
      });
  }

  async findOne(id: number): Promise<Employee> {
    return await this.employeeRepository.query(
      `SELECT * FROM contents WHERE id=${id}`,
    );
  }
}
