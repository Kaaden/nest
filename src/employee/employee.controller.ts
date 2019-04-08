import { Get, Controller, Param,Post,Body } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from '../entities/employee.entity';
class CreateCatDto{
 readonly id:number
}
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  root(): string {
    console.log(123);
    return this.employeeService.root();
  }

  @Post('findOne')
//   : Promise<Employee>
  async findOne(@Body() createCatDto: CreateCatDto): Promise<Employee> {
    console.log(createCatDto);
    let id=Number(createCatDto.id)
    return this.employeeService.findOne(id);
  }

  @Get('create')
  async create(): Promise<string> {
    console.log('1323');
    return this.employeeService.create();
  }
}
