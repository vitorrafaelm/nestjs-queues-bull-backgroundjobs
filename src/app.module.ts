import { Module } from '@nestjs/common';
import { GenerateReportControllerController } from 
'./controller/generate-report-controller/generate-report-controller.controller';
import { BullModule } from '@nestjs/bull';
import { GenerateReportConsumer } from './jobs/generate-report-producer-service/generate-report-consumer';
import { GenerateReportProducerService } from './jobs/generate-report-producer-service/generate-report-producer-service';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost', 
        port: 6379,      } 
    }),
    BullModule.registerQueue({
      name: 'generate-report-queue', 
      defaultJobOptions: {
        attempts: 2, 
        delay: 10000
      }
    }),
  ],
  controllers: [GenerateReportControllerController],
  providers: [GenerateReportProducerService, GenerateReportConsumer],
})
export class AppModule {}
