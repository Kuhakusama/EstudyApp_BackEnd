import { Controller, Get, Param,  } from '@nestjs/common'; //Body,HttpCode,Post,HttpStatus
import { QuestionsService } from './questions.service';
import { Questao } from 'src/schemas/Question.schema';
//import { QuestionDto } from './Dto/Questions.dto';

@Controller('questaos')
export class QuestionsController {

    constructor (private questionsService: QuestionsService) {}

    @Get(':tags')
    async findAll(@Param('Tags') Tags: string): Promise<Questao[]> {
        return this.questionsService.findAllQuestionsBySubject(Tags);
    }
    /*@Post('create')
    @HttpCode(HttpStatus.CREATED) //retorna um codigo de verficação de uma sequencia logica, No caso retorna o codigo 201
    async createQuestoin(@Body() questaoDto: QuestionDto) {
      return this.questionsService.createQuestion(questaoDto);
    }
    */
    @Get()
    getUsers(){
        return this.questionsService.getUsers();
    }


}
