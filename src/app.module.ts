import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { Employee, EmployeeSchema } from './employee/entities/employee.entity';
import { Department, DepartmentSchema } from './employee/entities/department.entity';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/restApi'),
    MongooseModule.forFeature([
      { name: Employee.name, schema: EmployeeSchema },
      { name: Department.name, schema: DepartmentSchema },
    ]),
    EmployeeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
