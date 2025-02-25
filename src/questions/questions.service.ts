import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Questao } from 'src/schemas/Question.schema';
//import { QuestionDto } from './Dto/Questions.dto';

@Injectable()
export class QuestionsService {
    private readonly logger = new Logger(QuestionsService.name);

    constructor(@InjectModel(Questao.name) private  questionModel: Model<Questao>) {}
    
    async findAllQuestionsBySubject(Tags: string): Promise<Questao[]> {
        try {
            const results = await this.questionModel.find({ Tags }).exec();
            this.logger.log(`Dados retornados para a tag '${Tags}': ${JSON.stringify(results)}`);
            return results;
        } catch (error) {
            this.logger.error(`Erro ao buscar questões pela tag '${Tags}': ${error.message}`, error.stack);
            throw new Error('Erro ao buscar questões pela tag especificada');
        }
    }
    getUsers() {
        return this.questionModel.find()
    }
    
}
