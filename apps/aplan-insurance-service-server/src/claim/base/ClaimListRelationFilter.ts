/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ClaimWhereInput } from "./ClaimWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ClaimListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ClaimWhereInput,
  })
  @ValidateNested()
  @Type(() => ClaimWhereInput)
  @IsOptional()
  @Field(() => ClaimWhereInput, {
    nullable: true,
  })
  every?: ClaimWhereInput;

  @ApiProperty({
    required: false,
    type: () => ClaimWhereInput,
  })
  @ValidateNested()
  @Type(() => ClaimWhereInput)
  @IsOptional()
  @Field(() => ClaimWhereInput, {
    nullable: true,
  })
  some?: ClaimWhereInput;

  @ApiProperty({
    required: false,
    type: () => ClaimWhereInput,
  })
  @ValidateNested()
  @Type(() => ClaimWhereInput)
  @IsOptional()
  @Field(() => ClaimWhereInput, {
    nullable: true,
  })
  none?: ClaimWhereInput;
}
export { ClaimListRelationFilter as ClaimListRelationFilter };
