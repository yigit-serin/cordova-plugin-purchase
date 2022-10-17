namespace CdvPurchase {
    export namespace Test {
        export class Adapter implements CdvPurchase.Adapter {
            id = Platform.TEST;
            name = 'Test';
            products: Product[] = [];
            receipts: Receipt[] = [];
            async initialize(): Promise<IError | undefined> { return; }
            async load(products: IRegisterProduct[]): Promise<(Product | IError)[]> {
                return products.map(p => ({ code: ErrorCode.PRODUCT_NOT_AVAILABLE, message: 'TODO' } as IError));
            }
            async order(offer: Offer): Promise<undefined | IError> {
                return {
                    code: ErrorCode.UNKNOWN,
                    message: 'TODO: Not implemented'
                } as IError;
            }
            async finish(transaction: Transaction): Promise<undefined | IError> {
                return {
                    code: ErrorCode.UNKNOWN,
                    message: 'TODO: Not implemented'
                } as IError;
            }
            receiptValidationBody(receipt: Receipt): Validator.Request.Body | undefined {
                return;
            }
            async handleReceiptValidationResponse(receipt: Receipt, response: Validator.Response.Payload): Promise<void> {
                return;
            }
            async requestPayment(payment: PaymentRequest, additionalData?: CdvPurchase.AdditionalData): Promise<undefined | IError> {
                return storeError(ErrorCode.UNKNOWN, 'requestPayment not supported');
            }
        }
    }
}
