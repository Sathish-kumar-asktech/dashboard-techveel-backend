Insert Into TblStudentPayment
(
	Admissionid,
	PayType,
	PayMode,
	PaymentDate,
	PaidAmount,
	BalanceOnDate,
	prevBalance,
	Remarks,
	CreatedBy,
	CreatedDate
)
values 
(
	@Admissionid,
	@PayType,
	@PayMode,
	@PaymentDate,
	-- CONVERT(datetime, @PaymentDate, 120), 
	@PaidAmount,
	@BalanceOnDate,
	@prevBalance,
	@Remarks,
	@CreatedBy,
	Getdate()
)

SELECT SCOPE_IDENTITY() AS PaymentId