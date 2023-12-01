import { Injectable } from '@angular/core';
import { MedicalHistorySkeletalService } from './medical-history-skeletal/medical-history-skeletal.service';
import { MedicalHistoryIntegumentaryService } from './medical-history-integumentary/medical-history-integumentary.service';
import { MedicalHistoryMuscularService } from './medical-history-muscular/medical-history-muscular.service';
import { MedicalHistoryNervousService } from './medical-history-nervous/medical-history-nervous.service';
import { MedicalHistoryEndocrineService } from './medical-history-endocrine/medical-history-endocrine.service';
import { MedicalHistoryCardiovascularService } from './medical-history-cardiovascular/medical-history-cardiovascular.service';
import { MedicalHistoryLymphaticService } from './medical-history-lymphatic/medical-history-lymphatic.service';
import { MedicalHistoryRespiratoryService } from './medical-history-respiratory/medical-history-respiratory.service';
import { MedicalHistoryDigestiveService } from './medical-history-digestive/medical-history-digestive.service';
import { MedicalHistoryUrinaryService } from './medical-history-urinary/medical-history-urinary.service';
import { MedicalHistoryReproductiveService } from './medical-history-reproductive/medical-history-reproductive.service';

@Injectable({
  providedIn: 'root',
})
export class MedicalHistoryService {
  constructor(
    public skeletal: MedicalHistorySkeletalService,
    public integumentary: MedicalHistoryIntegumentaryService,
    public muscular: MedicalHistoryMuscularService,
    public nervous: MedicalHistoryNervousService,
    public endocrine: MedicalHistoryEndocrineService,
    public cardiovascular: MedicalHistoryCardiovascularService,
    public lymphatic: MedicalHistoryLymphaticService,
    public respiratory: MedicalHistoryRespiratoryService,
    public digestive: MedicalHistoryDigestiveService,
    public urinary: MedicalHistoryUrinaryService,
    public reproductive: MedicalHistoryReproductiveService
  ) {}
}
