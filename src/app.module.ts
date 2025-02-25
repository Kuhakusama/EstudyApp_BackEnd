import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { UploadModule } from './uploads/upload.module';
import { QuestionsModule } from './questions/questions.module';
import { MateriasModule } from './materias/materias.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://DaviFernandes:y29QtotEFyPYjrXD@curumin0.ac9jtxi.mongodb.net/Estuda-Curumim'),
    UsersModule,
    UploadModule,
    QuestionsModule,
    MateriasModule,
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
