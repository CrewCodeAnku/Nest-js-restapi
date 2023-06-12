import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EmployeeDocument = HydratedDocument<Employee>;

@Schema()
export class Employee {
  @Prop()
  first_name: string;

  @Prop()
  email_address: string;

  @Prop()
  department_id: string;
}

export const CatSchema = SchemaFactory.createForClass(Employee);