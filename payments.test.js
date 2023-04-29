describe("Payment  test (with setup and tear-down)", function() {
  
  beforeEach(function () {
    // initialization logic
   
    billAmtInput.value = 100;
    tipAmtInput.value= 20;
    submitPaymentInfo();
    billAmtInput.value = 400;
    tipAmtInput.value= 60;
    submitPaymentInfo(); 

  });


  it('should add a  new payments  on submitPaymentInfo()', function () {
     expect(Object.keys(allPayments).length).toEqual(2);
  
  });


 it('should add a new payment to allPayments on submitPaymentInfo() ', function () {
   
   expect(Object.keys(allPayments).length).toEqual(2);
    expect(allPayments['payment1'].billAmt).toEqual('100');
    expect(allPayments['payment1'].tipAmt).toEqual('20');
    expect(allPayments['payment1'].tipPercent).toEqual(20);
    expect(allPayments['payment2'].billAmt).toEqual('400');
    expect(allPayments['payment2'].tipAmt).toEqual('60');
   expect(allPayments['payment2'].tipPercent).toEqual(15);

    
 }); 
 it('should not add a new payment on submitPaymentInfo() with empty input', function () {
  billAmtInput.value = '';
  submitPaymentInfo();
  expect(Object.keys(allPayments).length).toEqual(2);
});

it('should payment update #paymentTable on appendPaymentTable()', function () {

  let curTdList = document.querySelectorAll('#paymentTable tbody tr td');
  expect(curTdList.length).toEqual(8);
  expect(curTdList[0].innerText).toEqual('$100');
  expect(curTdList[1].innerText).toEqual('$20');
  expect(curTdList[2].innerText).toEqual('20%');
  expect(curTdList[3].innerText).toEqual('X');
  expect(curTdList[4].innerText).toEqual('$400');
  expect(curTdList[5].innerText).toEqual('$60');
  expect(curTdList[6].innerText).toEqual('15%');
  expect(curTdList[7].innerText).toEqual('X');
});

it('should not create payment with empty input on createCurPayment()', function () {
  billAmtInput.value = '';
  tipAmtInput.value = '';
  let curPayment = createCurPayment();

  expect(curPayment).toEqual(undefined);
});

it('should create a new payment on createCurPayment()', function () {
  billAmtInput.value = 400;
  tipAmtInput.value= 60;

  let expectedPayment = {
    billAmt: '400',
    tipAmt: '60',
    tipPercent: 15,
  }

  expect(createCurPayment()).toEqual(expectedPayment);

  billAmtInput.value = '';
  tipAmtInput.value= '';

});
  afterEach(function() {
     allPayments = {};
     paymentId = 0;

     while(paymentTbody.hasChildNodes())
     {
      paymentTbody.removeChild(paymentTbody.firstChild);
     }

     let shiftSummary =  document.getElementById("summaryTable").querySelector("tbody");

     while(shiftSummary.hasChildNodes())
     {
       shiftSummary.removeChild(shiftSummary.firstChild);
     }
     
     

  });
});
