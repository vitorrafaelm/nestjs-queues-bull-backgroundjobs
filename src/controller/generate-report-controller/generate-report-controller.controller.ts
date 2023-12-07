import { Body, Controller, Post } from '@nestjs/common';
import { GenerateReportProducerService } from 'src/jobs/generate-report-producer-service/generate-report-producer-service';

@Controller('generate-report-controller')
export class GenerateReportControllerController {

    constructor(private generateReportProducer: GenerateReportProducerService) {}

    @Post()
    async generateReport(@Body() body: any) {
        this.generateReportProducer.generateReport(body);
        return body
    }
}
