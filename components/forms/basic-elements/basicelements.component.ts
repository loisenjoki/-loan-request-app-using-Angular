import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import {RestApiService} from '../../../_services/rest-api.service';
import {TokenStorageService} from '../../../_services/token-storage.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastData, ToastOptions, ToastyService} from 'ng2-toasty';





@Component({
  selector: 'app-basic-elements',
  templateUrl: './basic-elements.component.html',
  styleUrls: ['./basic-elements.component.scss']
})
export class BasicelementsComponent implements OnInit {
  constructor(
    public restApi: RestApiService,
    public router: Router,
    private tokenStorageService: TokenStorageService,
    private modalService: NgbModal,
    private toastyService: ToastyService

  ) {
  }
  position = 'bottom-right';
  isLoggedIn = false;
  userID: number;
  intrest: number;
  result: number;
  month: number;
  capital: number;
  data: any = {};
  // const for dialog
  closeResult: string;
  @Input() loanDetails = {
    users_id: this.userID = this.tokenStorageService.getUser().user.id, business: '', description: '', amount: null,
    term: null, grade: 'A', interest_rate: 8,    payment: 0
  };

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit() {
    if (this.tokenStorageService.getTokens()) {
      this.isLoggedIn = true;
      const user = this.tokenStorageService.getUser();
      this.userID = this.tokenStorageService.getUser().user.id;
      console.log(this.userID);

    }
  }
// calculate loan amortization
  calInstallment(): void {
    // Calculate montly pay.
    this.intrest = 8 / 100;
    this.month = this.loanDetails.term;
    this.capital = this.loanDetails.amount;
    // tslint:disable-next-line:max-line-length
    this.result = this.intrest / 12 * Math.pow(1 + this.intrest / 12, this.month) / (Math.pow(1 + this.intrest / 12, this.month) - 1) * this.capital;

    this.data = {
      users_id: this.userID = this.tokenStorageService.getUser().user.id,
      business: this.loanDetails.business,
      description: this.loanDetails.description,
      amount: this.loanDetails.amount,
      term: this.loanDetails.amount,
      grade: 'A',
      interest_rate: 8,
      payment: this.result
    };
    console.log('%%%%%%%%%%%', this.data);

    // return this.result;
  }
  // Loan request submition
  addLoan(): void {
    this.restApi.createloanRequest(this.data).subscribe((data: {}) => {
      this.router.navigate(['/dashboard']);
      console.log('>>>>>>>>>', this.loanDetails);
      // calInstallment();
      this.modalService.dismissAll();
      // tslint:disable-next-line:max-line-length
    });

  }
     addToast(options) {
      if (options.closeOther) {
        this.toastyService.clearAll();
      }
      this.position = options.position ? options.position : this.position;
      const toastOptions: ToastOptions = {
        title: options.title,
        msg: options.msg,
        showClose: options.showClose,
        timeout: options.timeout,
        theme: options.theme,
        onAdd: (toast: ToastData) => {
          console.log('Toast ' + toast.id + ' has been added!');
        },
        onRemove: (toast: ToastData) => {
          console.log('Toast ' + toast.id + ' has been added removed!');
        }
      };

      switch (options.type) {
        case 'default':
          this.toastyService.default(toastOptions);
          break;
        case 'info':
          this.toastyService.info(toastOptions);
          break;
        case 'success':
          this.toastyService.success(toastOptions);
          break;
        case 'wait':
          this.toastyService.wait(toastOptions);
          break;
        case 'error':
          this.toastyService.error(toastOptions);
          break;
        case 'warning':
          this.toastyService.warning(toastOptions);
          break;
      }
    }
}
