import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Department, DepartmentDocument } from './entities/department.entity';

@Injectable()
export class EmployeeService {

  constructor(@InjectModel(Employee.name) private employeeModel: Model<Employee>, @InjectModel(Department.name) private departmentModel: Model<DepartmentDocument>,) {}

  create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const createdEmployee = new this.employeeModel(createEmployeeDto);
    return createdEmployee.save();
  }

  findAll(): Promise<Employee[]> {
    return this.employeeModel.find().populate('department_id', '', this.departmentModel).exec();
  } 

  update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeModel.findByIdAndUpdate({_id:id},{...updateEmployeeDto})
  }
}
