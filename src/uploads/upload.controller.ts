import { Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import {UploadService} from '././upload.service';
import { FileInterceptor } from "@nestjs/platform-express";
import { UploadDto } from "./Dto/upload.dto";

@Controller('upload')
export class  UploadController{
    constructor(private readonly uploadService:UploadService){}

    @Post('/')
    @UseInterceptors(FileInterceptor('file')) //vai salvar muito trablaho, tem qualse todas as coniig feitas
    //'file' umas das principais configurações, define um caminho para onde o arquivo vai
    async uploadFile(@UploadedFile() file: UploadDto ) {
        console.log(file);
        
    }
}