import { InjectQueue } from "@nestjs/bull";
import { Injectable } from "@nestjs/common";
import { Queue } from "bull";

@Injectable()
class GenerateReportProducerService {
    constructor(
        @InjectQueue('generate-report-queue') 
        private queue: Queue
    ) {}

    async generateReport(report: any) {
        await this.queue.add(
            'generate-report-job', report
        )
    }
}

export { GenerateReportProducerService };