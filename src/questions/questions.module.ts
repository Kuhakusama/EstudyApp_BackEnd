import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestaoSchema, Questao } from 'src/schemas/Question.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
        name: Questao.name,
        schema: QuestaoSchema,
    }])
],
  providers: [QuestionsService],
  controllers: [QuestionsController]
})
export class QuestionsModule {}
