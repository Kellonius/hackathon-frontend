import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { APIService } from 'src/app/services/medical-professional/api.service';

@Component({
  selector: 'app-medical-professional-patient-list',
  templateUrl: './medical-professional-patient-list.component.html',
  styleUrls: ['./medical-professional-patient-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class MedicalProfessionalPatientListComponent implements OnInit {
  columns = ['Name', 'DOB', 'Gender', 'Risk'];

  columns2 = ['Drug Name', 'Dose', 'Frequency', 'Issue Date', 'Filled', 'Picked Up'];

  expandedElement: Script | null;

  patientList = [
    {
      Name: 'Bob Ross',
      DOB: '4/21/1970',
      Gender: 'Male',
      Risk: 'Yes',
      scripts: [
        {
          drugName: 'drugNameTest1',
          dose: 'doseTest1',
          frequency: 'frequencyTest1',
          issueDate: 'issueDateTest1',
          filled: true,
          pickedUp: false
        }
      ]
    }, 
    {
      Name: 'Jimothy Ross',
      DOB: '7/21/1970',
      Gender: 'Female',
      Risk: 'No',
      scripts: [
        {
          drugName: 'drugNameTest2',
          dose: 'doseTest2',
          frequency: 'frequencyTest2',
          issueDate: 'issueDateTest2',
          filled: false,
          pickedUp: true
        },
        {
          drugName: 'drugNameTest3',
          dose: 'doseTest3',
          frequency: 'frequencyTest3',
          issueDate: 'issueDateTest3',
          filled: false,
          pickedUp: false
        }
      ]
    }
  ];


  // {
  //   drugName: 'drugNameTest',
  //   dose: 'doseTest',
  //   frequency: 'frequencyTest',
  //   issueDate: 'issueDateTest'
  // },
  // {
  //   drugName: 'drugNameTest2',
  //   dose: 'doseTes2t',
  //   frequency: 'frequencyTest2',
  //   issueDate: 'issueDateTest2'
  // },

  constructor(private apiService: APIService) { }

  ngOnInit() {
  }

  setData(value: string): boolean {
    if (value === 'notification' || value === 'renewal') {
      return false;
    }
  }
}


export interface Script {
  drugName: string;
  dose: number;
  frequency: number;
  issueDate: string;
  filled: boolean;
  pickedUp: boolean;
}
