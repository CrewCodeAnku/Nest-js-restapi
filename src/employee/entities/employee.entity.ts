import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Department } from './department.entity';

export type EmployeeDocument = HydratedDocument<Employee>;

@Schema()
export class Employee {
  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  email_address: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Department' })
  department_id: Department;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);