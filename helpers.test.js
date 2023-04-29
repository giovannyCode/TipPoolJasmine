describe("Helper  test ", function() {

  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value= 20;
    submitPaymentInfo();
    billAmtInput.value = 400;
    tipAmtInput.value= 60;
    submitPaymentInfo();
  });
  
  it('should add up bill total Amount, tipAmt and tipPercent tests sumPaymentTotal method ', function () {

    expect(sumPaymentTotal('billAmt')).toEqual(500); 
    expect(sumPaymentTotal('tipAmt')).toEqual(80); 
    expect(sumPaymentTotal('tipPercent')).toEqual(35);
    
    });

  it('should get the  percentage of tip given in %', function () {
     expect(calculateTipPercent(400, 80)).toEqual(20);
     expect(calculateTipPercent(100, 20)).toEqual(20);
     expect(calculateTipPercent(200, 10)).toEqual(5);
 
 });

 it('tests appendTd expects a table row element, appends a newly created td element from the value', function () {
   let tr = document.createElement("tr");
   appendTd(tr, "Test");
   expect(tr.firstChild.innerText).toEqual("Test");

 });
 

 it('should append a Td  with and X as a inner text appendDeleteBtn() ', function () {
  let tr = document.createElement("tr");
  appendDeleteBtn(tr)
  expect(tr.firstChild.innerText).toEqual("X");

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
