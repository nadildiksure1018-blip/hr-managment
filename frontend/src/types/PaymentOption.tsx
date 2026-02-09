export type PaymentOption =
  | { 
        method: "cash"; 
        cash: { 
            cashDrawer: boolean 
            // if cash drawer is true, then the payment will be recorded in the cash drawer
        } 
    }
 | { 
        method: "cheque";
        cheque: {
            payee: string;
            realizeDate: string;
            chequeNo: string;
            bankAccountNo: string;
            //need to add bank acount details here as well
        };
    }
  | {
        method: "bank";
        bank: {
            proofFile: File[] | null;
            bankAccountNo: string;
            //need to add bank account details here as well
        };
    };
