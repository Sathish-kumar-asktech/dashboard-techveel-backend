Update TblStudentPayment
SET 
-- Admissionid = @Admissionid, 
-- PayType = @PayType, 
-- PayMode = @PayMode, 
-- PaymentDate = @PaymentDate, 
PaidAmount = @PaidAmount, 
Remarks = @Remarks, 
BalanceOnDate = @BalanceOnDate,
ModifyedBy = @ModifyedBy, 
ModifyedDate = Getdate()
WHERE PaymentId = @PaymentId