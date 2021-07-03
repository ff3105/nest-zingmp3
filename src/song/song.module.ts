import { Module } from '@nestjs/common';
import { SongService } from './song.service';
import { SongController } from './song.controller';
import { ZingService } from '../services/ZingService';

@Module({
  controllers: [SongController],
  providers: [SongService, ZingService],
})
export class SongModule {}
