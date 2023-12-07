import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";
import { generatePdf } from "src/utils/generate-report/generate-report";

@Processor('generate-report-queue')
class GenerateReportConsumer {

    constructor() { }

    @Process('generate-report-job')
    async generateReportJobs(job: Job<any>) {
        try {
            console.log(job.data, 'data');
            const generatePdfFile = new generatePdf();
            generatePdfFile.generate(job.data);
        } catch (error) {
            console.log(error)
        }
    }
}

export { GenerateReportConsumer }